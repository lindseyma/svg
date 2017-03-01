var slate = document.getElementById("vimage");
slate.addEventListener("click",dot);
var b = document.getElementById("clear");
b.addEventListener("click",clearAll);

function clearAll(e){
    while(slate.lastChild){
	slate.removeChild(slate.lastChild);
    }
    first=true;
}

//set values for current x and y to connect next circle
var currX;
var currY;
var first=true;

function dot(e){
    var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    var line = document.createElementNS("http://www.w3.org/2000/svg","line");
    
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill","black");

    //always draw dots but if first not true, draw lines!
    if(!first){
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
    first=false;
}

