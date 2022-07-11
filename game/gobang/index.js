var isBlack = 1,
    chessmanX,
    chessmanY,
    chessboard = new Array(),
    wt = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    chessmanW = 40,
    chessmanH = 40,
    wth,
    ht,
    realX,
    realY,
    colorr = ['Black','White'],
    isend = 0,
    ts = 50,
    tf,
    ua = navigator.userAgent,
    winCM = []

function setup(){
  if (ua.indexOf('Android') == -1){
    createCanvas(640,640)
  }else{
    createCanvas(wt,wt)
  }
  background(255,255,255)
  fill(238,154,73)
  strokeWeight(3)
  let i = 0
  var w = width-1
  var h = height-1
  chessboard.length = 15
  for (;i <= 14;i++){
    chessboard[i] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
  i = 1
  rect(0,0,height,width,25,25,25,25)
  for (;i < 14;i++){
     line((w/14)*i,2,(w/14)*i,h)
  }
  i = 1
  for (;i < 14;i++){
     line(2,(h/14)*i,w,(h/14)*i)
  }
  fill(0,0,0)
  ellipse((w+1)/2,(h+1)/2,7,7)
  wth = w + 1
  ht = h + 1
  textSize(ts)
  //textFont(tf)
}

function draw(){
  
}

onmousedown = function(){
  if (isend != 1){
    noStroke()
    if (mouseX <= height && mouseY <= width){
      chessmanX = Math.round((mouseX + chessmanW / 2) / (wth / 14))
      chessmanY = Math.round((mouseY + chessmanH / 2) / (ht / 14))
      realX = chessmanX * (wth / 14)
      realY = chessmanY * (ht / 14)
      if (chessboard[chessmanY][chessmanX] == 0){
        if (isBlack == 1){
          fill(0,0,0)
          ellipse(realX,realY,chessmanW,chessmanH)
          chessboard[chessmanY][chessmanX] = 1
          isBlack = 2
        }else{
          fill(250,250,250)
          ellipse(realX,realY,chessmanW,chessmanH)
          chessboard[chessmanY][chessmanX] = 2
          isBlack = 1
        }
        console.log(chessboard)
        /*Who is winner*/
	      fill(255,0,0)
        var nIsBlack = isBlack
				strokeWeight(3)
        for (let j of [0]){
          var num = 1
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY + i][chessmanX + i] === chessboard[chessmanY][chessmanX]){
                num++
		            winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY - i][chessmanX - i] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          if (num >= 5){
	          for (let i;i < winCM.length;i++){line(winCM[i][0],winCM[i][1],winCM[i+1][0],winCM[i+1][1])}
            text(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！",wth/2,ht/2)
            console.log(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！")
            isend = 1
            return 1
          }
          num = 1
	  			winCM = []
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY - i][chessmanX + i] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY + i][chessmanX - i] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          if (num >= 5){
						for (let i;i < winCM.length;i++){line(winCM[i][0],winCM[i][1],winCM[i+1][0],winCM[i+1][1])}
            text(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！",wth/2,ht/2)
            console.log(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！")
            isend = 1
            return 1
          }
          num = 1
					winCM = []
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY][chessmanX + i] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY][chessmanX - i] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          if (num >= 5){
						for (let i;i < winCM.length;i++){line(winCM[i][0],winCM[i][1],winCM[i+1][0],winCM[i+1][1])}
            text(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！",wth/2,ht/2)
            console.log(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！")
            isend = 1
            return 1
          }
          num = 1
					winCM = []
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY - i][chessmanX] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          for (let i = 1;i <= 4;i++){
            try{
              if (chessboard[chessmanY + i][chessmanX] === chessboard[chessmanY][chessmanX]){
                num++
								winCM.push([(chessmanX + i) * (wth / 14),(chessmanY + i) * (ht / 14)])
              }else{
                break
              }
            }catch(err){
              console.log(err)
              break
            }
          }
          if (num >= 5){
						for (let i;i < winCM.length;i++){line(winCM[i][0],winCM[i][1],winCM[i+1][0],winCM[i+1][1])}
            text(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！",wth/2,ht/2)
            console.log(colorr[chessboard[chessmanY][chessmanX]-1] + " WIN！")
            isend = 1
            return 1
          }
        }
      }
    }
  }
}
