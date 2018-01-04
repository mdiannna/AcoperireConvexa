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

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}
}


function printVectorPuncte() {
	for(var i=0; i<vectorPuncte.length; i++) {
		updateStatus("(" + vectorPuncte[i].getX() + ", " 
			+ vectorPuncte[i].getY() + "), " );	
	}
	
}

Array.prototype.indexOf = function(elem) {
    for (var i = 0; i < this.length; i++){
        if ((this[i].getX() == elem.getX()) && (this[i].getY() == elem.getY()))
            return i;
    }
    return -1;
}
