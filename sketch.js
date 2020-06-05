let bubbles = [];


function setup() {
    createCanvas(800,600);
    background(0);  

}

function draw() {
    background(0);
    for(let bub of bubbles){
        bub.show();
        bub.jitter();
        bub.remove();
    }
    textSize(32);
    fill(225);
    textAlign(CENTER);
    text("Press SPACE to clear.",width/2,height-10);
}

function mousePressed() {
    for(let i=0; i<100; i++){
        let ts = random(15,20);
        let tx = random(ts,width-ts);
        let ty = random(ts,height-ts);
        
        let bub = new Bubbles(tx,ty,ts);
        bubbles.push(bub);
       }
  }

  function keyPressed() {
    if (keyCode == 32) {
      for(let j = bubbles.length; j > 0; j--){
          bubbles.pop(bubbles[j]);
      }
    }
  }
