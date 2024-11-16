import React, { useEffect, useState } from "react";
import UploadMaterial from "./UploadMaterial";
import subjects from "../hod/subjects";
import Select from "react-select";
import subjects1 from "../subjects1";
import AxiosApi, { url } from "../AxiosAPI";
import { toast } from "react-toastify";
export const downloadFunction=async(category, obj)=>{
  console.log(category, obj);
  if(category==="Video"){
try {
  window.open(obj.link, "_blank")
} catch (error) {
  console.log(error);
}
  }else if(category==="PTP"){
    try {
      window.open(`http://localhost:5000/${obj.file}`, "_blank")
    } catch (error) {
      console.log(error);
    }
  }
  else if(category==="EBook"){
    try {
      window.open(`http://localhost:5000/${obj.file}`, "_blank")
    } catch (error) {
      console.log(error);
    }
  } else if(category==="Placement"){
    try {
      window.open(`http://localhost:5000/${obj.file}`, "_blank")
    } catch (error) {
      console.log(error);
    }
  }else if(category==="Material"){
    try {
      window.open(`http://localhost:5000/${obj.file}`, "_blank")
    } catch (error) {
      console.log(error);
    }
  }else if(category==="MidPaper"){
    try {
      window.open(`http://localhost:5000/${obj.file}`, "_blank")
    } catch (error) {
      console.log(error);
    }
  }else if(category==="Assignment"){
    try {
      window.open(`http://localhost:5000/${obj.file}`, "_blank")
    } catch (error) {
      console.log(error);
    }
  }
}
const AssignedSubjects = () => {
  const [id, setId] = useState();
  const faculty = JSON.parse(sessionStorage.getItem("faculty"));
  const getSubId = (id) => {
    console.log(id, "hjhjfjjj");
    setId(id);
  };
  const [selectedOptions, setSelectedOptions] = useState();
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [videoLink, setVideoLink] = useState();
  const [showMaterial, setShowMaterial] = useState();
  const [assignment, setAssignment] = useState({
    questions: "",
    date: "",
    deadline: "",
  });
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected.target.value);
    setSubject("");
    setCategory("");
    setYear("");
    setShowMaterial("");
  };
  const [fileToUpload, setFileToUpload] = useState();
  const handleFileUpload = (e) => {
    setFileToUpload(e.target.files[0]);
  };
  const sendMaterial = async () => {
    const formData = new FormData();
    formData.append("semester", year);
    formData.append("subject", subject);
    formData.append("category", category);
    videoLink&&formData.append("link", videoLink);
    fileToUpload && formData.append("file", fileToUpload);
    formData.append("facultyId", faculty._id);
    formData.append("facultyName", faculty.facultyName);
    if(assignment){
      formData.append("questions", assignment.questions);
      formData.append("date", assignment.date);
      formData.append("deadline", assignment.deadline);
    }
    console.log(assignment);
    try {
      const response = await AxiosApi.post(`courses/add`, formData);
      console.log(response);
      toast.success(response?.data?.msg);
    } catch (error) {
      console.log(error);
    }
  };
  const viewMaterial = async (year, subject) => {
    try {
      const response = await AxiosApi.get(`courses/${year}/get/${subject}`);
      console.log("get Material", response.data.courses);
      setShowUpload(false)
      setShowMaterial(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(()=>{viewMaterial()}, [year, subject])

  return (
    <div>
      <div className="container">
        <div className="row">
          <h4>Courses</h4>
          <div className="col-lg-6 mt-1 ">
            <label className="form-label">Select Semester</label>
            <select
              name=""
              className="form-control"
              required
              onChange={handleSelectChange}
            >
              <option value="">Select </option>
              <option value="odd">Odd</option>
              <option value="even">Even</option>
            </select>
          </div>
          {selectedOptions === "odd" && (
            <div className="col-lg-6 mt-1 ">
              <label className="form-label">Odd Semester</label>
              <select
                name=""
                className="form-control"
                required
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select </option>
                <option value="I-I">I-I</option>
                <option value="II-I">II-I</option>
                <option value="III-I">III-I</option>
                <option value="IV-I">IV-I</option>
              </select>
            </div>
          )}
          {selectedOptions === "even" && (
            <div className="col-lg-6 mt-1 ">
              <label className="form-label">Even Semester</label>
              <select
                name=""
                className="form-control"
                required
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select </option>
                <option value="I-II">I-II</option>
                <option value="II-II">II-II</option>
                <option value="III-II">III-II</option>
                <option value="IV-II">IV-II</option>
              </select>
            </div>
          )}
          {year && (
            <div className="col-lg-6 mt-1">
              <label htmlFor="" className="form-label">
                Subject
              </label>
              <select
                name=""
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
            <div className="col-lg-6 mt-1 ">
              <label className="form-label">Category</label>
              <select
                name=""
                className="form-control"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select </option>
                <option value="EBook">Ebook</option>
                <option value="PlacementQuestions">Placement Questions</option>
                <option value="Video">Videos</option>
                <option value="Assignment">Assignment</option>
                <option value="Material">Open Material</option>
                <option value="MidPaper">Mid Papers</option>
                <option value="PTP">Previous term Papers</option>
              </select>
            </div>
          )}
          {category && (
            <div className="col-lg-6 mt-1 justify-content-center ">
              <button
                className="btn btn-outline-success "
                onClick={() => viewMaterial(year, subject)}
                //()=>{
                //  viewMaterial
                // Replace 'videoLink' with your actual video link
                // const videoLink = "https://www.youtube.com/watch?v=xWLxhF3b5P8&ab_channel=Telusko";
                //window.open(videoLink, "_blank"); // Opens the video link in a new tab

                //}}
              >
                View
              </button>
              <button
                className="btn btn-outline-info "
                onClick={() => setShowUpload(true)}
              >
                Upload
              </button>
            </div>
          )}

          {category === "Video" && showUpload && (
            <div className="col-12">
              <div className="">
                <div className="card card-body">
                  <div className="col-9">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Video Link</p>
                      <input
                        className="form-control mb-3"
                        onChange={(e) => setVideoLink(e.target.value)}
                        type="text"
                        placeholder="https://www.example.com/videos"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="text mb-1 d-none ">.</p>
                    <button
                      className="btn btn-secondary "
                      type="button"
                      onClick={sendMaterial}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* collapse Material Upload */}

          {(category === "EBook" ||
            category === "PlacementQuestions" ||
            category === "Material" ||
            category === "PTP" ||
            category === "MidPaper") &&
            showUpload && (
              <div className="col-12">
                <div className="mt-3">
                  <div className="card card-body">
                    <div className="col-9">
                      <div className="d-flex flex-column">
                        <p className="text mb-1">Material Upload</p>
                        <input
                          className="form-control mb-3"
                          type="file"
                          onChange={handleFileUpload}
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <p className="text mb-1 d-none">.</p>
                      <button
                        className="btn btn-secondary "
                        onClick={sendMaterial}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* collapse Assignment Upload */}

          {category === "Assignment" && showUpload && (
            <div className="col-12  ">
              <div className="mt-3">
                <div className="card card-body ">
                  <div className="col-9">
                    <div className="d-flex flex-column">
                      <p className="text mb-1">Description</p>
                      <textarea
                        className="form-control mb-3"
                        rows={4}
                        placeholder="please mention few words about assignment"
                        onChange={(e)=> setAssignment({
                          ...assignment,
                        questions: e.target.value
                        })}
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <p className="text mb-1">Last Date</p>
                    <input
                      type="date"
                      className="form-control mb-3"
                     
                      onChange={(e)=> setAssignment({
                        ...assignment,
                      date: e.target.value
                      })}
                    />
                  </div>
                  <div className="col-9">
                    <p className="text mb-1">File Upload</p>
                    <input
                      type="file"
                      className="form-control mb-3"
                     onChange={handleFileUpload}
                    />
                  </div>
                  <div className="col-9">
                    <p className="text mb-1">Time</p>
                    <input
                      type="time"
                      className="form-control mb-3"
                      onChange={(e)=> setAssignment({
                        ...assignment,
                      deadline: e.target.value
                      })}
                    />
                  </div>
                  <div className="col-3">
                    <p className="text mb-1">.</p>
                    <button className="btn btn-secondary" onClick={sendMaterial}>Upload</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showMaterial &&!showUpload&& (
            <table className=" table table-hover table-active table-bordered table-striped mt-3 ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Semester</th>
                  <th>Category</th>
                  <th>Uploaded By</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {showMaterial.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.subject}</td>
                    <td>{item.semester}</td>
                    <td>{item.category}</td>
                    <td>{item.facultyName}</td>
                    <td>
                      <button className=" btn btn-link" onClick={()=>downloadFunction(item.category, item)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignedSubjects;
