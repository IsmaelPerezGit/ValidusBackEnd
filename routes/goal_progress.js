var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Splash page
router.get('/', function (req, res, next) {
    knex.raw(`select * from goal_progress`)
        .then(function (goal_progress) {
            res.send(goal_progress.rows);
        })
});

module.exports = router;