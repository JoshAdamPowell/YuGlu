import usersService from '../services/users-service';

export default class signUpController {

    static register(app) {
        app.post('/signup', function (req, res) {
            const { userName, password, firstName, lastName, email } = req.body;
            usersService.signUpUser(userName, password, firstName, lastName, email, function () {
                res.redirect('/');
            });
        });
    }
}




