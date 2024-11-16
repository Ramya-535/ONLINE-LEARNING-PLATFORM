import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./AxiosAPI";

const Login = () => {
  const [role, setRole] = useState();
  const loginForm = useForm();
  const navigateTo = useNavigate();
  const loginFunction = async (data) => {
    if (
      role === "hod" &&
      data.userName === "hod@gmail.com" &&
      data.password === "hod123"
    ) {
      const hod = {
        address: "My college",
        email: "hod@gmail.com",
        experience: "5",
        facultyId: "HOD",
        facultyName: "HOD",
       
        id: 88888,
        mobileNumber: "9856321478",
        password: "hod123",
        qualification: "PhD",
      };
      sessionStorage.setItem("faculty", JSON.stringify(hod))
      navigateTo("/hod");
    } else if (
      role === "admin" &&
      data.userName === "admin@gmail.com" &&
      data.password === "admin"
    ) {
      sessionStorage.setItem("admin", "admin");
      navigateTo("/admin");
    } else if (
      role === "placement" &&
      data.userName === "placement@gmail.com" &&
      data.password === "placement"
    ) {
      sessionStorage.setItem("placement", "placement");
      navigateTo("/placement");
    } else if (role === "faculty") {
      try {
        const facRes = await AxiosApi.post("faculty/login", {
          email: data.userName,
          password: data.password,
        });
        console.log("FacLog:", facRes);
        sessionStorage.setItem("faculty", JSON.stringify(facRes.data));
        navigateTo("/faculty");
      } catch (error) {
        console.log("faculty Error:", error);
      }
    } else if (role === "student") {
      try {
        const studentRes = await AxiosApi.post("student/login", {
          email: data.userName,
          password: data.password,
        });
        console.log("StudentLog:", studentRes);
        sessionStorage.setItem("student", JSON.stringify(studentRes.data));
        navigateTo("/student");
      } catch (error) {
        console.log("student Error:", error);
      }
    }
  };
  return (
    <div>
      <h1 className="" style={{ backgroundColor: "#8df79d" }}>
        Online Learning Platform
      </h1>
      <div className="container adj" style={{ padding: 0, margin: 0 }}>
        <div className="row">
          <div className="col-md-12 ">
            <img
              src="https://img.freepik.com/free-photo/learning-education-ideas-insight-intelligence-study-concept_53876-120116.jpg?t=st=1728275964~exp=1728279564~hmac=37a1a8191a61d5d867eb5858c393613f4fa3ca02099cd4b08a96b391d21bb503&w=900"
              alt=""
              style={{ width: "75vw", height: "92vh" }}
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={loginForm.handleSubmit(loginFunction)}>
              <div className="login-form">
                <label className="me-auto">
                  Select Role:
                  <select onChange={(e) => setRole(e.target.value)} required>
                    <option value="">----Select----</option>
                    <option value="admin">Admin</option>

                    <option value="hod">Head of Department</option>
                    <option value="placement">Placement Admin</option>
                    <option value="faculty">Faculty</option>
                    <option value="student">Student</option>
                  </select>
                </label>
                <h1>Login</h1>
                <div className="form-group ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email "
                    {...loginForm.register("userName", {
                      required: "user Name Required",
                    })}
                  />
                  <i className="fa-solid fa-user fa"></i>
                </div>
                <div className="form-group log-status">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    {...loginForm.register("password", {
                      required: "Password Required",
                    })}
                  />
                  <i className="fa-solid fa-lock fa" />
                </div>

                {/* <a className="link" href="#">
  Lost your password?
</a> */}
                <button type="submit" className="log-btn">
                  <i className="mdi mdi-account" /> Log in
                </button>
                <br />
                {/* <div className="marquee-text  ">
                  <marquee direction="up" scrollAmount="2">
                    <p className="text-decoration-underline text-info">
                      Please Login with HOD Given credentials
                    </p>
                    <br />
                    <p className="text-decoration-underline text-danger">
                      Login for All
                    </p>
                    <br />
                    <p className="text-decoration-underline text-primary ">
                      Here HOD, Faculties & Student can do the Login
                    </p>
                  </marquee>
                </div> */}
                {/* <a className='link-success' >
    New here? <button className="btn">Register</button>
</a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
          .login-form {
            width: 40%;
            padding: 40px 30px;
            background: #eee;
            margin: auto;
            border: 1px solid #fff;
            position: absolute;

            right: 0;
            top: 0%;
            height: 100vh;
          }
          .form-group {
            position: relative;
            margin-bottom: 15px;
          }
          .form-control {
            width: 100%;
            height: 50px;
            border: none;
            padding: 5px 7px 5px 15px;
            border: 2px solid #ddd;
          }
          .form-control:focus {
            border-color: #fff !important;
            outline: none;
            box-shadow: none;
          }
          .log-btn {
            background: #5a56cc;
            dispaly: inline-block;
            width: 100%;
            font-size: 16px;
            height: 50px;
            color: #fff;
            text-decoration: none;
            border: none;
          }
          .link {
            text-decoration: none;
            color: #28aeb8;
            float: right;
            font-size: 12px;
            margin-bottom: 15px;
          }
          .alert {
            display: none;
            font-size: 12px;
            color: #f00;
            float: left;
          }
          .form-group .fa {
            position: absolute;
            right: 15px;
            top: 17px;
            color: "#74C0FC";
          }
        `}
      </style>
    </div>
  );
};

export default Login;
