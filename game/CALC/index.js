var wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    answer,
    q1,
    q2,
    max = 100,
    min = -100,
    speed = 2

function setup(){
    if (navigator.userAgent.indexOf('Android') == -1 || navigator.userAgent.indexOf('iPhone') == -1){
      createCanvas(640,640)
    }else{
      createCanvas(wt,wt)
    }
}

function draw(){
    background(0)
}

function randQ(){
    q1 = Math.floor(Math.random()*(max-min+1)+min)
    q2 = Math.floor(Math.random()*(q1-min)+min)
    answer = q1 + q2
}

function move(){
    var a = document.getElementsByClassName("answer")
    for (let i in a){
        a[i].style.top += speed
    }
}
