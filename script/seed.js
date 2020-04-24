'use strict'

const db = require('../server/db')
const {User, Contact, Order} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      firstName: 'Cody',
      lastName: 'Pugster'
    }),
    User.create({
    })
  ])
  const contacts = await Promise.all([
    Contact.create({
      name: '',
    }),
    Contact.create({
    })
  ])
  const orders = await Promise.all([
    Order.create({
      name: 'Booty booty booty',
      line1: '350 Muggle Hump',
      line2: 'Apt 7W',
      city: 'Broomsticktonville',
      state: 'Kentucky',
      zip: '90210'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${contacts.length} contact`)
  console.log(`seeded ${orders.length} order`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
