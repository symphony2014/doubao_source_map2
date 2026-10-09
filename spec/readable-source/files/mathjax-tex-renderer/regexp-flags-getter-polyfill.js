// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'T' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'n' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'o' to 'regexpFlagsGetter'
// - Resolved require(279091) to 'regexp-flags-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 885308
         */
module.exports = function (module, exports, require) {
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var regexpFlagsGetter = require("regexp-flags-getter") /*id: 279091*/;
  var i = RegExp.prototype;
  module.exports = function (t) {
    var e = t.flags;
    if (e === undefined && !("flags" in i) && !objectHasOwnPolyfill(t, "flags") && isPrototypeOfBind(i, t)) {
      return functionCallBindHelper(regexpFlagsGetter, t);
    } else {
      return e;
    }
  };
}