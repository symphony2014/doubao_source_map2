// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'collectOwnPropertyNames'
// - Resolved require(392181) to 'collect-own-property-names'
// - Renamed variable 'o' to 'objectPrototypeMethods'
// - Resolved require(9179) to 'object-prototype-methods'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 18493
         */
module.exports = function (module, exports, require) {
  var collectOwnPropertyNames = require("collect-own-property-names") /*id: 392181*/;
  var objectPrototypeMethods = require("object-prototype-methods") /*id: 9179*/;
  module.exports = Object.keys || function (t) {
    return collectOwnPropertyNames(t, objectPrototypeMethods);
  };
}