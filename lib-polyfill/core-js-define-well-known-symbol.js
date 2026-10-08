// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'blueprintOverflowListResizeSensor'
// - Resolved require(269058) to 'blueprint-overflow-list-resize-sensor'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'i' to 'coreJsWksAccessExport'
// - Resolved require(506600) to 'core-js-wks-access-export'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// - Updated imported property 'f' to 'coreJsWksAccess' (module 506600)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 589287
         */
module.exports = function (module, exports, require) {
  var blueprintOverflowListResizeSensor = require("blueprint-overflow-list-resize-sensor") /*id: 269058*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var coreJsWksAccessExport = require("core-js-wks-access-export") /*id: 506600*/;
  var a = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  module.exports = function (t) {
    var r = blueprintOverflowListResizeSensor.Symbol ||= {};
    if (!objectHasOwnPolyfill_1(r, t)) {
      a(r, t, {
        value: coreJsWksAccessExport.coreJsWksAccess(t)
      });
    }
  };
}