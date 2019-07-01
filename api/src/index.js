import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import signUpController from './controllers/sign-up-controller';
import loginController from './controllers/login-controller';
import dashboardController from './controllers/dashboard-controller';

class App {
  
  init() {
    const APP = express();
    const PORT = 3001;

    APP.use(express.urlencoded());
    APP.use(cors({ origin: '*' }))
    APP.use(bodyParser());
    
    loginController.register(APP);
    signUpController.register(APP);
    dashboardController.register(APP);


    APP.listen(PORT, () => console.log(`YuGlu API listening on port ${PORT}!`));
    
  }

}

const application = new App()
application.init();