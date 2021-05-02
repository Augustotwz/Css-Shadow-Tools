function getValuesBox() {
	valorHorizontal = document.getElementById("horizontal").value
	document.getElementById("valorHorizontal").innerHTML = valorHorizontal + "px";
	valorVertical = document.getElementById("vertical").value
	document.getElementById("valorVertical").innerHTML = valorVertical + "px";
	valueBlurRadius = document.getElementById("blur-radius").value
	document.getElementById("value-blur-radius").innerHTML = valueBlurRadius + "px";
	valueSpreadRadius = document.getElementById("spread-radius").value
	document.getElementById("value-spread-radius").innerHTML = valueSpreadRadius + "px";

	let values = valorHorizontal   +"px "+ 
				 valorVertical     +"px "+ 
				 valueBlurRadius   +"px "+ 
				 valueSpreadRadius +"px "+ 
				 "rgba(0,0,0,0.57)";

	document.getElementById("main-box").style.boxShadow = values;
	document.getElementById("code").innerHTML = "box-shadow: " + values + ";";
	document.getElementById("copyCodeBox").value = "box-shadow: " + values + ";";
}

function getValuesText() {
	valorHorizontalText = document.getElementById("horizontalText").value
	document.getElementById("valorHorizontalText").innerHTML = valorHorizontalText + "px";
	valorVerticalText = document.getElementById("verticalText").value
	document.getElementById("valorVerticalText").innerHTML = valorVerticalText + "px";
	valueBlurRadiusText = document.getElementById("blur-radiusText").value
	document.getElementById("value-blur-radiusText").innerHTML = valueBlurRadiusText + "px";

	let values = valorHorizontalText   +"px "+ 
				 valorVerticalText     +"px "+ 
				 valueBlurRadiusText   +"px "+ 
				 "red";

	document.getElementById("text").style.textShadow = values;
	document.getElementById("copyCodeText").value = "text-shadow: " + values + ";";
}
getValuesText();

function copy(Idname) {
	document.getElementById(Idname).select();
    document.execCommand('copy');  
}