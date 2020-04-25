import React from 'react'

const Large = (props) => {
      const { 
            userName,
            userAddress,
            userPhone,
            keyword,
            contactName,
             

      } 

      return (
            <div>
                  Hi {contactName},
                  <br/>
                  You are receiving this alert from {userName} via the Pizza Now app because XXX. They are currently located at {userAddress} and you can keep track of their location using *geolocation*. {userName} is in danger and requires immediate help. Please contact the authorities and make your way to {userName}'s location.
                  <br/>
                  Stay Safe,
                  <br/>
                  The Pizza Now Team
                
            </div>
      )
}

const mapState = state => {
      return {
        userName: state.user.fullName,
        contactName: state.contact.fullName,
        userAddress: state.user.addres,
        userPhone: state.user.number,
      }
}

export default connect(mapState)(Large)