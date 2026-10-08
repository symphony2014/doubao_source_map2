// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'formatLocation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 648255
         */
module.exports = function (module, exports, require) {
  function n(e) {
    if (e && typeof e == "object") {
      if ("position" in e || "type" in e) {
        return o(e.position);
      } else if ("start" in e || "end" in e) {
        return o(e);
      } else if ("line" in e || "column" in e) {
        return i(e);
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
  function i(e) {
    return u(e && e.line) + ":" + u(e && e.column);
  }
  function o(e) {
    return i(e && e.start) + "-" + i(e && e.end);
  }
  function u(e) {
    if (e && typeof e == "number") {
      return e;
    } else {
      return 1;
    }
  }
  require.d(exports, {
    formatLocation: function () {
      return n;
    }
  });
}