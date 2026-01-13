import React from 'react';
import Header from './components/Header/Header';
import HeroSlider from './components/Hero/HeroSlider';
import { 
  FaLeaf, 
  FaWater, 
  FaSeedling, 
  FaRecycle, 
  FaBook,
  FaHandsHelping,
  FaUtensils,
  FaHeart,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHandHoldingHeart,
  FaUsers,
  FaChartLine,
  FaGlobeAmericas
} from 'react-icons/fa';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      
      {/* Sección Nosotros */}
      <section id="nosotros" className="section section-dark">
        <div className="container">
          <h2 className="section-title">¿Quiénes Somos?</h2>
          <p className="section-subtitle">
            Fundación MINK'AY trabaja en Chuquisaca para reducir la pobreza mediante 
            programas solidarios de seguridad alimentaria y desarrollo sostenible.
          </p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <FaLeaf size={50} color="#537A5A" />
              </div>
              <div className="card-content">
                <h3>Nuestra Misión</h3>
                <p>
                  Contribuir a la reducción de la pobreza en áreas rurales y periurbanas del departamento de Chuquisaca, 
                  mediante programas solidarios de donación, seguridad alimentaria y desarrollo sostenible, 
                  promoviendo el acceso a alimentos saludables, el uso responsable del agua, el cuidado del medio ambiente 
                  y la implementación de sistemas innovadores como la hidroponía y la alimentación complementaria, 
                  fortaleciendo la autonomía y la dignidad de las familias beneficiarias.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaGlobeAmericas size={50} color="#84714F" />
              </div>
              <div className="card-content">
                <h3>Nuestra Visión</h3>
                <p>
                  Ser una fundación referente en Chuquisaca en la lucha contra la pobreza y la inseguridad alimentaria, 
                  reconocida por su impacto social, su compromiso con el medio ambiente y su promoción de soluciones 
                  sostenibles, innovadoras y comunitarias que mejoren la calidad de vida de las poblaciones más vulnerables.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaHandsHelping size={50} color="#537A5A" />
              </div>
              <div className="card-content">
                <h3>Nuestros Valores</h3>
                <ul className="values-list">
                  <li><strong>Solidaridad:</strong> Compromiso con las comunidades más necesitadas</li>
                  <li><strong>Transparencia:</strong> Gestión honesta y clara de los recursos</li>
                  <li><strong>Sostenibilidad:</strong> Soluciones que perduren en el tiempo</li>
                  <li><strong>Innovación:</strong> Uso de tecnologías apropiadas y modernas</li>
                  <li><strong>Respeto:</strong> Por las personas y el medio ambiente</li>
                  <li><strong>Compromiso:</strong> Con los Objetivos de Desarrollo Sostenible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Objetivos */}
      <section id="objetivos" className="section section-light">
        <div className="container">
          <h2 className="section-title">Objetivos Estratégicos</h2>
          <p className="section-subtitle">
            Metas claras para generar impacto sostenible y transformar vidas
          </p>
          
          <div className="objectives-grid">
            {[
              "Fortalecer la seguridad alimentaria en comunidades rurales y periurbanas del departamento de Chuquisaca, mediante programas de producción, acceso y distribución de alimentos nutritivos y saludables.",
              "Promover sistemas sostenibles de producción de alimentos, como la hidroponía y otras tecnologías apropiadas, que optimicen el uso del agua y reduzcan el impacto ambiental.",
              "Impulsar el uso responsable y eficiente del agua, a través de educación, implementación de tecnologías de ahorro hídrico y prácticas sostenibles adaptadas al contexto local.",
              "Contribuir a la reducción de la pobreza extrema, brindando apoyo alimentario, productivo y formativo a familias en situación de vulnerabilidad.",
              "Fomentar la educación ambiental y nutricional, especialmente en niños, jóvenes y mujeres, para mejorar hábitos alimenticios y fortalecer el cuidado del entorno.",
              "Desarrollar capacidades comunitarias, promoviendo la autogestión, el emprendimiento productivo y la participación activa de las comunidades en su propio desarrollo.",
              "Establecer alianzas estratégicas con municipios, organizaciones sociales, instituciones educativas, empresas y cooperantes nacionales e internacionales para ampliar el impacto de los programas.",
              "Canalizar y gestionar donaciones de manera transparente, garantizando que los recursos lleguen de forma efectiva a las poblaciones que más lo necesitan.",
              "Implementar programas de alimentación complementaria, enfocados en la niñez, adultos mayores y personas en situación de riesgo nutricional."
            ].map((objetivo, index) => (
              <div key={index} className="objective-card">
                <div className="objective-number">{index + 1}</div>
                <div className="objective-text">{objetivo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección Áreas de Acción */}
      <section id="areas" className="section section-dark">
        <div className="container">
          <h2 className="section-title">Áreas de Acción</h2>
          <p className="section-subtitle">
            Programas estratégicos para el desarrollo comunitario sostenible
          </p>
          
          <div className="areas-grid">
            {[
              { icon: <FaSeedling />, title: "Seguridad Alimentaria", desc: "Programas de producción, acceso y distribución de alimentos nutritivos para combatir la desnutrición" },
              { icon: <FaWater />, title: "Hidroponía", desc: "Implementación de sistemas hidropónicos que optimizan el uso del agua y permiten producir alimentos saludables" },
              { icon: <FaRecycle />, title: "Uso Responsable del Agua", desc: "Educación y tecnologías de ahorro hídrico adaptadas al contexto local para preservar este recurso vital" },
              { icon: <FaLeaf />, title: "Medio Ambiente", desc: "Promoción de prácticas sostenibles y educación ambiental para proteger nuestros ecosistemas" },
              { icon: <FaBook />, title: "Educación Nutricional", desc: "Formación en hábitos alimenticios saludables dirigida a niños, jóvenes y mujeres de comunidades rurales" },
              { icon: <FaUsers />, title: "Desarrollo Comunitario", desc: "Fortalecimiento de capacidades locales, autogestión y emprendimiento productivo en las comunidades" },
              { icon: <FaUtensils />, title: "Alimentación Complementaria", desc: "Programas especializados para niños, adultos mayores y personas en riesgo nutricional" },
              { icon: <FaHeart />, title: "Apoyo a Familias Vulnerables", desc: "Asistencia integral para familias en situación de pobreza extrema" }
            ].map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección Donaciones */}
      <section id="donaciones" className="donation-section">
        <div className="container">
          <h2 className="section-title">Haz la Diferencia con tu Donación</h2>
          <p className="section-subtitle">
            Tu apoyo nos permite llegar a más familias vulnerables en Chuquisaca. 
            Cada donación se gestiona con total transparencia.
          </p>
          
          <div className="donation-grid">
            {[
              { title: "Básico", amount: "50 Bs", features: [
                "Alimentos para 1 familia por 1 semana",
                "Material educativo nutricional",
                "Apoyo a programas comunitarios"
              ]},
              { title: "Solidario", amount: "150 Bs", features: [
                "Alimentos para 3 familias por 1 semana",
                "Kit de hidroponía básico",
                "Talleres de educación ambiental",
                "Seguimiento nutricional"
              ]},
              { title: "Transformador", amount: "300 Bs", features: [
                "Alimentos para 6 familias por 1 mes",
                "Sistema hidropónico completo",
                "Capacitación productiva",
                "Tecnología de ahorro hídrico",
                "Impacto sostenible a largo plazo"
              ]}
            ].map((plan, index) => (
              <div key={index} className="donation-card">
                <div className="donation-icon">
                  <FaHandHoldingHeart size={40} />
                </div>
                <h3>{plan.title}</h3>
                <div className="donation-amount">{plan.amount}</div>
                <ul className="donation-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-donate">Donar Ahora</button>
              </div>
            ))}
          </div>
          
          <div className="bank-info">
            <h3>Información Bancaria</h3>
            <div className="bank-details">
              <div className="bank-detail">
                <span className="bank-label">Banco:</span>
                <span className="bank-value">Banco Unión</span>
              </div>
              <div className="bank-detail">
                <span className="bank-label">Titular:</span>
                <span className="bank-value">Fundación MINK'AY</span>
              </div>
              <div className="bank-detail">
                <span className="bank-label">Cuenta:</span>
                <span className="bank-value">10000123456789</span>
              </div>
              <div className="bank-detail">
                <span className="bank-label">NIT:</span>
                <span className="bank-value">123456789</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Contacto */}
      <section id="contacto" className="section section-light">
        <div className="container">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            ¿Tienes preguntas o deseas colaborar? Estamos aquí para ayudarte
          </p>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt size={50} />
              </div>
              <h3>Ubicación</h3>
              <p>Chuquisaca, Bolivia</p>
              <p>Trabajamos en áreas rurales y periurbanas del departamento</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope size={50} />
              </div>
              <h3>Correo Electrónico</h3>
              <p><a href="mailto:contacto@minkay.org">contacto@minkay.org</a></p>
              <p>Responderemos tu mensaje en menos de 24 horas</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone size={50} />
              </div>
              <h3>Redes Sociales</h3>
              <p>Síguenos para estar al día con nuestros proyectos</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebook /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>🌿 MINK'AY</h3>
              <p>Fundación dedicada a la reducción de la pobreza y el desarrollo sostenible en Chuquisaca.</p>
              <p><strong>Transparencia y compromiso</strong> con las comunidades más vulnerables.</p>
            </div>
            
            <div className="footer-section">
              <h3>Enlaces Rápidos</h3>
              <a href="#nosotros">Quiénes Somos</a>
              <a href="#objetivos">Objetivos</a>
              <a href="#areas">Áreas de Acción</a>
              <a href="#donaciones">Donaciones</a>
              <a href="#contacto">Contacto</a>
            </div>
            
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>📍 Chuquisaca, Bolivia</p>
              <p>📧 contacto@minkay.org</p>
              <p>🕒 Lun - Vie: 8:00 - 18:00</p>
              <div className="footer-social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Nuestro Impacto</h3>
              <p>✓ Familias beneficiadas</p>
              <p>✓ Sistemas hidropónicos instalados</p>
              <p>✓ Capacitaciones realizadas</p>
              <p>✓ Comunidades alcanzadas</p>
              <button className="btn btn-footer">Únete a Nuestra Causa</button>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Fundación MINK'AY. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ para las comunidades de Chuquisaca</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;