function generateBackground() {
    var rgb, hex;
    rgb = randomRGB();
    hex = RGBtoHEX(rgb);
    setInfos(rgb, hex);
}

function randomRGB() {
    var color = { r: 0, g: 0, b: 0 };
    return generateRGB(color);
}

function generateRGB(color) {
    for (var value in color) { color[value] = randomBetween(255); }
    return color;
}

function randomBetween(max) {
    return Math.floor(Math.random() * max);
}

function RGBtoHEX(color) {
    var hex = "";
    for (var value in color) { hex += convertToHex(color[value]); }
    return "#" + hex;
}

function convertToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function setInfos(rgb, hex) {
    var body = document.getElementsByTagName("body")[0];
    var rgbContainer = document.getElementsByClassName("rgb")[0];
    var hexContainer = document.getElementsByClassName("hex")[0];

    body.style.backgroundColor = hex;
    rgbContainer.innerHTML = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    hexContainer.innerHTML = hex;
}

window.onload = function() {
    var btn = document.getElementsByTagName('button')[0];
    btn.addEventListener("click", generateBackground);
}