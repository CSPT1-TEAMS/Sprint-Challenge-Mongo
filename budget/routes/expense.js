const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')

router.route('/')
  .post((req, res) => {
    const { body: data } = req
    const expense = new Expense(data)
    expense.save()
      .then(expense => res.status(200).json(expense))
      .catch(err => res.status(500).json(err))
  })
  .get((req, res) => {
    Expense.find()
      .populate('budget', 'budgetAmount -_id')
      .populate('category', 'title -_id')
      .then(expenses => res.status(200).json(expenses))
      .catch(err => res.status(500).json(err))
  })

module.exports = router
