/**
 * Changing Data by trigger reset click event
 */
const resetButton = document.querySelector("#resetButton");
resetButton?.addEventListener("click", (event) => {
    scope2WayBind.setData("textIp",'');
});