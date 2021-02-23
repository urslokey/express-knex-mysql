/* eslint-disable import/order */
const express = require('express');
const dbConnection = require('./knex').development;
const knex = require('knex')(dbConnection);

const app = express();

// eslint-disable-next-line no-unused-vars
app.get('/', (req, res) => {
  knex.select('*').from('employees').then((data) => {
    res.send(data);
  });
});

app.get('/where', (req, res) => {
  knex.select('*').from('transactions').where({ id: 1 }).then((data) => {
    res.send(data);
  });
});

app.get('/join', (req, res) => {
  knex.select('*').from('employees').leftJoin('transactions', 'transactions.employee_id', 'employees.id').then((data) => {
    res.send(data);
  });
});

app.listen(3000);
