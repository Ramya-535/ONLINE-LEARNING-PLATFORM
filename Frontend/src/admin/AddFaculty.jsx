import React, { useEffect, useState } from "react";
import Select from "react-select";
import subjects from "../hod/subjects";
import { useForm } from "react-hook-form";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";
const AddFaculty = () => {
const {register:registerFaculty, handleSubmit:handleFacultySubmit}=useForm()
const [photo, setphoto]=useState();
const handlePhoto=(e)=>setphoto(e.target.files[0])
const facultySubmit=async(data)=>{
  const formData=new FormData();
  for(let [key , value] of Object.entries(data)){
    formData.append(key, value)
  }
  formData.append("facultyPhoto", photo)

  try {
    const result = await AxiosApi.post("faculty/add", formData);
    console.log(result);
    toast.success(result.data.message);
  } catch (error) {
    console.log(error, "faculty error");
    // if (error.response && error.response.status === 409) {
    //   toast.error("An error occurred. Please try again.");
    // } else {
      
    //   // toast.error("Email Already exists.");
    // }
  }
  
}
  return (
    <div>
      <div className="container">
        <div className=" text-center mt-5 ">
          <h1>Add Faculty</h1>
        </div>
        <div className="row ">
          <div className="col-12 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={handleFacultySubmit(facultySubmit)} encType="multipart/file">
                    <div className="controls">
                      <div className="row">
                        {/* <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Faculty ID *</label>
                            <input
                              type="text"
                              //name="name"
                              className="form-control"
                              value={generatedID}
                              readOnly
                            />
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Faculty Name *</label>
                            <input
                              id="form_name"
                              type="text"
                              //name="name"
                              {...registerFaculty("facultyName")}
                              className="form-control"
                              placeholder="Please enter Faculty Name *"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_lastname">
                              Mobile Number *
                            </label>
                            <input
                              type="number"
                              required
                              className="form-control"
                              placeholder="Please enter your Mobile Number *"
                              {...registerFaculty("mobileNumber")}

                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Qualification *</label>
                            <select name="" className=" form-select "
                              {...registerFaculty("qualification")}
                              >
                              <option value="">----Select ----</option>

                              <option value="UG">UG</option>
                              <option value="PG">PG</option>
                              <option value="PhD">PhD</option>
                              <option value="OTHERS">OTHERS</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Experience *</label>
                            <input
                              max={15}
                              type="text"
                              // name="surname"
                              className="form-control"
                              placeholder="Experience *"
                              {...registerFaculty("experience")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email *</label>
                            <input
                        
                              type="text"
                              // name="surname"
                              className="form-control"
                              placeholder="Email *"
                              {...registerFaculty("email")}
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Subject *</label>
                            <Select
                              options={subjects}
                              isMulti
                              placeholder="Maximum 3 subject selection allowed"
                              onChange={handleSelectChange}
                              value={selectedOptions}
            
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Year *</label>
                            <select name="" className="form-select">
                              <option value="">----Select ----</option>
                              <option value="">I Year</option>
                              <option value="">II Year</option>
                              <option value="">III Year</option>
                              <option value="">IV Year</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label htmlFor="form_email">Semester *</label>
                            <select name="" className="form-select">
                              <option value="">----Select ---- </option>
                              <option value="">I </option>
                              <option value="">II</option>
                            </select>
                          </div>
                        </div> */}

                        
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label htmlFor="form_need" className="text-danger">Note*: Default Password is 123. After Login you can change Password</label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_need">
                              Upload Faculty Photo *
                            </label>
                            <input type="file" className="form-control" name="facultyPhoto" onChange={handlePhoto} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Address *</label>
                            <textarea
                              //name="message"
                              className="form-control"
                              placeholder="Enter Complete Address"
                              {...registerFaculty("address")}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#5a56cc" }}
                          type="submit"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.8 */}
          </div>
          {/* /.row*/}
        </div>
      </div>
    </div>
  );
};

export default AddFaculty;
