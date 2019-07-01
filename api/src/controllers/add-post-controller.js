import addPostService from '../services/addPost-service';

export default class addPostController {

    static register(app) {
        app.post('/addnew', function (req, res) {
            const { title, description, deadline, completed  } = req.body;
            addPostService.addpost(title, description, deadline, completed, function () {
                res.redirect('/');
            });
        });
    }
}