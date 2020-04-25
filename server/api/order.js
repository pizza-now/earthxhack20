const router = require('express').Router()
const { Order } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    let userId = req.user.id ? req.user.id : null
    await Order.create({ userId: userId }, req.body)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
