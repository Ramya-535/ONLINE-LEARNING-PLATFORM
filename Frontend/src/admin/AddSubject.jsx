import React, { useEffect, useState } from "react";
import Select from "react-select";
import subjects1 from "../subjects1";
import { useForm } from "react-hook-form";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";

const AddSubject = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectSemester, setSelectSemester] = useState();
  const [facultyName, setFacultyName] = useState();
  const [facultyId, setFacultyId] = useState();
  const [faculties, setFaculties] = useState();
  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };
  const [years, setYears] = useState();
  //   const handleButtonClick = () => {
  //     for (let selectedOption of selectedOptions) {
  //       console.log(selectedOption);
  //       console.log(selectedOption.label);

  //       alert(`${selectedOption.label}`);
  //     }
  //     console.log(selectedOptions, ":gjhafakbsbfksfhkb");
  //   };
  const handleYearChange = (e) => {
    setYears(e.target.value);
  };
  const getAllFacs = async () => {
    try {
      const results = await AxiosApi.get(`faculty`);
      setFaculties(results.data);
      console.log(results.data, "all facs");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllFacs();
  }, []);
  const { register: registerSubject, handleSubmit: handleSubmitSubject } =
    useForm();
  const subjectSumbit = async (data) => {
    // const [facultyId, facultyName1] = facultyName.split('_');

    console.log(facultyName, "data2");
    data.semester = years;
    data.facultyName = facultyName;
    data.facultyId = facultyId;
    try {
      const result = await AxiosApi.post(`subject/add`, data);
      console.log(data);
      toast.success(result.data.msg);
    } catch (error) {
      toast.error("Error Occured");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3>Add Subject</h3>
                <form onSubmit={handleSubmitSubject(subjectSumbit)}>
                  <div className="col-12">
                    <label htmlFor="" className="form-label">
                      Faculty Name
                    </label>
                    {/* <input type="text" className="form-control" {...registerSubject("facultyName")} /> */}
                    <select
                      name=""
                      //  {...registerSubject("facultyId")}
                      className=" form-select "
                      onChange={(e) => {
                        // setFacultyId(e.target.value)
                        const [facultyId, facultyName1] =
                          e.target.value.split("_");
                        console.log(facultyId, "data");
                        setFacultyName(facultyName1);
                        setFacultyId(facultyId);
                      }}
                    >
                      <option value="">---Select---</option>
                      {faculties &&
                        faculties.map((item) => (
                          <option
                            key={item.id}
                            value={`${item._id}_${item.facultyName}`}
                          >
                            {item.facultyName}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Select Semester</label>
                    <select
                      name=""
                      className="form-control"
                      required
                      onChange={(e) => setSelectSemester(e.target.value)}
                    >
                      <option value="">Select </option>
                      <option value="odd">Odd</option>
                      <option value="even">Even</option>
                    </select>
                  </div>
                  <div className="col-12">
                    {selectSemester === "odd" && (
                      <div className="col-lg-6 mt-1 ">
                        <label className="form-label">Odd Semester</label>
                        <select
                          className="form-control"
                          name=""
                          required
                          onChange={(e) => setYears(e.target.value)}
                        >
                          <option value="">Select </option>
                          <option value="I-I">I-I</option>
                          <option value="II-I">II-I</option>
                          <option value="III-I">III-I</option>
                          <option value="IV-I">IV-I</option>
                        </select>
                      </div>
                    )}
                    {selectSemester === "even" && (
                      <div className="col-lg-6 mt-1 ">
                        <label className="form-label">Even Semester</label>
                        <select
                          className="form-control"
                          name=""
                          required
                          onChange={(e) => setYears(e.target.value)}
                        >
                          <option value="">Select </option>
                          <option value="I-II">I-II</option>
                          <option value="II-II">II-II</option>
                          <option value="III-II">III-II</option>
                          <option value="IV-II">IV-II</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {years && (
                    <div className="col-12">
                      <label htmlFor="" className="form-label">
                        Subject
                      </label>
                      <select
                        name=""
                        className="form-select"
                        {...registerSubject("subjects")}
                      >
                        <option value="">----Select ----</option>
                        {subjects1.map(
                          (item) =>
                            item.year === years && (
                              <option value={item.name} key={item.name}>
                                {item.name}
                              </option>
                            )
                        )}
                      </select>
                      {/* <Select
                    options={subjects}
                    isMulti
                    placeholder="Enter Subject Name"
                    onChange={handleSelectChange}
                    value={selectedOptions}
                  /> */}
                    </div>
                  )}
                  <div className="d-grid gap-2 col-6 mx-auto mt-5 ">
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#5a56cc" }}
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
