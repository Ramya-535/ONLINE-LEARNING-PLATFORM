import React, { useEffect, useState } from "react";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";

const SendAssignMent = () => {
  const [material, setMaterial] = useState();
  const student = JSON.parse(sessionStorage.getItem("student"));
  const [assignmentId, setAssignmentId] = useState();
  const [file, setFile] = useState();
  const handleFile = (e) => setFile(e.target.files[0]);
  const [description, setDescription] = useState();
  const getStudyMaterial = async () => {
    try {
      const response = await AxiosApi.get(`courses/get/${student.semester}`);
      //setMaterial(response.data.Courses)
      const assignments = response.data.filter(
        (item) => item.category === "Assignment"
      );
      setMaterial(assignments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudyMaterial();
  }, []);
  //console.log(material);
  const sendAssignment = async () => {
    const formData = new FormData();
    formData.append("answers", description);
    formData.append("assignmentId", assignmentId);
    formData.append("rollNumber", student._id);

    formData.append("file", file);
    try {
      const response = await AxiosApi.post(`answer/add-answer`, formData);
      console.log(response);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while processing your request.");
      }
    }
  };
  const handleId = (id) => {
    setAssignmentId(id);
    console.log(id);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3>Send Assignment</h3>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Subject Name
                  </label>
                  <select
                    name=""
                    className=" form-select "
                    onChange={(e) => handleId(e.target.value)}
                  >
                    {/* here existing assignments which are uploaded by faculty he will view */}
                    <option value="">---select---</option>

                    {material &&
                      material.map((item) => (
                        <option
                          value={item._id}
                          key={item._id}
                          // onSelect={() => setAssignmentId(item.assignment.id)}
                        >
                          {item.subject}, Deadline: {item.date},{" "}
                          {item.deadline}{" "}
                        </option>
                      ))}
                    {/* <option value="">Subject2</option> */}
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Upload Assignments
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFile}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Assignment Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#5a56cc" }}
                    type="button"
                    onClick={sendAssignment}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendAssignMent;
