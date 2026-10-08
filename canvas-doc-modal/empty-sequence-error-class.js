// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'EmptyError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23457.0bcdcee9.js
         * chunkId: 23457
         * moduleId: 685595
         */
module.exports = function (module, exports, require) {
  var n = require("custom-error-factory") /*id: 205452*/.createErrorClass(function (e) {
    return function () {
      e(this);
      this.name = "EmptyError";
      this.message = "no elements in sequence";
    };
  });
  require.d(exports, {
    EmptyError: function () {
      return n;
    }
  });
}