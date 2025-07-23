 const dotenv = require('dotenv');
 dotenv.config();
 const express  = require('express');
 const cors = require('cors')
const connecToDb = require('./db/db');
 const app = express();
 const cookieParser = require('cookie-parser')
 const userRoutes =  require('./routes/user.routes');
connecToDb();

app.use(cors())
 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/' , (req, res) => {
    res.send('Welcome to FIXIFY')
})
app.use('/users' , userRoutes)
module.exports = app;