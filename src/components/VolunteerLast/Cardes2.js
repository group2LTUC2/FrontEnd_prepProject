import React, { useState } from "react";
import "./Cardes2.css";

const Cardes2 = ({ fullName, locationOf, img, phoneNumber }) => {
  return (
    <div className="container">
      <div className="tow">
        <div class="box">
          <div class="imgBox">
            <img src={img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeNjCWolcBL9dwuciYB5IXjB7qUPzQk6H9w&usqp=CAU"} alt={fullName} />
          </div>
          <div className="content" id="mustafa" >
             
                <div>
                  {fullName}
                <br></br>
                {phoneNumber}
                <br></br>
                {locationOf}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardes2;