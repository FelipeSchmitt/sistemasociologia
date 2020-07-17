function createDiv(){
    const conteudo = document.getElementById("content");
    const h1 = document.createElement("h1");
    const p = document.createElement("p")
    const img = document.createElement("img");
    conteudo.appendChild(h1);
    h1.appendChild(document.createTextNode("Métodos de Produção Capitalista e Precarização do Trabalho"))
    conteudo.appendChild(img)
    img.src = "https://www.moskvaer.com/wp-content/uploads/2016/07/capitalism.jpg";
    img.style.width="100%"
    conteudo.appendChild(p)
    p.appendChild(document.createTextNode("Nesse trabalho escolar nós tratamos de falar sobre os métodos de produção mais inovadores do capitalismo, dando enfase a nossa opinião sobre como o trabalho volta a ser precarizado nos tempos atuais"))
    p.style.width="100%"
}