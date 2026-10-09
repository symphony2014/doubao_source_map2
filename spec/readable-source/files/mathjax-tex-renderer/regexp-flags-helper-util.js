// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'T' to 'regexpFlagsHelperWrapper'
// - Resolved require(89497) to 'regexp-flags-helper-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 998362
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var regexpFlagsHelperWrapper = require("regexp-flags-helper-wrapper") /*id: 89497*/;
  var n = RegExp.prototype;
  module.exports = function (t) {
    if (t === n || isPrototypeOfBind(n, t)) {
      return regexpFlagsHelperWrapper(t);
    } else {
      return t.flags;
    }
  };
}