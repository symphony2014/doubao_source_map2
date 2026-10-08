// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Resolved require(376492) to 'function-bind-polyfill-wrapper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 579877
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var i = require("function-bind-polyfill-wrapper_1") /*id: 376492*/(globalObjectPolyfill.setTimeout, true);
  polyfillPropertyDefiner({
    global: true,
    bind: true,
    forced: globalObjectPolyfill.setTimeout !== i
  }, {
    setTimeout: i
  });
}