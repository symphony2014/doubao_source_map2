// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'PopperTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 283846
         */
module.exports = function (module, exports, require) {
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var popupTriggerComponent = require("popup-trigger-component") /*id: 493746*/;
  var directionAwareSvgArrow = require("direction-aware-svg-arrow") /*id: 559377*/;
  var constantsGeometryCoordinates = require("constants-geometry-coordinates") /*id: 57731*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var reducedMotionConfigContext = require("reduced-motion-config-context") /*id: 898006*/;
  var f = ["action", "popupPlacement", "showArrow", "arrowHasStroke", "popupMotion", "defaultMainAxisOffsetWithoutArrow", "prefixCls", "enableAnimation", "offset", "flip", "shift"];
  function d(t) {
    var e = t.offset;
    var n = t.defaultOffset;
    var r = e;
    if (r === undefined || typeof r != "number") {
      r = n;
    }
    var i = {
      targetOffset: [0, 0],
      ignoreShake: true
    };
    var o = {
      adjustX: true,
      adjustY: true,
      alwaysByViewport: false
    };
    var a = objectPropertyAssign.assignObject({
      points: ["cr", "cl"],
      overflow: o,
      offset: [-r, 0]
    }, i);
    var u = objectPropertyAssign.assignObject({
      points: ["cl", "cr"],
      overflow: o,
      offset: [r, 0]
    }, i);
    var c = objectPropertyAssign.assignObject({
      points: ["bc", "tc"],
      overflow: o,
      offset: [0, -r]
    }, i);
    var l = objectPropertyAssign.assignObject({
      points: ["tc", "bc"],
      overflow: o,
      offset: [0, r]
    }, i);
    return {
      leftCenter: a,
      rightCenter: u,
      topCenter: c,
      bottomCenter: l,
      left: a,
      right: u,
      top: c,
      bottom: l,
      topLeft: objectPropertyAssign.assignObject({
        points: ["bl", "tl"],
        overflow: o,
        offset: [0, -r]
      }, i),
      leftTop: objectPropertyAssign.assignObject({
        points: ["tr", "tl"],
        overflow: o,
        offset: [-r, 0]
      }, i),
      topRight: objectPropertyAssign.assignObject({
        points: ["br", "tr"],
        overflow: o,
        offset: [0, -r]
      }, i),
      rightTop: objectPropertyAssign.assignObject({
        points: ["tl", "tr"],
        overflow: o,
        offset: [r, 0]
      }, i),
      bottomRight: objectPropertyAssign.assignObject({
        points: ["tr", "br"],
        overflow: o,
        offset: [0, r]
      }, i),
      rightBottom: objectPropertyAssign.assignObject({
        points: ["bl", "br"],
        overflow: o,
        offset: [r, 0]
      }, i),
      bottomLeft: objectPropertyAssign.assignObject({
        points: ["tl", "bl"],
        overflow: o,
        offset: [0, r]
      }, i),
      leftBottom: objectPropertyAssign.assignObject({
        points: ["br", "bl"],
        overflow: o,
        offset: [-r, 0]
      }, i)
    };
  }
  var v = reactCoreLibraryReexport.forwardRef(function (t, e) {
    var n = t.action;
    var r = t.popupPlacement;
    var v = t.showArrow;
    var y = t.arrowHasStroke;
    var g = t.popupMotion;
    var _ = t.defaultMainAxisOffsetWithoutArrow;
    var m = t.prefixCls;
    var b = t.enableAnimation;
    var E = t.offset;
    t.flip;
    t.shift;
    var w = objectOmitHelper_1.omitWithSymbols(t, f);
    var S = reactCoreLibraryReexport.useMemo(function () {
      return d({
        offset: E,
        defaultOffset: (v ? constantsGeometryCoordinates.Coordinates.y : 0) + _
      });
    }, [_, E, v]);
    var T = reactCoreLibraryReexport.useMemo(function () {
      if (v) {
        return {
          size: constantsGeometryCoordinates.Coordinates.x,
          safeMarginX: constantsGeometryCoordinates.gridSize,
          safeMarginY: constantsGeometryCoordinates.gridSize,
          content: function (t) {
            var e = t.placement;
            return reactCoreLibraryReexport.createElement(directionAwareSvgArrow.createDirectionalArrow, {
              className: `${m}__arrow__streamline`,
              style: objectPropertyAssign.assignObject({
                position: "absolute"
              }, e === "top" ? {
                transform: "rotate(180deg)",
                left: 0,
                bottom: 0
              } : e === "bottom" ? {
                left: 0,
                top: 0
              } : e === "left" ? {
                transform: "rotate(180deg)",
                right: 0
              } : e === "right" ? {
                left: 0
              } : undefined),
              direction: ["left", "right"].includes(e) ? "vertical" : "horizontal",
              hasStroke: y
            });
          }
        };
      } else {
        return undefined;
      }
    }, [y, m, v]);
    var I = !reducedMotionConfigContext.useReducedMotionConfig(domElementWindowUtils.isNotNullOrUndefined(b) ? !b : undefined);
    return reactCoreLibraryReexport.createElement(popupTriggerComponent.PopupTrigger, objectAssignUtil.objectAssign({
      ref: e,
      prefixCls: m,
      popupPlacement: r,
      builtinPlacements: S,
      action: n,
      arrow: T,
      popupMotion: I ? g : "noop"
    }, w));
  });
  var enUsLocaleContext = require("en-us-locale-context") /*id: 812811*/;
  function g() {
    return reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (t) {
      return t.PopperSidecar;
    }) ?? v;
  }
  require.d(exports, {
    PopperTrigger: function () {
      return g;
    }
  });
}