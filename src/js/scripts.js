function showTShirt (color) {
	if (color === "white") {
		document.getElementById("tShirt").src="/img/tshirts/tshirt_white.jpg";
		makeRedBorder('whiteBox');
		returnBlackBorder('whiteBox');
		
	} else if (color === "yellow") {
		document.getElementById("tShirt").src="/img/tshirts/tshirt_yellow.jpg";
		makeRedBorder('yellowBox');
		returnBlackBorder('yellowBox');
		
	} else if (color === "green") {
		document.getElementById("tShirt").src="/img/tshirts/tshirt_green.jpg";
		makeRedBorder('greenBox');
		returnBlackBorder('greenBox');
	}
}

function makeRedBorder (box) {
	var redBorder = "2px solid #c40c00";
	if (box === "whiteBox") {
		document.getElementById("whiteBox").style.border = redBorder;
	} else if (box === "yellowBox") {
		document.getElementById("yellowBox").style.border = redBorder;
	} else if (box === "greenBox") { 
		document.getElementById("greenBox").style.border = redBorder;
	} else if (box === "sBox") { 
		document.getElementById("sBox").style.border = redBorder;
	} else if (box === "mBox") { 
		document.getElementById("mBox").style.border = redBorder;
	} else if (box === "lBox") { 
		document.getElementById("lBox").style.border = redBorder;
	}
}

function returnBlackBorder (box) {
	var blackBorder = "1px solid black";
	if (box === "whiteBox") {
		document.getElementById("yellowBox").style.border = blackBorder;
		document.getElementById("greenBox").style.border = blackBorder;
	} else if (box === "yellowBox") {
		document.getElementById("whiteBox").style.border = blackBorder;
		document.getElementById("greenBox").style.border = blackBorder;
	} else if (box === "greenBox") { 
		document.getElementById("whiteBox").style.border = blackBorder;
		document.getElementById("yellowBox").style.border = blackBorder;
	} else if (box === "sBox") { 
		document.getElementById("mBox").style.border = blackBorder;
		document.getElementById("lBox").style.border = blackBorder;
	} else if (box === "mBox") { 
		document.getElementById("sBox").style.border = blackBorder;
		document.getElementById("lBox").style.border = blackBorder;
	} else if (box === "lBox") { 
		document.getElementById("sBox").style.border = blackBorder;
		document.getElementById("mBox").style.border = blackBorder;
	}
}

function chooseSize(size) {
	if (size === "S") {
		makeRedBorder('sBox');
		returnBlackBorder('sBox');
		
	} else if (size === "M") {
		makeRedBorder('mBox');
		returnBlackBorder('mBox');
		
	} else if (size === "L") {
		makeRedBorder('lBox');
		returnBlackBorder('lBox');
	}
}