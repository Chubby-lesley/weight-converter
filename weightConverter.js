 // Select items

const kg = document.querySelector('.kg-display');
const gram = document.querySelector('.gram-display');
const pound = document.querySelector('.pound-display');
const ounce = document.querySelector('.ounce-display');

const convert = document.getElementById('convert-btn');
const reset = document.getElementById('reset-btn');


// Add event listener to convert btn and pass in the convertWeight function

convert.addEventListener('click', (e) => {
	convertWeight();	
})


// Add event listener to enter key and pass in convertWeight function

window.addEventListener('keydown', (e) =>{
	if (e.key === 'Enter') {
		convertWeight();
	}
})


// Add event Listener to reset btn and pass empty string as display values

reset.addEventListener('click', (e) => {
	kg.value = '';
	gram.value = '';
	pound.value = '';
	ounce.value = '';
})


// function to convert weight

function convertWeight() {
	if (kg.value.length > 0) {
		gram.value = kg.value * 1000;
		pound.value = kg.value * 2.2046;
		ounce.value = kg.value * 35.27396195;
	} 

	else if (gram.value.length > 0) {
		kg.value = gram.value / 1000;
		pound.value = gram.value * 0.00220462262185;
		ounce.value = gram.value * 0.03527396195;
	} 

	else if (pound.value.length > 0) {
		kg.value = pound.value * 0.45359237;
		gram.value = pound.value * 453.59237;
		ounce.value = pound.value * 16;
	} 

	else if (ounce.value.length > 0) {
		kg.value = ounce.value * 0.02834952;
		gram.value = ounce.value * 28.34952;
		pound.value = ounce.value / 16;
	}

}

