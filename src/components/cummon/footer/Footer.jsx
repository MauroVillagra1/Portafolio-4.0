import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <footer>
      <section className="seccion_contacto">
        <h3 className="text-light text-center">Contacto</h3>
        <ul>
          <li><a href="https://mail.google.com/mail/?view=cm&to=maurovillagra257@gmail.com" target="_blank"><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697565410/Portafolio/Icono%20de%20Contacto/gmail_new_logo_icon_159149_wwrr4o.png" alt="gmail_icon" /></a></li>
          <li><a href="https://wa.me/+543816680339"  target="_blank"><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697565395/Portafolio/Icono%20de%20Contacto/Whatsapp_icon-icons.com_66931_mealdj.png" alt="whatsapp_icon" /></a></li>
          <li><a href="https://www.linkedin.com/in/mauro-villagra-59433a253/"  target="_blank"><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697565424/Portafolio/Icono%20de%20Contacto/in_linked_linkedin_media_social_icon_124259_yrsqu6.png" alt="linkedin_icon" /></a></li>
          <li><a href="https://www.facebook.com/mauro.villagra.520/"  target="_blank"><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697565416/Portafolio/Icono%20de%20Contacto/facebook_icon-icons.com_53612_ctyqzh.png" alt="facebook_icon" /></a></li>
          <li><a href="https://www.instagram.com/mauro_villagra1/"  target="_blank"><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697565404/Portafolio/Icono%20de%20Contacto/3721672-instagram_108066_xo7pfl.png" alt="instagram_icon" /></a></li>
          <li><a href="https://twitter.com/Mauro_Villagra1"  target="_blank"><img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1697565423/Portafolio/Icono%20de%20Contacto/twitter_x_new_logo_square_x_icon_256075_u5dnhz.png" alt="twitter_x_icon" /></a></li>
        </ul>
      </section>
      <section></section>
    </footer>
  );
}

export default Footer;
