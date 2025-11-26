document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tabela-agendamentos tbody");

  if (!tbody) {
      console.error("ERRO: elemento #tabela-agendamentos tbody não existe no HTML");
      return;
  }

  async function carregarAgendamentos() {
      tbody.innerHTML = "";
      try {
          const res = await fetch("/agendamentos"); 
          const agendamentos = await res.json();

          agendamentos.forEach(a => {
              const tr = document.createElement("tr");
              tr.innerHTML = `
                  <td>${a.cliente}</td>
                  <td>${a.telefone}</td>
                  <td>${a.servico}</td>
                  <td>${a.profissional}</td>
                  <td>${a.data}</td>
                  <td>${a.hora}</td>
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

              if (confirm("Deseja realmente deletar este agendamento?")) {
                  try {
                      const res = await fetch(`/agendamentos/${id}`, {
                          method: "DELETE"
                      });
                      const texto = await res.text();
                      alert(texto);
                      carregarAgendamentos();
                  } catch (erro) {
                      alert("Erro ao deletar: " + erro);
                  }
              }
          });
      });

      document.querySelectorAll(".edit-btn").forEach(btn => {
          btn.addEventListener("click", async () => {
              const id = btn.dataset.id;
              const novoHorario = prompt("Digite o novo horário (HH:MM):");

              if (novoHorario) {
                  try {
                      const res = await fetch(`/agendamentos/${id}`, {
                          method: "PATCH",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ hora: novoHorario })
                      });
                      const texto = await res.text();
                      alert(texto);
                      carregarAgendamentos();
                  } catch (erro) {
                      alert("Erro ao atualizar: " + erro);
                  }
              }
          });
      });
  }

  carregarAgendamentos();  
});
  