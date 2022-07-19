var wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    answer,
    q1,
    q2,
    max = 100,
    min = -100,
    speed = 2,
    SPlane,
    sx,
    sy,
    h

function setup(){
    if (navigator.userAgent.indexOf('Android') == -1 || navigator.userAgent.indexOf('iPhone') == -1){
      createCanvas(640,640)
    }else{
      createCanvas(wt,wt)
    }
    sx = height /2
    sy = width - 100
    h = height
    SPlane = loadImage('./res/plane.png')
}

function draw(){
    background(0)
    move()
}

function randQ(){
    q1 = Math.floor(Math.random()*(max-min+1)+min)
    q2 = Math.floor(Math.random()*(q1-min)+min)
    answer = q1 + q2
}

function move(){
    if (mouseX > h){
        sx = h - 30
    }
    image(SPlane,sx,sy)
}
