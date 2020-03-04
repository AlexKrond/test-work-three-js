const handleMouseMove = ({ mouse, domElement }) => {
  const onMouseMove = event => {
    mouse.x = (event.clientX / document.documentElement.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / document.documentElement.clientHeight) * 2 + 1;
  };

  domElement.addEventListener('mousemove', onMouseMove, false);
};

export default handleMouseMove;
