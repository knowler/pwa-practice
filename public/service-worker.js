self.addEventListener("fetch", event => {
	if (event.request.method !== "POST") {
		console.info("Skipping post request", event.request);
		event.respondWith(fetch(event.request));
		return;
	}

	event.respondWith(handleShare(event));
});

self.addEventListener("install", async event => {
	const {default: localforage} = import("https://esm.sh/localforage")
	console.log(localforage);
});

async function handleShare(event) {
	console.info("Handling share");
	const formData = await event.request.formData();
	const link = formData.get("link") || "";

	// Persist to IndexedDB

	return Response.redirect("/", 303);
}
