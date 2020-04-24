const router = require('express').Router()
const { Contact } = require('../db/models')
module.exports = router

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

//I don't know if we need this one
router.get('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId)
    res.send(contact)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newContact = Contact.create({
      userId: req.user.id
    }, req.body)
    res.send(newContact)
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId)
    await contact.update(req.body)
    res.send(contact)
  } catch (error) {
    next(error)
  }
})


router.delete('/:contactId', async (req, res, next) => {
  try {
    const contact = await Contact.findByPk(req.params.contactId)
    await contact.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
