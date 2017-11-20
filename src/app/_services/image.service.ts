import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Sublease } from '../_models/sublease';
import { environment } from '../../environments/environment';
import { AWSError } from 'aws-sdk/lib/error';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {
    constructor() { }
    private getS3(): S3 {
        AWS.config.update({
            region: 'us-east-1',
            credentials: new AWS.Credentials(environment['S3_ACCESS_ID'], environment['S3_ACCESS_KEY'])
        });

        const clientParams: S3.ClientConfiguration = {
            apiVersion: '2016-03-01',
            params: { Bucket: 'sublettr-images' }
        };
        const aws = <any>AWS;
        aws.config.credentials.get(function() {

            // Credentials will be available when this function is called.
            const accessKeyId = AWS.config.credentials.accessKeyId;
            const secretAccessKey = AWS.config.credentials.secretAccessKey;
            const sessionToken = AWS.config.credentials.sessionToken;
        });
        return new S3(clientParams);
    }

    public getPhoto(sublease: Sublease) {
        if (sublease.imageUrl) {
            return sublease.imageUrl;
        }
        return 'assets/images/no-photo.png';
    }

    public uploadSubletImage(sublease: Sublease, imageList: FileList) {
        return new Promise((resolve, reject) => {
            const albumName = `${sublease.email}-${sublease.address}`;
            try {
                this.createAlbum(albumName);
            } catch (err) {
                console.log(err);
            }
            for (let i = 0; i < imageList.length; i++) {
                this.addPhoto(albumName, imageList[i])
                    .then(url => {
                        sublease.imageUrl = url;
                        resolve(sublease);
                    })
                    .catch(err => reject(err));
            }

        });
    }

    private createAlbum(albumName: string) {
        const sublettrS3: S3 = this.getS3();
        albumName = albumName.trim();
        const albumKey = `${encodeURIComponent(albumName)}/`;
        return sublettrS3.headObject({
            Key: albumKey,
            Bucket: 'sublettr-images'
        }, function(err, data) {
            if (err && err.code !== 'NotFound') {
                throw err;
            }
            sublettrS3.putObject({ Key: albumKey, Bucket: 'sublettr-images' }, function(err, data) {
                if (err) {
                    throw new Error(`Error creating album: ${err.message}`);
                }
            });

        });
    }

    private addPhoto(albumName: string, file: any): any {
        return new Promise((resolve, reject) => {
            const albumPhotosKeys = `${encodeURIComponent(albumName)}/`;

            const photoKey: string = albumPhotosKeys + encodeURIComponent(file.name);
            this.getS3().upload({
                Key: photoKey,
                Body: file,
                ACL: 'public-read',
                Bucket: 'sublettr-images'
            }, function(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data.Location);
            });
        });
    }

    public updateSubletImage(sublease: Sublease, imageList: FileList) {
        return this.deletePhoto(sublease.imageUrl)
            .then(this.uploadSubletImage(sublease, imageList));
    }

    private deletePhoto(imageUrl: string): any {
        const s3: S3 = this.getS3();
        const photoKey = imageUrl.replace('https://s3.amazonaws.com/sublettr-images/', '');
        return s3.deleteObject({
            Key: photoKey,
            Bucket: 'sublettr-images'
            })
            .promise();
    }
}
