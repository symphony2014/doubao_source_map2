// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getOwnKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 373475
         */
module.exports = function (module, exports, require) {
  var arrayMapUtil_1 = require("array-map-util_1") /*id: 404345*/;
  var isArgumentsUtil = require("is-arguments-util") /*id: 13977*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var bufferIsBufferUtil = require("buffer-is-buffer-util") /*id: 375215*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  var isTypedArrayUtil = require("is-typed-array-util") /*id: 557455*/;
  var c = Object.prototype.hasOwnProperty;
  exports.getOwnKeys = function (e, t) {
    var n = arrayIsArrayUtil.isArray(e);
    var l = !n && isArgumentsUtil.isArguments(e);
    var f = !n && !l && bufferIsBufferUtil.isBufferCheck(e);
    var h = !n && !l && !f && isTypedArrayUtil.isTypedArray(e);
    var d = n || l || f || h;
    var p = d ? arrayMapUtil_1.mapArrayLength(e.length, String) : [];
    var g = p.length;
    for (var v in e) {
      if ((t || c.call(e, v)) && (!d || v != "length" && (!f || v != "offset" && v != "parent") && (!h || v != "buffer" && v != "byteLength" && v != "byteOffset") && !isValidLengthUtil.isValidLength(v, g))) {
        p.push(v);
      }
    }
    return p;
  };
}