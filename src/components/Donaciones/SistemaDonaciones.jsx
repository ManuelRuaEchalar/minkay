import React, { useState } from 'react';
import { FaCreditCard, FaQrcode, FaUniversity, FaTimes } from 'react-icons/fa';
import './SistemaDonaciones.css';

const SistemaDonaciones = () => {
  const [modalOpen, setModalOpen] = useState(null); // 'qr', 'tarjeta', 'transferencia'
  const [montoSeleccionado, setMontoSeleccionado] = useState('50'); // Monto por defecto
  const [montoPersonalizado, setMontoPersonalizado] = useState(''); // Monto personalizado
  const [mostrarCampoPersonalizado, setMostrarCampoPersonalizado] = useState(false); // Controla visibilidad

  const opcionesDonacion = [
    {
      id: 'qr',
      icon: <FaQrcode size={40} />,
      title: 'Pago por QR',
      description: 'Escanea nuestro código QR para donar rápidamente',
      color: '#537A5A'
    },
    {
      id: 'tarjeta',
      icon: <FaCreditCard size={40} />,
      title: 'Tarjeta de Crédito/Débito',
      description: 'Donación segura con tarjeta',
      color: '#84714F'
    },
    {
      id: 'transferencia',
      icon: <FaUniversity size={40} />,
      title: 'Transferencia Bancaria',
      description: 'Transferencia directa a nuestra cuenta',
      color: '#3A5740'
    }
  ];

  const openModal = (tipo) => {
    setModalOpen(tipo);
    document.body.style.overflow = 'hidden'; // Bloquear scroll
  };

  const closeModal = () => {
    setModalOpen(null);
    setMontoSeleccionado('50'); // Resetear a valor por defecto
    setMontoPersonalizado(''); // Limpiar campo personalizado
    setMostrarCampoPersonalizado(false); // Ocultar campo
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Manejar cambio en el select de montos
  const handleMontoChange = (e) => {
    const valor = e.target.value;
    setMontoSeleccionado(valor);
    
    if (valor === 'otro') {
      setMostrarCampoPersonalizado(true);
    } else {
      setMostrarCampoPersonalizado(false);
      setMontoPersonalizado(''); // Limpiar campo si vuelve a montos fijos
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determinar el monto final
    let montoFinal;
    if (montoSeleccionado === 'otro') {
      montoFinal = parseFloat(montoPersonalizado);
      
      // Validar que sea un número y que sea mayor o igual a 6.99 Bs
      if (isNaN(montoFinal) || montoFinal < 6.99) {
        alert('Por favor ingresa un monto válido. El mínimo es 6.99 Bs (equivalente a 1 USD)');
        return;
      }
    } else {
      montoFinal = parseFloat(montoSeleccionado);
    }
    
    // Aquí normalmente enviarías los datos al backend
    console.log('Monto a donar:', montoFinal, 'Bs');
    alert(`¡Gracias por tu donación de ${montoFinal} Bs!`);
    
    // Cerrar modal después de enviar
    closeModal();
  };

  // Manejar cambio en el campo personalizado
  const handleMontoPersonalizadoChange = (e) => {
    const valor = e.target.value;
    // Permitir solo números y un punto decimal
    if (/^\d*\.?\d*$/.test(valor)) {
      setMontoPersonalizado(valor);
    }
  };

  return (
    <div className="sistema-donaciones">
      <h3 className="donaciones-titulo">Métodos de Donación</h3>
      <p className="donaciones-subtitulo">
        Elige la forma más conveniente para apoyar nuestra causa
      </p>
      
      <div className="metodos-grid">
        {opcionesDonacion.map((opcion) => (
          <div 
            key={opcion.id} 
            className="metodo-card"
            style={{ borderTop: `4px solid ${opcion.color}` }}
            onClick={() => openModal(opcion.id)}
          >
            <div className="metodo-icon" style={{ color: opcion.color }}>
              {opcion.icon}
            </div>
            <h4>{opcion.title}</h4>
            <p>{opcion.description}</p>
            <button className="btn-metodo">Seleccionar</button>
          </div>
        ))}
      </div>

      {/* Modal QR */}
      {modalOpen === 'qr' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3>Donación por QR</h3>
            <div className="qr-container">
              <div className="qr-code">
                {/* Mostrar la imagen real del QR para donaciones */}
                <div className="qr-placeholder">
                  <img src="/qr_donations.png" alt="QR Donaciones" className="qr-image" />
                </div>
              </div>
              <div className="qr-instructions">
                <h4>Instrucciones:</h4>
                <ol>
                  <li>Abre la app de tu banco o billetera digital</li>
                  <li>Selecciona la opción "Pagar con QR"</li>
                  <li>Escanea este código QR</li>
                  <li>Ingresa el monto que deseas donar</li>
                  <li>Confirma la transacción</li>
                </ol>
                <p className="qr-note">
                  <strong>Nota:</strong> Las donaciones por QR se procesan instantáneamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Tarjeta - ACTUALIZADO */}
      {modalOpen === 'tarjeta' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3>Donación con Tarjeta</h3>
            <div className="tarjeta-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Número de Tarjeta</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456" 
                    maxLength="19" 
                    required 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Fecha de Vencimiento</label>
                    <input 
                      type="text" 
                      placeholder="MM/AA" 
                      maxLength="5" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input 
                      type="text" 
                      placeholder="123" 
                      maxLength="3" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Nombre en la Tarjeta</label>
                  <input 
                    type="text" 
                    placeholder="Nombre del propietario" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Monto a Donar (Bs)</label>
                  <select 
                    value={montoSeleccionado} 
                    onChange={handleMontoChange}
                  >
                    <option value="50">50 Bs</option>
                    <option value="100">100 Bs</option>
                    <option value="150">150 Bs</option>
                    <option value="300">300 Bs</option>
                    <option value="otro">Otro monto</option>
                  </select>
                  
                  {/* Campo para monto personalizado - solo visible cuando se selecciona "otro" */}
                  {mostrarCampoPersonalizado && (
                    <div className="monto-personalizado" style={{ marginTop: '10px' }}>
                      <input
                        type="text"
                        placeholder="Ej: 25.50"
                        value={montoPersonalizado}
                        onChange={handleMontoPersonalizadoChange}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          border: '2px solid #ddd',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      />
                      <small style={{ color: '#84714F', display: 'block', marginTop: '5px' }}>
                        <strong>Mínimo: 6.99 Bs (equivalente a 1 USD)</strong>
                      </small>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email para recibo</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    required 
                  />
                </div>
                <button type="submit" className="btn-donar-tarjeta">
                  <FaCreditCard /> Donar Ahora
                </button>
                <p className="security-note">
                  🔒 Transacción 100% segura. No almacenamos datos de tarjeta.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Transferencia */}
      {modalOpen === 'transferencia' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3>Transferencia Bancaria</h3>
            <div className="bank-details-modal">
              <div className="bank-info-card">
                <h4>Información Bancaria</h4>
                <table className="bank-table">
                  <tbody>
                    <tr>
                      <td><strong>Banco:</strong></td>
                      <td>Banco Unión</td>
                    </tr>
                    <tr>
                      <td><strong>Titular:</strong></td>
                      <td>Fundación MINK'AY</td>
                    </tr>
                    <tr>
                      <td><strong>Cuenta:</strong></td>
                      <td>1000-1234-5678-9</td>
                    </tr>
                    <tr>
                      <td><strong>Tipo de Cuenta:</strong></td>
                      <td>Cuenta Corriente</td>
                    </tr>
                    <tr>
                      <td><strong>NIT:</strong></td>
                      <td>123456789</td>
                    </tr>
                    <tr>
                      <td><strong>Moneda:</strong></td>
                      <td>Bolivianos (Bs)</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="transfer-instructions">
                  <h5>Instrucciones:</h5>
                  <ol>
                    <li>Realiza la transferencia a la cuenta indicada</li>
                    <li>En el concepto escribe: "Donación MINK'AY"</li>
                    <li>Envía el comprobante a: contacto@minkay.org</li>
                    <li>Recibirás tu recibo deducible de impuestos en 24h</li>
                  </ol>
                </div>
                
                <div className="qr-bancario">
                  <h5>QR Bancario (opcional):</h5>
                  <div className="qr-bancario-placeholder">
                      <img src="qr_donations.png" alt="QR Donaciones" className="qr-image small" />
                      <p>Escanea para transferencia rápida</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SistemaDonaciones;