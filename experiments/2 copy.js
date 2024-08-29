function setup() {
  createCanvas(600, 600);
  background(20,20,20);
  strokeWeight(random(1, 0.1));
  translate(width / 2, height / 2); // Flytta koordinatsystemet till mitten

  let radius = 200;
  frameRate(4);
  
  let framRate=1;
  
  for (let i = 0; i < 70000; i++) {
    let angle = random(0.5*PI); // Glöm inte att använda TWO_PI för en full rotation
    let r = (1 - random(random(random()))) * radius;
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    point(x, y);
    stroke(50, 0, random(100, 250));
  }

  // Andra mönstret i röd färg

  
  for (let i = 0; i < 50000; i++) {
    let angle = random(0.5*PI); // Samma mönster men med ny färg
    let r = random(radius);
    let x = cos(angle) * r;
    let y = sin(angle) * r;
    point(x, y);
    stroke(random(100, 255), random(0, 100), 0);
  
}
/* stroke(50, 50, 100);
let rotation= 0;
rotate(rotation);
//rotation += 3;
for (let i = 0; i < 2000; i++) {
  let angle = random(1)+1; // Samma mönster men med ny färg
  let r = random(radius);
  let x = cos(angle) * r;
  let y = sin(angle) * r;
  point(x, y);
}
stroke(100,100,100);
for (let i = 0; i < 7000; i++) {
  let angle = random(2*PI); // Glöm inte att använda TWO_PI för en full rotation
  let r = random(radius*1.5);
  let x = cos(angle) * r;
  let y = sin(angle) * r;
  point(x, y);
} */

}