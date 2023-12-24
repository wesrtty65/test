import qs from 'querystring';

export default (client) => ({
    createBucket: (region, options = {}) => {
        return client.put('/', qs.stringify(`<CreateBucketConfiguration><LocationConstraint>${region}<</LocationConstraint></CreateBucketConfiguration>`), options);
    },
    createObject: (filepath, data = '', options = {}) => {
        return client.put(filepath, data, {
            'x-amz-storage-class': 'STANDARD',
            // Не знаю, как вычисляется это свойство, поэтому просто вставил из примера
            'x-amz-meta-s3cmd-attrs': 'uid:1000/gname:asb/uname:asb/gid:1000/mode:33204/mtime:1499727909/atime:1499727909/md5:fb08934ef619f205f272b0adfd6c018c/ctime:1499713540',
            ...options,
        });
    },
    getListObjects: async (optins = {}) => {
        return client.get('/', optins);    
    },
    deleteObject: (filepath, options = {}) => {
        return client.delete(filepath, options)
    },
    deleteBucket: (options = {}) => {
        return client.delete('/', options)
    },
});