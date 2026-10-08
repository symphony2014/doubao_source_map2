// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'AuthStatus'
// - Renamed export 'V' to 'authEventEmitter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 60885
         */
module.exports = function (module, exports, require) {
  var n;
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  (n ||= {}).Unauthorized = "Unauthorized";
  let o = new eventEmitterPolyfill.EventEmitter();
  require.d(exports, {
    AuthStatus: function () {
      return n;
    },
    authEventEmitter: function () {
      return o;
    }
  });
}