import App from "./App.js"


const app = new App();
requestAnimationFrame(update);

let lastTime = 0;

function update(timeStamp) {
  const deltaTime = (timeStamp - lastTime) / 1000; // TODO: delete timeStamp if it won't be use
  lastTime = timeStamp;

  app.render();
  app.update(deltaTime);

  requestAnimationFrame(update);
}
