// the graph object
var Graph = {};

// the data object
var data = {
	0: ["N1","N2","S"],
	1: ["N2","N3","W"],
	2: ["N2","N3","N"],
	3: ["N2","N3","E"],
	3: ["N2","N3","E"]
};

/*Draw function*/
Graph.draw = function ( data ) {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// starting points for every plot
	var startX = 300; 
	var startY = 300;
	var count = 0;

	// initialize the line
	ctx.beginPath();
	ctx.moveTo(startX, startY);

	// loop throught the data
	// object and plot for each data
	// point
	for ( var key in data ) {
		if ( Array.isArray( data[key] ) && data[key].length === 3 ) {
			// drawing the edges
			
			// for north
			if ( data[key][2] === "N" ) {
				ctx.lineTo( startX, startY - ( count * 50 ) );
			}
			// for south
			if ( data[key][2] === "S" ) {
				ctx.lineTo( startX, startY + ( count * 50 ) );
			}
			// for east
			if ( data[key][2] === "E" ) {
				ctx.lineTo( startX + ( count * 50 ), startY );
			}
			// for west
			if ( data[key][2] === "W" ) {
				ctx.lineTo( startX - ( count * 50 ), startY );
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
	ctx.fillStyle = 'White';
	ctx.fill();

	// drawing the vertices
	count = 0;

	for ( var key in data ) {
		ctx.beginPath();

		if ( Array.isArray( data[key] ) && data[key].length === 3 ) {
			// for north
			if ( data[key][2] === "N" ) {				
				ctx.arc( startX, startY - ( count * 50 ),10,0,2*Math.PI);
			}
			// for south
			if ( data[key][2] === "S" ) {
				ctx.arc( startX, startY + ( count * 50 ),10,0,2*Math.PI);
			}
			// for east
			if ( data[key][2] === "E" ) {
				ctx.arc( startX + ( count * 50 ), startY,10,0,2*Math.PI);
			}
			// for west
			if ( data[key][2] === "W" ) {				
				ctx.arc( startX - ( count * 50 ), startY,10,0,2*Math.PI);
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

};

/* The get path function,
should show all paths available
*/
Graph.traverse = function () {

};

Graph.draw( data );

