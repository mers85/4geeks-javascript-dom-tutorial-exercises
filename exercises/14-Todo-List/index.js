// Your code here
window.onload = function() {
	const textInputElement = document.querySelector("#addToDo");
	textInputElement.addEventListener("focusout", addTask);
	textInputElement.addEventListener("focusin", event => {
		event.target.value = "";
	});
	//ADD EVENT DELEGATION
	//const firstUl = document.querySelector("ul");
	//firstUl.addEventListener("click", deleteTask);

	const listI = document.querySelectorAll(".fa-trash");

	for (let i = 0; i < listI.length; i++) {
		listI[i].addEventListener("click", deleteTask);
	}
};

function addTask(event) {
	let task = event.target.value;

	let list = document.getElementsByTagName("ul")[0];
	let elemLi = document.createElement("li");
	let elemSpan = document.createElement("span");
	let elemI = document.createElement("i");
	console.log(elemI);

	elemI.setAttribute("class", "fa fa-trash");

	elemSpan.appendChild(elemI);
	elemLi.appendChild(elemSpan);
	elemLi.innerHTML += " " + task;

	list.appendChild(elemLi);

	let listI = document.querySelectorAll(".fa-trash");
	for (let i = 0; i < listI.length; i++) {
		listI[i].addEventListener("click", deleteTask);
	}
}

function deleteTask(event) {
	console.log(event.target);
	// EVENT DELEGATION
	//if (!event.target.matches("i")) return;
	//let elementToDelete = event.target.parentNode.parentNode;
	//event.currentTarget.removeChild(elementToDelete);

	let elementToDelete = event.target.parentNode.parentNode;
	let list = event.target.parentNode.parentNode.parentNode;
	list.removeChild(elementToDelete);
}
