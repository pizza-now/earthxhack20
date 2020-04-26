const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  message: {
    type: Sequelize.STRING,
    allowNull: true
  },
  dateOfSubmission: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  locationOfSubmission: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Order
