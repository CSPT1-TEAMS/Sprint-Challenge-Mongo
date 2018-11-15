const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/budget', { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(`Error connecting to the DB, ${err}`))

const budgetsRoute = require('./budget/routes/budget.js')
const expensesRoute = require('./budget/routes/expense')
const categoriesRoute = require('./budget/routes/category')

const app = express()
const port = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/budgets', budgetsRoute)
app.use('/expenses', expensesRoute)
app.use('/categories', categoriesRoute)


app.post('/categories', (req, res) => {
  // db.save(req.body etc etc)
})

app.listen(port, () => console.log(`Server up and running on ${port}`))
