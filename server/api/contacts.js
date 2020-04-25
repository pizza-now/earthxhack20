const router = require('express').Router()
const { Contact } = require('../db/models')
module.exports = router

//confirmed this works with Postman
router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      where: {
        userId: req.user.id
      }
    })
    res.json(contacts)
  } catch (err) {
    next(err)
  }
})

//I don't know if we need this one; confirmed this works with Postman
router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId)
    res.send(contact)
  } catch (error) {
    next(error)
  }
})

//confirmed this works with Postman
router.post('/', async (req, res, next) => {
  try {
    const newContact = {
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      userId: req.user.id
    }
    await Contact.create(newContact)
    const confirmContacts = await Contact.findAll({
      where: {userId: req.params.userId}
    })
    res.send(confirmContacts)
  } catch (error) {
    next(error)
  }
})

//might want to consider making this a router.patch so you don't have to enter in all the info again
router.put('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId)
    await contact.update(req.body)
    res.send(contact)
  } catch (error) {
    next(error)
  }
})

//didn't test this but I assume this works
router.delete('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId)
    await contact.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
