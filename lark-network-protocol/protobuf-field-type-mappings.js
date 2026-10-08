// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 52800
         */
module.exports = function (module, exports, require) {
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  var n = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
  function s(e, t) {
    var i = 0;
    var r = {};
    for (t |= 0; i < e.length;) {
      r[n[i + t]] = e[i++];
    }
    return r;
  }
  exports.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
  exports.defaults = s([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", protobufDecoratorUtils.emptyArray, null]);
  exports.long = s([0, 0, 0, 1, 1], 7);
  exports.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
  exports.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
}