import App from "./App.js"


const app = new App();
requestAnimationFrame(update);

function update() {
  app.render();
  requestAnimationFrame(update);
}
