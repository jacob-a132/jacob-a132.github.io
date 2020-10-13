var msg = document.getElementById('msg');
var score_lbl = document.getElementById('score');

var border_img = 'blacksquare.png';
var head_img = 'greensquare.png';
var head_img1 = 'greensquare.png';
var head_img2 = 'greensquare.png';
var apple_img = 'redsquare.png';

// table generation -- dun dun duuunnnn
var tbl = document.getElementById('table');
var tbdy = document.createElement('tbody');
var width = 24;
var height = 14;
for (var i = 0; i < height; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            var img = new Image(32,32);
            img.setAttribute("id", j+","+i);
            if(i == 0 || j == 0 || i == height-1 || j == width-1){
                img.src = border_img;
            }
            else{
                img.src = 'blanksquare.png';
            }
            td.appendChild(img)
            tr.appendChild(td)
    }
    tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);

document.getElementById('resetButton').onclick = reset;
document.getElementById('classicButton').onclick = set_classic;
document.getElementById('facesButton').onclick = set_faces;

// define some variables
var apple_start = '15,9';
var apple = apple_start; 
document.getElementById(apple).src = apple_img;
var grow = false;
var move_queue = ['E'];
var gameover = true;
gameover = true;
msg.innerHTML = 'press [space] or [enter] to start';
var speed = 1000/document.getElementById('speed').value;
var score = 0;

// Snek object
function Snek() {
  class Snek {
    constructor() {
      this.length = 4;
      this.dir = 'E';
      var start = 6;
      this.trail = [3+start+',9', 2+start+',9', 1+start+',9', start+',9'];
      for (var i = 1; i < this.trail.length; i++) {
          document.getElementById(this.trail[i]).src = 'greensquare.png';
      };
      document.getElementById(this.trail[0]).src = head_img;
    }
    add(dir){
      if(dir == 'W') head_img = head_img2;
      if(dir == 'E') head_img = head_img1;
      this.dir = dir;
      var head = this.trail[0].split(',');
      var ahead = '';
      if(dir == 'E')
          ahead = (parseInt(head[0])+1)+','+head[1];
      if(dir == 'W')
          ahead = (parseInt(head[0])-1)+','+head[1];
      if(dir == 'N')
          ahead = head[0]+','+(parseInt(head[1])-1);
      if(dir == 'S')
          ahead = head[0]+','+(parseInt(head[1])+1);
      head = ahead.split(',');
  
      if(head[0] == 0 || head[1] == 0 || head[0] == width-1 || head[1] == height-1
          || this.trail.includes(ahead)){
          gameover = true;
          grow = true;
          clearInterval(intervalId);
          msg.innerHTML = 'GAMEOVER: press [space] or [enter] to restart';
          return;
      }
      var ate = false;
      while(ahead == apple || this.trail.includes(apple)){
          var x = Math.floor(Math.random() * (width - 2)) + 1;
          var y = Math.floor(Math.random() * (height - 2)) + 1;
          apple = x+','+y;
          ate = true;
      }
      if(ate == true){
          document.getElementById(apple).src = apple_img;
          score++;
          grow = true;
          score_lbl.innerHTML = 'Score: ' + score;
      }
      document.getElementById(this.trail[0]).src = 'greensquare.png';
      this.trail.unshift(ahead);
      document.getElementById(ahead).src = head_img;
    }
    remove(){
      document.getElementById(this.trail.pop()).src = 'blanksquare.png';
    }
  }

  return new Snek();
}


var s = Snek();

function move(){
    if (window.location.hash.endsWith('/snek')){
        var new_dir = s.dir;
        if(move_queue.length > 0)
            new_dir = move_queue.shift();
        s.add(new_dir);
        if(grow == false)
            s.remove();
        else
            grow = false;
    }
}

function set_classic(){
    border_img = 'blacksquare.png';
    head_img = 'greensquare.png';
    head_img1 = 'greensquare.png';
    head_img2 = 'greensquare.png';
    apple_img = 'redsquare.png';
    document.getElementById(apple).src = apple_img;
    document.getElementById(s.trail[0]).src = head_img;
    for (var i = 0; i < height; i++) {
        document.getElementById('0,'+i).src = border_img;
        document.getElementById((width-1)+','+i).src = border_img;
    }
    for (var j = 0; j < width; j++) {
        document.getElementById(j+',0').src = border_img;
        document.getElementById(j+','+(height-1)).src = border_img;
    }
}

function set_faces(){
    border_img = 'ali.png';
    head_img = 'arsala_right.png';
    head_img1 = 'arsala_right.png';
    head_img2 = 'arsala_left.png';
    apple_img = 'santi.png';
    document.getElementById(apple).src = apple_img;
    document.getElementById(s.trail[0]).src = head_img;
    for (var i = 0; i < height; i++) {
        document.getElementById('0,'+i).src = border_img;
        document.getElementById((width-1)+','+i).src = border_img;
    }
    for (var j = 0; j < width; j++) {
        document.getElementById(j+',0').src = border_img;
        document.getElementById(j+','+(height-1)).src = border_img;
    }
}

function reset(){
    for (var i = 1; i < height-1; i++) {
        for (var j = 1; j < width-1; j++) {
            document.getElementById(j+','+i).src = 'blanksquare.png';
        }
    }
    s = new Snek();
    move_queue = ['E'];
    grow = false;
    gameover = false;
    apple = apple_start;
    document.getElementById(apple).src = apple_img;
    score = 0;
    msg.innerHTML = '';
    score_lbl.innerHTML = 'Score: 0';
    var den = parseInt(document.getElementById('speed').value);
    if(den <= 0 || isNaN(den)) den = 6;
    speed = parseInt(1000/den);
    intervalId = window.setInterval(move, speed);
}

document.addEventListener('keydown', function(event) {

    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault();
    }

    if(event.keyCode == 37 || event.keyCode == 65) {
        if (s.dir == 'N' || s.dir == 'S')
            move_queue = ['W'];
        else if (move_queue.length > 0)
            move_queue.push('W');
    }
    else if(event.keyCode == 38 || event.keyCode == 87) {
        if(s.dir == 'E' || s.dir == 'W')
            move_queue = ['N'];
        else if (move_queue.length > 0)
            move_queue.push('N');
    }
    else if(event.keyCode == 39 || event.keyCode == 68){
        if (s.dir == 'N' || s.dir == 'S')
            move_queue = ['E'];
        else if (move_queue.length > 0)
            move_queue.push('E');
    }
    else if(event.keyCode == 40 || event.keyCode == 83) {
        if(s.dir == 'E' || s.dir == 'W')
            move_queue = ['S'];
        else if (move_queue.length > 0)
            move_queue.push('S');
    }
    if((event.keyCode == 13 || event.keyCode == 32) && gameover == true) {
        reset();
    }
});

//var intervalId = window.setInterval(move, speed);
