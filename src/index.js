const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const { v4 }= require('uuid');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, v4() + path.extname(file.originalname));
    }
});
app.use(multer({ storage : storage }).single('image'));

//Global varibles

//Routes

app.use(require('./routes/index'));

//Static files

//Start the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})