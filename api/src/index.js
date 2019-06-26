import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import HelloWorld from './controllers/helloWorld-controller';
import signUpController from './controllers/sign-up-controller';

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
    console.log('blah')
    console.log(app.get('port'));
    var server = app.listen(app.get('port'), function () {
      console.log('Express server listening on port ' + server.address().port);
    });
    const port = 3000;
    

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