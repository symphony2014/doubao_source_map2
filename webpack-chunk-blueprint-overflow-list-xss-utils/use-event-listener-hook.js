// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useEventListener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 629504
         */
module.exports = function (module, exports, require) {
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  var useResourceEffectHook_1 = require("use-resource-effect-hook_1") /*id: 404507*/;
  exports.useEventListener = function (e, t, n = {}) {
    var a = useLatestRef_1.useLatestRef(t);
    useResourceEffectHook_1.useResourceEffect(function () {
      var t = browserDomValueUnwrap.unwrapBrowserValue(n.target, window);
      if (t == null ? undefined : t.addEventListener) {
        function r(e) {
          return a.current(e);
        }
        t.addEventListener(e, r, {
          capture: n.capture,
          once: n.once,
          passive: n.passive
        });
        return function () {
          t.removeEventListener(e, r, {
            capture: n.capture
          });
        };
      }
    }, [e, n.capture, n.once, n.passive], n.target);
  };
}