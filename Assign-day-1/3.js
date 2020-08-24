const parent = document.querySelector("#id1");
window.addEventListener("load", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("Get", "https://reqres.in/api/users?page=2");
    console.log(xhr);

})