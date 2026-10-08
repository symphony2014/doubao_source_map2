// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'l' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'a' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 405940
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  module.exports = function () {
    var U = globalPolyfillAccess("Symbol");
    var n = U && U.prototype;
    var F = n && n.valueOf;
    var d = coreJsWksAccess("toPrimitive");
    if (n && !n[d]) {
      definePropertyHelper_1_1(n, d, function (U) {
        return callBindPolyfill(F, this);
      }, {
        arity: 1
      });
    }
  };
}