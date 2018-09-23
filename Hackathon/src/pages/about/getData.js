function getData(){
	console.log("getData called");
	$.ajax({
		 type: "GET",
		 url: "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/test1-efawo/service/get/incoming_webhook/webhook0",
	 	 success: parseData(),
	 	 dataType: "JSON"
		});

}