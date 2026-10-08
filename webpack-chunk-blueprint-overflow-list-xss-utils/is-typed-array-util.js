// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isTypedArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 557455
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var isValidIndexUtil = require("is-valid-index-util") /*id: 965085*/;
  var objectTypeCheck = require("object-type-check") /*id: 998889*/;
  var a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = true;
  a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = false;
  var identityWrapper = require("identity-wrapper") /*id: 160775*/;
  var nodeUtilTypesDetector = require("node-util-types-detector") /*id: 500199*/;
  var c = nodeUtilTypesDetector.nodeUtilTypes && nodeUtilTypesDetector.nodeUtilTypes.isTypedArray;
  var l = c ? identityWrapper.createWrapper(c) : function (e) {
    return objectTypeCheck.isNonNullObject(e) && isValidIndexUtil.isValidIndex(e.length) && !!a[baseGetTag.baseGetTag(e)];
  };
  require.d(exports, {
    isTypedArray: function () {
      return l;
    }
  });
}