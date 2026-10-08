// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'i' to 'es5DefinePropertyPolyfill'
// - Resolved require(864373) to 'es5-define-property-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 965282
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var es5DefinePropertyPolyfill = require("es5-define-property-polyfill") /*id: 864373*/;
  polyfillPropertyDefiner({
    target: "Object",
    stat: true
  }, {
    fromEntries: function (t) {
      var r = {};
      iteratorForEachHelper(t, function (t, e) {
        es5DefinePropertyPolyfill(r, t, e);
      }, {
        AS_ENTRIES: true
      });
      return r;
    }
  });
}