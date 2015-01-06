var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/grid', function(req, res) {
  res.render('grid', { title: 'Express' });
});
module.exports = router;
