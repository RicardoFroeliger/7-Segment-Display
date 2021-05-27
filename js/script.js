let segments,      color = 'black';
let Loop = false,  loopIndex = 0;
let count = 'up',  speed = 1;   



/* Custom Functions */
function cnv() { /* P5 Extension */
    let cnv = createCanvas(window.innerHeight - 350 , window.innerHeight - 150);
    cnv.position((windowWidth - width)/2,(windowHeight - height)/2);
    segments = new Segments(color);
};

let decode = [
    [1,1,1,1,1,1,0], [0,1,1,0,0,0,0], // 0 & 1
    [1,1,0,1,1,0,1], [1,1,1,1,0,0,1], // 2 & 3
    [0,1,1,0,0,1,1], [1,0,1,1,0,1,1], // 4 & 5
    [1,0,1,1,1,1,1], [1,1,1,0,0,0,0], // 6 & 7
    [1,1,1,1,1,1,1], [1,1,1,1,0,1,1], // 8 & 9
];



/* P5 Functions */
function setup(){ 
    cnv();
};

function windowResized(){
    cnv();
};

function draw(){
    background('black');
    frameRate(speed);
    noStroke();

    push();
        segments.A(decode[loopIndex][0]);
        segments.B(decode[loopIndex][1]);
        segments.C(decode[loopIndex][2]);
        segments.D(decode[loopIndex][3]);
        segments.E(decode[loopIndex][4]);
        segments.F(decode[loopIndex][5]);
        segments.G(decode[loopIndex][6]);
    pop();

    if(Loop === true) {
        if(count === 'down') loopIndex > 0 ? loopIndex-- : loopIndex = 9;
        else loopIndex < 9 ? loopIndex++ : loopIndex = 0;
    };
};