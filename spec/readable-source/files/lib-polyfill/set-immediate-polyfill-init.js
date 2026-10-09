// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Resolved require(264051) to 'set-immediate-polyfill'
// - Renamed variable 'a' to 'functionBindPolyfillWrapper_1'
// - Resolved require(376492) to 'function-bind-polyfill-wrapper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 118322
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var i = require("set-immediate-polyfill") /*id: 264051*/.set;
  var functionBindPolyfillWrapper_1 = require("function-bind-polyfill-wrapper_1") /*id: 376492*/;
  var u = globalObjectPolyfill.setImmediate ? functionBindPolyfillWrapper_1(i, false) : i;
  polyfillPropertyDefiner({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalObjectPolyfill.setImmediate !== u
  }, {
    setImmediate: u
  });
}