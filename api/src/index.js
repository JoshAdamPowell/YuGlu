import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import HelloWorld from './controllers/helloWorld-controller';
import signUpController from './controllers/sign-up-controller'



class App {
  init() {
    // SETUP EXPRESS
    const app = express();
    app.use(express.urlencoded());
    app.use(cors({
      origin: '*'
    }))
    app.use(bodyParser());
    app.set('port', 3001);
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    const port = 3001;

    HelloWorld.register(app);
    signUpController.register(app);

    if (!this.setup) {
      app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }
    this.setup = true;
  }

}



const application = new App()
application.init();