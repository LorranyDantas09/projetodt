const API_BASE = "/agendamentos";

// === Função de Pop-up estilizado ===
function showPopup(mensagem, tipo = "sucesso") {
  const popup = document.createElement("div");
  popup.className = `popup ${tipo}`;
  popup.textContent = mensagem;
  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("visivel"), 50);
  setTimeout(() => {
    popup.classList.remove("visivel");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

const form = document.querySelector(".form-servico");

// === Enviar formulário ===
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // CAPTURA REAL e SEGURA com IDs
  const data = {
    nome: document.getElementById("nome").value,
    servico: document.getElementById("servico").value,
    barbeiro: document.getElementById("barbeiro").value,
    data: document.getElementById("data").value,
    horario: document.getElementById("horario").value,
    observacoes: document.getElementById("obs").value
  };

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Erro ao enviar agendamento");

    showPopup("✅ Seu agendamento foi realizado com sucesso!", "sucesso");
    form.reset();

  } catch (err) {
    console.error(err);
    showPopup("❌ Erro ao realizar agendamento. Tente novamente.", "erro");
  }
});
