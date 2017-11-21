import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Sublease } from '../_models/sublease';
import { environment } from '../../environments/environment';

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

    public uploadSubletImages(sublease: Sublease, imageList: FileList) {
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
}
