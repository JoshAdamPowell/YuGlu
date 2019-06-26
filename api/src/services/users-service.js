import databaseService from './database-service';
import bcrypt from 'bcrypt';

export default class signUpUser{

static signUpUser(userName,password,firstName,lastName,email){
const db =  new databaseService()
    const connection = db.init()
    var saltRounds = 10;

    bcrypt.hash(password,saltRounds, function(err,hash){
    const query = 'INSERT INTO Users (userName,password,firstName,lastName,email) VALUES (?,?,?,?,?)'
    const parameters = [userName,hash,firstName,lastName,email];
    
    connection.query(query, parameters, function (error, results, fields) {
        if (error) throw error;
        callback();
    });

})




}
}



