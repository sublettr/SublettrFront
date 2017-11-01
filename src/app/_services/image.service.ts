import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class ImageService {
    private getS3(): S3 {
        AWS.config.update({
            region: 'us-east',
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:125a8015-47a7-400f-801b-a260197a58ec'
            })
        });

        const clientParams: S3.ClientConfiguration = {
            apiVersion: '2016-03-01',
            params: { Bucket: 'sublettr-images' }
        }

        return new S3(clientParams);
    }

    public createAlbum(albumName: string) {
        const sublettrS3: S3 = this.getS3();
        albumName = albumName.trim();
        const albumKey: string = `${encodeURIComponent(albumName)}/`;

        return sublettrS3.headObject(<any>{
            Key: albumKey
        }, function(err, data) {
            if (!err) {
                throw new Error('Album already exists');
            } else if (err.code != 'Not Found') {
                throw new Error('Error creating album');
            }

            sublettrS3.putObject(<any>{ Key: albumKey }, function(err, data) {
                if (err) {
                    throw new Error('Error creating album');
                }
            });

        });
    }

    public addPhoto(albumName: string, file: any): boolean {
        const albumPhotosKeys: string = `${encodeURIComponent(albumName)}//`;

        const photoKey: string = albumPhotosKeys + file.name;

        this.getS3().upload(<any>{
            Key: photoKey,
            Body: file,
            ACL: 'public-read'
        }, function(err, data) {
            if (err) {
                throw new Error(`Error uploading photo: ${err.message}`);
            }
        })
        return true;
    }
}