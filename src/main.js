import './style.css';
import { initThreeScene } from './three-scene.js';
import confetti from 'canvas-confetti';
import { soundFX } from './audio.js';

/* ===================================================================
   VERIFIED PROJECTS ARCHITECTURE DATA FOR DEEP DIVE MODAL
   =================================================================== */
const PROJECTS_DATA = {
  scrap: {
    title: '1. AI-Based Scrap & Recycling Management System',
    category: 'Enterprise Industrial AI & Full-Stack Platform',
    client: 'Hindalco Industries Limited (Aditya Birla Group) • 2 Months Vocational Internship',
    image: './images/hindalco/hindalco-dashboard.jpg',
    tags: ['Aditya Birla Group', 'Hindalco IT', 'Node.js & Express', 'Java Spring Boot', 'MySQL & MongoDB', 'Python ML', 'Scikit-Learn', 'REST APIs'],
    pdfReport: {
      url: './Hindalco_AI_Scrap_Management_Project_Report.pdf',
      title: 'Official 20-Page Project Report (PDF)',
      subtitle: 'Complete Academic & Vocational Internship Report signed by Mukul Shrivastava'
    },
    metaBadges: [
      { icon: '🏢', label: 'Hindalco Industries Ltd, Renukoot (Aditya Birla Group)' },
      { icon: '📅', label: '15 June 2026 – 15 August 2026 (2 Months Internship)' },
      { icon: '👨‍🏫', label: 'Mentor: Mukul Shrivastava (IT Department)' },
      { icon: '🪪', label: 'Authorized Gate Pass PS No: V9946125' },
      { icon: '⭐', label: 'Guide Evaluation: 10/10 EXCELLENT' }
    ],
    overview: 'During my 2-month summer vocational internship at Hindalco Industries Limited (Aditya Birla Group, Renukoot Plant), I developed an end-to-end AI-Based Scrap Management & Recycling Optimization System for the IT Department. The system replaced legacy manual registers and spreadsheets with a centralized, real-time digital platform that tracks multi-category scrap (Smelter Plant, Alumina Refinery, Rolling Mill), calculates dynamic recycling rates, generates automated PDF audit reports, and runs Scikit-Learn regression models to forecast future scrap trends.',
    learnings: [
      {
        title: 'Enterprise Server Room Operations & Infrastructure',
        icon: '🖥️',
        desc: 'Gained first-hand operational knowledge of enterprise on-premise server room environments: multi-rack server configurations, structured cable patch panels, industrial UPS battery backup redundancy, cooling/thermal regulation, server diagnostics, and physical & network security protocols required in a Fortune 500 manufacturing facility.'
      },
      {
        title: 'Cross-Functional Team Collaboration & Industrial Operations',
        icon: '🤝',
        desc: 'Collaborated daily across departments—coordinating between the central IT team, the Training & Development Centre (TRG Centre under Mr. Sebastian Jose), and shop-floor plant supervisors across Smelter Plant, Alumina Refinery, and Rolling Mills to capture real industrial operational workflows.'
      },
      {
        title: 'Mentorship & Enterprise Engineering Standards',
        icon: '🎓',
        desc: 'Worked under the direct guidance of IT Mentor Mr. Mukul Shrivastava. Learned enterprise software development lifecycles: gathering real operational requirements, 3NF database schema normalization, designing robust REST API contracts, exception handling, and validating AI model predictions on real plant data.'
      }
    ],
    credentials: [
      {
        src: './images/hindalco/hindalco-id-pass.jpg',
        title: 'Official Visitor / Summer Intern Pass',
        caption: '🪪 Authorized Gate Pass PS No: V9946125 | Hindalco Industries Limited'
      },
      {
        src: './images/hindalco/hindalco-project-synopsis.jpg',
        title: 'Official Project / Study Synopsis Sheet',
        caption: '📋 Synopsis Sheet: 6 Project Stages & Guide Remark: EXCELLENT'
      },
      {
        src: './images/hindalco/hindalco-training-feedback.jpg',
        title: 'Vocational Trainees Feedback Form',
        caption: '⭐ Training Feedback Form: 10/10 Rating & Successful Completion'
      }
    ],
    screenshots: [
      {
        src: './images/hindalco/hindalco-dashboard.jpg',
        title: 'Centralized Plant Dashboard',
        caption: '1. Executive overview of total generated scrap, active departments & plant locations'
      },
      {
        src: './images/hindalco/hindalco-scrap-entry.jpg',
        title: 'Scrap Entry & Logging Module',
        caption: '2. Real-time scrap logging (Aluminum, Copper Wire, Iron Slag, weights & status)'
      },
      {
        src: './images/hindalco/hindalco-inventory.jpg',
        title: 'Warehouse Inventory Management',
        caption: '3. Real-time available stock (1,600+ Kg) categorized by material type'
      },
      {
        src: './images/hindalco/hindalco-recycling.jpg',
        title: 'Industrial Recycling Management',
        caption: '4. Logging recycled scrap into reusable warehouse inventory with efficiency metrics'
      },
      {
        src: './images/hindalco/hindalco-prediction.jpg',
        title: 'AI Prediction & Trend Forecasting',
        caption: '5. Machine learning forecast module predicting monthly scrap trends (Pandas/Scikit-Learn)'
      },
      {
        src: './images/hindalco/hindalco-pdf-audit.jpg',
        title: 'Automated PDF Audit Report Generator',
        caption: '6. Generates official downloadable PDF audit report with company header & signature line'
      },
      {
        src: './images/hindalco/hindalco-architecture.jpg',
        title: '4-Tier Full-Stack Architecture Layout',
        caption: '7. Presentation Tier (HTML/JS) ⇄ Application Server (server.js) ⇄ MongoDB ⇄ Python ML'
      },
      {
        src: './images/hindalco/hindalco-login.jpg',
        title: 'Role-Based Authentication Module',
        caption: '8. Secure authentication and access control for Admin, Manager, and Operators'
      }
    ],
    problem: 'Hindalco manufacturing facilities (Rolling Mills, Smelters, Alumina Refineries) generated tons of metal scrap daily. Tracking was handled through fragmented paper registers and Excel sheets—causing data entry errors, delayed audit reporting, zero predictive foresight on scrap surges, and poor scrap-to-recycling efficiency visibility.',
    solution: 'Engineered a modern 4-tier Full-Stack and AI platform integrating a responsive Web client, modular REST application server (Node.js/Express & Java Spring Boot), normalized database persistence (MySQL/MongoDB), and a Python Scikit-Learn predictive engine to forecast scrap trends and automate compliance PDF reporting.',
    keyFeatures: [
      'Real-Time Departmental Scrap Intake: Logs weight, department origin, material classification, and timestamp across manufacturing units',
      'Continuous Warehouse Inventory Monitoring: Instant stock balances (Aluminum Ingot, Steel, Copper, Slag) with automated reorder thresholds',
      'Automated Recycling Rate Analytics: Computes live Recycling Rate % = (Recycled Scrap ÷ Total Scrap Generated) × 100',
      'AI Prediction Module (Linear Regression & Random Forest): Analyzes historical waste clusters to forecast upcoming quarterly scrap spikes',
      'Automated Executive PDF Audit Reports: Instant 1-click generation of verifiable plant scrap audit documentation',
      'Role-Based Access Control (RBAC): Tailored permissions for Plant Operators, Department Managers, and IT Administrators'
    ],
    backendArchitecture: '4-Tier Enterprise Architecture: Presentation Layer (HTML5, CSS3, JavaScript ES6+, Fetch API) ➔ Application Server (Node.js & Express.js REST API server.js / Spring Boot Service Layer) ➔ Data Persistence (Normalized MySQL schemas + MongoDB document store) ➔ AI Intelligence Pipeline (Python, Pandas, NumPy, Scikit-Learn predictive modeling streamed via JSON payloads).',
    impact: 'Successfully completed 2-month summer internship with a 10/10 rating and "EXCELLENT" guide remark from Mukul Shrivastava. Replaced manual paperwork with real-time operational traceability and automated compliance audits.'
  },
  metrology: {
    title: 'Legal Metrology AI Compliance System (SIH 2026 — PS #SIH26034)',
    category: 'Regulatory AI & Computer Vision | Smart India Hackathon 2026',
    client: 'SIH 2026 • Team Govt2047 (Internal Level Selected)',
    image: './images/sih-team-govt2047.jpg',
    liveLink: '',
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
        <!-- Hero Image & Tags Banner -->
        <div class="modal-project-hero-img-wrap" style="position:relative; border-radius:10px; overflow:hidden; margin-bottom:20px; max-height:360px; border:1px solid #30363D;">
          <img src="${data.image}" alt="${data.title}" style="width:100%; height:100%; object-fit:cover; display:block;" />
          <div style="position:absolute; bottom:12px; left:12px; display:flex; flex-wrap:wrap; gap:6px;">
            ${data.tags.map(t => `<span class="tag-accent" style="background:rgba(13,17,23,0.92); border-color:#30363D; color:#58A6FF;">${t}</span>`).join('')}
          </div>
        </div>

        <!-- Meta Badges Strip -->
        ${data.metaBadges && data.metaBadges.length > 0 ? `
          <div class="modal-meta-strip">
            ${data.metaBadges.map(b => `
              <div class="modal-meta-pill">
                <span>${b.icon}</span> <span>${b.label}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Download Project Report PDF Banner -->
        ${data.pdfReport ? `
          <div style="margin-bottom:24px; padding:18px 22px; background:linear-gradient(135deg, rgba(47,129,247,0.12), rgba(35,134,54,0.1)); border:1px solid #30363D; border-radius:10px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px;">
            <div>
              <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="font-size:1.3rem;">📄</span>
                <span style="font-weight:700; color:#F0F6FC; font-size:1.05rem;">${data.pdfReport.title}</span>
                <span style="background:#238636; color:#ffffff; font-size:0.72rem; padding:2px 8px; border-radius:4px; font-weight:600; font-family:var(--font-mono);">20 PAGES SIGNED</span>
              </div>
              <div style="font-size:0.84rem; color:#8B949E; line-height:1.5;">
                ${data.pdfReport.subtitle}
              </div>
            </div>
            <a href="${data.pdfReport.url}" target="_blank" rel="noopener noreferrer" download="Hindalco_AI_Scrap_Management_Project_Report.pdf" class="btn btn-glow-blue btn-sm" style="display:inline-flex; align-items:center; gap:8px;">
              <span>Download Report (PDF)</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        ` : ''}

        <!-- Executive Overview -->
        <div style="margin-bottom:24px;">
          <h4 style="font-size:1.15rem; font-weight:700; color:#F0F6FC; margin-bottom:8px;">Executive Overview</h4>
          <p style="color:#8B949E; line-height:1.7; font-size:0.94rem;">${data.overview}</p>
        </div>

        <!-- Verified Internship Credentials & ID Pass -->
        ${data.credentials && data.credentials.length > 0 ? `
          <div style="margin-bottom:28px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
              <h4 style="font-size:1.05rem; font-weight:700; color:#F0F6FC; display:flex; align-items:center; gap:8px;">
                <span>🪪 Official Internship Credentials & Authorized ID Pass</span>
              </h4>
              <span style="font-size:0.72rem; background:#1f6feb; color:#ffffff; padding:3px 8px; border-radius:4px; font-weight:600; font-family:var(--font-mono);">HINDALCO VERIFIED</span>
            </div>
            <div class="evidence-grid">
              ${data.credentials.map(c => `
                <div class="evidence-card">
                  <div class="evidence-card-media" onclick="window.open('${c.src}', '_blank')" title="Click to view full image in high resolution">
                    <img src="${c.src}" alt="${c.title}" loading="lazy" />
                  </div>
                  <div class="evidence-card-info">
                    <div class="evidence-card-title">${c.title}</div>
                    <div class="evidence-card-desc">${c.caption}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Industrial Learnings (Server Room, Teamwork, Mentorship) -->
        ${data.learnings && data.learnings.length > 0 ? `
          <div style="margin-bottom:28px;">
            <h4 style="font-size:1.05rem; font-weight:700; color:#F0F6FC; margin-bottom:14px; display:flex; align-items:center; gap:8px;">
              <span>💡 Industrial Exposure & Professional Learnings</span>
            </h4>
            <div style="display:flex; flex-direction:column; gap:12px;">
              ${data.learnings.map(l => `
                <div style="padding:16px 18px; background:#0D1117; border:1px solid #30363D; border-left:4px solid #58A6FF; border-radius:8px;">
                  <h5 style="color:#58A6FF; font-size:0.96rem; font-weight:700; margin-bottom:6px; display:flex; align-items:center; gap:8px;">
                    <span>${l.icon}</span> <span>${l.title}</span>
                  </h5>
                  <p style="font-size:0.88rem; color:#8B949E; line-height:1.65; margin:0;">${l.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Working System Screenshots Gallery -->
        ${data.screenshots && data.screenshots.length > 0 ? `
          <div style="margin-bottom:28px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
              <h4 style="font-size:1.05rem; font-weight:700; color:#F0F6FC; display:flex; align-items:center; gap:8px;">
                <span>📸 Real Working System Walkthrough & Screenshots (8 Screens)</span>
              </h4>
              <span style="font-size:0.72rem; background:#238636; color:#ffffff; padding:3px 8px; border-radius:4px; font-weight:600; font-family:var(--font-mono);">LIVE APPLICATION</span>
            </div>
            <div class="evidence-grid">
              ${data.screenshots.map(s => `
                <div class="evidence-card">
                  <div class="evidence-card-media" onclick="window.open('${s.src}', '_blank')" title="Click to view full image in high resolution">
                    <img src="${s.src}" alt="${s.title}" loading="lazy" />
                  </div>
                  <div class="evidence-card-info">
                    <div class="evidence-card-title">${s.title}</div>
                    <div class="evidence-card-desc">${s.caption}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Gallery for SIH (metrology) -->
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
                  <div style="height:210px; overflow:hidden; background:#000; cursor:zoom-in;" onclick="window.open('${item.src}', '_blank')">
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

        <!-- Problem & Architectural Solution Cards -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:24px;">
          <div style="padding:18px; background:#0D1117; border:1px solid #30363D; border-left:4px solid #F85149; border-radius:8px;">
            <h5 style="color:#F85149; font-size:0.95rem; font-weight:700; margin-bottom:6px;">⚠️ The Engineering Problem</h5>
            <p style="font-size:0.88rem; color:#8B949E; line-height:1.6; margin:0;">${data.problem}</p>
          </div>

          <div style="padding:18px; background:#0D1117; border:1px solid #30363D; border-left:4px solid #58A6FF; border-radius:8px;">
            <h5 style="color:#58A6FF; font-size:0.95rem; font-weight:700; margin-bottom:6px;">💡 The Architectural Solution</h5>
            <p style="font-size:0.88rem; color:#8B949E; line-height:1.6; margin:0;">${data.solution}</p>
          </div>
        </div>

        <!-- Key Architectural Features List -->
        <div style="margin-bottom:24px;">
          <h4 style="font-size:1.15rem; font-weight:700; color:#F0F6FC; margin-bottom:12px;">Key Architectural Features</h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; padding:0; margin:0;">
            ${data.keyFeatures.map(feat => `
              <li style="display:flex; align-items:flex-start; gap:10px; font-size:0.9rem; color:#8B949E;">
                <span style="color:#58A6FF; font-weight:800;">▹</span> ${feat}
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Backend Architecture -->
        <div style="padding:18px; background:#0D1117; border:1px solid #30363D; border-left:4px solid #58A6FF; border-radius:8px; margin-bottom:20px;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#58A6FF; margin-bottom:6px;">⚙️ Backend & Systems Architecture</h4>
          <p style="font-size:0.9rem; color:#8B949E; line-height:1.65; margin:0;">${data.backendArchitecture}</p>
        </div>

        <!-- Practical Results & Impact -->
        <div style="padding:18px; background:#0D1117; border:1px solid #30363D; border-left:4px solid #3FB950; border-radius:8px;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#3FB950; margin-bottom:6px;">📊 Practical Impact & Results</h4>
          <p style="font-size:0.9rem; color:#8B949E; line-height:1.65; margin:0;">${data.impact}</p>
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
