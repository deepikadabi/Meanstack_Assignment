// lets start here
const parent = document.querySelector("#id1");

window.addEventListener("load" , () => {

const parent = document.querySelector("#id1");

let list = [
    {id:1, name:"Deepika"},
    {id:2, name:"Chetan"},
    {id:3, name:"Neha"},
    {id:4, name:"Yash"},
    {id:5, name:"Anushika"},
    {id:6, name:"DeeJayapika"},
    {id:7, name:"Deepika"},
    {id:8, name:"Deepika"},
    {id:9, name:"Deepika"},
];


for(let i=0; i<list.length; i++){
    const newElem = parent.children[0].cloneNode(true);
    newElem.style.display = "flex";
    let item = list[i];
    newElem.children[0].innerHTML = item.name;
    parent.insertBefore(newElem, parent.firstChild);
}

});
  