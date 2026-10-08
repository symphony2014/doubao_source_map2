// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yU' to 'useResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 824097
         */
module.exports = function (module, exports, require) {
  var r;
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var resizeObserverManager = require("resize-observer-manager") /*id: 332136*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var useCallbackRefHook = require("use-callback-ref-hook") /*id: 373105*/;
  function d() {
    var e = new Set();
    return {
      observer: new resizeObserverManager.resizeObserverManager.ResizeObserver(function (t, n) {
        reactDomEntryWrapper.unstable_batchedUpdates(function () {
          var r;
          var i = iteratorAdapterUtil.createIterator(e);
          try {
            for (i.s(); !(r = i.n()).done;) {
              r.value(t, n);
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        });
      }),
      subscribe: function (t) {
        return e.add(t);
      },
      unsubscribe: function (t) {
        return e.delete(t);
      }
    };
  }
  function m(e, t = {}) {
    var n = t.disabled;
    var o = n !== undefined && n;
    var a = r ||= d();
    var s = reactRefEffectUtils.useUpdatedRef(e);
    var m = reactCoreLibraryReexport.useRef({
      refCalledTimes: 0,
      observingNode: null
    });
    var _ = useCallbackRefHook.useCallbackRef(null, function (e) {
      if (!o) {
        var t = m.current.refCalledTimes + 1;
        m.current.refCalledTimes = t;
        Promise.resolve().then(function () {
          if (t === m.current.refCalledTimes) {
            var n = m.current.observingNode;
            if (n !== e) {
              if (n) {
                a.observer.unobserve(n);
              }
              if (!domElementUtils_1.isElementNode(e)) {
                m.current.observingNode = null;
                return;
              }
              a.observer.observe(e, {
                box: "border-box"
              });
              m.current.observingNode = e;
            }
          }
        });
      }
    });
    reactRefEffectUtils.useLayoutEffect(function () {
      if (!o) {
        var e = false;
        function t(t, n) {
          if (!e && (!_.current || !domTypeUtils_1.isInlineElement(_.current))) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              if (o.target === _.current) {
                s.current(o, n);
              }
            }
          }
        }
        a.subscribe(t);
        return function () {
          e = true;
          a.unsubscribe(t);
        };
      }
    }, [o, a, s, _]);
    return _;
  }
  require.d(exports, {
    useResizeObserver: function () {
      return m;
    }
  });
}