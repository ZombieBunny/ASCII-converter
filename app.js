const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let pic, video, asciiDiv;

// function preload() {
//     pic = loadImage("photo-text-test.jpg");
// }

function setup() {
    noCanvas();
    video = createCapture(VIDEO);
    video.size(48,48);
    asciiDiv = createDiv();
}

function draw() {
    // background(0);
    // let w = width / pic.width;
    // let h = height / pic.height;
    video.loadPixels();
    let asciiImage = '';
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));
            const c = density.charAt(charIndex);
            asciiImage+= c == ' ' ? '&nbsp;': c;
        }
        // createDiv(row);
        asciiImage += '<br/>';
    }
    asciiDiv.html(asciiImage);
}