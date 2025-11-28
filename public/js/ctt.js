// ctt.js - substitua inteiramente pelo conteúdo abaixo

// Menu Hamburguer
function openMenu() {
    document.getElementById("menuLateral").style.width = "250px";
  }
  function closeMenu() {
    document.getElementById("menuLateral").style.width = "0";
  }
 
  // Função única e robusta ativarTexto
  function ativarTexto(id) {
    const botao = document.getElementById(id);
    if (!botao) return;
 
    const texto = botao.querySelector("span");
 
    // estado inicial
    if (texto) texto.style.display = "none";
 
    botao.addEventListener("mouseenter", () => {
        // esconde enquanto anima
        if (texto) texto.style.display = "none";
     
        const w = window.innerWidth;
     
        if (w <= 468) {
          botao.style.transition = "width 0.35s ease, font-size 0.35s ease";
          botao.style.width = "250px";
          botao.style.fontSize = "12pt";
     
          // ➜ Mostra o texto assim que terminar a animação no mobile
          setTimeout(() => {
            if (texto) {
              texto.style.display = "block";
              texto.style.color = "white";
              texto.style.padding = "3px";
            }
          }, 350); // mesmo tempo da animação
        }
        else {
          botao.style.transition = "width 0.45s ease, font-size 0.45s ease";
          botao.style.width = "550px";
          botao.style.fontSize = "22pt";
        }
      });
     
 
    // Reage apenas quando a transição da largura terminar
    botao.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "width") return;
      if (texto) {
       // Só mostrar se o botão estiver ABERTO, não quando está fechando
if (texto && botao.offsetWidth > 200) {
    texto.style.display = "block";
    texto.style.color = "white";
    texto.style.padding = "3px";
}
}
    });
 
    botao.addEventListener("mouseleave", () => {
      if (texto) texto.style.display = "none";
      botao.style.transition = "width 0.35s ease, font-size 0.35s ease";
      botao.style.width = "120px";
      botao.style.fontSize = ""; // volta para o que está no CSS
    });
  }
 
  // Função que adiciona estilos específicos por botão (mantive suas cores)
  function addButtonColorHandlers() {
    const inst = document.getElementById("inst");
    if (inst) {
      inst.addEventListener("mouseenter", () => inst.style.background = "linear-gradient(rgb(255, 0, 221), rgb(255, 238, 0))");
      inst.addEventListener("mouseleave", () => inst.style.background = "white");
    }
 
    const whats = document.getElementById("whats");
    const wats = document.getElementById("zap")
    if (whats) {
        whats.addEventListener("mouseenter", () => {
          whats.style.background = "rgb(24, 207, 64)";          
        });
     
        whats.addEventListener("mouseleave", () => {
          whats.style.background = "white";                    
        });
      }
     
     
    const agen = document.getElementById("agen");
    if (agen) {
      agen.addEventListener("mouseenter", () => agen.style.background = "rgb(0, 174, 255)");
      agen.addEventListener("mouseleave", () => agen.style.background = "white");
    }
 
    const local = document.getElementById("local");
    if (local) {
      local.addEventListener("mouseenter", () => local.style.background = "rgb(214, 32, 32)");
      local.addEventListener("mouseleave", () => local.style.background = "white");
    }
  }
 
  // DOM ready: registra tudo uma vez
  window.addEventListener("DOMContentLoaded", () => {
    ativarTexto("inst");
    ativarTexto("whats");
    ativarTexto("agen");
    ativarTexto("local");
    addButtonColorHandlers();
  });
 