const parent = document.querySelector("#id1");
window.addEventListener("load", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("Get", "https://reqres.in/api/users?page=2");
    console.log(xhr);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            console.log(xhr.responseText);
            let sjson = JSON.parse(xhr.responseText);
            domlogic(sjson.data);
        }
    };
xhr.send();
});

let domlogic = function(list){

        const parent = document.querySelector("#id1");
        for(let i=0; i<list.length; i++){

            let item = list[i];
            const newElem = parent.children[0].cloneNode(true);
            newElem.style.display = "flex";
            newElem.children[0].innerHTML = item.first_name + " " + item.last_name;
            parent.insertBefore(newElem, parent.firstChild);

        }
};