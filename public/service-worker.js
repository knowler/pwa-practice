import localforage from "https://esm.sh/localforage";

self.addEventListener("fetch", event => {
	if (event.request.method !== "POST") {
		console.info("Skipping post request", event.request);
		event.respondWith(fetch(event.request));
		return;
	}

	event.respondWith(handleShare(event));
});

async function handleShare(event) {
	console.info("Handling share");
	const formData = await event.request.formData();
	const link = formData.get("link") || "";

	await localforage.setItem("bookmark", link);

	return Response.redirect("/", 303);
}
