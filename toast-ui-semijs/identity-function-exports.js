// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'identity'
// - Renamed export 'k' to 'identityFn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68975.2fb3af7c.js
         * chunkId: 68975
         * moduleId: 183293
         */
module.exports = function (module, exports, require) {
  var identityFunction_1 = require("identity-function_1") /*id: 743792*/;
  let r = identityFunction_1.identity;
  let s = identityFunction_1.identity;
  require.d(exports, {
    identity: function () {
      return r;
    },
    identityFn: function () {
      return s;
    }
  });
}