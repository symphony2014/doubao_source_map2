// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isBoolean'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 507922
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  exports.isBoolean = function (e) {
    return e === true || e === false || objectTypeCheck.isNonNullObject(e) && baseGetTag.baseGetTag(e) == "[object Boolean]";
  };
}