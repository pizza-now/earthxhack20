const Sequelize = require('sequelize')
const db = require('../db')

const Contact = db.define('contact', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
    validate: {
      notEmpty: false,
      isEmail: true
    }
  },
  phoneNumber: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: false,
      }
    }
})

module.exports = Contact