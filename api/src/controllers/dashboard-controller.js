import dashboardService from '../services/dashboard-service';

export default class dashboardController {

    static register(app) {

        app.get('/dashboard/:userId', function (req, res) {
            const  userId  = req.params['userId'];
            dashboardService.getUserPosts(userId, function (results) {
                console.log('results is ', results);
                if(results.length===0){
                    res.end(JSON.stringify("No results"));
                }else{
                    res.end(JSON.stringify(results));
                }
            })
        });
    }
}
