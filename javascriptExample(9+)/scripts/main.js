/*
function go(name, age){
    alert(name)
    alert(age)
}

go('Carter', 22);


function add(var1, var2){
    var3 = var1 + var2;
    if (var3 > 20) {
        return "The sum is greater than 20";
    } else if (var3 == 20) {
        return "The sum is 20";
    } else {
        return "The sum is not greater than 20";
    }
}

var sum = add(1, 2);
alert(sum);
*/

var myList = ["apples", "oranges", "bananas", "watermelon"];
myList[4] = "blueberries";
myList.pop();

//Note length starts at 1 not 0
console.log("The length of the list is: " + myList.length);

myList.forEach(function (value, index) {
    console.log(value, index);
});

var list2 = 1;

while (list2 < 10) {
    console.log(list2 + " in while loop");
    list2++;
}

for (var i = 0; i < 10; i++) {
    console.log(i + " in for loop");
}