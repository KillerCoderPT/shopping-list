let btn = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

function addListAfterEnter(e) {
    
    // console.log(e.keyCode);
    
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
}

btn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);



