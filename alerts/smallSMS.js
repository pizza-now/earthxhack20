const sendSmallSMS = () => {
      var messagebird = require('messagebird')('w1Rgxb9u7jLDYhC2STwfruF35');

  const userName = 'Alice Quimbly'
  const userAddress = '123 South Bent Road'
  const userPhone = '0013108833276'
  const keyword = 'mushrooms'
  const contactName = 'Minerva'


  messagebird.messages.create({
      originator : 'Pizza Now',
      recipients : [ userPhone ],
      body :  `Hi ${contactName}, You are receiving this alert from ${userName} via the Pizza Now app because of a domestic violence situation that requires your response. ${userName} would like you to check up on them via call or text immediately at ${userPhone.slice(3)}. ${userName}'s emergency word is '${keyword}'. If they say '${keyword}' when you speak to them it means they are in danger. If they communicate their safety word or you don't get any response from them after receiving this message, please contact the authorities immediately and make your way to ${userName}'s location. They are currently located at ${userAddress} and you can keep track of their location using *geolocation*. Stay Safe - The Pizza Now Team`
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



module.exports = sendSmallSMS
