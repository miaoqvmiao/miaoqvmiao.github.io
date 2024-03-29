var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth,
    h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight,
    wt = w < h ? w-20 : h-20,
    answer,
    q1, 
    q2,
    maxt = 100,
    mint = -100,
    speed = 0.5,
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
    score = 0,
    d = new Date(),
    lasttime = d.getTime(),
    showtime,
    now = d.getTime(),
    taid

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
}

function draw(){
    speed
    var i
    var j
    if (game == 1){
        randQ()
        game = 2
        setTimeout(()=>{
            var q = new question(answer)
            taid = ques.indexOf(q)
        },TrueAnswerTime * 1000)
    }else if (game == 2){
        showtime = random(800,2000)
        if (now-lasttime > showtime){
            var nrr = Math.ceil(random(0,199))
            if (nrr == answer){
                nrr++
            }
            let q = new question(nrr)
            lasttime = now
        }else{
            now = new Date().getTime()
        }
    }else if (game == 3){
        score++
        game = 1
    }
    background(0)
    image(place,0,0,wt,wt)
    qtext()
    for (i of bullets){
        i.move()
        image(bullet,i.x,i.y,15,30)
        if (i.y < 0){
            bullets.splice(bullets.indexOf(i),1)
        }
    }
    for (i of ques){
        i.move()
        i.show()
        if (i.y > h){
            if (i == ques[taid]){
                score--
            }
            ques.splice(ques.indexOf(i),1)
        }
        for (j of bullets){
            if (collideRectRect(j.x,j.y,15,30,i.x,i.y,i.w,i.h)){
                if (answer == i.nr){
                    ques = []
                    bullets.splice(bullets.indexOf(j),1)
                    speed += 1
                    game = 3
                }else{
                    ques.splice(ques.indexOf(i),1)
                    bullets.splice(bullets.indexOf(j),1)
                    score -= 1
                    speed += 0.7
                }
            }
        }
    }
    move()
}

function randQ(){
    q1 = Math.floor(Math.random()*(maxt+1))
    q2 = Math.floor(Math.random()*(maxt-q1+1)-q1)
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

class question{
    constructor(nr){
        this.nr = nr
        this.w = 90
        this.h = 90
        this.y = this.h - this.h * 2
        this.x = Math.ceil(Math.random() * (wt-35)) - this.w /2
        ques.push(this)
    }
        
    move(){
        this.y += speed
    }
        
    show(){
        image(que,this.x,this.y,this.w,this.h)
        fill(0)
        textAlign(CENTER,CENTER)
        textSize(23)
        text(this.nr,this.x + this.w/2+9,this.y + this.h/2+9)
    }
}

function qtext(){
    fill(255)
    textAlign(CENTER,CENTER)
    textSize(45)
    if (q2 <= 0){
        text(q1 + " - " + Math.abs(q2) + ' ',48*2,wt - 45)
    }else{
        text(q1 + "+" + q2 + " ",wt/2+60,wt/2+60)
    }
    text("Score:" + score,wt/2,wt/2)
}

window.onmouseup = (event)=>{
    if (ua.indexOf('Android') != -1 || ua.indexOf('iPhone') != -1){
        console.log('Fire!')
        var b = new Bullet()
    }
}
