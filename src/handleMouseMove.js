const handleMouseMove = mouse => {
  const onMouseMove = event => {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  };

  window.addEventListener( 'mousemove', onMouseMove, false );
};

export default handleMouseMove;
