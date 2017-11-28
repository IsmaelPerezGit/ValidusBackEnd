var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Splash page
router.get('/', function (req, res, next) {
    knex.raw(`select * from goals`)
        .then(function (goal) {
            res.send(goal.rows);
        })
});

module.exports = router;