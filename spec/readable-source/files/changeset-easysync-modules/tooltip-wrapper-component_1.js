// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'TooltipWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 943532
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var conditionalClassnames = require("conditional-classnames") /*id: 820269*/;
  var reactContextUtilsHooks = require("react-context-utils-hooks") /*id: 618670*/;
  var popupTriggerPopover = require("popup-trigger-popover") /*id: 283846*/;
  require("webcrack-unpacked-module") /*id: 266233*/;
  var l = ["prefixCls", "title", "overlay", "trigger", "placement", "overlayStyle", "overlayClassName", "hideArrow", "showArrow", "children", "onOverlayMouseEnter", "onOverlayMouseLeave", "mouseLeaveDelay", "wrapDisabledChildren", "arrowHasStroke"];
  function p(t, e) {
    var n = {};
    var r = objectPropertyAssign.assignObject({}, t);
    e.forEach(function (e) {
      if (t && e in t) {
        n[e] = t[e];
        delete r[e];
      }
    });
    return {
      picked: n,
      omitted: r
    };
  }
  var h = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = t.prefixCls;
    var h = t.title;
    var f = t.overlay;
    var d = t.trigger;
    var v = t.placement;
    var y = t.overlayStyle;
    var g = t.overlayClassName;
    var _ = t.hideArrow;
    var m = t.showArrow;
    var b = t.children;
    var E = t.onOverlayMouseEnter;
    var w = t.onOverlayMouseLeave;
    var S = t.mouseLeaveDelay;
    var T = t.wrapDisabledChildren;
    var I = T !== undefined && T;
    var A = t.arrowHasStroke;
    var C = objectOmitHelper_1.omitWithSymbols(t, l);
    var M = reactContextUtilsHooks.useComponentClass("tooltip", n);
    var k = popupTriggerPopover.PopperTrigger();
    var O = "hideArrow" in t ? _ === undefined || !_ : m === undefined || m;
    var R = reactCoreLibraryReexport.useCallback(function (t) {
      if (!t.props.disabled) {
        return t;
      }
      var e = p(t.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
      var n = e.picked;
      var r = e.omitted;
      var i = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({
        display: "inline-block"
      }, n), {}, {
        cursor: "not-allowed",
        width: t.props.block ? "100%" : null
      });
      var u = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, r), {}, {
        pointerEvents: "none"
      });
      var c = reactCoreLibraryReexport.cloneElement(t, {
        style: u,
        className: null
      });
      return reactCoreLibraryReexport.createElement("span", {
        style: i,
        className: conditionalClassnames.default(t.props.className, `${M()}-disabled-compatible-wrapper`)
      }, c);
    }, [M]);
    var D = reactCoreLibraryReexport.useMemo(function () {
      if (reactCoreLibraryReexport.isValidElement(b)) {
        if (I) {
          return R(b);
        } else {
          return b;
        }
      } else {
        return reactCoreLibraryReexport.createElement("span", {
          className: M("__invalid-children-wrapper")
        }, b);
      }
    }, [b, M, R, I]);
    var N = reactCoreLibraryReexport.useMemo(function () {
      return reactCoreLibraryReexport.createElement("div", {
        onMouseEnter: E,
        onMouseLeave: w,
        className: M("-content"),
        role: "tooltip"
      }, h ?? f);
    }, [M, E, w, f, h]);
    if (h ?? f) {
      return reactCoreLibraryReexport.createElement(k, objectAssignUtil.objectAssign({
        ref: e,
        prefixCls: M(),
        popupPlacement: v === undefined ? "top" : v,
        action: d === undefined ? "hover" : d,
        popup: N,
        children: D,
        showArrow: O,
        arrowHasStroke: A !== undefined && A,
        popupMotion: "tooltip-zoom",
        popupStyle: y,
        popupClassName: g,
        mouseLeaveDelay: S === undefined ? 0 : S,
        defaultMainAxisOffsetWithoutArrow: 4
      }, C, {
        __screenshotAlwaysOpenEnabled: true
      }));
    } else {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, b);
    }
  });
  require.d(exports, {
    TooltipWrapper: function () {
      return h;
    }
  });
}