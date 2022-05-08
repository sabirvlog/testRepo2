const root = document.documentElement;
const MarqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--Marquee-elements-displayed");
const MarqueeContent = document.querySelector(".Marquee-content");

root.style.setProperty("--Marquee-elements", MarqueeContent.children.length);

for (let i = 0; i <MarqueeElementsDisplayed; i++) {
	MarqueeContent.appendChild(MarqueeContent.children[i].cloneNode(true));	 	
}	