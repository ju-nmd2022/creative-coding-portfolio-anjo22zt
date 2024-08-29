let flowerSize = 20;
let amount = 4;
let gap = 40;

function setup() {
    createCanvas(innerHeight, innerWidth);
    background(255);
}

function flower() {
    noStroke();
let petals = 10;

for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
        fill(0,255,200);
        rect(x, y, 10, 40);

        fill(100,55,0);
        rect(x, y, 10, 10);
        rotate(PI / 5);

        fill(25, random(20,200),110);
        rect(x, y, 10, 10);
        rotate(PI / 6);

    }
 }
    
}
function draw(){
    let y = (height - flowerSize * amount - gap * (amount - 1)) / 2;
    for (let i = 0; i < amount; i++) {
        let x = (width - flowerSize * amount - gap * (amount - 1)) / 2;
    
    for (let j = 0; j < amount; j++) {
        push();
        translate(x,y);
        flower();
        pop();
        x +=(flowerSize + gap);
    }
    y +=flowerSize + gap;
}
}
