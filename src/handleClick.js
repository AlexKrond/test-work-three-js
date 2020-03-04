import config from "./config.js";


const handleClick = ({ mouse, raycaster, scene, camera, domElement }) => {
  const onClick = () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object.name === config.sphereName) {
        object.colorEdges();
      }
    }
  };

  domElement.addEventListener("click", onClick, false);
};

export default handleClick;
