const removerProduto = document.getElementsByClassName("bx bx-x")
for(var i=0; i<removerProduto.length; i++){
    removerProduto[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.parentElement.remove()
    })
}

let totalamount = 0
const Produtos = document.getElementsByClassName("produtos")
for (var i=0; i<Produtos.lenght; i++){
    const produtopreço = Produtos[i].getElementsByClassName("produtos")[0].innerText.replace("R$","").replace(",",".")
    const quantidadeproduto = Produtos[i].getElementsByClassName("qtd")[0].value

    totalamount +=  produtopreço * quantidadeproduto
}

document.getElementsByClassName("total").innerText = totalamount