import React from "react";
import "./Equipo.css"

function Equipo() {
  const Miembro = [
    // {
    //   id: 1,
    //   Nombre: "Mauro Villagra",
    //   Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png",
    //   Profesion: "Scrum Master",
    // },
    {
      id: 2,
      Nombre: "Mauro Villagra",
      Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png",
      Profesion: "Programador",
    },
    {
      id: 3,
      Nombre: "Mauro Villagra",
      Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png",
      Profesion: "Programador",
    },
    {
      id: 4,
      Nombre: "Mauro Villagra",
      Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png",
      Profesion: "Programador",
    },
    // {
    //   id: 5,
    //   Nombre: "Mauro Villagra",
    //   Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png",
    //   Profesion: "Analista",
    // },
    // {
    //   id: 6,
    //   Nombre: "Mauro Villagra",
    //   Imagen: "https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png",
    //   Profesion: "Diseñador",
    // },
  ];
  return (
    <>
      <div className="d-flex  conteiner_equipo justify-content-center">
        {Miembro.map((miembro) => (
          <div className="conteiner_user p-2 d-flex " key={miembro.id}>
            {/* <h3>{miembro.Nombre}</h3>
             */}
            <img src={miembro.Imagen} alt={miembro.Nombre} />
            <p className="text-light px-2">{miembro.Profesion}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Equipo;
