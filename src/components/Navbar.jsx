import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>MV Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Mohit</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
