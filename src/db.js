const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : 'countries'
});

connection.connect();

connection.runQuery = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

module.exports = connection;
