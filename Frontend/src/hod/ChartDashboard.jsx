import React, { useEffect, useState } from "react";
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";

const Counter = ({ value, label, iconClass }) => (
  <div className="col-md-4 col-sm-6">
    <div className="counter">
      <span className="counter-value">{value}</span>
      <h3>{label}</h3>
      <div className="counter-icon">
        <i className={iconClass} />
      </div>
    </div>
  </div>
);

const ChartDashboard = () => {
  const [facultyCount, setFacultyCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [subjectCount, setSubjectCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facultiesResponse = await AxiosApi.get("faculty");
        setFacultyCount(facultiesResponse.data.length); // Use .length to get the count
        const studentsResponse = await AxiosApi.get("student");
        setStudentCount(studentsResponse.data.length); // Use .length to get the count
        const subjectsResponse = await AxiosApi.get("subject");
        setSubjectCount(subjectsResponse.data.length); // Use .length to get the count
        // console.log(subjectsResponse.data.Subjects.length,"res");
        setLoading(false);
      } catch (error) {
        console.log(error);
        // toast.error("Could not fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Counter
          value={loading ? "Loading..." : facultyCount}
          label="Faculties Registered"
          iconClass="fa fa-briefcase"
        />
        <Counter
          value={loading ? "Loading..." : studentCount}
          label="Students Registered"
          iconClass="fa fa-user"
        />
        <Counter
          value={loading ? "Loading..." : subjectCount}
          label="Total Subjects Added"
          iconClass="fa fa-book"
        />
      </div>
      <style>{`
  
  .counter{
    background: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    text-align: center;
    width: 210px;
    padding: 0 0 25px;
    margin: 0 auto 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    position: relative;
}
.counter:before{
    content: "";
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 5px 0;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.07);
    transform: translateX(-50%) rotate(45deg);
    position: absolute;
    bottom: -15px;
    left: 50%;
}
.counter .counter-value{
    color: #fff;
    background: linear-gradient(to right, #19bbd2, #2778ee);
    font-size: 38px;
    font-weight: 300;
    padding: 0 0 3px;
    margin: 0 0 25px;
    border-radius: 10px 10px 0 0;
    display: block;
}
.counter h3{
    color: #2778ee;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    margin: 0 0 25px;
}
.counter .counter-icon{
    color: #fff;
    background: linear-gradient(to right, #19bbd2, #2778ee);
    font-size: 40px;
    line-height: 60px;
    width: 65px;
    height: 65px;
    margin: 0 auto;
    border-radius: 10px;
}
.counter.purple .counter-value,
.counter.purple .counter-icon{
    background: linear-gradient(to right, #8f70e7, #c452ef);
}
.counter.purple h3{ color: #c452ef; }
.counter.magenta .counter-value,
.counter.magenta .counter-icon{
    background: linear-gradient(to right, #e84a94, #ae379b);
}
.counter.magenta h3{ color: #ae379b; }
.counter.yellow .counter-value,
.counter.yellow .counter-icon{
    background: linear-gradient(to right, #fecb4b, #e69814);
}
.counter.yellow h3{ color: #e69814; }
@media screen and (max-width:990px){
    .counter{ margin-bottom: 45px; }
  `}</style>
    </div>
  );
};

export default ChartDashboard;
