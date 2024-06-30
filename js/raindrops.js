function createDrop() {
    const drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 1 + 0.04}s`;
    document.querySelector('.rain').appendChild(drop);

    drop.addEventListener("animationiteration", () => {
        drop.remove();
        createDrop();
    });
}

for (let i = 0; i < 60; i++) {
    createDrop();
}