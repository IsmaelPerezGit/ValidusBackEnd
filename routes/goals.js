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

router.post('/new', function (req, res, next) {
    knex.raw(`insert into goals (target, start_date, weeks, sun, mon, tues, wed, thurs, fri, sat, team_size) values (
    '${req.body.target}', 
    '${req.body.start_date}', 
    '${req.body.weeks}',
    '${req.body.sun}', 
    '${req.body.mon}', 
    '${req.body.tues}',
    '${req.body.wed}', 
    '${req.body.thurs}', 
    '${req.body.fri}',
    '${req.body.sat}',
    '${req.body.team_size}'
    )`)
        .then(() => {
             res.send('success')
         })
});


module.exports = router;