// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'buildLocalizeFn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 856728
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return function (t, n) {
      var i;
      if ((n != null && n.context ? String(n.context) : "standalone") === "formatting" && e.formattingValues) {
        var r = e.defaultFormattingWidth || e.defaultWidth;
        var o = n != null && n.width ? String(n.width) : r;
        i = e.formattingValues[o] || e.formattingValues[r];
      } else {
        var s = e.defaultWidth;
        var l = n != null && n.width ? String(n.width) : e.defaultWidth;
        i = e.values[l] || e.values[s];
      }
      return i[e.argumentCallback ? e.argumentCallback(t) : t];
    };
  }
  require.d(exports, {
    buildLocalizeFn: function () {
      return i;
    }
  });
}