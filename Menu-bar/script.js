let Menu_show_hide = document.getElementById('menu-button')
Menu_show_hide.addEventListener("click", () => {
	var x = document.getElementById("uli");
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById('menu-bar').style.backgroundColor = "cyan";
		document.getElementById('icon').style.color = "green";


	} else {
		x.style.display = "none";
		document.getElementById('menu-bar').style.backgroundColor = "";
		document.getElementById('icon').style.color = "blue";

	}
})