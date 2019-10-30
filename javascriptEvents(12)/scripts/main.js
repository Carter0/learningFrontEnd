var numOne = document.getElementById('num1');
var numTwo = document.getElementById('num2');
var sum = document.getElementById('addSum');

var checklist = document.getElementById('checklist');
var inputs = checklist.querySelectorAll('input');
var items = checklist.querySelectorAll('li');

numOne.addEventListener('click', add);
numTwo.addEventListener('click', add);

function add() {
	var one = parseFloat(numOne.value) || 0; //if parsefloat doesnt create a number, we use 0.
	var two = parseFloat(numTwo.value) || 0;
	sum.innerHTML = 'Your sum is: ' + (one + two);
}

for (i = 0; i < items.length; i++) {
	items[i].addEventListener('click', editItem);
	inputs[i].addEventListener('blur', updateItem);
	inputs[i].addEventListener('keypress', itemKeyPress);
}

//The "this" keyword represents whatever html item is being clicked on.
function editItem() {
	this.className = 'edit';
	var input = this.querySelector('input');
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = '';
}

// Event is an argument passed into all keypress events.
// event.which keycode 13 stands for the 'enter' key.
// Using the 'call' method sets 'this' to the
// li item in updateItem.
function itemKeyPress(event) {
	if (event.which == 13) {
		updateItem.call(this);
	}
}
