img = $('<img src="toon2.bmp">')
img.attr "src", "toon1.bmp"


man = $('<img src="man2.bmp">')
man.attr "src", "man1.bmp"


b = ""

initialize = () ->
  
  #add dom to $("#backdrop")
  b = $("#backdrop")
  b.append(man)
  b.append(img)

 
  
custom = (track, realtime, time, meta, onstart, index) ->
  #manipulate dom based of params
  if track is "l" and onstart
    img.attr "src", "toon2.bmp"  
  else if track is "l" and not onstart
    img.attr "src", "toon1.bmp"
  else if track is "a" and onstart
    man.attr "src", "man2.bmp"  
  else if track is "a" and not onstart
    man.attr "src", "man1.bmp"
   


