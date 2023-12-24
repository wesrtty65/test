import aws4 from 'aws4';
import axios from 'axios';

export const createClient = (config) => {
    const options = {
        host: config.get('HOST'),
        service: config.get('SERVICE'),
        region: config.get('REGION'),
    };

    aws4.sign(options, {
        accessKeyId: config.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY'),
    });

    return axios.create({
        baseURL: options.host,
        headers: options.headers,
    });
};