import React from "react";

const HodProfile = () => {
  return (
    <div>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4" style={{width:"500px", backgroundColor:"#5e48f0"}}>
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
              src="/profile.png"
                height={100}
                width={100}
              />
            </button>
            <span className="name mt-3 text-white ">Dr. Viru Sahastrabuddhe</span>
            <span className="idd text-white ">@eleanorpena</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <span className="idd1 text-white ">Oxc4c16a645_b21a(id)</span>
              <span>
               
              </span>
            </div>
            
            <div className=" d-flex mt-2">
              <button className="btn1 btn-dark">Edit Profile</button>
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
    </div>
  );
};

export default HodProfile;
