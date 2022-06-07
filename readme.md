# Simple Two Way Data binding
#### Two Way data binding for javascript or jquery and its not for react or angular
#
### STEPS
#### STEP 1: Install Module
`npm i simple2waybinding`
#
#### STEP 2: import module
`import simple2WayBind from 'simple2waybinding'`
#
#### STEP 3: Simply create instance the imported method to after domContentLoaded or Jquery ready().
`var simple2WayBindInstance =  simple2WayBind();`
#
#### STEP 4: Add the required attributes(`sdb-bind`, `sdb-bind-text`) to elements
### `sdb-bind="attrName"` && `sdb-bind-text="attrName"` both attribute should have same name
Example:
### `<input type="text" sdb-bind="textIp">`
### `<p sdb-bind-text="textIp"></p>`



