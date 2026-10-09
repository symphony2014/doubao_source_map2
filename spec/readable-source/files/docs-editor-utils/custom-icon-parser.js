// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'parseCustomIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 148182
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  function i(e, n) {
    if (e) {
      try {
        let r = isObjectOrFunction_1_1.isObjectOrFunction(e) ? e : JSON.parse(e);
        r.source = n;
        return r;
      } catch (e) {}
    }
  }
  require("custom-icon-type") /*id: 102049*/;
  require.d(exports, {
    parseCustomIcon: function () {
      return i;
    }
  });
}