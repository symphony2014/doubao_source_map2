// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'objectIteratorPolyfill'
// - Resolved require(387932) to 'object-iterator-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 817994
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var objectIteratorPolyfill = require("object-iterator-polyfill") /*id: 387932*/;
  polyfillPropertyDefiner({
    target: "Object",
    stat: true,
    forced: true
  }, {
    iterateEntries: function (t) {
      return new objectIteratorPolyfill(t, "entries");
    }
  });
}