function setup() {
    createCanvas(5000, 5000, SVG);
    rectMode(CENTER);
  }
  
  function draw() {
  

    //let x = random(0, 5000)
    //let y = random(0, 5000)
    let size = 412
  //  let idkx= x+j-size/2
  //  let idky= y+k-size/2
    
    // x = big squares
    // y = big squares
    //size = 412 = size square

    
    background(255)
    strokeWeight(1)
    stroke(0)
    noFill()
    clear()
    


  
  for (let x= size/2; x <= 5000; x += 500)
  for (let y= size/2; y <= 5000; y += 500){
 
  if (x == size*3){
  x += 1000}
  if (y == size*3){
  y += 1000}

     for (let j = size/10-3; j <= size; j += size/5) {
     for (let k = size/10-3; k <= size; k += size/5) {
      square(x+j-size/2, y+k-size/2, 80) 



   // for (let j = size/10-3; j <= size; j += size/5) {
     // for (let k = size/10-3; k <= size; k += size/5) {
      //square(x+j-size/2, y+k-size/2, 80) 
        //square (j,k, 80)
        
        for(let i = 0; i < random (2,4); i++){
        square(random(x+j-size/2-20, x+j-size/2+20), random(y+k-size/2-20, y+k-size/2+20), random(10, 80))
        }}}}

//save("mySVG.svg")
//print("saved svg")

//noLoop()
}


      

  
  //  for (let x= size + 206; x <= 5000; x += 500)
  //for (let y= size + 206; y <= 5000; y += 500){
  //square (x,y,size)

  //for (let j = 40; j <= 450; j += 83) {
    //for (let k = 40; k <= 450; k += 83) {
      //square(x+j-206, y+k-206, 80) 
  
        
       //for(let i = 0; i < random (2,4); i++){
       //square(random(x+j-206-20, x+j-206+20), random(y+k-206-20, y+k-206+20), random(10, 80))


  //random zwischen 2 und 5 Quadrat pro Gitterquadrat
  //-20,+20 = gleich Abstand Gitterquadrat Mitte und Quadrat Mitte
  //Canvas 500x500 Pixel. Base square 400x400 Pixel. Seite also je 50 Pixel. rectMode --> innere der Form als Bezugspunkt. Gitter = 80X80 Pixel --> /2 = 40Pixel. Darauf folgt: 50+40=90 oder 450-40=410.
