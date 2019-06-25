import db from './database-service';

export default class HelloWorld {

static register(app) {

    var blah = new db();
    blah.init();
    app.get('/', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ data: "hello world" }));
    });


}
}