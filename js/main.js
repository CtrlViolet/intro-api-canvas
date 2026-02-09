// Función auxiliar para dibujar rectángulo con esquinas redondeadas
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

// Canvas 1: Rectángulo Verde Simple
function drawGreenRectangle() {
  const canvas = document.getElementById("canvas1");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
  }
}

// Canvas 2: Rectángulos Combinados
function drawCombinedRectangles() {
  const canvas = document.getElementById("canvas2");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFB6C1";
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeStyle = "#FF69B4";
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, 50, 50);
  }
}

// Canvas 3: Rectángulo con Sombra
function drawShadowRectangle() {
  const canvas = document.getElementById("canvas3");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.shadowColor = "#dd5533";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#3388ff";
    ctx.strokeRect(30, 30, 120, 70);
  }
}

// Canvas 4: Triángulo Simple
function drawSimpleTriangle() {
  const canvas = document.getElementById("canvas4");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFA500";
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.lineTo(100, 70);
    ctx.lineTo(100, 30);
    ctx.fill();
  }
}

// Canvas 5: Triángulos Mixtos
function drawMixedTriangles() {
  const canvas = document.getElementById("canvas5");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    
    // Triángulo relleno
    ctx.fillStyle = "#00CED1";
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(75, 25);
    ctx.lineTo(25, 75);
    ctx.fill();

    // Triángulo contorneado
    ctx.strokeStyle = "#FF1493";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.lineTo(110, 40);
    ctx.lineTo(40, 110);
    ctx.closePath();
    ctx.stroke();
  }
}

// Canvas 6: Cara Sonriente
function drawSmileyFace() {
  const canvas = document.getElementById("canvas6");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
  }
}

// Canvas 7: Arcos en Grid
function drawArcGrid() {
  const canvas = document.getElementById("canvas7");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#9370DB";
    ctx.lineWidth = 2;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50;
        const y = 25 + i * 50;
        const radius = 15;
        const startAngle = 0;
        const endAngle = Math.PI + (Math.PI * j) / 2;
        const counterclockwise = i % 2 !== 0;

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fillStyle = "#FFB6C1";
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}

// Canvas 8: Curva Cuadrática
function drawQuadraticCurve() {
  const canvas = document.getElementById("canvas8");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FF6347";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.quadraticCurveTo(20, 20, 20, 50);
    ctx.quadraticCurveTo(20, 80, 40, 80);
    ctx.quadraticCurveTo(40, 95, 25, 100);
    ctx.quadraticCurveTo(50, 95, 50, 80);
    ctx.quadraticCurveTo(100, 80, 100, 50);
    ctx.quadraticCurveTo(100, 20, 60, 20);
    ctx.stroke();
  }
}

// Canvas 9: Curva Cúbica (Bezier)
function drawBezierCurve() {
  const canvas = document.getElementById("canvas9");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF69B4";

    ctx.beginPath();
    ctx.moveTo(60, 35);
    ctx.bezierCurveTo(60, 32, 55, 20, 35, 20);
    ctx.bezierCurveTo(10, 20, 10, 50, 10, 50);
    ctx.bezierCurveTo(10, 65, 25, 80, 60, 95);
    ctx.bezierCurveTo(95, 80, 110, 65, 110, 50);
    ctx.bezierCurveTo(110, 50, 110, 20, 85, 20);
    ctx.bezierCurveTo(65, 20, 60, 32, 60, 35);
    ctx.fill();
  }
}

// Canvas 10: Robot
function drawRobot() {
  const canvas = document.getElementById("canvas10");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4169E1";

    roundedRect(ctx, 12, 12, 100, 100, 15);
    roundedRect(ctx, 19, 19, 100, 100, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 99, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 99, 25, 49, 10);

    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    ctx.fillStyle = "#4169E1";
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (let i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// Ejecutar todos los dibujos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  drawGreenRectangle();
  drawCombinedRectangles();
  drawShadowRectangle();
  drawSimpleTriangle();
  drawMixedTriangles();
  drawSmileyFace();
  drawArcGrid();
  drawQuadraticCurve();
  drawBezierCurve();
  drawRobot();
});