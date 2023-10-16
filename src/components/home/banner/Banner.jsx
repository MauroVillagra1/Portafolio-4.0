import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <>
      <div className="w-100 home_banner">
        <div className="w-100 home_banner_img d-flex justify-content-center align-items-center">
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697481302/Portafolio/Banner/Diseño_sin_título_tkaddx.jpg"
            alt="banner"
          />
          <p className="text-light"> Mauro <span className="text-primary">Villagra</span></p>
        </div>
      </div>
    </>
  );
}

export default Banner;
