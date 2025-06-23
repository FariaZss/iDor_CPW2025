class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">

    <section id="cabecalho">
        <header class="head">

            
            <a href="index.html" title="Home" style="color:inherit; text-decoration:none; font-size:1.7em; margin-right:16px;">
                <i class="bi bi-house-door"></i>
            </a>
            
            <nav id="sidebar">

                

                <div class="menuBurg" >
                    <i class="bi bi-list" onclick="openNav()"></i>
                </div>

                <div id="mySidenav" class="sidenav">

                    <div class="logo_menu">
                        <img src="src/logo_idor.png" alt="logo">
                    </div>

                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <a href="/categorias.html">Categorias</a>
                    <a href="#blocoProduto">Destaques</a>
                    <a href="#blocoPromo">Promoções</a>
                    <a href="#rodape">Contato</a>
                    <a href="#rodape">Sobre Nós</a>
                    <a href="https://maps.app.goo.gl/YkFqk7woLcwz1BMW6">Farmácias próximas de você</a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6908.598405331317!2d-51.22230977198572!3d-30.028272908947113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFarm%C3%A1cias!5e0!3m2!1spt-BR!2sbr!4v1750711448842!5m2!1spt-BR!2sbr" width="270" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </nav>

            <div class="pesquisa">
                <form class="buscas-box">
                    <input type="text" id="buscas-input" class="buscas-input" placeholder="  Pesquisar...  ">
                    <button type="submit" id="buscas-botao" class="buscas-btn">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
            </div>

            <div class="cart">
              <a href="carrinho.html" title="Ver carrinho" style="color:inherit; text-decoration:none;">
                <i class="bi bi-basket"></i>
              </a>
            </div>
        </header>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script> `;
  }
}

customElements.define('header-component', Header);