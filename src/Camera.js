import * as THREE from 'three';

class Camera {
  constructor(width, height, position = new THREE.Vector3(0, 0, 0)) {
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

    this.camera.position.add(position);
  }
}

export default Camera;
