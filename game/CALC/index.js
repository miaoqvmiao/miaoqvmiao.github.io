var wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    answer,
    q1,
    q2,
    max = 100,
    min = -100,
    speed = 2,
    SPlane = loadImage('./res/plane.png'),
    sx,
    sy,
    h,
    place = loadImage('./res/place.jpg')

function setup(){
    if (navigator.userAgent.indexOf('Android') == -1 || navigator.userAgent.indexOf('iPhone') == -1){
      createCanvas(640,640)
    }else{
      createCanvas(wt,wt)
    }
    background
    sx = height /2
    sy = width - 100
    h = height
}

function draw(){
    image(place,h/2,h/2)
    move()
}

function randQ(){
    q1 = Math.floor(Math.random()*(max-min+1)+min)
    q2 = Math.floor(Math.random()*(q1-min)+min)
    answer = q1 + q2
}

function move(){
    sx = mouseX
    if (mouseX > (h - 30)){
        sx = h - 30
    }
    if (mouseX < 10){
        sx = 10
    }
    image(SPlane,sx,sy)
}
