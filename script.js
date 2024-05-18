const pad = document.querySelector(".pad");
const btn = document.querySelector(".size");
const MAX_SIZE = 100;
let size = 16;

renderGrid();

btn.addEventListener("click", function () {
    size = parseInt(prompt("Enter a number from 1 - 100: "));
    if (size <= MAX_SIZE) {
        pad.innerHTML = "";
        btn.innerHTML = `Change Grid Size: ${size}`;
        renderGrid();
    }
});



function renderGrid() {

    function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `RGB(${r}, ${g}, ${b}`;
    }

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.addEventListener("mouseover", function () {

            box.style.backgroundColor = getRandomColor();
        });

        let conversion = 960 / size;

        box.style.height = `${conversion}px`;
        box.style.minWidth = `${conversion}px`;
        box.style.border = "solid #222"
        box.style.borderWidth = "0 1px 1px 0px";
        pad.append(box);
    }
}