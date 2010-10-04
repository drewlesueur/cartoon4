  #initialize, track, realtime, time, meta, onstart, index  ...and handle what you want
  if initialize
    console.log "initialize"
    $("#toon, #toon2").remove()
    $("#stage").append '<img id="toon" style="position: absolute" src="toon1.bmp">'
    $("#stage").append '<img id="toon2" style="position: absolute" src="toon2.bmp">'
    img = $("#toon")
    img2 = $("#toon2") 
    console.log img
    
  else
    if onstart
      console.log img, img2
      img = $("#toon").css 'display', "none"
      img = $("#toon2").css 'display', ""
    else
      img = $("#toon2").css 'display', "none"
      img = $("#toon").css 'display', ""