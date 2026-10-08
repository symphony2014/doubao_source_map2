// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'i' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'u' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Renamed variable 'c' to 'coreJsSharedVersionUtil'
// - Resolved require(585661) to 'core-js-shared-version-util'
// - Renamed variable 's' to 'symbolRegistrySupportCheck'
// - Resolved require(681317) to 'symbol-registry-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 992932
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var coreJsSharedVersionUtil = require("core-js-shared-version-util") /*id: 585661*/;
  var symbolRegistrySupportCheck = require("symbol-registry-support-check") /*id: 681317*/;
  var f = coreJsSharedVersionUtil("string-to-symbol-registry");
  var a = coreJsSharedVersionUtil("symbol-to-string-registry");
  coreJsExportUtil({
    target: "Symbol",
    stat: true,
    forced: !symbolRegistrySupportCheck
  }, {
    for: function (t) {
      var r = symbolSafeStringConverter(t);
      if (objectHasOwnPolyfill(f, r)) {
        return f[r];
      }
      var n = globalNamespaceUtil("Symbol")(r);
      f[r] = n;
      a[n] = r;
      return n;
    }
  });
}