import React from "react";
import "./SobreMi.css";
function SobreMi() {
  return (
    <div className="d-flex flex-column text-light px-2">
      <section>
        <div className="d-flex align-items-center m-2 content_sobre_mi">
          <div className="imagen_sobre_mi">
            <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697517802/Portafolio/Equipo/Miembros/round-account-button-with-user-inside_icon-icons.com_72596_gzxtfw.png" alt="imagen_perfil" />
          </div>
          <div className="descripcion_sobre_mi">
            <ul>
              <li><h5>Mauro Villagra</h5></li>
              <li>Edad: 21</li>
              <li>Nacionalidad: Argentina</li>
              <li>Provincia: Tucuman</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h4>Estudio</h4>
        <div className="d-flex flex-wrap lista_estudios">
          <li>
            <img
              src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697571804/Portafolio/Estudios/image-removebg-preview_96_knsdym.png"
              alt="tecnica_rafael_marino"
            />
            <div className="d-flex align-items-center texto_estudio">
              <p>Escuela Técnica Profesor Rafael Marino</p>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697571903/Portafolio/Estudios/image-removebg-preview_97_msgv0q.png"
              alt="universidad_tecnologica_nacional"
            />
            <div className="d-flex align-items-center texto_estudio">
              <p>Universidad Tecnológica Nacional</p>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697571894/Portafolio/Estudios/Logo_Rojo0000_xcciao.png"
              alt="rolling_code"
            />
            <div className="d-flex align-items-center texto_estudio">
              <p>Rolling Code</p>
            </div>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697571990/Portafolio/Estudios/image-removebg-preview_98_zjxyil.png"
              alt="free_code_camp"
            />
            <div className="d-flex align-items-center texto_estudio">
              <p>Free Code Camp</p>
            </div>
          </li>
        </div>
      </section>
      <section>
        <h4>Tecnologías</h4>
        <div className="d-flex tecnologias_sobre_mi flex-wrap">
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697582132/Portafolio/Proyectos%20web/Iconos%20Grandes/file_type_html_icon_130541_2_vjvky4.png"
            alt="html_img"
          />
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697582129/Portafolio/Proyectos%20web/Iconos%20Grandes/file_type_css_icon_130661_2_juqiqy.png"
            alt="css_img"
          />
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697582128/Portafolio/Proyectos%20web/Iconos%20Grandes/bootstrap_plain_logo_icon_146619_2_ro0ts1.png"
            alt="bootstrap_img"
          />
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697582139/Portafolio/Proyectos%20web/Iconos%20Grandes/file_type_js_official_icon_130509_2_cdnasb.png"
            alt="js_img"
          />
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697582137/Portafolio/Proyectos%20web/Iconos%20Grandes/react_original_logo_icon_146374_2_k83znk.png"
            alt="react_img"
          />
          <img
            src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697582135/Portafolio/Proyectos%20web/Iconos%20Grandes/file_type_node_icon_130301_2_cxdvmi.png"
            alt="node_img"
          />
        </div>
      </section>
      <section>
        <h4>Habilidades</h4>
        <div className="lista_habilidades_sobre_mi">
          <h5>Analisis de Requerimientos</h5>
          <ul>
            <li>Requerimiento Funcionales</li>
            <li>Requerimiento No Funcionales</li>
            <li>Casos de Uso</li>
            <li>Modelo de Dominio</li>
            <li>Contratos</li>
            <li>Diagrama de Clases</li>
            <li>Diagrama de Secuencia</li>
            <li>Diagrama de Actividades</li>
          </ul>
          <h5>Diseño de Software</h5>
          <ul>
            <li>Diseño de Prototipos</li>
            <li>Diseño Arquitectonico</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SobreMi;
