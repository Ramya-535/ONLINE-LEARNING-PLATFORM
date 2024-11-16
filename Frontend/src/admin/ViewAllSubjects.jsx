import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import AxiosApi from "../AxiosAPI";
import { toast } from "react-toastify";

const ViewAllSubjects = () => {
  const [showUpdate, setShowUpdate]=useState(false)
  const [allSubjects, setAllSubjects]=useState()
  const showUpdateForm=()=>{
setShowUpdate(true)
  }
  const getAllSubs=async()=>{
    try {
      const resultss=await AxiosApi.get(`subject`)
      console.log(resultss);
      setAllSubjects(resultss.data)
    } catch (error) {
      console.log(error);
      toast.error("could not fetch")
    }
  }
  useEffect(()=>{
getAllSubs()
  }, [])
  return (
    <div>
     
        
        <div className="d-style bgc-white text-center btn-brc-tp btn-outline-green btn-h-outline-green btn-a-outline-green w-100 my-2 py-3 shadow-sm border-2">
        <h4>All Subjects</h4>
        {allSubjects&&allSubjects.map((item)=>(
        <div className="row align-items-center mt-3" key={item._id}>
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing text-success">
              {item.subjects}
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
              
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
            
              <span className="text-180">Assigned to: {item.facultyName}</span> 
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
            <li>
              <span>
                <span className="text-110">Year/Semester: {item.semester}</span>
              </span>
            </li>
          
          </ul>
          <div className="col-12 col-md-4 text-center">
            FacultyID: {item.facultyId}
            {/* <a
              href="#"
              className="f-n-hover btn btn-success btn-raised px-4 py-25 w-75 text-600"
            >
            Delete
            </a> */}
          </div>
        </div>))}
         {/* <div className="row align-items-center mt-3 ">
           <div className="col-12 col-md-4">
             <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
               Subject Name
             </h4>
             <div className="text-secondary-d2 text-120">
               <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
               
                 <span>
                   <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                 </span>
               </div>
             
               <span className="text-180">Assigned to: Faculty Name</span> 
             </div>
           </div>
           <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
             <li>
               <span>
                 <span className="text-110">Year/Semester</span>
               </span>
             </li>
            
           </ul>
           <div className="col-12 col-md-4 text-center">
             <Link
              
               className="f-n-hover btn btn-success btn-raised px-4 py-25 w-75 text-600"
             >
              Delete
             </Link>
           </div>
         </div> */}
       </div>
      
    </div>
  );
};

export default ViewAllSubjects;
