function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  colorMode(HSB);
  // background(frameCount % 360, 100, 100);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  colorMode(RGB);
}
