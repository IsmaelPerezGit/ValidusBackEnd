var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Get teams
router.get('/', function (req, res, next) {
    knex.raw(`select * from teams`)
        .then((team) => {
            res.send(team.rows);
        })
});

//Get teams with specific goal
router.get(`/:id`, function (req, res, next) {
    knex.raw(`select * from teams where goal_id=${req.params.id}`)
        .then(function (team) {
            res.send(team.rows)
        })
});

router.post(`/new`, function (req, res, next) {
    knex.raw(`insert into teams (user_id, goal_id) values ('${req.body.user_id}', '${req.body.goal_id}')`)
        .then(function (team) {
            res.send(
                'successful team'
            )
        })
});

module.exports = router;