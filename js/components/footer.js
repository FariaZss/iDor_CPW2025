class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="rodape">
        <footer>
        <button class="botao-topo" title="Voltar ao topo">
            <i class="bi bi-arrow-bar-up"></i>
        </button>

        <div class="rodape_div">

            <div class="rodape_div_1">

                <img src="src/logo_idor.png" alt="logo" width="60px" height="60px">





            </div>

            <div class="rodape_div2">

                <span><b>Contatos</b></span>
                <p>E-mail: Idor@ifrs.com.br</p>
                <p>Telefone: (51) 3930-6002</p>
                <p>Endereço: R. Cel. Vicente, 281 - Porto Alegre/RS</p>


            </div>
            <div class="rodape_div3">

                    <span>
                        <b>Social</b>
                    </span>

                    <div class="Redes">
                        <a href="https://www.instagram.com/">
                            <img src="src/logo_intagram.png" alt="Logo Instagram" width="40px" height="40px"></a>

                        <a href="https://www.linkedin.com/">
                            <img src="src/logo_linkedin.png" alt="Logo LinkedIn" width="40px" height="40px"></a>
                        <a href="https://Facebook.com/">
                            <a href="https://Facebook.com/murilo00225">
                                <img src="src/logo_face.png" alt="Logo Facebook" width="40px" height="40px"></a>
                    </div>
                </div>

                <div class="rodape_div4">
                    <h4></h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27634.917834464293!2d-51.24180078506472!3d-30.026392471992736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979082a86e831%3A0x9b4615117c97cf33!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20do%20Rio%20Grande%20do%20Sul%20-%20Campus%20Porto%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1748373242374!5m2!1spt-BR!2sbr"
                        width="270" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>

                </div>

            </div>
            <script>
                document.querySelector('.botao-topo').addEventListener('click', (event) => {
                    event.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });

            </script>


        </div>
        </footer>
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

customElements.define('footer-component', Footer);