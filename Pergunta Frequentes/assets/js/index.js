const btn__descricao = document.querySelectorAll('.btn__descricao') // obtendo os icones para mostrar a descrição

// evento utilizado para cada item do 'btn__descricao'.
btn__descricao.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // obtém o elemento pai('.lista') depois obtém seu irmão ('.lista__descricao')
        const estadoDaDescricao = this.parentNode.nextElementSibling 

        estadoDaDescricao.classList = estadoDaDescricao.classList == 'lista_descricao mostrar' ? 'lista_descricao ocultado' : 'lista_descricao mostrar'

        const estadoIcone = this // faz referência o prório o elemento e muda a classe
        estadoIcone.classList = estadoIcone.classList == 'btn__descricao ri-add-circle-fill' ? 'btn__descricao ri-indeterminate-circle-fill' : 'btn__descricao ri-add-circle-fill'

    })

})



