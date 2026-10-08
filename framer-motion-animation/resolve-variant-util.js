// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'resolveVariant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 868547
         */
module.exports = function (module, exports, require) {
  var resolveVariantFunction = require("resolve-variant-function") /*id: 368107*/;
  function r(t, e, i) {
    let r = t.getProps();
    return resolveVariantFunction.resolveVariant(r, e, i !== undefined ? i : r.custom, t);
  }
  require.d(exports, {
    resolveVariant: function () {
      return r;
    }
  });
}