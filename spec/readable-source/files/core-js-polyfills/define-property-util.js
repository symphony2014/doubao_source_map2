// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'definePropertySafeWrapper'
// - Resolved require(336704) to 'define-property-safe-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 469792
         */
module.exports = function (module, exports, require) {
  var definePropertySafeWrapper = require("define-property-safe-wrapper") /*id: 336704*/;
  module.exports = function (t, r, n, o) {
    if (o && o.enumerable) {
      t[r] = n;
    } else {
      definePropertySafeWrapper(t, r, n);
    }
    return t;
  };
}