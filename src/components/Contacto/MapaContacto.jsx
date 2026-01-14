import React from "react";
import { FaMapMarkerAlt, FaClock, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";
import "./MapaContacto.css";

const MapaContacto = () => {
  const whatsappNumber = "59171879628"; // Tu número sin el +
  const whatsappMessage =
    "Hola Fundación MINK'AY, me interesa saber más sobre...";

  return (
    <div className="mapa-container">
      <h3 className="mapa-titulo">Nuestra Ubicación</h3>
      <p className="mapa-direccion">
        <FaMapMarkerAlt /> <strong>Oficina Central:</strong> La Paz 562, Sucre,
        Chuquisaca
      </p>

      <div className="mapa-wrapper">
        <iframe
          title="Ubicación Fundación MINK'AY"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.277493090433!2d-65.2609059243748!3d-19.047648239823034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf3f8e5e62cb%3A0xf1d7106e0b8b231c!2sLa%20Paz%20562%2C%20Sucre%2C%20Bolivia!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mapa-iframe"
        ></iframe>
      </div>

      <div className="info-contacto">
        <div className="info-item">
          <span className="info-icon">
            <FaClock />
          </span>
          <div>
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes: 8:00 - 18:00</p>
            <p>Sábados: 8:00 - 12:00</p>
            <p className="info-note">* Horario de oficina administrativa</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">
            <FaWhatsapp />
          </span>
          <div>
            <h4>WhatsApp</h4>
            <p>Consulta rápida por WhatsApp</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Escribir por WhatsApp
            </a>
            <p className="info-note">Responde en minutos</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">
            <FaCalendarAlt />
          </span>
          <div>
            <h4>Visitas Programadas</h4>
            <p>Para visitar nuestros proyectos</p>
            <p>Coordinar con 3 días de anticipación</p>
            <p className="info-note">Solo con cita previa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaContacto;