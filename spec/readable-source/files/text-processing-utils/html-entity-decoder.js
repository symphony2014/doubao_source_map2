// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'decodeEscapeChars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 789710
         */
module.exports = function (module, exports, require) {
  var decodeHtmlEntityUtil = require("decode-html-entity-util") /*id: 35432*/;
  var safeCodePointConverter = require("safe-code-point-converter") /*id: 281560*/;
  let o = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function u(e) {
    return e.replace(o, a);
  }
  function a(e, t, r) {
    if (t) {
      return t;
    }
    if (r.charCodeAt(0) === 35) {
      let e = r.charCodeAt(1);
      let t = e === 120 || e === 88;
      return safeCodePointConverter.safeFromCodePoint(r.slice(t ? 2 : 1), t ? 16 : 10);
    }
    return decodeHtmlEntityUtil.decodeHtmlEntity(r) || e;
  }
  require.d(exports, {
    decodeEscapeChars: function () {
      return u;
    }
  });
}