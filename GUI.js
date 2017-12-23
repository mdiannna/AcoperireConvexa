
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


currentVectorPos = 0;

function stepAlgorithm() 
{
	if(currentVectorPos == vectorPuncte.length-1) {
		connectTwoPoints(vectorPuncte[currentVectorPos], vectorPuncte[0]);
		updateStatus("Connect points" + "(" + vectorPuncte[currentVectorPos].x + ", " 
				+ vectorPuncte[currentVectorPos].y + ")    <->    "
				+ "(" + vectorPuncte[0].x + ", " 
				+ vectorPuncte[0].y + ")");
	} 
	if (currentVectorPos < vectorPuncte.length-1){
		connectTwoPoints(vectorPuncte[currentVectorPos], vectorPuncte[currentVectorPos+1]);
		updateStatus("Connect points" + "(" + vectorPuncte[currentVectorPos].x + ", " 
				+ vectorPuncte[currentVectorPos].y + ")    <->    " 
				+ "(" + vectorPuncte[currentVectorPos+1].x + ", " 
				+ vectorPuncte[currentVectorPos+1].y + ")");
	}
	currentVectorPos++;

	if (currentVectorPos > vectorPuncte.length) {
		currentVectorPos=0;
	}

}

function connectDots() {

	var interval = 500;
	var counter = 0
	var nrSteps = vectorPuncte.length;

	if (nrSteps == 0) {
		alert("No points to connect");	
		return;
	}

	printVectorPuncte();

	updateStatus("Starting to connect the dots...")
	document.getElementById("stepAlgorithm").setAttribute("disabled", "true");
	document.getElementById("connectDots").setAttribute("disabled", "true");
	document.getElementById("randomPoint").setAttribute("disabled", "true");

	var i = setInterval(function(){
		stepAlgorithm();

	    counter++;

	    if(counter === nrSteps || nrSteps == 0) {
	        clearInterval(i);
			updateStatus("Dots connected.")
			// document.getElementById("stepAlgorithm").removeAttribute("disabled");
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