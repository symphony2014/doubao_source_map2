// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'weakmapUtils'
// - Resolved require(76713) to 'weakmap-utils'
// - Resolved require(851798) to 'object-mixin-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 972627
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var weakmapUtils = require("weakmap-utils") /*id: 76713*/;
  polyfillPropertyDefiner({
    target: "WeakMap",
    stat: true,
    forced: true
  }, {
    of: require("object-mixin-factory") /*id: 851798*/(weakmapUtils.WeakMap, weakmapUtils.set, true)
  });
}