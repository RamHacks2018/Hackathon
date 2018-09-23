	function sendData(name, dose, time){
		var dataSet = {
		"dose": dose,
		"name": name,
		"time": time
		};
		$.ajax({
		 type: "POST",
		 url: "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/test1-efawo/service/testGetPostService/incoming_webhook/webhook0",
		 data: dataSet,
	 	 dataType: "JSON"
		});
	}
