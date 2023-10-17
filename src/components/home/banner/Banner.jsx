import React from "react";
import "./Banner.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Banner({setActiveSectionBody}) {

  const handleSecciones = (secciones) =>{
    console.log(secciones)
    setActiveSectionBody(secciones)
  }
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
      <div className="secciones">
      <Tabs
      defaultActiveKey="Proyectos"
      id="uncontrolled-tab-example"
      className="mb-3 tab_secciones"
      onSelect={handleSecciones}
    >
      <Tab className="tab_seccion" eventKey="Proyectos" title="Proyectos" >
      </Tab>
      <Tab className="tab_seccion"  eventKey="Equipos" title="Equipos">
      </Tab>
      <Tab className="tab_seccion"  eventKey="Sobre_Mi" title="Sobre Mi">
      </Tab>
    </Tabs>
      </div>
    </>
  );
}

export default Banner;
