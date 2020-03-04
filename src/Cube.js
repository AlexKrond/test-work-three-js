import * as THREE from 'three';
import config from "./config.js";


class Cube {
  constructor(size = 5, position = new THREE.Vector3(0, 0, 0), rotation = new THREE.Vector3(0, 0, 0)) {
    const { sphereRadius, sphereName, edgeWidth } = config;

    this.mesh = new THREE.Object3D();

    // new BoxGeometry for vertices
    const cubeGeometry = new THREE.BoxGeometry(size, size, size);

    const spheres = [];
    const edges = [];
    const pairs = [[0, 1], [1, 3], [3, 2], [2, 0], [2, 7], [7, 5], [5, 0], [1, 4], [4, 6], [6, 3], [5, 4], [6, 7]];


    // spawn spheres
    for (let i = 0; i < 8; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        flatShading: true
      });

      const geometry = new THREE.SphereGeometry(sphereRadius, 14, 14);
      const sphere = new THREE.Mesh(geometry, material);

      sphere.position.add(cubeGeometry.vertices[i]);
      sphere.name = sphereName;

      spheres.push(sphere);
      this.mesh.add(sphere);
    }


    // spawn edges
    for (let i = 0; i < 12; i++) {
      const material = new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: edgeWidth
      });

      const point1 = spheres[pairs[i][0]].position;
      const point2 = spheres[pairs[i][1]].position;

      const geometry = new THREE.BufferGeometry().setFromPoints([point1, point2]);
      const line = new THREE.Line(geometry, material);

      edges.push(line);
      this.mesh.add(line);
    }


    // attach edges to spheres
    spheres.forEach((sphere, i) => {
      sphere.edges = [];

      pairs.forEach((pair, j) => {
        if (pair.includes(i)) {
          sphere.edges.push(edges[j]);
        }
      });

      sphere.colorEdges = () => {
        sphere.edges.forEach(edge => edge.material.color.set(sphere.material.color));
      };
    });


    this.mesh.position.add(position);
    this.mesh.rotation.setFromVector3(rotation);
  }
}

export default Cube;
