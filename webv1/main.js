AOS.init();
var swiper = new Swiper('.swiper-container', { pagination: { el: '.swiper-pagination' } });
// Simple Three.js animation
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.8, 400);
document.getElementById('hero-canvas').appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
