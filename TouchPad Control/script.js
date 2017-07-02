brightnessLevel = 0;
color = 'white';

function plusBright() {
	console.log("brightness Level before plus:" + brightnessLevel);
	if(brightnessLevel < 5) {

		brightnessLevel = brightnessLevel + 1;
	} 
	console.log("brightness Level after plus:" + brightnessLevel);
	changeLight()
}
function minusBright() {
	console.log("brightness Level before minus:" + brightnessLevel);
	if(brightnessLevel > 0) {
		brightnessLevel = brightnessLevel - 1;
	} 
	console.log("brightness Level after minus:" + brightnessLevel);
	changeLight()
}
function switchGreen() {
	console.log("Color before switchGreen:" + color);
	color = 'green';
	console.log("Color after switchGreen:" + color);
	changeLight();
}
function switchRed() {
	console.log("Color before switchRed:" + color);
	color = 'red';
	console.log("Color after switchRed:" + color);
	changeLight();
}
function switchBlue() {
	console.log("Color before switchBlue:" + color);
	color = 'blue';
	console.log("Color after switchBlue:" + color);
	changeLight();
}
function switchWhite() {
	console.log("Color before switchWhite:" + color);
	color = 'white';
	console.log("Color after switchWhite:" + color);
	changeLight();
}

function changeLight(){
	var light = document.getElementById('light');
	console.log("brightness Level after changeLight:" + brightnessLevel);




	if(color == 'green') {
		console.log('its green');
		if (brightnessLevel == 0) {
			light.src == './images/brighgt0.png';
			console.log('Light should now be set to "./images/brightg0"');
		}
		else if (brightnessLevel == 1) {
			light.src = "./images/brightg1.png";
			console.log('Light should now be set to "./images/brightg1"');			
		}
		else if (brightnessLevel == 2) {
			light.src = "./images/brightg2.png";
			console.log('Light should now be set to "./images/brightg2"');			
		}
		else if (brightnessLevel == 3) {
			light.src = "./images/brightg3.png";
			console.log('Light should now be set to "./images/brightg3"');			
		}
		else if (brightnessLevel == 4) {
			light.src = "./images/brightg4.png";
			console.log('Light should now be set to "./images/brightg4"');			
		}
		else if (brightnessLevel == 5) {
			light.src = "./images/brightg5.png";
			console.log('Light should now be set to "./images/brightg5"');			
		}
		else {
			console.log('brighness green Error!');
		}
	}
	else if (color == 'red') {
		console.log('its red');
		if (brightnessLevel == 0) {
			light.src == './images/brightr0.png';
			console.log('Light should now be set to "./images/brightr0"');
		}
		else if (brightnessLevel == 1) {
			light.src = "./images/brightr1.png";
			console.log('Light should now be set to "./images/brightr1"');			
		}
		else if (brightnessLevel == 2) {
			light.src = "./images/brightr2.png";
			console.log('Light should now be set to "./images/brightr2"');			
		}
		else if (brightnessLevel == 3) {
			light.src = "./images/brightr3.png";
			console.log('Light should now be set to "./images/brightr3"');			
		}
		else if (brightnessLevel == 4) {
			light.src = "./images/brightr4.png";
			console.log('Light should now be set to "./images/brightr4"');			
		}
		else if (brightnessLevel == 5) {
			light.src = "./images/brightr5.png";
			console.log('Light should now be set to "./images/brightr5"');			
		}
		else {
			console.log('brighness White Error!');
		}
	}
	else if (color == 'blue') {
		console.log('its blue');
	}
	else if (color == 'white') {
		console.log('its white');
		if (brightnessLevel == 0) {
			light.src == './images/bright0.png';
			console.log('Light should now be set to "./images/bright0"');
		}
		else if (brightnessLevel == 1) {
			light.src = "./images/bright1.png";
			console.log('Light should now be set to "./images/bright1"');			
		}
		else if (brightnessLevel == 2) {
			light.src = "./images/bright2.png";
			console.log('Light should now be set to "./images/bright2"');			
		}
		else if (brightnessLevel == 3) {
			light.src = "./images/bright3.png";
			console.log('Light should now be set to "./images/bright3"');			
		}
		else if (brightnessLevel == 4) {
			light.src = "./images/bright4.png";
			console.log('Light should now be set to "./images/bright4"');			
		}
		else if (brightnessLevel == 5) {
			light.src = "./images/bright5.png";
			console.log('Light should now be set to "./images/bright5"');			
		}
		else {
			console.log('brighness White Error!');
		}
	}
	else {
		console.log('error!');
	}
	/*if(color == 'white' && brightnessLevel == 0) {
		light.src == './images/bright0.png';
		console.log('Light should now be set to "./images/bright0"');
	}
	else if(color == 'white' && brightnessLevel == 1) {
		light.src = "./images/bright1.png";
		console.log('Light should now be set to "./images/bright1"');
	}
	else if(color == 'white' && brightnessLevel == 2) {
		light.src = "./images/bright2.png";
		console.log('Light should now be set to "./images/bright2"');
	}
	else if(color == 'white' && brightnessLevel == 3) {
		light.src = "./images/bright3.png";
		console.log('Light should now be set to "./images/bright3"');
	}
	else if(color == 'white' && brightnessLevel == 4) {
		light.src = "./images/bright4.png";
		console.log('Light should now be set to "./images/bright4"');
	}
	else if(color == 'white' && brightnessLevel == 5) {
		light.src = "./images/bright5.png";
		console.log('Light should now be set to "./images/bright5"');
	}



	else if(color == 'red' && brightnessLevel == 0) {
		light.src = "./images/brightr0.png";
		console.log('Light should now be set to "./images/brightr0.png"');
	}
	else if(color == 'red' && brightnessLevel == 1) {
		light.src = "./images/brightr1.png";
		console.log('Light should now be set to "./images/brightr1.png"');
	}
	else if(color == 'red' && brightnessLevel == 2) {
		light.src = "./images/brightr2.png";
		console.log('Light should now be set to "./images/brightr2.png"');
	}
	else if(color == 'red' && brightnessLevel == 3) {
		light.src = "./images/brightr3.png";
		console.log('Light should now be set to "./images/brightr3.png"');
	}
	else if(color == 'red' && brightnessLevel == 4) {
		light.src = "./images/brightr4.png";
		console.log('Light should now be set to "./images/brightr4.png"');
	}
	else if(color == 'red' && brightnessLevel == 5) {
		light.src = "./images/brightr5.png";
		console.log('Light should now be set to "./images/brightr5.png"');
	}



	else if(color == 'green' && brightnessLevel == 0) {
		light.src = "./images/brightg0.png";
		console.log('Light should now be set to "./images/brightg0.png"');
	}
	else if(color == 'green' && brightnessLevel == 1) {
		light.src = "./images/brightg1.png";
		console.log('Light should now be set to "./images/brightg1.png"');
	}
	else if(color == 'green' && brightnessLevel == 2) {
		light.src = "./images/brightg2.png";
		console.log('Light should now be set to "./images/brightg2.png"');
	}
	else if(color = 'green' && brightnessLevel == 3) {
		light.src == "./images/brightg3.png";
		console.log('Light should now be set to "./images/brightg3.png"');
	}
	else if(color == 'green' && brightnessLevel == 4) {
		light.src = "./images/brightg4.png";
		console.log('Light should now be set to "./images/brightg4.png"');
	}
	else if(color == 'green' && brightnessLevel == 5) {
		light.src = "./images/brightg5.png";
		console.log('Light should now be set to "./images/brightg5.png"');
	}



	else if(color == 'blue' && brightnessLevel == 0) {
		light.src = "./images/brightb0.png";
		console.log('Light should now be set to "./images/brightb0.png"');
	}
	else if(color == 'blue' && brightnessLevel == 1) {
		light.src = "./images/brightb1.png";
		console.log('Light should now be set to "./images/brightb1.png"');
	}
	else if(color == 'blue' && brightnessLevel == 2) {
		light.src = "./images/brightb2.png";
		console.log('Light should now be set to "./images/brightb2.png"');
	}
	else if(color == 'blue' && brightnessLevel == 3) {
		light.src = "./images/brightb3.png";
		console.log('Light should now be set to "./images/brightb3.png"');
	}
	else if(color == 'blue' && brightnessLevel == 4) {
		light.src = "./images/brightb4.png";
		console.log('Light should now be set to "./images/brightb4.png"');
	}
	else if(color == 'blue' && brightnessLevel == 5) {
		light.src = "./images/brightb5.png";
		console.log('Light should now be set to "./images/brightb5.png"');
	}
	else {
		console.log("ERROR");
	}*/
}