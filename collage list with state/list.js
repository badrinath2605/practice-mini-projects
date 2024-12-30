let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    let response = await axios.get(url+input);
    createlist(response.data);
})
function createlist(data) {
    ul.innerText = "";
    console.log(data);
    for (uni of data) {
        console.log(uni);
        let li = document.createElement("li");
        li.innerText = uni.name + "-" + uni["state-province"];
        ul.append(li);
    }
}