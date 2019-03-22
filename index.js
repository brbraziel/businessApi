const express = require('express'); //receive express package
const bodyParser = require('body-parser'); //receive bodyparser packe

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
    next();
});

require('./controllers/employeesController')(app);
require('./controllers/departmentsController')(app);
require('./controllers/tasksController')(app);

app.listen(3000); //this is the port we are currently using