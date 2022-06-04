"use strict";

/**
 * Changing Data by trigger reset click event
 */
var scope2WayBindInstance = scope2WayBind();
var resetButton = document.querySelector("#resetButton");
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", function (event) {
  scope2WayBindInstance.setData("textIp", '');
});