import usersService from '../services/users-service';

export default class loginController {

    static register(app) {

        app.post('/login', function (req, res) {
            const { username, password } = req.body;

            usersService.loginUser(username, password, function () {
                res.redirect('/')
            }), function() {
                res.send(401);
            };
        });
    }
}




