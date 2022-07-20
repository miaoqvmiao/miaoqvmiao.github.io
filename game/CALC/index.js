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
    h,
    place

function setup(){
    if (navigator.userAgent.indexOf('Android') == -1 && navigator.userAgent.indexOf('iPhone') == -1){
      createCanvas(640,640)
    }else{
      createCanvas(wt-10,wt-10)
    }
    background
    sx = height /2
    sy = width - 100
    h = height
    SPlane = loadImage('./res/plane.png')
    place = loadImage('./res/place.jpg')
}

function draw(){
    background(0)
    image(place,0,0,place.width*((h+480)/place.height),h+480)
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
    image(SPlane,sx,sy,Splane.width*3,SPlane.height*3)
}
