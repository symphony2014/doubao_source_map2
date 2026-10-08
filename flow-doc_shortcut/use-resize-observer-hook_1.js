// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'yU' to 'useResizeObserver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 727379
         */
module.exports = function (module, exports, require) {
  var o;
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var resizeObserverManager_1 = require("resize-observer-manager_1") /*id: 722166*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var reactRefMemoizedSetter = require("react-ref-memoized-setter") /*id: 458675*/;
  function f() {
    var e = new Set();
    return {
      observer: new resizeObserverManager_1.ResizeObserver.ResizeObserver(function (n, r) {
        reactDomEntryWrapper.unstable_batchedUpdates(function () {
          var o;
          var l = iteratorAdapterUtil.createIterator(e);
          try {
            for (l.s(); !(o = l.n()).done;) {
              o.value(n, r);
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        });
      }),
      subscribe: function (n) {
        return e.add(n);
      },
      unsubscribe: function (n) {
        return e.delete(n);
      }
    };
  }
  function p(e, n = {}) {
    var r = n.disabled;
    var i = r !== undefined && r;
    var a = o ||= f();
    var s = reactRefEffectUtils.useUpdatedRef(e);
    var p = reactCoreLibraryReexport.useRef({
      refCalledTimes: 0,
      observingNode: null
    });
    var g = reactRefMemoizedSetter.useMemoizedRefSetter(null, function (e) {
      if (!i) {
        var n = p.current.refCalledTimes + 1;
        p.current.refCalledTimes = n;
        Promise.resolve().then(function () {
          if (n === p.current.refCalledTimes) {
            var r = p.current.observingNode;
            if (r !== e) {
              if (r) {
                a.observer.unobserve(r);
              }
              if (!domElementUtils.isElementNode(e)) {
                p.current.observingNode = null;
                return;
              }
              a.observer.observe(e, {
                box: "border-box"
              });
              p.current.observingNode = e;
            }
          }
        });
      }
    });
    reactRefEffectUtils.useLayoutEffect(function () {
      if (!i) {
        var e = false;
        function n(n, r) {
          if (!e && (!g.current || !domElementWindowUtils.isInlineNonReplacedElement(g.current))) {
            for (var o = 0; o < n.length; o++) {
              var i = n[o];
              if (i.target === g.current) {
                s.current(i, r);
              }
            }
          }
        }
        a.subscribe(n);
        return function () {
          e = true;
          a.unsubscribe(n);
        };
      }
    }, [i, a, s, g]);
    return g;
  }
  require.d(exports, {
    useResizeObserver: function () {
      return p;
    }
  });
}