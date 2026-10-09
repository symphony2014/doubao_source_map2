// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(558015) to 'object-entries-values-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 654740
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var l = require("object-entries-values-polyfill") /*id: 558015*/.values;
  polyfillPropertyDefiner({
    target: "Object",
    stat: true
  }, {
    values: function (U) {
      return l(U);
    }
  });
}