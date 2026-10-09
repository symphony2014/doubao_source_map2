// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'requestIdleCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 806024
         */
module.exports = function (module, exports, require) {
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  require.d(exports, {
    requestIdleCallback: function () {
      return idleCallbackPolyfill_1.requestIdleCallback;
    }
  });
}