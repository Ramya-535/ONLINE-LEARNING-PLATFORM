import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [photo, setPhoto] = useState();
  const navigateTo = useNavigate();
  const { register, handleSubmit } = useForm();
  const handlePhoto = (e) => setPhoto(e.target.files[0]);

  const student = JSON.parse(sessionStorage.getItem("student"));
  console.log(student, "student");
  const rollNumber = student._id;
  const updateProfileSubmit = async (data) => {
    const formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.append("studentPhoto", photo);
    try {
      const response = await AxiosApi.put(
        `student/update/${rollNumber}`,
        formData
      );
      console.log(response, "update profile");
      toast.success(response.data.msg);
      // window.location.reload()
    } catch (error) {
      console.error(error);
      toast.error("Error Occurred");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="text-center mt-5">
          <h1>Update Profile</h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form
                    id="update-profile-form"
                    onSubmit={handleSubmit(updateProfileSubmit)}
                    encType="multipart/form-data"
                  >
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name *"
                              {...register("studentName")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_email">Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email *"
                              {...register("studentEmail")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_mobile">Roll Number *</label>
                            <input
                              id="form_rollNumber"
                              type="text"
                              value={student.rollNumber || ""}
                              readOnly
                              className="form-control"
                              placeholder="Enter Roll Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_mobile">Mobile Number *</label>
                            <input
                              id="form_mobile"
                              type="number"
                              className="form-control"
                              placeholder="Enter Mobile Number *"
                              {...register("mobileNumber")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_password">Password *</label>
                            <input
                              id="form_password"
                              type="password"
                              className="form-control"
                              placeholder="Enter Password *"
                              {...register("password")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_photo">Upload Photo *</label>
                            <input
                              type="file"
                              id="studentPhoto"
                              onChange={handlePhoto}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_address">Address *</label>
                            <textarea
                              id="form_address"
                              className="form-control"
                              placeholder="Enter Address"
                              {...register("address")}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-grid gap-2 col-6 mx-auto mt-5">
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#5a56cc" }}
                          type="submit"
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
