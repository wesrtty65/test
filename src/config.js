import { config } from "dotenv";

export default class Config {
    constructor() {
        const { parsed, error } = config();

        if (error) {
            throw new Error('File not found .env');
        }

        if (!parsed) {
            throw new Error('File is empty .env');
        }

        this.config = parsed;
    };

    get(key) {
        const result = this.config[key];
        
        if (!result) {
            throw new Error(`Key not found ${key}`);
        }

        return result;
    };
};