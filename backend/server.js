const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Données du portfolio
const portfolioData = {
  profil: {
    nom: "KAKEZ MUSANS NAHUM",
    titre: "Ingénieur en Systèmes Informatiques | Cisco Certified (CCNA 1 & 2)",
    email: "nahumkakez388@gmail.com",
    telephone: "+243 999 536 725",
    telephone2: "+243 907 035 653",
    adresse: "Gambela 3, Lubumbashi, RDC",
    naissance: "13/08/2004",
    universite: "Université Protestante de Lubumbashi (UPL)",
    bio: "Ingénieur en Systèmes Informatiques certifié Cisco (CCNA 1 & 2) et titulaire d'une Licence en Sciences Informatiques (67%). Compétent en administration réseau, support technique, gestion des systèmes Windows/Linux et maîtrise avancée de la suite Microsoft Office. Motivé, rigoureux et autonome, je mets mes compétences techniques au service de la performance et de la sécurité de votre parc informatique."
  },
  formations: [
    {
      niveau: "Licence (BAC+4)",
      domaine: "Sciences Informatiques - Systèmes Informatiques",
      etablissement: "Université Protestante de Lubumbashi (UPL)",
      annee: "2025-2026",
      moyenne: "67%",
      statut: "Diplômé ✅"
    },
    {
      niveau: "Troisième Bachelier (BAC+3)",
      domaine: "Sciences Informatiques - Systèmes Informatiques",
      etablissement: "Université Protestante de Lubumbashi (UPL)",
      annee: "2024-2025",
      moyenne: "13/20",
      decision: "ADM",
      credits: "60/60"
    },
    {
      niveau: "Deuxième Bachelier (BAC+2)",
      domaine: "Sciences Informatiques - Systèmes Informatiques",
      etablissement: "Université Protestante de Lubumbashi (UPL)",
      annee: "2023-2024",
      moyenne: "12/20",
      pourcentage: "63%"
    },
    {
      niveau: "Premier Bachelier (BAC+1)",
      domaine: "Sciences Informatiques - Systèmes Informatiques",
      etablissement: "Université Protestante de Lubumbashi (UPL)",
      annee: "2022-2023",
      moyenne: "12/20",
      pourcentage: "61.11%"
    }
  ],
  certifications: [
    {
      nom: "CCNA 1 - Introduction aux Réseaux",
      organisme: "Cisco Networking Academy",
      date: "Janvier 2026",
      statut: "Certifié ✅"
    },
    {
      nom: "CCNA 2 - Routing & Switching",
      organisme: "Cisco Networking Academy",
      date: "2026",
      statut: "Certifié ✅"
    },
    {
      nom: "Licence BAC+4 en Sciences Informatiques",
      organisme: "Université Protestante de Lubumbashi (UPL)",
      date: "2026",
      statut: "Obtenue ✅",
      moyenne: "67%"
    }
  ],
  competences: {
    "Réseaux": ["Cisco CCNA 1 & 2", "LAN/VLAN", "Adressage IP", "Configuration routeurs/switches"],
    "Systèmes": ["Windows", "Linux", "VMware", "VirtualBox"],
    "Développement": ["PHP", "HTML5", "CSS3", "JavaScript", "React.js"],
    "Bureautique": ["Word", "Excel", "PowerPoint", "Access", "Outlook"],
    "Support IT": ["Backup", "Maintenance", "Dépannage N1/N2"]
  },
  experiences: [
    {
      poste: "Administrateur Réseau & Support IT",
      periode: "2024 - Présent",
      description: [
        "Installation, configuration et maintenance des équipements réseau (Routeurs, Switches Cisco, VLANs)",
        "Support aux utilisateurs et maîtrise de la suite bureautique Microsoft Office",
        "Sauvegarde, restauration de données et administration d'environnements virtualisés (VMware, VirtualBox)"
      ]
    },
    {
      poste: "Développeur Web Freelance",
      periode: "2024 - Présent",
      description: [
        "Conception d'applications web dynamiques avec PHP, JavaScript, HTML5 et CSS3",
        "Gestion des bases de données et intégration d'interfaces utilisateur modernes"
      ]
    }
  ],
  langues: [
    { langue: "Français", niveau: "Courant / Maternelle" },
    { langue: "Swahili", niveau: "Courant / Maternelle" },
    { langue: "Anglais", niveau: "Intermédiaire" }
  ],
  qualites: [
    "Esprit d'équipe & Leadership",
    "Rigueur & Organisation",
    "Autonomie & Apprentissage rapide",
    "Esprit d'analyse"
  ],
  references: [
    { nom: "Nico LUNDA", telephone: "+243 995 363 633" },
    { nom: "Sarein SIKULUTU", telephone: "+243 995 363 633" },
    { nom: "Sam KAJ", telephone: "+243 995 750 362" }
  ]
};

// Routes
app.get('/api/all', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Nahum Portfolio en ligne ✅' });
});

app.get('/api/profil', (req, res) => {
  res.json(portfolioData.profil);
});

app.get('/api/formations', (req, res) => {
  res.json(portfolioData.formations);
});

app.get('/api/certifications', (req, res) => {
  res.json(portfolioData.certifications);
});

app.get('/api/competences', (req, res) => {
  res.json(portfolioData.competences);
});

app.get('/api/experiences', (req, res) => {
  res.json(portfolioData.experiences);
});

app.get('/api/langues', (req, res) => {
  res.json(portfolioData.langues);
});

app.get('/api/qualites', (req, res) => {
  res.json(portfolioData.qualites);
});

app.get('/api/references', (req, res) => {
  res.json(portfolioData.references);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 API Nahum Portfolio démarrée sur le port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
});