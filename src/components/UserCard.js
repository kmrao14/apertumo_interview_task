import React from 'react'

const UserCard = ({ userInfo }) => {
   return (
      <div className="list-row list-item">
         <div className="data-col user-firstname">{userInfo.firstName}</div>
         <div className="data-col user-lastname">{userInfo.lastName}</div>
         <div className="data-col user-age">{userInfo.age}</div>
      </div>
   )
}

export default UserCard;