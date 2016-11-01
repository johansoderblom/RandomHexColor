const hexValues = "0123456789abcdef";
const hexValuesLight = "89abcdef"; //var with Hex that display only bright colors
const hexValuesDark = "01234567"; //var with Hex that display only dark colors

/*
The code create a hex with "#" and 6 random hex-numbers.
The function takes a String of hexadecimal ("0123456789ABCDEF")
as parameter.
*/

function makeColorHex(hexValues) {
    var hex = "";
    for (var i = 0; i < 6; i++) {
        hex += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    }
    return hex;
}

function rgbToHex(rgb) {
    var rgbN = rgb.split(",");
    var r = parseInt(rgbN[0]);
    var g = parseInt(rgbN[1]);
    var b = parseInt(rgbN[2]);

    return "#" + ((r << 16) + (g << 8) + b).toString(16);
}
function hexToRgb(hex) {
    var rgbNer = parseInt(hex, 16);
    var r = (rgbNer >> 16) & 255;
    var g = (rgbNer >> 8) & 255;
    var b = rgbNer & 255;

    return r + "," + g + "," + b;
}

function colorToDom(hex) {
    var hex = makeColorHex(hex);
    var rgb = hexToRgb(hex);

    var rgbString = "rgb(" + rgb + ")";

    var color1 = getComplimentColor(rgb);
    var color2 = strongColor(color1);
    var color3 = strongColor(rgb);
    var color4 = strongColorMore(color3);

    document.body.style.backgroundColor = rgbString;
    document.getElementById("contrastColor").innerHTML = rgbToHex(color1);
    document.getElementById("ccColor").style.backgroundColor = rgbToHex(color1);
    document.getElementById("contrastColor2").innerHTML = rgbToHex(color2);
    document.getElementById("ccColor2").style.backgroundColor = rgbToHex(color2);

    document.getElementById("strColor").innerHTML = rgbToHex(color3);
    document.getElementById("strongColor").style.backgroundColor = rgbToHex(color3);
    document.getElementById("strColor2").innerHTML = rgbToHex(color4);
    document.getElementById("strongColor2").style.backgroundColor = rgbToHex(color4);

    document.getElementById("displayHexValue").innerHTML = rgbToHex(rgb);
    document.getElementById('displayRGBValue').innerHTML = rgbString;
    return rgbString;
}

function getComplimentColor(rgb) {
    var rgbValue = rgb.split(",");
    var rgbCompliment;
    var r = +(rgbValue[0]);
    var g = +(rgbValue[1]);
    var b = +(rgbValue[2]);
    rgbCompliment = 255 - r;
    rgbCompliment += "," + (255 - g);
    rgbCompliment += "," + (255 - b);
    return rgbCompliment;
}
function strongColor(rgb) {
    var rgbValue = rgb.split(",");
    var rgbColor;
    var rgbArray = [];
    var r = +(rgbValue[0]);
    var g = +(rgbValue[1]);
    var b = +(rgbValue[2]);
    rgbArray.push(r);
    rgbArray.push(g);
    rgbArray.push(b);

    var indexOfMaxValue = rgbArray.indexOf(Math.max(...rgbArray));
    var indexOfMinValue = rgbArray.indexOf(Math.min(...rgbArray));
    if (rgbArray[indexOfMinValue] < 50) {
        rgbArray[indexOfMinValue] += 50;
    } else {
        rgbArray[indexOfMinValue] -= 50;
    }
    if (rgbArray[indexOfMaxValue] > 200) {
         rgbArray[indexOfMaxValue] -= 55;
    } else {
        rgbArray[indexOfMaxValue] += 55;
    }
    rgbColor = rgbArray[0];
    rgbColor += "," + rgbArray[1];
    rgbColor += "," + rgbArray[2];
    return rgbColor;
}
function strongColorMore(rgb) {
    var rgbValue = rgb.split(",");
    var rgbColor;
    var rgbArray = [];
    var r = +(rgbValue[0]);
    var g = +(rgbValue[1]);
    var b = +(rgbValue[2]);
    rgbArray.push(r);
    rgbArray.push(g);
    rgbArray.push(b);
    var indexOfMaxValue = rgbArray.indexOf(Math.max(...rgbArray));
    if (rgbArray[0] < 125) {
        rgbArray[0] = 255;
    } 
    if (rgbArray[1] > 125) {
         rgbArray[1] = 255;
    } 
    if (rgbArray[2] > 200) {
         rgbArray[2] -= 55;
    } else {
        rgbArray[indexOfMaxValue] = 0;
    }
    rgbColor = rgbArray[0];
    rgbColor += "," + rgbArray[1];
    rgbColor += "," + rgbArray[2];
    return rgbColor;
}
/*
Three example functions that display different
random hexcolor to background and display hex-values.
*/
function setBGcolor() {
    return colorToDom(hexValues);
}
function setBGcolorLight() {
    return colorToDom(hexValuesLight);
}
function setBGcolorDark() {
    return colorToDom(hexValuesDark);
}

