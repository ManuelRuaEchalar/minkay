import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSlider from "./components/Hero/HeroSlider";
import MapaContacto from "./components/Contacto/MapaContacto";
import SistemaDonaciones from "./components/Donaciones/SistemaDonaciones";
import {
  FaWater,
  FaRecycle,
  FaBook,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUsers,
  FaGlobeAmericas,
  FaTimes,
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
  FaTree,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./styles/global.css";

function App() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedAreaImages, setSelectedAreaImages] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const openImageModal = (areaImages, index) => {
    setSelectedAreaImages(areaImages);
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedAreaImages([]);
    setSelectedImageIndex(0);
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedAreaImages.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedAreaImages.length - 1 : prevIndex - 1
    );
  };

  const objectivesData = [
    {
      id: 1,
      number: "01",
      title: "Seguridad Alimentaria y Nutrición",

      description:
        "Garantizar el acceso permanente a alimentos nutritivos para estudiantes y familias rurales de Chuquisaca.",
      icon: <FaAppleAlt />,
    },
    {
      id: 2,
      number: "02",
      title: "Producción Hidropónica y Agricultura Sostenible",
      description:
        "Implementar sistemas hidropónicos con energía solar para producción agrícola sostenible y eficiente.",
      icon: <FaSun />,
    },
    {
      id: 3,
      number: "03",
      title: "Agroindustria / Agronegocios",
      description:
        "Desarrollar cadenas de valor para plantas aromáticas, medicinales y culinarias con enfoque de mercado.",
      icon: <FaIndustry />,
    },
    {
      id: 4,
      number: "04",
      title: "Economía Ambiental y Ecológica",
      description:
        "Proteger bosques nativos mediante educación ambiental y alternativas económicas sostenibles.",
      icon: <FaTree />,
    },
    {
      id: 5,
      number: "05",
      title: "Desarrollo Comunitario",
      description:
        "Fortalecer capacidades locales para la autogestión y el emprendimiento productivo en comunidades.",
      icon: <FaUsers />,
    },
    {
      id: 6,
      number: "06",
      title: "Educación Ambiental",
      description:
        "Promover educación ambiental y nutricional en niños, jóvenes y mujeres de zonas rurales.",
      icon: <FaBook />,
    },
    {
      id: 7,
      number: "07",
      title: "Alianzas Estratégicas",
      description:
        "Establecer alianzas con instituciones para ampliar el impacto de nuestros programas.",
      icon: <FaGlobeAmericas />,
    },
    {
      id: 8,
      number: "08",
      title: "Transparencia",
      description:
        "Gestionar donaciones de manera transparente garantizando que los recursos lleguen a quienes más lo necesitan.",
      icon: <FaRecycle />,
    },
    {
      id: 9,
      number: "09",
      title: "Gestión Hídrica",
      description:
        "Promover el uso responsable del agua mediante tecnologías de ahorro y prácticas sostenibles.",
      icon: <FaWater />,
    },
  ];

  const areaDetails = [
    {
      id: 1,
      title: "Seguridad Alimentaria y Nutrición",
      description:
        "Programa de alimentación complementaria y seguridad alimentaria escolar",
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
        process.env.PUBLIC_URL + "/images/areas/alimentacion-1.jpg",
        process.env.PUBLIC_URL + "/images/areas/alimentacion-2.jpg",
        process.env.PUBLIC_URL + "/images/areas/alimentacion-3.jpg",
      ],
      beneficiaries:
        "20,900 estudiantes y sus familias en 120 escuelas rurales",
      impact: "20,900 estudiantes con alimentación garantizada diariamente",
      methodology:
        "Enfoque participativo con diagnóstico nutricional comunitario",
      budget: "Bs. 2,500,000 anuales para programa completo",
      icon: <FaAppleAlt />,
      color: "#537A5A",
    },
    {
      id: 2,
      title: "Producción Hidropónica y Agricultura Sostenible",
      description:
        "Integración de energía solar fotovoltaica en sistemas NFT para producción sostenible",
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
        process.env.PUBLIC_URL + "/images/hidroponia/hidroponia1.jpeg",
        process.env.PUBLIC_URL + "/images/hidroponia/hidroponia2.jpeg",
        process.env.PUBLIC_URL + "/images/hidroponia/hidroponia3.jpeg",
        process.env.PUBLIC_URL + "/images/hidroponia/hidroponia4.jpeg",
      ],
      beneficiaries:
        "Agricultores familiares, escuelas técnicas, emprendedores rurales",
      impact: "15 sistemas solares-hidropónicos produciendo todo el año",
      methodology: "Transferencia tecnológica con enfoque aprender haciendo",
      budget: "Bs. 25,000 por sistema completo (incluye capacitación)",
      icon: <FaSun />,
      color: "#3A5740",
    },
    {
      id: 3,
      title: "Agroindustria / Agronegocios",
      description:
        "Cadena de valor de plantas aromáticas, medicinales y culinarias (PAMC)",
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
        process.env.PUBLIC_URL + "/images/areas/agroindustria-1.jpg",
        process.env.PUBLIC_URL + "/images/areas/agroindustria-2.jpg",
        process.env.PUBLIC_URL + "/images/areas/agroindustria-3.jpg",
      ],
      beneficiaries:
        "Pequeños productores, mujeres rurales, comunidades indígenas",
      impact: "120 familias incrementaron sus ingresos en 200%",
      methodology: "Desarrollo de cadena de valor con enfoque de mercado",
      budget: "Bs. 450,000 por cadena de valor completa",
      icon: <FaIndustry />,
      color: "#2C8C76",
    },
    {
      id: 4,
      title: "Economía Ambiental y Ecológica",
      description:
        "Tierra Viva - Protección de bosques nativos y desarrollo de alternativas económicas sostenibles",
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
        process.env.PUBLIC_URL + "/images/areas/tierra-viva-1.jpg",
        process.env.PUBLIC_URL + "/images/areas/tierra-viva-2.jpg",
        process.env.PUBLIC_URL + "/images/areas/tierra-viva-3.jpg",
      ],
      beneficiaries:
        "Comunidades indígenas, familias forestales, jóvenes rurales",
      impact: "5,000 hectáreas de bosque nativo bajo protección comunitaria",
      methodology:
        "Conservación participativa con enfoque de medios de vida sostenibles",
      budget: "Bs. 680,000 por ecosistema protegido",
      icon: <FaTree />,
      color: "#73ae82",
    },
    {
      id: 5,
      title: "Desarrollo Comunitario",
      description:
        "Fortalecimiento de capacidades locales, autogestión y emprendimiento productivo en las comunidades",
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
        process.env.PUBLIC_URL + "/images/areas/comunidad-1.jpg",
        process.env.PUBLIC_URL + "/images/areas/comunidad-2.jpg",
        process.env.PUBLIC_URL + "/images/areas/comunidad-3.jpg",
      ],
      beneficiaries:
        "Organizaciones sociales, grupos de productores, comunidades indígenas",
      impact: "20 comunidades con capacidades fortalecidas para la autogestión",
      methodology:
        "Desarrollo de base con enfoque de derechos, participación y sostenibilidad",
      budget: "Bs. 320,000 por comunidad",
      icon: <FaUsers />,
      color: "#67583E",
    },
  ];

  const openAreaModal = (areaId) => {
    const area = areaDetails.find((a) => a.id === areaId);
    setSelectedArea(area);
    setIsAreaModalOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  const closeAreaModal = () => {
    setSelectedArea(null);
    setIsAreaModalOpen(false);
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  };

  return (
    <div className="App">
      <Header />
      <HeroSlider />

      <section id="nosotros" className="section section-dark">
        <div className="container">
          <h2 className="section-title">¿Quiénes Somos?</h2>
          <p className="section-subtitle">
            Fundación MINK'AY - Luchando contra el hambre y la desnutrición en
            Chuquisaca
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
                  {/* <div className="stat-item">
                    <span className="stat-number">20,900+</span>
                    <span className="stat-label">Estudiantes beneficiados</span>
                  </div> */}
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
                <p
                  style={{
                    marginTop: "1rem",
                    fontStyle: "italic",
                    color: "#84714F",
                  }}
                >
                  "Cada ración entregada representa una oportunidad real de
                  cambio, equidad y futuro para miles de estudiantes que hoy
                  enfrentan condiciones de extrema precariedad."
                </p>

                <div
                  className="approach-details"
                  style={{ marginTop: "1.5rem" }}
                >
                  <h4 style={{ color: "#537A5A", marginBottom: "0.8rem" }}>
                    Pilares de Acción:
                  </h4>
                  <ul className="values-list">
                    <li>
                      <strong>Sostenibilidad:</strong> Soluciones que perduren
                      en el tiempo
                    </li>
                    <li>
                      <strong>Soberanía Alimentaria:</strong> Fortalecimiento de
                      sistemas locales
                    </li>
                    <li>
                      <strong>Justicia Social:</strong> Equidad en el acceso a
                      alimentos
                    </li>
                    <li>
                      <strong>Educación Integral:</strong> Apoyo al rendimiento
                      escolar
                    </li>
                    <li>
                      <strong>Cuidado Ambiental:</strong> Prácticas
                      ecológicamente responsables
                    </li>
                    <li>
                      <strong>Uso Responsable del Agua:</strong> Preservación
                      del recurso hídrico
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="impact-container" style={{ marginTop: "3rem" }}>
            <h3
              style={{
                textAlign: "center",
                color: "#537A5A",
                marginBottom: "2rem",
              }}
            >
              ¿Cuál sería nuestro impacto?
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
            Haz clic en cualquier área para ver proyectos, metodología y
            resultados
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
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '12px',
            boxSizing: 'border-box',
          }}
          onClick={closeAreaModal}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '500px',
              maxHeight: 'calc(100vh - 24px)',
              overflowY: 'auto',
              position: 'relative',
              boxSizing: 'border-box',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: '16px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <div style={{ color: selectedArea.color, fontSize: '28px', flexShrink: 0 }}>
                {selectedArea.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#537A5A', fontWeight: 700 }}>
                  {selectedArea.title}
                </h3>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>
                  {selectedArea.description}
                </p>
              </div>
              <button
                onClick={closeAreaModal}
                style={{
                  background: '#f0f0f0',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '16px' }}>
              {/* Descripción */}
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '14px', color: '#537A5A' }}>
                  Descripción del Programa
                </h4>
                <div style={{
                  background: '#f9f9f9',
                  padding: '12px',
                  borderRadius: '8px',
                  maxHeight: '150px',
                  overflowY: 'auto',
                  fontSize: '13px',
                  color: '#555',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                }}>
                  {selectedArea.detailedDescription}
                </div>
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                marginBottom: '16px',
              }}>
                <div style={{ background: '#F2E2D2', padding: '10px', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '11px', color: '#84714F', fontWeight: 600 }}>Duración</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#333' }}>{selectedArea.duration}</p>
                </div>
                <div style={{ background: '#F2E2D2', padding: '10px', borderRadius: '8px' }}>
                  <p style={{ margin: 0, fontSize: '11px', color: '#84714F', fontWeight: 600 }}>Inversión</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#333' }}>{selectedArea.budget}</p>
                </div>
              </div>

              {/* Resultados */}
              <div style={{ marginBottom: '16px' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '14px', color: '#537A5A' }}>
                  Resultados Alcanzados
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12px', color: '#555' }}>
                  {selectedArea.detailedDescription
                    .split("\n")
                    .filter((line) => line.includes("✓"))
                    .slice(0, 5)
                    .map((result, index) => (
                      <li key={index} style={{ marginBottom: '4px' }}>
                        {result.replace("✓", "").trim()}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Botones */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={() => {
                    closeAreaModal();
                    document.getElementById("donaciones")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#537A5A',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <FaHandHoldingHeart /> Apoyar este Área
                </button>
                <button
                  onClick={closeAreaModal}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'white',
                    color: '#537A5A',
                    border: '2px solid #537A5A',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PARA VER IMÁGENES EN GRANDE */}
      {isImageModalOpen && selectedAreaImages.length > 0 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '12px',
            boxSizing: 'border-box',
          }}
          onClick={closeImageModal}
        >
          <div
            style={{
              backgroundColor: 'rgba(30,30,30,0.9)',
              borderRadius: '12px',
              padding: '12px',
              width: '100%',
              maxWidth: '500px',
              maxHeight: 'calc(100vh - 24px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxSizing: 'border-box',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con botón cerrar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'white', fontSize: '13px' }}>
                {selectedImageIndex + 1} / {selectedAreaImages.length}
              </span>
              <button
                onClick={closeImageModal}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Imagen principal */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flex: 1,
              minHeight: 0,
            }}>
              <button
                onClick={prevImage}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  flexShrink: 0,
                }}
              >
                <FaChevronLeft size={14} />
              </button>

              <img
                src={selectedAreaImages[selectedImageIndex]}
                alt={`Imagen ${selectedImageIndex + 1}`}
                style={{
                  maxWidth: 'calc(100% - 88px)',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />

              <button
                onClick={nextImage}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  flexShrink: 0,
                }}
              >
                <FaChevronRight size={14} />
              </button>
            </div>

            {/* Thumbnails */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6px',
              overflowX: 'auto',
              padding: '4px',
            }}>
              {selectedAreaImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: index === selectedImageIndex ? 1 : 0.5,
                    border: index === selectedImageIndex ? '2px solid #537A5A' : '2px solid transparent',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
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
          {/* AQUÍ ESTÁ EL MAPA DE CONTACTO */}
          <MapaContacto />

          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            Visítanos en nuestra oficina o contáctanos por correo
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope size={50} color="#537A5A" />
              </div>
              <h3>Correo Electrónico</h3>
              <p>
                <a href="mailto:contacto@minkay.org" className="contact-link">
                  Contacto@minkay.org
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
                <a href="tel:+59174536806" className="contact-link">
                  +591 74536806
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
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
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
              <div className="footer-logo-container">
                <div className="footer-logo-img-wrapper">
                  <img
                    src={process.env.PUBLIC_URL + "/images/minkay.png"}
                    alt="Logo Fundación MINK'AY"
                    className="footer-logo-img"
                  />
                </div>
                <div className="footer-logo-text">
                  <h3 className="footer-logo-title">MINK'AY</h3>
                  <p className="footer-logo-subtitle">
                    Fundación dedicada a la reducción de la pobreza y el
                    desarrollo sostenible en Chuquisaca.
                  </p>
                </div>
              </div>
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
                <FaEnvelope />{" "}
                <a href="mailto:contacto@minkay.org">contacto@minkay.org</a>
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