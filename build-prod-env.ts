const fs = require('fs');
const path = require('path');

const prodEnv = {};
const KEYS = ['production', 'S3_ACCESS_ID', 'S3_ACCESS_KEY', 'API_URL'];

KEYS.forEach((key) => prodEnv[key] = process.env[key]);

const writeStream = fs.createWriteStream(path.join(__dirname + '/src/environments/environment.ts'));

writeStream.write(JSON.stringify(prodEnv));

writeStream.end();






