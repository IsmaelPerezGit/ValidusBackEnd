var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Splash page
router.get('/', function (req, res, next) {
    knex.raw(`select * from users`)
        .then(function (user) {
            res.send(user.rows);
        })
});

//Post new user to database
router.post('/new', function (req, res, next) {
    knex.raw(`insert into users (email, username, user_token) values (
    '${req.body.email}', 
    '${req.body.username}', 
    '${req.body.user_token}'
    )`)
        .then(() => {
            res.send('success')
        })
});

//Show single user
router.get('/:user_token', function (req, res, next) {
    //var userID = req.params.id;
    knex.raw(`select * from users where user_token = '${req.params.user_token}'`)
        .then(function (user) {
            res.send(user.rows[0])
        })
});


module.exports = router;