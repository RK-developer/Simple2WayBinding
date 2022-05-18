const scope2WayBind = (function() {
    const dataBindEles = document.querySelectorAll('input[data-bind]');
    var scope = (function() {
        const data = {};
        const setDataToElement = (postDataBindProps, postDataBindValue) => {
            document.querySelector(`[data-bind=${postDataBindProps}]`).value = postDataBindValue;
            const dataBindtext = document.querySelectorAll(`[data-bind-text=${postDataBindProps}]`);
            dataBindtext?.forEach(element => {
                element.textContent = postDataBindValue
            });
        }
        return {
            getData: (dataBindProp) => {
                if(!data[dataBindProp]) {
                    return '';
                }
                return data[dataBindProp];
            },
            setData: (postDataBindProps,postDataBindValue) => {
                if(postDataBindProps) {
                    if(!postDataBindValue) {
                        data[postDataBindProps] = '';
                    } else {
                        data[postDataBindProps] = postDataBindValue;
                    }
                    setDataToElement(postDataBindProps, scope.getData(postDataBindProps));
                }
            }
        }
    })();

    dataBindEles?.forEach(constructLoopHandler);
    function constructLoopHandler(element) {
        element.addEventListener('keyup',event => {
            const ele = element
            event.preventDefault();
            let postDataBindProps = ele.getAttribute('data-bind');
            let PostDataBindValue = event.currentTarget.value;
            scope.setData(postDataBindProps, PostDataBindValue);
        });
    }
    return scope;
})();

/**
 * Changing Data by trigger reset click event
 */
const resetButton = document.querySelector("#resetButton");
resetButton?.addEventListener("click", (event) => {
    scope2WayBind.setData("textIp",'');
});