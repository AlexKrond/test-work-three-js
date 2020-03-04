import * as THREE from 'three';


class Cube {
  constructor(size = 5, position = new THREE.Vector3(0, 0, 0)) {
    const sphereRadius = 5; // TODO: config file

    this.mesh = new THREE.Object3D();
    const cubeGeometry = new THREE.BoxGeometry(size, size, size);

    console.log(cubeGeometry);

    for (let i = 0; i < 8; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        flatShading: true
      });
      const geometry = new THREE.SphereGeometry(sphereRadius);
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.add(cubeGeometry.vertices[i]);

      this.mesh.add(sphere);
    }

    this.mesh.position.add(position);
  }
}

export default Cube;
