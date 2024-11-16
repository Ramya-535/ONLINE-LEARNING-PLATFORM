import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import UpdateProfile from "./UpdateProfile";

const StudentProfile = () => {
  const [showChange, setShowChange]=useState(false);
  const [showupdate, setshowupdate] = useState(false)
const student = JSON.parse(sessionStorage.getItem("student"));
  return (
    <div>
       {showChange?(<ChangePassword/>): showupdate ?(<UpdateProfile/>):<div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4" style={{width:"500px", backgroundColor:"#5e48f0"}}>
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
              src={`http://localhost:5000/${student?.studentPhoto}`}
                height={100}
                width={100}
              />
            </button>
            <span className="name mt-3 text-white ">{student?.studentName}</span>
            <span className="name mt-3 text-white ">{student?.semester}</span>
            <span className="idd text-white ">{student?.studentEmail}</span>
            <span className="idd text-white ">{student?.mobileNumber}</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="idd1 text-white ">{student?._id}(Roll Number)</span>
              <span>
               
              </span>
            </div>
            
            <div className=" d-flex mt-2">
              <button className="btn1 btn-dark" onClick={()=>setShowChange(true)}>Change Password</button>
              <button className="btn1 btn-dark" onClick={()=>setshowupdate(true)}>update profile</button>
            </div>
            <div className="text mt-3">
              {/* <span>
                Eleanor Pena is a creator of minimalistic x bold graphics and
                digital artwork.
                <br />
                <br /> Artist/ Creative Director by Day #NFT minting@ with FND
                night.
              </span> */}
            </div>
            
           
          </div>
        </div>
      </div>}
    </div>
  );
};

export default StudentProfile;
