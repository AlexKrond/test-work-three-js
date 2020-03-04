const handleMouseMove = ({ mouse, domElement }) => {
  const onMouseMove = event => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  domElement.addEventListener('mousemove', onMouseMove, false);
};

export default handleMouseMove;
