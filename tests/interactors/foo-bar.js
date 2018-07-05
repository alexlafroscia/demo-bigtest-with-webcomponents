import { interactor } from "@bigtest/interactor";

@interactor
export default class FooBarInteractor {
  // the default scope allows us to omit the selector when calling `new`
  static defaultScope = "foo-bar";

  get name() {
    let textWrapper = this.$root.shadowRoot.querySelector("p");

    return textWrapper.innerText.trim();
  }
  set name(value) {
    this.$root.setAttribute("name", value);
  }
}
