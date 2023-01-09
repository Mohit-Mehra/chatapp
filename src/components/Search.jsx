import React from 'react'

const Search = () => {
  return (
    <div className='serach'>
      <div className="searchForm">
        <input type="text" placeholder='Find User'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userChatInfo">
          <span>Mohit</span>
        </div>
      </div>
    </div>
  )
}

export default Search
