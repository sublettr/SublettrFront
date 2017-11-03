import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {Sublease} from '../_models/sublease';

@Injectable()
export class ImageService {
    contstructor() { };
    private getS3(): S3 {
        AWS.config.update({
            region: 'us-east-1',
            credentials: new AWS.Credentials('AKIAIHUAP5AP4MYKBE4A', 'nWLZsC8ynOZyH21yoYRD2eDyXRUvMYW1NQWlKsB2')
            });

        const clientParams: S3.ClientConfiguration = {
            apiVersion: '2016-03-01',
            params: { Bucket: 'sublettr-images' }
        }
        const aws = <any>AWS;
        aws.config.credentials.get(function(){

            // Credentials will be available when this function is called.
            var accessKeyId = AWS.config.credentials.accessKeyId;
            var secretAccessKey = AWS.config.credentials.secretAccessKey;
            var sessionToken = AWS.config.credentials.sessionToken;
        });
        return new S3(clientParams);
    }

    public uploadSubletImages(sublease: Sublease, imageList: FileList) {
        const albumName: string = `${sublease.email}-${sublease.address}`;
        try {
          this.createAlbum(albumName);
        } catch (err) {
            console.error(err);
        } 
        for(let i: number = 0; i < imageList.length; i++) {
            this.addPhoto(albumName, imageList[i]);
        }
    }

    private createAlbum(albumName: string) {
        const sublettrS3: S3 = this.getS3();
        albumName = albumName.trim();
        const albumKey: string = `${encodeURIComponent(albumName)}/`;
        return sublettrS3.headObject({
            Key: albumKey,
            Bucket: 'sublettr-images'
        }, function(err, data) {
            if (!err.message) {
                throw new Error('Album already exists');
            } else if (err.code != 'Not Found') {
                throw new Error(`Error creating album: ${err.message}`);
            }
            sublettrS3.putObject({ Key: albumKey, Bucket: 'sublettr-images' }, function(err, data) {
                if (err) {
                    throw new Error(`Error creating album: ${err.message}`);
                }
            });

        });
    }

    private addPhoto(albumName: string, file: any): boolean {
        const albumPhotosKeys: string = `${encodeURIComponent(albumName)}//`;

        const photoKey: string = albumPhotosKeys + file.name;
        this.getS3().upload({
            Key: photoKey,
            Body: file,
            ACL: 'public-read',
            Bucket: 'sublettr-images'
        }, function(err, data) {
            if (err) {
                throw new Error(`Error uploading photo: ${err.message}`);
            }
        })
        return true;
    }

}