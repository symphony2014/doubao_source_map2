// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertyCheck'
// - Resolved require(594896) to 'define-property-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 642274
         */
module.exports = function (module, exports, require) {
  var definePropertyCheck = require("define-property-check") /*id: 594896*/;
  function o() {
    return !!definePropertyCheck;
  }
  o.hasArrayLengthDefineBug = function () {
    if (!definePropertyCheck) {
      return null;
    }
    try {
      return definePropertyCheck([], "length", {
        value: 1
      }).length !== 1;
    } catch (t) {
      return true;
    }
  };
  module.exports = o;
}