class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  `
        <header>
            <div class="header">
                <h1><a href="index.html">legehjelp</a></h1>
                <button class="navbar-toggle" onclick="hideShow()">
                    <i class="fa fa-bars"></i>
                </button>
                <nav>    
                    <li class="nav-item"><a class="nav-link" href="veileder.html">Veiledere</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html">Normalfraser</a></li>
                    <li class="nav-item"><a class="nav-link" href="gentamycin.html">Genta-kalkulator</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.html">Prosjekter</a></li>
                    <li class="nav-item"><a class="nav-link" href="om_oss.html">Om oss</a></li>
                </nav>
            </div>
            <nav id="nav-mobile" style="display: none;">
                <li class="nav-item"><a class="nav-link" href="veileder.html">Veiledere</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html">Normalfraser</a></li>
                <li class="nav-item"><a class="nav-link" href="gentamycin.html">Genta-kalkulator</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html">Prosjekter</a></li>
                <li class="nav-item"><a class="nav-link" href="om_oss.html">Om oss</a></li> 
            </nav>
        </header>
        `
    }
};

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  `
        <footer>
            &copy; 2023 Legehjelp | All Rights Reserved
        </footer>
        `
    }
};

customElements.define('my-footer',MyFooter);