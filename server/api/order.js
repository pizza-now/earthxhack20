const router = require('express').Router()
const { Order } = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const userId = req.user.id ? req.user.id : null
    console.log(req.body)
    const newOrder = {
      message: req.body.message,
      locationOfSubmission: req.body.locationOfSubmission,
      userId: userId,
      dateOfSubmission: req.body.dateOfSubmission
    }
    await Order.create(newOrder)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
