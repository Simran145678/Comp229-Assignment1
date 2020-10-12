var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  { title: 'Home' ,});
});

router.get('/home', function(req, res, next) {
  res.render('index',  { title: 'Home' ,});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index',  { title: 'About' ,});
});
/* GET Projects page. */
/* router.get('/projects', function(req, res, next) {
  res.render('index',  { title: 'Projects' ,});
}); */
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index',  { title: 'Services' ,});
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('index',  { title: 'Projects' ,});
});

/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index',  { title: 'Contact' ,});
});

/* GET Contact us page. */
router.get('/project', function(req, res, next) {
  res.render('index',  { title: 'Project' ,});
});

module.exports = router;
