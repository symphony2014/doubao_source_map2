// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'i' to 'symbolTypeCheck'
// - Resolved require(95579) to 'symbol-type-check'
// - Renamed variable 'u' to 'safeStringConvert'
// - Resolved require(355263) to 'safe-string-convert'
// - Renamed variable 'c' to 'coreJsSharedVersionUtil'
// - Resolved require(585661) to 'core-js-shared-version-util'
// - Renamed variable 's' to 'symbolRegistrySupportCheck'
// - Resolved require(681317) to 'symbol-registry-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 637942
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var symbolTypeCheck = require("symbol-type-check") /*id: 95579*/;
  var safeStringConvert = require("safe-string-convert") /*id: 355263*/;
  var coreJsSharedVersionUtil = require("core-js-shared-version-util") /*id: 585661*/;
  var symbolRegistrySupportCheck = require("symbol-registry-support-check") /*id: 681317*/;
  var f = coreJsSharedVersionUtil("symbol-to-string-registry");
  coreJsExportUtil({
    target: "Symbol",
    stat: true,
    forced: !symbolRegistrySupportCheck
  }, {
    keyFor: function (t) {
      if (!symbolTypeCheck(t)) {
        throw TypeError(safeStringConvert(t) + " is not a symbol");
      }
      if (objectHasOwnPolyfill(f, t)) {
        return f[t];
      }
    }
  });
}