// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'l' to 'domInterfaceSupport'
// - Resolved require(404940) to 'dom-interface-support'
// - Renamed variable 'i' to 'domClassListPrototype'
// - Resolved require(543231) to 'dom-class-list-prototype'
// - Renamed variable 'a' to 'arrayIteratorPolyfill'
// - Resolved require(710239) to 'array-iterator-polyfill'
// - Renamed variable 'd' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'r' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 23971
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var domInterfaceSupport = require("dom-interface-support") /*id: 404940*/;
  var domClassListPrototype = require("dom-class-list-prototype") /*id: 543231*/;
  var arrayIteratorPolyfill = require("array-iterator-polyfill") /*id: 710239*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var o = require("core-js-wks-access") /*id: 349338*/("iterator");
  var B = arrayIteratorPolyfill.values;
  function R(U, n) {
    if (U) {
      if (U[o] !== B) {
        try {
          definePropertyHelper_1(U, o, B);
        } catch (n) {
          U[o] = B;
        }
      }
      setToStringTagUtil(U, n, true);
      if (domInterfaceSupport[n]) {
        for (var F in arrayIteratorPolyfill) {
          if (U[F] !== arrayIteratorPolyfill[F]) {
            try {
              definePropertyHelper_1(U, F, arrayIteratorPolyfill[F]);
            } catch (n) {
              U[F] = arrayIteratorPolyfill[F];
            }
          }
        }
      }
    }
  }
  for (var c in domInterfaceSupport) {
    R(globalObjectPolyfill[c] && globalObjectPolyfill[c].prototype, c);
  }
  R(domClassListPrototype, "DOMTokenList");
}