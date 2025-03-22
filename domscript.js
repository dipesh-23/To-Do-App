let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

function addItem() {
	let inputValue = inp.value.trim(); // Remove spaces

	if (inputValue !== "") {
		let newli = document.createElement("li");
		newli.innerText = inputValue;
		ul.appendChild(newli);
		let deletebtn = document.createElement("button");
		deletebtn.innerText = "Delete";
		deletebtn.classList.add("deleteme");
		newli.appendChild(deletebtn);
		inp.value = ""; // Clear input after adding
	} else {
		alert("Please enter valid text (not just spaces).");
		inp.value = "";
	}
}

// Button Click Event
btn.addEventListener("click", addItem);

// Enter Key Event
inp.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addItem();
	}
});

//Event bubbling

ul.addEventListener("click", function (event) {
	if (event.target.nodeName === "BUTTON") {
		let parent = event.target.parentElement;
		parent.remove();
	}
});
