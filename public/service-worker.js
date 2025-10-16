self.addEventListener("fetch", event => {
	if (event.request.method !== "POST") {
		event.respondWith(fetch(event.request));
		return;
	}

	event.respondWith(handleShare(event));
});

async function handleShare(event) {
	const formData = await event.request.formData();
	const link = formData.get("link") || "";

	localStorage.setItem("bookmark", link);

	return Response.redirect("/", 303);
}
