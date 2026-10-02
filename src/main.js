import './style.css';
import { initThreeScene } from './three-scene.js';
import confetti from 'canvas-confetti';

/* ===================================================================
   VERIFIED PROJECTS ARCHITECTURE DATA FOR DEEP DIVE MODAL
   =================================================================== */
const PROJECTS_DATA = {
  scrap: {
    title: 'AI-Based Scrap & Recycling Management System',
    category: 'Enterprise Backend System | Industrial AI',
    client: 'Hindalco Industries Pvt. Ltd. (2 Months Internship)',
    image: './images/project-scrap.jpg',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JPA / Hibernate', 'HTML/CSS', 'REST APIs', 'ER Modeling'],
    overview: 'Developed an enterprise backend solution for industrial scrap tracking, automated inventory classification, and recycling analytics at Hindalco Industries Pvt. Ltd. Built REST APIs for reporting modules.',
    problem: 'Manufacturing operations produce complex categories of metal scrap. Tracking manual inventory led to discrepancies in recycling weights, batch allocation delays, and difficult waste reduction reporting.',
    solution: 'Designed normalized database schemas and Entity-Relationship (ER) diagrams in MySQL, and implemented core backend logic using Java Spring Boot for tracking scrap inventory, generating analytics reports, and managing waste reduction metrics.',
    keyFeatures: [
      'Automated inventory classification for industrial scrap flows',
      'Normalized relational database schema with strict ER relationship design',
      'Optimized MySQL queries for rapid scrap retrieval and batch monitoring',
      'REST APIs for executive waste reduction metrics and recycling reports',
      'Collaboration with senior engineers following industrial software workflows'
    ],
    backendArchitecture: 'Engineered using Spring Boot layered architecture (Controllers, Service, Repositories). Utilized Spring Data JPA / Hibernate to execute optimized queries against a normalized MySQL database.',
    impact: 'Streamlined plant floor scrap tracking, automated waste reduction reporting, and established data modeling best practices for industrial recycling workflows.'
  },
  metrology: {
    title: 'Legal Metrology AI Compliance System (SIH 2026 — PS #SIH26034)',
    category: 'Regulatory AI & Computer Vision | Smart India Hackathon 2026',
    client: 'SIH 2026 • Team Govt2047 (Internal Level Selected)',
    image: './images/sih-team-govt2047.jpg',
    liveLink: '', // Ready for user's live deployment link
    gallery: [
      {
        src: './images/sih-team-govt2047.jpg',
        title: 'Team Govt2047 Hackathon Cohort',
        caption: '👥 Team Govt2047 at Hackathon — Internal Selection Round'
      },
      {
        src: './images/sih-presentation-screen.jpg',
        title: 'SIH 2026 Problem Statement #SIH26034 & Presentation',
        caption: '📋 Official SIH26034 Presentation Screen & Team Slip #24 (Govt2047)'
      }
    ],
    tags: ['PaddleOCR', 'OCR Technology', 'Python', 'OpenCV', 'Computer Vision', 'Legal Metrology Rules 2011', 'REST APIs'],
    overview: 'Engineered an automated AI scanning and inspection software system under Problem Statement ID SIH26034 for Smart India Hackathon 2026. The platform utilizes PaddleOCR and Computer Vision algorithms to scan packaged consumer commodities and verify mandatory statutory declarations (MRP, Net Quantity, Mfg/Expiry Dates, and Manufacturer Information) under Legal Metrology (Packaged Commodities) Rules, 2011. Selected at the college internal hackathon level with Team Govt2047.',
    problem: 'Commercial retail packages and e-commerce inventories regularly violate statutory Legal Metrology rules (hidden or tampered MRP, missing manufacturing/expiry dates, inaccurate net weight, missing consumer care contact). Manual audits are labor-intensive, error-prone, and cannot scale across thousands of SKUs.',
    solution: 'Designed an automated optical inspection pipeline utilizing PaddleOCR text detection and recognition combined with OpenCV image preprocessing. Extracted attributes are verified against codified Legal Metrology (Packaged Commodities) Rules, 2011 by a structured validation engine, flagging missing or non-compliant labels instantly.',
    keyFeatures: [
      'PaddleOCR High-Accuracy Detection: Robust text recognition across curved, reflective, distorted, and colored packaging labels',
      'Smart India Hackathon Problem Statement SIH26034: Full compliance checking for Legal Metrology Packaged Commodities Rules 2011',
      'Team Govt2047 (Internal Level Selected): Successfully qualified during college internal hackathon selection round',
      'Computer Vision Preprocessing: OpenCV adaptive thresholding, bilateral filtering, and contour localization for label cropping',
      'Automated Statutory Field Verification: Instant checking of MRP, Net Quantity, Batch, Mfg/Exp Date, and Manufacturer Details',
      'REST APIs & Alert Services: Python/FastAPI endpoints generating structured audit logs for enforcement authorities'
    ],
    backendArchitecture: 'End-to-End Processing Architecture: Camera Capture / Image Ingest -> OpenCV Preprocessing -> PaddleOCR Inference -> Structured Rule Matching Engine (Legal Metrology Rules 2011) -> FastAPI REST Endpoints -> Compliance Audit Database.',
    impact: 'Selected at internal hackathon round for Smart India Hackathon 2026. Proved real-time, sub-second automated compliance verification on packaged commodities, replacing slow manual sampling with verifiable digital records.'
  },
  gesture: {
    title: 'Hand Gesture Recognition Virtual Mouse',
    category: 'Computer Vision | Human-Computer Interaction (HCI)',
    client: 'Autonomous Engineering Project',
    image: './images/project-gesture.jpg',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Real-time HCI', 'Signal Smoothing', 'PyAutoGUI'],
    overview: 'Developed a real-time computer vision application enabling touchless human-computer interaction using hand gestures for cursor movement and click operations.',
    problem: 'Physical computer mice are unsuited for sterile environments (medical/operating rooms, industrial cleanrooms) and pose accessibility barriers for users with physical contact constraints.',
    solution: 'Leveraged OpenCV and MediaPipe to detect and track 21 3D hand landmarks in real-time from webcam video feeds, translating finger coordinate gestures into system cursor movement and clicks.',
    keyFeatures: [
      'Real-time hand tracking utilizing 21 3D knuckle landmarks at high FPS',
      'Pinch-to-click gesture recognition with high precision and low latency',
      'Jitter-reduction moving average algorithm for stable cursor glide',
      'Touchless operation requiring zero specialized hardware—runs on standard webcams'
    ],
    backendArchitecture: 'Multi-threaded video pipeline: Video Frame Ingestion -> MediaPipe Landmark Detector -> Gesture Coordinate Classifier -> OS Mouse Event Dispatcher.',
    impact: 'Demonstrated successful contact-free desktop navigation, showing practical mastery of OpenCV, Python, and computer vision workflows.'
  }
};

/* ===================================================================
   DOM INITIALIZATION & CONTROLLERS
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Three.js 3D background
  initThreeScene();

  // 2. Setup Typewriter Animation
  setupTypewriter();

  // 3. Setup 3D Card Tilt Effects
  setup3DTilt();

  // 4. Setup Skills Filter
  setupSkillFilter();

  // 5. Setup Project Modals
  setupProjectModals();

  // 6. Setup Contact Form & Clipboard
  setupContactForm();
  setupClipboardButtons();

  // 9. Setup Theme Toggle (Dark/Light)
  setupThemeToggle();

  // 10. Setup Mobile Menu Drawer
  setupMobileDrawer();

  // 11. Setup Scroll Spy & Smooth Navigation
  setupScrollSpy();
});

/* ===================================================================
   3. HERO TYPEWRITER ANIMATION
   =================================================================== */
function setupTypewriter() {
  const target = document.getElementById('hero-typewriter');
  if (!target) return;

  const roles = [
    'Scalable Backend Systems',
    'Spring Boot & RESTful APIs',
    'Database Optimization & MySQL',
    'AI Integration & Computer Vision',
    'Patent-Holding Software Innovator'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 85;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 350;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ===================================================================
   3. CARD HOVER (Clean Flat Rectangle Standards)
   =================================================================== */
function setup3DTilt() {
  // Retain clean static rectangle cards without AI 3D distortion
}

/* ===================================================================
   5. SKILLS CATEGORY FILTER
   =================================================================== */
function setupSkillFilter() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const cards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;

      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('filtered-out');
        } else {
          card.classList.add('filtered-out');
        }
      });
    });
  });
}

/* ===================================================================
   6. PROJECT DEEP DIVE MODAL
   =================================================================== */
function setupProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-content');
  const modalTitle = document.getElementById('project-modal-title');
  const modalCategory = document.getElementById('project-modal-category');
  const closeBtn = document.getElementById('close-project-modal-btn');
  const viewBtns = document.querySelectorAll('.view-project-btn');

  if (!modal || !modalContent) return;

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = `${data.category} • ${data.client}`;

    modalContent.innerHTML = `
      <div class="modal-project-view">
        <div class="modal-project-hero-img-wrap" style="position:relative; border-radius:12px; overflow:hidden; margin-bottom:24px; max-height:360px;">
          <img src="${data.image}" alt="${data.title}" style="width:100%; height:100%; object-fit:cover; display:block;" />
          <div style="position:absolute; bottom:14px; left:14px; display:flex; flex-wrap:wrap; gap:6px;">
            ${data.tags.map(t => `<span class="tag-accent" style="background:rgba(10,15,29,0.9);">${t}</span>`).join('')}
          </div>
        </div>

        <div style="margin-bottom:24px;">
          <h4 style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">Executive Overview</h4>
          <p style="color:var(--text-secondary); line-height:1.7;">${data.overview}</p>
        </div>

        ${data.gallery && data.gallery.length > 0 ? `
          <div style="margin-bottom:24px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <h4 style="font-size:1.05rem; font-weight:700; color:#ffffff; display:flex; align-items:center; gap:8px;">
                <span>📸 Authentic Hackathon Photos & Presentation</span>
              </h4>
              <span style="font-size:0.72rem; background:#059669; color:#ffffff; padding:3px 8px; border-radius:4px; font-weight:600; font-family:var(--font-mono);">SIH 2026 EVIDENCE</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:14px;">
              ${data.gallery.map(item => `
                <div style="border:1px solid #334155; border-radius:4px; overflow:hidden; background:#0b1120;">
                  <div style="height:210px; overflow:hidden; background:#000;">
                    <img src="${item.src}" alt="${item.caption}" style="width:100%; height:100%; object-fit:cover; display:block;" />
                  </div>
                  <div style="padding:10px 12px; font-size:0.78rem; color:#94a3b8; font-family:var(--font-mono); border-top:1px solid #1e293b;">
                    ${item.caption}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${data.liveLink ? `
          <div style="margin-bottom:20px; padding:14px; background:#1e293b; border:1px solid #334155; border-radius:4px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
            <div>
              <div style="color:#ffffff; font-weight:600; font-size:0.92rem;">🌐 Live System Deployment</div>
              <div style="color:#94a3b8; font-size:0.8rem;">Access live running instance or project demo</div>
            </div>
            <a href="${data.liveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-glow-blue btn-sm" style="display:inline-flex; align-items:center; gap:6px;">
              <span>Open Live Demo</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        ` : ''}

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">
          <div style="padding:18px; background:var(--bg-card-subtle); border:1px solid var(--border-glass); border-radius:12px;">
            <h5 style="color:var(--rose); font-size:0.95rem; font-weight:700; margin-bottom:6px;">⚠️ The Engineering Problem</h5>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">${data.problem}</p>
          </div>

          <div style="padding:18px; background:var(--bg-card-subtle); border:1px solid var(--border-glass); border-radius:12px;">
            <h5 style="color:var(--cyan); font-size:0.95rem; font-weight:700; margin-bottom:6px;">💡 The Architectural Solution</h5>
            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">${data.solution}</p>
          </div>
        </div>

        <div style="margin-bottom:24px;">
          <h4 style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:12px;">Key Architectural Features</h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:8px;">
            ${data.keyFeatures.map(feat => `
              <li style="display:flex; align-items:flex-start; gap:10px; font-size:0.9rem; color:var(--text-secondary);">
                <span style="color:var(--cyan); font-weight:800;">▹</span> ${feat}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="padding:18px; background:rgba(0,242,254,0.05); border:1px solid rgba(0,242,254,0.2); border-radius:12px; margin-bottom:24px;">
          <h4 style="font-size:1.05rem; font-weight:700; color:var(--cyan); margin-bottom:6px;">⚙️ Backend & Systems Architecture</h4>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65;">${data.backendArchitecture}</p>
        </div>

        <div style="padding:18px; background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:12px;">
          <h4 style="font-size:1.05rem; font-weight:700; color:var(--emerald); margin-bottom:6px;">📊 Practical Impact & Results</h4>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.65;">${data.impact}</p>
        </div>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.project;
      openModal(id);
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}



/* ===================================================================
   9. INTERACTIVE CONTACT FORM & CELEBRATION
   =================================================================== */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const chips = document.querySelectorAll('.topic-chip');
  let selectedTopic = 'Java Backend Developer Role';

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedTopic = chip.dataset.topic;
    });
  });

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const companyInput = document.getElementById('contact-company');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('submit-contact-btn');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      nameInput.parentElement.classList.remove('has-error');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      emailInput.parentElement.classList.remove('has-error');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.parentElement.classList.add('has-error');
      isValid = false;
    } else {
      messageInput.parentElement.classList.remove('has-error');
    }

    if (!isValid) {
      return;
    }

    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending to Gmail...</span>`;

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      company: companyInput?.value.trim() || 'Not specified',
      topic: selectedTopic,
      message: messageInput.value.trim(),
      _subject: `Portfolio Inquiry: ${selectedTopic} from ${nameInput.value.trim()}`,
      _captcha: 'false',
      _template: 'table'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/rahulteam320@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#00f2fe', '#38bdf8', '#8b5cf6', '#10b981', '#ffffff']
        });
        showToast('Message sent directly to rahulteam320@gmail.com! 📩');
        form.reset();
      } else {
        throw new Error('Fallback to direct client');
      }
    } catch {
      // Graceful fallback to default email client with pre-filled content
      const subject = encodeURIComponent(payload._subject);
      const body = encodeURIComponent(`Hi Rahul,\n\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nInquiry Topic: ${payload.topic}\n\nMessage:\n${payload.message}`);
      window.open(`mailto:rahulteam320@gmail.com?subject=${subject}&body=${body}`, '_blank');
      showToast('Opening your email app to send message... ✉️');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  });
}

/* ===================================================================
   10. ONE-CLICK CLIPBOARD COPY
   =================================================================== */
function setupClipboardButtons() {
  const emailBtn = document.getElementById('copy-email-btn');
  const phoneBtn = document.getElementById('copy-phone-btn');

  emailBtn?.addEventListener('click', () => {
    const email = 'rahulteam320@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email (rahulteam320@gmail.com) copied to clipboard! 📋');
    });
  });

  phoneBtn?.addEventListener('click', () => {
    const phone = '+918858000000';
    navigator.clipboard.writeText(phone).then(() => {
      showToast('Phone number copied to clipboard! 📱');
    });
  });
}

/* ===================================================================
   11. DARK / LIGHT THEME TOGGLE
   =================================================================== */
function setupThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');

  const savedTheme = localStorage.getItem('theme_preference') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    moonIcon?.classList.add('hidden');
    sunIcon?.classList.remove('hidden');
  }

  themeBtn?.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');

    if (isLight) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      moonIcon?.classList.remove('hidden');
      sunIcon?.classList.add('hidden');
      localStorage.setItem('theme_preference', 'dark');
      showToast('Dark Futuristic Theme Activated 🌙');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      moonIcon?.classList.add('hidden');
      sunIcon?.classList.remove('hidden');
      localStorage.setItem('theme_preference', 'light');
      showToast('Modern Light Theme Activated ☀️');
    }

    soundFX.playClick();
  });
}

/* ===================================================================
   12. MOBILE NAVIGATION DRAWER & BACKDROP OVERLAY
   =================================================================== */
function setupMobileDrawer() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('close-drawer-btn');
  const mobileTabBtns = document.querySelectorAll('.mobile-tab-btn, #mobile-resume-btn');

  function openDrawer() {
    drawer?.classList.add('open');
    overlay?.classList.add('active');
    mobileBtn?.classList.add('active');
    mobileBtn?.setAttribute('aria-expanded', 'true');
    drawer?.setAttribute('aria-hidden', 'false');
    overlay?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    overlay?.classList.remove('active');
    mobileBtn?.classList.remove('active');
    mobileBtn?.setAttribute('aria-expanded', 'false');
    drawer?.setAttribute('aria-hidden', 'true');
    overlay?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  mobileBtn?.addEventListener('click', () => {
    if (drawer?.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  mobileTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeDrawer();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer?.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ===================================================================
   13. SCROLL SPY & NAVBAR BLUR ON SCROLL (Desktop & Mobile Bottom Bar)
   =================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileTabBtns = document.querySelectorAll('.mobile-tab-btn');
  const bottomTabs = document.querySelectorAll('.mobile-bottom-tab');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.nav === sectionId);
        });

        mobileTabBtns.forEach(tab => {
          tab.classList.toggle('active', tab.dataset.nav === sectionId);
        });

        bottomTabs.forEach(tab => {
          tab.classList.toggle('active', tab.dataset.bottomNav === sectionId);
        });
      }
    });
  }, { passive: true });
}

/* ===================================================================
   14. TOAST NOTIFICATION HELPER
   =================================================================== */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">⚡</span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
