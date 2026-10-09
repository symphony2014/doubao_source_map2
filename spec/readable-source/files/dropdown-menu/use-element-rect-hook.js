// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'useElementRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 176756
         */
module.exports = function (module, exports, require) {
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var useIsMountedHook = require("use-is-mounted-hook") /*id: 799618*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var useResizeObserverHook_2 = require("use-resize-observer-hook_2") /*id: 824097*/;
  var l = {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };
  function f(e, t) {
    if (!(e instanceof SVGElement) && t) {
      var n = t.target.getBoundingClientRect();
      var r = Array.isArray(t.borderBoxSize) ? t.borderBoxSize[0] : t.borderBoxSize;
      var o = n.left;
      var i = n.top;
      var a = n.bottom;
      var c = n.right;
      var u = n.width;
      var s = n.height;
      return {
        left: o,
        top: i,
        bottom: a,
        right: c,
        x: n.x,
        y: n.y,
        width: r ? r.inlineSize : u,
        height: r ? r.blockSize : s
      };
    }
    return e.getBoundingClientRect();
  }
  function d(e = {}) {
    var t = e.onChange;
    var n = e.resizeObserverDisabled;
    var d = reactCoreLibraryReexport.useState(l);
    var m = iterableToArrayUtil_1_1.iterableToArray(d, 2);
    var _ = m[0];
    var p = m[1];
    var E = useIsMountedHook.useIsMounted();
    var C = reactCoreLibraryReexport.useCallback(function (e) {
      if (E()) {
        p(function (t) {
          if (e.width !== t.width || e.height !== t.height) {
            return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, t), {}, {
              width: e.width,
              height: e.height
            });
          } else {
            return t;
          }
        });
      }
    }, [E]);
    var h = reactCoreLibraryReexport.useCallback(function (e) {
      if (E()) {
        p(function (t) {
          if (e.left !== t.left || e.top !== t.top) {
            return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, t), {}, {
              left: e.left,
              top: e.top
            });
          } else {
            return t;
          }
        });
      }
    }, [E]);
    var v = useResizeObserverHook_2.useResizeObserver(function (e, n) {
      var r = f(e.target, e);
      var o = r.width;
      var i = r.height;
      var c = r.left;
      var u = r.top;
      C({
        width: o,
        height: i
      });
      h({
        left: c,
        top: u
      });
      if (domTypeUtils_1.isFunction(t)) {
        t(e, n);
      }
    }, {
      disabled: n !== undefined && n
    });
    var R = reactCoreLibraryReexport.useCallback(function () {
      if (v.current) {
        var e = f(v.current);
        var t = e.width;
        var n = e.height;
        var r = e.left;
        var o = e.top;
        C({
          width: t,
          height: n
        });
        h({
          left: r,
          top: o
        });
      }
    }, [h, C, v]);
    reactRefEffectUtils.useLayoutEffect(function () {
      if (v.current) {
        var e = f(v.current);
        var t = e.width;
        var n = e.height;
        var r = e.left;
        var o = e.top;
        C({
          width: t,
          height: n
        });
        h({
          left: r,
          top: o
        });
      }
    }, [h, C, v]);
    return [v, reactCoreLibraryReexport.useMemo(function () {
      return objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, _), {}, {
        x: _.left,
        y: _.top,
        right: _.width + _.left,
        bottom: _.height + _.top
      });
    }, [_]), {
      handleResize: C,
      handleReLayout: h,
      updateRect: R
    }];
  }
  require.d(exports, {
    useElementRect: function () {
      return d;
    }
  });
}