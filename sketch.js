var database,drawing,currentPath,
userDefinedStroke=2

function setup() {
  var canvas=createCanvas(800,400);
  canvas.mousePressed(startPath)
 drawing=[]
currentPath=[]
}

function draw() {
  background("black");  
  if(mouseIsPressed){
    var position={
    x:mouseX,
    y:mouseY  
    }
    currentPath.push(position)
  }
  stroke(255)
  strokeWeight(userDefinedStroke)
  noFill()
  for (var i = 0;i<drawing.length;i++)
  {
    var path= drawing[i]
   beginShape()
   for(var j = 0;j<path.length;j++)
   {
     vertex(path[j].x,path[j].y)
   }
   endShape()
  }
}

function startPath(){
  currentPath=[]
  drawing.push(currentPath)
}