const parent = document.querySelector("#parentBlock");
window.addEventListener("load", () => {

    const parent = document.querySelector("#parentBlock");

    for(let i=0; i<10; i++)
    {
    let newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    parent.insertBefore(newElement, parent.firstChild);

    }
});