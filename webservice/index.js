const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./database/connect');

//swagger to test routes and add data to the database
//since stupid compass isn't working...

// const swaggerUI = require('swagger-ui-express');
// const swaggerDoc = require('./swagger/swagger.json');


const app = express();
const PORT = 1800;

app.use(bodyParser.json())
/*
this is to specify that data coming from 
somewhere in this case, anywhere becasue 
of the *, will be allowed when using your 
routes. This needs to be changed for in 
production
*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use('/', require('./routes/index'))

mongodb.initDb((err) => {
    if(err){
        console.log(err);
    } else{
        app.listen(PORT)  
        console.log(`app listening on port ${PORT}`);
    }
});