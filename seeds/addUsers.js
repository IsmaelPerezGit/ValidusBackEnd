exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {email: 'test@test.com', username: 'test', password: 'test', team_id: '1'},
                {email: 'bill@yahoo.com', username: 'bill', password: 'bill', team_id: '2'},
                {email: 'joe@hotmail.com', username: 'joe', password: 'joe', team_id: '3'},
                {email: 'stefon@gmail.com', username: 'stefon', password: 'stefon', team_id: '1'},
                {email: 'humen@test.com', username: 'humen', password: 'humen', team_id: '2'},
                {email: 'guy@gmail.com', username: 'guy', password: 'guy', team_id: '3'},
            ]);
        });
};