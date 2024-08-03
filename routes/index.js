import AppController from '../controllers/AppController';

const injectRoutes = (api) => {
  api.get('/status', AppCOntroller.getStatus);
  api.get('/stats', AppController.getStats);
}
