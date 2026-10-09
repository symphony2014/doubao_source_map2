// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 673143
         */
module.exports = function (module, exports, require) {
  var n = exports;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  var s = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
  function o(e, t) {
    var r = 0;
    var n = {};
    for (t |= 0; r < e.length;) {
      n[s[r + t]] = e[r++];
    }
    return n;
  }
  n.basic = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
  n.defaults = o([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", protobufUtilityModule_1.emptyArray, null]);
  n.long = o([0, 0, 0, 1, 1], 7);
  n.mapKey = o([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
  n.packed = o([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
}