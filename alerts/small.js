import React from 'react'
import {connect} from 'react-redux'

const Small = (props) => {
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
                  You are receiving this alert from {userName} via the Pizza Now app because XXX. They are currently located at {userAddress} and you can keep track of their location using *geolocation*. {userName} would like you to check up on them via call or text immediately. You can reach them at {userPhone}. 
                  <br/>
                  {userName}'s safety word is <i>'{keyword}'</i>. If they say <i>'{keyword}'</i> when you speak to them, it means they are in danger and need you to <strong>contact the authorities immediately.</strong>
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
        keyword: state.user.keyword
      }
}

export default connect(mapState)(Small)