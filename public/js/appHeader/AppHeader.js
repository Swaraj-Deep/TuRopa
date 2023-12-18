const header = document.createElement('header');
const globalStyleSheet = document.createElement('link');

header.classList.add(
  'flex',
  'items-center',
  'justify-between',
  'z-max',
  'top-zero',
  'p-fixed'
);

globalStyleSheet.setAttribute('rel', 'stylesheet');
globalStyleSheet.setAttribute('href', './css/globals.css');

header.innerHTML = `
  <style>
    header {
      padding: var(--space-padding-sm) var(--space-padding-md);
      width: calc(100% - (2 * var(--space-padding-md)));
      background: var(--color-bg-primary);
      height: calc(var(--headerHeight) - 2 * var(--space-padding-sm));
    }

    h3 {
      margin: 0;
      padding: 0;
      display: inline-block;
      font-size: var(--typography-size-h3);
      font-weight: var(--typography-weight-h3);
      letter-spacing: var(--typography-letter-space-h3);
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    li a {
      padding: 0 var(--space-padding-sm);
      margin: 0 var(--space-padding-sm);
      max-width: 7rem;
      cursor: pointer;
    }

    :host(app-header) {
      display: block;
      height: var(--headerHeight);
    }
  </style>
  <h3>Tu Ropa</h3>
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
    rootContainer.appendChild(globalStyleSheet);
  }
}

customElements.define('app-header', AppHeader);
