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

module.exports = router
