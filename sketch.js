var input, heading;

function setup() {
  
  createCanvas(300, 200);
  background(178,255,102);
  
  input = createInput();
  input.position(5, 60);

  heading = createElement('h4', 'TITLE');
  heading.position(5, 20);
    
  textAlign(CENTER);
  textSize(50);
}

function draw() {

  var value = input.value();

  //At least 5 products 
  
}


