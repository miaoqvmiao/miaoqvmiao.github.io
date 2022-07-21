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
    bullets = [],
    que,
    ques = [],
    game = 1,
    TrueAnswerTime = Math.ceil(Math.random() * 5),
    score = 0

function setup(){
    createCanvas(wt,wt)
    sx = height /2
    sy = width - 150
    h = height
    bullet = loadImage('./res/bullet.png')
    SPlane = loadImage('./res/youplane.png')
    place = loadImage('./res/bg.png')
    que = loadImage('./res/question.png')
    document.addEventListener("keyup",function (){keyup(window.event)})
    questions()
}

function draw(){
    if (game == 1){
        randQ()
        game = 2
        setTimeout(function (){
            let q = new question(answer)
            ques.push(q)
        },TrueAnswerTime * 1000)
    }else if (game == 3){
        score ++
        game = 1
    }
    background(0)
    image(place,0,0)
    for (let i of bullets){
        i.move()
        image(bullet,i.x,i.y,15,30)
        if (i.y < 0){
            bullets.splice(bullets.indexOf(i),1)
        }
    }
    for (let i of ques){
        i.move()
        image(que,i.x,i.y,i.w,i.h)
        if (i.y > h){
            ques.splice(bullets.indexOf(i),1)
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

function hit(b,q){
    return collideRectRect(b.x,b.y,15,30,q.x,q.y,q.w,q.h)
}

class question{
    constructor(nr){
        this.nr = nr
        this.y = 0
        this.w = 70
        this.h = 70
        this.x = Math.ceil(Math.random() * wt) - this.w /2
        ques.push(this)
    }
        
    move(){
        this.y += speed
    }
}

async function questions(){
    while (1){
        var r = Math.random() * 101
        setTimeout(function (){
            let q = new question(
                Math.abs(
                    Math.ceil(
                        r == answer ? r - 1 : r
                    ) - 1
                )
            )
            ques.push(q)
            })
        },Math.ceil(random(1,3)) * 1000 - 1000)
    }
}
