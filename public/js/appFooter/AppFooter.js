const footer = document.createElement('footer');

footer.innerHTML = `
  <style>
    footer {
      height: var(--footerHeight);
    }

    :host(app-footer) {
      display: block;
      height: var(--footerHeight);
    }
  </style>
  footer
`;

class AppFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const rootContainer = this.attachShadow({ mode: 'closed' });
    rootContainer.appendChild(footer);
  }
}

customElements.define('app-footer', AppFooter);
