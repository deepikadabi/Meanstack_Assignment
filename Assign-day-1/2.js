const parent = document.querySelector("#id1");
window.addEventListener("load", () => {
    const parent = document.querySelector("#id1");

    let list = [
        {id:1, "name":"Deepika"},
        {id:2, "name":"yash"},
        {id:3, "name":"chetan"},
        {id:4, "name":"Deepirupalika"},
        {id:5, "name":"rupali"},
        {id:6, "name":"Deepsakshiika"},
        {id:7, "name":"Deepika"}
    ];


    for(let i=0;i<=list.length;i++)
    {
        let items = list[i];
        let newElement = parent.children[0].cloneNode(true);
        newElement.style.display ="flex";
        newElement.children[0].innerHTML = items.name;
        parent.insertBefore(newElement, parent.firstChild);

    }
});