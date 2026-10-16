import React, { useState } from "react";
function StudentCard({student}) {
  const {name,username,email,address} = student
  const [showDetails, setShowDetails] = useState(true)
    return (
    <div style={{ border: "green", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      {showDetails && (
        <div>
          <p>Username: {username}</p>
          <p>City: {address.city}</p>
        </div>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  )
}
export default StudentCard
