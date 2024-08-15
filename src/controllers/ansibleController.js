import { Service } from 'typedi';

@Service()
class AnsibleController {
  constructor() {
    this.ansibleService = Container.get('AnsibleService');
  }

  getConfig(req, res) {
    try {
      const configData = this.ansibleService.getConfig();
      res.status(200).send(configData);
    } catch (error) {
      res.status(500).send(`Error: ${error.message}`);
    }
  }

  // Otros métodos del controlador...
}

export default AnsibleController;