// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'setPrototypeUtils'
// - Resolved require(192672) to 'set-prototype-utils'
// - Resolved require(915212) to 'collection-iter-init-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 465597
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var setPrototypeUtils = require("set-prototype-utils") /*id: 192672*/;
  polyfillPropertyDefiner({
    target: "Set",
    stat: true,
    forced: true
  }, {
    from: require("collection-iter-init-util") /*id: 915212*/(setPrototypeUtils.Set, setPrototypeUtils.add, false)
  });
}