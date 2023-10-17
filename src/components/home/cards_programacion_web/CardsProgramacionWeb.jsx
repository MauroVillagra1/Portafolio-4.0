import React from 'react'
import "./CardsProgramacionWeb.css"

function CardsProgramacionWeb() {
  return (
    <div>
        <div className='cards_programacion d-flex px-2 pt-2'>
            <div className='cards_programacion_imagen d-flex w-50'><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487152/Portafolio/Proyectos%20web/pexels-cottonbro-studio-5054352_ahphig.jpg" alt="programacion_web" /></div>
            <div className='cards_programacion_texto d-flex flex-column'>
                <h3 className='py-1'>Programación Web</h3>
                <p className='px-2'>Como programador Full Stack, mi especialización se centra en Node.js y React. Tengo la capacidad de diseñar y desarrollar aplicaciones web completas, desde el backend con Node.js hasta el frontend con React. Mi enfoque es ofrecer soluciones tecnológicas efectivas y eficientes para satisfacer tus necesidades y metas.</p>
                <div className='tecnologias_programacion_web d-flex justify-content-center'>
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487525/Portafolio/Proyectos%20web/icon/file_type_html_icon_130541_1_bxs1ja.png" alt="html_img" />
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487553/Portafolio/Proyectos%20web/icon/file_type_css_icon_130661_1_t9al9h.png" alt="css_img" />
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487549/Portafolio/Proyectos%20web/icon/bootstrap_plain_logo_icon_146619_1_xjjzj0.png" alt="bootstrap_img" />
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487551/Portafolio/Proyectos%20web/icon/file_type_js_official_icon_130509_1_bynsxa.png" alt="js_img" />
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487547/Portafolio/Proyectos%20web/icon/react_original_logo_icon_146374_1_wjpttl.png" alt="react_img" />
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697487546/Portafolio/Proyectos%20web/icon/file_type_node_icon_130301_1_und28x.png" alt="node_img" />
        </div>
            </div>
        </div>
       
    </div>
  )
}

export default CardsProgramacionWeb