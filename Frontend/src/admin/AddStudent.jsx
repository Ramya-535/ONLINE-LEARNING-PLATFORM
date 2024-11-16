import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [photo, setphoto] = useState();
  const navigateTo = useNavigate();
  const { register: registerStudent, handleSubmit: handleAddStudent } =
    useForm();
  const handlePhoto = (e) => setphoto(e.target.files[0]);
  const addStudentSubmit = async (data) => {
    console.log(data, "dataatdaad");
    const formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.append("studentPhoto", photo);
    try {
      const response = await AxiosApi.post("student/add", formData);
      console.log(response);
      toast.success(response.data.message || "Student Added Successfully");
    } catch (error) {
      console.log(error, "Student error");
    }
  };

  return (
    <div>
      <div>
        <div className="container">
          <div className=" text-center mt-5 ">
            <h1>Add Student</h1>
          </div>
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                  <div className="container">
                    <form
                      id="contact-form"
                      role="form"
                      onSubmit={handleAddStudent(addStudentSubmit)}
                      encType="multipart/file"
                    >
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_name">Student Name *</label>
                              <input
                                id="form_name"
                                type="text"
                                //name="name"
                                className="form-control"
                                placeholder="Enter Student Name *"
                                {...registerStudent("studentName")}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_lastname">Email *</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" Enter email *"
                                {...registerStudent("studentEmail")}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_lastname">
                                Mobile Number *
                              </label>
                              <input
                                id="form_lastname"
                                type="number"
                                required
                                className="form-control"
                                placeholder="Enter Mobile Number *"
                                {...registerStudent("mobileNumber")}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="form_email">
                                Year of Study *
                              </label>

                              <select
                                name="semester"
                                className="form-select"
                                {...registerStudent("semester")}
                              >
                                <option value="">----Select ----</option>
                                <option value="I-I">I year I-semester</option>
                                <option value="I-II">I year II-semester</option>
                                <option value="II-I">II year I-semester</option>
                                <option value="II-II">
                                  II year II-semester
                                </option>
                                <option value="III-I">
                                  III year I-semester
                                </option>
                                <option value="III-II">
                                  III year II-semester
                                </option>
                                <option value="IV-I">IV year I-semester</option>

                                <option value="IV-II">
                                  IV year II-semester
                                </option>
                              </select>
                            </div>
                          </div>
                          {/* <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="form_need">Semester</label>
                              <select name="" className="form-select">
                                <option value="">----Select ---- </option>
                                <option value="">I </option>
                                <option value="">II</option>
                              </select>
                            </div>
                          </div> */}
                          <div className="col-md-6 mt-2">
                            <div className="form-group">
                              <label
                                htmlFor="form_need"
                                className="text-danger"
                              >
                                Note*: Default Password is 123. After Login you
                                can change Password
                              </label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_email">Upload Photo *</label>
                              <input
                                type="file"
                                onChange={handlePhoto}
                                className="form-control"
                                required="required"
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_message">Address *</label>
                              <textarea
                                id="form_message"
                                //name="message"
                                className="form-control"
                                placeholder="Enter Complete Address"
                                {...registerStudent("address")}
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
    </div>
  );
};

export default AddStudent;
