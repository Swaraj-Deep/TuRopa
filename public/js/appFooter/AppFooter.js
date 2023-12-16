const footer = document.createElement('footer');
const footerStyleSheet = document.createElement('link');

footerStyleSheet.setAttribute('rel', 'stylesheet');
footerStyleSheet.setAttribute('href', './js/appFooter/appFooter.css');

footer.innerHTML = `
  footer
`;

class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootContainer = this.attachShadow({ mode: 'closed' });
    rootContainer.appendChild(footer);
    rootContainer.appendChild(footerStyleSheet);
  }
}

customElements.define('app-footer', AppFooter);
