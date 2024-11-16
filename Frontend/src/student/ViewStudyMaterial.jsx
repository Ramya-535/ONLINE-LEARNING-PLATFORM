import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../AxiosAPI";
import { downloadFunction } from "../faculty/AssignedSubjects";

const ViewStudyMaterial = () => {
const [material, setMaterial]=useState()
  const watchVideo = () => {
    // Replace 'videoLink' with your actual video link
    const videoLink = "https://www.youtube.com/watch?v=xWLxhF3b5P8&ab_channel=Telusko";
    window.open(videoLink, "_blank"); // Opens the video link in a new tab
  };
const student= JSON.parse(sessionStorage.getItem("student"));
  // Dummy function to simulate downloading PDF material
  const downloadPdfMaterial = () => {
    // Replace 'pdfLink' with your actual PDF download link
    const pdfLink = "https://www.audisankara.ac.in/has/pdf/DATA%20STRUCTURE.pdf";
    window.open(pdfLink, "_blank"); // Opens the PDF link in a new tab for download
  };
  const getStudyMaterial=async()=>{
try {
  const response= await AxiosApi.get(`courses/get/${student.semester}`);
setMaterial(response.data)
  console.log(response.data);
} catch (error) {
  console.log(error);
}
  };
  useEffect(()=>{getStudyMaterial()}, [])
  
  return (
    <div>
      <div className="d-style bgc-white  btn-brc-tp    w-100 my-2 py-3 shadow-sm border-4 text-center">
        <h4 className=" fst-italic " style={{color:"#5e48f0"}}>Study Material</h4>
      
       {material&&material.map((item)=>item.category!="Assignment"&& 
    (   <div className="row align-items-center mt-3" key={item._id}>
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
              <span>
            {  item.category==="Video"?    (<button className="btn btn-outline-danger m-1  " onClick={()=>downloadFunction(item.category, item)}>
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Video
                </button>):<span className="text-danger">No Video</span>}
              </span>
            </h4>
            <div className="text-secondary-d2 text-120">
              <div className="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                <span>
                  <span className="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1" />
                </span>
              </div>
              <span className="text-180">
               {item.subject}
              </span> <br />
             
            </div>
          </div>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
                <li>
                 Category
                </li>
                <li className="">
               {item.category}
                </li>
              </ul>
          <ul className="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left  my-md-0">
            <li>
              <button className="btn btn-outline-info " onClick={()=>downloadFunction(item.category, item)}>
                
                <span className="material-symbols-outlined" >download</span>
                {/* Download Pdf Material */} View
              </button>
            </li>
            <li className="">
            Material Provided by: {item.facultyId}
            </li>
          </ul>
         
       <hr /> </div>))}
        {/* <div className="row align-items-center mt-3">
          <div className="col-12 col-md-4">
            <h4 className="pt-3 text-170 text-600 text-green-d1 letter-spacing">
              <span>
                <button className="btn btn-outline-danger m-1  ">
                  <span class="material-symbols-outlined">play_circle</span>
                  Watch Video
                </button>
              </span>
            </h4>
            <video src="/video.mp4" autoPlay controls loop>play</video>
            <audio src="/audio.mp3" controls></audio>
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
                 Topic Name
                </li>
                <li className="">
                Data Structures
                </li>
              </ul>
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
         
        </div> */}
      </div>
    </div>
  );
};

export default ViewStudyMaterial;
