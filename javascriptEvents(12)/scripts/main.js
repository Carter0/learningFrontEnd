var numOne = document.getElementById('num1');
var numTwo = document.getElementById('num2');
var sum = document.getElementById('addSum');

numOne.addEventListener('click', add);
numTwo.addEventListener('click', add);

function add() {
	var one = parseFloat(numOne.value) || 0; //if parsefloat doesnt create a number, we use 0.
	var two = parseFloat(numTwo.value) || 0;
	sum.innerHTML = 'Your sum is: ' + (one + two);
}
