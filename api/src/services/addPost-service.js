import databaseService from '../services/database-service';


export default class userService {

    addPost(title, description, deadline, completed) {
        const connection = databaseService.getConnection();

        const query = 'INSERT INTO Posts(title, description, deadline, completed) VALUES (?, ?, ?, ?)';
        const parameters = [title, description, deadline, completed];

        connection.query(query, parameters, function (error, results, fields) {
                if (error) throw error;
                callback();
            });
        }}

   