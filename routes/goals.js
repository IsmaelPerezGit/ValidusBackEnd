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
    knex.raw(`insert into goals (target, start_date, weeks, Sun, Mon, Tues, Wed, Thurs, Fri, Sat) values (
    '${req.body.target}', 
    '${req.body.start_date}', 
    '${req.body.weeks}'
    '${req.body.Sun}', 
    '${req.body.Mon}', 
    '${req.body.Tues}'
    '${req.body.Wed}', 
    '${req.body.Thurs}', 
    '${req.body.Fri}'
    '${req.body.Sat}'
    )`)
        .then(() => {
            res.send('success')
        })
})

module.exports = router;