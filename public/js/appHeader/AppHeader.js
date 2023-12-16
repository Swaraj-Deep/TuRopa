const header = document.createElement('header');
const headerStyleSheet = document.createElement('link');
const globalStyleSheet = document.createElement('link');

header.classList.add('flex', 'items-baseline', 'justify-between', 'z-max');

headerStyleSheet.setAttribute('rel', 'stylesheet');
headerStyleSheet.setAttribute('href', './js/appHeader/appHeader.css');
globalStyleSheet.setAttribute('rel', 'stylesheet');
globalStyleSheet.setAttribute('href', './css/globals.css');

header.innerHTML = `
  <h1>Tu Ropa</h1>
  <ul>
    <li>
      <a>Cart</a>
    </li>
    <li>
      <a>Login</a>
    </li>
  </ul>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootContainer = this.attachShadow({ mode: 'closed' });
    rootContainer.appendChild(header);
    rootContainer.appendChild(headerStyleSheet);
    rootContainer.appendChild(globalStyleSheet);
  }
}

customElements.define('app-header', AppHeader);
