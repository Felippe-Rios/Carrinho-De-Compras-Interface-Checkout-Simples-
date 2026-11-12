document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "R$0";

function adicionar() {
    
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    //depois de recuperar as informaçoes necessarias vamos fazer o subtotal
    let preco = quantidade * valorUnitario;
    //proximo passo tentar adicionar o produto no carrinho,IA= para isso vamos criar uma variavel que vai receber o produto
    
    let listaCarrinho = document.getElementById("lista-produtos");
    listaCarrinho.innerHTML = `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span> </section>` + listaCarrinho.innerHTML;
    let valorTotal = document.getElementById("valor-total");
    let somadovalortotal = parseFloat(valorTotal.innerHTML.split("R$")[1]) + preco;
    valorTotal.innerHTML = `R$${somadovalortotal.toFixed(2)}`;
    document.getElementById("quantidade").value = "";
} 
function limpar() {
    // Implementation for clearing the cart
    let listaCarrinho = document.getElementById("lista-produtos");
    let valorTotal = document.getElementById("valor-total");

    listaCarrinho.innerHTML = "";
    valorTotal.innerHTML = "R$0";
}
