import "@babel/polyfill";
import React from "react";

window.React = React;

// we import our tests using webpack's require.context
const requireTest = require.context(".", true, /-test/);
requireTest.keys().forEach(requireTest);
