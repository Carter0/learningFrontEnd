
/*
function go(name, age){
    alert(name)
    alert(age)
}

go('Carter', 22);
*/

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