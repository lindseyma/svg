var slate = document.getElementById("vimage");
slate.addEventListener("click",dot);
var b = document.getElementById("clear");

//set values for current x and y to connect next circle
//start w/ values of -1 to check if first dot or not
var currX = -1;
var currY = -1;

function dot(e){
    var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    var line = document.createElementNS("http://www.w3.org/2000/svg","line");
    
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill","black");

    if(currX>-1 && currY>-1){
	line.setAttribute("x1",currX);
	line.setAttribute("y1",currY);
	line.setAttribute("x2",e.offsetX);
	line.setAttribute("y2",e.offsetY);
	line.setAttribute("stroke","black");
	slate.appendChild(line);
    }
    //set new currX/Y vals
    currX=e.offsetX;
    currY=e.offsetY;
    slate.appendChild(circle);
}