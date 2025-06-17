import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("");
  const [appointment, setAppointment] = useState(null);
  const [paymentDone, setPaymentDone] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const doctor = {
    name: "Dr. M. Badarinarayan Setty",
    specialization: "Paediatrician",
    experience: "30+ years",
    clinic: "Manasali Children Clinic, Hubbali",
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!time) return alert("Please select a time.");
    setAppointment({ doctor: doctor.name, time });
    setShowPayment(true);  // Show payment section now
  };

  const handlePayment = () => {
    // Here you would integrate payment gateway logic (Stripe, PayPal, etc)
    // For now, just simulate payment success:
    setPaymentDone(true);
    setShowPayment(false);
    setTime("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f7fa, #f1f8e9)",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "2rem auto",
          background: "white",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Doctor Details */}
        <div
          style={{
            padding: "1rem",
            border: "1px solid #4CAF50",
            borderRadius: "8px",
            backgroundColor: "#e8f5e9",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ margin: "0 0 0.5rem 0", color: "#2e7d32" }}>
            {doctor.name}
          </h2>
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
        {!showPayment && !paymentDone && (
          <form onSubmit={handleBooking}>
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="appointment-time"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#2e7d32",
                }}
              >
                📅 Select Appointment Time:
              </label>

              <input
                id="appointment-time"
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  fontSize: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                  backgroundColor: "#fefefe",
                  color: "#333",
                  cursor: "pointer",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={!time}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "0.8rem 1.2rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Book Appointment
            </button>
          </form>
        )}

        {/* Payment Section */}
        {showPayment && (
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #4CAF50",
              backgroundColor: "#fffde7",
              color: "#827717",
            }}
          >
            <h3>💳 Payment</h3>
            <p>Please complete your payment to confirm the appointment.</p>
            {/* Simple Pay Now button */}
            <button
              onClick={handlePayment}
              style={{
                backgroundColor: "#f9a825",
                color: "white",
                padding: "0.8rem 1.2rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Pay Now
            </button>
          </div>
        )}

        {/* Confirmation */}
        {paymentDone && (
          <div
            style={{
              marginTop: "1.5rem",
              background: "#e6ffe6",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #4CAF50",
              color: "#2e7d32",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <h4>✅ Appointment Confirmed & Paid!</h4>
            <p>
              <strong>Doctor:</strong> {appointment.doctor}
            </p>
            <p>
              <strong>Time:</strong>{" "}
              {new Date(appointment.time).toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
