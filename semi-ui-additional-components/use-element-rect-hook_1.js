// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useElementRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 525111
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var useResizeObserverHook_1 = require("use-resize-observer-hook_1") /*id: 727379*/;
  var u = {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };
  function d(e, n) {
    if (!(e instanceof SVGElement) && n) {
      var i = n.target.getBoundingClientRect();
      var r = Array.isArray(n.borderBoxSize) ? n.borderBoxSize[0] : n.borderBoxSize;
      var o = i.left;
      var a = i.top;
      var l = i.bottom;
      var c = i.right;
      var s = i.width;
      var u = i.height;
      return {
        left: o,
        top: a,
        bottom: l,
        right: c,
        x: i.x,
        y: i.y,
        width: r ? r.inlineSize : s,
        height: r ? r.blockSize : u
      };
    }
    return e.getBoundingClientRect();
  }
  function f() {
    var e;
    var n;
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var f = i.onChange;
    var h = i.resizeObserverDisabled;
    var p = reactCoreLibraryReexport.useState(u);
    var m = iterableToArrayUtil_1_1.iterableToArray(p, 2);
    var v = m[0];
    var g = m[1];
    e = reactCoreLibraryReexport.useRef(false);
    n = reactCoreLibraryReexport.useCallback(function () {
      return e.current;
    }, []);
    reactRefEffectUtils.useLayoutEffect(function () {
      e.current = true;
      return function () {
        e.current = false;
      };
    });
    var b = n;
    var y = reactCoreLibraryReexport.useCallback(function (e) {
      if (b()) {
        g(function (n) {
          if (e.width !== n.width || e.height !== n.height) {
            return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n), {}, {
              width: e.width,
              height: e.height
            });
          } else {
            return n;
          }
        });
      }
    }, [b]);
    var k = reactCoreLibraryReexport.useCallback(function (e) {
      if (b()) {
        g(function (n) {
          if (e.left !== n.left || e.top !== n.top) {
            return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, n), {}, {
              left: e.left,
              top: e.top
            });
          } else {
            return n;
          }
        });
      }
    }, [b]);
    var _ = useResizeObserverHook_1.useResizeObserver(function (e, n) {
      var i = d(e.target, e);
      var r = i.width;
      var o = i.height;
      var a = i.left;
      var c = i.top;
      y({
        width: r,
        height: o
      });
      k({
        left: a,
        top: c
      });
      if (domElementWindowUtils.isFunction(f)) {
        f(e, n);
      }
    }, {
      disabled: h !== undefined && h
    });
    var E = reactCoreLibraryReexport.useCallback(function () {
      if (_.current) {
        var e = d(_.current);
        var n = e.width;
        var i = e.height;
        var r = e.left;
        var o = e.top;
        y({
          width: n,
          height: i
        });
        k({
          left: r,
          top: o
        });
      }
    }, [k, y, _]);
    reactRefEffectUtils.useLayoutEffect(function () {
      if (_.current) {
        var e = d(_.current);
        var n = e.width;
        var i = e.height;
        var r = e.left;
        var o = e.top;
        y({
          width: n,
          height: i
        });
        k({
          left: r,
          top: o
        });
      }
    }, [k, y, _]);
    return [_, reactCoreLibraryReexport.useMemo(function () {
      return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, v), {}, {
        x: v.left,
        y: v.top,
        right: v.width + v.left,
        bottom: v.height + v.top
      });
    }, [v]), {
      handleResize: y,
      handleReLayout: k,
      updateRect: E
    }];
  }
  require.d(exports, {
    useElementRect: function () {
      return f;
    }
  });
}