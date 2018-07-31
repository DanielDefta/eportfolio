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
    maxRadiusDot: 6,
    bounce: true,
    connectDistance: 250,
    //noOfDots: W * H / (150 * 150), // average of 1 dot per 150*150 px*/
    noOfDots: 60,
    lineWidth: 1
};

function setAmountOfDots() {
    var surface = W * H;
    var divisor = 200 * 200;
    drawing.noOfDots = Math.round(surface / divisor);
    createDots();
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


function drawBackground() {
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    //ctx.fillStyle = "#eaedef";
    ctx.fillStyle = "#f7f7f7";
    //     ctx.fillStyle = "#000000";

    ctx.fill();
}


function distance(dotA, dotB) {
    var diffX = dotA.x - dotB.x;
    var diffY = dotA.y - dotB.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
}

function distanceMouse(mouseX,mouseY, dotB) {
    var diffX = mouseX - dotB.x;
    var diffY = mouseY - dotB.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
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

function lineMouse(mouseX,mouseY, dotB) {
    var grad = ctx.createLinearGradient(mouseX, mouseY, dotB.x, dotB.y);
    grad.addColorStop(0, "rgba(1,100,149,1)");
    grad.addColorStop(1, dotB.color);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
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
    this.color = colors[round(random(0,1))];
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

function createDots() {
    dots = [];
    for (var i = 0; i < drawing.noOfDots; i++) {
        dots.push(new Dot());
    }
}

var mouseParticle = {
    x: 0,
    y: 0
};

container.addEventListener('mousemove', function (e) {
    var dimensions = canvas.getBoundingClientRect();
    mouseParticle.x = e.pageX;
    mouseParticle.y = e.pageY;
});

container.addEventListener('click', function (e) {
    if (dots.length < 80) {
        var dot = new Dot();
        dot.x = mouseParticle.x;
        dot.y = mouseParticle.y;
        dots.push(dot);
    }
});

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
    
    for (var j = 0; j < dots.length; j++) {
            if (distanceMouse(mouseParticle.x, mouseParticle.y, dots[j]) < drawing.connectDistance) {
                lineMouse(mouseParticle.x,mouseParticle.y, dots[j]);
            }
        }

    requestAnimFrame(draw);
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
