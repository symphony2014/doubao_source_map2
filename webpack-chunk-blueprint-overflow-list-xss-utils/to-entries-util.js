// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toEntries'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 537539
         */
module.exports = function (module, exports, require) {
  var r;
  var arrayMapUtil = require("array-map-util") /*id: 466350*/;
  var nativeBaseGetTagFix = require("native-base-get-tag-fix") /*id: 360094*/;
  var mapToEntriesArray = require("map-to-entries-array") /*id: 414664*/;
  function s(e) {
    var t = -1;
    var n = Array(e.size);
    e.forEach(function (e) {
      n[++t] = [e, e];
    });
    return n;
  }
  r = require("get-own-keys") /*id: 362947*/.getOwnKeys;
  function u(e) {
    var t;
    var n = nativeBaseGetTagFix.getBaseGetTag(e);
    if (n == "[object Map]") {
      return mapToEntriesArray.mapToEntries(e);
    } else if (n == "[object Set]") {
      return s(e);
    } else {
      t = r(e);
      return arrayMapUtil.arrayMap(t, function (t) {
        return [t, e[t]];
      });
    }
  }
  require.d(exports, {
    toEntries: function () {
      return u;
    }
  });
}