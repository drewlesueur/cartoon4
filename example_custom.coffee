  #initialize, track, realtime, time, meta, onstart, index  ...and handle what you want
  if initialize
    console.log "initialize"
    $("#toon, #toon2").remove()
    $("#stage").append '<img id="toon" style="position: absolute" src="toon1.bmp">'
    $("#stage").append '<img id="toon2" style="position: absolute" src="toon2.bmp">'
    img = $("#toon")
    img2 = $("#toon2") 
    img = $("#toon2").css 'display', "none"
    
    console.log img
    
  else
    if track is "main"
      
      if onstart
        img = $("#toon").css 'display', "none"
        img = $("#toon2").css 'display', ""
      else
        console.log "off"
        console.log index
        if index is 26
          console.log "last"
        img = $("#toon2").css 'display', "none"
        img = $("#toon").css 'display', ""
    else if track is "movement"
      if onstart
        $("#toon, #toon2").css "-webkit-transform",  "scale(3)"
      else  
        $("#toon, #toon2").css "-webkit-transform",  ""
        