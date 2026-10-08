// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'unsetObjectPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 502450
         */
module.exports = function (module, exports, require) {
  var pathCastUtil = require("path-cast-util") /*id: 539693*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var objectPathGetUtil = require("object-path-get-util") /*id: 55071*/;
  var arraySliceHelper = require("array-slice-helper") /*id: 728245*/;
  var valueToStringUtil_1 = require("value-to-string-util_1") /*id: 59353*/;
  function u(e, t) {
    var n;
    var u;
    t = pathCastUtil.castPath(t, e);
    n = e;
    return (e = (u = t).length < 2 ? n : objectPathGetUtil.getObjectPath(n, arraySliceHelper.arraySlice(u, 0, -1))) == null || delete e[valueToStringUtil_1.valueToString(lastElementHelper.getLastElement(t))];
  }
  require.d(exports, {
    unsetObjectPath: function () {
      return u;
    }
  });
}