// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 255087
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  module.exports = function (t, r, e, a) {
    try {
      var u = safePropertyValidator(t, "return");
      if (u) {
        return globalPolyfillAccess("Promise").resolve(callBindPolyfill(u, t)).then(function () {
          r(e);
        }, function (t) {
          a(t);
        });
      }
    } catch (t) {
      return a(t);
    }
    r(e);
  };
}