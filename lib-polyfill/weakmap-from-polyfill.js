// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'weakmapUtils'
// - Resolved require(76713) to 'weakmap-utils'
// - Resolved require(915212) to 'collection-iter-init-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 809431
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var weakmapUtils = require("weakmap-utils") /*id: 76713*/;
  polyfillPropertyDefiner({
    target: "WeakMap",
    stat: true,
    forced: true
  }, {
    from: require("collection-iter-init-util") /*id: 915212*/(weakmapUtils.WeakMap, weakmapUtils.set, true)
  });
}