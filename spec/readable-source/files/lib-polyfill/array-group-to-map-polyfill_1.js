// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// - Renamed variable 'i' to 'groupByMapPolyfill'
// - Resolved require(392463) to 'group-by-map-polyfill'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 24067
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var groupByMapPolyfill = require("group-by-map-polyfill") /*id: 392463*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: require("lib-polyfill-check") /*id: 87987*/
  }, {
    groupToMap: groupByMapPolyfill
  });
  arrayUnscopablesDefine("groupToMap");
}