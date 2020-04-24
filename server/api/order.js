const router = require('express').Router()
const { Order } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    user = req.user ? req.user : null
    await Order.create({ userId: user.id })
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
