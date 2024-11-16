import React from "react";
import { Link } from "react-router-dom";

const UploadedStudyMaterial = () => {
  const watchVideo = () => {
    // Replace 'videoLink' with your actual video link
    const videoLink = "https://www.youtube.com/watch?v=xWLxhF3b5P8&ab_channel=Telusko";
    window.open(videoLink, "_blank"); // Opens the video link in a new tab
  };

  // Dummy function to simulate downloading PDF material
  const downloadPdfMaterial = () => {
    // Replace 'pdfLink' with your actual PDF download link
    const pdfLink = "https://www.audisankara.ac.in/has/pdf/DATA%20STRUCTURE.pdf";
    window.open(pdfLink, "_blank"); // Opens the PDF link in a new tab for download
  };
  return (
    <div>
      <div className="d-style bgc-white  btn-brc-tp    w-100 my-2 py-3 shadow-sm border-4">
        <h4>Study Material</h4>
        <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
              <span>
                <button className="btn btn-outline-danger m-1  " onClick={watchVideo}>
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Video
                </button>
              </span>
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               Subject Name
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info " onClick={downloadPdfMaterial}>
                
                <span className="material-symbols-outlined">download</span>
                Download Pdf Material
              </button>
            </li>
            <li className="">
            Material Provided by: Faculty Name
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
            <a
              href="#"
              className="f-n-hover btn btn-outline-info btn-raised  text-600"
              onClick={downloadPdfMaterial}
            >
              Download Assignments<i class="fa-regular fa-circle-down"></i>
            </a>
            <br />
            <span className="text-180">
            Due Date: 01-01-2024
              </span>
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
              <span>
                <button className="btn btn-outline-danger m-1  ">
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Video
                </button>
              </span>
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               Subject Name
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info ">
                
                <span className="material-symbols-outlined">download</span>
                Download Pdf Material
              </button>
            </li>
            <li className="">
            Material Provided by: Faculty Name
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
            <a
              href="#"
              className="f-n-hover btn btn-outline-info btn-raised  text-600"
            >
              Download Assignments<i class="fa-regular fa-circle-down"></i> 
            </a><br />
            <span className="text-180">
            Due Date: 01-01-2024
              </span>
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
              <span>
                <button className="btn btn-outline-danger m-1  ">
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Video
                </button>
              </span>
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               Subject Name
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info ">
                
                <span className="material-symbols-outlined">download</span>
                Download Pdf Material
              </button>
            </li>
            <li className="">
            Material Provided by: Faculty Name
            </li>
          </ul>
          <div className="col-12 col-md-4 text-center">
            <a
              href="#"
              className="f-n-hover btn btn-outline-info btn-raised  text-600"
            >
              Download Assignments<i class="fa-regular fa-circle-down"></i> 
            </a><br />
            <span className="text-180">
            Due Date: 01-01-2024
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedStudyMaterial;
