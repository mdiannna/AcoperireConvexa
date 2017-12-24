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

/*
var P = new Point();
P.showValues();

var vectorPuncte = [];

var P = new Point(5,4);
P.showValues();
alert(P.x);

vectorPuncte.push(P);

alert("x:" + vectorPuncte[0].x + "   y:" +vectorPuncte[0].y );
*/

function swap(Point A, Point B) {
	Point aux;
	aux = A;
	A = B;
	B = aux;
}

function dist(Point A, Point B) {
	return (A.getX() - B.getX()) * (A.getX() - B.getX()) + (A.getY() - B.getY()) * (A.getY() - B.getY());
}

function orientation(Point A, Point B, Point C) {
	var val = (B.getY() - A.getY()) * (C.getX() - B.getX()) - (B.getX() - A.getX()) * (C.getY() - B.getY());
	if(val == 0)return 0;
	return val > 0? 1:2;
}	

var P0 = new Point;

function compare(Point A, Point B) {
	var o = orientation(P0, A, B);
	if(o == 0) 
		return (dist(P0, B) >= dist(p0, A))? -1:1;
	return (o == 2)? -1:1;
}

function convex() {
	var ymin = vectorPuncte[0].getY();
	var min = 0;
	for (var i = 0; i < vectorPuncte.length; i++) {
		var y = vectorPuncte[i].getY();
		if((y < ymin) || (ymin == y && vectorPuncte[i].getX() < vectorPuncte[min].getX())) {
			ymin = vectorPuncte[i].getY();
			min = i;
		}
	}
	swap(vectorPuncte[0], vectorPuncte[min]);
	P0 = vectorPuncte[0];
	
	vectorPuncte.sort(compare);

	var hull = [];

	hull.push(vectorPuncte[0]);
	hull.push(vectorPuncte[1]);
	hull.push(vectorPuncte[2]);

	var puncte = [];

	for (var i = 1; i < vectorPuncte.length; i++) {
		puncte[i] = vectorPuncte[i];
	}

	var m = 1;
	for (var i = 1; i < vectorPuncte.length; i++) {
		while(i < vectorPuncte.length - 1 && orientation(P0, puncte[i], puncte[i + 1]) == 0) {
			i++;
		}

		puncte[m] = vectorPuncte[i];
		m++;
	}

	if(m >= 4) {
		for (var i = 3; i < m; i++) {
			while(orientation(hull[hull.length - 2], hull[hull.length - 1], puncte[i]) != 2) {
				hull.pop();
			}
			hull.push(vectorPuncte[i]);
		}
	}
}