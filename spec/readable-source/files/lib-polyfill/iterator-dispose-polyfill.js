// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'i' to 'safePropertyValidator'
// - Resolved require(983175) to 'safe-property-validator'
// - Renamed variable 'a' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'u' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Resolved require(136661) to 'iterator-prototype-setup'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 261579
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var safePropertyValidator = require("safe-property-validator") /*id: 983175*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var c = require("iterator-prototype-setup") /*id: 136661*/.IteratorPrototype;
  var f = coreJsWksAccess("dispose");
  if (!objectHasOwnPolyfill_1(c, f)) {
    definePropertyHelper_1_1(c, f, function () {
      var t = safePropertyValidator(this, "return");
      if (t) {
        callBindPolyfill(t, this);
      }
    });
  }
}