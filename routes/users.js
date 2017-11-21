var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Splash page
router.get('/', function(req, res, next) {
    knex.raw(`select * from users`)
        .then(function(users) {
          res.send(users.rows);
        })
});


module.exports = router;