const socket = io();
const iframe = document.querySelector('.iframe');

socket.on('show-page', (pageId) => {
  iframe.src = `pages/${pageId}.html`;
});
