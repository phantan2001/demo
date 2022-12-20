let hateBtn = document.getElementById("hate");
let hateEl = document.querySelector(".hate");

hateBtn.addEventListener('click', function() {
    hateBtn.style.display = "none";
    for(let i = 0; i< 10500; i++) {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerText = "ghét quá";
        hateEl.appendChild(div);
        if(i == 1306) {
            div.innerText = "iuuu";
        } else if (i == 2001) {
            div.innerText = "dethuong";
        } else if (i == 9999) {
            div.innerText = "my embe";
        }
    }

})