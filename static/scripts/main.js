const gallery = document.querySelector('.gallery');

let pos1, pos2, pos3, pos4, targetX, targetY;
let toogle=false;


// core functionality
function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
  }

// move images
function toogleDrag() {
    if (!toogle) {
    gallery.addEventListener('mousedown', function (event) {
        initDrag(event.target);
      });
    } else {
    gallery.removeEventListener('mousedown', doDrag, false);  
    }
}

function initDrag(e) {
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    e.target.style.top = (e.target.offsetTop - pos2) + "px";
    e.target.style.left = (e.target.offsetLeft - pos1) + "px";
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
    console.log(gallery.innerHTML);
    copyToClipboard(gallery.innerHTML);
}
