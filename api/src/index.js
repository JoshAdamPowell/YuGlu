import express from 'express';
import HelloWorld from './helloWorld-controller';
class App {

init(){
    // SETUP EXPRESS
    const app = express();
    app.use(express.urlencoded());
    app.set('port', 3001);
console.log('blah')
console.log(app.get('port'));
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
    const port = 3001;

    HelloWorld.register(app);
    //app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}
    
}

const application = new App()
application.init();