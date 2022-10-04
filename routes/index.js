var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Home page'
  });
});

router.get('/home', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Home page',
    heading: ''
  });
});

router.get('/about', (req, res, next) => {
  res.render('index', 
  {
     title: 'About me',
     heading:'Web & App Developer'
  });
});

router.get('/services',(req,res,next) => {
  res.render('index',
  {
    title: 'Services',
    heading: 'My Services',
    serv1: 'Frontend Development',
    serv2: 'Backend Development',
    serv3: 'App development'
  });
});

router.get('/projects', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Projects' ,
    heading1: 'E-commerce site',
    heading2: 'Brochure site'
  });
});



router.get('/contact', (req, res, next) => {
  res.render('index', 
  { 
    title: 'Contact',
    heading: ''
  });
});



module.exports = router;
