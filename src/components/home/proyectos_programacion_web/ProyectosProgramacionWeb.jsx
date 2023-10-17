import React from "react";
import CustomSwiper from "../swiper/CustomSwiper";


function ProyectosProgramacionWeb() {
  const Slide = [{
    id: 1,
    Nombre: "Rolling Gourmet",
    Descripcion: "Rolling Gourmet es una pagina realizada para la gestion de pedidos de un local, incluye sistema de administración con controles de usuarios, controles de productos, y controles de las ordenes realizadas. Registrate y pruebala de forma tranquila",
    Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697499616/Portafolio/Proyectos%20web/Proyectos/image_27_m7tiqo.png",
    Link: "https://rolling-gourmet.netlify.app"
  },{
    id:2,
    Nombre: "Rolling Gourmet",
    Descripcion: "Rolling Gourmet es una pagina realizada para la gestion de pedidos de un local, incluye sistema de administración con controles de usuarios, controles de productos, y controles de las ordenes realizadas. Registrate y pruebala de forma tranquila",
    Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697499616/Portafolio/Proyectos%20web/Proyectos/image_27_m7tiqo.png",
    Link: "https://rolling-gourmet.netlify.app"
  },
  {
    id:3,
    Nombre: "Rolling Gourmet",
    Descripcion: "Rolling Gourmet es una pagina realizada para la gestion de pedidos de un local, incluye sistema de administración con controles de usuarios, controles de productos, y controles de las ordenes realizadas. Registrate y pruebala de forma tranquila",
    Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697499616/Portafolio/Proyectos%20web/Proyectos/image_27_m7tiqo.png",
    Link: "https://rolling-gourmet.netlify.app"
  },
  {
    id:4,
    Nombre: "Rolling Gourmet",
    Descripcion: "Rolling Gourmet es una pagina realizada para la gestion de pedidos de un local, incluye sistema de administración con controles de usuarios, controles de productos, y controles de las ordenes realizadas. Registrate y pruebala de forma tranquila",
    Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697499616/Portafolio/Proyectos%20web/Proyectos/image_27_m7tiqo.png",
    Link: "https://rolling-gourmet.netlify.app"
  },
  {
    id:5,
    Nombre: "Rolling Gourmet",
    Descripcion: "Rolling Gourmet es una pagina realizada para la gestion de pedidos de un local, incluye sistema de administración con controles de usuarios, controles de productos, y controles de las ordenes realizadas. Registrate y pruebala de forma tranquila",
    Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697499616/Portafolio/Proyectos%20web/Proyectos/image_27_m7tiqo.png",
    Link: "https://rolling-gourmet.netlify.app"
  }]

  return (
    <>
        <CustomSwiper Slide_de_proyectos={Slide} />
</>
  );
}

export default ProyectosProgramacionWeb;