# Frontend Mentor - Solução de acordeão de perguntas frequentes

Esta é uma solução para o [desafio de acordeão de perguntas frequentes no Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação através da construção de projetos realistas.

## Índice

- [Visão geral](#visão geral)
   - [O desafio](#o-desafio)
   - [pequeno resumo](#pequeno-resumo)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-eu-aprendi)
   - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão geral

### O desafio

Os usuários devem ser capazes de:

- Ocultar/Mostrar a resposta a uma pergunta quando a pergunta é clicada
- Navegue pelas perguntas e oculte/mostre respostas usando apenas a navegação pelo teclado
- Veja o layout ideal da interface dependendo do tamanho da tela do dispositivo

### Pequeno Resumo

Sobre o projeto, eu senti um pouco de dificuldade quando foi para acrescentar o Footer, pois em tela com height maior, tecnicamente vai ficar sobrando muito espaço.
Mas no geral, eu gostei bastante de ter praticado novamente o Mobile first e usado o devtools.
obs: Minha tela é 1280px, logo, troquei a foto de mobile para desktop no "min-width:1280px".

## Meu processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas CSS
- Caixa flexível
- Grade CSS
- Fluxo de trabalho voltado para dispositivos móveis
- [Componentes estilizados](https://cdnjs.com/libraries/remixicon) - Para estilos
- [Componentes estilizados](https://remixicon.com/) - Para estilos

### O que eu aprendi

Aprendi sobre o "this.parentNode.nextElementSibling", que basicamente ele voltou para o seu segunda pai, que nesse caso era a classe="lista", e já pegou o próximo elemento que nesse caso era o "p", logo, era nele que podiámos fazer as alterações, que nesse caso era "mostrar e ocultar".

### Desenvolvimento contínuo

Gostei bastante de usar o mobile first, por isso, vou está usando esse método daqui para frente.
Vou usar também o devtools, para me ajudar nos estilos, pois eu vi que ajuda bastante também.

### Recursos úteis

- DevTools - Isso me ajudou pelo motivo que eu posso estilizar de forma mais dinamica, no qual é eu não precise usar o liver server do VSCode. Gostei muito desse padrão e vou usá-lo daqui para frente.
- Remixicon - Este é um artigo incrível que me ajudou a colocar icones. Eu recomendo para quem ainda enão tem seu site próximo de icones.

## Autor

- Site - [Site Ativo](https://perguntas-frequentes-alpha.vercel.app/)
- Mentor de Frontend - [@DavidMarinho2203](https://www.frontendmentor.io/profile/DavidMarinho2203)

## Agradecimentos

É aqui vou está agradecendo ao próprio site de Mentor Frontend, pois, eu estava sem ideias para praticar css.