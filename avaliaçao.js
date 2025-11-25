function openMenu() {
        document.getElementById("menuLateral").style.width = "250px";
      }

      function closeMenu() {
        document.getElementById("menuLateral").style.width = "0";
      }


      


// Seleciona o input onde o usuário digita a avaliação
const input = document.querySelector(".ava input");

// Seleciona todas as caixas de avaliação
const caixas = document.querySelectorAll(
  ".quadrado1, .quadrado2, .quadrado3, .quadrado4"
);

// Índice da próxima caixa que será preenchida
let proximaCaixa = 0;

// Evento: quando o usuário pressiona ENTER
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const texto = input.value.trim(); // pega o texto digitado

    if (texto === "") return; // se vazio, ignora

    // Se todas as caixas já foram preenchidas
    if (proximaCaixa >= caixas.length) {
      alert("Todas as caixas já estão preenchidas!");
      return;
    }

    // Insere estrelas + texto da avaliação na caixa
    caixas[proximaCaixa].innerHTML = `
     
      <p class="avaliacao">${texto}</p>
    `;

    // Limpa o input
    input.value = "";

    // Vai para a próxima caixa
    proximaCaixa++;
  }
});




    