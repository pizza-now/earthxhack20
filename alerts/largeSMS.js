
const sendLargeSMS = () => {
  var messagebird = require('messagebird')('93Sm3SEFArfNIlcTjXGehBBLQ');

  const userName = 'Alice Quimbly'
  const userAddress = '123 South Bent Road'
  const userPhone = '0013108833276'
  const contactName = 'minerva'


  messagebird.messages.create({
    originator: 'Pizza Now',
    recipients: [userPhone],
    body: `Hi ${contactName}, You are receiving this alert from ${userName} via the Pizza Now app because of a domestic violence situation that requires immediate action. ${userName} is in danger and requires immediate help. ${userName} is currently located at ${userAddress} and you can keep track of their location using *geolocation*. Please contact the authorities and make your way to ${userName}'s location. Stay Safe - The Pizza Now Team`
  },
    function (err, response) {
      if (err) {
        console.log("ERROR:");
        console.log(err);
      } else {
        console.log("SUCCESS:");
        console.log(response);
      }
    });
}

module.exports = sendLargeSMS


