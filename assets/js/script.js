const $canvas = document.querySelector('.game-area');
const ctx = $canvas.getContext('2d');

// draw head
function drawHead() {
  const x = $canvas.width / 2;
  const y = ($canvas.height * 3) / 10 - 40;
  const radius = $canvas.width / 2 - 160;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// draw left eye
function drawLeftEye() {
  const x = $canvas.width / 2 - 30;
  const y = ($canvas.height * 3) / 10 - 60;
  const radius = 15;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw right eye
function drawLeftRight() {
  const x = $canvas.width / 2 + 30;
  const y = ($canvas.height * 3) / 10 - 60;
  const radius = 15;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw nose
function drawNose() {
  const x = $canvas.width / 2;
  const y = ($canvas.height * 3) / 10 - 20;
  const radius = 13;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'orange';
  ctx.fill();
}

// draw body
function drawBody() {
  const x = $canvas.width / 2;
  const y = ($canvas.height * 4) / 5 - 60;
  const radius = $canvas.width / 2 - 110;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// draw first button on body
function drawButton1() {
  const x = $canvas.width / 2;
  const y = ($canvas.height * 4) / 5 - 135;
  const radius = 15;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw second button on body
function drawButton2() {
  const x = $canvas.width / 2;
  const y = ($canvas.height * 4) / 5 - 60;
  const radius = 15;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw thrid button on body
function drawButton3() {
  const x = $canvas.width / 2;
  const y = ($canvas.height * 4) / 5 + 15;
  const radius = 15;
  const sA = 0;
  const eA = 2 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, sA, eA);
  ctx.fillStyle = 'black';
  ctx.fill();
}

// draw in order of back to front
drawHead();
drawLeftEye();
drawLeftRight();
drawNose();
drawBody();
drawButton1();
drawButton2();
drawButton3();
