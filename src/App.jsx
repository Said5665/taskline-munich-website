# Full Premium App.jsx

Полностью замени содержимое `src/App.jsx` этим кодом:

```jsx
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

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = `
🚚 Neue Anfrage von Taskline Munich UG

👤 Name: ${form.name}
📞 Telefon: ${form.phone}
🛠 Service: ${form.service}
💬 Nachricht: ${form.message}
`;

    const phone = "4917612345678";

    const url =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

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

      <a
        href="https://wa.me/4917612345678"
        target="_blank"
        style={styles.floatingWhatsapp}
      >
        💬
      </a>

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

      <section style={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.videoBg}
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
        </video>

        <div style={styles.darkOverlay}></div>

        <div
          style={{
            ...styles.heroContent,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0px)"
              : "translateY(60px)",
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
              Premium Umzugsservice in Deutschland
            </h2>

            <p style={styles.description}>
              Schnell • Sicher • Stressfrei • 24/7
            </p>

            <div style={styles.buttonBox}>
              <a
                href="#contact"
                style={styles.orangeBtn}
              >
                Kostenloses Angebot
              </a>

              <a
                href="https://wa.me/4917612345678"
                style={styles.whiteBtn}
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>500+</h2>
            <p>Zufriedene Kunden</p>
          </div>

          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>24/7</h2>
            <p>Support</p>
          </div>

          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>100%</h2>
            <p>Sicherer Transport</p>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={styles.services}
      >
        <h2 style={styles.sectionTitle}>
          Unsere Leistungen
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>🚛</div>
            <h3>Wohnungsumzug</h3>
            <p>
              Professioneller Transport Ihrer
              Möbel.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🏢</div>
            <h3>Büroumzug</h3>
            <p>
              Moderner Firmenumzug ohne Stress.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🛠</div>
            <h3>Möbelmontage</h3>
            <p>
              Aufbau und Abbau Ihrer Möbel.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🧹</div>
            <h3>Entrümpelung</h3>
            <p>
              Schnell und sauber entrümpeln.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.whySection}>
        <h2 style={styles.sectionTitle}>
          Warum Taskline Munich?
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>🛡️</div>
            <h3>Versichert</h3>
            <p>
              Ihr Umzug ist vollständig
              versichert.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>⏱️</div>
            <h3>Pünktlich</h3>
            <p>
              Immer rechtzeitig und zuverlässig.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>💶</div>
            <h3>Festpreis</h3>
            <p>
              Keine versteckten Kosten.
            </p>
          </div>
        </div>
      </section>

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
              Sehr professionell und pünktlich.
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

      <section
        id="contact"
        style={styles.contact}
      >
        <h2 style={styles.sectionTitle}>
          Kontaktformular
        </h2>

        <form
          onSubmit={sendWhatsApp}
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
    width: "50vw",
    height: "50vw",
    background:
      "radial-gradient(circle,#f9731640,transparent)",
    top: "-15vw",
    left: "-15vw",
    filter: "blur(120px)",
    zIndex: 0,
    animation: "pulse 8s infinite",
  },

  floatingWhatsapp: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#25D366",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "35px",
    zIndex: 9999,
    boxShadow:
      "0 0 30px rgba(37,211,102,0.5)",
    animation: "pulseWhatsapp 2s infinite",
  },
};

const style = document.createElement("style");

style.innerHTML = `
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  overflow-x:hidden;
}

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

@keyframes pulseWhatsapp {
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