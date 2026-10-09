// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'usePopperSidecar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 225893
         */
module.exports = function (module, exports, require) {
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var popupTriggerComponent_1 = require("popup-trigger-component_1") /*id: 505752*/;
  var splitterHandleIcon = require("splitter-handle-icon") /*id: 830584*/;
  var dimensionConfig = require("dimension-config") /*id: 446374*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var reducedMotionConfig = require("reduced-motion-config") /*id: 108612*/;
  var p = ["action", "popupPlacement", "showArrow", "arrowHasStroke", "popupMotion", "defaultMainAxisOffsetWithoutArrow", "prefixCls", "enableAnimation", "offset", "flip", "shift"];
  function v(e) {
    var t = e.offset;
    var n = e.defaultOffset;
    var o = t;
    if (o === undefined || typeof o != "number") {
      o = n;
    }
    var r = {
      targetOffset: [0, 0],
      ignoreShake: true
    };
    var i = {
      adjustX: true,
      adjustY: true,
      alwaysByViewport: false
    };
    var a = objectPropertyAssign.assignObject({
      points: ["cr", "cl"],
      overflow: i,
      offset: [-o, 0]
    }, r);
    var c = objectPropertyAssign.assignObject({
      points: ["cl", "cr"],
      overflow: i,
      offset: [o, 0]
    }, r);
    var l = objectPropertyAssign.assignObject({
      points: ["bc", "tc"],
      overflow: i,
      offset: [0, -o]
    }, r);
    var s = objectPropertyAssign.assignObject({
      points: ["tc", "bc"],
      overflow: i,
      offset: [0, o]
    }, r);
    return {
      leftCenter: a,
      rightCenter: c,
      topCenter: l,
      bottomCenter: s,
      left: a,
      right: c,
      top: l,
      bottom: s,
      topLeft: objectPropertyAssign.assignObject({
        points: ["bl", "tl"],
        overflow: i,
        offset: [0, -o]
      }, r),
      leftTop: objectPropertyAssign.assignObject({
        points: ["tr", "tl"],
        overflow: i,
        offset: [-o, 0]
      }, r),
      topRight: objectPropertyAssign.assignObject({
        points: ["br", "tr"],
        overflow: i,
        offset: [0, -o]
      }, r),
      rightTop: objectPropertyAssign.assignObject({
        points: ["tl", "tr"],
        overflow: i,
        offset: [o, 0]
      }, r),
      bottomRight: objectPropertyAssign.assignObject({
        points: ["tr", "br"],
        overflow: i,
        offset: [0, o]
      }, r),
      rightBottom: objectPropertyAssign.assignObject({
        points: ["bl", "br"],
        overflow: i,
        offset: [o, 0]
      }, r),
      bottomLeft: objectPropertyAssign.assignObject({
        points: ["tl", "bl"],
        overflow: i,
        offset: [0, o]
      }, r),
      leftBottom: objectPropertyAssign.assignObject({
        points: ["br", "bl"],
        overflow: i,
        offset: [-o, 0]
      }, r)
    };
  }
  var m = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var n = e.action;
    var o = e.popupPlacement;
    var m = e.showArrow;
    var g = e.arrowHasStroke;
    var h = e.popupMotion;
    var b = e.defaultMainAxisOffsetWithoutArrow;
    var Z = e.prefixCls;
    var w = e.enableAnimation;
    var y = e.offset;
    e.flip;
    e.shift;
    var x = objectOmitHelper_1.omitWithSymbols(e, p);
    var R = reactCoreLibraryReexport.useMemo(function () {
      return v({
        offset: y,
        defaultOffset: (m ? dimensionConfig.dimensions.y : 0) + b
      });
    }, [b, y, m]);
    var C = reactCoreLibraryReexport.useMemo(function () {
      if (m) {
        return {
          size: dimensionConfig.dimensions.x,
          safeMarginX: dimensionConfig.defaultCount,
          safeMarginY: dimensionConfig.defaultCount,
          content: function (e) {
            var t = e.placement;
            return reactCoreLibraryReexport.createElement(splitterHandleIcon.SplitterHandle, {
              className: `${Z}__arrow__streamline`,
              style: objectPropertyAssign.assignObject({
                position: "absolute"
              }, t === "top" ? {
                transform: "rotate(180deg)",
                left: 0,
                bottom: 0
              } : t === "bottom" ? {
                left: 0,
                top: 0
              } : t === "left" ? {
                transform: "rotate(180deg)",
                right: 0
              } : t === "right" ? {
                left: 0
              } : undefined),
              direction: ["left", "right"].includes(t) ? "vertical" : "horizontal",
              hasStroke: g
            });
          }
        };
      } else {
        return undefined;
      }
    }, [g, Z, m]);
    var E = !reducedMotionConfig.useReducedMotion(domTypeUtils_1.isDefined(w) ? !w : undefined);
    return reactCoreLibraryReexport.createElement(popupTriggerComponent_1.PopupTrigger, objectAssignUtil.objectAssign({
      ref: t,
      prefixCls: Z,
      popupPlacement: o,
      builtinPlacements: R,
      action: n,
      arrow: C,
      popupMotion: E ? h : "noop"
    }, x));
  });
  var uiGlobalConfigContext = require("ui-global-config-context") /*id: 698735*/;
  function h() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.PopperSidecar;
    }) ?? m;
  }
  require.d(exports, {
    usePopperSidecar: function () {
      return h;
    }
  });
}