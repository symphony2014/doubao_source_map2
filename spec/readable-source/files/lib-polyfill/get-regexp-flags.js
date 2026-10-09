// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'i' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'a' to 'regexpFlagsGenerator'
// - Resolved require(685568) to 'regexp-flags-generator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 350472
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var regexpFlagsGenerator = require("regexp-flags-generator") /*id: 685568*/;
  var u = RegExp.prototype;
  module.exports = function (t) {
    var r = t.flags;
    if (r === undefined && !("flags" in u) && !objectHasOwnPolyfill_1(t, "flags") && isPrototypeOfPolyfill(u, t)) {
      return callBindPolyfill(regexpFlagsGenerator, t);
    } else {
      return r;
    }
  };
}