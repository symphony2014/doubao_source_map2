// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// - Resolved require(915212) to 'collection-iter-init-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 41088
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  polyfillPropertyDefiner({
    target: "Map",
    stat: true,
    forced: true
  }, {
    from: require("collection-iter-init-util") /*id: 915212*/(mapPrototypeUtils.Map, mapPrototypeUtils.set, true)
  });
}