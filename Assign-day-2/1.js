let callAjax = function () {
    let xhr = new XMLHttpRequest();
    xhr.onload =()=>{
        const refjson = JSON.parse(xhr.responseText);
        domlogic(refjson);
    };
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.send();

};

let domlogic = function(refjson) {
    console.log(refjson);
    let parent = document.querySelector("#parent");

    for(let i=0; i<refjson.data.length; i++){
        const items = refjson.data[i];
        let newElem = parent.children[0].cloneNode(true);
        newElem.innerHTML = items.first_name + " " + items.last_name;
        parent.insertBefore(newElem, parent.firstChild);
    }
};