function setup() {
    createCanvas(1000, 1000);
}

const size = 100;
const layers= 10;

function getRandomValue(pos, variance) {
    return pos + map(Math.random(), 0, 1, -variance, variance);
}

function drawLayers(x, y, size, layers) {

const variance = size/ layers;
noFill();
//rectMode(CENTER);
    for (let i = 0; i < layers; i++) {
        if (math.random() > 0.8){
            continue;
        }
        const s = (size / layers) * i;
        const half = s/ 2;
        beginShape();
        vertex(x - half, y - half);
        vertex(x+ half, y - half);
        vertex(x+ half, y + half);
        vertex(x- half, y + half);
        endShape(CLOSE);
        //rect (x - half, y - half, s, s);
    }
}

function draw() {
    background(255, 255, 255);
    //drawLayers(100,100,size,layers);
for (let y= 0; y < 10; y++) {
    for (let x= 0; x < 10; y++) {
        drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
}
    noLoop();
}