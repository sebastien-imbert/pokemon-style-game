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

image.onload = () => {
  c.drawImage(image, -850, -300);
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height,
  );
}
