import * as THREE from 'three';

class HemisphereLight {
  constructor() {
    this.light = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);
  }
}

export default HemisphereLight
