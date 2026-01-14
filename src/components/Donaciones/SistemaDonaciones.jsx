import React, { useState } from 'react';
import { FaCreditCard, FaQrcode, FaUniversity, FaTimes } from 'react-icons/fa';
import './SistemaDonaciones.css';

const SistemaDonaciones = () => {
  const [modalOpen, setModalOpen] = useState(null); // 'qr', 'tarjeta', 'transferencia'

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
    document.body.style.overflow = 'auto'; // Restaurar scroll
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
                  <img src="/qr_donations.jpeg" alt="QR Donaciones" className="qr-image" />
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

      {/* Modal Tarjeta */}
      {modalOpen === 'tarjeta' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3>Donación con Tarjeta</h3>
            <div className="tarjeta-form">
              <form>
                <div className="form-group">
                  <label>Número de Tarjeta</label>
                  <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Fecha de Vencimiento</label>
                    <input type="text" placeholder="MM/AA" maxLength="5" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" maxLength="3" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Nombre en la Tarjeta</label>
                  <input type="text" placeholder="JUAN PEREZ" />
                </div>
                <div className="form-group">
                  <label>Monto a Donar (Bs)</label>
                  <select>
                    <option value="50">50 Bs</option>
                    <option value="100">100 Bs</option>
                    <option value="150">150 Bs</option>
                    <option value="300">300 Bs</option>
                    <option value="otro">Otro monto</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Email para recibo</label>
                  <input type="email" placeholder="tu@email.com" />
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
                      <img src="/qr_donations.jpeg" alt="QR Donaciones" className="qr-image small" />
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