
function rotation(elem,mask,bg){
  
    //getting degrees from progress 
    const progress = parseInt(document.getElementById("progress").value);
    const deg = 360 * progress / 100;
    
    //reset values 
      elem.style.height = "100%";
      elem.style.width = "100%";
      elem.style.left = "-50%";
      elem.style.top = "-50%";
      mask.style.left = "-50%";
      mask.style.backgroundColor = getCssProperty(bg, "background-color");
     
    //rotating progress bar
    elem.style.MozTransform="rotate("+deg+"deg)";
    elem.style.WebkitTransform="rotate("+deg+"deg)";
    elem.style.OTransform="rotate("+deg+"deg)";
    elem.style.msTransform="rotate("+deg+"deg)";
   
    //degrees to radians
     const rad = deg*(Math.PI/180);
     
    //finding element's parametres
     function getCssProperty(elem1, property){
      return window.getComputedStyle(elem1,null).getPropertyValue(property);
     }
     const w = elem.offsetWidth;
     const h = elem.offsetHeight;
     const left = parseInt(getCssProperty(elem, "left"))*w/100;
     const top = parseInt(getCssProperty(elem, "top"))*h/100;
     var x1, y1;
     const val = document.getElementById('value').getElementsByTagName("span")[0];
    
      // Center of rotating by default set in the center of an element. 
      // We have to make rotation around bottom right corner of the element.
      // Counting distance from an old center to new one 
      const R = w * (Math.sqrt(2))/2;
    
      // Changing new coord of rotated element depending on its position
      if (progress <= 25) {
        x1 = - Math.sin((Math.PI/4) - rad)*R;
        y1 = - Math.cos((Math.PI/4) - rad)*R;
      }
      else if (25 < progress && progress <= 50) {
        x1 = - Math.sin((Math.PI/4) - rad)*R;
        y1 = - Math.cos((Math.PI/4) - rad)*R - w/2;
        elem.style.height = 2*h +"px";
       }
      else if (50 < progress && progress <= 75) {
        x1 = - Math.sin((Math.PI/4) - rad)*R;
        y1 = - Math.cos((Math.PI/4) - rad)*R;
        mask.style.backgroundColor = getCssProperty(elem, "background-color");
        mask.style.left = w/2 +"px";
     }
      else if (75 < progress && progress <= 100) {
        x1 = - Math.sin((Math.PI/4) - rad)*R;
        y1 = - Math.cos((Math.PI/4) - rad)*R;
        mask.style.backgroundColor = getCssProperty(elem, "background-color");
        mask.style.left = w/2 +"px";
        elem.style.height = 2*h +"px";
        y1 = - Math.cos((Math.PI/4) - rad)*R - w/2;
     }
      else {
        alert('write number between 1 and 100');
        progress = y1 = x1 = 0;
      }
    
    //setting new coord
    elem.style.top = y1 +"px";
    elem.style.left = x1 +"px";
     
    val.innerHTML = progress + "%";
     
   }
   
   const elem = document.getElementById("ticker");
   const mask = document.getElementById("mask");
   const bg = document.getElementById("bg");