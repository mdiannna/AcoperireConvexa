
var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

canvas.onclick = function(){
	var x = event.clientX-this.offsetLeft+window.pageXOffset;
	var y = event.clientY-this.offsetTop+window.pageYOffset;
	ctx.fillRect( x, y, 5, 5);
	var P = new Point(x, y);
	P.showValues();

	vectorPuncte.push(P);
}


function connectTwoPoints(p1, p2)
{
	ctx.moveTo(p1.x, p1.y);
	ctx.lineTo(p2.x, p2.y);
	ctx.stroke();
}


var currentVectorPos;

function stepAlgorithm(hull) 
{
	if (currentVectorPos < hull.length-1){
		connectTwoPoints(hull[currentVectorPos], hull[currentVectorPos+1]);
		updateStatus("Connect points" + "(" + hull[currentVectorPos].x + ", " 
				+ hull[currentVectorPos].y + ")    <->    " 
				+ "(" + hull[currentVectorPos+1].x + ", " 
				+ hull[currentVectorPos+1].y + ")");
	}
	currentVectorPos++;

	if (currentVectorPos > hull.length) {
		currentVectorPos=0;
	}

}


function algorithm() {
	currentVectorPos = 0;
	initHull();
	updateStatus("----------------");
	var hull = convex();
	updateStatus("----------------\n");

	updateStatus("Starting to connect the dots...")
	drawHull(hull);

}

function initHull() {
	document.getElementById("stepAlgorithm").setAttribute("disabled", "true");
	document.getElementById("connectDots").setAttribute("disabled", "true");
	document.getElementById("randomPoint").setAttribute("disabled", "true");
}

function drawHull(hull) {
	var interval = 500;
	var counter = 0
	var nrSteps = hull.length;

	var i = setInterval(function(){
		stepAlgorithm(hull);

	    counter++;

	    if(counter === nrSteps || nrSteps == 0) {
	        clearInterval(i);
			updateStatus("Dots connected. Done.")
	    }
	}, interval);
}

function reset() {
	location.reload();
}

function randomPoint() {
	var x = Math.floor(Math.random() * 940 + 10)
	var y = Math.floor(Math.random() * 490 + 10)
	ctx.fillRect( x, y, 5, 5);
	var P = new Point(x, y);
	P.showValues();

	vectorPuncte.push(P);
}


function exportPoints() {
		var text = '';
		for(var i=0; i<vectorPuncte.length; i++) {
			text += "(" + vectorPuncte[i].x + ", " + vectorPuncte[i].y + ") ";
		}		
		updateStatus("Export points:");
		updateStatus(text);
	}
