// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'joinString'
// - Renamed export 'Q' to 'splitString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 594657
         */
module.exports = function (module, exports, require) {
  function r(e) {
    let a = String(e || "").trim();
    if (a) {
      return a.split(/[ \t\n\r\f]+/g);
    } else {
      return [];
    }
  }
  function n(e) {
    return e.join(" ").trim();
  }
  require.d(exports, {
    joinString: function () {
      return n;
    },
    splitString: function () {
      return r;
    }
  });
}