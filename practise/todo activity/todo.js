let ul = document.querySelector("ul");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", function (event) {

    li = document.createElement("li");
    li.innerText = input.value;
    input.value = null;
    let p = document.createElement("span");
    p.innerText =' delete';
    p.style.display = "none" ;
    ul.append(li);
    li.append(p);

    li.addEventListener("click",function () {
        li.children[0].style.display = "unset";
        li.addEventListener("mouseleave",function () {
            li.children[0].style.display = "none";
        });
        li.children[0].addEventListener("click", function() {
            li.remove();
        })
    });
});