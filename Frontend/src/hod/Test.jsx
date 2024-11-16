import React, { useState } from 'react';
import Select from 'react-select';

const MyComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const content = [
    { value: 0, label: "Engineering physics", email: "Nitin@xy" },
    { value: 1, label: "Advanced physics", email: "Suhash@xy" },
    { value: 2, label: "Engineering chemistry", email: "Soumil@xy" },
  ];

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

 

  return (
    <div style={{ border: '1px solid black', padding: '100px' }} className="container">
      <div style={{ padding: '100px' }}>
        <div className="row">
          <div className="col-md-8">
            <Select
              options={content}
              isMulti
              placeholder="Enter First Name"
              onChange={handleSelectChange}
              value={selectedOptions}
            />
          </div>
          <div className="col-md-4">
            <button onClick={handleButtonClick} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
