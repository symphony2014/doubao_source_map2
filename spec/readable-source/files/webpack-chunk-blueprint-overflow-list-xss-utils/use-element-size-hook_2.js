// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useElementSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 486741
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var resizeObserverPolyfill_1 = require("resize-observer-polyfill_1") /*id: 767395*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  function s(e) {
    var t = reactCoreLibraryReexport.useRef(0);
    var n = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(e), 2);
    var i = n[0];
    var s = n[1];
    var u = reactCoreLibraryReexport.useCallback(function (e) {
      cancelAnimationFrame(t.current);
      t.current = requestAnimationFrame(function () {
        s(e);
      });
    }, []);
    useOnUnmountHook.useOnUnmount(function () {
      cancelAnimationFrame(t.current);
    });
    return [i, u];
  }
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  var browserDomCheck = require("browser-dom-check") /*id: 38090*/;
  var useResourceEffectHook_1 = require("use-resource-effect-hook_1") /*id: 404507*/;
  var f = require("use-resource-effect-hook") /*id: 784182*/.createResourceHook(reactCoreLibraryReexport.useLayoutEffect);
  var h = browserDomCheck.isBrowserDom ? f : useResourceEffectHook_1.useResourceEffect;
  function d(e) {
    var t = typescriptRuntimeHelpers.spreadArray(s(function () {
      var t = browserDomValueUnwrap.unwrapBrowserValue(e);
      if (t) {
        return {
          width: t.clientWidth,
          height: t.clientHeight
        };
      } else {
        return undefined;
      }
    }), 2);
    var n = t[0];
    var o = t[1];
    h(function () {
      var t = browserDomValueUnwrap.unwrapBrowserValue(e);
      if (t) {
        var n = new resizeObserverPolyfill_1.ResizeObserver(function (e) {
          e.forEach(function (e) {
            var t = e.target;
            o({
              width: t.clientWidth,
              height: t.clientHeight
            });
          });
        });
        n.observe(t);
        return function () {
          n.disconnect();
        };
      }
    }, [], e);
    return n;
  }
  require.d(exports, {
    useElementSize: function () {
      return d;
    }
  });
}