// INITIAL VARIABLES
var input = document.getElementById("userinput");
var button = document.getElementById("enter-btn");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");
var deleteList = document.querySelectorAll("#delete");

// FUNCTION DECLARATIONS
function createListElement() {
	// Create li element with checkbox, label and delete button / text depending on input value
	let li = document.createElement("li");
	let label = document.createElement("label");
	label.appendChild(document.createTextNode(input.value));
	label.setAttribute('class', 'checkbox-container');
	let checkbox = document.createElement("input");
	checkbox.setAttribute('type', 'checkbox');
	label.appendChild(checkbox);
	let checkmark = document.createElement("span");
	checkmark.setAttribute('class', 'checkmark');
	label.appendChild(checkmark);
	li.appendChild(label);
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.setAttribute('id', 'delete');
	li.appendChild(deleteButton);
	ul.appendChild(li);
	// Clear input
	input.value = "";
	// Update node lists
	liList = document.querySelectorAll("li");
	deleteList = document.querySelectorAll("#delete");
}
function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// EVENTS
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", function (e) {
	if (e.target.tagName === "LABEL") {
		e.target.parentNode.children[0].classList.toggle("done"); // on/off "done" class
	} else if (e.target.tagName === "SPAN") {
		e.target.parentNode.classList.toggle("done");
	} else if (e.target.id === "delete") {
		// Change nodelist into array and get index of delete button
		var deleteArray = Array.from(deleteList);
		var buttonIndex = deleteArray.indexOf(e.target);
		// Remove li
		liList[buttonIndex].remove();
		// Update node lists
		liList = document.querySelectorAll("li");
		deleteList = document.querySelectorAll("#delete");
	}
});