
const sendLargeSMS = (user, geolocation, contacts) => {
  var messagebird = require('messagebird')('9EAXgACh6A77SMu0Uqo0IZBpj');

  contacts.forEach(contact => {
    messagebird.messages.create({
      originator: 'Pizza Now',
      recipients: contact.phoneNumber,
      body: `Hi ${contact.fullName}, You are receiving this alert from ${user.fullName} via the Pizza Now app because of a domestic violence situation that requires immediate action. ${user.fullName} is in danger and requires immediate help. ${user.fullName} iscurrently located at ${user.address} and you can keep track of their location using ${geolocation}. Please contact the authorities and make your way to ${user.fullName}'s location. Stay Safe - The Pizza Now Team`
    },
      function (err, response) {
        if (err) {
          console.log("ERROR:");
          console.log(err);
        } else {
          console.log("SUCCESS:");
          console.log(response);
        }
      })
  })
}

module.exports = sendLargeSMS


