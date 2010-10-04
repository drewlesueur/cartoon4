img = $('<img src="toon2.bmp">')
img.attr "src", "toon1.bmp"

b = ""

alert "test"
initialize = () ->
  
  #add dom to $("#backdrop")
  b = $("#backdrop")
  b.append(img)
  console.log()
  
custom = (track, realtime, time, meta, onstart, index) ->
  #manipulate dom based of params
  console.log track, onstart
  if track is "main" and onstart
    img.attr "src", "toon2.bmp"  
  else if track is "main" and not onstart
    img.attr "src", "toon1.bmp"
   




