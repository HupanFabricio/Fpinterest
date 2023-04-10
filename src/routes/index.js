const { Router } = require('express');
const router = Router();
const Image = require('../models/Image');

router.get('/', (req, res) => {
    res.send('Index page');
})

router.get('/upload', (req, res) => {
    res.render('upload');
});

router.post('/upload', (req, res) => {

    const image = new Image();

        image.title = req.body.title;
        image.description = req.body.description;
        image.filname = req.file.fieldname;
        image.path = '/img/uploads/' + req.file.fieldname;
        image.originalname = req.file.originalname;
        image.mimetype = req.file.mimetype;
        image.size = req.file.size;

    console.log(image);
    res.send('uploaded');
});

router.get('/image/:id', (req, res) => {   
    res.send('Profile Image');
})

router.get('/image/:id/delete', (req, res) => {
    res.send('Image deleted');
})

module.exports = router;