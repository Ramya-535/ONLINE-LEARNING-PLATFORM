import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";

const UpdateFacultyProfile = () => {
  const { register, handleSubmit } = useForm();
  const [photo, setPhoto] = useState();

  const handlePhoto = (e) => setPhoto(e.target.files[0]);

  const facultySubmit = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("facultyPhoto", photo);

    const faculty = JSON.parse(sessionStorage.getItem('faculty'));
    const id = faculty._id;  // Make sure 'faculty' is correctly parsed and has an 'id'
    try {
      const result = await AxiosApi.put(`faculty/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(result.data.msg);
    } catch (error) {
      toast.error("Update failed");
      console.error(error, "faculty update error");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Update Faculty Profile</h1>
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <form onSubmit={handleSubmit(facultySubmit)} encType="multipart/form-data">
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_name">Faculty Name *</label>
                        <input id="form_name" type="text" className="form-control" placeholder="Please enter Faculty Name *" {...register("facultyName")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_email">Email *</label>
                        <input type="email" className="form-control" placeholder="Please enter your email *" {...register("email")} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_mobile">Mobile Number *</label>
                        <input type="number" className="form-control" placeholder="Please enter your Mobile Number *" {...register("mobileNumber")} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_qualification">Qualification *</label>
                        <select className="form-select" {...register("qualification")}>
                          <option value="">----Select----</option>
                          <option value="UG">UG</option>
                          <option value="PG">PG</option>
                          <option value="PhD">PhD</option>
                          <option value="OTHERS">OTHERS</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_experience">Experience *</label>
                        <input type="number" className="form-control" placeholder="Experience *" {...register("experience")} max={15} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_password">Password *</label>
                        <input id="form_password" type="password" className="form-control" placeholder="Please enter your password *" {...register("password")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_address">Address *</label>
                        <input id="form_address" type="text" className="form-control" placeholder="Please enter your address *" {...register("address")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_photo">Upload Faculty Photo *</label>
                        <input type="file" className="form-control" name="facultyPhoto" onChange={handlePhoto} />
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    <button className="btn text-white" style={{ backgroundColor: "#5a56cc" }} type="submit" >
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
  );
};

export default UpdateFacultyProfile;
