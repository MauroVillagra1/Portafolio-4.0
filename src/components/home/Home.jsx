import Banner from './banner/Banner'
import "./Home.css"
import CardsProgramacionWeb from './cards_programacion_web/CardsProgramacionWeb'
import ProyectosProgramacionWeb from './proyectos_programacion_web/ProyectosProgramacionWeb'
import { React, useEffect, useState } from "react";
import Equipo from './equipo/Equipo';
import SobreMi from './sobre_mi/SobreMi';

function Sobre_Mi() {
  return (
    <SobreMi></SobreMi>
  );
}


function Proyectos() {
  return (
    <>
        <CardsProgramacionWeb></CardsProgramacionWeb>
        <ProyectosProgramacionWeb></ProyectosProgramacionWeb>
    </>
  );
} 
function Equipos() {
  return (
    <Equipo></Equipo>
  );
}

function Home() {
  const [activeSectionBody, setActiveSectionBody] = useState("Proyectos");
  useEffect(() => {
    console.log(activeSectionBody);
  }, [activeSectionBody]);

  return (
    <>
    <div className='home'>
    <Banner setActiveSectionBody={setActiveSectionBody}></Banner>

    {activeSectionBody === "Equipos" && <Equipos />}
  {activeSectionBody === "Proyectos" && <Proyectos />}
  {activeSectionBody === "Sobre_Mi" && <Sobre_Mi />}    
        
    </div>
    </>
  )
}

export default Home