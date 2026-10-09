// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setPrototypeOf'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 720499
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  require.d(exports, {
    setPrototypeOf: function () {
      return r;
    }
  });
}