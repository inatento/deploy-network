// src/routes/index.js
import express from 'express';

const router = express.Router();
const ansibleController = Container.get('AnsibleController');

router.get('/ansible-config', (req, res) => ansibleController.getConfig(req, res));

// Otras rutas...

export default router;
