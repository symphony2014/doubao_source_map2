// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Resolved require(192672) to 'set-prototype-utils'
// - Renamed variable 'i' to 'sizeGetterPolyfill'
// - Resolved require(564074) to 'size-getter-polyfill'
// - Renamed variable 'a' to 'validatedSetWrapper'
// - Resolved require(768847) to 'validated-set-wrapper'
// - Renamed variable 'u' to 'iteratorFindUtil'
// - Resolved require(563696) to 'iterator-find-util'
// - Renamed variable 'c' to 'callBindSafePropertyReturnHandler'
// - Resolved require(748658) to 'call-bind-safe-property-return-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 25694
         */
module.exports = function (module, exports, require) {
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var o = require("set-prototype-utils") /*id: 192672*/.has;
  var sizeGetterPolyfill = require("size-getter-polyfill") /*id: 564074*/;
  var validatedSetWrapper = require("validated-set-wrapper") /*id: 768847*/;
  var iteratorFindUtil = require("iterator-find-util") /*id: 563696*/;
  var callBindSafePropertyReturnHandler = require("call-bind-safe-property-return-handler") /*id: 748658*/;
  module.exports = function (t) {
    var r = setPrototypeCheck(this);
    var e = validatedSetWrapper(t);
    if (sizeGetterPolyfill(r) < e.size) {
      return false;
    }
    var f = e.getIterator();
    return iteratorFindUtil(f, function (t) {
      if (!o(r, t)) {
        return callBindSafePropertyReturnHandler(f, "normal", false);
      }
    }) !== false;
  };
}