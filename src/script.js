import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const debugObj = {};

/**
 * Lights
 */
debugObj.ambientLightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(debugObj.ambientLightColor, 0);
scene.add(ambientLight);

debugObj.pointLightColor = 0xffffff;
const pointLight = new THREE.PointLight(
  debugObj.pointLightColor,
  0.5,
  0.0,
  0.3
);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

debugObj.directionalLightColor = 0x00fffc;
const directionalLight = new THREE.DirectionalLight(
  debugObj.directionalLightColor,
  0
);
directionalLight.position.set(1, 0.25, 0);
scene.add(directionalLight);

debugObj.hemisphereLightSkyColor = 0xff0000;
debugObj.hemisphereLightGroundColor = 0x0000ff;
const hemisphereLight = new THREE.HemisphereLight(
  debugObj.hemisphereLightSkyColor,
  debugObj.hemisphereLightGroundColor,
  0.137
);
scene.add(hemisphereLight);

debugObj.rectAreaLightColor = 0x4e00ff;
const rectAreaLight = new THREE.RectAreaLight(
  debugObj.rectAreaLightColor,
  0,
  0,
  0
);
scene.add(rectAreaLight);

const ambientLightFolder = gui.addFolder("Ambient Light");
ambientLightFolder
  .add(ambientLight, "intensity")
  .min(0)
  .max(3)
  .step(0.001)
  .name("Intensity");
ambientLightFolder.addColor(debugObj, "ambientLightColor").onChange(() => {
  ambientLight.color.set(debugObj.ambientLightColor);
});

debugObj.spotlightColor = 0x78ff00;
const spotLight = new THREE.SpotLight(debugObj.spotlightColor, 0, 0, 0, 0, 0);
spotLight.position.set(0, 2, 3);
scene.add(spotLight);
scene.add(spotLight.target);

const pointLightFolder = gui.addFolder("Point Light");
pointLightFolder
  .add(pointLight, "intensity")
  .min(0)
  .max(3)
  .step(0.001)
  .name("Intensity");
pointLightFolder
  .add(pointLight, "distance")
  .min(0)
  .max(1)
  .step(0.001)
  .name("Distance");
pointLightFolder
  .add(pointLight, "decay")
  .min(0)
  .max(1)
  .step(0.001)
  .name("Decay");
pointLightFolder
  .add(pointLight.position, "x")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position X");
pointLightFolder
  .add(pointLight.position, "y")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Y");
pointLightFolder
  .add(pointLight.position, "z")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Z");
pointLightFolder.addColor(debugObj, "pointLightColor").onChange(() => {
  pointLight.color.set(debugObj.pointLightColor);
});

const directionalLightFolder = gui.addFolder("Directional Light");
directionalLightFolder
  .add(directionalLight, "intensity")
  .min(0)
  .max(3)
  .step(0.001)
  .name("Intensity");
directionalLightFolder
  .add(directionalLight.position, "x")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position X");
directionalLightFolder
  .add(directionalLight.position, "y")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Y");
directionalLightFolder
  .add(directionalLight.position, "z")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Z");
directionalLightFolder
  .addColor(debugObj, "directionalLightColor")
  .onChange(() => {
    directionalLight.color.set(debugObj.directionalLightColor);
  });

const hemisphereLightFolder = gui.addFolder("Hemisphere Light");
hemisphereLightFolder
  .add(hemisphereLight, "intensity")
  .min(0)
  .max(3)
  .step(0.001)
  .name("Intensity");
hemisphereLightFolder
  .add(hemisphereLight.position, "x")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position X");
hemisphereLightFolder
  .add(hemisphereLight.position, "y")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Y");
hemisphereLightFolder
  .add(hemisphereLight.position, "z")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Z");
hemisphereLightFolder
  .addColor(debugObj, "hemisphereLightSkyColor")
  .onChange(() => {
    hemisphereLight.color.set(debugObj.hemisphereLightSkyColor);
  });
hemisphereLightFolder
  .addColor(debugObj, "hemisphereLightGroundColor")
  .onChange(() => {
    hemisphereLight.groundColor.set(debugObj.hemisphereLightGroundColor);
  });

const rectAreaLightFolder = gui.addFolder("Rect Area Light");
rectAreaLightFolder
  .add(rectAreaLight, "intensity")
  .min(0)
  .max(3)
  .step(0.001)
  .name("Intensity");
rectAreaLightFolder
  .add(rectAreaLight, "width")
  .min(0)
  .max(10)
  .step(0.1)
  .name("Width");
rectAreaLightFolder
  .add(rectAreaLight, "height")
  .min(0)
  .max(10)
  .step(0.1)
  .name("Height");
rectAreaLightFolder
  .add(rectAreaLight.position, "x")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position X");
rectAreaLightFolder
  .add(rectAreaLight.position, "y")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Y");
rectAreaLightFolder
  .add(rectAreaLight.position, "z")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Z");
rectAreaLightFolder.addColor(debugObj, "rectAreaLightColor").onChange(() => {
  rectAreaLight.color.set(debugObj.rectAreaLightColor);
});

const spotLightFolder = gui.addFolder("Spot Light");
spotLightFolder
  .add(spotLight, "intensity")
  .min(0)
  .max(3)
  .step(0.001)
  .name("Intensity");
spotLightFolder
  .add(spotLight, "distance")
  .min(0)
  .max(10)
  .step(0.1)
  .name("Distance");
spotLightFolder.add(spotLight, "decay").min(0).max(10).step(0.1).name("Decay");
spotLightFolder
  .add(spotLight, "angle")
  .min(0)
  .max(Math.PI * 0.5)
  .step(0.001)
  .name("Angle");
spotLightFolder
  .add(spotLight, "penumbra")
  .min(0)
  .max(1)
  .step(0.001)
  .name("Penumbra");
spotLightFolder
  .add(spotLight.position, "x")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position X");
spotLightFolder
  .add(spotLight.position, "y")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Y");
spotLightFolder
  .add(spotLight.position, "z")
  .min(-10)
  .max(10)
  .step(0.1)
  .name("Position Z");
spotLightFolder.addColor(debugObj, "spotlightColor").onChange(() => {
  spotLight.color.set(debugObj.spotlightColor);
});

/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;

// Objects
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
sphere.position.x = -1.5;

const cube = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), material);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 32, 64),
  material
);
torus.position.x = 1.5;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.65;

scene.add(sphere, cube, torus, plane);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.1 * elapsedTime;
  cube.rotation.y = 0.1 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;

  sphere.rotation.x = 0.15 * elapsedTime;
  cube.rotation.x = 0.15 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
