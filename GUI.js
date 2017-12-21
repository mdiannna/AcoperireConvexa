
var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

canvas.onclick = function(){
	// alert(event.clientX);
	// alert(event.clientY);
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
		// delay(1000);
	// setTimeout( , 3000);
}


// function connectDots() 
// {
// 	for(var i=1; i<vectorPuncte.length; i++) {
// 		var test = connectTwoPoints(vectorPuncte[i-1], vectorPuncte[i]);
// 	}
// }

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
	printVectorPuncte();
	updateStatus("Starting to connect the dots...")
	var interval = 500;
	var counter = 0
	var nrSteps = vectorPuncte.length;
	var i = setInterval(function(){
		stepAlgorithm();

	    counter++;

	    if(counter === nrSteps) {
	        clearInterval(i);
			updateStatus("Dots connected.")
	    }
	}, interval);
}

function reset() {
	// // alert("reset();")
	// // vectorPuncte.length = 0;
	// // vectorPuncte.splice(0,vectorPuncte.length);
	// updateStatus("length:" + vectorPuncte.length);
	// // printVectorPuncte();

	// while(vectorPuncte.length > 0) {
	//     vectorPuncte.pop();
	// }
	// currentVectorPos = 0;

	// vectorPuncte = [];
	// updateStatus("length:" + vectorPuncte.length);
	// // printVectorPuncte();

	// ctx.setTransform(1, 0, 0, 1, 0, 0);

	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	// clearStatus();

	location.reload();
}