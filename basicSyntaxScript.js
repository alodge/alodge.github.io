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
Function:	reqButtons
Purpose:	get request to APOD api 
Receives	it takes data from the form
Returns		it sends data back to the results tags
*****************************************************/
function reqButton()
{
	document.getElementById("submitDate").addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {date, hd, apikey:null};
		payload.date = document.getElementById("date").value;
		payload.hd = document.getElementById("hd").value;
		payload.apikey = document.getElementById("apikey").value;
		req.open("GET", "https://api.nasa.gov/planetary/apod?date=" + payload.date 
			+ "&hd=" + payload.hd
			+ "&api_key=" + payload.apikey, true);

		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				document.getElementById('hdPic').src = response.hdurl;
				console.log(response);
			} 
			else 
			{
				console.log("Error in network request: " + req.statusText);
			}});		
		req.send(JSON.stringify(payload));
		event.preventDefault();
	})
}
