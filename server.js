const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const db = require('./data/db');
// const budgetRoutes = require('./budget/Budget.js');
const categoryRoutes = require('./category/Category.js');
const expenseRoutes = require('./expense/Expense.js');
const Budget = require('./budget/Budget')

const server = express();

db
  .connectTo('budget')
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log('Error', err));
// add your server code

server.use(helmet());
server.use(express.json());

server.get('/api/budgets', (req, res) => {
  Budget.find()
      .then(budget => {
  res.status(200).json(budget)
  })
  .catch(err => {
      res.status(500).json(err)
  })

})
server.post('/api/budgets', (req, res) => {
    const { title, budgetAmount } = req.body;
    const budget = new Budget(req.body);

    Budget.create(budget)
        .then(newBudget => {
            res.status(200).json(newBudget)
        })
        .catch(err => {
            res.status(500).json(err);
        })
})
// server.use('/api/budgets', budgetRoutes);
// server.use('/api/categories', categoryRoutes);
// server.use('/api/expenses', expenseRoutes);

server.get('/', (req, res) => {
  res.send('Working!!!')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
