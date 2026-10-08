// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'getOwnPropertyNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 667264
         */
module.exports = function (module, exports, require) {
  var collectOwnPropertyNames = require("collect-own-property-names") /*id: 392181*/;
  var o = require("object-prototype-methods") /*id: 9179*/.concat("length", "prototype");
  exports.getOwnPropertyNames = Object.getOwnPropertyNames || function (t) {
    return collectOwnPropertyNames(t, o);
  };
}