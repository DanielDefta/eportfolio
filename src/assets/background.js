
var canvas = document.getElementById("c");
var container = document.getElementsByClassName('canvas-container')[0];

var ctx = canvas.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;

var drawing = {
    generalVelocity: 0.5,
    minRadiusDot: 2,
    maxRadiusDot: 7,
    bounce: true,
    connectDistance: 150,
    //noOfDots: W * H / (150 * 150), // average of 1 dot per 150*150 px*/
    noOfDots: 60,
    lineWidth: 1
};

function setAmountOfDots() {
    var surface = W * H;
    var divisor = 150 * 150;
    drawing.noOfDots = Math.round(surface / divisor);
    createDots();
}
function createDots() {
    dots = [];
    for (var i = 0; i < drawing.noOfDots; i++) {
        dots.push(new Dot());
    }
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();


function random(min, max) {
    if (min > max) {
        min = [max, max = min][0];
    }
    return Math.random() * (max - min + 1) + min;
}

function round(x) {
    return Math.round(x);
}

function distance(dotA, dotB) {
    var diffX = dotA.x - dotB.x;
    var diffY = dotA.y - dotB.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
}

function draw() {
    drawBackground();

    dots.forEach(function (dot) {
        dot.update();
    });
    dots.forEach(function (dot) {
        dot.draw();
    });
    dots.forEach(function (dot, i) {
        dot.connect(i);
    });
    requestAnimFrame(draw);
}

function drawBackground() {
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    //ctx.fillStyle = "#eaedef";
    ctx.fillStyle = "#f7f7f7";
    //     ctx.fillStyle = "#000000";

    ctx.fill();
}
function line(dotA, dotB) {
    var grad = ctx.createLinearGradient(dotA.x, dotA.y, dotB.x, dotB.y);
    grad.addColorStop(0, dotA.color);
    grad.addColorStop(1, dotB.color);
    ctx.strokeStyle = grad;
    ctx.lineWidth = drawing.lineWidth;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(dotA.x, dotA.y);
    ctx.lineTo(dotB.x, dotB.y);
    ctx.stroke();
}


function Dot() {
    
    var colors = ["rgba(1,100,149,.35)", "rgba(188,212,230,0.50)", "rgba(102,204,204,0.35)"];
    this.r = random(drawing.minRadiusDot, drawing.maxRadiusDot);
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
    this.x = random(0, W);
    this.y = random(0, H);

    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomByte = () => randomNumber(0, 255)
    const randomPercent = () => (randomNumber(20, 40) * 0.01).toFixed(2)
    const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`

    this.color = randomCssRgba();
    this.update = function () {
        this.x += this.vx * drawing.generalVelocity;
        this.y += this.vy * drawing.generalVelocity;
        if (drawing.bounce) {
            if (this.x > W) this.vx *= -1.0; //this.x-=W
            if (this.y > H) this.vy *= -1.0; //this.y-=H
            if (this.x < 0) this.vx *= -1.0; //this.x+=W
            if (this.y < 0) this.vy *= -1.0; //this.y+=H	
        } else {
            if (this.x > W) this.x -= W;
            if (this.y > H) this.y -= H;
            if (this.x < 0) this.x += W;
            if (this.y < 0) this.y += H;
        }

    };
    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    };
    this.connect = function (i) {
        for (var j = i; j < dots.length; j++) {
            if (distance(this, dots[j]) < drawing.connectDistance) {
                line(this, dots[j]);
            }
        }
    };
}

var dots = [];
setAmountOfDots();
draw();

window.onresize = function () {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    setAmountOfDots();
};