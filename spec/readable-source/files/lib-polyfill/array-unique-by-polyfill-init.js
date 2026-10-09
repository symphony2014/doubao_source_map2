// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// - Resolved require(904662) to 'array-unique-by-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 441431
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: true
  }, {
    uniqueBy: require("array-unique-by-polyfill") /*id: 904662*/
  });
  arrayUnscopablesDefine("uniqueBy");
}