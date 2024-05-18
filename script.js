const pad = document.querySelector(".pad");


for (let i = 0; i < 16 * 16; i++) {
    const box = document.createElement("div");
    box.style.height = "60px";
    box.style.minWidth = "60px";
    box.style.border = "solid #222"
    box.style.borderWidth = "0 1px 1px 0px";
    pad.append(box);
}

