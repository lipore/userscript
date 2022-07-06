// ==UserScript==
// @name         Remove Ad for qbxs123.com
// @namespace    http://lipore.cn/
// @version      0.1
// @description  try to take over the world!
// @author       Lipore
// @match        https://m.qbxs123.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function onready(fn) {
    if (document.readyState != "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function removeElementBySelector(selector) {
    var element = document.querySelector(selector);
    if (element) {
      element.remove();
      console.log("removed " + selector);
    } else {
      console.log("no " + selector + "found");
    }
  }
  console.log("test");
  onready(() => {
    removeElementBySelector("#VYtNc")
    removeElementBySelector(".nr_page div")
    removeElementBySelector(".readwz")
    removeElementBySelector(".readon")
  });
})();
