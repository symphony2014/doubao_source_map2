// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'regexpExecPolyfill'
// - Resolved require(477250) to 'regexp-exec-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 210018
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var regexpExecPolyfill = require("regexp-exec-polyfill") /*id: 477250*/;
  polyfillPropertyDefiner({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== regexpExecPolyfill
  }, {
    exec: regexpExecPolyfill
  });
}