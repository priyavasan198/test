import React from "react"
import {Card,CardContent,Typography} from "@mui/material"
function Student({ student }) {
  return (
    <Card style={{width:"250px", padding:"10px", borderRadius:"10px"}}>
      <CardContent>
        <Typography variant="h5" style={{marginBottom:"15px",fontWeight:"bold"}}>
          Student Information
        </Typography>
        <Typography variant="body1" style={{margin:"10px"}}>
          <b>Name:</b> {student.name}
        </Typography>
        <Typography variant="body1" style={{margin:"10px"}}>
          <b>Department:</b> {student.department}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default Student
