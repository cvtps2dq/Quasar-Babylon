import {
  Engine,
    Scene,
    FreeCamera,
    Vector3,
    MeshBuilder,
    StandardMaterial,
    Color3,
    HemisphericLight,
} from "babylonjs";
const createScene = (canvas) => {
  let engine = new BABYLON.Engine(canvas, true);
  let scene = new BABYLON.Scene(engine);

  // create camera
  let camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
  // and give our camera a space to control
  camera.attachControl(canvas, true);
  camera.inputs.add(new BABYLON.FreeCameraKeyboardMoveInput());

  // set camera controls to WASD keys
  camera.keysUp = [87];       // W
  camera.keysDown = [83];     // A
  camera.keysLeft = [65];     // S
  camera.keysRight = [68];    // D

  // slow down the camera
  camera.speed = 0.5;

  // add light source
  let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  // materials
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();

  // add meshes
  let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
  let sphereVector = new BABYLON.Vector3(0, 1, 0)
  let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {segments: 32, diameter: 1}, scene);
  sphere.position.addInPlace(sphereVector)
  sphere.material = material;


  // Render loop
  engine.runRenderLoop(function () {
    scene.render();
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    engine.resize();
  });
};
export { createScene };
