import React, { useEffect, useState } from 'react'
import AxiosApi from '../AxiosAPI';
import { downloadFunction } from '../faculty/AssignedSubjects';

const Assignments = () => {
  const [material, setMaterial]=useState()
const student= JSON.parse(sessionStorage.getItem("student"));

    const downloadPdfMaterial = () => {
        // Replace 'pdfLink' with your actual PDF download link
        const pdfLink = "https://www.audisankara.ac.in/has/pdf/DATA%20STRUCTURE.pdf";
        window.open(pdfLink, "_blank"); // Opens the PDF link in a new tab for download
      };
      const getStudyMaterial=async()=>{
        try {
          const response= await AxiosApi.get(`courses/get/${student.semester}`);
          console.log(response);
        //setMaterial(response.data.Courses)
        const assignments = response.data.filter(item => item.category === "Assignment");
        setMaterial(assignments);
        } catch (error) {
          console.log(error);
        }
          };
          useEffect(()=>{getStudyMaterial()}, []);
          console.log(material);
      return (
        <div>
          <div className="d-style bgc-white  btn-brc-tp    w-100 my-2 py-3 shadow-sm border-4 text-center">
            <h4 className=" fst-italic " style={{color:"#5e48f0"}}>Assignments</h4>
            {material &&material.map((item)=><div className="row align-items-center mt-3" key={item._id}>
              <div className="col-12 col-md-4">
                <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
                 {item.subject}
                </h4>
                <div className="text-secondary-d2 text-120">
                  <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                    <span>
                      <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                    </span>
                  </div>
                  <span className="text-180">
                   Due Date & Time: {item.formattedDate}, {item.deadline}
                  </span> <br />
                 
                </div>
              </div>
              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
                <li>
                  <button className="btn btn-outline-info " onClick={()=>downloadFunction(item.category, item)}>
                    
                    <span className="material-symbols-outlined">download</span>
                    Downolad 
                  </button>
                </li>
                <li className="">
                Faculty Name : {item.facultyId}
                </li>
              </ul>
              <div className="col-12 col-md-4 text-center">
         Description 
                <br />
                <span className="text-180">
                {item.questions}
                  </span>
              </div>
            </div>)}
            {/* <div className="row align-items-center mt-3">
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
                  <span className="text-180">
                   Due Date: 01-01-2024
                  </span> <br />
                 
                </div>
              </div>
              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
                <li>
                  <button className="btn btn-outline-info " onClick={downloadPdfMaterial}>
                    
                    <span className="material-symbols-outlined">download</span>
                    Downolad 
                  </button>
                </li>
                <li className="">
                Faculty Name : John Doe
                </li>
              </ul>
              <div className="col-12 col-md-4 text-center">
         Description
                <br />
                <span className="text-180">
            Assignment Descriptions
                  </span>
              </div>
            </div>
            <div className="row align-items-center mt-3">
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
                  <span className="text-180">
                   Due Date: 01-01-2024
                  </span> <br />
                 
                </div>
              </div>
              <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
                <li>
                  <button className="btn btn-outline-info " onClick={downloadPdfMaterial}>
                    
                    <span className="material-symbols-outlined">download</span>
                    Downolad 
                  </button>
                </li>
                <li className="">
                Faculty Name : John Doe
                </li>
              </ul>
              <div className="col-12 col-md-4 text-center">
         Description
                <br />
                <span className="text-180">
            Assignment Descriptions
                  </span>
              </div>
            </div> */}
          </div>
         
        </div>
      );
}

export default Assignments