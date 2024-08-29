function setup() {
  createCanvas(600, 600);
  background(20,20,20);
  strokeWeight(0.3);
  translate(width / 2, height / 2); // Flytta koordinatsystemet till mitten

  let radius = 200;
  
  
  stroke(80,80,120);
  for (let i = 0; i < 75000; i++) {
    let angle = random(2*PI); // Glöm inte att använda TWO_PI för en full rotation
    let r = (1 - random(random(random()))) * radius;
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    point(x, y);
  }

  // Andra mönstret i röd färg

  stroke(50, 10, 0);
  for (let i = 0; i < 100000; i++) {
    let angle = random(1*PI); // Samma mönster men med ny färg
    let r = random(radius);
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    point(x, y);
  
}
stroke(50, 50, 100);
let rotation= 0;
rotate(rotation);
rotation += 3;
for (let i = 0; i < 20000; i++) {
  let angle = random(1)+1; // Samma mönster men med ny färg
  let r = random(radius);
  let x = cos(angle) * r;
  let y = sin(angle) * r;
  point(x, y);
}
stroke(100,100,100);
for (let i = 0; i < 70000; i++) {
  let angle = random(2*PI); // Glöm inte att använda TWO_PI för en full rotation
  let r = random(radius*1.5);
  let x = cos(angle) * r;
  let y = sin(angle) * r;
  point(x, y);
}

}