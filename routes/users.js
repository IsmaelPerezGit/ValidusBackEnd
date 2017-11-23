var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


//Splash page
router.get('/', function(req, res, next) {
    knex.raw(`select * from users`)
        .then(function(user) {
          res.send(user.rows[0]);
        })
});

//Post new user to database
router.post('/new', function(req, res, next) {
    knex.raw(`insert into users (email, username, user_token) values (
    '${req.body.email}', 
    '${req.body.username}', 
    '${req.body.user_token}'
    )`)
        .then(() => {res.send('success')} )
});


module.exports = router;