const handleResize = ({ camera, renderer }) => {
  const onWindowResize = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };

  window.addEventListener('resize', onWindowResize, false);
};

export default handleResize;
