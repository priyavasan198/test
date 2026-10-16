import React from "react"
import { Typography } from "@mui/material"

function EmployeeSkills({skills}) {
  return (
    <div style={{ marginTop: "15px" }}>
      <Typography variant="h6" style={{fontWeight:"bold"}}>
        Skills
      </Typography>
      {skills.map((skill, index) => (
        <Typography variant="body1">
          {skill}
        </Typography>
      ))}
    </div>
  )
}
export default EmployeeSkills
