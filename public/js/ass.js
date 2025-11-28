function openMenu() {
        document.getElementById("menuLateral").style.width = "250px";
      }

      function closeMenu() {
        document.getElementById("menuLateral").style.width = "0";
      }

      
      const botaoAssinar = document.querySelector('.btn-assinar');
      const loading = document.getElementById('loading');
  
      botaoAssinar.addEventListener('click', () => {
        const confirmar = confirm("Deseja realmente se tornar um assinante do Clube Detroit?");
  
        if (confirmar) {
          
          loading.classList.add('ativo');
  
          
          setTimeout(() => {
            window.location.href = "assp.html";
          }, 0);
        } else {
          alert("A assinatura foi cancelada.");
        }
      });
   