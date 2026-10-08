// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$K' to 'dispatcherDebug'
// - Renamed export 'Kz' to 'eventDebug'
// - Renamed export 'Pr' to 'getServiceDebug'
// - Renamed export 'Xj' to 'channelDebug'
// - Renamed export 'fM' to 'hostDebug'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 363765
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var r = debugBrowserConfig;
  r("corpc:client");
  let o = r("corpc:host");
  let s = r("corpc:channel");
  let a = r("corpc:event");
  r("corpc:heartbeat");
  let l = r("corpc:dispatcher");
  r("corpc:service");
  let c = e => r(`corpc:service:${e}`);
  require.d(exports, {
    dispatcherDebug: function () {
      return l;
    },
    eventDebug: function () {
      return a;
    },
    getServiceDebug: function () {
      return c;
    },
    channelDebug: function () {
      return s;
    },
    hostDebug: function () {
      return o;
    }
  });
}