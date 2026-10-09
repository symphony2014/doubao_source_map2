// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'functionBindPolyfillImpl'
// - Resolved require(586622) to 'function-bind-polyfill-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 818300
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindPolyfillImpl = require("function-bind-polyfill-impl") /*id: 586622*/;
  polyfillPropertyDefiner({
    target: "Function",
    proto: true,
    forced: Function.bind !== functionBindPolyfillImpl
  }, {
    bind: functionBindPolyfillImpl
  });
}