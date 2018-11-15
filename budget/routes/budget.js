const express = require('express')
const Budget = require('../models/Budget')

const router = express.Router()

router.route('/')
  .post((req, res) => {
    const { body: data } = req
    const budget = new Budget(data)
    
    console.log(data)
    console.log(budget)

    // remember to save on the INSTANCE of the model, not the model itself!
    budget.save()
      .then(budget => res.status(200).json(budget))
      .catch(err => res.status(500).json(err))
  })
  .get((req, res) => {
    Budget.find()
      .then(budgets => res.status(200).json(budgets))
      .catch(err => res.status(500).json(err))
  })

module.exports = router
