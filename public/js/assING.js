function openMenu() {
    document.getElementById("menuLateral").style.width = "250px";
}

function closeMenu() {
    document.getElementById("menuLateral").style.width = "0";
}


const botaoAssinar = document.querySelector('.btn-assinar');
const loading = document.getElementById('loading');

if (botaoAssinar) {
    botaoAssinar.addEventListener('click', () => {
        const confirmar = confirm("Do you really want to become a Club Detroit subscriber?");

        if (confirmar) {
            loading?.classList.add('ativo');

            window.location.href = "asspING.html";
        } else {
            alert("Subscription has been cancelled.");
        }
    });
}

