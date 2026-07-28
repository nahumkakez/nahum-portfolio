import { useEffect, useState } from 'react';
import axios from 'axios';
import profilePic from './assets/profile.jpg';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('📡 Chargement des données...');
        const response = await axios.get('http://localhost:5000/api/all');
        console.log('✅ Données reçues:', response.data);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('❌ Erreur:', err);
        setError('Impossible de charger les données. Vérifie que le backend est lancé sur le port 5000.');
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white">
          <div className="text-6xl mb-4 animate-bounce">⏳</div>
          <p className="text-xl font-light">Chargement de mon portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Erreur</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  const { profil, formations, certifications, competences, experiences, langues, qualites, references } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* ===== HEADER PROFESSIONNEL ===== */}
      <header className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap">
          <div>
            <h1 className="text-xl font-bold tracking-wider">{profil.nom}</h1>
            <p className="text-sm text-gray-200 font-light">{profil.titre}</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm">
            <a href="#profil" className="hover:text-gold transition px-3 py-1 rounded hover:bg-white/10">Profil</a>
            <a href="#formations" className="hover:text-gold transition px-3 py-1 rounded hover:bg-white/10">Formations</a>
            <a href="#certifications" className="hover:text-gold transition px-3 py-1 rounded hover:bg-white/10">Certifications</a>
            <a href="#competences" className="hover:text-gold transition px-3 py-1 rounded hover:bg-white/10">Compétences</a>
            <a href="#experiences" className="hover:text-gold transition px-3 py-1 rounded hover:bg-white/10">Expériences</a>
            <a href="#contact" className="hover:text-gold transition px-3 py-1 rounded hover:bg-white/10">Contact</a>
          </nav>
        </div>
      </header>

      {/* ===== PROFIL AVEC PHOTO ===== */}
      <section id="profil" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative group">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                <img 
                  src={profilePic} 
                  alt={profil.nom}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center text-7xl bg-gradient-to-br from-primary to-secondary text-white">
                        NK
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gold text-white text-xs px-4 py-1.5 rounded-full shadow-lg font-semibold tracking-wider">
                🟢 Disponible
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-primary">{profil.nom}</h2>
              <p className="text-xl text-secondary font-semibold mt-1">{profil.titre}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">🎓 {profil.universite}</span>
                <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium">✅ Diplômé</span>
                <span className="bg-gold/10 text-gold px-4 py-1.5 rounded-full text-sm font-medium">⭐ Disponible</span>
              </div>
              <p className="text-gray-600 mt-4 text-justify leading-relaxed">{profil.bio}</p>
              <div className="flex flex-wrap gap-3 mt-4 text-sm">
                <span className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">📧 {profil.email}</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">📱 {profil.telephone}</span>
                <span className="bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700">📍 {profil.adresse}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMATIONS ===== */}
      <section id="formations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="section-title mb-0">🎓 Formations</h2>
            <span className="bg-gold text-white text-xs px-3 py-1 rounded-full">Diplômé</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((f, index) => (
              <div key={index} className="card border-l-4 border-secondary">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-primary">{f.niveau}</h3>
                  {f.statut && <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">{f.statut}</span>}
                </div>
                <p className="text-secondary font-semibold">{f.domaine}</p>
                <p className="text-gray-600">{f.etablissement}</p>
                <p className="text-sm text-gray-400">{f.annee}</p>
                {f.moyenne && <p className="text-sm font-bold text-secondary mt-2">📊 Moyenne: {f.moyenne}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">📜 Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((c, index) => (
              <div key={index} className="card text-center border-t-4 border-gold">
                <div className="text-5xl mb-3">🏅</div>
                <h3 className="text-lg font-bold text-primary">{c.nom}</h3>
                <p className="text-gray-600 text-sm">{c.organisme}</p>
                <p className="text-sm text-gray-400">{c.date}</p>
                <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">{c.statut}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPÉTENCES ===== */}
      <section id="competences" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">🛠️ Compétences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(competences).map(([categorie, items]) => (
              <div key={categorie} className="card border-b-4 border-primary">
                <h3 className="text-lg font-bold text-primary mb-3 border-b-2 border-secondary pb-2">{categorie}</h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 hover:text-primary transition">
                      <span className="text-gold text-lg">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPÉRIENCES ===== */}
      <section id="experiences" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">💼 Expériences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="card border-l-4 border-gold">
                <h3 className="text-xl font-bold text-primary">{exp.poste}</h3>
                <p className="text-secondary font-semibold">{exp.periode}</p>
                <ul className="mt-3 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 hover:text-gray-800 transition">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-sm">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LANGUES & QUALITÉS ===== */}
      <section id="langues" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title">🌍 Langues</h2>
              <div className="space-y-3">
                {langues.map((l, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-gold transition border-l-4 border-secondary">
                    <span className="font-semibold text-primary">{l.langue}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{l.niveau}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title">⭐ Qualités</h2>
              <div className="flex flex-wrap gap-3">
                {qualites.map((q, index) => (
                  <span key={index} className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-primary transition hover:scale-105">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RÉFÉRENCES & CONTACT ===== */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">📞 Références & Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">👤 Personnes de référence</h3>
              {references.map((ref, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-100 py-3 hover:bg-gray-50 px-3 rounded transition">
                  <span className="font-semibold text-gray-700">{ref.nom}</span>
                  <span className="text-gray-500 text-sm">{ref.telephone}</span>
                </div>
              ))}
            </div>
            <div className="card bg-gradient-to-br from-gray-50 to-white border-t-4 border-gold">
              <h3 className="text-xl font-bold text-primary mb-4">📬 Me contacter</h3>
              <div className="space-y-4">
                <a href={`mailto:${profil.email}`} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-gold transition group">
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-secondary group-hover:text-gold transition">{profil.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-gold transition">
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="text-xs text-gray-400">Téléphone principal</p>
                    <p className="text-gray-700 font-medium">{profil.telephone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-gold transition">
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="text-xs text-gray-400">Téléphone secondaire</p>
                    <p className="text-gray-700 font-medium">{profil.telephone2}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-gold transition">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-xs text-gray-400">Adresse</p>
                    <p className="text-gray-700">{profil.adresse}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold tracking-wide">© {new Date().getFullYear()} {profil.nom}</p>
          <p className="text-sm text-gray-200 mt-1 font-light">Portfolio Professionnel - Développé avec ❤️</p>
          <div className="flex justify-center gap-4 mt-3 text-xs text-gray-300">
            <span>🔒 Tous droits réservés</span>
            <span>|</span>
            <span>✨ Disponible pour opportunités</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;