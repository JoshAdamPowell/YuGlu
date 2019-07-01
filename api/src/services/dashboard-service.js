import databaseService from '../services/database-service';


export default class dashboardService{

    static getUserPosts(userId, callback) {
        const db = new databaseService()
        const connection = db.init()

            const query = 'SELECT * FROM Posts WHERE UserID = ?'
            const parameters = [userId];

            connection.query(query, parameters)
            .then(function (results) {

                callback(results[0]);
            })
            .catch(function(err) {
                console.log("ERROR: " + err);
            });
    }

}



