const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require("cors");


//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2);


//middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());


//routes
app.use(require('./routes/index'));
app.use('/api/hoteles', require('./routes/hoteles'));

//inicio de servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

