window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	for (let i = 0; i < countries.length; i++) {
		let optionTag = document.createElement("option");
		optionTag.setAttribute("value", i + 1);
		let optionText = document.createTextNode(countries[i]);
		optionTag.appendChild(optionText);
		document.querySelector("#mySelect").appendChild(optionTag);
	}

	document.querySelector("#mySelect").addEventListener("change", event => {
		window.alert(event.target.options[event.target.selectedIndex].text);
	});
};
