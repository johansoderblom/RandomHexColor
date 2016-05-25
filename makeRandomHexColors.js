/*
The code create a hex with "#" and 6 random hex-numbers.
The function takes a String of hexadecimal ("0123456789ABCDEF") 
as parameter. 
*/

function makeColorHex(hexValues){
    var hash = "";
    for( var i=0; i < 6; i++ ){
		hash += hexValues.charAt(Math.floor (Math.random() * hexValues.length));
	}
    return hash;
}

function rgbToHex(rgb) {
	var numb = rgb.split(","); 
	var r = parseInt(numb[0]);
	var g = parseInt(numb[1]);
	var b = parseInt(numb[2]);
	
    return "#" + ((r << 16) + (g << 8) + b).toString(16);
}
function hexToRgb(hex) {
    var number = parseInt(hex, 16);
    var r = (number >> 16) & 255;
    var g = (number >> 8) & 255;
    var b = number & 255;

    return r + "," + g + "," + b;
}
/*
Three example functions that display different
random hexcolor to background and display the hexvalue.
*/
var hexValues = "0123456789abcdef";
var hexValuesLight = "89abcdef"; //var with Hex that display only bright colors
var hexValuesDark = "01234567"; //var with Hex that display only dark colors
function setBG(hex){
	var rgb = hexToRgb(makeColorHex(hex));
    document.body.style.backgroundColor = "rgb("+rgb+")";
	document.getElementById("displayHexValue").innerHTML = rgbToHex(rgb);
}
function setBGcolor(){
	setBG(hexValues);
}
function setBGcolorLight(){
	setBG(hexValuesLight);
}
function setBGcolorDark(){
	setBG(hexValuesDark);
}