//your JS code here. If required.

const colorSelect = document.getElementById('colorSelect');
const button = document.querySelector('input[type="button"]');

/*function color('click', input) {
	if (color == input) {
		alert(color.remove());
	}
}*/

button.addEventListener('click', function(){
	let selectedColor = colorSelect.options[colorSelect.selectedIndex].text;
	for (let i = 0; i < colorSelect.options.length; i++) {
		if (colorSelect.options[i].text === selectedColor) {
			colorSelect.remove(i);
			alert(`Removed color: ${selectedColor}`);
			break;
		}
	}
});