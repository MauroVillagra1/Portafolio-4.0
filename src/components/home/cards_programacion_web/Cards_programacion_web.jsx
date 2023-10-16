import React from 'react'
import "./Cards_programacion_web.css"

function Cards_programacion_web() {
  return (
    <div>
        <div className='cards_programacion d-flex p-2'>
            <div className='cards_programacion_imagen d-flex'><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697482388/Portafolio/Proyectos%20web/pexels-cottonbro-studio-3584970_wrpztu.jpg" alt="programacion_web" /></div>
            <div className='cards_programacion_texto d-flex flex-column'>
                <h3 className='py-1'>Programación Web</h3>
                <p className='px-2'>Como programador Full Stack, mi especialización se centra en Node.js y React. Tengo la capacidad de diseñar y desarrollar aplicaciones web completas, desde el backend con Node.js hasta el frontend con React. Mi enfoque es ofrecer soluciones tecnológicas efectivas y eficientes para satisfacer tus necesidades y metas.</p>
            </div>
        </div>
    </div>
  )
}

export default Cards_programacion_web