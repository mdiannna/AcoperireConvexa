alert("Graham's scan!");
console.log("lalalala");

class Point {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}

	showValues() {
		alert("x:" + this.x +"  y:" + this.y);
	}
}

var P = new Point();
P.showValues();

var vectorPuncte = [];

var P = new Point(5,4);
P.showValues();
alert(P.x);

vectorPuncte.push(P);

alert("x:" + vectorPuncte[0].x + "   y:" +vectorPuncte[0].y );


