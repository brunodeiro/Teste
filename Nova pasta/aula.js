var menu=document.getElementById("tepes")

var divEl=document.createElement("div")
divEl.id="div_geral"
menu.appendChild(divEl)

var inputNome=document.createElement("input")
inputNome.id="nome"
inputNome.setAttribute("placeholder", "Digite o nome")
divEl.appendChild(inputNome)

var inputLink=document.createElement("input")
inputLink.id="link"
inputLink.setAttribute("placeholder", "Digite o link")
divEl.appendChild(inputLink)

var btn=document.createElement("button")
btn.id="enviar"
btn.innerText="Enviar"
btn.setAttribute("onclick", "addItem()")
divEl.appendChild(btn)

var ulEl=document.createElement("ul")
ulEl.id="ul"
divEl.appendChild(ulEl)


// function algo(){
//     for (var key in localStorage){
//         console.log(key)
//      }
// }

function addItem(){
    if(inputNome.value && inputLink.value){
        var item = document.createElement("li")
        var link = document.createElement("a")

        link.innerHTML=inputNome.value
        link.setAttribute("target", "_blank")
        link.setAttribute("href", inputLink.value)

        item.appendChild(link)
        ulEl.appendChild(item)     

        // localStorage.setItem(inputNome.value, inputLink.value)
        


        inputNome.value=""
        inputLink.value=""

    }
    else{
        alert("Preencha todos os campos!")
    }
}