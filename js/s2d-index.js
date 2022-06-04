/**
 * Changing Data by trigger reset click event
 */
var scope2WayBindInstance =  scope2WayBind();
const resetButton = document.querySelector("#resetButton");
resetButton?.addEventListener("click", (event) => {
    scope2WayBindInstance.setData("textIp",'');
});