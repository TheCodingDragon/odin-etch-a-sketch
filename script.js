const pad = document.querySelector(".pad");
let size = 64;

for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "#222";
    });

    let conversion = 960 / size;

    box.style.height = `${conversion}px`;
    box.style.minWidth = `${conversion}px`;
    box.style.border = "solid #222"
    box.style.borderWidth = "0 1px 1px 0px";
    pad.append(box);
}

