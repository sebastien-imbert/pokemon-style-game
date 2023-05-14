const canvas = document.querySelector('canvas');

canvas.width = 1024;
canvas.height = 576;

const c = canvas.getContext('2d');

c.fillStyle = '#fff';
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './map.png';

const playerImage = new Image();
playerImage.src = './playerDown.png';


class Sprite {
  constructor({position, image}) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(image, this.position.x, this.position.y);
  }
}

const keys = {
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
}

const background = new Sprite({
  position: {
    x: -850,
    y: -300
  },
  image: image,
})


function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    // Image source
    playerImage,
    // Cropping
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    // Rendu du cropping
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height,
  );

  if (keys.w.pressed) background.position.y += 3;
  else if (keys.a.pressed) background.position.x += 3;
  else if (keys.s.pressed) background.position.y -= 3;
  else if (keys.d.pressed) background.position.x -= 3;
}
animate();


window.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'w':
      keys.w.pressed = true;
      break;
    case 'a':
      keys.a.pressed = true;
      break;
    case 's':
      keys.s.pressed = true;
      break;
    case 'd':
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener('keyup', (e) => {
  switch(e.key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});