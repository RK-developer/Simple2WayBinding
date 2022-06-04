"use strict";

var scope2WayBind = function scope2WayBind() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rootElementId = props.rootElementId;
  var dataBindEles = document.querySelectorAll('input[sdb-bind]');

  var scope = function () {
    var data = {};

    var setDataToElement = function setDataToElement(postDataBindProps, postDataBindValue) {
      document.querySelector("[sdb-bind=".concat(postDataBindProps, "]")).value = postDataBindValue;
      var dataBindtext = document.querySelectorAll("".concat(rootElementId ? '#' + rootElementId + ' ' : '', "[sdb-bind-text=").concat(postDataBindProps, "]"));
      dataBindtext === null || dataBindtext === void 0 ? void 0 : dataBindtext.forEach(function (element) {
        element.textContent = postDataBindValue;
      });
    };

    return {
      getData: function getData(dataBindProp) {
        if (!data[dataBindProp]) {
          return '';
        }

        return data[dataBindProp];
      },
      setData: function setData(postDataBindProps, postDataBindValue) {
        if (postDataBindProps) {
          if (!postDataBindValue) {
            data[postDataBindProps] = '';
          } else {
            data[postDataBindProps] = postDataBindValue;
          }

          setDataToElement(postDataBindProps, scope.getData(postDataBindProps));
        }
      }
    };
  }();

  dataBindEles === null || dataBindEles === void 0 ? void 0 : dataBindEles.forEach(constructLoopHandler);

  function constructLoopHandler(element) {
    element.addEventListener('keyup', function (event) {
      var ele = element;
      event.preventDefault();
      var postDataBindProps = ele.getAttribute('sdb-bind');
      var PostDataBindValue = event.currentTarget.value;
      scope.setData(postDataBindProps, PostDataBindValue);
    });
  }

  return scope;
};