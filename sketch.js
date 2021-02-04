var pillarArr = [];
var numArr = [];
var len = 150;
var fillArray = 0;
var sortVar = 0;
var close = 0;
var velocity = 0;

function setup() {
    createCanvas(800, 500);
    noStroke();
    for (var i = 0; i < len; i++) {
        numArr[i] = i + 1;
    }
    while (fillArray < len) {
        var i = Math.floor(Math.random() * numArr.length);
        var num = numArr[i];
        numArr.splice(i, 1);
        var colR = map(num, 0, len, 0, 255);
        var colB = map(num, 0, len, 255, 0);
        pillarArr.push(new Pillar(num, fillArray, colR, colB));
        fillArray++;
    }
    frameRate(30);
}

function draw() {
    background(0);
    for (var i = 0 + close; i < pillarArr.length - close; i++) {
        pillarArr[i].show();
    }
    if (sortVar < pillarArr.length - 1) {
        var minpos = minimumPosition(sortVar);
        swap(minpos, sortVar);
        sortVar++;
    } /*else if (close <= len / 2 && pillarArr[len - 1].height < 5) {
        close++;
        velocity = velocity + 1;
        close = close + velocity;
    } else {
        for (var i = 0; i < pillarArr.length; i++) {
            pillarArr[i].shorten();
        }
    }*/
}

function minimumPosition(from) {
    var minpos = from;
    for (var i = from + 1; i < pillarArr.length; i++) {
        if (pillarArr[i].height < pillarArr[minpos].height) {
            minpos = i;
        }
    }
    return minpos;
}

function swap(i, j){
    var tempH = pillarArr[i].height;
    pillarArr[i].height = pillarArr[j].height;
    pillarArr[j].height = tempH;
    var tempY = pillarArr[i].y;
    pillarArr[i].y = pillarArr[j].y;
    pillarArr[j].y = tempY;
    var tempColR = pillarArr[i].colR;
    pillarArr[i].colR = pillarArr[j].colR;
    pillarArr[j].colR = tempColR;
    var tempColB = pillarArr[i].colB;
    pillarArr[i].colB = pillarArr[j].colB;
    pillarArr[j].colB = tempColB;
}