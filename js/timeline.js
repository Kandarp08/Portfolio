window.addEventListener("orientationchange", function() {

alert(window.orientation);
	
}, false);


var path = document.getElementById("path");
var container = document.getElementById("svg");

var maxWidth = container.clientWidth;

window.addEventListener("scroll", check);
window.addEventListener("resize", check);
window.addEventListener("load", check);
window.addEventListener("resize", adjust);

document.getElementById("info").style.top = (getOffset(container).top + container.clientHeight - getOffset(document.getElementById("main")).top) + "px";

for (let i = 1; i <= 5; ++i)
{
	var pointer = document.getElementById("pointer" + i);
	var timestamp = document.getElementById("timestamp" + i);
	
	pointer.style.left = ((maxWidth / 6) * i - 33) + "px";
	timestamp.style.left = ((maxWidth / 6) * i - 13) + "px";
	timestamp.style.bottom = "-13px";

	if (i > 1)
	{
		pointer.style.top = (-(89 * (i - 1))) + "px";
		timestamp.style.bottom = (89 * (i - 1) - 13) + "px";
	}
}

function adjust()
{
	maxWidth = container.clientWidth;
	path.setAttribute("d", "M0, 89 " + maxWidth + ", 89");
	
	for (let i = 1; i <= 5; ++i)
	{
		var pointer = document.getElementById("pointer" + i);
		var timestamp = document.getElementById("timestamp" + i);
	
		pointer.style.left = ((maxWidth / 6) * i - 33) + "px";
		timestamp.style.left = ((maxWidth / 6) * i - 13) + "px";
		timestamp.style.bottom = "-13px"; 		

		if (i > 1)
		{
			pointer.style.top = (-(89 * (i - 1))) + "px";
			timestamp.style.bottom = (89 * (i - 1) - 13) + "px";
		}
	}
}

function check()
{
	let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;		

	if ((scrollTop + window.innerHeight - 20) > getOffset(document.getElementById("svg")).top)
	{
		window.removeEventListener("scroll", check);
		window.removeEventListener("resize", check);
		window.removeEventListener("load", check);
		beginTimeline();
	}
}

function getOffset(el) 
{
	const rect = el.getBoundingClientRect();
	return {
    	left: rect.left + window.scrollX,
    	top: rect.top + window.scrollY
  	};
}

function beginTimeline()
{
	var id = null;
	let pos = 0;
	
	id = setInterval(propagate, 10);
	
	function propagate()
	{
		if (pos == maxWidth)
			clearInterval(id);
	
		path.setAttribute("d", "M0, 89 " + pos + ", 89");
		++pos;

		let elementId = Math.floor((pos - 3) / (maxWidth / 6));
		let opacity = Number(document.getElementById("pointer" + elementId).style.opacity);
		
		if (opacity == 0)
			pos += 25;
		
		opacity = opacity + 0.05;

        document.getElementById("pointer" + elementId).style.opacity = opacity;
		document.getElementById("innerDiv" + elementId).style.opacity = opacity;
		document.getElementById("event" + elementId).style.opacity = opacity;
	}
}
