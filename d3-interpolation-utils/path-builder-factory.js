// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createPathBuilder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 468606
         */
module.exports = function (module, exports, require) {
  var pathBuilder = require("path-builder") /*id: 827074*/;
  function r(t) {
    let n = 3;
    t.digits = function (e) {
      if (!arguments.length) {
        return n;
      }
      if (e == null) {
        n = null;
      } else {
        let t = Math.floor(e);
        if (!(t >= 0)) {
          throw RangeError(`invalid digits: ${e}`);
        }
        n = t;
      }
      return t;
    };
    return () => new pathBuilder.Path(n);
  }
  require.d(exports, {
    createPathBuilder: function () {
      return r;
    }
  });
}