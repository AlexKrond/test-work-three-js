import * as THREE from 'three';
import HemisphereLight from "./HemisphereLight.js";
import Camera from "./Camera.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Cube from "./Cube.js";
import handleMouseMove from "./handleMouseMove.js";


class App {
  constructor() {
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;

    this.scene = new THREE.Scene();

    // cube
    const cube = new Cube(50);

    const light = new HemisphereLight().light;
    const axesHelper = new THREE.AxesHelper(100);

    this.scene.add(
        cube.mesh,
        light,
        axesHelper
    );

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
    handleMouseMove(this.mouse);

    document.querySelector("#game").appendChild(this.renderer.domElement);
  }

  render() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersects[0]) console.log(intersects[0]);
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
