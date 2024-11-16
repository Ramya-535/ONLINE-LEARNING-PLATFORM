import React, { useEffect, useState } from "react";

const AddStudent = () => {
 
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
                    <form id="contact-form" role="form">
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
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_lastname">
                                Roll Number *
                              </label>
                              <input
                                type="text"
                               
                                className="form-control"
                                placeholder=" Enter Roll Number *"
                                
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
                              />
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="form_email">
                                Year of Study *
                              </label>
                              <select name="" className="form-select">
                                <option value="">----Select ----</option>
                                <option value="">I Year</option>
                                <option value="">II Year</option>
                                <option value="">III Year</option>
                                <option value="">IV Year</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="form_need">Semester</label>
                            <select name="" className="form-select">
                            <option value="">----Select ---- </option>
                            <option value="">I </option>
                             <option value="">II</option>
                            </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_need">Password *</label>
                              <input
                                id="password"
                                type="password"
                                // name="surname"
                                className="form-control"
                                placeholder="Please enter your password *"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="form_email">Upload Photo *</label>
                              <input
                                type="file"
                                name=""
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
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                          <button className="btn text-white" style={{backgroundColor:"#5a56cc"}} type="button">
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
