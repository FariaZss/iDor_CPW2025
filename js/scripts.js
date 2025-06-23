document.querySelector('.botao-topo').addEventListener('click', (event) => {
                    event.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });

function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}