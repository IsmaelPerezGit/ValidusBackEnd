var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Get teams
router.get('/', function (req, res, next) {
    knex.raw(`select * from teams`)
        .then(function (team) {
            res.send(team.rows);
        })
});

//Get teams with specific goal
router.get(`/:id`, function(req, res, next) {
    knex.raw(`select * from goals where team_id=${req.params.id}`)
        .then(function (team) {
            res.send(team.rows)
        })
});

module.exports = router;