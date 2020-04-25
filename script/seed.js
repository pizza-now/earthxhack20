'use strict'

const db = require('../server/db')
const { User } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      fullName: 'Alice Quinn',
      email: 'alice@email.com',
      number: '3127478837',
      password: '123',
      address: '5 Tailwater Street Worcester, MA 01604',
      keyword: 'olives'
    }),
    User.create({
      fullName: 'Quentin Coldwater',
      email: 'quentin@email.com',
      number: '2124657566',
      password: '123',
      address: '9320 Lafayette Lane Grayslake, IL 60030',
      keyword: 'fillory'
    }),
    User.create({
      fullName: 'Kady Diaz',
      email: 'kadyd@email.com',
      number: '6467433337',
      password: '123',
      address: '7364 High Ave Pembroke Pines, FL 33028',
      keyword: 'oreos'
    }),
    User.create({
      fullName: 'Margo Hanson',
      email: 'mhandon@email.com',
      number: '4657676767',
      password: '123',
      address: '275 Oak Street Xenia, OH 45385',
      keyword: 'passionfruit'
    }),
    User.create({
      fullName: 'Eliot Waugh',
      email: 'elwaugh@email.com',
      number: '5165657676',
      password: '123',
      address: '997 Woodland Circle Lakeville, MN 55044',
      keyword: 'king'
    }),
    User.create({
      fullName: 'Julia Wicker',
      email: 'jules@email.com',
      number: '46596696606',
      password: '123',
      address: '5 Shady St Nampa, ID 83651',
      keyword: 'shady'
    }),
    User.create({
      fullName: 'Penny Adiyodi',
      email: 'pennya@email.com',
      number: '6463644444',
      password: '123',
      address: '75 Fieldstone Streett Troy, NY 12180',
      keyword: 'florida'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

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

if (module === require.main) {
  runSeed()
}

module.exports = seed
