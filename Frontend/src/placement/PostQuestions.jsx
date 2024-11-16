import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import AxiosApi from '../AxiosAPI';
import { toast } from 'react-toastify';

const PostQuestions = () => {
  const[file, setFile]=useState()
  const {register:registerPlacement, handleSubmit:handlleSubmitPlacement}=useForm();
  const handleUpload=(e)=>setFile(e.target.files[0])
  const submitQuestion=async(data)=>{
    const formData=new FormData();
    for(let [key, value] of Object.entries(data)){
      formData.append(key, value);
    }
    formData.append("file", file)
    // question/upload
    try {
      const result=await AxiosApi.post("question/upload", formData)
      console.log(result , 'uploaded');
      toast.success(result.data.message);
    } catch (error) {
      console.error(error ,"not uploaded");
    }
  }
  return (
    <div>
        <div className="container p-0">
  <div className="card px-4">
    <p className="h5 text-info  py-3">Post Questions</p>
    {/* encType='multipart/file' */}
    <form onSubmit={handlleSubmitPlacement(submitQuestion)} encType='multipart/file' >
      <div className="row gx-3">
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Company Name</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Name"
           {...registerPlacement("companyName")}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Conducted date</p>
          <input
            className="form-control mb-3"
            type="date"
            placeholder=""
           {...registerPlacement("conductingDate")}

          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Total Rounds</p>
          <input
            className="form-control mb-3"
            type="number"
            placeholder=""
           {...registerPlacement("totalRounds")}

          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Name of Rounds</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="HR/Technical/Apptitude, enter sequentially"
           {...registerPlacement("roundNames")}

          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Upoad Question Papers (Pdf/docx) </p>
          <input
            className="form-control mb-3"
            type="file"
          placeholder='previous '
          multiple
          onChange={handleUpload}
          />
        </div>
      </div>
      {/* <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Assignments</p>
          <input
            className="form-control mb-3 pt-2 "
            type="file"
           
          />
        </div>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Due Date</p>
          <input
            className="form-control mb-3 pt-2 "
            type="date"
           
          />
        </div>
      </div> */}
      <div className="col-12">
        <button className="btn btn-primary mb-3"  type='submit'>
          <span className="ps-3 pe-2 ">Upload</span>
          <i className="fa-solid fa-upload"></i>
        </button>
      </div>
    </div></form>
  </div>
</div>

    </div>
  )
}

export default PostQuestions