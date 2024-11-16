import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import UpdateStudent from './UpdateStudent'
import AxiosApi from '../AxiosAPI'
const ViewAllStudents = () => {
  const [showUpdate, setShowUpdate]=useState(false)
  const showUpdateForm=()=>{
setShowUpdate(true)
  }
  const [students , setStudents]=useState();
  const getAllStudent=async()=>{
 try {
  const result=await AxiosApi.get(`student`);
  console.log(result , 'all students');
  setStudents(result.data)
 } catch (error) {
  console.log(error ,"student err");
 }
  }
  useEffect(()=>{getAllStudent()}, [])
  return (
    <div>
       
     
       <div className="container">
        <div className="mt-5">
            <h4>All Students</h4>
          <div className="d-style  btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
            {/* View Students */}
            {students&&students.map((item)=>(<div className="row align-items-center" key={item.id}>
              <div className="col-12 col-md-4">
                <img
                  src={`http://localhost:5000/${item.studentPhoto}`}
                  alt=""
                  width={80}
                />
              </div>
              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  {/* <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" /> */}
                  <span>
                    <span className="fs-5">Student Name: {item.studentName}</span>
                  </span>
                </li>
                <li className="mt-25">
                  <span className="fs-5">Roll Number: {item._id}</span>
                </li>
                <li className="mt-25">
                 
                  <span className="fs-5">Year/Semester :{item.semester}</span>
                </li>
              </ul>
              {/* <div className="col-12 col-md-4 text-center">
                <button
                 onClick={()=>deleteStudent(item.id)}
                  className="f-n-hover btn btn-outline-primary btn-raised px-4 py-25 w-75 text-600"
                >
                  Delete
                </button>
              </div> */}
              <hr />
            </div>))}
            {/* <div className="row align-items-center mt-2 ">
              <div className="col-12 col-md-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GT3WUoVzS1Fhdz4kds_mQMn5KpPrynZV3A&usqp=CAU"
                  alt=""
                  width={80}
                />
              </div>
              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
                  <span>
                    <span className="text-110">Student Name</span>
                  </span>
                </li>
                <li className="mt-25">
                  <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
                  <span className="text-110">Roll Number</span>
                </li>
                <li className="mt-25">
                  <i className="fa fa-check text-danger-m3 text-110 mr-25 mt-1" />
                  <span className="text-110">Year/Semester</span>
                </li>
              </ul>
              <div className="col-12 col-md-4 text-center">
                <a
                  href="#"
                  className="f-n-hover btn btn-outline-primary  btn-raised px-4 py-25 w-75 text-600"
                >
                  Delete
                </a>
              </div>
            </div>
            <div className="row align-items-center mt-2 ">
              <div className="col-12 col-md-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GT3WUoVzS1Fhdz4kds_mQMn5KpPrynZV3A&usqp=CAU"
                  alt=""
                  width={80}
                />
              </div>
              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
                <li>
                  <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
                  <span>
                    <span className="text-110">Student Name</span>
                  </span>
                </li>
                <li className="mt-25">
                  <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
                  <span className="text-110">Roll Number</span>
                </li>
                <li className="mt-25">
                  <i className="fa fa-check text-danger-m3 text-110 mr-25 mt-1" />
                  <span className="text-110">Year/Semester</span>
                </li>
              </ul>
              <div className="col-12 col-md-4 text-center">
                <a
                  href="#"
                  className="f-n-hover btn btn-outline-primary  btn-raised px-4 py-25 w-75 text-600"
                >
                  Delete
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default ViewAllStudents