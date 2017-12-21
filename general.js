var vectorPuncte = [];

class Point {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}

	showValues() {
		// alert("x:" + this.x +"  y:" + this.y);
		console.log("x:" + this.x +"  y:" + this.y);
		updateStatus("x:" + this.x +"  y:" + this.y + "\n");
	}
}


function printVectorPuncte() {
	for(var i=0; i<vectorPuncte.length-1; i++) {
		updateStatusInline("(" + vectorPuncte[i].x + ", " 
			+ vectorPuncte[i].y + "), " );	
	}
	
}