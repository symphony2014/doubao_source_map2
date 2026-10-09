// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'toPrimitivePolyfill'
// - Resolved require(320986) to 'to-primitive-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 987764
         */
module.exports = function (module, exports, require) {
  var toPrimitivePolyfill = require("to-primitive-polyfill") /*id: 320986*/;
  var o = TypeError;
  module.exports = function (t) {
    var r = toPrimitivePolyfill(t, "number");
    if (typeof r == "number") {
      throw new o("Can't convert number to bigint");
    }
    return BigInt(r);
  };
}