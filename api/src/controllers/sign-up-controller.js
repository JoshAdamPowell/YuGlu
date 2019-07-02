import userService from '../services/users-service.js';

export default class signUpController {

    static register(app) {
        app.post('/signup', function (req, res) {
            console.log('a')
            const { userName, password, firstName, lastName, email } = req.body;
            //const newUserService = new usersService();
            console.log('thios user serv', userService)
            userService.signUpUser(userName, password, firstName, lastName, email, function () {
                res.redirect('/');
            });
        });
    }
}




