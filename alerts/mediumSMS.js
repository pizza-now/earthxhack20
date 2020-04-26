import axios from 'axios'

const sendMediumSMS = async (user, geolocation, contacts) => {
    var messagebird = require('messagebird')('w1Rgxb9u7jLDYhC2STwfruF35');

    contacts.forEach(contact => {
        messagebird.messages.create({
            originator: 'Pizza Now',
            recipients: contact.phoneNumber,
            body: `Hi ${contact.fullName}, You are receiving this alert from ${user.fullName} via the Pizza Now app because of a domestic violence situation that requires your response. They are currently located at ${user.address} and you can keep track of their location using ${geolocation}. ${user.fullName} would like ${process.env.testAPIKey} you to go to their location immediately. They do not feel safe and want you to come get them ASAP. You can reach them at ${user.number}. ${user.fullName}'s emergency word is '${user.keyword}'. If they say '${user.keyword}' when you speak to them it means they are in danger. If they communicate their safety word or you don't get any response from them after receiving this message, please contact the authorities immediately and make your way to ${user.fullName}'s location. Stay Safe - The Pizza Now Team`
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
    })
    const order = {
        message: body,
        dateOfSubmission: new Date(),
        locationOfSubmission: geolocation,
        userId: user.id
    }
    await axios.post('/api/order', order)
}

module.exports = sendMediumSMS
