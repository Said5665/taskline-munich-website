import { useEffect, useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

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
              Möbel.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>
              🏢
            </div>

            <h3>Büroumzug</h3>

            <p>
              Moderner Firmenumzug ohne
              Stress.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>
              🛠
            </div>

            <h3>Möbelmontage</h3>

            <p>
              Aufbau und Abbau Ihrer Möbel.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>
              🧹
            </div>

            <h3>Entrümpelung</h3>

            <p>
              Schnell und sauber entrümpeln.
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
              pünktlich.
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
            style={styles.input}
            required
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
            style={styles.input}
            required
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
    background:
      "linear-gradient(to bottom,#020617,#0f172a)",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Arial",
    overflowX: "hidden",
    position: "relative",
  },

  backgroundGlow: {
    position: "fixed",
    width: "900px",
    height: "900px",
    background:
      "radial-gradient(circle,#f9731640,transparent)",
    top: "-300px",
    left: "-300px",
    filter: "blur(140px)",
    zIndex: 0,
    animation: "pulse 8s infinite",
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "25px 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(20px)",
    zIndex: 1000,
    boxSizing: "border-box",
    flexWrap: "wrap",
    gap: "20px",
  },

  logo: {
    color: "#f97316",
    fontSize: "32px",
    fontWeight: "900",
  },

  navLinks: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "140px 40px 80px",
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
  },

  heroContent: {
    transition: "1.5s",
    width: "100%",
    maxWidth: "1700px",
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
  },

  glassCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "90px 60px",
    borderRadius: "40px",
    backdropFilter: "blur(25px)",
    boxShadow:
      "0 0 80px rgba(249,115,22,0.25)",
    width: "100%",
    maxWidth: "1400px",
    minHeight: "500px",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  truck: {
    fontSize: "90px",
    marginBottom: "20px",
    animation:
      "float 3s infinite ease-in-out",
  },

  title: {
    fontSize: "clamp(55px,7vw,120px)",
    color: "#f97316",
    marginBottom: "20px",
    fontWeight: "900",
    lineHeight: "1",
    wordBreak: "break-word",
    textShadow:
      "0 0 40px rgba(249,115,22,0.8)",
  },

  subtitle: {
    fontSize: "clamp(28px,3vw,65px)",
    marginBottom: "25px",
    lineHeight: "1.2",
    maxWidth: "1000px",
  },

  description: {
    color: "#cbd5e1",
    fontSize: "24px",
    marginBottom: "50px",
  },

  buttonBox: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  orangeBtn: {
    background: "#f97316",
    padding: "20px 40px",
    borderRadius: "18px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    boxShadow:
      "0 0 30px rgba(249,115,22,0.5)",
  },

  whiteBtn: {
    border: "2px solid white",
    padding: "20px 40px",
    borderRadius: "18px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
  },

  services: {
    padding: "120px 20px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "60px",
    marginBottom: "70px",
    color: "#f97316",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "35px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  card: {
    background: "#111827",
    padding: "45px",
    borderRadius: "30px",
    textAlign: "center",
    transition: "0.4s",
  },

  icon: {
    fontSize: "70px",
    marginBottom: "25px",
    animation:
      "float 3s infinite ease-in-out",
  },

  reviewSection: {
    padding: "120px 20px",
    background: "#0f172a",
  },

  reviewCard: {
    background: "#111827",
    padding: "40px",
    borderRadius: "25px",
    textAlign: "center",
  },

  stars: {
    color: "#f97316",
    fontSize: "32px",
    marginBottom: "25px",
    animation:
      "pulseStars 2s infinite",
  },

  addressSection: {
    padding: "120px 20px",
    display: "flex",
    justifyContent: "center",
  },

  addressCard: {
    background: "#111827",
    padding: "60px",
    borderRadius: "30px",
    textAlign: "center",
    width: "100%",
    maxWidth: "700px",
  },

  addressIcon: {
    fontSize: "90px",
    marginBottom: "25px",
    animation:
      "float 2.5s infinite ease-in-out",
  },

  addressTitle: {
    fontSize: "48px",
    marginBottom: "25px",
    color: "#f97316",
  },

  contact: {
    padding: "120px 20px",
  },

  form: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },

  input: {
    padding: "20px",
    borderRadius: "15px",
    border: "none",
    fontSize: "20px",
  },

  textarea: {
    padding: "20px",
    borderRadius: "15px",
    border: "none",
    minHeight: "180px",
    fontSize: "20px",
  },

  submitBtn: {
    background: "#f97316",
    color: "white",
    border: "none",
    padding: "20px",
    borderRadius: "15px",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow:
      "0 0 30px rgba(249,115,22,0.4)",
  },
};

const style = document.createElement("style");

style.innerHTML = `
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
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

@keyframes pulseStars {
  0% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.7;
  }
}
`;

document.head.appendChild(style);