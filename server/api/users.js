const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

//confirmed works with Postman (may want to consider making this a router.patch)
router.put('/:id', async (req, res, next) => {
      try {
        const userId = req.params.id
        const updatedUser = await User.update(req.body, {
          where: {id: userId},
          returning: true
        })
        res.json(updatedUser)
      } catch (error) {
        console.error(error)
        next(error)
      }
})
