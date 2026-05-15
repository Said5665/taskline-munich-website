export default function App() {
  return (
    <div style={styles.page}>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          background:#020617;
          overflow-x:hidden;
          font-family:Arial;
        }

        .card{
          transition:0.3s;
        }

        .card:hover{
          transform:translateY(-10px);
        }

        .btn{
          transition:0.3s;
        }

        .btn:hover{
          transform:scale(1.05);
        }

        @media (max-width:768px){

          .nav-links{
            display:none !important;
          }

          .hero-buttons{
            flex-direction:column;
            width:100%;
          }

          .hero-buttons button{
            width:100%;
          }

          .services-grid{
            grid-template-columns:1fr !important;
          }

          .about-grid{
            grid-template-columns:1fr !important;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h1 style={styles.logo}>
          Taskline Munich UG
        </h1>

        <div className="nav-links" style={styles.navLinks}>
          <a href="#services" style={styles.link}>
            Leistungen
          </a>

          <a href="#about" style={styles.link}>
            Über uns
          </a>

          <a href="#contact" style={styles.link}>
            Kontakt
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Taskline Munich UG
          </h1>

          <h2 style={styles.heroSubtitle}>
            Professioneller Umzugsservice in ganz Deutschland
          </h2>

          <p style={styles.heroText}>
            Schnell • Sicher • Stressfrei • Modern
          </p>

          <div
            className="hero-buttons"
            style={styles.buttonGroup}
          >
            <button
              className="btn"
              style={styles.primaryBtn}
            >
              Kostenloses Angebot
            </button>

            <a href="tel:+4917600000000">
              <button
                className="btn"
                style={styles.secondaryBtn}
              >
                Jetzt anrufen
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={styles.servicesSection}
      >
        <h2 style={styles.sectionTitle}>
          Unsere Leistungen
        </h2>

        <div
          className="services-grid"
          style={styles.cards}
        >
          {services.map((service, index) => (
            <div
              className="card"
              key={index}
              style={styles.card}
            >
              <div style={styles.icon}>
                {service.icon}
              </div>

              <h3 style={styles.cardTitle}>
                {service.title}
              </h3>

              <p style={styles.cardText}>
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={styles.aboutSection}
      >
        <h2 style={styles.sectionTitleDark}>
          Wie arbeiten wir?
        </h2>

        <div
          className="about-grid"
          style={styles.aboutGrid}
        >
          <div style={styles.aboutCard}>
            <div style={styles.step}>1</div>

            <h3 style={styles.aboutTitle}>
              Anfrage senden
            </h3>

            <p style={styles.aboutText}>
              Der Kunde sendet eine Anfrage online
              oder telefonisch.
            </p>
          </div>

          <div style={styles.aboutCard}>
            <div style={styles.step}>2</div>

            <h3 style={styles.aboutTitle}>
              Planung
            </h3>

            <p style={styles.aboutText}>
              Wir planen den gesamten Umzug
              professionell.
            </p>
          </div>

          <div style={styles.aboutCard}>
            <div style={styles.step}>3</div>

            <h3 style={styles.aboutTitle}>
              Transport
            </h3>

            <p style={styles.aboutText}>
              Sicherer und schneller Transport Ihrer
              Möbel.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={styles.contactSection}
      >
        <div style={styles.contactBox}>
          <h2 style={styles.contactTitle}>
            Kontaktieren Sie uns
          </h2>

          <input
            placeholder="Ihr Name"
            style={styles.input}
          />

          <input
            placeholder="Telefonnummer"
            style={styles.input}
          />

          <input
            placeholder="E-Mail"
            style={styles.input}
          />

          <textarea
            placeholder="Beschreiben Sie Ihren Umzug"
            style={styles.textarea}
          />

          <button
            className="btn"
            style={styles.contactBtn}
            onClick={async () => {

              const TOKEN =
                '8971729060:AAE9F9uJ1Y4Vf0jSJtF0tN7DGJ_ZRj0lQ-4'

              const CHAT_ID =
                '5333830175'

              const inputs =
                document.querySelectorAll('input')

              const name =
                inputs[0].value

              const phone =
                inputs[1].value

              const email =
                inputs[2].value

              const description =
                document.querySelector('textarea').value

              const message = `
🚚 Neue Anfrage von Website

👤 Name: ${name}

📞 Telefon: ${phone}

📧 Email: ${email}

📦 Umzug:
${description}
`

              await fetch(
                `https://api.telegram.org/bot${TOKEN}/sendMessage`,
                {
                  method: 'POST',

                  headers: {
                    'Content-Type':
                      'application/json',
                  },

                  body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                  }),
                }
              )

              alert(
                'Anfrage erfolgreich gesendet!'
              )
            }}
          >
            Anfrage senden
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h2 style={styles.footerLogo}>
          Taskline Munich UG
        </h2>

        <p>📍 München, Deutschland</p>

        <a
          href="tel:+4917600000000"
          style={styles.footerLink}
        >
          📞 +49 176 00000000
        </a>

        <a
          href="mailto:info@taskline.de"
          style={styles.footerLink}
        >
          📧 info@taskline.de
        </a>

        <a
          href="https://wa.me/4917600000000"
          target="_blank"
          style={styles.whatsappBtn}
        >
          WhatsApp Kontakt
        </a>

        <p style={styles.copy}>
          © 2026 Taskline Munich UG
        </p>
      </footer>
    </div>
  )
}

const services = [
  {
    icon: '🚚',
    title: 'Wohnungsumzug',
    text:
      'Schneller und sicherer Transport Ihrer Möbel.',
  },

  {
    icon: '🏢',
    title: 'Büroumzug',
    text:
      'Professionelle Firmenumzüge ohne Stress.',
  },

  {
    icon: '🪑',
    title: 'Möbelmontage',
    text:
      'Abbau und Aufbau Ihrer Möbel.',
  },

  {
    icon: '📦',
    title: 'Entrümpelung',
    text:
      'Schnelle Entrümpelung von Wohnungen.',
  },
]

const styles = {
  page: {
    background: '#020617',
    color: 'white',
  },

  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
  },

  logo: {
    color: '#f97316',
    fontSize: 'clamp(24px,4vw,36px)',
    fontWeight: 'bold',
  },

  navLinks: {
    display: 'flex',
    gap: '25px',
  },

  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },

  hero: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '140px 20px 100px',
    position: 'relative',
    overflow: 'hidden',
    background:
      'linear-gradient(135deg,#020617,#0f172a,#1e293b)',
  },

  overlay: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    background: '#f97316',
    borderRadius: '50%',
    filter: 'blur(180px)',
    opacity: 0.2,
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px',
  },

  heroTitle: {
    fontSize: 'clamp(50px,8vw,90px)',
    color: '#f97316',
    marginBottom: '20px',
    fontWeight: 'bold',
  },

  heroSubtitle: {
    fontSize: 'clamp(24px,5vw,42px)',
    marginBottom: '20px',
    lineHeight: 1.3,
  },

  heroText: {
    fontSize: '20px',
    color: '#cbd5e1',
    marginBottom: '40px',
  },

  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },

  primaryBtn: {
    background: '#f97316',
    border: 'none',
    color: 'white',
    padding: '18px 35px',
    borderRadius: '14px',
    fontSize: '18px',
    cursor: 'pointer',
  },

  secondaryBtn: {
    background: 'transparent',
    border: '2px solid white',
    color: 'white',
    padding: '18px 35px',
    borderRadius: '14px',
    fontSize: '18px',
    cursor: 'pointer',
  },

  servicesSection: {
    background: 'white',
    color: 'black',
    padding: '100px 20px',
  },

  sectionTitle: {
    textAlign: 'center',
    fontSize: 'clamp(36px,6vw,56px)',
    color: '#3b82f6',
    marginBottom: '60px',
  },

  cards: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(250px,1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  card: {
    background: '#f8fafc',
    padding: '40px 25px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },

  icon: {
    fontSize: '50px',
    marginBottom: '20px',
  },

  cardTitle: {
    fontSize: '30px',
    color: '#f97316',
    marginBottom: '15px',
  },

  cardText: {
    color: '#334155',
    lineHeight: 1.7,
    fontSize: '17px',
  },

  aboutSection: {
    padding: '100px 20px',
  },

  sectionTitleDark: {
    textAlign: 'center',
    fontSize: 'clamp(36px,6vw,56px)',
    marginBottom: '60px',
  },

  aboutGrid: {
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(250px,1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  aboutCard: {
    background: '#111827',
    padding: '40px 25px',
    borderRadius: '20px',
    textAlign: 'center',
  },

  step: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: '#f97316',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },

  aboutTitle: {
    fontSize: '28px',
    marginBottom: '15px',
    color: '#f97316',
  },

  aboutText: {
    color: '#cbd5e1',
    lineHeight: 1.7,
  },

  contactSection: {
    padding: '100px 20px',
    display: 'flex',
    justifyContent: 'center',
  },

  contactBox: {
    width: '100%',
    maxWidth: '700px',
    background: '#111827',
    padding: '45px',
    borderRadius: '25px',
  },

  contactTitle: {
    textAlign: 'center',
    fontSize: 'clamp(32px,5vw,48px)',
    marginBottom: '30px',
  },

  input: {
    width: '100%',
    padding: '18px',
    marginBottom: '18px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
  },

  textarea: {
    width: '100%',
    height: '140px',
    padding: '18px',
    borderRadius: '12px',
    border: 'none',
    resize: 'none',
    marginBottom: '20px',
    fontSize: '16px',
  },

  contactBtn: {
    width: '100%',
    background: '#f97316',
    border: 'none',
    color: 'white',
    padding: '18px',
    borderRadius: '14px',
    fontSize: '18px',
    cursor: 'pointer',
  },

  footer: {
    background: '#000',
    textAlign: 'center',
    padding: '60px 20px',
  },

  footerLogo: {
    color: '#f97316',
    fontSize: '40px',
    marginBottom: '20px',
  },

  footerLink: {
    display: 'block',
    color: '#cbd5e1',
    textDecoration: 'none',
    marginTop: '10px',
  },

  whatsappBtn: {
    display: 'inline-block',
    marginTop: '25px',
    background: '#22c55e',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '12px',
    textDecoration: 'none',
  },

  copy: {
    marginTop: '30px',
    color: '#64748b',
  },
}