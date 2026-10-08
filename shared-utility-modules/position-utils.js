// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FK' to 'getPositionRange'
// - Renamed export 'Pk' to 'getStartPosition'
// - Renamed export 'rb' to 'getEndPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 142421
         */
module.exports = function (module, exports, require) {
  let r = function (e) {
    let a = e && e.position && e.position.end || {};
    if (typeof a.line == "number" && a.line > 0 && typeof a.column == "number" && a.column > 0) {
      return {
        line: a.line,
        column: a.column,
        offset: typeof a.offset == "number" && a.offset > -1 ? a.offset : undefined
      };
    }
  };
  let n = function (e) {
    let a = e && e.position && e.position.start || {};
    if (typeof a.line == "number" && a.line > 0 && typeof a.column == "number" && a.column > 0) {
      return {
        line: a.line,
        column: a.column,
        offset: typeof a.offset == "number" && a.offset > -1 ? a.offset : undefined
      };
    }
  };
  function o(e) {
    let a = n(e);
    let t = r(e);
    if (a && t) {
      return {
        start: a,
        end: t
      };
    }
  }
  require.d(exports, {
    getPositionRange: function () {
      return o;
    },
    getStartPosition: function () {
      return n;
    },
    getEndPosition: function () {
      return r;
    }
  });
}