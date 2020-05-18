// select the button
// listen for button clicks
// when they happen, get that API URL
// then when that comes back, use the data to build <li> elements.

document.querySelector('#search-button').addEventListener('click', function() {
	// alert('the button was clicked');
	fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json').then(function(results) {
		return results.json()
	}).then(function(data) {
		console.log('data');
		console.log(data);
	})
	
}); 