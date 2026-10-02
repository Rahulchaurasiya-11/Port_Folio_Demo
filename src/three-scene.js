import * as THREE from 'three';

/**
 * Initializes an ultra-modern 3D Three.js interactive canvas background
 * featuring an interactive cyber neural constellation, floating geometric wireframes,
 * and mouse-driven parallax depth.
 */
export function initThreeScene() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 28;

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Mouse interaction state
  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
  });

  // 1. Minimal Technical Coordinate Grid (Clean, Flat, Engineering Standard)
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 60 : 120;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Crisp square/subtle dot texture (sharp, no glowing radial halo)
  const createSubtleDot = () => {
    const size = 16;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 3, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  };

  const particleMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.35 : 0.45,
    color: new THREE.Color('#334155'),
    transparent: true,
    opacity: 0.35,
    map: createSubtleDot(),
    blending: THREE.NormalBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(geometry, particleMaterial);
  scene.add(particleSystem);

  // Resize listener
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Animation Loop - gentle subtle float
  let startTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = (performance.now() - startTime) * 0.001;

    // Smooth subtle mouse parallax
    mouse.x += (mouse.targetX - mouse.x) * 0.03;
    mouse.y += (mouse.targetY - mouse.y) * 0.03;

    // Very subtle drift
    particleSystem.rotation.y = elapsedTime * 0.005 + mouse.x * 0.03;
    particleSystem.rotation.x = elapsedTime * 0.003 + mouse.y * 0.03;

    camera.position.x = mouse.x * 0.8;
    camera.position.y = mouse.y * 0.8;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
}
