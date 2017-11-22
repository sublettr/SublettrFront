import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Sublease } from '../_models/sublease';
import { environment } from '../../environments/environment';
import { AWSError } from 'aws-sdk/lib/error';
import { Observable } from 'rxjs/Observable';
import { HeadObjectOutput, PutObjectOutput, UploadPartOutput, PutObjectRequest, DeleteObjectOutput } from 'aws-sdk/clients/s3';

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

    public uploadSubletImage(sublease: Sublease, imageList: FileList): Observable<Sublease> {
        const albumName = `${sublease.email}-${sublease.address}`;

        const uploadPromise: Promise<Sublease> = new Promise((resolve, reject) =>  {
            this.createAlbum(albumName)
            .then(() => this.addPhoto(albumName, imageList[0]))
            .then((url: string) => {
                sublease.imageUrl = url;
                resolve(sublease);
            })
            .catch(err => reject(err));
        });

        return Observable.fromPromise(uploadPromise);
    }

    private createAlbum(albumName: string) {
        const sublettrS3: S3 = this.getS3();
        albumName = albumName.trim();
        const albumKey = `${encodeURIComponent(albumName)}/`;

        return sublettrS3.putObject({ Key: albumKey, Bucket: 'sublettr-images' })
            .promise()
            .then((data: PutObjectOutput) => console.log(data))
            .catch((err: AWSError) => {
                throw new Error(`Error creating album: ${err.message}`);
            });
    }

    private addPhoto(albumName: string, file: any): Promise <string> {
        return new Promise<string>((resolve, reject) => {
            const albumPhotosKeys = `${encodeURIComponent(albumName)}/`;

            const photoKey: string = albumPhotosKeys + encodeURIComponent(file.name);
            const uploadParams: PutObjectRequest = {
                Key: photoKey,
                Body: file,
                ACL: 'public-read',
                Bucket: 'sublettr-images'
            };
            this.getS3().upload(uploadParams)
                .promise()
                .then((data: S3.ManagedUpload.SendData ) => resolve(data.Location))
                .catch((err: AWSError) => reject(err));
        });
    }
}
