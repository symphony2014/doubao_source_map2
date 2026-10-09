// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FB' to 'md5Hash'
// - Renamed export 'XY' to 'generateSignature'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 333934
         */
module.exports = function (module, exports, require) {
  var md5HashUtil = require("md5-hash-util") /*id: 919905*/;
  var i = md5HashUtil;
  async function o(e, t) {
    let r = new TextEncoder().encode(t);
    return Array.from(new Uint8Array(await crypto.subtle.digest(e, r))).map(e => e.toString(16).padStart(2, "0")).join("");
  }
  async function a(e) {
    return o("SHA-1", e);
  }
  function s(e) {
    return i(e);
  }
  async function c(e) {
    let t = s("ee");
    let r = t.substring(0, 6);
    let n = t.substring(t.length - 6);
    return await a(r + s(e.concat(n)));
  }
  require.d(exports, {
    md5Hash: function () {
      return s;
    },
    generateSignature: function () {
      return c;
    }
  });
}