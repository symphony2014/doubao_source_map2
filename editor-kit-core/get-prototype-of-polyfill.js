// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'functionApplyPolyfillResolver_1'
// - Resolved require(687265) to 'function-apply-polyfill-resolver_1'
// - Renamed variable 'i' to 'safeObjectPropertyDescriptor'
// - Resolved require(467842) to 'safe-object-property-descriptor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 367862
         */
module.exports = function (module, exports, require) {
  var n;
  var functionApplyPolyfillResolver_1 = require("function-apply-polyfill-resolver_1") /*id: 687265*/;
  var safeObjectPropertyDescriptor = require("safe-object-property-descriptor") /*id: 467842*/;
  try {
    n = [].__proto__ === Array.prototype;
  } catch (t) {
    if (!t || typeof t != "object" || !("code" in t) || t.code !== "ERR_PROTO_ACCESS") {
      throw t;
    }
  }
  var u = !!n && safeObjectPropertyDescriptor && safeObjectPropertyDescriptor(Object.prototype, "__proto__");
  var a = Object;
  var s = a.getPrototypeOf;
  module.exports = u && typeof u.get == "function" ? functionApplyPolyfillResolver_1([u.get]) : typeof s == "function" && function (t) {
    return s(t == null ? t : a(t));
  };
}