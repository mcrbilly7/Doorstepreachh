// Language toggle logic
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
  languageToggle.addEventListener('change', function () {
    const lang = this.value;
    document.documentElement.lang = lang;

    const content = {
      en: {
        heading: "Flyer Delivery. Powered by Pros.",
        subheading: "Fast, reliable, and local delivery for all your flyer needs — right here in Dallas.",
        button: "Get Started"
      },
      es: {
        heading: "Entrega de Volantes. Potenciada por Profesionales.",
        subheading: "Entrega rápida, confiable y local para todas sus necesidades de volantes — aquí en Dallas.",
        button: "Comenzar"
      }
    };

    const t = content[lang];
    if (t) {
      document.querySelector('.hero-text h1').textContent = t.heading;
      document.querySelector('.hero-text p').textContent = t.subheading;
      document.querySelector('.hero-text button').textContent = t.button;
    }
  });
}

// File input preview handler
const fileInput = document.getElementById('fileInput');
if (fileInput) {
  fileInput.addEventListener('change', function () {
    const fileName = this.files[0]?.name || "No file selected";
    alert(`Uploaded: ${fileName}`);
  });
}

// Simulated star badge logic (coming soon)
const userLevel = localStorage.getItem('doorstepStatus') || 'basic';
const badgeContainer = document.querySelector('.badges');

if (badgeContainer) {
  const badge = document.createElement('div');
  badge.classList.add('badge');

  if (userLevel === 'verified') {
    badge.textContent = "✅ Verified Stepper";
  } else if (userLevel === 'frequent') {
    badge.textContent = "⭐ Star Customer";
  } else {
    badge.textContent = "🔰 New User";
  }

  badgeContainer.appendChild(badge);
}

// Simulated dynamic map (placeholder)
const map = document.getElementById('map-placeholder');
if (map) {
  map.innerHTML += "<br><br>Coming soon: GPS optimized delivery routes powered by our AI planner.";
}
