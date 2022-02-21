const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let pic;

function preload() {
    pic = loadImage("photo-text-test.jpg");
}

function setup() {
    noCanvas();
    background(0);
    let w = width / pic.width;
    let h = height / pic.height;
    pic.loadPixels();
    for (let j = 0; j < pic.height; j++) {
        let row = '';
        for (let i = 0; i < pic.width; i++) {
            const pixelIndex = (i + j * pic.width) * 4;
            const r = pic.pixels[pixelIndex + 0];
            const g = pic.pixels[pixelIndex + 1];
            const b = pic.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));
            const c = density.charAt(charIndex);
            row+= c == ' ' ? '&nbsp;': c;
        }
        createDiv(row);
    }
}