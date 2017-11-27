var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Splash page
router.get('/', function (req, res, next) {
    knex.raw(`select * from teams`)
        .then(function (team) {
            res.send(team.rows);
        })
});

module.exports = router;