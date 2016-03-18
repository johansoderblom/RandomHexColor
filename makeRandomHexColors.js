// Create a hex with # and 6 random hex-numbers.
function makeColorHex(){
    var hash = "#";
    var hexValues = "0123456789ABCDEF";

    for( var i=0; i < 6; i++ ){
		hash += hexValues.charAt(Math.floor (Math.random() * hexValues.length));
	}
    return hash;
}

// Light hexcolor
function makeColorHexLight(){
    var hash = "#";
    var hexValues = "89ABCDEF";

    for( var i=0; i < 6; i++ ){
		hash += hexValues.charAt(Math.floor (Math.random() * hexValues.length));
	}
    return hash;
}

// Dark hexcolor
function makeColorHexDark(){
    var hash = "#";
    var hexValues = "01234567";

    for( var i=0; i < 6; i++ ){
		hash += hexValues.charAt(Math.floor (Math.random() * hexValues.length));
	}
    return hash;
}

// Add random hexcolor to background and display teh hexvalue
function newBGcolor(){
    document.body.style.backgroundColor = makeColorHex();
	document.getElementById("displayHexValue").innerHTML = makeColorHex();
}
function newBGcolorLight(){
    document.body.style.backgroundColor = makeColorHexLight();
	document.getElementById("displayHexValue").innerHTML = makeColorHexLight();
}
function newBGcolorDark(){
    document.body.style.backgroundColor = makeColorHexDark();
	document.getElementById("displayHexValue").innerHTML = makeColorHexDark();
}