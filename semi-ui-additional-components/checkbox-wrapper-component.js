// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'CheckboxWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 495136
         */
module.exports = function (module, exports, require) {
  var checkboxComponent = require("checkbox-component") /*id: 517004*/;
  var checkboxGroupComponent = require("checkbox-group-component") /*id: 654013*/;
  class a extends checkboxComponent.CheckboxComponent {}
  a.Group = checkboxGroupComponent.CheckboxGroup;
  exports.CheckboxWrapper = a;
}