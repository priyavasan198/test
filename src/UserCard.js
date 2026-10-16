import React from "react"
function UserCard({user}) {
  return (
    <div style={{border:"1px solid gray", padding:"15px", margin:"10px", borderRadius:"5px", width:"300px" }}>
      <h3 style={{margin:"5px" }}>{user.name}</h3>
      <p style={{margin:"5px" }}>Email: {user.email}</p>
      <p style={{margin:"5px" }}>City: {user.address.city}</p>
    </div>
  )
}
export default UserCard
