var express = require('express');
var router = express.Router();
let jwt = require('express-jwt');
let mongoose = require('mongoose');
let CV = mongoose.model('CV');

let auth = jwt({secret: 'azertyuiopqsdfghjklmwxcvbn', userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/API/cv/', function(req,res,next) {
  CV.find(function(err, cv_s) {
    if (err) {
      return next(err);
    }
    res.json(cv_s);
  });
});

router.post('/API/cv/', auth, function (req, res, next) {
  let cv = new CV(req.body);
  cv.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});  

module.exports = router;
