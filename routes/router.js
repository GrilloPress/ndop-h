var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/H', function(req, res, next) {
  res.render( 'H/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/H/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'H/' + theView );
});

router.get('/H/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'H/' + theDir + '/' + theView );
});

router.get('/H/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'H/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/aire', function(req, res, next) {
  res.render( 'aire/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/aire/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'aire/' + theView );
});

router.get('/aire/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'aire/' + theDir + '/' + theView );
});

router.get('/aire/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'aire/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/spen', function(req, res, next) {
  res.render( 'aire/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/spen/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'spen/' + theView );
});

router.get('/spen/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'spen/' + theDir + '/' + theView );
});

router.get('/spen/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'spen/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

module.exports = router;
