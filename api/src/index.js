import express from 'express';
import HelloWorld from './helloWorld-controller';
class App {

init(){
    // SETUP EXPRESS
    const app = express();
    app.use(express.urlencoded());

    const port = 3001;

    HelloWorld.register(app);




    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}
    
}

const application = new App()
application.init();