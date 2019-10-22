/*
Javascript Selectors basically function as ways to obtain different items in your html document.
document.getElementsByTagName -> gets by tagName like P or H1 etc
getElementsByClassName -> gets by class name.

Older browsers sometimes do not support query selectors :(.

You can also get all the classnames in a list if you are feeling that lol idk. 
*/


var pTags = document.getElementsByTagName('p');
firstPTag = pTags[0].innerHTML; //need innerHTML to get string value of text.
console.log("The first p tag value is: " + firstPTag);

var items = document.getElementsByClassName("checklist").item(0); //item(n), returns the nth item in the list.
//console.log(items);

var list = document.querySelector(".checklist"); //allows css selections, always gets first item.
console.log(list);

console.log(list.children[0].innerHTML); //Getting the first li item in a ul list.

var list2 = document.querySelectorAll('p');
console.log("All p tags: " + list2);

var i = 1;
list2.forEach(item => { //foreach with a lamba function. 
    // instead of function () {} its item => {}
    // send item into the anonymous function.
    console.log("The " + i + " item is: " +
        item.innerHTML);
    i++;
});

list2[0].innerHTML = "I have changed this in the <strong>javascript.<strong>";