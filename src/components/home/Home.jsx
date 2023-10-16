import React from 'react'
import Banner from './banner/Banner'
import "./Home.css"
import CardsProgramacionWeb from './cards_programacion_web/CardsProgramacionWeb'



function Home() {
  return (
    <>
    <div className='home'>
        <Banner></Banner>
        <CardsProgramacionWeb></CardsProgramacionWeb>
    </div>
    </>
  )
}

export default Home