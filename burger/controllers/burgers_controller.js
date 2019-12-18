let express = require('express');
let burger = require('../models/burger.js')
let router = express.Router();

router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/api/burgers/', function(req,res) {
  burger.create([
    'name', 'hungry'
  ], [
    req.body.name, req.body.hungry  
  ], function(result) {
    res.json( { id:result.insertId } );
  });
});

router.put('api/burgers/:id', function(req, res) {
  let condition = req.params.id;

  burger.update({
    hungry: req.body.hungry
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
