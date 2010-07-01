function rnd(low, high) {
   return Math.floor(Math.random() * (high-low+1)) + low
}
 
  function tokenize(line, delimeter ) {    
    delimeter = delimeter || /:,+/
    line = line.split("");
    i = 0;
    var state = "out";
    var cur_token = []
    var tokens = [];
    var last_chr = "";
   
    while (i < line.length) {
        chr = line[i];
        if (chr == " " && state == "out") {
            tokens.push(cur_token.join(""))
            cur_token = []
        } else if (chr == '"' && state == "out") {
            state = "in";
            cur_token.push("'")
        } else if (chr == '"' && state == "in" && last_chr != "\\") {
            state = "out";
        } else if (chr.match(delimeter) && state == "out") {
           tokens.push(cur_token.join(""))
           tokens.push(chr)
           cur_token = []
        } else {
             cur_token.push(chr)
        }
        
        last_chr = chr;
        i++
    }
    if (cur_token.length > 0) {
        tokens.push(cur_token.join(""))
    }
    return tokens
}
 
function array_split(splitter, arr) {
    var ret = []
    var cur = []
    var word;
    for (var i in arr) {
        word = arr[i];
        if (word == splitter) {
          if (cur.length > 0) {
            ret.push(cur)
          }
          cur = []
        } else {
          cur.push(word)
        }
    }
    if (cur.length > 0) {
        ret.push(cur)
    }
    
    return ret;
}
 
//counting keys in an object
function count(foo) {
    var count = 0;
    for (var k in foo) {
        if (foo.hasOwnProperty(k) && k != "toJSON") {
           ++count;
        }
    }
    return count;
}
 
function _s(val, start, end) {
  var need_to_join = false;
  var ret = []
  if (typeof val == "string") {
    val = val.split("")
    need_to_join = true;
  }
  if (start >= 0) {
  } else {
      start = val.length + start
  }
  
  if (end == null) {
     ret = val.slice(start)
  } else {
      if (end < 0) {
        end = val.length + end; 
      } else {
        end = end + start
      }
      ret = val.slice(start, end)
  }
    
  if (need_to_join) {
      return ret.join("")
  } else {
      return ret;
  }
}
 
 
function _sup(s,o) {
    return s.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};
 
 
function array_to_object(a) {
   ret = {};
   for (i = 0; i < a.length; i++) {
       ret[a[i]] = "";
   }
   return ret
}
 
function compare_array(a,b) {
   if (is_array(a)) {
      a = array_to_object(a);
   }
   if (is_array(b)) {
      b = array_to_object(b)
   }
 
   var l = {} //left extra
   var r = {} //right extra
   var d = {} //different values
   for (var i in a) {
      if (!(i in b)) {
          l[i] = a[i]
      } else if (a[i] != b[i]){
         d[i] = [a[i], b[i]]
      }
   }
 
   for (var i in b) {
      if (!(i in a)) {
          r[i] = b[i]
      }
   }
   return [l,r,d]
} 
 
function is_array(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}