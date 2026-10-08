// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'l' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 507341
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var i = Date.prototype;
  var a = "Invalid Date";
  var d = "toString";
  var r = functionBindFallback(i[d]);
  var o = functionBindFallback(i.getTime);
  if (String(new Date(NaN)) !== a) {
    definePropertyHelper_1_1(i, d, function () {
      var U = o(this);
      if (U == U) {
        return r(this);
      } else {
        return a;
      }
    });
  }
}