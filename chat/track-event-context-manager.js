// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e2' to 'setTrackEventContext'
// - Renamed export 'hk' to 'clearTrackEventContext'
// - Renamed export 'om' to 'getTrackEventContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 928797
         */
module.exports = function (module, exports, require) {
  var teaTrackEventContext = require("tea-track-event-context") /*id: 599408*/;
  let r = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return teaTrackEventContext.useTrackContext.getState().setTrackEventContext(...t);
  };
  let o = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return teaTrackEventContext.useTrackContext.getState().getTrackEventContext(...t);
  };
  let a = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return teaTrackEventContext.useTrackContext.getState().clearTrackEventContext(...t);
  };
  require.d(exports, {
    setTrackEventContext: function () {
      return r;
    },
    clearTrackEventContext: function () {
      return a;
    },
    getTrackEventContext: function () {
      return o;
    }
  });
}