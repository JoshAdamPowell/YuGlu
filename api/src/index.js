import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import HelloWorld from './controllers/helloWorld-controller';
import signUpController from './controllers/sign-up-controller';

class App {
  
  init() {
    const APP = express();
    const PORT = 3001;

    APP.use(express.urlencoded());
    APP.use(cors({ origin: '*' }))
    APP.use(bodyParser());
    
    HelloWorld.register(APP);
    signUpController.register(APP);

    APP.listen(PORT, () => console.log(`YuGlu API listening on port ${PORT}!`));
    
  }

}

const application = new App()
application.init();