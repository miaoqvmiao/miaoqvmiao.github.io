var wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    answer,
    q1,
    q2

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

function random(){
  q1 = Math.ceil(Math.random()*99)
}
