import React from 'react'

const AllStudentMarks = () => {
  return (
    <div>
        <table className=' table table-hover  table-primary  table-responsive table-bordered mt-3'>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Roll Number</th>
                    <th>Semester</th>
                    <th>Subject</th>
                    <th>Marks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lalit G</td>
                    <td>27001230</td>
                    <td>I-II</td>
                    <td>Java Development</td>
                    <td><input type="text" placeholder='enter marks'/></td>
                    <td><button>Submit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AllStudentMarks