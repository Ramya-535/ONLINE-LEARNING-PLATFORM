import React, { useEffect, useState } from "react";
import AxiosApi, { url } from "../AxiosAPI";
import { toast } from "react-toastify";

const HodCheckAssignment = () => {
  const [assignments, setAssignments] = useState();
  const [studentAnswer, setStudentAnswer] = useState();
  const handleCheckboxChange = (id) => {
    const updatedAssignments = assignments.map((assignment) =>
      assignment.id === id
        ? { ...assignment, checked: !assignment.checked }
        : assignment
    );
    setAssignments(updatedAssignments);
  };
  const [courseId, setCourseId] = useState();
  const sendStatusToBackend = async (id, checked) => {
    const formData = new FormData();
    formData.append("courseId", courseId);
    formData.append("facultyId", facultyId);
    formData.append("answerId", id);
    //formData.append()
    try {
      const res = await AxiosApi.post(`answer/check-authorization`, formData);
      toast.success(res?.data?.msg);
      console.log(res);
      //   {"courseId": courseId, "facultyId":facultyId , "answerId":id,
      //   // "checked":checked
      // });
      setInterval(() => window.location.reload(), 1000);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
    // Send the status (id and checked) to the backend using an API call or other mechanism.
    // Implement your backend logic to handle the status update.
    console.log(`Assignment ${id} checked: ${checked}`);
  };
  const faculty = JSON.parse(sessionStorage.getItem("faculty"));
  const facultyId = faculty.facultyId;
  const getAssignmentsAnswers = async () => {
    try {
      const result = await AxiosApi.get(`courses/faculty/${facultyId}`);
      console.log(result," result");
      // console.log(result.data," result2");
      const assignments = result.data.filter(
        (item) => item.category === "Assignment"
      );
      setAssignments(assignments);
      console.log(assignments, "assignmen");
    } catch (error) {}
  };
  useEffect(() => {
    getAssignmentsAnswers();
  }, []);

  const openStudentDetails =async (id) => {
    // setCourseId(data.id);
    // setStudentAnswer(data.assignment.answers);
    //console.log(data);
    try {
      const res= await AxiosApi.get(`get/assignments/${id}`);
console.log(res, "asignmentssss");
    } catch (error) {
      console.error(error);
    }
  };
  const downloadPdfMaterial = (file) => {
    // Replace 'pdfLink' with your actual PDF download link
    const pdfLink = `http://localhost:5000/${file}`;
    // console.log(pdfLink);
    window.open(pdfLink, "_blank"); // Opens the PDF link in a new tab for download
  };
  return (
    <div>
      <h3>Assignments</h3>
      <table className="table table-hover table-bordered table-striped table-primary table-responsive-lg  ">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Checked</th> */}
            <th>Subject Name</th>
            <th>Deadline</th>
            {/* <th>Description</th> */}
            <th>Download </th>
          </tr>
        </thead>
        <tbody>
          {assignments &&
            assignments.map((assignment, index) => (
              <tr key={assignment._id}>
                <td>{index + 1}</td>
                {/* <td>
              <input
                type="checkbox"
                name={`checkbox-${assignment.id}`}
                checked={assignment.checked}
                onChange={() => {
                  handleCheckboxChange(assignment.id);
                  sendStatusToBackend(assignment.id, !assignment.checked);
                }}
              />
            </td> */}
                <td>{assignment.subject}</td>
                <td>
                  {assignment.date}, {assignment.deadline}
                </td>
                {/* <td>{assignment.description}</td> */}
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => openStudentDetails(assignment._id)}
                  >
                    View
                    {/* <i className="fa-regular fa-circle-down"></i> */}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <table className="table table-hover table-bordered table-striped table-primary table-responsive-lg  ">
        <thead>
          <tr>
            <th>#</th>
            <th>Check</th>
            <th>Student Name </th>
            <th>Roll Number</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {studentAnswer &&
            studentAnswer.map((item, index) => (
              <tr
                style={item.checked ? { textDecoration: "line-through" } : {}}
                key={item._id}
              >
                <td>{index + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    name={`checkbox-${item._id}`}
                    checked={item.checked}
                    onChange={() => {
                      handleCheckboxChange(item._id);
                      sendStatusToBackend(item._id, !item.checked);
                    }}
                  />
                </td>
                <td>{item.student.studentName}</td>
                <td>{item.student.rollNumber}</td>
                <td>{item.answer?.join(", ")}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => downloadPdfMaterial(item.file)}
                  >
                    <i className="fa-regular fa-circle-down"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HodCheckAssignment;
