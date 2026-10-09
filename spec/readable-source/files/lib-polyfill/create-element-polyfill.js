// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 962506
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var i = globalObjectPolyfill.document;
  var a = isObjectOrFunctionCheck(i) && isObjectOrFunctionCheck(i.createElement);
  module.exports = function (t) {
    if (a) {
      return i.createElement(t);
    } else {
      return {};
    }
  };
}