if ("serviceWorker" in navigator) {
	try {
		const registration = await navigator.serviceWorker.register("/service-worker.js");
		console.log("Success:", registration);
	} catch (error) {
		console.error(`Service worker registration failed: ${error}`);
	}
} else console.log("Service worker not supported");

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

const bookmark = localStorage.getItem("bookmark");

if (bookmark) {
	const a = document.createElement("a");
	a.href = bookmark;
	a.textContent = "Bookmarked";
	document.body.append(a);
}
