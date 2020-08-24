let counter=0;

function submit() {
  counter++;
  let name = document.querySelector('#name').value;
  document.querySelector("#iname").innerHTML = name;

  let idnum = document.querySelector('#id').value;
  let idno = parseInt(idnum);
  document.querySelector("#idno").children[0].innerHTML = idno + counter;

  let bdate = document.querySelector("#bdate").value;
  document.querySelector("#ibdate").innerHTML = bdate;

  let bgroup = document.querySelector("#bgroup").value;
  document.querySelector("#ibgroup").innerHTML = bgroup;

  let num = Number(document.querySelector("#number").value);
  document.querySelector("#inum").innerHTML = num;

  let uphoto = document.querySelector("#customFile").files[0].name;
  document.querySelector("#img").src = uphoto;

  
  document.querySelector("#name").value = "";
  document.querySelector("#bdate").value = "";
  document.querySelector("#bgroup").value = "";
  document.querySelector("#number").value = "";
  document.querySelector("#customFile").files[0] = "";
}