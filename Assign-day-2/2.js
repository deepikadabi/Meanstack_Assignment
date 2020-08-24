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


let callXML = () => {
    console.log("AJAX 4 XML RESPONSE");
  
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");
  
    // set extra header
    xhr.setRequestHeader("accept", "application/xml");
  
    // handle response
    xhr.onload = () => {
      console.log(xhr.responseXML);
  
      // lets seprate the logic for dom operation
      handleDOMOperatoinUsingXML(xhr.responseXML);
    };
  
    // finally send the request
    xhr.send();
  };
  
  let handleDOMOperatoinUsingXML = (xmlDoc) => {
    console.log(xmlDoc);
    const authorList = xmlDoc.querySelectorAll("Author");
  
    // let iterate array
  
    for (let i = 0; i < authorList.length; i++) {
      // let accecss author
      const item = authorList[i];
  
      // lets access FirstName and LastName
      const firstName = item.children[0].innerHTML;
      const lastName = item.children[3].innerHTML;
  
      // create sample block
      const parent = document.querySelector("#parent");
      const newElement = parent.children[0].cloneNode(true);
  
      // replace the hardcode value
      newElement.innerHTML = firstName + " " + lastName;
  
      parent.insertBefore(newElement, parent.firstChild);
    }
  };
  