let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newItem = document.createElement("p");
	newItem.style.background = "yellow";

	newItem.innerHTML = "Hello World";

	document.body.appendChild(newItem);
});
