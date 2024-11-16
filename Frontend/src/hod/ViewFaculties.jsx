import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateFaculty from "./UpdateProfile";
import AxiosApi from "../AxiosAPI";

const ViewFaculties = () => {
  const [showUpdate, setShowUpdate]=useState(false)
  const showUpdateForm=()=>{
setShowUpdate(true)
  }
  const [allFaculties, setFaculties]=useState()
  const getAllFacs=async()=>{
    try {
       const results=await AxiosApi.get(`faculty`);
       setFaculties(results.data)
       console.log(results.data , "all facs");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
getAllFacs();
  }, []);
  return (
    <div>
     <div className="container">
      <div className="mt-5">
          <h4>All Faculties</h4>
        <div className="d-style  btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
          {/* View Faculties */}
          {allFaculties&&allFaculties.map((item)=>(<div className="row align-items-center">
            <div className="col-12 col-md-4" key={item.id}>
              <img
                src={`http://localhost:5000/${item.facultyPhoto}`}
                alt=""
                width={80}
              />
            </div>
            <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
              <li>
                 <span className="fs-5">Faculty Name: {item.facultyName}</span>
          
              </li>
              <li className="mt-25">
              <span className="fs-5">Experience: {item.experience} years</span>
              </li>
              <li className="mt-25">
              <span className="fs-5">Qualifications: {item.qualification}</span>
              </li>
            </ul>
            {/* <div className="col-12 col-md-4 text-center">
            <button
               onClick={()=>deleteFaculty(item.id)}
                className="f-n-hover btn btn-info btn-raised px-4 py-25 w-75 text-600"
              >
                Delete
              </button>
            </div> */}
            <hr/>
          </div>))}
          {/* <div className="row align-items-center mt-2 ">
            <div className="col-12 col-md-4">
              <img
                src="https://srec.ac.in/uploads/Faculty/img_3831230816121157.jpg"
                alt=""
                width={80}
              />
            </div>
            <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
              <li>
                <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
                <span>
                  <span className="text-110">Faculty Name</span>
                </span>
              </li>
              <li className="mt-25">
                <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
                <span className="text-110">Subject Names</span>
              </li>
              <li className="mt-25">
                <i className="fa fa-check text-danger-m3 text-110 mr-25 mt-1" />
                <span className="text-110">Year/Semester</span>
              </li>
            </ul>
            <div className="col-12 col-md-4 text-center">
              <Link
               onClick={showUpdateForm}
                className="f-n-hover btn btn-info btn-raised px-4 py-25 w-75 text-600"
              >
                Delete
              </Link>
            </div>
          </div> */}



        </div>
      </div>
    </div>
     
    </div>
  );
};

export default ViewFaculties;
//  <div className="d-style bgc-white btn btn-brc-tp btn-outline-green btn-h-outline-green btn-a-outline-green w-100 my-2 py-3 shadow-sm border-2">

{
  /* <div className="row align-items-center">
        <div className="col-12 col-md-4">
          <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
            Pro Plan
          </h4>
          <div className="text-secondary-d2 text-120">
            <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
              $<span className="text-150 deleted-text">30</span>
              <span>
                <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
              </span>
            </div>
            <span className="align-text-bottom">$</span>
            <span className="text-180">20</span> / month
          </div>
        </div>
        <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
          <li>
            <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
            <span>
              <span className="text-110">Everything in Basic...</span>
            </span>
          </li>
          <li className="mt-25">
            <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
            <span className="text-110">Non diam phasellus</span>
          </li>
          <li className="mt-25">
            <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
            <span className="text-110">Tortor mauris</span>
          </li>
        </ul>
        <div className="col-12 col-md-4 text-center">
          <a
            href="#"
            className="f-n-hover btn btn-success btn-raised px-4 py-25 w-75 text-600"
          >
            Get Started
          </a>
        </div>
      </div> */
}
//   </div>
//   <div className="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
{
  /* Premium Plan */
}
{
  /* <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
              Premium Plan
            </h4>
            <div className="text-secondary-d1 text-120">
              <span className="ml-n15 align-text-bottom">$</span>
              <span className="text-180">50</span> / month
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
            <li>
              <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
              <span>
                <span className="text-110">Everything in Pro...</span>
              </span>
            </li>
            <li className="mt-25">
              <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
              <span className="text-110">Placerat duis</span>
            </li>
            <li className="mt-25">
              <i className="fa fa-check text-success-m2 text-110 mr-2 mt-1" />
              <span className="text-110">Molestie nunc non</span>
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
            <a
              href="#"
              className="f-n-hover btn btn-warning btn-raised px-4 py-25 w-75 text-600"
            >
              Get Started
            </a>
          </div>
        </div> */
}
{
  /* </div> */
}
