// function cheackDriverAge () {
// var age = prompt("what is your age?")

// if(Number(age)<18) {
//     alert("sorry you can/'t drive");
// }
// else if(Number(age)>18) {
//     alert("drive safe ,start the engine");
// }
// else if(Number(age)===18) {
//     alert("your fist driving congratulation");
// }
// }


// var checkDriverAge2 = function() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }


// array //

// array.shift()
// var array = ["banana","orange","apple","nali"]
// array.push("kivi");




// ***Dom Events
// chaking click working or not

// var button = document.getElementsByTagName("button")[0]

// button.addEventListener("click", function() {
//     console.log("click!!!")
// })


// *** creat new li by JS///
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function() {
//     if (input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value))
//         ul.appendChild(li);
//         input.value ="";
//     }
// })

// *** creat new li by JS 2nd method shoping lisht product add///

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.lenght;
}

function creatListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        creatListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);