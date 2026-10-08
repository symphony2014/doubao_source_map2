// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(149116) to 'async-iterator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 837172
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var o = require("async-iterator-utils") /*id: 149116*/.toArray;
  polyfillPropertyDefiner({
    target: "AsyncIterator",
    proto: true,
    real: true
  }, {
    toArray: function () {
      return o(this, undefined, []);
    }
  });
}