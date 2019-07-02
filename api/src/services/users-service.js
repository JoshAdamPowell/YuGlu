import databaseService from '../services/database-service';
import bcrypt from 'bcrypt';

export default class userService {

    static signUpUser(userName, password, firstName, lastName, email) {
        const db = new databaseService()
        const connection = db.init()
        var saltRounds = 10;

        function addUserToDatabase() {
            (bcrypt.hash(password, saltRounds, function (err, hash) {
                const query = 'INSERT INTO Users (userName,password,firstName,lastName,email) VALUES (?,?,?,?,?)'
                const parameters = [userName, hash, firstName, lastName, email];

                connection.query(query, parameters, function (error, results, fields) {
                    if (error) throw error;
                    callback();
                });
            }))
        }

        const queryCheck = 'SELECT * FROM Users WHERE userName = ?'

        connection.query(queryCheck, function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                console.log('UserName is taken');
                //send error to user
            } else {
                console.log('UserName is available');
                addUserToDatabase();
            };
        })
    }


    static loginUser(username, password, successCallback, failureCallback) {
        const db = new databaseService();
        const connection = db.init();

        const query = 'SELECT * FROM Yuglu.Users WHERE userName = ?';
        const parameters = [username];

        connection.query(query, parameters).then( (results, fields) => {
            if (results[0].length > 0) {
                let hash = results[0][0].password;

                bcrypt.compare(password, hash, function (err, res) {
                    if (results.length > 0 && username === results[0][0].userName && res === true) {
                        console.log(`User: 'ID: ${results[0][0].UserID} ${results[0][0].userName}' logged in at ${new Date()}`)
                        successCallback();
                    } else {
                        failureCallback();
                    }
                })
            } else {
                failureCallback();
            }
        
        }).catch((err) => {
            console.log(err);
        })
    }

}