import Config from '../src/config.js'
import createClient from '../src/client.js';
import initService from '../src/service.js';
import { convertToJson } from '../src/helper.js';

const filepath = '/example.txt';
const data = 'Example text.';

const expectProperties = [ 
    'Name', 'Prefix', 'MaxKeys', 'IsTruncated', 'Contents.0.Key', 'Contents.0.LastModified', 
    'Contents.0.ETag', 'Contents.0.Size', 'Contents.0.StorageClass', 'Contents.0.Owner.ID', 
    'Contents.0.Owner.DisplayName', 'Contents.1.Key', 'Contents.1.LastModified', 'Contents.1.ETag',
    'Contents.1.Size', 'Contents.1.StorageClass', 'Contents.1.StorageClass', 'Contents.1.Owner.ID', 
];

describe('Tests', () => {
    const config = new Config();
    const client = createClient(config);
    const service = initService(client);

    beforeAll(async () => {
        const bucket = service.createBucket(region, {
            'x-amz-acl': 'public-write',
        });
        const object = service.createObject(filepath, data);
    });

    test('get list objects', async () => {
        const listObjectsResponse = await service.getListObjects();
        const listObjectsData = convertToJson(listObjectsResponse.data).ListBucketResult;

        expect(listObjectsResponse.status).toBe(200);
        expect(listObjectsData).toHaveProperty(expectProperties);
    });

    afterAll(async () => {
        await service.deleteObject(filepath);
        await service.deleteBucket();
    });
});