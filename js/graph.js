// the graph object
var Graph = {};

/********FUNCTIONS*************************/

/*START OF Graph.draw() FUNCTION*/
/*Draw function Will use the JSON like data object
to populate the canvas with the diagram*/
Graph.draw = function ( data ) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// starting points for every plot
	var widthX= c.getAttribute("width");
	var heightY = c.getAttribute("height");

	var startX = widthX / 2; 
	var startY = heightY / 2;
	var count = 0;

	// initialize the line
	ctx.beginPath();
	ctx.moveTo(startX, startY);

	// drawing edges
	for ( var key in data ) {
		if ( Array.isArray( data[key] ) && data[key].length === 3 ) {
			// drawing the edges
			
			// for north
			if ( data[key][2] === "N" ) {
				ctx.lineTo( startX, startY - ( count * 70 ) );
			}
			// for south
			if ( data[key][2] === "S" ) {
				ctx.lineTo( startX, startY + ( count * 70 ) );
			}
			// for east
			if ( data[key][2] === "E" ) {
				ctx.lineTo( startX + ( count * 70 ), startY );
			}
			// for west
			if ( data[key][2] === "W" ) {
				ctx.lineTo( startX - ( count * 70 ), startY );
			}

		} else {
			console.log( data );
			throw new Error( "Invalid Data" );
		}

		count++; 
	}

	ctx.strokeStyle = 'Black';
	ctx.lineWidth = 3;
	ctx.stroke();
	ctx.fillStyle = 'Gray';
	ctx.fill();

	// drawing the vertices
	count = 0;

	for ( var key in data ) {
		ctx.beginPath();

		if ( Array.isArray( data[key] ) && data[key].length === 3 ) {
			// for north
			if ( data[key][2] === "N" ) {				
				ctx.arc( startX, startY - ( count * 70 ),10,0,2*Math.PI);
			}
			// for south
			if ( data[key][2] === "S" ) {
				ctx.arc( startX, startY + ( count * 70 ),10,0,2*Math.PI);
			}
			// for east
			if ( data[key][2] === "E" ) {
				ctx.arc( startX + ( count * 70 ), startY,10,0,2*Math.PI);
			}
			// for west
			if ( data[key][2] === "W" ) {				
				ctx.arc( startX - ( count * 70 ), startY,10,0,2*Math.PI);
			}

		} else {
			console.log( data );
			throw new Error( "Invalid Data" );
		}

		ctx.stroke();
		ctx.fillStyle = 'Orange';
	    ctx.fill();

	    count++; 
	}

	// naming the vertices
	count = 0;
	ctx.font = "30px Arial";
	ctx.fillStyle = 'Black';
	for ( var key in data ) {
		
		if ( Array.isArray( data[key] ) && data[key].length === 3 ) {
			// for north
			if ( data[key][2] === "N" ) {				
				ctx.fillText(data[key][0],startX, startY - ( count * 70 ) - 10 );
			}
			// for south
			if ( data[key][2] === "S" ) {
				ctx.fillText(data[key][0],startX, startY + ( count * 70 ) - 10 );
			}
			// for east
			if ( data[key][2] === "E" ) {
				ctx.fillText(data[key][0],startX + ( count * 70 ), startY - 10);
			}
			// for west
			if ( data[key][2] === "W" ) {				
				ctx.fillText(data[key][0],startX - ( count * 70 ), startY - 10 );
			}

		} else {
			console.log( data );
			throw new Error( "Invalid Data" );
		}

		
	    count++; 
	}

	// save the state of the canvas 
	ctx.save();
};
/*END OF Graph.draw() FUNCTION*/


/*****************************************************************************************/


/*START OF Graph.add() FUNCTION*/
/* This function will add a
new node to an existing node
by checking the current data object.
It requires add[] to be in the format ["Node to draw from","Name of node to be added","Direction"]*/
Graph.add = function ( add ) {
	// instantiating canvas values
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// x and y will be recalculated based on where
	// value is found in current data object

	// starting points for every plot
	var widthX = c.getAttribute("width");
	var heightY = c.getAttribute("height");

	var startX = widthX / 2; 
	var startY = heightY / 2;

	var count = 0;

	// draw the edge
	for ( var key in data ) {
		//console.log(data[key][0]);
		//console.log(count);

		ctx.beginPath();
		ctx.moveTo( startX,startY);
		
		// move to the correct place
		// for north
		if ( data[key][2] === "N" ) {
			ctx.moveTo( startX, startY - ( count * 50 ) );
		}
		// for south
		if ( data[key][2] === "S" ) {
			ctx.moveTo( startX, startY + ( count * 50 ) );
		}
		// for east
		if ( data[key][2] === "E" ) {
			ctx.moveTo( startX + ( count * 50 ), startY );
		}
		// for west
		if ( data[key][2] === "W" ) {
			ctx.moveTo( startX - ( count * 50 ), startY );
		}
		
		ctx.font = "30px Arial"; // for naming

		// when it is in the correct place, draw the line
		if( data[key][0] === add[0] ) { // the node we are adding to exists			
			if ( add[2] === "N" ) {
				ctx.lineTo( startX, startY - ( count * 50 ) );
				ctx.strokeStyle = 'Black';
				ctx.lineWidth = 3;
				ctx.stroke();
				ctx.fillStyle = 'Gray';
				ctx.fill();
				// name the vertex
				ctx.fillStyle = 'Black';
				ctx.fillText(add[1], startX, startY - ( count * 50 ) );
				// draw vertex
				ctx.beginPath();				
				ctx.arc( startX, startY - ( count * 50 ),10,0,2*Math.PI);
				ctx.stroke();
				ctx.fillStyle = 'Orange';
			    ctx.fill();
				console.log( data[key][0] );
				console.log( add[0] );

			}
			// for south
			if ( add[2] === "S" ) {
				ctx.lineTo( startX, startY + ( count * 50 ) );
				ctx.strokeStyle = 'Black';
				ctx.lineWidth = 3;
				ctx.stroke();
				ctx.fillStyle = 'Gray';
				ctx.fill();
				// name the vertex
				ctx.fillStyle = 'Black';
				ctx.fillText(add[1], startX, startY + ( count * 50 ) );
				// draw vertex
				ctx.beginPath();				
				ctx.arc( startX, startY + ( count * 50 ),10,0,2*Math.PI);
				ctx.stroke();
				ctx.fillStyle = 'Orange';
			    ctx.fill();
			}

			// for east
			if ( add[2] === "E" ) {
				ctx.lineTo( startX + ( count * 50 ), startY );
				ctx.strokeStyle = 'Black';
				ctx.lineWidth = 3;
				ctx.stroke();
				ctx.fillStyle = 'Gray';
				ctx.fill();
				// name the vertex
				ctx.fillStyle = 'Black';
				ctx.fillText(add[1], startX + ( count * 50 ), startY );
				// draw vertex	
				ctx.beginPath();			
				ctx.arc( startX + ( count * 50 ), startY,10,0,2*Math.PI);
				ctx.stroke();
				ctx.fillStyle = 'Orange';
			    ctx.fill();
			}

			// for west
			if ( add[2] === "W" ) {
				ctx.lineTo( startX - ( count * 50 ), startY );
				ctx.strokeStyle = 'Black';
				ctx.lineWidth = 3;
				ctx.stroke();
				ctx.fillStyle = 'Gray';
				ctx.fill();
				// name the vertex
				ctx.fillStyle = 'Black';
				ctx.fillText(add[1], startX - ( count * 50 ), startY );
				// draw vertex	
				ctx.beginPath();			
				ctx.arc( startX - ( count * 50 ), startY,10,0,2*Math.PI);
				ctx.stroke();
				ctx.fillStyle = 'Orange';
			    ctx.fill();
			}			
		} 
		count++;
	}

	// save canvas state
	ctx.save();

	// once node is added successfully, add the new plot point to
	// the data object
	var length = 0;
	for( var key in data){
		length++;
	}
	var newKey = length;
	data[newKey] = [add[1],"",add[2]];
};
/*END OF Graph.add() FUNCTION*/


/*****************************************************************************************/


/*START OF Graph.redrawWith() FUNCTION*/
/* This function will redraw the existing diagram with 
the new node to be added.
It requires add[] to be in the format ["Name of node to be added", "Node to draw from","Direction"]*/
Graph.redrawWith = function ( add ) { 
	var count = 0;

	// get size of current data object
	for( var key in data ) {
		count++;
	}

	// compute new key from size of current
	// data object
	var newKey = count;

	// add data to be added to the
	// data object
	data[newKey] = add;

	// redraw rhe graph with the new data
	Graph.draw( data );
}
/*END OF Graph.redrawWith() FUNCTION*/

/*START OF Graph.traverse() FUNCTION*/
/* The traverse function,
should show all paths available
to a given destination by observing
the current data object
*/
Graph.traverse = function () {

};
/*END OF Graph.traverse() FUNCTION*/


/*****************************************************************************************/


/*START OF Graph.clear() FUNCTION*/
/*This function will clear canvas, data
and any other instantiated variables like
ctx and c*/
Graph.clear = function () {
	data = {};

	var c = document.getElementById("canvasDiv");

	c.innerHTML = "";

	html = "<canvas id ='myCanvas' width='1200' height='500'></canvas>";

	c.innerHTML = html;
	
};
/*END OF Graph.clear() FUNCTION*/


/*****************************************************************************************/


// Test data
var data = {
	0: ["Nairobi","Nakuru","N"],
	1: ["Nakuru","Kericho","S"],
	2: ["Kericho","Ahero","S"],
	3: ["Ahero","Kisumu","W"],
	4: ["Kisumu","Uganda","N"],
	5: ["Uganda","","E"]
};

var add = ["New York","Mombasa","N"];
var redraw = ["Mombasa","New York","E"];

// Test function calls
Graph.draw( data );
//Graph.clear();
//Graph.draw({0: ["Nairobi","","N"]});
/*console.log(data);
Graph.add( ["Nairobi","Seattle","N"] );
console.log(data);
Graph.redrawWith( ["Kitale","Ahero","E"] );
console.log(data);
Graph.add( ["Nigeria","Kitale","N"] );
console.log(data);
Graph.clear();
console.log( data );
var data = {
	0: ["Nairobi","Nakuru","W"],
	1: ["Nakuru","Kericho","E"],
	2: ["Kericho","Ahero","S"],
	3: ["Ahero","Kisumu","W"],
	4: ["Kisumu","","S"],
};
Graph.draw( data );
console.log(data);*/