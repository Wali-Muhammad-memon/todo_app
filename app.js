const inputField = document.querySelector(".textInput");
const addBtn = document.querySelector(".addBtn");
const dltBtn = document.getElementById("dlt");

inputField.onkeyup = () => {
	let inputValue = (inputField.innerHTML = inputField.value);

	if (inputValue != "") {
		addBtn.classList.add("disabled");
	} else {
		addBtn.classList.remove("disabled");
	}
};

addBtn.onclick = () => {
	let inputValue = (inputField.innerHTML = inputField.value);
	const listBody = document.querySelector(".list_body");
	const listBodyItem = document.querySelector(".list_body_item");
	let task = document.createElement("p");
	let listItems = document.createElement("li");
	let div = document.createElement("div");
	let icon = document.createElement("i");
	listItems.classList.add("list_body_item");
	task.classList.add("task");
	icon.classList.add("fa");
	icon.classList.add("fa-trash");
	div.classList.add("dlt");
	listItems.appendChild(task).innerHTML = inputValue;
	listItems.appendChild(div);
	div.appendChild(icon);
	listBody.appendChild(listItems);
	inputField.value = "";
	addBtn.classList.remove("disabled");

	div.onclick = function () {
		listItems.remove("list_body_item");
	};
};
