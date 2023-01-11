import React from 'react'
import Cam from '../img/cam.png'
import Add from '../img/plus.png'
import More from '../img/option.png'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Mohit</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat
