// obtendo os containers(avaliacao e avaliado), os botões(classificar,Atualizar,enviarAvaliacao) e o local de resposta
const containerAvaliacao = document.getElementById("avaliacao");
const btnEnviarAvaliacao = document.getElementById("btn__enviar");
const resultado = document.getElementById("resultado");

const containerAvaliado = document.getElementById("avaliado");
const btnAtualizar = document.getElementById("btn__atualizar");

const btnClassificar = document.querySelectorAll(".classificar");

let escolhido = []; // local que vai ser guardado a avaliação.

// evento criado para quando o mouser clicar em uma das opções.
btnClassificar.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const numero = Number(e.target.textContent);

    if (numero != escolhido[0]) {
      // retira
      escolhido.pop();
      escolhido.push(numero);
    } else {
      escolhido.push(numero);
    }

    // Remover a classe 'checked' de todos os itens
    document
      .querySelectorAll(".classificar")
      .forEach((i) => i.classList.remove("checked"));

    // Adicionar a classe 'checked' apenas ao item clicado
    e.target.classList.add("checked");
  });
});

// evento criado para quando o btnEnviarAvaliacao for clicado.
btnEnviarAvaliacao.addEventListener("click", () => {
  containerAvaliacao.style.display = "none";
  containerAvaliado.style.display = "flex";
  resultado.textContent = `Você avaliou ${escolhido[0]} de ${btnClassificar.length}`;
});

// evento criado para quando o btnAvaliacao for clicado.
btnAtualizar.addEventListener("click", () => {
  containerAvaliacao.style.display = "flex";
  containerAvaliado.style.display = "none";
  // Remover a classe 'checked' de todos os itens
  document
    .querySelectorAll(".classificar")
    .forEach((i) => i.classList.remove("checked"));
});
