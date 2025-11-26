// public/js/admin.js
document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tabela-agendamentos tbody");
  if (!tbody) { console.error("tbody não encontrado"); return; }

  async function carregarAgendamentos() {
    tbody.innerHTML = "";
    try {
      const res = await fetch("/api/agendamentos");
      if (!res.ok) throw new Error("Erro ao buscar agendamentos");
      const agendamentos = await res.json();
      agendamentos.forEach(a => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${a.nome || ""}</td>
          <td>${a.telefone || ""}</td>
          <td>${a.servico || ""}</td>
          <td>${a.barbeiro || ""}</td>
          <td>${a.data || ""}</td>
          <td>${a.horario || ""}</td>
          <td>${a.observacoes || ""}</td>
          <td>
            <button class="edit-btn" data-id="${a.id}">Editar</button>
            <button class="delete-btn" data-id="${a.id}">Deletar</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
      adicionarEventos();
    } catch (erro) {
      alert("Erro ao carregar os agendamentos: " + erro);
    }
  }

  function adicionarEventos() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        if (!confirm("Deseja realmente deletar este agendamento?")) return;
        try {
          await fetch(`/api/agendamentos/${id}`, { method: "DELETE" });
          carregarAgendamentos();
        } catch (err) {
          alert("Erro ao deletar: " + err);
        }
      });
    });

    document.querySelectorAll(".edit-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        const novoHorario = prompt("Digite o novo horário (HH:MM):");
        if (!novoHorario) return;
        try {
          await fetch(`/api/agendamentos/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ horario: novoHorario })
          });
          carregarAgendamentos();
        } catch (err) {
          alert("Erro ao atualizar: " + err);
        }
      });
    });
  }

  carregarAgendamentos();
});
