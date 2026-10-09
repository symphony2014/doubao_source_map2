// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'throwUnhandled'
// - Renamed export 'h' to 'ParseError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 334225
         */
module.exports = function (module, exports, require) {
  class n extends Error {
    constructor(e, t) {
      super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
    }
  }
  function i(e) {
    throw Error("Error! The input value was not handled.");
  }
  require.d(exports, {
    throwUnhandled: function () {
      return i;
    },
    ParseError: function () {
      return n;
    }
  });
}