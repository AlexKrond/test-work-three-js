import * as THREE from 'three';
import HemisphereLight from "./HemisphereLight.js";
import Camera from "./Camera.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Cube from "./Cube.js";
import handleMouseMove from "./handleMouseMove.js";
import handleClick from "./handleClick.js";
import config from "./config.js";


class App {
  constructor() {
    const {cubesNumber, cubeSizeMax, cubeSizeMin, spawnSquareSize} = config;

    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;

    this.scene = new THREE.Scene();

    // cubes
    for (let i = 0; i < cubesNumber; i++) {
      const size = Math.random() * (cubeSizeMax - cubeSizeMin) + cubeSizeMin;
      const position = new THREE.Vector3(
          Math.random() * spawnSquareSize - spawnSquareSize / 2,
          0,
          Math.random() * spawnSquareSize - spawnSquareSize / 2
      );
      const rotation = new THREE.Vector3(
          Math.random() * (Math.PI / 2),
          Math.random() * (Math.PI / 2),
          Math.random() * (Math.PI / 2),
      );

      const cube = new Cube(size, position, rotation);
      this.scene.add(cube.mesh);
    }

    const light = new HemisphereLight().light;
    this.scene.add(light);

    this.camera = new Camera(this.width, this.height).camera;
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(this.width, this.height);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // raycaster
    this.INTERSECTED = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    handleMouseMove({
      mouse: this.mouse,
      domElement: this.renderer.domElement
    });
    handleClick({
      mouse: this.mouse,
      raycaster: this.raycaster,
      scene: this.scene,
      camera: this.camera,
      domElement: this.renderer.domElement
    });

    document.querySelector("#game").appendChild(this.renderer.domElement);
  }

  render() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0 && intersects[0].object.material.hasOwnProperty('emissive')) {
      if (this.INTERSECTED !== intersects[0].object) {
        if (this.INTERSECTED) this.INTERSECTED.material.emissive.setHex(this.INTERSECTED.currentHex);

        this.INTERSECTED = intersects[0].object;
        this.INTERSECTED.currentHex = this.INTERSECTED.material.emissive.getHex();
        this.INTERSECTED.material.emissive.setHex(0xff0000);
      }
    } else {
      if (this.INTERSECTED) this.INTERSECTED.material.emissive.setHex(this.INTERSECTED.currentHex);
      this.INTERSECTED = null;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

export default App
