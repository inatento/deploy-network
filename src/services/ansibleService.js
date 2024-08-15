// src/services/ansibleService.js
import { Service } from 'typedi';
import fs from 'fs';
import path from 'path';
import config from '../config/config';

@Service()
export class AnsibleService {
    constructor() {
        this.configPath = path.resolve(__dirname, config.ansibleConfigPath);
      }

    getConfig() {
        try {
            const configData = fs.readFileSync(this.configPath, 'utf8');
            return configData;
        } catch (error) {
            console.error(`Error reading ansible.cfg: ${error.message}`);
            throw error;
        }
    }

    editAnsibleConfig(newConfig) {
        const filePath = config.ansibleConfigPath;
        fs.writeFileSync(filePath, JSON.stringify(newConfig, null, 2), 'utf8');
    }
}
