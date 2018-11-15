const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const Expense = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  budget: {
    type: ObjectId,
    ref: 'Budget',
    required: true,
  },
  // category: {
  //   type: ObjectId,
  //   ref: 'Category',
  //   required: true,
  // }
  
})

module.exports = mongoose.model('Expense', Expense)
