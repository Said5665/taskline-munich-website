export default function LuxuryUmzugLanding() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black tracking-wide text-[#c4a574]">
            Taskline Munich UG
          </h1>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#services" className="hover:text-[#c4a574] transition-all">Leistungen</a>
            <a href="#about" className="hover:text-[#c4a574] transition-all">Warum wir</a>
            <a href="#reviews" className="hover:text-[#c4a574] transition-all">Bewertungen</a>
            <a href="#contact" className="hover:text-[#c4a574] transition-all">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#c4a57422,transparent_40%)]" />

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-6xl w-full bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 md:p-16 shadow-2xl">
          <div className="text-center">
            <div className="text-6xl md:text-8xl mb-6 animate-bounce">
              🚚
            </div>

            <p className="uppercase tracking-[6px] text-[#c4a574] text-sm mb-5">
              Premium Umzugsservice Deutschland
            </p>

            <h1 className="text-5xl md:text-8xl font-black leading-none mb-8">
              Elite Moving
              <br />
              Experience
            </h1>

            <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
              Professionelle Premium-Umzüge für Wohnungen,
              Büros und Unternehmen in ganz Deutschland.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="#contact"
                className="bg-[#c4a574] text-[#0b1120] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(196,165,116,0.4)]"
              >
                Kostenloses Angebot
              </a>

              <a
                href="https://wa.me/4917612345678"
                className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all"
              >
                WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-5xl font-black text-[#c4a574] mb-2">500+</h3>
                <p className="text-slate-300">Zufriedene Kunden</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-5xl font-black text-[#c4a574] mb-2">24/7</h3>
                <p className="text-slate-300">Premium Support</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-5xl font-black text-[#c4a574] mb-2">100%</h3>
                <p className="text-slate-300">Versichert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[5px] text-[#c4a574] mb-4">Services</p>
            <h2 className="text-5xl md:text-7xl font-black">
              Unsere Leistungen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              ["🏠", "Wohnungsumzug"],
              ["🏢", "Büroumzug"],
              ["🛠", "Möbelmontage"],
              ["🧹", "Entrümpelung"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="group bg-white/5 border border-white/10 rounded-[32px] p-10 hover:-translate-y-3 hover:border-[#c4a574]/40 hover:shadow-[0_0_60px_rgba(196,165,116,0.15)] transition-all duration-500"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-all">
                  {icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Premium Qualität und professioneller Service für Ihren Umzug.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="about" className="py-28 px-6 bg-white/[0.03] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-[#c4a574] mb-5">Warum wir</p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Deutsche Premium Standards
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Taskline Munich UG bietet moderne Premium-Umzüge mit höchster Qualität,
              Versicherungsschutz und professionellem Kundenservice.
            </p>

            <div className="space-y-5">
              {[
                "DSGVO Konform",
                "Vollständig versichert",
                "Festpreis Garantie",
                "Deutschlandweit verfügbar",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="w-12 h-12 rounded-xl bg-[#c4a574] text-[#0b1120] flex items-center justify-center font-black">
                    ✓
                  </div>

                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-[#c4a574]/10 blur-3xl rounded-full" />

            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop"
              className="relative rounded-[40px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[5px] text-[#c4a574] mb-4">Reviews</p>
            <h2 className="text-5xl md:text-7xl font-black">
              Kundenbewertungen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">
                <div className="text-[#c4a574] text-3xl mb-5">★★★★★</div>

                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                  Sehr professioneller Service. Schnell,
                  modern und zuverlässig.
                </p>

                <div>
                  <h4 className="font-bold text-xl">Michael Bauer</h4>
                  <p className="text-slate-400">München</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-white/[0.03] border-t border-white/5">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-2xl">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-[#c4a574] mb-4">Kontakt</p>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Kostenloses Angebot
            </h2>

            <p className="text-slate-300 text-lg">
              Schreiben Sie uns direkt per WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input placeholder="Name" className="bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#c4a574]" />
            <input placeholder="Telefon" className="bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#c4a574]" />
            <input placeholder="E-Mail" className="bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#c4a574] md:col-span-2" />
            <textarea placeholder="Nachricht" rows={5} className="bg-[#111827] border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#c4a574] md:col-span-2" />
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="https://wa.me/4917612345678"
              className="bg-[#c4a574] text-[#0b1120] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(196,165,116,0.35)]"
            >
              Anfrage senden
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6 text-center text-slate-400">
        <p>© 2026 Taskline Munich UG — Premium Umzugsservice Deutschland</p>
      </footer>
    </div>
  );
}
