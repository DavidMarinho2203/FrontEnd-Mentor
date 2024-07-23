document.addEventListener('DOMContentLoaded',async  function () {
    await fetch('./data.json') // o caminho do fetch é relativo ao caminho do index.html.
        .then(res => res.json())
        .then(objeto => {
            // Obtém a div de conteúdo
            const resultado = document.querySelector('h1')

            // Preenche o conteúdo com os dados do JSON
            const somaScore = (objeto.reduce((acc, element) => acc + element.score, 0) / objeto.length).toFixed(0)
            resultado.textContent = somaScore

            const ul = document.getElementById('container__categorias')
            objeto.forEach(element => {
                // Criando a lista
                const li = this.createElement('li')
                li.id = 'categoria__' + element.category
                li.classList = 'categoria'

                switch (element.category) {
                    case 'Reacao':
                        li.style.backgroundColor = 'var(--corC-VermelhoClaro)'
                        break;
                    case 'Memoria':
                        li.style.backgroundColor = 'var(--corC-AmareloAlaranja)'
                        break;
                    case 'Verbal':
                        li.style.backgroundColor = 'var(--corC-VerdeAzulado)'
                        break;
                    default:
                        li.style.backgroundColor = 'var(--corC-AzulCobalto)'
                        break;
                }

                // Primeira div
                const div1 = this.createElement('div')
                div1.classList = 'categoria__Icone_Nome'
                const img = this.createElement('img')
                img.src = `${element.icon}`
                const p1 = this.createElement('p')
                p1.classList = 'categoria__nome'
                p1.textContent = element.category
                div1.append(img, p1)
                
                // Segunda div
                const div2 = this.createElement('div')
                div2.classList = 'container__valores'
                const p2 = this.createElement('p')
                p2.classList = 'categoria__numero'
                p2.textContent = `/ 100`
                const span2 = this.createElement('span')
                span2.textContent = element.score
                div2.append(span2, p2)
                // Incluindo no li e depois na ul
                li.append(div1, div2)
                ul.appendChild(li)


            });


        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o JSON:', error);
        });
})

document.querySelector('button').addEventListener('click', () => {
    alert("Obrigado por participar!\nEsta é uma página de exercícios destinada apenas ao treinamento.\nEssas esse número foram obtidos em um arquivo Json, logo, isso é inacessível")

    location.reload()

})
