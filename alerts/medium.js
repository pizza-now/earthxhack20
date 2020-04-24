import React from 'react'

const Medium = (props) => {
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
                  You are receiving this alert from {userName} via the Pizza Now app because XXX. They are currently located at {userAddress} and you can keep track of their location using *geolocation*. {userName} would like you to go to their location immediately. They do not feel safe and want you to come get them ASAP. You can reach them at {userPhone}. 
                  <br/>
                  {userName}'s safety word is <i>'{keyword}'</i>. If they say <i>'{keyword}'</i> when you speak to them, it means they are in danger and need you to <strong>contact the authorities immediately.</strong>
                  <br/>
                  Stay Safe,
                  <br/>
                  The Pizza Now Team
                
            </div>
      )
}

export default connect(mapState)(Medium)