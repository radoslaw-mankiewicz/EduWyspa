let currentLang = "pl";

function render() {
  const t = translations[currentLang];

  document.getElementById("hero-title1").textContent = t.hero.title1;
  document.getElementById("hero-title2").textContent = t.hero.title2;
  document.getElementById("hero-subtitle").textContent = t.hero.subtitle;
  document.getElementById("hero-cta").textContent = t.hero.cta;

  document.getElementById("about-title").textContent = t.about.title;
  document.getElementById("about-subtitle").textContent = t.about.subtitle;

  document.getElementById("features-box").innerHTML =
    t.about.features.map(f => `
      <div class="card">
        <div class="card-icon"><i class="lucide-graduation-cap"></i></div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>
    `).join("");

  document.getElementById("mission-title").textContent = t.about.missionTitle;
  document.getElementById("mission-text").textContent = t.about.missionText;

  document.getElementById("gallery-title").textContent = t.gallery.title;
  document.getElementById("gallery-subtitle").textContent = t.gallery.subtitle;

  const galleryURLs = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
  ];

  document.getElementById("gallery-grid").innerHTML =
    galleryURLs.map((url, i) => `
      <div class="gallery-item">
        <img src="${url}" alt="${t.gallery.images[i]}">
      </div>
    `).join("");

  document.getElementById("contact-title").textContent = t.contact.title;
  document.getElementById("contact-subtitle").textContent = t.contact.subtitle;

  document.getElementById("contact-grid").innerHTML = `
    <div class="card"><h3>${t.contact.phone}</h3><p>+48 123 456 789</p></div>
    <div class="card"><h3>${t.contact.email}</h3><p>kontakt@eduwyspa.pl</p></div>
    <div class="card"><h3>${t.contact.address}</h3><p>${t.contact.addressText}</p></div>
  `;

  document.getElementById("footer-subtitle").textContent = t.footer.subtitle;
  document.getElementById("footer-copy").textContent = t.footer.copyright;

  document.getElementById("lang-pl").classList.toggle("active", currentLang === "pl");
  document.getElementById("lang-en").classList.toggle("active", currentLang === "en");
}

function setLang(lang) {
  currentLang = lang;
  render();
}

function scrollToId(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

render();
