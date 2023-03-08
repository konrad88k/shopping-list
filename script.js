// INITIAL VARIABLES
var button = document.getElementById("enter-btn");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
var deleteList = document.querySelectorAll("#delete");
var brList = document.querySelectorAll("br");

// FUNCTION DECLARATIONS
function createListElement() {
	//add break line and create li element with text depending on input value
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//create button element
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.setAttribute('id', 'delete');
	ul.appendChild(deleteButton);
	ul.appendChild(document.createElement("br"));
	//clear input
	input.value = "";
	//update node lists
	liList = document.querySelectorAll("li");
	deleteList = document.querySelectorAll("#delete");
	brList = document.querySelectorAll("br");
}
function inputLength() {
	return input.value.length;
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// EVENTS
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done"); // on/off "done" class
	}
	else if (e.target.id === "delete") {
		//change nodelist into array and get index of delete button
		var deleteArray = Array.from(deleteList);
		var buttonIndex = deleteArray.indexOf(e.target);
		//remove br, li and delete button
		liList[buttonIndex].remove();
		deleteList[buttonIndex].remove();
		brList[buttonIndex].remove();
		//update node lists
		liList = document.querySelectorAll("li");
		deleteList = document.querySelectorAll("#delete");
		brList = document.querySelectorAll("br");
	}
});