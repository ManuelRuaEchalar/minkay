import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSlider from "./components/Hero/HeroSlider";
import MapaContacto from "./components/Contacto/MapaContacto";
import SistemaDonaciones from "./components/Donaciones/SistemaDonaciones";
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
  FaUsers,
  FaGlobeAmericas,
  FaTimes,
  FaImages,
  FaCalendarAlt,
  FaHandHoldingHeart,
  FaCrosshairs,
  FaBullseye,
  FaUserGraduate,
  FaSchool,
  FaCheckCircle,
  FaChartLine,
  FaAppleAlt,
  FaSun,
  FaIndustry,
  FaTree
} from "react-icons/fa";
import "./styles/global.css";

function App() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);

  const objectivesData = [
    {
      id: 1,
      number: "01",
      title: "Seguridad Alimentaria y Nutrición",
      
      description: "Garantizar el acceso permanente a alimentos nutritivos para estudiantes y familias rurales de Chuquisaca.",
      icon: <FaAppleAlt />,
    },
    {
      id: 2,
      number: "02",
      title: "Producción Hidropónica y Agricultura Sostenible",
      description: "Implementar sistemas hidropónicos con energía solar para producción agrícola sostenible y eficiente.",
      icon: <FaSun />,
    },
    {
      id: 3,
      number: "03",
      title: "Agroindustria / Agronegocios",
      description: "Desarrollar cadenas de valor para plantas aromáticas, medicinales y culinarias con enfoque de mercado.",
      icon: <FaIndustry />,
    },
    {
      id: 4,
      number: "04",
      title: "Economía Ambiental y Ecológica",
      description: "Proteger bosques nativos mediante educación ambiental y alternativas económicas sostenibles.",
      icon: <FaTree />,
    },
    {
      id: 5,
      number: "05",
      title: "Desarrollo Comunitario",
      description: "Fortalecer capacidades locales para la autogestión y el emprendimiento productivo en comunidades.",
      icon: <FaUsers />,
    },
    {
      id: 6,
      number: "06",
      title: "Educación Ambiental",
      description: "Promover educación ambiental y nutricional en niños, jóvenes y mujeres de zonas rurales.",
      icon: <FaBook />,
    },
    {
      id: 7,
      number: "07",
      title: "Alianzas Estratégicas",
      description: "Establecer alianzas con instituciones para ampliar el impacto de nuestros programas.",
      icon: <FaGlobeAmericas />,
    },
    {
      id: 8,
      number: "08",
      title: "Transparencia",
      description: "Gestionar donaciones de manera transparente garantizando que los recursos lleguen a quienes más lo necesitan.",
      icon: <FaRecycle />,
    },
    {
      id: 9,
      number: "09",
      title: "Gestión Hídrica",
      description: "Promover el uso responsable del agua mediante tecnologías de ahorro y prácticas sostenibles.",
      icon: <FaWater />,
    },
  ];

  const areaDetails = [
    {
      id: 1,
      title: "Seguridad Alimentaria y Nutrición",
      description: "Programa de alimentación complementaria y seguridad alimentaria escolar",
      detailedDescription: `Nuestro programa integral de seguridad alimentaria y nutrición incluye:

Componentes principales:

1. Alimentación Escolar Complementaria:
   • 20,900 raciones diarias nutricionalmente balanceadas
   • Menús diseñados por nutricionistas especializados
   • Fortificación con vitaminas y minerales esenciales
   • Acompañamiento pedagógico en hábitos saludables

2. **Huertos Escolares Pedagógicos:**
   • 120 huertos implementados en escuelas rurales
   • Integración curricular con ciencias naturales
   • Producción de verduras para complementar raciones
   • Educación práctica en agricultura sostenible

3. **Capacitación Familiar:**
   • Talleres de nutrición para madres y padres
   • Recuperación de recetas tradicionales nutritivas
   • Planificación de compras y presupuestos familiares
   • Manejo y conservación de alimentos

4. **Sistema de Monitoreo:**
   • Evaluación antropométrica trimestral
   • Seguimiento de rendimiento académico
   • Encuestas de diversidad alimentaria
   • Participación comunitaria en la gestión

**Impacto Medido:**
✓ 35% reducción en deserción escolar
✓ 42% mejora en concentración en clase
✓ 28% aumento en asistencia escolar
✓ 85% de familias reportan mejor alimentación en casa
✓ 120 escuelas con programas activos`,
      duration: "Programa continuo con evaluación anual",
      images: [
        "/areas/alimentacion-1.jpg",
        "/areas/alimentacion-2.jpg",
        "/areas/alimentacion-3.jpg",
      ],
      beneficiaries: "20,900 estudiantes y sus familias en 120 escuelas rurales",
      impact: "20,900 estudiantes con alimentación garantizada diariamente",
      methodology: "Enfoque participativo con diagnóstico nutricional comunitario",
      budget: "Bs. 2,500,000 anuales para programa completo",
      icon: <FaAppleAlt />,
      color: "#537A5A",
    },
    {
      id: 2,
      title: "Producción Hidropónica y Agricultura Sostenible",
      description: "Integración de energía solar fotovoltaica en sistemas NFT para producción sostenible",
      detailedDescription: `Innovación tecnológica al servicio de la agricultura familiar:

**Proyecto Revolucionario:**
Sistemas NFT (Nutrient Film Technique) alimentados 100% con energía solar fotovoltaica, diseñados específicamente para el altiplano chuquisaqueño.

**Componentes Técnicos:**

1. **Sistema Hidropónico NFT:**
   • Canaletas de recirculación continua
   • Control automatizado de nutrientes
   • Monitoreo remoto vía IoT
   • Producción todo el año sin suelo

2. **Integración Solar:**
   • Paneles fotovoltaicos 500W por sistema
   • Bombeo solar directo sin baterías
   • Eficiencia energética optimizada
   • Mantenimiento mínimo y durable

3. **Capacitación Especializada:**
   • Curso técnico de 3 meses
   • Manuales visuales bilingües (español/quechua)
   • Acompañamiento técnico permanente
   • Escuela de formadores locales

**Especies Cultivadas:**
• Lechugas variedad hidropónica
• Espinacas y acelgas
• Hierbas aromáticas
• Tomates cherry

**Resultados Documentados:**
✓ 90% menos agua que agricultura tradicional
✓ 95% reducción en uso de pesticidas
✓ 300% más producción por metro cuadrado
✓ 8 meses de retorno de inversión
✓ 15 sistemas funcionando en 8 comunidades
✓ 120 agricultores capacitados como técnicos
✓ 5 emprendimientos generando empleo local`,
      duration: "18 meses por instalación completa",
      images: [
        "/areas/hidroponia-1.jpg",
        "/areas/hidroponia-2.jpg",
        "/areas/hidroponia-3.jpg",
      ],
      beneficiaries: "Agricultores familiares, escuelas técnicas, emprendedores rurales",
      impact: "15 sistemas solares-hidropónicos produciendo todo el año",
      methodology: "Transferencia tecnológica con enfoque aprender haciendo",
      budget: "Bs. 25,000 por sistema completo (incluye capacitación)",
      icon: <FaSun />,
      color: "#3A5740",
    },
    {
      id: 3,
      title: "Agroindustria / Agronegocios",
      description: "Cadena de valor de plantas aromáticas, medicinales y culinarias (PAMC)",
      detailedDescription: `Transformando tradición en oportunidad económica:

**Especies Priorizadas:**
• Muña (Minthostachys mollis): Digestivo natural, alto valor comercial
• Huacataya (Tagetes minuta): Esencia culinaria andina única
• Paico (Dysphania ambrosioides): Propiedades antiparasitarias
• Orégano (Origanum vulgare): Demanda internacional creciente
• Romero (Salvia rosmarinus): Usos culinarios y medicinales

**Cadena de Valor Implementada:**

1. **Producción Sostenible:**
   • Cultivo orgánico certificado
   • Conservación in situ de variedades nativas
   • Asociación con cultivos tradicionales
   • Manejo agroecológico de suelos

2. Transformación con Valor Agregado:
   • Secaderos solares mejorados
   • Extracción de aceites esenciales
   • Elaboración de tés e infusiones premium
   • Envasado al vacío para exportación

3. Comercialización Inteligente:
   • Mercados campesinos digitales
   • Contratos con empresas de productos naturales
   • Exportación a mercados especializados
   • Marca colectiva "Hierbas del Altiplano"

4. Organización Empresarial:
   • Asociaciones de productores legalmente constituidas
   • Fondos rotatorios para capital de trabajo
   • Capacitación en gestión empresarial
   • Alianzas con universidades para I+D

Impacto Económico:
✓ 120 familias con ingresos estables todo el año
✓ 200% aumento en valor de productos transformados
✓ 8 asociaciones con personería jurídica
✓ 15 hectáreas bajo cultivo orgánico certificado
✓ 5 productos con registro sanitario INVIMA
✓ 3 contratos de exportación a Europa
✓ 40% de participación de mujeres en dirección`,
      duration: "24 meses por cadena de valor desarrollada",
      images: [
        "/areas/agroindustria-1.jpg",
        "/areas/agroindustria-2.jpg",
        "/areas/agroindustria-3.jpg",
      ],
      beneficiaries: "Pequeños productores, mujeres rurales, comunidades indígenas",
      impact: "120 familias incrementaron sus ingresos en 200%",
      methodology: "Desarrollo de cadena de valor con enfoque de mercado",
      budget: "Bs. 450,000 por cadena de valor completa",
      icon: <FaIndustry />,
      color: "#2C8C76",
    },
    {
      id: 4,
      title: "Economía Ambiental y Ecológica",
      description: "Tierra Viva - Protección de bosques nativos y desarrollo de alternativas económicas sostenibles",
      detailedDescription: `"Las verdaderas guardianas y guardianes de nuestros bosques son quienes los habitan"

Programa Tierra Viva:

Conservación Activa:
• 5,000 hectáreas de bosque nativo bajo protección comunitaria
• Brigadas forestales voluntarias
• Sistemas de alerta temprana de incendios
• Corredores biológicos para fauna silvestre

Viveros Comunitarios:
• Producción de 50,000 plantas nativas anuales
• 8 viveros manejados por mujeres rurales
• Técnicas de propagación ancestral
• Bancos de semillas comunitarios

Alternativas Económicas:
• Apicultura Orgánica: 120 colmenas en bosques nativos
• Turismo Ecológico: Rutas interpretativas comunitarias
• Productos No Maderables: Recolección sostenible certificada
• Artesanías: Con materiales naturales del bosque

Educación Ambiental:
• Escuelas ecológicas rurales
• Clubes de guardianes ambientales juveniles
• Festivales interculturales de conservación
• Materiales educativos en quechua y español

Gobernanza Comunitaria:
• Planes de manejo forestal participativos
• Comités de vigilancia comunitaria
• Acuerdos de conservación intercomunales
• Sistema de justicia ambiental local

Logros de Conservación:
✓ 95% reducción en deforestación en áreas intervenidas
✓ Recuperación de 3 especies vegetales en peligro
✓ 15 manantiales protegidos y recuperados
✓ 40 familias con ingresos por actividades sostenibles
✓ 500 jóvenes formados como guardianes ambientales
✓ 2 premios nacionales de conservación`,
      duration: "36 meses por ecosistema intervenido",
      images: [
        "/areas/tierra-viva-1.jpg",
        "/areas/tierra-viva-2.jpg",
        "/areas/tierra-viva-3.jpg",
      ],
      beneficiaries: "Comunidades indígenas, familias forestales, jóvenes rurales",
      impact: "5,000 hectáreas de bosque nativo bajo protección comunitaria",
      methodology: "Conservación participativa con enfoque de medios de vida sostenibles",
      budget: "Bs. 680,000 por ecosistema protegido",
      icon: <FaTree />,
      color: "#73ae82",
    },
    {
      id: 5,
      title: "Desarrollo Comunitario",
      description: "Fortalecimiento de capacidades locales, autogestión y emprendimiento productivo en las comunidades",
      detailedDescription: `"El verdadero desarrollo nace desde y para la comunidad"

**Nuestro Enfoque:**
Trabajamos con un modelo de desarrollo de base que prioriza la autogestión, la participación activa y el fortalecimiento de capacidades locales.

**Proceso en 4 Fases:**

**Fase 1: Diagnóstico y Organización Participativa**
• Mapeo comunitario de recursos y necesidades
• Identificación de líderes naturales y talentos locales
• Formación de comités de desarrollo comunitario
• Planificación estratégica participativa

**Fase 2: Fortalecimiento de Capacidades**
• Escuela de líderes comunitarios (6 meses)
• Gestión de proyectos sociales y productivos
• Administración y contabilidad básica
• Comunicación asertiva y negociación

**Fase 3: Implementación de Iniciativas**
• Fondos semilla para emprendimientos locales
• Asesoramiento técnico especializado
• Gestión de alianzas y redes de apoyo
• Monitoreo participativo de avances

**Fase 4: Sostenibilidad y Réplica**
• Sistema de evaluación comunitaria
• Escuela de formadores comunitarios
• Documentación de experiencias exitosas
• Redes de intercambio intercomunitario

**Capacidades Desarrolladas:**
• Liderazgo: 150 líderes comunitarios formados
• Gestión: 20 organizaciones con capacidad administrativa
• Emprendimiento: 35 negocios familiares establecidos
• Incidencia: 8 políticas locales influenciadas

**Proyectos Exitosos:**
✓ Sistema de riego comunitario en Yamparáez (beneficia 80 familias)
✓ Fondo rotatorio de mujeres emprendedoras (capital inicial: Bs. 50,000)
✓ Mercado campesino itinerante (15 comunidades participantes)
✓ Radio comunitaria "Voces de la Tierra" (alcance: 5 municipios)
✓ Biblioteca comunitaria móvil (3,000 libros en circulación)

**Impacto Medido:**
✓ 85% de comunidades con planes de desarrollo propios
✓ 60% aumento en participación ciudadana
✓ 40% reducción en migración juvenil
✓ 25 emprendimientos generando empleo local
✓ 15 comunidades certificadas en autogestión`,
      duration: "24 meses por proceso comunitario",
      images: [
        "/areas/comunidad-1.jpg",
        "/areas/comunidad-2.jpg",
        "/areas/comunidad-3.jpg",
      ],
      beneficiaries: "Organizaciones sociales, grupos de productores, comunidades indígenas",
      impact: "20 comunidades con capacidades fortalecidas para la autogestión",
      methodology: "Desarrollo de base con enfoque de derechos, participación y sostenibilidad",
      budget: "Bs. 320,000 por comunidad",
      icon: <FaUsers />,
      color: "#67583E",
    }
  ];

  const openAreaModal = (areaId) => {
    const area = areaDetails.find((a) => a.id === areaId);
    setSelectedArea(area);
    setIsAreaModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeAreaModal = () => {
    setSelectedArea(null);
    setIsAreaModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="App">
      <Header />
      <HeroSlider />

      <section id="nosotros" className="section section-dark">
        <div className="container">
          <h2 className="section-title">¿Quiénes Somos?</h2>
          <p className="section-subtitle">
            Fundación MINK'AY - Luchando contra el hambre y la desnutrición en Chuquisaca
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <FaCrosshairs size={50} color="#537A5A" />
              </div>
              <div className="card-content">
                <h3>Objetivo General</h3>
                <p>
                  Contribuir a la reducción del hambre, la malnutrición y la
                  inseguridad alimentaria en zonas rurales del departamento de
                  Chuquisaca, mediante la provisión gratuita, regular y
                  nutricionalmente adecuada de raciones alimentarias a 20.900
                  estudiantes en edad escolar, fortaleciendo simultáneamente los
                  sistemas alimentarios locales, la resiliencia comunitaria y el
                  desarrollo territorial sostenible.
                </p>
                <div className="impact-stats">
                  <div className="stat-item">
                    <span className="stat-number">20,900+</span>
                    <span className="stat-label">Estudiantes beneficiados</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaBullseye size={50} color="#84714F" />
              </div>
              <div className="card-content">
                <h3>Fin de la Fundación</h3>
                <p>
                  La Fundación MINK'AY tiene como fin garantizar el acceso
                  gratuito y permanente a raciones alimentarias nutritivas para
                  niñas, niños y adolescentes de los municipios rurales del
                  departamento de Chuquisaca, como una acción directa contra la
                  desnutrición, la pobreza extrema y la exclusión social.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Nuestra labor busca no solo aliviar el hambre, sino proteger
                  el derecho fundamental a una alimentación digna, fortalecer el
                  rendimiento escolar, reducir la deserción educativa y promover
                  el desarrollo integral de comunidades históricamente
                  vulneradas.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaHandsHelping size={50} color="#537A5A" />
              </div>
              <div className="card-content">
                <h3>Nuestro Enfoque</h3>
                <p>
                  MINK'AY trabaja con un enfoque de sostenibilidad, soberanía
                  alimentaria y justicia social, articulando seguridad
                  alimentaria, educación, cuidado del medio ambiente y uso
                  responsable del agua, generando impactos medibles y de largo
                  plazo.
                </p>
                <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#84714F" }}>
                  "Cada ración entregada representa una oportunidad real de
                  cambio, equidad y futuro para miles de estudiantes que hoy
                  enfrentan condiciones de extrema precariedad."
                </p>

                <div className="approach-details" style={{ marginTop: "1.5rem" }}>
                  <h4 style={{ color: "#537A5A", marginBottom: "0.8rem" }}>
                    Pilares de Acción:
                  </h4>
                  <ul className="values-list">
                    <li>
                      <strong>Sostenibilidad:</strong> Soluciones que perduren en el tiempo
                    </li>
                    <li>
                      <strong>Soberanía Alimentaria:</strong> Fortalecimiento de sistemas locales
                    </li>
                    <li>
                      <strong>Justicia Social:</strong> Equidad en el acceso a alimentos
                    </li>
                    <li>
                      <strong>Educación Integral:</strong> Apoyo al rendimiento escolar
                    </li>
                    <li>
                      <strong>Cuidado Ambiental:</strong> Prácticas ecológicamente responsables
                    </li>
                    <li>
                      <strong>Uso Responsable del Agua:</strong> Preservación del recurso hídrico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="impact-container" style={{ marginTop: "3rem" }}>
            <h3 style={{ textAlign: "center", color: "#537A5A", marginBottom: "2rem" }}>
              Nuestro Impacto en Números
            </h3>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">
                  <FaUserGraduate size={60} color="#537A5A" />
                </div>
                <div className="impact-content">
                  <h4>20,900+</h4>
                  <p>Estudiantes beneficiados con raciones alimentarias</p>
                </div>
              </div>

              <div className="impact-card">
                <div className="impact-icon">
                  <FaSchool size={60} color="#3A5740" />
                </div>
                <div className="impact-content">
                  <h4>120+</h4>
                  <p>Escuelas atendidas en municipios rurales</p>
                </div>
              </div>

              <div className="impact-card">
                <div className="impact-icon">
                  <FaCheckCircle size={60} color="#2C8C76" />
                </div>
                <div className="impact-content">
                  <h4>100%</h4>
                  <p>Raciones nutricionalmente adecuadas</p>
                </div>
              </div>

              <div className="impact-card">
                <div className="impact-icon">
                  <FaChartLine size={60} color="#84714F" />
                </div>
                <div className="impact-content">
                  <h4>35%</h4>
                  <p>Reducción en deserción escolar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="objetivos" className="section section-light">
        <div className="container">
          <h2 className="section-title">Objetivos Estratégicos</h2>
          <p className="section-subtitle">
            Los 9 pilares que guían nuestro trabajo en Chuquisaca
          </p>

          <div className="objectives-container">
            {objectivesData.map((objetivo) => (
              <div key={objetivo.id} className="objective-card-improved">
                <div className="objective-header">
                  <div className="objective-number-container">
                    <span className="objective-number">{objetivo.number}</span>
                    <div className="objective-icon">{objetivo.icon}</div>
                  </div>
                  <h3 className="objective-title">{objetivo.title}</h3>
                </div>
                <div className="objective-content">
                  <p className="objective-description">
                    {objetivo.description}
                  </p>
                  <div className="objective-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="section section-dark">
        <div className="container">
          <h2 className="section-title">Áreas de Acción</h2>
          <p className="section-subtitle">
            Haz clic en cualquier área para ver proyectos, metodología y resultados
          </p>

          <div className="areas-grid">
            {areaDetails.map((area) => (
              <div
                key={area.id}
                className="area-card clickable-area"
                onClick={() => openAreaModal(area.id)}
                style={{ borderTop: `4px solid ${area.color}` }}
              >
                <div className="area-icon" style={{ color: area.color }}>
                  {area.icon}
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="area-hint">
                  <span className="area-hint-text">
                    Ver detalles del programa →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isAreaModalOpen && selectedArea && (
        <div className="modal-overlay area-modal-overlay" onClick={closeAreaModal}>
          <div className="modal-content area-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAreaModal}>
              <FaTimes />
            </button>

            <div className="area-modal-header">
              <div className="area-modal-title-container">
                <div className="area-modal-icon" style={{ color: selectedArea.color }}>
                  {selectedArea.icon}
                </div>
                <div>
                  <h3 className="modal-title">{selectedArea.title}</h3>
                  <p className="modal-subtitle">{selectedArea.description}</p>
                </div>
              </div>
            </div>

            <div className="area-modal-grid">
              <div className="area-modal-left">
                <div className="area-images-section">
                  <div className="images-header">
                    <FaImages className="images-icon" />
                    <h4>Proyectos en Ejecución</h4>
                  </div>
                  <div className="area-images-grid">
                    {selectedArea.images.map((img, index) => (
                      <div key={index} className="area-image-container">
                        <div className="area-image-placeholder">
                          <FaImages size={40} />
                          <p>Proyecto {index + 1}</p>
                          <small className="image-note">
                            (Imagen representativa)
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="area-methodology">
                  <h4>Metodología de Implementación</h4>
                  <p className="methodology-text">{selectedArea.methodology}</p>
                </div>
              </div>

              <div className="area-modal-right">
                <div className="area-detailed-description">
                  <h4>Descripción Detallada del Programa</h4>
                  <div className="detailed-description-box">
                    <p className="detailed-description-text">
                      {selectedArea.detailedDescription}
                    </p>
                  </div>
                </div>

                <div className="area-stats-grid">
                  <div className="area-stat-card">
                    <div className="stat-icon">
                      <FaCalendarAlt />
                    </div>
                    <div className="stat-content">
                      <h5>Duración</h5>
                      <p className="stat-value">{selectedArea.duration}</p>
                    </div>
                  </div>

                  <div className="area-stat-card">
                    <div className="stat-icon">
                      <FaUsers />
                    </div>
                    <div className="stat-content">
                      <h5>Beneficiarios Directos</h5>
                      <p className="stat-value">{selectedArea.beneficiaries}</p>
                    </div>
                  </div>

                  <div className="area-stat-card">
                    <div className="stat-icon">
                      <FaHandHoldingHeart />
                    </div>
                    <div className="stat-content">
                      <h5>Impacto Medido</h5>
                      <p className="stat-value">{selectedArea.impact}</p>
                    </div>
                  </div>

                  <div className="area-stat-card">
                    <div className="stat-icon">
                      <FaLeaf />
                    </div>
                    <div className="stat-content">
                      <h5>Inversión Anual</h5>
                      <p className="stat-value">{selectedArea.budget}</p>
                    </div>
                  </div>
                </div>

                <div className="area-results">
                  <h4>Resultados Alcanzados</h4>
                  <ul className="results-list">
                    {selectedArea.detailedDescription
                      .split("\n")
                      .filter((line) => line.includes("✓"))
                      .map((result, index) => (
                        <li key={index} className="result-item">
                          {result.replace("✓", "").trim()}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="area-modal-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      closeAreaModal();
                      document.getElementById("donaciones")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <FaHandHoldingHeart /> Apoyar este Área
                  </button>
                  <button className="btn btn-secondary" onClick={closeAreaModal}>
                    Ver otras áreas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="donaciones" className="donation-section">
        <div className="container">
          <h2 className="section-title">Haz la Diferencia con tu Donación</h2>
          <p className="section-subtitle">
            Tu apoyo nos permite llegar a más familias vulnerables en Chuquisaca
          </p>

          <SistemaDonaciones />
        </div>
      </section>

      <section id="contacto" className="section section-light">
        <div className="container">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            Visítanos en nuestra oficina o contáctanos por correo
          </p>

          {/* AQUÍ ESTÁ EL MAPA DE CONTACTO */}
          <MapaContacto />

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope size={50} color="#537A5A" />
              </div>
              <h3>Correo Electrónico</h3>
              <p>
                <a href="mailto:contacto@minkay.org" className="contact-link">
                  contacto@minkay.org
                </a>
              </p>
              <p>Responderemos tu mensaje en menos de 24 horas</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone size={50} color="#537A5A" />
              </div>
              <h3>Teléfono</h3>
              <p>
                <a href="tel:+59112345678" className="contact-link">
                  +591 1234 5678
                </a>
              </p>
              <p>Lunes a Viernes de 8:00 a 18:00</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaUsers size={50} color="#537A5A" />
              </div>
              <h3>Redes Sociales</h3>
              <p>Síguenos para estar al día con nuestros proyectos</p>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">🌿 MINK'AY</h3>
              <p>
                Fundación dedicada a la reducción de la pobreza y el desarrollo
                sostenible en Chuquisaca.
              </p>
            </div>

            <div className="footer-section">
              <h3>Enlaces Rápidos</h3>
              <a href="#nosotros" className="footer-link">
                Quiénes Somos
              </a>
              <a href="#objetivos" className="footer-link">
                Objetivos
              </a>
              <a href="#areas" className="footer-link">
                Áreas de Acción
              </a>
              <a href="#donaciones" className="footer-link">
                Donaciones
              </a>
              <a href="#contacto" className="footer-link">
                Contacto
              </a>
            </div>

            <div className="footer-section">
              <h3>Contacto</h3>
              <p className="footer-contact">
                <FaMapMarkerAlt /> La Paz 562, Sucre, Chuquisaca
              </p>
              <p className="footer-contact">
                <FaEnvelope /> <a href="mailto:contacto@minkay.org">contacto@minkay.org</a>
              </p>
              <p className="footer-contact">
                <FaPhone /> +591 74536806
              </p>
            </div>

            <div className="footer-section">
              <h3>Nuestro Impacto</h3>
              <p className="footer-impact">✓ Familias beneficiadas</p>
              <p className="footer-impact">
                ✓ Sistemas hidropónicos instalados
              </p>
              <p className="footer-impact">✓ Capacitaciones realizadas</p>
              <p className="footer-impact">✓ Comunidades alcanzadas</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Fundación MINK'AY. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;