var wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

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
