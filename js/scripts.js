let hateBtn = document.getElementById("hate");
let hateEl = document.querySelector(".hate");

hateBtn.addEventListener('click', function() {
    hateBtn.style.display = "none";
    for(let i = 0; i< 10000; i++) {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerText = "ghét quá";
        hateEl.appendChild(div);
    }

})