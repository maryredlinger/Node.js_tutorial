const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM db_mary.kurt_test';

const connection = mysql.createConnection({
    host: '174.76.5.163',
    user: 'webdude',
    password: 'edudbew',
    databse: 'db_mary'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /kurt_test')
});

app.get('/kurt_test', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});
app.listen(4000, () => {
    console.log('listening on 4000')
});