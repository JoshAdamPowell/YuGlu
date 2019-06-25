import db from 'mysql-promise';

export default class databaseService {
    init(){
        const serverName = 'yuglu.cmvjpciisuyc.eu-west-1.rds.amazonaws.com';
        const userName = 'joshPowell';
        const password = 'password1234';
        const databaseSchema = 'Yuglu';
        const database = new db()
        database.configure({
            "host": serverName,
            "user": userName,
            "password": password,
            "database": databaseSchema
        });

    return database
    }
}
