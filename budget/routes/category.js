const express = require('express')
const Category = require('../models/Category')

const router = express.Router()

router.route('/')
  .post((req, res) => {
    const { body: data } = req
    const category = new Category(data)

    category.save()
      .then(category => res.status(200).json(category))
      .catch(err => res.status(500).json(err))
  })

module.exports = router
