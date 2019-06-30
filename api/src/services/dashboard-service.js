import databaseService from '../services/database-service';


export default class dashboardService{

    static getUserPosts(userId, callback) {
        const db = new databaseService()
        const connection = db.init()

        console.log('b')
            const query = 'SELECT * FROM Posts WHERE UserID = ?'
            const parameters = [userId];

            connection.query(query, parameters)
            .then(function (results) {
                //console.log(query);
                //console.log(userId);
                //console.log('c');
                //console.log(results);
                //console.log("data: " + results[0][0].title);
                callback(results[0]);
            })
            .catch(function(err) {
                console.log("ERROR: " + err);
            });
    }

}



