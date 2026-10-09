// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useMutationObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 313845
         */
module.exports = function (module, exports, require) {
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  var deepResourceEffectHook = require("deep-resource-effect-hook") /*id: 295232*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  exports.useMutationObserver = function (e, t, r = {}) {
    var a = useLatestRef_1.useLatestRef(e);
    deepResourceEffectHook.useDeepResourceHook(function () {
      var e = browserDomValueUnwrap.unwrapBrowserValue(t);
      if (e) {
        var u = new MutationObserver(a.current);
        u.observe(e, r);
        return function () {
          if (u != null) {
            u.disconnect();
          }
        };
      }
    }, [r], t);
  };
}