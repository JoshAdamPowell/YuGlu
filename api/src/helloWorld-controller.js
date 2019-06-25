export default class HelloWorld {

static register(app) {


    app.get('/', function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ data: "hello world" }));
    });


}
}