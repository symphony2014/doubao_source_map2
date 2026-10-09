// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'TooltipComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 91247
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var uiConfigContextHooks = require("ui-config-context-hooks") /*id: 157*/;
  var popperSidecarWrapper = require("popper-sidecar-wrapper") /*id: 225893*/;
  require("empty-module-shim") /*id: 582176*/;
  var s = ["prefixCls", "title", "overlay", "trigger", "placement", "overlayStyle", "overlayClassName", "hideArrow", "showArrow", "children", "onOverlayMouseEnter", "onOverlayMouseLeave", "mouseLeaveDelay", "wrapDisabledChildren", "arrowHasStroke"];
  function f(e, t) {
    var n = {};
    var o = objectPropertyAssign.assignObject({}, e);
    t.forEach(function (t) {
      if (e && t in e) {
        n[t] = e[t];
        delete o[t];
      }
    });
    return {
      picked: n,
      omitted: o
    };
  }
  var d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.prefixCls;
    var d = e.title;
    var p = e.overlay;
    var v = e.trigger;
    var m = e.placement;
    var g = e.overlayStyle;
    var h = e.overlayClassName;
    var b = e.hideArrow;
    var Z = e.showArrow;
    var w = e.children;
    var y = e.onOverlayMouseEnter;
    var x = e.onOverlayMouseLeave;
    var R = e.mouseLeaveDelay;
    var C = e.wrapDisabledChildren;
    var E = C !== undefined && C;
    var A = e.arrowHasStroke;
    var k = objectOmitHelper_1.omitWithSymbols(e, s);
    var z = uiConfigContextHooks.useClassName("tooltip", n);
    var P = popperSidecarWrapper.usePopperSidecar();
    var L = "hideArrow" in e ? b === undefined || !b : Z === undefined || Z;
    var _ = reactCoreLibraryReexport.useCallback(function (e) {
      if (!e.props.disabled) {
        return e;
      }
      var t = f(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
      var n = t.picked;
      var o = t.omitted;
      var r = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
        display: "inline-block"
      }, n), {}, {
        cursor: "not-allowed",
        width: e.props.block ? "100%" : null
      });
      var c = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, o), {}, {
        pointerEvents: "none"
      });
      var l = reactCoreLibraryReexport.cloneElement(e, {
        style: c,
        className: null
      });
      return reactCoreLibraryReexport.createElement("span", {
        style: r,
        className: conditionalClassnames.default(e.props.className, `${z()}-disabled-compatible-wrapper`)
      }, l);
    }, [z]);
    var S = reactCoreLibraryReexport.useMemo(function () {
      if (reactCoreLibraryReexport.isValidElement(w)) {
        if (E) {
          return _(w);
        } else {
          return w;
        }
      } else {
        return reactCoreLibraryReexport.createElement("span", {
          className: z("__invalid-children-wrapper")
        }, w);
      }
    }, [w, z, _, E]);
    var M = reactCoreLibraryReexport.useMemo(function () {
      return reactCoreLibraryReexport.createElement("div", {
        onMouseEnter: y,
        onMouseLeave: x,
        className: z("-content"),
        role: "tooltip"
      }, d ?? p);
    }, [z, y, x, p, d]);
    if (d ?? p) {
      return reactCoreLibraryReexport.createElement(P, objectAssignUtil.objectAssign({
        ref: t,
        prefixCls: z(),
        popupPlacement: m === undefined ? "top" : m,
        action: v === undefined ? "hover" : v,
        popup: M,
        children: S,
        showArrow: L,
        arrowHasStroke: A !== undefined && A,
        popupMotion: "tooltip-zoom",
        popupStyle: g,
        popupClassName: h,
        mouseLeaveDelay: R === undefined ? 0 : R,
        defaultMainAxisOffsetWithoutArrow: 4
      }, k, {
        __screenshotAlwaysOpenEnabled: true
      }));
    } else {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, w);
    }
  });
  require.d(exports, {
    TooltipComponent: function () {
      return d;
    }
  });
}