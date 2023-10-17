import Banner from './banner/Banner'
import "./Home.css"
import CardsProgramacionWeb from './cards_programacion_web/CardsProgramacionWeb'
import ProyectosProgramacionWeb from './proyectos_programacion_web/ProyectosProgramacionWeb'
import { React, useEffect, useState } from "react";
// import CardPresentation from '../CardPresentation'
// import Service from "../service/Sevice"
// import Blog from "../blog/Blog"
// import Works from "../works/Works"
// function ServicesInfoBody() {
//   return (
//     <Service></Service>
//   );
// }
import Equipo from './equipo/Equipo';

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
  {/* {activeSectionBody === "blog" && <BlogInfoBody />}     */}
        
    </div>
    </>
  )
}

export default Home