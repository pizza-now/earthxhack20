const User = require('./users')
const Contact = require('./contacts')
const Order = require('./orders')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Contact.belongsTo(User)
User.hasMany(Contact)
Order.belongsTo(User) //order belongs to one user with userId
User.hasMany(Order)
// User.afterCreate(user => {
//   //create the User's cart
//   Order.create({
//     dateOfSubmission:new Date(),
//     userId: user.id
//   })
// })
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Contact,
  Order
}
