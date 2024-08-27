
function div(className) {
    const div = document.createElement('div');
    // Ajouter la classe à la div
    div.classList.add(className);
    return div;
}

// function createInputWithAttributes(type, attributes) {
//     const input = document.createElement('input');
//     input.setAttribute('type', type);

//     // Parcourir tous les attributs passés en paramètre et les définir sur l'élément input
//     for (const key in attributes) {
//         if (attributes.hasOwnProperty(key)) {
//             input.setAttribute(key, attributes[key]);
//         }
//     }

//     return input;
// } =============> à comprendre  <================================

const mainElement = document.createElement('main');
const articleElement = document.createElement('article');
const h2Element = document.createElement('h2');
const myInput = document.createElement('input');
const buttonSubmit  = document.createElement('input');


//add text in elements 
h2Element.innerText= "Your Do do List";

//Creation of div
const h2Div = div('div-h2');
const inputContainerDiv = div('container_input');
const liAdd = div('container-li');

// myInput attributes  
myInput.setAttribute('type', 'text');
myInput.setAttribute('id', 'text');
myInput.setAttribute('name', 'text');
myInput.setAttribute('placeholder', 'Max 25 characters');
myInput.setAttribute("maxlength","25");

//my submit button 
buttonSubmit.setAttribute('type', 'submit');
buttonSubmit.setAttribute('id', 'Submit');
buttonSubmit.setAttribute('name', 'submit');
buttonSubmit.setAttribute('value','')
buttonSubmit.setAttribute('class','submit-button');

h2Div.appendChild(h2Element); // add h2element in the h2div
articleElement.appendChild(h2Div); // add h2div in the article
inputContainerDiv.appendChild(myInput);
inputContainerDiv.appendChild(buttonSubmit);
articleElement.appendChild(inputContainerDiv);
articleElement.appendChild(liAdd);
mainElement.appendChild(articleElement);//add articleElement in the main 
document.body.appendChild(mainElement); //add mainElement in the body

function addLiElemennt (){
    const containerLi = document.querySelector('input[type="submit"]'); //take the input submit 
   
    const addLi = document.createElement('li');
    // liAdd.appendChild(addLi);
    

    return containerLi;
}

// const li = document.getElementById('Submit'); // récupére le input submit 
// console.log("league of Legend ",li);

const arrayLi = [];

document.getElementById("Submit").addEventListener("click", function(event) {
    // event.preventDefault(); // Pour empêcher le comportement par défaut du formulaire
  
    let texteSaisi = document.getElementById("text").value;
    console.log("Texte saisi : " + texteSaisi);
  
    // Faites ce que vous voulez avec le texte saisi ici

    const divLI = document.createElement('div');
    divLI.classList.add('divContainerLiImg');
    divLI.setAttribute('id','container-li')
    const liAddContainer = document.createElement('li');
    liAddContainer.setAttribute("class","liDesign");
    const inputCheck = document.createElement('input');

    inputCheck.setAttribute("type","checkbox");
    inputCheck.classList.add('redim-checkBox');

    const imgDelete = document.createElement('img');
    imgDelete.classList.add('delete-img');
    imgDelete.setAttribute("src","https://cdn.discordapp.com/attachments/1234441354751512597/1234798040389259284/delete.png?ex=66320aca&is=6630b94a&hm=e2c7f2f4d8b50b83c3ca24b690ecf53b5c24ee20f805eedb84ebc31db3f3b330&");
    // imgDelete.setAttribute("style", "width: 5%;");



    divLI.appendChild(inputCheck);
    divLI.appendChild(liAddContainer);
    divLI.appendChild(imgDelete);
    liAdd.appendChild(divLI);
    liAddContainer.innerText = texteSaisi;

    // récupère chaque div et les met dans un tableau 
    const Take = document.getElementById("container-li");

    
    arrayLi.push(Take);
    console.log(arrayLi)
  });

;

// const Take = document.querySelector('divContainerLiImg');
// console.log(Take);

//   document.getElementById("Submit").addEventListener("click", function(supp){
//     supp.preventDefault(); // Pour empêcher le comportement par défaut du formulaire



//   });
    
  





