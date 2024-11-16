import React, { useState } from "react";
import Select from "react-select";
import subjects from "./subjects";

const UpdateSubject = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };
//   const handleButtonClick = () => {
//     for (let selectedOption of selectedOptions) {
//       console.log(selectedOption);
//       console.log(selectedOption.label);

//       alert(`${selectedOption.label}`);
//     }
//     console.log(selectedOptions, ":gjhafakbsbfksfhkb");
//   };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3>Update Subject</h3>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Subject
                  </label>
                  <Select
                    options={subjects}
                    isMulti
                    placeholder="Enter Subject Name"
                    onChange={handleSelectChange}
                    value={selectedOptions}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Year
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Semester
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Faculty Name
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                  <button className="btn text-white" style={{backgroundColor:"#5a56cc"}} type="button">
                    Update
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

export default UpdateSubject;
