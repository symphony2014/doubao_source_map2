// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'validatePathArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 641640
         */
module.exports = function (module, exports, require) {
  var pathCastUtil = require("path-cast-util") /*id: 539693*/;
  var isArgumentsUtil = require("is-arguments-util") /*id: 13977*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  var isValidIndexUtil = require("is-valid-index-util") /*id: 965085*/;
  var valueToStringUtil_1 = require("value-to-string-util_1") /*id: 59353*/;
  exports.validatePathArray = function (e, t, n) {
    t = pathCastUtil.castPath(t, e);
    var c = -1;
    var l = t.length;
    var f = false;
    while (++c < l) {
      var h = valueToStringUtil_1.valueToString(t[c]);
      if (!(f = e != null && n(e, h))) {
        break;
      }
      e = e[h];
    }
    if (f || ++c != l) {
      return f;
    } else {
      return !!(l = e == null ? 0 : e.length) && isValidIndexUtil.isValidIndex(l) && isValidLengthUtil.isValidLength(h, l) && (arrayIsArrayUtil.isArray(e) || isArgumentsUtil.isArguments(e));
    }
  };
}