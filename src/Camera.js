import * as THREE from 'three';

class Camera {
  constructor(width, height, position) {
    const aspectRatio = width / height,
        fieldOfView = 60,
        nearPlane = 1,
        farPlane = 10000;

    this.camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );

    if (position) this.camera.position.add(position);
    else this.camera.position.set(0, 100, 300);
  }
}

export default Camera;
