// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Resolved require(940142) to 'array-species-constructor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 81372
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var l = require("array-iteration-polyfill") /*id: 343120*/.map;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: !require("array-species-constructor-check") /*id: 940142*/("map")
  }, {
    map: function (U) {
      return l(this, U, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
}