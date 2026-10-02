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

  // 1. Refined, Professional 3D Ambient Particle Constellation (Lightweight & Recruiter-Friendly)
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 90 : 220;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorPalette = [
    new THREE.Color('#00f2fe'), // Cyan
    new THREE.Color('#38bdf8'), // Electric Blue
    new THREE.Color('#818cf8'), // Soft Indigo
    new THREE.Color('#3b82f6')  // Royal Blue
  ];

  for (let i = 0; i < particleCount; i++) {
    const radius = 16 + Math.random() * 26;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

    const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Circular point texture generated programmatically
  const createCircleTexture = () => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.35, 'rgba(0, 242, 254, 0.7)');
    grad.addColorStop(0.75, 'rgba(0, 242, 254, 0.15)');
    grad.addColorStop(1, 'rgba(0, 242, 254, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };

  const particleMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.5 : 0.65,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    map: createCircleTexture(),
    blending: THREE.AdditiveBlending,
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

  // Animation Loop using high-precision performance.now()
  let startTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = (performance.now() - startTime) * 0.001;

    // Smooth subtle mouse parallax
    mouse.x += (mouse.targetX - mouse.x) * 0.04;
    mouse.y += (mouse.targetY - mouse.y) * 0.04;

    // Ambient gentle drift
    particleSystem.rotation.y = elapsedTime * 0.02 + mouse.x * 0.08;
    particleSystem.rotation.x = elapsedTime * 0.01 + mouse.y * 0.08;

    // Subtle camera parallax
    camera.position.x = mouse.x * 1.5;
    camera.position.y = mouse.y * 1.5;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
}
