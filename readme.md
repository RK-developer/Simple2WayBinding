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
Global for all element `var simple2WayBindInstance =  simple2WayBind();`
#
wrapper for specific element `var simple2WayBindInstance =  simple2WayBind({rootElementId: 'rootId'});`
#
#### STEP 4: Add the required attributes(`sdb-bind`, `sdb-bind-text`) to elements
### `sdb-bind="attrName"` && `sdb-bind-text="attrName"` both attribute should have same name
Example:
### `<input type="text" sdb-bind="textIp">`
### `<p sdb-bind-text="textIp"></p>`
#
#### STEP 2: reset or change value through changing data code
### refer step 3
#### Instance returns two methods `getData`, `setData`
### get data
#### `simple2WayBindInstance.getData('textIp');`
### set data
#### `simple2WayBindInstance.setData('textIp','newValue');` -> it will reflect both `sdb-bind`, `sdb-bind-text`

#### see demo on [github](https://github.com/RK-developer/Simple2WayBinding)
Navigate to github and download -> navigate to demo and run live server and also refer implementation 
#
## Thanks for visiting 
### Happy Coding




