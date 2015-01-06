var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Base in Yo Face' });
});

router.get('/grid', function(req, res) {
  res.render('grid', { title: 'Base in Yo Face - Grid Samples' });
});
module.exports = router;
