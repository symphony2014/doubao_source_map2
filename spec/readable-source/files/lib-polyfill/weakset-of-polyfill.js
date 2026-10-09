// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'weaksetPolyfillUtils'
// - Resolved require(153468) to 'weakset-polyfill-utils'
// - Resolved require(851798) to 'object-mixin-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 978430
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var weaksetPolyfillUtils = require("weakset-polyfill-utils") /*id: 153468*/;
  polyfillPropertyDefiner({
    target: "WeakSet",
    stat: true,
    forced: true
  }, {
    of: require("object-mixin-factory") /*id: 851798*/(weaksetPolyfillUtils.WeakSet, weaksetPolyfillUtils.add, false)
  });
}