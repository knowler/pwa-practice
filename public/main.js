const [form] = document.forms;

let message = localStorage.getItem("message");

if (message) {
	form.elements.message.value = message;
}

form.addEventListener("submit", event => {
	event.preventDefault();
	const formData = new FormData(event.target);

	localStorage.setItem("message", formData.get("message"));
});
