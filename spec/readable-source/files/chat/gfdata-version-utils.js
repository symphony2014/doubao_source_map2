// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A1' to 'getCanaryVersion'
// - Renamed export 'Mk' to 'getAppVersion'
// - Renamed export 'if' to 'formatVersionNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 60655
         */
module.exports = function (module, exports, require) {
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  let r = e => {
    let t = Math.ceil(String(e).length / 2);
    let n = [];
    while (t) {
      n.push(Math.pow(10, --t * 2));
    }
    return n.map(t => Math.floor(e / t) % 100).join(".");
  };
  let o = () => {
    return String(typeof window != "undefined" && window.gfdatav1?.ver || "unknown");
  };
  let a = () => {
    var t;
    var r;
    if (typeof window != "undefined" && isNumberUtil.isNumber((t = window) === null || t === undefined ? undefined : t.gfdatav1?.canary)) {
      return String((r = window) === null || r === undefined ? undefined : r.gfdatav1?.canary);
    } else {
      return "";
    }
  };
  require.d(exports, {
    getCanaryVersion: function () {
      return a;
    },
    getAppVersion: function () {
      return o;
    },
    formatVersionNumber: function () {
      return r;
    }
  });
}