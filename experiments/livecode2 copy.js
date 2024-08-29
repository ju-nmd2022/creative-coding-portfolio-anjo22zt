function setup() {
    createCanvas(600, 600);
    frameRate(4);
}
const size = 7;
    const divider = 50;
    const numRows = 100;
    const numCols = 100;
    let counter = 1;
function draw () {
    background(255,255,255);
    noStroke();
    fill(0,random(20,200),0);

    //noiseSeed();
    for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
            const value = noise(x / divider, y , counter) * size;
            ellipse(size / 2 + x * size, size / 2 + y * size, value);
        }
    }
    
    counter++;

}
