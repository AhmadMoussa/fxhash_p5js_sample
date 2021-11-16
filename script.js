function setup(){
    // square dimensions
    w = min(windowWidth, windowHeight)
    createCanvas(w,w);
}

function draw(){
  background(220);
  ellipse(w/2,w/2,w/2);
}
