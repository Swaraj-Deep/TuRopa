const header = document.createElement('header');
const headerStyleSheet = document.createElement('link');

headerStyleSheet.setAttribute('rel', 'stylesheet');
headerStyleSheet.setAttribute('href', './js/appHeader/appHeader.css');

header.innerHTML = `
  <h1>Tu Ropa</h1>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootContainer = this.attachShadow({ mode: 'closed' });
    rootContainer.appendChild(header);
    rootContainer.appendChild(headerStyleSheet);
  }
}

customElements.define('app-header', AppHeader);
