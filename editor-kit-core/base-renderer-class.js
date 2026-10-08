// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'BaseRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 999785
         */
module.exports = function (module, exports, require) {
  var n = function () {
    function t() {}
    var e = t.prototype;
    e.match = function (t, e) {
      return false;
    };
    e.renderLine = function (t) {
      return t.children;
    };
    e.render = function (t) {
      return t.children;
    };
    e.serialize = function (t) {
      return t;
    };
    e.deserialize = function (t) {
      return t.deltaSet;
    };
    return t;
  }();
  require.d(exports, {
    BaseRenderer: function () {
      return n;
    }
  });
}