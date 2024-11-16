import React, { useEffect, useState } from "react";
import subjects from "../hod/subjects"; // Assuming this file contains an array of subjects
import subjects1 from "../subjects1"; // Assuming this file contains subjects for each semester
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";

function AssignMarks() {
  const [selectedOptions, setSelectedOptions] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [totalMarks, setTotalMarks] = useState(0);
  const [obtainedMarks, setObtainedMarks] = useState({});
  const [details, setDetails] = useState([]);
  const [marksWithId, setMarksWithID] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected.target.value);
    setSubject("");
    setCategory("");
    setYear("");
  };

  const getStudentbySemester = async () => {
    try {
      const response = await AxiosApi.get(`student/get/semester/${year}`);
      console.log("Students:", response.data);
      setDetails(response.data);
    } catch (error) {
      console.log("getSemError:", error);
    }
  };

  useEffect(() => {
    if (year) {
      getStudentbySemester();
    }
  }, [year]);

  const handleMarksChange = (id, value) => {
    setMarksWithID((prevMarks) => {
      const updatedMarks = [...prevMarks];
      const index = updatedMarks.findIndex((item) => item.id === id);
      if (index !== -1) {
        updatedMarks[index].total = value;
      } else {
        updatedMarks.push({ id, total: value, obtain: "" });
      }
      return updatedMarks;
    });
  };

  const handleObtainMarksChange = (id, value) => {
    setMarksWithID((prevMarks) => {
      const updatedMarks = [...prevMarks];
      const index = updatedMarks.findIndex((item) => item.id === id);
      if (index !== -1) {
        updatedMarks[index].obtain = value;
      } else {
        updatedMarks.push({ id, total: "", obtain: value });
      }
      return updatedMarks;
    });
  };

  const submitMarks = async (rollNumber) => {
    const studentMarks = marksWithId.find((mark) => mark.id === rollNumber);
    if (studentMarks && studentMarks.obtain <= studentMarks.total) {
      try {
        const result = await AxiosApi.post(`marks`, {
          semester: year,
          examType: category,
          subject: subject,
          rollNumber: rollNumber,
          totalMarks: studentMarks.total,
          obtainedMarks: studentMarks.obtain,
        });
        console.log("Marks sent:", result);
        toast.success(result?.data.msg);
      } catch (error) {
        console.log("Submit marks error:", error);
      }
    } else {
      alert("Total Marks should be greater than or equal to obtained marks");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h4>Marks Assignment</h4>
        <div className="col-lg-3 mt-1">
          <label className="form-label">Select Semester</label>
          <select
            className="form-control"
            required
            onChange={handleSelectChange}
          >
            <option value="">Select</option>
            <option value="odd">Odd</option>
            <option value="even">Even</option>
          </select>
        </div>

        {selectedOptions === "odd" && (
          <div className="col-lg-3 mt-1">
            <label className="form-label">Odd Semester</label>
            <select
              className="form-control"
              required
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select</option>
              <option value="I-I">I-I</option>
              <option value="II-I">II-I</option>
              <option value="III-I">III-I</option>
              <option value="IV-I">IV-I</option>
            </select>
          </div>
        )}

        {selectedOptions === "even" && (
          <div className="col-lg-3 mt-1">
            <label className="form-label">Even Semester</label>
            <select
              className="form-control"
              required
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select</option>
              <option value="I-II">I-II</option>
              <option value="II-II">II-II</option>
              <option value="III-II">III-II</option>
              <option value="IV-II">IV-II</option>
            </select>
          </div>
        )}

        {year && (
          <div className="col-lg-3 mt-1">
            <label className="form-label">Subject</label>
            <select
              className="form-select"
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select</option>
              {subjects1.map(
                (item) =>
                  item.year === year && (
                    <option value={item.name} key={item.name}>
                      {item.name}
                    </option>
                  )
              )}
            </select>
          </div>
        )}

        {subject && (
          <div className="col-lg-3 mt-1">
            <label className="form-label">Exam Type</label>
            <select
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Mid-Sem-I">Mid-I</option>
              <option value="Mid-Sem-II">Mid-II</option>
              <option value="Assignment-I">Assignment-I</option>
              <option value="Assignment-II">Assignment-II</option>
            </select>
          </div>
        )}

        {category && (
          <table className="table table-hover table-primary table-responsive table-bordered mt-3">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Semester</th>
                <th>Subject</th>
                <th>Exam</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {details.length > 0 ? (
                details.map((item) => (
                  <tr key={item._id}>
                    <td>{item.studentName}</td>
                    <td>{item._id}</td>
                    <td>{year}</td>
                    <td>{subject}</td>
                    <td>{category}</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter total marks"
                        onChange={(e) =>
                          handleMarksChange(item._id, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter obtained marks"
                        onChange={(e) =>
                          handleObtainMarksChange(item._id, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => submitMarks(item._id)}
                        className="btn btn-success"
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No students registered for this semester</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AssignMarks;