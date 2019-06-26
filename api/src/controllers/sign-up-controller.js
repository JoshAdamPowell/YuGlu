import usersService from '../services/users-service';

export default class setUpThisController{

    static register(app){
        
        app.get('/signup', function(req, res) {
            // usersService.signUpUser(function(newUser){
                let model = {
                    // user : newUser
                };
                res.render('signup', model);
            // });
        });
    
        app.post('/signup', function(req, res) {
            // TODO: signup code
    
            let newUserName = req.body.userName
            let newPassword = req.body.password
            let newFirstName = req.body.firstName
            let newLastName = req.body.lastName
            let newEmail = req.body.email
    
            usersService.signUpUser(newUserName,newPassword,newFirstName,newLastName,newEmail, function(){
    
                res.redirect('/');
            });


        });






    }
}


    

