var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/createzone', (req, res, next) => {
  res.render('createzone', null);
});

router.get('/createcomment', (req, res, next) => {
  res.render('createcomment', null);
});

module.exports = router;
