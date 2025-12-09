// public/js/agendamento.js
const API_BASE = "/api/agendamentos";

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
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone")?.value || null,
    servico: document.getElementById("servico").value,
    barbeiro: document.getElementById("barbeiro")?.value || null,
    data: document.getElementById("data").value,
    horario: document.getElementById("horario").value,
    observacoes: document.getElementById("obs")?.value || null
  };

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.erro || "Erro ao enviar agendamento");
    }

    showPopup("✅ Your booking was completed successfully");
    form.reset();
  } catch (err) {
    console.error(err);
    showPopup("❌ An error occurred while scheduling your appointment. Please try again.", "error");
  }
});
