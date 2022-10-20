var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', 
  {title: 'Home page'})
});

router.get('/home', (req, res, next) => {
  res.render('index', {title: 'Home page'})
});

router.get('/about', (req, res, next) => {
  res.render('index', {title: 'About me' })
});

router.get('/services',(req,res,next) => {
  res.render('index',{title: 'Services'})
});

router.get('/projects', (req, res, next) => {
  res.render('index', {title: 'Projects' })
});



router.get('/contact', (req, res, next) => {
  res.render('index', {title: 'Contact'})}
  
);



module.exports = router;
