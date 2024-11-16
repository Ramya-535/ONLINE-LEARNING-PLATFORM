import React, { useEffect, useState } from "react";
import AxiosApi from "../AxiosAPI";

const Marksheet = () => {
  const student = JSON.parse(sessionStorage.getItem("student"));
  const [marks, setMarks] = useState();
  const getMarksByRollNumber = async () => {
    try {
      const response = await AxiosApi.get(
        `marks/rollNumber/${student?._id}`
      );
      console.log("get Marks:", response?.data?.Marks);
      setMarks(response?.data);
    } catch (error) {
      console.log("getMarksError:", error);
    }
  };
  useEffect(() => {
    getMarksByRollNumber();
  }, []);
  return (
    <div>
      <table className="table table-bordered  table-responsive table-info table-hover ">
        <thead>
          <tr>
            <th colSpan={5}> Student Name: {student?.studentName}</th>
          </tr>
          <tr>
            <th colSpan={3}>Roll Number: {student?._id}</th>
            <th colSpan={2}>Semester: {student?.semester}</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Subject Name</th>
            <th>Exam Name</th>
            <th>Total Marks</th>
            <th>Obtain Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks &&
            marks.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.subject}</td>
                <td>{item.examType}</td>
                <td>{item.totalMarks}</td>
                <td>{item.obtainedMarks}</td>
              </tr>
            ))}

          <tr>
            <td colSpan={4}>Total Marks</td>
            <td>
            {marks&&marks.reduce((total, item) => {
        console.log("Obtained Marks:", item.obtainedMarks);
        return total + parseInt(item.obtainedMarks || 0);
      }, 0)}/ {marks&&marks.reduce((total, item) => {
        console.log("Obtained Marks:", item.totalMarks);
        return total + parseInt(item.totalMarks || 0);
      }, 0)}
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marksheet;
