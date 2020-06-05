let bubbles = [];
var mic;

function setup() {
    createCanvas(800,600);
    background(0);  
    mic = new p5.AudioIn();
    mic.start();
}


function draw() {
    background(0);
    // for(let bub of bubbles){
    //     bub.show();
    //     bub.jitter();
    //     bub.remove();
    // }
    // textSize(32);
    // fill(225);
    // textAlign(CENTER);
    // text("Press SPACE to clear.",width/2,height-10);

    displayAudioLevel();

}

function displayAudioLevel(){
    var vol = mic.getLevel();
    var al = vol * height;
    //console.log(al);

    push();
    translate(width/2,height);
 //   if(al > (height * 0.1)){  
    fill(255);
    noStroke();
    rect(0,0,20,-al);   
    // fill(255);
    // ellipse(width/2,height/2, vol * 100);
  //  }
    pop();
}


// function mousePressed() {
//     for(let i=0; i<100; i++){
//         let ts = random(15,20);
//         let tx = random(ts,width-ts);
//         let ty = random(ts,height-ts);
        
//         let bub = new Bubbles(tx,ty,ts);
//         bubbles.push(bub);
//        }
//   }

// function keyPressed() {
//     if (keyCode == 32) {
//       for(let j = bubbles.length; j > 0; j--){
//           bubbles.pop(bubbles[j]);
//       }
//     }
// }


