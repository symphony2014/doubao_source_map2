// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(14677) to 'object-define-property-polyfill_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 723492
         */
module.exports = function (module, exports, require) {
  require("object-define-property-polyfill_1") /*id: 14677*/;
  var e = require("empty-module-stub_1") /*id: 245992*/.Object;
  var o = module.exports = function (t, r, n) {
    return e.defineProperty(t, r, n);
  };
  if (e.defineProperty.sham) {
    o.sham = true;
  }
}