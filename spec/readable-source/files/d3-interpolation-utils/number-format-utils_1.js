// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'parseExponential'
// - Renamed export 'Z' to 'formatNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 167595
         */
module.exports = function (module, exports, require) {
  function i(t) {
    if (Math.abs(t = Math.round(t)) >= 1e+21) {
      return t.toLocaleString("en").replace(/,/g, "");
    } else {
      return t.toString(10);
    }
  }
  function r(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) {
      return null;
    }
    var e;
    var i = t.slice(0, e);
    return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)];
  }
  require.d(exports, {
    parseExponential: function () {
      return r;
    },
    formatNumber: function () {
      return i;
    }
  });
}