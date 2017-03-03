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
Purpose:	get request to APOD api &
			send data to html file0
Receives	it takes data from the form
Returns		it sends data back to the results tags
*****************************************************/
function reqButton()
{
	document.getElementById("try").addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
		var payload = {sampleDate:null};
		payload.sampleDate = document.getElementById("sampleDate").value;
		req.open("GET", "https://api.nasa.gov/planetary/apod?date=" + payload.sampleDate 
			+ "&hd=true&api_key=DEMO_KEY", true);

		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400)
			{
				var response = JSON.parse(req.responseText);
				document.getElementById('hdPic').src = response.hdurl;
			} 
			else 
			{
				console.log("Error in network request: " + req.statusText);
			}});		
		req.send(JSON.stringify(payload));
		event.preventDefault();
	})
}
