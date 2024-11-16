import React, { useEffect, useState } from "react";
import Select from "react-select";
import subjects from "./subjects";
const UpdateFaculty = () => {
  const [handleViewForms, setHandleViewForms] = useState(false);
  const [generatedID, setGeneratedID] = useState("");
  const [usedIDs, setUsedIDs] = useState([]);
  function generateID() {
    const prefix = "YMTS-"; // Static prefix
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    let newID;
    do {
      const randomNumbers = randomNumber;
      newID = prefix + randomNumbers;
    } while (usedIDs.includes(newID));

    setUsedIDs([...usedIDs, newID]); // Add the new ID to the list of used IDs
    setGeneratedID(newID);
  }

  // Use useEffect to generate the ID when the component mounts
  useEffect(() => {
    generateID();
  }, []);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    selected.length<=3&&setSelectedOptions(selected);
  };
  return (
    <div>
      <div className="container">
        <div className=" text-center mt-5 ">
          <h1>Update Faculty</h1>
        </div>
        <div className="row ">
          <div className="col-12 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
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
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_name">Faculty Name *</label>
                            <input
                              id="form_name"
                              type="text"
                              //name="name"
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
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_email">Qualification *</label>
                            <select name="" className=" form-select ">
                              <option value="">----Select ----</option>

                              <option value="">UG</option>
                              <option value="">PG</option>
                              <option value="">PhD</option>
                              <option value="">OTHERS</option>
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
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
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
                        </div>
                        <div className="col-md-6">
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

                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="form_need">
                              Upload Faculty Photo *
                            </label>
                            <input type="file" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Address *</label>
                            <textarea
                              //name="message"
                              className="form-control"
                              placeholder="Enter Complete Address"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                        <button
                          className="btn text-white"
                          style={{ backgroundColor: "#5a56cc" }}
                          type="button"
                        >
                          Update
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

export default UpdateFaculty;
