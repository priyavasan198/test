import React from "react"
import {Card,CardContent,Typography} from "@mui/material"

function EmployeeCard({ employee }) {
  return (
    <Card style={{ width: "300px", padding: "10px" }}>
      <CardContent>
        <Typography variant="h5" style={{fontWeight:"bold", marginBottom:"10px"}}>
          Employee Details
        </Typography>

        <Typography variant="body1" style={{margin:"5px"}}>
          <b>Name:</b> {employee.name}
        </Typography>

        <Typography variant="body1" style={{margin:"5px"}}>
          <b>Role:</b> {employee.role}
        </Typography>

        <Typography variant="body1" style={{margin:"5px"}}>
          <b>Salary:</b> ₹{employee.salary}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EmployeeCard
