// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createRegexParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 517896
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return function (t, n = {}) {
      var i = t.match(e.matchPattern);
      if (!i) {
        return null;
      }
      var r = i[0];
      var o = t.match(e.parsePattern);
      if (!o) {
        return null;
      }
      var s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
      return {
        value: s = n.valueCallback ? n.valueCallback(s) : s,
        rest: t.slice(r.length)
      };
    };
  }
  require.d(exports, {
    createRegexParser: function () {
      return i;
    }
  });
}