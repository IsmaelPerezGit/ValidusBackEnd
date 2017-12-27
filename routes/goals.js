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

//post new goal
router.post('/new', function (req, res, next) {
    console.log("HELLO: ", req.body.days, req.body.user_id)
    knex.raw(`insert into goals (target, start_date, weeks, sun, mon, tues, wed, thurs, fri, sat, team_size, user_id, days) values (
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
    '${req.body.team_size}',
    '${req.body.user_id}',
    '${req.body.days}'
    )`)
        .then(() => {
             res.send('success')
         })
});

// get individual goal
router.get('/:id', function (req, res, next) {
    knex.raw(`SELECT * FROM goals where goals.id = '${req.params.id}' ` )
        .then(function (goal) {
            res.send(goal.rows);
        })
});

// // show specific user goal
// router.get('/:user_token', function (req, res, next) {
//     knex.raw(`select * from goals where user_id = '${req.body.user_token}'`)
//         .then(function (user) {
//             res.send(user.rows[0])
//         })
// });


module.exports = router;