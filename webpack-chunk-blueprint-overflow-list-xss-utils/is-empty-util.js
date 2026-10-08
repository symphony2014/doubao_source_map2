// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isEmpty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 201438
         */
module.exports = function (module, exports, require) {
  var getOwnKeysUtil = require("get-own-keys-util") /*id: 365656*/;
  var nativeBaseGetTagFix = require("native-base-get-tag-fix") /*id: 360094*/;
  var isArgumentsUtil = require("is-arguments-util") /*id: 13977*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var bufferIsBufferUtil = require("buffer-is-buffer-util") /*id: 375215*/;
  var prototypeChecker = require("prototype-checker") /*id: 411247*/;
  var isTypedArrayUtil = require("is-typed-array-util") /*id: 557455*/;
  var f = Object.prototype.hasOwnProperty;
  exports.isEmpty = function (e) {
    if (e == null) {
      return true;
    }
    if (isArrayLikeUtil.isArrayLike(e) && (arrayIsArrayUtil.isArray(e) || typeof e == "string" || typeof e.splice == "function" || bufferIsBufferUtil.isBufferCheck(e) || isTypedArrayUtil.isTypedArray(e) || isArgumentsUtil.isArguments(e))) {
      return !e.length;
    }
    var t = nativeBaseGetTagFix.getBaseGetTag(e);
    if (t == "[object Map]" || t == "[object Set]") {
      return !e.size;
    }
    if (prototypeChecker.isPrototype(e)) {
      return !getOwnKeysUtil.getOwnKeys(e).length;
    }
    for (var n in e) {
      if (f.call(e, n)) {
        return false;
      }
    }
    return true;
  };
}