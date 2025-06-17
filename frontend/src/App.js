import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [appointment, setAppointment] = useState(null);

  const doctor = {
    name: 'Dr. M. Badarinarayan Setty',
    specialization: 'Paediatrician',
    experience: '30+ years',
    clinic: 'Manasali Children Clinic, Hubbali',
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!date || !time) {
      alert('Please select both date and time.');
      return;
    }

    const appointmentDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    if (appointmentDateTime < now) {
      alert('Cannot book appointment in the past.');
      return;
    }

    setAppointment({ doctor: doctor.name, time: appointmentDateTime.toISOString() });
    setShowPayment(true);
    setPaymentDone(false);
  };

  const handlePayment = () => {
    // Simulate payment success here
    setPaymentDone(true);
  };

  const today = new Date().toISOString().split('T')[0];
  const formattedAppointmentTime = appointment
    ? new Date(appointment.time).toLocaleString()
    : '';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          margin: '2rem auto',
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {/* Doctor Details */}
        <div
          style={{
            padding: '1rem',
            border: '1px solid #4CAF50',
            borderRadius: '8px',
            backgroundColor: '#e8f5e9',
            marginBottom: '1.5rem',
          }}
        >
          <h2 style={{ margin: '0 0 0.5rem 0', color: '#2e7d32' }}>{doctor.name}</h2>
          <p>
            <strong>Specialization:</strong> {doctor.specialization}
          </p>
          <p>
            <strong>Experience:</strong> {doctor.experience}
          </p>
          <p>
            <strong>Clinic:</strong> {doctor.clinic}
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleBooking}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="appointment-date"
              style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#2e7d32',
              }}
            >
              📅 Select Appointment Date:
            </label>
            <input
              id="appointment-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={today}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box',
                backgroundColor: '#fefefe',
                color: '#333',
                cursor: 'pointer',
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="appointment-time"
              style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: '#2e7d32',
              }}
            >
              🕒 Select Appointment Time:
            </label>
            <input
              id="appointment-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.7rem',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box',
                backgroundColor: '#fefefe',
                color: '#333',
                cursor: 'pointer',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '0.8rem 1.2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Book Appointment
          </button>
        </form>

        {/* Payment Section shown BELOW the booking form if booking clicked */}
        {showPayment && !paymentDone && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #fb8c00',
              backgroundColor: '#fff3e0',
              color: '#ef6c00',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <h3>💳 Payment</h3>
            <p>Please complete your payment to confirm the appointment.</p>
            <button
              onClick={handlePayment}
              style={{
                backgroundColor: '#fb8c00',
                color: 'white',
                padding: '0.8rem 1.2rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Pay Now
            </button>
          </div>
        )}

        {/* Confirmation shown BELOW payment section */}
        {paymentDone && (
          <div
            style={{
              marginTop: '1.5rem',
              background: '#e6ffe6',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #4CAF50',
              color: '#2e7d32',
              fontWeight: 'bold',
            }}
          >
            <h4>✅ Appointment Confirmed & Paid!</h4>
            <p>
              <strong>Doctor:</strong> {appointment.doctor}
            </p>
            <p>
              <strong>Time:</strong> {formattedAppointmentTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
