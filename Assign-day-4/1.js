let callAjaxUsingJquery = function(){
    let xhr = new XMLHttpRequest();
    let cityName = "pune";
        let url =
          "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
          cityName;

    $.ajx(url).done((data1)=> {
        myDomOperation(data1);
    });
};

let myDomOperation = (data1) => {

    console.log(refjson);
    let parent = document.querySelector("#parent");
        let newElem = parent.children[0].cloneNode(true);
        newElem.innerHTML = data1.name + " " + data1.main.temp_max;
        parent.insertBefore(newElem, parent.firstChild);
};





//*******************Using Json************************************* */
/*
let callAjaxUsingJquery = function() {
    let xhr = new XMLHttpRequest();
    let cityName = "pune";
        let url =
          "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
          cityName;
    xhr.onload = () =>{
        
        const refson = JSON.parse(xhr.responseText);
        domlogic(refson);

    };
    xhr.open("GET", url);
    xhr.send();

};

domlogic(data1) {

    console.log(refjson);
    let parent = document.querySelector("#parent");
        let newElem = parent.children[0].cloneNode(true);
        newElem.innerHTML = data1.name + " " + data1.main.temp_max;
        parent.insertBefore(newElem, parent.firstChild);
}

*/