funcntion fetchBacon() {
	fetch('https://baconipsum.com/api/?type=meat-and-filler')
		.then(function(response => {
			if(response.status !== 200) {
				alert('Not Working' .response.status);
				return;
			}
			response.json().then(function(data) {
				document.getElementById("fetchBacon").innerHTML = data;
			})
		})
		.catch(function(err) {
			alert('FetchE Error', err);
		})
}