import { describe, afterEach, it } from "@bigtest/mocha";
import { mount, cleanup } from "@bigtest/react";
import { expect } from "chai";

import FooBarInteractor from "../interactors/foo-bar";

// Import and initialize the component
import "../../src/index";

// Ensure JSX works correctly
import React from "react";

describe("testing a WebComponent", () => {
  let fooBar = new FooBarInteractor();

  afterEach(() => cleanup());

  it("can render a WebComponent", async () => {
    await mount(() => <foo-bar />);

    expect(document.querySelector("foo-bar")).to.exist;
  });

  it("can render into the ShadowDOM", async () => {
    await mount(() => <foo-bar name="Alex" />);

    expect(fooBar.name).to.equal("Alex");

    fooBar.name = "Emily";

    expect(fooBar.name).to.equal("Emily");
  });

  it("can render into a slot", async () => {
    await mount(() => (
      <foo-bar>
        <p>Inner Content</p>
      </foo-bar>
    ));

    expect(document.querySelectorAll("p")).to.have.length(1);
  });
});
