import React from 'react'

const UploadMaterial = ({id}) => {
  return (
    <div>
        <div className="container p-0">
  <div className="card px-4">
    <p className="h5 text-info  py-3">Upload Material</p>
    <div className="row gx-3">
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Subject Name</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Name"
            defaultValue={id}
          />
        </div>
      </div>
      <div className="col-9">
        <div className="d-flex flex-column">
          <p className="text mb-1">Video Link</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="https://www.example.com/videos"
          />
        </div>

      </div>
      <div className="col-3">
      <p className="text mb-1">.</p>
        <button className="btn btn-secondary ">Upload</button>
      </div>
      <div className="col-9">
        <div className="d-flex flex-column">
          <p className="text mb-1">Text Material (Pdf/docx) </p>
          <input
            className="form-control mb-3"
            type="file"
          
          />
        </div>
      </div>
      <div className="col-3">
      <p className="text mb-1">.</p>
        <button className="btn btn-secondary ">Upload</button>
      </div>
      <div className="col-9">
        <div className="d-flex flex-column">
          <p className="text mb-1">Assignments</p>
          <textarea
            className="form-control mb-3 pt-2 "
           placeholder='Assignment Questions'
           rows={4}
          />
        </div>
      </div>
      <div className="col-3">
      <p className="text mb-1">.</p>
        <button className="btn btn-secondary ">Upload</button>
      </div>
      <div className="col-12">
        <div className="d-flex flex-column">
          <p className="text mb-1">Due Date</p>
          <input
            className="form-control mb-3 pt-2 "
            type="date"
           
          />
        </div>
      </div>
      <div className="col-12">
        <div className="btn btn-primary mb-3">
          <span className="ps-3 pe-2 ">Upload</span>
          <i className="fa-solid fa-upload"></i>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default UploadMaterial