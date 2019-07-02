import usersService from '../services/users-service';

export default class loginController {

    static register(app) {

        app.post('/login', function (req, res) {
            const username = req.body.username;
            const password = req.body.password;

            usersService.loginUser(username, password, function () {
                res.status(200).send({success: res.satusCode});
            }, function () {
                res.status(400).send({error: res.statusCode});
            });
        });
    }
}




