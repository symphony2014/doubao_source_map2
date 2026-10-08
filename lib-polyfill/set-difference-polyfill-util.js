// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Renamed variable 'o' to 'setPrototypeUtils'
// - Resolved require(192672) to 'set-prototype-utils'
// - Renamed variable 'i' to 'setConstructorPolyfill'
// - Resolved require(292078) to 'set-constructor-polyfill'
// - Renamed variable 'a' to 'sizeGetterPolyfill'
// - Resolved require(564074) to 'size-getter-polyfill'
// - Renamed variable 'u' to 'validatedSetWrapper'
// - Resolved require(768847) to 'validated-set-wrapper'
// - Renamed variable 'c' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// - Renamed variable 'f' to 'iteratorFindUtil'
// - Resolved require(563696) to 'iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 729313
         */
module.exports = function (module, exports, require) {
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var setPrototypeUtils = require("set-prototype-utils") /*id: 192672*/;
  var setConstructorPolyfill = require("set-constructor-polyfill") /*id: 292078*/;
  var sizeGetterPolyfill = require("size-getter-polyfill") /*id: 564074*/;
  var validatedSetWrapper = require("validated-set-wrapper") /*id: 768847*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  var iteratorFindUtil = require("iterator-find-util") /*id: 563696*/;
  var s = setPrototypeUtils.has;
  var l = setPrototypeUtils.remove;
  module.exports = function (t) {
    var r = setPrototypeCheck(this);
    var e = validatedSetWrapper(t);
    var o = setConstructorPolyfill(r);
    if (sizeGetterPolyfill(r) <= e.size) {
      setFindPolyfillUtil(r, function (t) {
        if (e.includes(t)) {
          l(o, t);
        }
      });
    } else {
      iteratorFindUtil(e.getIterator(), function (t) {
        if (s(r, t)) {
          l(o, t);
        }
      });
    }
    return o;
  };
}