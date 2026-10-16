import React from "react"
import StudentCard from "./StudentCard"
function StudentList({ students }) {
  if (students.length === 0) {
    return <p>No students available</p>
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard student={student} />
      ))}
    </div>
  )
}

export default StudentList
