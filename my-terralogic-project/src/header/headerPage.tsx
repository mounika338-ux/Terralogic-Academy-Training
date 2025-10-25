import React, { useState } from "react";
 

const MainHeader = () => {
  const [numberIntial, setNumberIntial] = useState()
  return (
    <div className="flex justify-between p-4 items-center sticky top-0 bg-white z-50 ">
      <div className="w-36">
        <img src="assets (1)/asset 0.svg" alt="Academy" className="w-36 h-full"/>
      </div>

      <div className="flex justify-between w-[20%] items-center">
        <div>Our Programs</div>
        <div>Blogs</div>
        <div>About Us</div>
      </div>

      <div>
        <button className="bg-blue-600 rounded-full p-2">Register Now ↗</button>
      </div>
    </div>
  );
};

export default MainHeader;

