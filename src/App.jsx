import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
      <a
        href="https://wa.me/4917612345678"
        target="_blank"
        style={styles.whatsapp}
      >
        💬
      </a>

      <nav style={styles.navbar}>
        <h1 style={styles.logo}>
          Taskline Munich UG
        </h1>

        <div style={styles.links}>
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
        <div style={styles.overlay}></div>

        <div style={styles.heroBox}>
          <div style={styles.truck}>🚚</div>

          <h1 style={styles.title}>
            Premium Umzugsservice
          </h1>

          <h2 style={styles.subtitle}>
            Taskline Munich UG
          </h2>

          <p style={styles.description}>
            Professionelle Umzüge in ganz Deutschland.
            Schnell • Sicher • Premium.
          </p>

          <div style={styles.buttons}>
            <a href="#contact" style={styles.primaryBtn}>
              Kostenloses Angebot
            </a>

            <a
              href="https://wa.me/4917612345678"
              style={styles.secondaryBtn}
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Unsere Leistungen
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>🏠</div>
            <h3>Wohnungsumzug</h3>
            <p>Professioneller privater Umzug.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🏢</div>
            <h3>Büroumzug</h3>
            <p>Schnelle Firmenumzüge.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🛡️</div>
            <h3>Versicherung</h3>
            <p>Ihr Umzug ist geschützt.</p>
          </div>
        </div>
      </section>

      <section style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>
          Warum wir?
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>⭐</div>
            <h3>Premium Qualität</h3>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>⏱️</div>
            <h3>Pünktlichkeit</h3>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🚚</div>
            <h3>Deutschlandweit</h3>
          </div>
        </div>
      </section>

      <section id="reviews" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Kundenbewertungen
        </h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>★★★★★</h3>
            <p>
              Sehr professionell und freundlich.
            </p>
          </div>

          <div style={styles.card}>
            <h3>★★★★★</h3>
            <p>
              Beste Umzugsfirma in München.
            </p>
          </div>

          <div style={styles.card}>
            <h3>★★★★★</h3>
            <p>
              Schnell und zuverlässig.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>
          Kontakt
        </h2>

        <div style={styles.contactBox}>
          <p>📍 München, Deutschland</p>
          <p>📞 +49 176 12345678</p>
          <p>✉️ info@taskline-munich.de</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    background: "#0b1120",
    color: "#f8fafc",
    minHeight: "100vh",
    fontFamily: "Inter, Arial",
    overflowX: "hidden",
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 6vw",
    background: "rgba(10,15,30,0.75)",
    backdropFilter: "blur(18px)",
    zIndex: 999,
    boxSizing: "border-box",
    flexWrap: "wrap",
  },

  logo: {
    color: "#c4a574",
    fontSize: "clamp(24px,2vw,36px)",
  },

  links: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "150px 5vw 100px",
    position: "relative",
    textAlign: "center",
    background:
      "linear-gradient(to bottom right,#0b1120,#111827)",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle,#c4a57422,transparent)",
  },

  heroBox: {
    position: "relative",
    zIndex: 2,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    padding: "clamp(35px,5vw,80px)",
    borderRadius: "40px",
    maxWidth: "1200px",
    width: "100%",
    backdropFilter: "blur(25px)",
  },

  truck: {
    fontSize: "80px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "clamp(40px,7vw,100px)",
    color: "#c4a574",
    lineHeight: 1,
  },

  subtitle: {
    fontSize: "clamp(24px,3vw,54px)",
    marginTop: "20px",
  },

  description: {
    color: "#cbd5e1",
    marginTop: "25px",
    fontSize: "18px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#c4a574",
    color: "#0b1120",
    padding: "18px 34px",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: "700",
  },

  secondaryBtn: {
    border: "1px solid rgba(255,255,255,0.25)",
    color: "white",
    padding: "18px 34px",
    borderRadius: "16px",
    textDecoration: "none",
  },

  section: {
    padding: "110px 5vw",
  },

  sectionDark: {
    padding: "110px 5vw",
    background: "#111827",
  },

  sectionTitle: {
    textAlign: "center",
    color: "#c4a574",
    fontSize: "clamp(32px,5vw,65px)",
    marginBottom: "60px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "40px",
    backdropFilter: "blur(18px)",
    transition: "0.4s",
  },

  icon: {
    fontSize: "55px",
    marginBottom: "20px",
  },

  contactBox: {
    textAlign: "center",
    lineHeight: 2,
    fontSize: "20px",
  },

  whatsapp: {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "#25D366",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "34px",
    zIndex: 9999,
  },
};