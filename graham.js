function dist(A, B) {
	return (A.getX() - B.getX()) * (A.getX() - B.getX()) + (A.getY() - B.getY()) * (A.getY() - B.getY());
}

function orientation(A, B, C) {
	var val = (B.getY() - A.getY()) * (C.getX() - B.getX()) - (B.getX() - A.getX()) * (C.getY() - B.getY());
	if(val == 0)return 0;
	return val > 0? 1:2;
}	

var P0 = new Point;

function compare(A, B) {
	var o = orientation(P0, A, B);
	if(o == 0) 
		return (dist(P0, B) >= dist(P0, A))? -1:1;
	return (o == 2)? -1:1;
}

// function removeDuplicateUsingSet(arr){
//     let unique_array = Array.from(new Set(arr));
//     return unique_array;
// }

function convex() {
	updateStatus("Algorithm:");
	updateStatus("----------------");

	var ymin = vectorPuncte[0].getY();
	var min = 0;
	for (var i = 0; i < vectorPuncte.length; i++) {
		var y = vectorPuncte[i].getY();
		if((y < ymin) || (ymin == y && vectorPuncte[i].getX() < vectorPuncte[min].getX())) {
			ymin = vectorPuncte[i].getY();
			min = i;
		}
	}

	// Swap vectorPuncte[0] with vectorPuncte[min]
	var aux = vectorPuncte[0];
	vectorPuncte[0] = vectorPuncte[min];
	vectorPuncte[min] = aux;

	P0 = vectorPuncte[0];
	
	vectorPuncte.sort(compare);

	var hull = [];

	hull.push(vectorPuncte[0]);
	updateStatus("Add point (" + vectorPuncte[0].getX() + ", " + vectorPuncte[0].getY() + ")");
	if ( vectorPuncte.length >1) {
		hull.push(vectorPuncte[1]);
		updateStatus("Add point (" + vectorPuncte[1].getX() + ", " + vectorPuncte[1].getY() + ")");
	}
	if ( vectorPuncte.length >2) {
		hull.push(vectorPuncte[2]);
		updateStatus("Add point (" + vectorPuncte[2].getX() + ", " + vectorPuncte[2].getY() + ")");
	}

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
				updateStatus("Delete point (" + hull[hull.length-1].getX() + ", " + hull[hull.length-1].getY() + ")");
				hull.pop();
	
			}
			hull.push(vectorPuncte[i]);
			updateStatus("Add point (" + vectorPuncte[i].getX() + ", " + vectorPuncte[i].getY() + ")");

		}
	}

	if(vectorPuncte.length>2) {
		hull.push(hull[0]);
	}
	updateStatus("Algorithm done");


	return hull;
}
