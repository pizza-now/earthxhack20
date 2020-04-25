const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

//confirmed works with Postman (may want to consider making this a router.patch)
router.put('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.update(req.body)
    res.send(user)
  } catch (error) {
    next(error)
  }
})
