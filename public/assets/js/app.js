import Evolut1onScreenSaver from "./pages/screenSaver.js";
import Evolut1onSlide from "./pages/slide.js";
import setResettableTimeout from "./lib/timeout.js";
const socket = io();
const root = document.body;

const { reset: resetScreenSaverTimeout } = setResettableTimeout(() => {
  location.hash = '/';
}, 1000 * 60 * 1.5);

socket.on('show-page', (pageId) => {
  resetScreenSaverTimeout();
  location.hash = `/${pageId}`;
});

m.route(root, '/', {
  '/': Evolut1onScreenSaver,
  "/:slideId": Evolut1onSlide
});