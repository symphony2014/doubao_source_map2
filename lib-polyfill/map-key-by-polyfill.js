// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'a' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'u' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 647634
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var c = require("map-prototype-utils") /*id: 522979*/.Map;
  polyfillPropertyDefiner({
    target: "Map",
    stat: true,
    forced: true
  }, {
    keyBy: function (t, r) {
      var e = new (isFunctionPolyfill(this) ? this : c)();
      functionValidator(r);
      var n = functionValidator(e.set);
      iteratorForEachHelper(t, function (t) {
        callBindPolyfill(n, e, r(t), t);
      });
      return e;
    }
  });
}