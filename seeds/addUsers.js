exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                // {email: 'test@test.com', username: 'test', user_token: 'password', team_id: null},
                // {email: 'bill@yahoo.com', username: 'bill', user_token: 'bill', team_id: null},
                // {email: 'joe@hotmail.com', username: 'joe', user_token: 'joe', team_id: null},
            ]);
        });
};