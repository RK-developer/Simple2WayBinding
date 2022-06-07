const simple2WayBind = (function(props={}) {
    const {rootElementId} = props
    const dataBindEles = document.querySelectorAll('input[sdb-bind]');
    var scope = (function() {
        const data = {};
        const setDataToElement = (postDataBindProps, postDataBindValue) => {
            document.querySelector(`[sdb-bind=${postDataBindProps}]`).value = postDataBindValue;
            const dataBindtext = document.querySelectorAll(`${rootElementId ? '#'+rootElementId+' ':''}[sdb-bind-text=${postDataBindProps}]`);
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
            let postDataBindProps = ele.getAttribute('sdb-bind');
            let PostDataBindValue = event.currentTarget.value;
            scope.setData(postDataBindProps, PostDataBindValue);
        });
    }
    return scope;
});