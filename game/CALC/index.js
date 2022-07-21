var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
    h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight,
    wt = w < h ? w : h,
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
    createCanvas(wt,wt)
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
    for (let i of bullets){
        i.move()
        image(bullet,i.x,i.y,15,30)
        if (i.y < i.height/15){
            bullets.splice(bullets.indexOf(i),1)
        }
    }
    move()
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
    image(SPlane,sx,sy,SPlane.width/7,SPlane.height/7)
}

function keyup(event){
    var k = window.event ? event.keyCode : event.which
    if (k == 70){
        console.log('Fire!')
        var b = new Bullet()
        bullets.push(b)
    }
}

class Bullet{
    constructor(){
        this.x = sx + bullet.width / 2
        this.y = sy
        this.speed = 3
        bullets.push(this)
    }
    
    move(){
        this.y -= this.speed
    }
}
