class FooBar extends HTMLElement {
  static is = "foo-bar";
  static observedAttributes = ["name"];

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._render();
  }

  attributeChangedCallback() {
    this._render();
  }

  _render() {
    let name = this.getAttribute("name");

    this.shadowRoot.innerHTML = `
      <p>${name}</p> 

      <slot />
    `;
  }
}

customElements.define(FooBar.is, FooBar);
