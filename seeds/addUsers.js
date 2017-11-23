exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {email: 'test@test.com', username: 'test', user_token: 'password', team_id: null},
                {email: 'bill@yahoo.com', username: 'bill', user_token: 'bill', team_id: null},
                {email: 'joe@hotmail.com', username: 'joe', user_token: 'joe', team_id: null},
                {email: 'stefon@gmail.com', username: 'stefon', user_token: 'stefon', team_id: null},
                {email: 'humen@test.com', username: 'humen', user_token: 'humen', team_id: null},
                {email: 'guy@gmail.com', username: 'guy', user_token: 'guy', team_id: null},
            ]);
        });
};