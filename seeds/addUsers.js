exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {email: 'test@test.com', username: 'test', user_token: 'password', team_id: '1'},
                {email: 'bill@yahoo.com', username: 'bill', user_token: 'bill', team_id: '2'},
                {email: 'joe@hotmail.com', username: 'joe', user_token: 'joe', team_id: '3'},
                {email: 'stefon@gmail.com', username: 'stefon', user_token: 'stefon', team_id: '1'},
                {email: 'humen@test.com', username: 'humen', user_token: 'humen', team_id: '2'},
                {email: 'guy@gmail.com', username: 'guy', user_token: 'guy', team_id: '3'},
            ]);
        });
};