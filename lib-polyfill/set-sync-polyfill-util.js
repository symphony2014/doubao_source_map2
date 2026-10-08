// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Renamed variable 'o' to 'setPrototypeUtils'
// - Resolved require(192672) to 'set-prototype-utils'
// - Renamed variable 'i' to 'setConstructorPolyfill'
// - Resolved require(292078) to 'set-constructor-polyfill'
// - Renamed variable 'a' to 'validatedSetWrapper'
// - Resolved require(768847) to 'validated-set-wrapper'
// - Renamed variable 'u' to 'iteratorFindUtil'
// - Resolved require(563696) to 'iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 365343
         */
module.exports = function (module, exports, require) {
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var setPrototypeUtils = require("set-prototype-utils") /*id: 192672*/;
  var setConstructorPolyfill = require("set-constructor-polyfill") /*id: 292078*/;
  var validatedSetWrapper = require("validated-set-wrapper") /*id: 768847*/;
  var iteratorFindUtil = require("iterator-find-util") /*id: 563696*/;
  var c = setPrototypeUtils.add;
  var f = setPrototypeUtils.has;
  var s = setPrototypeUtils.remove;
  module.exports = function (t) {
    var r = setPrototypeCheck(this);
    var e = validatedSetWrapper(t).getIterator();
    var o = setConstructorPolyfill(r);
    iteratorFindUtil(e, function (t) {
      if (f(r, t)) {
        s(o, t);
      } else {
        c(o, t);
      }
    });
    return o;
  };
}