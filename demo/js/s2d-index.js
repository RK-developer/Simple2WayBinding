/**
 * Changing Data by trigger reset click event
 */
var scope2WayBindInstance =  simple2WayBind();
const resetButton = document.querySelector("#resetButton");
resetButton?.addEventListener("click", (event) => {
    scope2WayBindInstance.setData("textIp",'');
});