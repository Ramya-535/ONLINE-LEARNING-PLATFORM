import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AxiosApi from "../AxiosAPI";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
 const {handleSubmit:handleSubmitPasswordstud, register:registerPasswordStudent}=useForm();
 const faculty= JSON.parse(sessionStorage.getItem("faculty"));
 const navigateTo=useNavigate()
 const changePassword=async(data)=>{
  try {
    const res =await AxiosApi.post(`student/change-password`, data);
    sessionStorage.removeItem("faculty")
    navigateTo('/')
  } catch (error) {
    console.log("change error:",error);
  }
 }
  return (
    <div>
      <div className="container">
        <div className="row"> 
          <div className="col-12">
            <div className="card">
              <form onSubmit={handleSubmitPasswordstud(changePassword)}>
              <div className="card-body">
                <h3>Change Password</h3>
                <div className="col-12">
                  <label className="form-label">
                    Email
                  </label>
                 <input type="email"  className="form-control"
                 {...registerPasswordStudent("email")}
                 />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Old Password
                  </label>
                  <input type="password" className="form-control" 
                 {...registerPasswordStudent("oldPassword")}
                 />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    New Password
                  </label>
                  <input type="password" className="form-control" 
                 {...registerPasswordStudent("newPassword")}
                 />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                   Confirm Password
                  </label>
                  <input type="password" className="form-control"
                 {...registerPasswordStudent("confirmPassword")}
                 />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                  <button className="btn text-white" style={{backgroundColor:"#5a56cc"}} type="submit">
                    Change
                  </button>
                </div>
              </div></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
