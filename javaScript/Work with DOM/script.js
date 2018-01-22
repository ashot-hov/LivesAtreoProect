function deg(o){
            block.style.transform = "rotate(" + o.value + "deg)";
            uts.innerHTML = o.value + "°";
        }
        
      function rs(a){
          precent.innerHTML = a.value;
          block.style.borderRadius = a.value + "%";
      }
        btn.onclick = function(e){
            block.style.width = w.value;
            block.style.height = h.value;
            block.style.background = b.value;
            block.style.border = rs.value;
            block.style.boxShadow = sh.value;
        }