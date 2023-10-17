import React from 'react'
import Banner from './banner/Banner'
import "./Home.css"
import CardsProgramacionWeb from './cards_programacion_web/CardsProgramacionWeb'
import ProyectosProgramacionWeb from './proyectos_programacion_web/ProyectosProgramacionWeb'


function Home() {
  return (
    <>
    <div className='home'>
      
        <Banner></Banner>
        <CardsProgramacionWeb></CardsProgramacionWeb>
        <ProyectosProgramacionWeb></ProyectosProgramacionWeb>
    </div>
    </>
  )
}

export default Home