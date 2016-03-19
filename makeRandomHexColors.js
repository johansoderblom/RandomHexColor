/*
The code create a hex with "#" and 6 random hex-numbers.
The function takes a String of hexadecimal ("0123456789ABCDEF") 
as parameter. 
*/

function makeColorHex(hexValues){
    var hash = "#";
    for( var i=0; i < 6; i++ ){
		hash += hexValues.charAt(Math.floor (Math.random() * hexValues.length));
	}
    return hash;
}
/*
Three example functions that display different
random hexcolor to background and display the hexvalue.
*/
function newBGcolor(){
	var hexValues = "0123456789ABCDEF";
    document.body.style.backgroundColor = makeColorHex(hexValues);
	document.getElementById("displayHexValue").innerHTML = makeColorHex(hexValues);
}
function newBGcolorLight(){
	var LIGHThexValues = "89ABCDEF"; //var with Hex that display only bright colors
    document.body.style.backgroundColor = makeColorHex(LIGHThexValues);
	document.getElementById("displayHexValue").innerHTML = makeColorHex(LIGHThexValues);
}
function newBGcolorDark(){
	var DARKhexValues = "01234567"; //var with Hex that display only dark colors
    document.body.style.backgroundColor = makeColorHex(DARKhexValues);
	document.getElementById("displayHexValue").innerHTML = makeColorHex(DARKhexValues);
}