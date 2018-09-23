function getInput(){
	console.log("getInput called");
	var nameInput = document.getElementById("pname").value;
	var doseInput = document.getElementById("pdose").value;
	var timeInput = document.getElementById("time").value;
	sendData(nameInput, doseInput,timeInput);
}
