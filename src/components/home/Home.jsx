import React from 'react'
import Banner from './banner/Banner'
import "./Home.css"
import Cards_programacion_web from './cards_programacion_web/cards_programacion_web'


function Home() {
  return (
    <>
    <div className='home'>
        <Banner></Banner>
        <Cards_programacion_web></Cards_programacion_web>
    </div>
    </>
  )
}

export default Home