/*
Andrew Lodge
CS 290
How-To Guide 
2-20-2017
*/

/*
Footnote - I've not done this before and am relying heavily 
on the couse lecture notes for CS290 for this
*/

var apiKey = "DXlW8Eur0T9ZdxITXgdByHNvpooXF8tLgmhjnd36";


document.addEventListener('DOMContentLoaded', reqButton);

/****************************************************
Function:	reqButton
Purpose:	get request to rover api
Receives	it takes data from the form
Returns		it sends data back to the results tags
*****************************************************/
function reqButton()
{
	document.getElementById("submitRover").addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {timeType, time, rover, camera, page, api_key:null};
		payload.timeType = document.getElementById("timeType").value;
		payload.time = document.getElementById("time").value;
		payload.rover = document.getElementById("rover").value;
		payload.camera = document.getElementById("camera").value;
		payload.page = document.getElementById("page").value;
		payload.api_key = document.getElementById("api_key").value;
		req.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/"
			+ payload.rover + "/photos?" 
			+ payload.timeType + "=" 
			+ payload.time + "&camera="
			+ payload.camera + "&page="
			+ payload.page + "&api_key="
			+ payload.api_key, true);
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				var returnArray = response.photos;
				var returnItem = returnArray[2];
				var returnPic = returnItem.img_src;
				document.getElementById('roverPic').src = returnPic;
			} 
			else 
			{
				console.log("Error in network request: " + req.statusText);
			}});		
		req.send(JSON.stringify(payload));
		event.preventDefault();
	})
}
