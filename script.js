/**
 * ═══════════════════════════════════════════════════════════════
 *  DRIVE DISCOVERIES — script.js
 *  Handles: language switching, navbar, scroll animations,
 *           stat counters, testimonial slider, form, floating btns
 * ═══════════════════════════════════════════════════════════════
 */

/* ─── TRANSLATION DATA ──────────────────────────────────────────
   To add a new phrase: add the key-value pair in BOTH 'en' and 'mr'.
   To update text: edit the value for the relevant key.
────────────────────────────────────────────────────────────────── */
const translations = {
  en: {
    // Nav
    nav_home:         "Home",
    nav_services:     "Services",
    nav_features:     "Features",
    nav_gallery:      "Gallery",
    nav_stats:        "About",
    nav_testimonials: "Reviews",
    nav_contact:      "Contact",

    // Hero
    badge_247:      "24/7 Service",
    hero_subtitle:  "Tours and Travels",
    hero_tagline:   "Travel now with Comfortable, Safe and Reliable Service.",
    s1: "Wedding Ceremony",
    s2: "Devdarshan",
    s3: "Trip",
    s4: "Special Event",
    btn_book:    "Book Now",
    btn_contact: "Contact Us",

    // Services
    sec_services_label: "What We Offer",
    sec_services_title: "Our Services",
    sec_services_sub:   "Professional travel solutions tailored to every occasion",
    srv_wedding:        "Wedding Ceremony",
    srv_wedding_desc:   "Elegant and on-time transportation for your most special day.",
    srv_dev:            "Devdarshan",
    srv_dev_desc:       "Comfortable pilgrimage tours to sacred temples across Maharashtra and beyond.",
    srv_trip:           "Trip Packages",
    srv_trip_desc:      "Customised group and family trip packages at the best value.",
    srv_event:          "Special Events",
    srv_event_desc:     "Corporate events, family functions, and every celebration in between.",
    srv_airport:        "Airport Pickup / Drop",
    srv_airport_desc:   "Punctual airport transfers with flight-tracking and meet-and-greet.",
    srv_outstation:     "Outstation Tours",
    srv_outstation_desc:"Long-distance inter-city and state trips with experienced drivers.",

    // Features
    sec_feat_label:      "Why Choose Us",
    sec_feat_title:      "Our Strengths",
    feat_facilities:     "Great Facilities",
    feat_facilities_desc:"AC vehicles, clean interiors, and courteous professional drivers.",
    feat_rates:          "Affordable Rates",
    feat_rates_desc:     "Transparent pricing — no hidden charges, ever.",
    feat_local:          "Local Sightseeing",
    feat_local_desc:     "Expert local guides covering all hidden gems and popular spots.",
    feat_247:            "24/7 Service",
    feat_247_desc:       "Round-the-clock availability — we're always just a call away.",
    feat_safe:           "Safe Travel",
    feat_safe_desc:      "GPS-tracked vehicles, verified drivers, and zero-compromise safety.",
    feat_reliable:       "100% Reliable",
    feat_reliable_desc:  "Punctuality and trust — our reputation is built on it.",

    // Stats
    stat_trips:   "Happy Trips",
    stat_clients: "Satisfied Clients",
    stat_years:   "Years Experience",
    stat_support: "Support",

    // Gallery
    sec_gallery_label: "Moments",
    sec_gallery_title:  "Our Gallery",
    gal1: "Road Trip Memories",
    gal2: "Temple Trails",
    gal3: "Mountain Roads",
    gal4: "Family Adventures",
    gal5: "Scenic Destinations",
    gal6: "Sunset Journeys",

    // Testimonials
    sec_test_label:  "Client Words",
    sec_test_title:  "What Our Clients Say",
    test1_text: '"The driver was extremely punctual and professional. Our Devdarshan trip to Shirdi and Trimbakeshwar was smooth and memorable!"',
    test1_name: "Rahul Sharma",
    test1_loc:  "Nashik",
    test2_text: '"Booked Drive Discoveries for our wedding baraat. The Traveller was spotless, on time, and Ninad bhai was incredibly cooperative!"',
    test2_name: "Priya Deshmukh",
    test2_loc:  "Pune",
    test3_text: '"Airport pick-up at 3 AM — they were right there, waiting. Rates are very fair and the vehicle was comfortable. Highly recommend!"',
    test3_name: "Amit Kulkarni",
    test3_loc:  "Mumbai",
    test4_text: '"Our family trip to Mahabaleshwar was perfect. Clean car, knowledgeable driver, great experience overall. Will book again!"',
    test4_name: "Sunita Patil",
    test4_loc:  "Aurangabad",

    // Contact
    sec_contact_label: "Get In Touch",
    sec_contact_title:  "Contact Us",
    sec_contact_sub:    "We're always ready to assist you",
    c_owner:       "Owner",
    c_phone:       "Phone",
    c_whatsapp_btn:"Chat on WhatsApp",
    f_name:        "Your Name",
    f_phone:       "Phone Number",
    f_service:     "Service Needed",
    f_select_opt:  "Select a service",
    f_msg:         "Message",
    f_submit:      "Send Enquiry",
    f_success:     "✅ Thank you! We'll contact you shortly.",
    map_note:      "Map location is approximate",

    // Footer
    footer_rights: "All rights reserved.",
    wa_tooltip:    "Chat Now",
  },

  mr: {
    // Nav
    nav_home:         "मुख्यपृष्ठ",
    nav_services:     "सेवा",
    nav_features:     "वैशिष्ट्ये",
    nav_gallery:      "गॅलरी",
    nav_stats:        "आमच्याबद्दल",
    nav_testimonials: "प्रतिक्रिया",
    nav_contact:      "संपर्क",

    // Hero
    badge_247:      "२४/७ सेवा",
    hero_subtitle:  "टूर्स अँड ट्रॅव्हल्स",
    hero_tagline:   "आता प्रवास करा आरामदायी, सुरक्षित आणि विश्वासार्ह सेवेसह.",
    s1: "लग्नसमारंभ",
    s2: "देवदर्शन",
    s3: "ट्रिप",
    s4: "खास कार्यक्रम",
    btn_book:    "आता बुक करा",
    btn_contact: "संपर्क करा",

    // Services
    sec_services_label: "आम्ही काय देतो",
    sec_services_title: "आमच्या सेवा",
    sec_services_sub:   "प्रत्येक प्रसंगासाठी व्यावसायिक प्रवास सेवा",
    srv_wedding:        "लग्नसमारंभ",
    srv_wedding_desc:   "आपल्या सर्वात खास दिवसासाठी वेळेवर व सुंदर वाहतूक.",
    srv_dev:            "देवदर्शन",
    srv_dev_desc:       "महाराष्ट्र आणि परराज्यातील पवित्र मंदिरांसाठी आरामदायी यात्रा.",
    srv_trip:           "ट्रिप पॅकेज",
    srv_trip_desc:      "गट आणि कुटुंब यात्रेसाठी सर्वोत्तम दरात सानुकूल पॅकेज.",
    srv_event:          "खास कार्यक्रम",
    srv_event_desc:     "कॉर्पोरेट कार्यक्रम, कौटुंबिक समारंभ आणि इतर सर्व उत्सव.",
    srv_airport:        "एअरपोर्ट पिकअप / ड्रॉप",
    srv_airport_desc:   "फ्लाइट ट्रॅकिंगसह वेळेवर विमानतळ सेवा.",
    srv_outstation:     "आऊटस्टेशन टूर",
    srv_outstation_desc:"अनुभवी चालकांसह शहराबाहेर आणि राज्याबाहेर प्रवास.",

    // Features
    sec_feat_label:      "आम्हाला का निवडा",
    sec_feat_title:      "आमची वैशिष्ट्ये",
    feat_facilities:     "उत्तम सुविधा",
    feat_facilities_desc:"AC वाहने, स्वच्छ आतील भाग आणि नम्र व्यावसायिक चालक.",
    feat_rates:          "माफक दर",
    feat_rates_desc:     "पारदर्शक किंमत — कोणतेही लपलेले शुल्क नाही.",
    feat_local:          "लोकल साईट ट्रिप्स",
    feat_local_desc:     "सर्व प्रसिद्ध आणि छुपे ठिकाणे दाखविणारे अनुभवी स्थानिक मार्गदर्शक.",
    feat_247:            "२४/७ सेवा",
    feat_247_desc:       "दिवसरात्र उपलब्ध — एक कॉलवर आम्ही नेहमी तयार.",
    feat_safe:           "सुरक्षित प्रवास",
    feat_safe_desc:      "GPS-ट्रॅक्ड वाहने, पडताळलेले चालक आणि शून्य तडजोड सुरक्षा.",
    feat_reliable:       "१००% विश्वासार्ह",
    feat_reliable_desc:  "वेळपालन आणि विश्वास — आमची प्रतिष्ठा याच भरवशावर आहे.",

    // Stats
    stat_trips:   "आनंदी प्रवास",
    stat_clients: "समाधानी ग्राहक",
    stat_years:   "वर्षांचा अनुभव",
    stat_support: "सपोर्ट",

    // Gallery
    sec_gallery_label: "आठवणी",
    sec_gallery_title:  "आमची गॅलरी",
    gal1: "रोड ट्रिप आठवणी",
    gal2: "मंदिर यात्रा",
    gal3: "पर्वत रस्ते",
    gal4: "कुटुंब साहस",
    gal5: "सुंदर ठिकाणे",
    gal6: "सूर्यास्त प्रवास",

    // Testimonials
    sec_test_label:  "ग्राहकांचे मत",
    sec_test_title:  "आमचे ग्राहक काय म्हणतात",
    test1_text: '"चालक अत्यंत वेळेवर आणि व्यावसायिक होते. शिर्डी आणि त्र्यंबकेश्वर देवदर्शन ट्रिप अप्रतिम झाली!"',
    test1_name: "राहुल शर्मा",
    test1_loc:  "नाशिक",
    test2_text: '"लग्नाच्या बारातीसाठी Drive Discoveries बुक केली. ट्रॅव्हलर स्वच्छ, वेळेवर आणि निनाद भाई अतिशय सहकारी होते!"',
    test2_name: "प्रिया देशमुख",
    test2_loc:  "पुणे",
    test3_text: '"पहाटे ३ वाजता एअरपोर्ट पिकअप — ते तयारच होते. दर अतिशय वाजवी आणि गाडी आरामदायी. जरूर बुक करा!"',
    test3_name: "अमित कुलकर्णी",
    test3_loc:  "मुंबई",
    test4_text: '"महाबळेश्वर कुटुंब ट्रिप परफेक्ट होती. स्वच्छ गाडी, जाणकार चालक, उत्कृष्ट अनुभव. पुन्हा नक्की बुक करू!"',
    test4_name: "सुनिता पाटील",
    test4_loc:  "औरंगाबाद",

    // Contact
    sec_contact_label: "संपर्कात राहा",
    sec_contact_title:  "संपर्क करा",
    sec_contact_sub:    "आम्ही नेहमी मदतीसाठी तयार आहोत",
    c_owner:       "मालक",
    c_phone:       "फोन",
    c_whatsapp_btn:"WhatsApp वर बोला",
    f_name:        "तुमचे नाव",
    f_phone:       "फोन नंबर",
    f_service:     "कोणती सेवा हवी",
    f_select_opt:  "सेवा निवडा",
    f_msg:         "संदेश",
    f_submit:      "चौकशी पाठवा",
    f_success:     "✅ धन्यवाद! आम्ही लवकरच संपर्क करू.",
    map_note:      "नकाशाचे स्थान अंदाजे आहे",

    // Footer
    footer_rights: "सर्व हक्क राखीव.",
    wa_tooltip:    "आत्ता बोला",
  }
};

/* ─── STATE ────────────────────────────────────────────────────── */
let currentLang = 'en';

/* ─── LANGUAGE SWITCHER ─────────────────────────────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all elements with data-key attribute
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const text = translations[lang][key];
    if (text !== undefined) {
      // Preserve icons inside buttons/links
      if (el.tagName === 'OPTION') {
        el.textContent = text;
      } else {
        // Only update text nodes, keep child elements (icons)
        const icons = Array.from(el.children).filter(c => c.tagName === 'I' || c.tagName === 'SVG');
        if (icons.length) {
          // Find existing text node and update or create one
          let textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
          if (textNode) {
            textNode.textContent = ' ' + text;
          } else {
            el.appendChild(document.createTextNode(' ' + text));
          }
        } else {
          el.textContent = text;
        }
      }
    }
  });

  // Update toggle button appearance
  const enLabel = document.querySelector('.lang-en');
  const mrLabel = document.querySelector('.lang-mr');
  if (lang === 'en') {
    enLabel.classList.add('active');
    mrLabel.classList.remove('active');
  } else {
    mrLabel.classList.add('active');
    enLabel.classList.remove('active');
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'mr' : 'en');
});

/* ─── NAVBAR ────────────────────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Sticky on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
function highlightNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = navLinks.querySelector(`a[href="#${id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
}
window.addEventListener('scroll', highlightNav);

/* ─── SCROLL TO TOP ─────────────────────────────────────────────── */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── SCROLL-REVEAL ANIMATIONS ──────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 80}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── ANIMATED STAT COUNTERS ────────────────────────────────────── */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start);
    if (start >= target) clearInterval(timer);
  }, 16);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num[data-target]');
      nums.forEach(num => {
        animateCounter(num, parseInt(num.getAttribute('data-target')));
        num.removeAttribute('data-target'); // prevent re-trigger
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statObserver.observe(statsSection);

/* ─── TESTIMONIALS SLIDER ───────────────────────────────────────── */
const track      = document.getElementById('testimonialsTrack');
const dotsWrap   = document.getElementById('sliderDots');
const prevBtn    = document.getElementById('sliderPrev');
const nextBtn    = document.getElementById('sliderNext');

if (track) {
  const cards       = track.querySelectorAll('.testimonial-card');
  let   current     = 0;
  let   perView     = getPerView();
  let   autoTimer;

  function getPerView() {
    return window.innerWidth < 640 ? 1 : window.innerWidth < 900 ? 2 : 3;
  }

  function totalSlides() {
    return Math.ceil(cards.length / perView);
  }

  // Build dots
  function buildDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < totalSlides(); i++) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === current ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function updateDots() {
    dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function goTo(idx) {
    perView = getPerView();
    current = Math.max(0, Math.min(idx, totalSlides() - 1));
    const cardWidth = cards[0].offsetWidth + 24; // gap = 1.5rem = 24px
    track.style.transform = `translateX(-${current * perView * cardWidth}px)`;
    updateDots();
    // Update card widths
    cards.forEach(c => {
      c.style.minWidth = `calc(${100 / perView}% - ${24 * (perView - 1) / perView}px)`;
    });
  }

  function next() { goTo(current + 1 >= totalSlides() ? 0 : current + 1); }
  function prev() { goTo(current - 1 < 0 ? totalSlides() - 1 : current - 1); }

  prevBtn.addEventListener('click', () => { clearInterval(autoTimer); prev(); startAuto(); });
  nextBtn.addEventListener('click', () => { clearInterval(autoTimer); next(); startAuto(); });

  function startAuto() { autoTimer = setInterval(next, 4500); }

  window.addEventListener('resize', () => {
    perView = getPerView();
    buildDots();
    goTo(0);
  });

  buildDots();
  goTo(0);
  startAuto();
}

/* ─── CONTACT FORM ──────────────────────────────────────────────── */
const contactForm  = document.getElementById('contactForm');
const formSuccess  = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('fname').value.trim();
    const phone   = document.getElementById('fphone').value.trim();
    const service = document.getElementById('fservice').value;
    const msg     = document.getElementById('fmsg').value.trim();

    if (!name || !phone) return;

    // Build WhatsApp message and open
    const text = `Hi Drive Discoveries! 🙏%0AName: ${name}%0APhone: ${phone}%0AService: ${service || 'General Enquiry'}%0AMessage: ${msg || 'Please contact me.'}`;
    window.open(`https://wa.me/919757237003?text=${text}`, '_blank');

    // Show success message
    formSuccess.style.display = 'block';
    formSuccess.textContent = translations[currentLang]['f_success'];
    contactForm.reset();

    setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
  });
}

/* ─── SMOOTH ANCHOR SCROLLING (offset for fixed navbar) ────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ─── INITIAL LANGUAGE RENDER ───────────────────────────────────── */
applyLanguage('en');
