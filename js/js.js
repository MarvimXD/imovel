

window.onload = () => {
    document.getElementById("bloco-input-submit").addEventListener("click", () => {
    
        var pais = document.getElementById("pais").value;
        var estado = document.getElementById("estado").value;
        var cidade = document.getElementById("cidade").value;
        var bairro = document.getElementById("bairro").value;

        alert(pais);
        alert(estado);
        alert(cidade);
        alert(bairro);

});

    document.getElementById("bloco-dois").addEventListener("click", () => {
        window.location.href = "https://www.imovelweb.com.br/propriedades/apartamento-para-aluguel-aguas-claras-1-quarto-33-2957506369.html";
    });

    document.getElementById("bloco-tres").addEventListener("click", () => {
        window.location.href = "https://www.imovelweb.com.br/propriedades/excelente-loja-para-locacao-grande-reformada-otima-2949883620.html";
    });

    document.getElementById("bloco-quatro").addEventListener("click", () => {
        window.location.href = "https://www.imovelweb.com.br/propriedades/master-place-excelente-kitnet-para-locacao!-agende-2951184404.html";
    });

}