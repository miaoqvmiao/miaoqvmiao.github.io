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
    place,
    bullet,
    bullets = []

function setup(){
    if (navigator.userAgent.indexOf('Android') == -1 && navigator.userAgent.indexOf('iPhone') == -1){
      createCanvas(640,640)
    }else{
      createCanvas(wt-10,wt-10)
    }
    sx = height /2
    sy = width - 150
    h = height
    bullet = loadImage('./res/bullet.png')
    SPlane = loadImage('./res/youplane.png')
    place = loadImage('./res/bg.png')
    document.addEventListener("keyup",function (){keyup(window.event)})
}

function draw(){
    background(0)
    image(place,0,0)
    move()
    for (let i of bullets){
        i.move()
        i.show(i.x,i.y,i.width/2,i.height/2)
        if (i.y < 0){
            bullets[bullets.indexOf(i)] = null
        }
    }
}

function randQ(){
    q1 = Math.floor(Math.random()*(max-min+1)+min)
    q2 = Math.floor(Math.random()*(q1-min)+min)
    answer = q1 + q2
}

function move(){
    sx = mouseX
    if (mouseX > (h - 40)){
        sx = h - 40
    }
    if (mouseX < 10){
        sx = 10
    }
    image(SPlane,sx,sy,SPlane.width/10,SPlane.height/10)
}

function keyup(event){
    var k = window.event ? event.keyCode : event.which
    if (k == 70){
        console.log('Fire!')
    }
}

class Bullet{
    constructor(){
        this.x = sx
        this.y = sy
        this.speed = 3
        bullets.push(this)
    }
    
    show(x,y,w,h){
        image(bullet,x,y,w,h)
    }
    
    move(){
        this.y -= this.speed
    }
}
