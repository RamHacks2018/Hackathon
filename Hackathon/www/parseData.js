function parseData(dataSet){
	var tableRow0 = document.getElementById("row0");
	overviewTable.innerHTML = "";
	overviewTable.appendChild(tableRow0);
	dataSet.forEach(function(obj) {
		var tr = document.createElement("tr");
		var td0 = document.createElement("td");
		var txt0 = document.createTextNode(obj[0].name);
		td0.appendChild(txt0);
		tr.appendChild(td0);
		var td1 = document.createElement("td");
		var txt1 = document.createTextNode(obj[0].dose);
		td1.appendChild(txt1);
		tr.appendChild(td1);
		var td2 = document.createElement("td");
		var txt2 = document.createTextNode(obj[0].time);
		td2.appendChild(txt2);
		tr.appendChild(td2);
		overviewTable.appendChild(tr);
	});

}