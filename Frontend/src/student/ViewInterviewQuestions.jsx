import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosApi, { url } from "../AxiosAPI";
import { toast } from "react-toastify";

const ViewInterviewQuestions = () => {
const[question, setQuestions]=useState()
  const downloadPdfMaterial = (file) => {
    // Replace 'pdfLink' with your actual PDF download link
    const pdfLink = `http://localhost:5000/${file}`;
    window.open(pdfLink, "_blank"); // Opens the PDF link in a new tab for download
  };
  const getAllQuestions=async()=>{
    try {
      const result= await AxiosApi.get('question');
      console.log(result ,"all quests");
      setQuestions(result.data);
      //toast("functionality not given")
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllQuestions()
  }, [])
  return (
    <div>
      <div className="d-style bgc-white  btn-brc-tp    w-100 my-2 py-3 shadow-sm border-4 p-2 ">
        <h4>Posted Questions</h4>
        {question&&question.map((item)=>(<div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
             {item.companyName}
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               Conducted Date: {item.conductingDate}
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info " onClick={()=>downloadPdfMaterial(item.file)}>
                
                <span className="material-symbols-outlined">download</span>
                View Uploaded Pdf
              </button>
            </li>
            <li className="">
          
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
          Total Rounds : {item.totalRounds}
            <br />
            <span className="text-180">
           Name of Rounds : {item.roundNames}
              </span>
          </div>
        </div>))}
        {/* <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
             Company Name
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               Conducted Date: 01-01-2024
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info " onClick={downloadPdfMaterial}>
                
                <span className="material-symbols-outlined">download</span>
                View Uploaded Pdf
              </button>
            </li>
            <li className="">
          
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
          Total Rounds : 3
            <br />
            <span className="text-180">
           Name of Rounds : HR/Technical/Aptitude
              </span>
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
             Company Name
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               Conducted Date: 01-01-2024
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info " onClick={downloadPdfMaterial}>
                
                <span className="material-symbols-outlined">download</span>
                View Uploaded Pdf
              </button>
            </li>
            <li className="">
          
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
          Total Rounds : 3
            <br />
            <span className="text-180">
           Name of Rounds : HR/Technical/Aptitude
              </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ViewInterviewQuestions;
