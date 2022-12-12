var storeJSON = [];
var stringJSON = "";
$(document).ready(function () {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//Import JSON File
			storeJSON = JSON.parse(this.responseText);
			stringJSON = this.responseText;

		}
		//Load Location to Options
		storeOptions();
	};
	xhr.open('GET', 'assets/js/Location.json', true);
	xhr.send(null);

	// Get Location
	document.getElementById('storePicker').addEventListener("change", newLocation => {
		newLocation.preventDefault();
		storeLocations();
	})
});

function storeLocations() {
	for (var i of storeJSON) {
		console.log(i.location);
		storeJSON = new Array();
	}


}


function storeOptions() {
	for (var i of storeJSON) {
		var _btnSelect = document.getElementById("storePicker");
		var _option = document.createElement("option");
		_option.value = i.location;
		_option.innerHTML = i.location;
		_btnSelect.appendChild(_option);
	}

}


