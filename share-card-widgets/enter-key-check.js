// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isEnterKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 943784
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var keyboardKeyCodes_3 = require("keyboard-key-codes_3") /*id: 174510*/;
  exports.isEnterKey = function (e) {
    return objectPathGetDefault.getObjectPathDefault(e, "key") === keyboardKeyCodes_3.enterKeyName;
  };
}