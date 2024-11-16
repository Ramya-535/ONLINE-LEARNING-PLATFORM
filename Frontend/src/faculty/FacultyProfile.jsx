import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import UpdateFacultyProfile from "./UpdateFacultyProfile"; // Import the UpdateFacultyProfile component

const FacultyProfile = () => {
  const [showChange, setShowChange] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false); // State for showing the update profile form
  const faculty = JSON.parse(sessionStorage.getItem("faculty"));

  return (
    <div>
      {showChange ? (
        <ChangePassword />
      ) : showUpdate ? (
        <UpdateFacultyProfile />
      ) : (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div
            className="card p-4"
            style={{ width: "500px", backgroundColor: "#5e48f0" }}
          >
            <div className=" image d-flex flex-column justify-content-center align-items-center">
              <button className="btn btn-secondary">
                <img src={`http://localhost:5000/${faculty?.facultyPhoto}`} height={100} width={100} />
              </button>
              <span className="name mt-3 text-white ">
                {faculty?.facultyName}
              </span>
              <span className="idd text-white ">{faculty?.email}</span>
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <span className="idd1 text-white ">{faculty?.facultyId}(ID)</span>
                <span></span>
              </div>

              <div className="d-flex mt-2">
                <button
                  className="btn1 btn-dark me-2"
                  onClick={() => setShowChange(true)}
                >
                  Change Password
                </button>
                <button
                  className="btn1 btn-info"
                  onClick={() => setShowUpdate(true)}
                >
                  Update Profile
                </button>
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
        </div>
      )}
    </div>
  );
};

export default FacultyProfile;
