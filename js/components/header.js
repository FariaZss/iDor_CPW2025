class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="cabecalho">
        <header class="head">

            <div class="menuBurg">
                <i class="bi bi-list"></i>
            </div>

            <div class="pesquisa">
                <form class="buscas-box">
                    <input type="text" class="buscas-input" placeholder="Pesquisar...">
                    <button type="submit" class="buscas-btn">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
            </div>

            <div class="cart"><i class="bi bi-basket"></i></div>
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
        crossorigin="anonymous"></script>
    `;
  }
}

customElements.define('header-component', Header);