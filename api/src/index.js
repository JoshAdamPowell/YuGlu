import express from 'express';

class App {

    init(){
        const APP = express();
        const PORT = 3001;

        APP.use(express.urlencoded());

        APP.listen(PORT, () => console.log(`YuGlu API listening on: https://localhost:${PORT}`));

        APP.get('/api/home', (req, res) => {
            res.send('Welcome to the homepage!')
        })
    }
    
}

const application = new App()
application.init();