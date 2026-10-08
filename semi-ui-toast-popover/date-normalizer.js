// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'normalizeDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 414214
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  function o(e) {
    validateArgumentCount.validateArgCount(1, arguments);
    var t = Object.prototype.toString.call(e);
    return new Date(e instanceof Date || typeofHelper.getType(e) === "object" && t === "[object Date]" ? e.getTime() : typeof e == "number" || t === "[object Number]" ? e : NaN);
  }
  require.d(exports, {
    normalizeDate: function () {
      return o;
    }
  });
}