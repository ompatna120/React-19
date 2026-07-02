import { useState } from 'react';

// hooks concepts and Implementation
function ChangeName(){
  const [name, xyzKuchVRakho] = useState("John Doe");
  const handleChangeName = () => {
    xyzKuchVRakho("Jane Smith");
  };
  return(
    <div>
      <h1>Name: {name}</h1>
      <button onClick={handleChangeName}>Change Name</button>
    </div>  
  )
}

export default ChangeName;