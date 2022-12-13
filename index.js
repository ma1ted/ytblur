const elementsToBlur = [
	"ytd-rich-item-renderer",
	"ytd-compact-video-renderer",
];

const observer = new MutationObserver((mutationList, observer) => {
	mutationList.forEach((mutation) => {
		if (mutation.type === "childList") {
			if (elementsToBlur.includes(mutation.target.tagName.toLowerCase())) {
				mutation.target.style.filter = "blur(24px) grayscale(75%)";
			}
		}
	});
})



observer.observe(document.body, {
	childList: true,
	attributes: true,
	subtree: true
});
