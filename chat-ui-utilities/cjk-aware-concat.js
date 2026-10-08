// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'smartConcat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 234823
         */
module.exports = function (module, exports, require) {
  function i(e) {
    if (!e) {
      return false;
    }
    let t = e.charCodeAt(0);
    return t >= 19968 && t <= 40869;
  }
  function r(e = "", t = "") {
    let n = e[e.length - 1];
    let r = t[0];
    if (i(n) && i(r)) {
      return `${e}${t}`;
    } else {
      return `${e} ${t}`;
    }
  }
  require.d(exports, {
    smartConcat: function () {
      return r;
    }
  });
}