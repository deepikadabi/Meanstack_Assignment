const parent = document.querySelector("#id1");
window.addEventListener("load", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            let sjson = JSON.parse(xhr.responseText);
            domlogicHere(sjson.data);
        }
    };
    xhr.send();
    
});


let domlogicHere = function (list){
const parent = document.querySelector("#id1");
for(let i=0; i<list.length; i++){
    let item = list[i];
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.children[0].innerHTML = item.first_name + " " + item.last_name;
    parent.insertBefore(newElement, parent.firstChild);
}

};