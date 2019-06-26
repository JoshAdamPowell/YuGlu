import express from 'express';
import HelloWorld from './controllers/helloWorld-controller';
import signUpController from './controllers/sign-up-controller'

class App {

    

init(){
    // SETUP EXPRESS
    const app = express();
    app.use(express.urlencoded());

    const port = 3000;

    HelloWorld.register(app);
    signUpController.register(app);



    if (!this.setup){
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }
    this.setup = true;
}
    
}



const application = new App()
application.init();