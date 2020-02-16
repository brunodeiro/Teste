var header = document.getElementById("header")
var menu = document.getElementById("call")
var footer = document.getElementById("footer")

var formEl = document.createElement("form")
formEl.setAttribute("action", "acesso.php")
formEl.setAttribute("method","post")
formEl.id="form"
menu.appendChild(formEl)

var logoEl = document.createElement("img")
logoEl.id="logo"
logoEl.src="img/logo2.png"
logoEl.setAttribute("width","200px")
logoEl.setAttribute("height", "80px")
header.appendChild(logoEl)

var mainDivEl = document.createElement("div")
mainDivEl.id="div_principal"
formEl.appendChild(mainDivEl)

var divEl1 = document.createElement("div")
divEl1.id="div01"
// divEl1.innerText=""
mainDivEl.appendChild(divEl1)

var divEl2 = document.createElement("div")
divEl2.id="div02"
// divEl2.innerText=""
mainDivEl.appendChild(divEl2)

var textoEl1 = document.createElement("p")
textoEl1.id="texto01"
textoEl1.innerText="Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Quem manda na minha terra sou euzis! In elementis mé pra quem é amistosis quis leo. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Delegadis gente finis, bibendum egestas augue arcu ut est. Aenean aliquam molestie leo, vitae iaculis nisl. Interagi no mé, cursus quis, vehicula ac nisi. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Quem num gosta di mim que vai caçá sua turmis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Casamentiss faiz malandris se pirulitá. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Leite de capivaris, leite de mula manquis sem cabeça.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. A ordem dos tratores não altera o pão duris. Atirei o pau no gatis, per gatis num morreus. Paisis, filhis, espiritis santis. Per aumento de cachacis, eu reclamis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de cevadiss deixa as pessoas mais interessantis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Mé faiz elementum girarzis, nisi eros vermeio. Quem num gosta di mé, boa gentis num é. Pra lá , depois divoltis porris, paradis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Cevadis im ampola pa arma uma pindureta. Detraxit consequat et quo num tendi nada. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Si num tem leite então bota uma pinga aí cumpadi!  Diuretics paradis num copo é motivis de denguis. Sapien in monti palavris qui num significa nadis i pareci latim.  Viva Forevis aptent taciti sociosqu ad Aenean sit amet nisi."
divEl2.appendChild(textoEl1)

var titulotextoEl1 = document.createElement("h4")
titulotextoEl1.id="titulotexto01"
titulotextoEl1.innerText="Dark Metamorphosis"
divEl1.appendChild(titulotextoEl1)