import { useEffect, useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const sendTelegram = async (e) => {
    e.preventDefault();

    const text = `
🚚 Neue Anfrage von Taskline Munich UG

👤 Name: ${form.name}
📞 Telefon: ${form.phone}
🛠 Service: ${form.service}
💬 Nachricht: ${form.message}
`;

    const token =
      "8971729060:AAE9F9uJ1Y4Vf0jSJtF0tN7DGJ_ZRj0lQ-4";

    const chatId = "5333830175";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    alert("Anfrage gesendet!");

    setForm({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div style={styles.page}>
      {/* BACKGROUND */}
      <div style={styles.backgroundGlow}></div>

      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>
          Taskline Munich UG
        </h2>

        <div style={styles.navLinks}>
          <a href="#services" style={styles.link}>
            Leistungen
          </a>

          <a href="#reviews" style={styles.link}>
            Bewertungen
          </a>

          <a href="#contact" style={styles.link}>
            Kontakt
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div
          style={{
            ...styles.heroContent,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(50px)",
          }}
        >
          <div style={styles.glassCard}>
            <div style={styles.truck}>
              🚚
            </div>

            <h1 style={styles.title}>
              Taskline Munich UG
            </h1>

            <h2 style={styles.subtitle}>
              Premium Umzugsservice in ganz
              Deutschland
            </h2>

            <p style={styles.description}>
              Schnell • Sicher • Modern •
              Stressfrei
            </p>

            <div style={styles.buttonBox}>
              <a
                href="#contact"
                style={styles.orangeBtn}
              >
                Kostenloses Angebot
              </a>

              <a
                href="tel:+4917612345678"
                style={styles.whiteBtn}
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={styles.services}
      >
        <h2 style={styles.sectionTitle}>
          Unsere Leistungen
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>
              🚛
            </div>

            <h3>Wohnungsumzug</h3>

            <p>
              Professioneller Transport Ihrer
              Möbel in ganz Deutschland.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>
              🏢
            </div>

            <h3>Büroumzug</h3>

            <p>
              Schnelle Firmenumzüge ohne
              Zeitverlust.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>
              🛠
            </div>

            <h3>Möbelmontage</h3>

            <p>
              Abbau und Aufbau Ihrer Möbel
              durch Experten.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>
              🧹
            </div>

            <h3>Entrümpelung</h3>

            <p>
              Schnelle Reinigung und
              Entrümpelung.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        style={styles.reviewSection}
      >
        <h2 style={styles.sectionTitle}>
          Kundenbewertungen
        </h2>

        <div style={styles.grid}>
          <div style={styles.reviewCard}>
            <div style={styles.stars}>
              ★★★★★
            </div>

            <p>
              Sehr professionell und
              pünktlich. Alles perfekt.
            </p>

            <h4>— Michael B.</h4>
          </div>

          <div style={styles.reviewCard}>
            <div style={styles.stars}>
              ★★★★★
            </div>

            <p>
              Beste Umzugsfirma in München.
            </p>

            <h4>— Sarah K.</h4>
          </div>

          <div style={styles.reviewCard}>
            <div style={styles.stars}>
              ★★★★★
            </div>

            <p>
              Modernes Team und fairer Preis.
            </p>

            <h4>— Daniel M.</h4>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section style={styles.addressSection}>
        <div style={styles.addressCard}>
          <div style={styles.addressIcon}>
            📍
          </div>

          <h2 style={styles.addressTitle}>
            Unsere Adresse
          </h2>

          <p>München, Deutschland</p>

          <p>Mo - Sa : 08:00 - 20:00</p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={styles.contact}
      >
        <h2 style={styles.sectionTitle}>
          Kontaktformular
        </h2>

        <form
          onSubmit={sendTelegram}
          style={styles.form}
        >
          <input
            type="text"
            placeholder="Name"
            required
            style={styles.input}
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Telefon"
            required
            style={styles.input}
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Service"
            style={styles.input}
            value={form.service}
            onChange={(e) =>
              setForm({
                ...form,
                service: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Nachricht"
            style={styles.textarea}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <button style={styles.submitBtn}>
            Anfrage senden
          </button>
        </form>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#020617",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial",
    overflowX: "hidden",
    position: "relative",
  },

  backgroundGlow: {
    position: "fixed",
    width: "700px",
    height: "700px",
    background:
      "radial-gradient(circle,#f9731630,transparent)",
    top: "-200px",
    left: "-200px",
    filter: "blur(100px)",
    zIndex: 0,
    animation: "pulse 6s infinite",
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "20px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(15px)",
    zIndex: 1000,
    boxSizing: "border-box",
  },

  logo: {
    color: "#f97316",
    fontSize: "28px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "120px 20px",
    textAlign: "center",
  },

  heroContent: {
    transition: "1.5s",
    position: "relative",
    zIndex: 2,
  },

  glassCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "60px 40px",
    borderRadius: "35px",
    backdropFilter: "blur(20px)",
    boxShadow:
      "0 0 60px rgba(249,115,22,0.2)",
    maxWidth: "950px",
  },

  truck: {
    fontSize: "80px",
    animation: "float 3s infinite ease-in-out",
    marginBottom: "20px",
  },

  title: {
    fontSize: "clamp(50px,8vw,95px)",
    color: "#f97316",
    marginBottom: "20px",
    fontWeight: "900",
  },

  subtitle: {
    fontSize: "clamp(28px,4vw,55px)",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  description: {
    color: "#cbd5e1",
    fontSize: "20px",
    marginBottom: "40px",
  },

  buttonBox: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  orangeBtn: {
    background: "#f97316",
    padding: "18px 35px",
    borderRadius: "15px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow:
      "0 0 25px rgba(249,115,22,0.5)",
  },

  whiteBtn: {
    border: "2px solid white",
    padding: "18px 35px",
    borderRadius: "15px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  services: {
    padding: "100px 20px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "50px",
    marginBottom: "60px",
    color: "#f97316",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  card: {
    background: "#111827",
    padding: "40px",
    borderRadius: "25px",
    textAlign: "center",
    transition: "0.4s",
    cursor: "pointer",
  },

  icon: {
    fontSize: "55px",
    marginBottom: "20px",
  },

  reviewSection: {
    padding: "100px 20px",
    background: "#0f172a",
  },

  reviewCard: {
    background: "#111827",
    padding: "35px",
    borderRadius: "20px",
    textAlign: "center",
  },

  stars: {
    color: "#f97316",
    fontSize: "28px",
    marginBottom: "20px",
  },

  addressSection: {
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
  },

  addressCard: {
    background: "#111827",
    padding: "50px",
    borderRadius: "25px",
    textAlign: "center",
    width: "100%",
    maxWidth: "600px",
  },

  addressIcon: {
    fontSize: "70px",
    marginBottom: "20px",
  },

  addressTitle: {
    fontSize: "42px",
    marginBottom: "25px",
    color: "#f97316",
  },

  contact: {
    padding: "100px 20px",
  },

  form: {
    maxWidth: "700px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  input: {
    padding: "18px",
    borderRadius: "12px",
    border: "none",
    fontSize: "18px",
  },

  textarea: {
    padding: "18px",
    borderRadius: "12px",
    border: "none",
    minHeight: "150px",
    fontSize: "18px",
  },

  submitBtn: {
    background: "#f97316",
    color: "white",
    border: "none",
    padding: "18px",
    borderRadius: "12px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow:
      "0 0 25px rgba(249,115,22,0.4)",
  },
};

const style = document.createElement("style");

style.innerHTML = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
`;

document.head.appendChild(style);