import React, { useState, useEffect } from 'react';
import { FaCreditCard, FaQrcode, FaUniversity, FaTimes } from 'react-icons/fa';

const SistemaDonaciones = () => {
  const [modalOpen, setModalOpen] = useState(null);
  const [montoSeleccionado, setMontoSeleccionado] = useState('50');
  const [montoPersonalizado, setMontoPersonalizado] = useState('');

  const opcionesDonacion = [
    {
      id: 'qr',
      icon: <FaQrcode size={32} />,
      title: 'Pago por QR',
      description: 'Escanea nuestro código QR',
      color: '#537A5A'
    },
    {
      id: 'tarjeta',
      icon: <FaCreditCard size={32} />,
      title: 'Tarjeta de Crédito',
      description: 'Donación segura con tarjeta',
      color: '#84714F'
    },
    {
      id: 'transferencia',
      icon: <FaUniversity size={32} />,
      title: 'Transferencia',
      description: 'Transferencia bancaria',
      color: '#3A5740'
    }
  ];

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [modalOpen]);

  const closeModal = () => {
    setModalOpen(null);
    setMontoSeleccionado('50');
    setMontoPersonalizado('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const monto = montoSeleccionado === 'otro'
      ? parseFloat(montoPersonalizado)
      : parseFloat(montoSeleccionado);

    if (montoSeleccionado === 'otro' && (isNaN(monto) || monto < 6.99)) {
      alert('El monto mínimo es 6.99 Bs');
      return;
    }
    alert(`¡Gracias por tu donación de ${monto} Bs!`);
    closeModal();
  };

  // ESTILOS INLINE - GARANTIZA QUE FUNCIONEN EN MÓVIL
  const backdropStyle = {
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
    margin: 0,
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '420px',
    maxHeight: 'calc(100vh - 24px)',
    overflowY: 'auto',
    position: 'relative',
    boxSizing: 'border-box',
    margin: 0,
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
  };

  const headerStyle = {
    padding: '16px 20px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '18px',
    fontWeight: 700,
    color: '#537A5A',
  };

  const closeButtonStyle = {
    background: '#f0f0f0',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#666',
    flexShrink: 0,
  };

  const bodyStyle = {
    padding: '16px 20px',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
    marginTop: '4px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '12px',
    fontSize: '13px',
    fontWeight: 600,
    color: '#444',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#537A5A',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '12px',
  };

  // Componente Modal simple
  const Modal = ({ title, children, onClose }) => (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <h3 style={titleStyle}>{title}</h3>
          <button style={closeButtonStyle} onClick={onClose}>
            <FaTimes size={14} />
          </button>
        </div>
        <div style={bodyStyle}>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: 'white', borderRadius: '12px', padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h3 style={{ color: '#537A5A', textAlign: 'center', marginBottom: '8px', fontSize: '1.5rem' }}>
        Métodos de Donación
      </h3>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        Elige cómo apoyar nuestra causa
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {opcionesDonacion.map((opcion) => (
          <div
            key={opcion.id}
            onClick={() => setModalOpen(opcion.id)}
            style={{
              background: '#fafafa',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              cursor: 'pointer',
              borderTop: `4px solid ${opcion.color}`,
              transition: 'transform 0.2s',
            }}
          >
            <div style={{ color: opcion.color, marginBottom: '10px' }}>{opcion.icon}</div>
            <h4 style={{ margin: '0 0 6px', color: '#333', fontSize: '14px' }}>{opcion.title}</h4>
            <p style={{ margin: '0 0 12px', color: '#777', fontSize: '12px' }}>{opcion.description}</p>
            <button style={{
              background: '#537A5A',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '13px',
              cursor: 'pointer',
            }}>
              Seleccionar
            </button>
          </div>
        ))}
      </div>

      {/* Modal QR */}
      {modalOpen === 'qr' && (
        <Modal title="Donación por QR" onClose={closeModal}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
              <img
                src="/qr_donations.png"
                alt="QR Donaciones"
                style={{ width: '160px', height: '160px', display: 'block', margin: '0 auto' }}
              />
            </div>
            <h4 style={{ color: '#537A5A', margin: '0 0 10px', fontSize: '14px' }}>Instrucciones:</h4>
            <ol style={{ textAlign: 'left', paddingLeft: '20px', margin: 0, fontSize: '13px', color: '#555' }}>
              <li>Abre tu app bancaria</li>
              <li>Selecciona "Pagar con QR"</li>
              <li>Escanea este código</li>
              <li>Ingresa el monto</li>
              <li>Confirma</li>
            </ol>
            <p style={{ background: '#F2E2D2', padding: '10px', borderRadius: '6px', marginTop: '12px', fontSize: '12px', color: '#84714F' }}>
              Las donaciones se procesan al instante
            </p>
          </div>
        </Modal>
      )}

      {/* Modal Tarjeta */}
      {modalOpen === 'tarjeta' && (
        <Modal title="Donación con Tarjeta" onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>
              Número de Tarjeta
              <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" required style={inputStyle} />
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <label style={labelStyle}>
                Vencimiento
                <input type="text" placeholder="MM/AA" maxLength="5" required style={inputStyle} />
              </label>
              <label style={labelStyle}>
                CVV
                <input type="text" placeholder="123" maxLength="3" required style={inputStyle} />
              </label>
            </div>
            <label style={labelStyle}>
              Nombre en Tarjeta
              <input type="text" placeholder="Nombre completo" required style={inputStyle} />
            </label>
            <label style={labelStyle}>
              Monto (Bs)
              <select
                value={montoSeleccionado}
                onChange={(e) => setMontoSeleccionado(e.target.value)}
                style={inputStyle}
              >
                <option value="50">50 Bs</option>
                <option value="100">100 Bs</option>
                <option value="150">150 Bs</option>
                <option value="300">300 Bs</option>
                <option value="otro">Otro monto</option>
              </select>
            </label>
            {montoSeleccionado === 'otro' && (
              <label style={labelStyle}>
                Monto personalizado
                <input
                  type="number"
                  placeholder="Mínimo 6.99"
                  value={montoPersonalizado}
                  onChange={(e) => setMontoPersonalizado(e.target.value)}
                  min="6.99"
                  step="0.01"
                  style={inputStyle}
                />
              </label>
            )}
            <label style={labelStyle}>
              Email para recibo
              <input type="email" placeholder="tu@email.com" required style={inputStyle} />
            </label>
            <button type="submit" style={buttonStyle}>
              <FaCreditCard /> Donar Ahora
            </button>
            <p style={{ textAlign: 'center', fontSize: '11px', color: '#888', marginTop: '10px' }}>
              🔒 Transacción segura
            </p>
          </form>
        </Modal>
      )}

      {/* Modal Transferencia */}
      {modalOpen === 'transferencia' && (
        <Modal title="Transferencia Bancaria" onClose={closeModal}>
          <div style={{ background: '#f9f9f9', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
            <h4 style={{ color: '#537A5A', margin: '0 0 10px', fontSize: '14px', textAlign: 'center' }}>Datos Bancarios</h4>
            <table style={{ width: '100%', fontSize: '13px' }}>
              <tbody>
                <tr><td style={{ padding: '4px 0', color: '#333' }}><strong>Banco:</strong></td><td>Banco Unión</td></tr>
                <tr><td style={{ padding: '4px 0', color: '#333' }}><strong>Titular:</strong></td><td>Fundación MINK'AY</td></tr>
                <tr><td style={{ padding: '4px 0', color: '#333' }}><strong>Cuenta:</strong></td><td>1000-1234-5678-9</td></tr>
                <tr><td style={{ padding: '4px 0', color: '#333' }}><strong>Tipo:</strong></td><td>Corriente</td></tr>
                <tr><td style={{ padding: '4px 0', color: '#333' }}><strong>NIT:</strong></td><td>123456789</td></tr>
              </tbody>
            </table>
          </div>
          <h4 style={{ color: '#537A5A', margin: '0 0 8px', fontSize: '14px' }}>Instrucciones:</h4>
          <ol style={{ paddingLeft: '20px', margin: '0 0 16px', fontSize: '13px', color: '#555' }}>
            <li>Transfiere a la cuenta indicada</li>
            <li>Concepto: "Donación MINK'AY"</li>
            <li>Envía comprobante a contacto@minkay.org</li>
          </ol>
          <div style={{ textAlign: 'center', padding: '12px', background: '#fafafa', borderRadius: '8px', border: '2px dashed #ddd' }}>
            <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#537A5A', fontWeight: 600 }}>QR Bancario</p>
            <img src="/qr_donations.png" alt="QR" style={{ width: '100px', height: '100px' }} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SistemaDonaciones;