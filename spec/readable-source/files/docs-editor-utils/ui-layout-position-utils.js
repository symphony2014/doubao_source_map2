// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$E' to 'adjustStickyPosition'
// - Renamed export 'Fn' to 'calcOverflowAdjustment'
// - Renamed export 'IX' to 'getSelectionRange'
// - Renamed export 'N0' to 'adjustLayoutOffset'
// - Renamed export 'dp' to 'calcToolbarPosition'
// - Renamed export 'm2' to 'isEmptyRect'
// - Renamed export 'oQ' to 'calcAlignPosition'
// - Renamed export 'r2' to 'getVerticalPosition'
// - Renamed export 'wP' to 'compareRects'
// - Renamed export 'zV' to 'flipPositionAlign'
// - Renamed export 'zy' to 'hasNonZeroRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 274647
         */
module.exports = function (module, exports, require) {
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var sheetErrorsAndConfig = require("sheet-errors-and-config") /*id: 89207*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var emptyObjectFactories = require("empty-object-factories") /*id: 176701*/;
  function s(e, n) {
    let {
      left: r,
      top: o,
      right: i,
      bottom: l
    } = e;
    let {
      left: c,
      top: u,
      right: a,
      bottom: s
    } = n;
    return r === c && o === u && i === a && l === s;
  }
  function d() {
    let e = window.getSelection();
    if (!e || !e.anchorNode || !e.focusNode) {
      return null;
    }
    let n = e.anchorNode.compareDocumentPosition(e.focusNode);
    let r = !n && e.anchorOffset > e.focusOffset || n === Node.DOCUMENT_POSITION_PRECEDING;
    let o = document.createRange();
    o.setStart(e.focusNode, Math.max(0, r ? e.focusOffset : e.focusOffset - 1));
    o.setEnd(e.focusNode, Math.max(0, e.focusOffset));
    return o;
  }
  let f = e => {
    switch (e) {
      case "top":
        return "bottom";
      case "bottom":
        return "top";
      case "left":
        return "right";
      case "right":
        return "left";
      default:
        return "";
    }
  };
  function h(e) {
    let {
      positionInfo: n,
      sticky: r,
      ...l
    } = e;
    if (!r) {
      return n;
    }
    r = arrayIsArrayUtil.isArray(r) ? r : [true, true];
    let c = m({
      ...l,
      positionInfo: n
    });
    Object.keys(c).forEach(e => {
      if (!(c[e] < 0) && (e !== "top" && e !== "bottom" || r[1] && (r[1] === true || r[1] === e)) && (e !== "left" && e !== "right" || r[0])) {
        if (isUndefinedCheck.isUndefined(n[e])) {
          n[f(e)] -= c[e];
        } else {
          n[e] += c[e];
        }
      }
    });
    return n;
  }
  function _(e) {
    let {
      targetRect: n,
      contentRect: r,
      direction: o,
      offsetInfo: i,
      viewportInfo: {
        width: l,
        height: c
      },
      bodyRect: s,
      boundaryRect: d
    } = e;
    switch (o) {
      case uiLayoutPositionEnums.positionAlignTypes.LeftTextCenter:
        return {
          right: l - n.x + i[0] + s.left,
          top: n.y - i[1] - r.height / 2 - s.top
        };
      case uiLayoutPositionEnums.positionAlignTypes.RightTextCenter:
        return {
          left: n.x + n.width + i[0] - s.left,
          top: n.y - i[1] - r.height / 2 - s.top
        };
      case uiLayoutPositionEnums.positionAlignTypes.LeftCenter:
        return {
          right: l - n.x + i[0] + s.left,
          top: n.y - i[1] - (r.height - n.height) / 2 - s.top
        };
      case uiLayoutPositionEnums.positionAlignTypes.RightCenter:
        return {
          left: n.x + n.width + i[0] - s.left,
          top: n.y - i[1] - (r.height - n.height) / 2 - s.top
        };
      case uiLayoutPositionEnums.positionAlignTypes.BottomLeft:
        return {
          top: n.y + n.height + i[1] - s.top,
          left: n.x + i[0] - s.left
        };
      case uiLayoutPositionEnums.positionAlignTypes.TopLeft:
        return {
          bottom: c - n.y + i[1] + s.top,
          left: n.x + i[0] - s.left
        };
      case uiLayoutPositionEnums.positionAlignTypes.IPadBottomLeft:
        return emptyObjectFactories.createEmptyObject1({
          targetRect: n,
          bodyRect: s,
          offsetInfo: i,
          boundaryRect: d,
          contentRect: r
        });
      case uiLayoutPositionEnums.positionAlignTypes.IPadTopLeft:
        return emptyObjectFactories.createEmptyObject2({
          targetRect: n,
          bodyRect: s,
          offsetInfo: i,
          boundaryRect: d,
          contentRect: r,
          viewportHeight: c
        });
      case uiLayoutPositionEnums.positionAlignTypes.BottomRight:
        return {
          top: n.y + n.height + i[1] - s.top,
          right: l - n.right - i[0] + s.left
        };
      case uiLayoutPositionEnums.positionAlignTypes.TopRight:
        return {
          bottom: c - n.y + i[1] + s.top,
          right: l - n.right - i[0] + s.left
        };
      case uiLayoutPositionEnums.positionAlignTypes.BottomCenter:
        return {
          top: n.y + n.height + i[1] - s.top,
          left: n.x + i[0] + (n.width - r.width) / 2 - s.left
        };
      case uiLayoutPositionEnums.positionAlignTypes.TopCenter:
        return {
          bottom: c - n.y + i[1] + s.top,
          left: n.x + i[0] + (n.width - r.width) / 2 - s.left
        };
      case uiLayoutPositionEnums.positionAlignTypes.None:
      default:
        return {
          left: -1,
          top: -1
        };
    }
  }
  function p(e) {
    let {
      targetRect: n,
      contentRect: r,
      direction: o,
      offsetInfo: i,
      viewportInfo: c,
      bodyRect: a,
      type: s
    } = e;
    let d = _({
      targetRect: n,
      contentRect: r,
      direction: o,
      offsetInfo: i,
      viewportInfo: c,
      bodyRect: a
    });
    if (s === uiLayoutPositionEnums.toolbarIconTypes.BlockIcon && d.right && c.width - d.right - sheetErrorsAndConfig.layoutSize24Alt >= 60) {
      d.right += sheetErrorsAndConfig.layoutSize24Alt;
    }
    return d;
  }
  function g(e) {
    let n = h(e);
    if (n.bottom) {
      n.bottom -= sheetErrorsAndConfig.layoutSize24;
    }
    if (n.left) {
      n.left += sheetErrorsAndConfig.layoutSize24Alt / 2;
    }
    return n;
  }
  function E(e) {
    switch (e) {
      case uiLayoutPositionEnums.positionAlignTypes.LeftTextCenter:
        return uiLayoutPositionEnums.positionAlignTypes.RightTextCenter;
      case uiLayoutPositionEnums.positionAlignTypes.RightTextCenter:
        return uiLayoutPositionEnums.positionAlignTypes.LeftTextCenter;
      case uiLayoutPositionEnums.positionAlignTypes.LeftCenter:
        return uiLayoutPositionEnums.positionAlignTypes.RightCenter;
      case uiLayoutPositionEnums.positionAlignTypes.RightCenter:
        return uiLayoutPositionEnums.positionAlignTypes.LeftCenter;
      case uiLayoutPositionEnums.positionAlignTypes.BottomLeft:
        return uiLayoutPositionEnums.positionAlignTypes.TopLeft;
      case uiLayoutPositionEnums.positionAlignTypes.TopLeft:
        return uiLayoutPositionEnums.positionAlignTypes.BottomLeft;
      case uiLayoutPositionEnums.positionAlignTypes.BottomRight:
        return uiLayoutPositionEnums.positionAlignTypes.TopRight;
      case uiLayoutPositionEnums.positionAlignTypes.TopRight:
        return uiLayoutPositionEnums.positionAlignTypes.BottomRight;
      case uiLayoutPositionEnums.positionAlignTypes.BottomCenter:
        return uiLayoutPositionEnums.positionAlignTypes.TopCenter;
      case uiLayoutPositionEnums.positionAlignTypes.TopCenter:
        return uiLayoutPositionEnums.positionAlignTypes.BottomCenter;
      case uiLayoutPositionEnums.positionAlignTypes.None:
      default:
        return uiLayoutPositionEnums.positionAlignTypes.None;
    }
  }
  function m(e) {
    let {
      contentRect: n,
      positionInfo: r,
      viewportInfo: o,
      boundaryRect: l,
      bodyRect: c
    } = e;
    let u = isUndefinedCheck.isUndefined(r.left) ? l.left + r.right + n.width - o.width : l.left - r.left;
    let a = isUndefinedCheck.isUndefined(r.left) ? o.width - r.right - l.left - l.width : r.left + n.width - l.left - l.width;
    let s = isUndefinedCheck.isUndefined(r.top) ? l.top + r.bottom + n.height - o.height : l.top - r.top;
    let d = isUndefinedCheck.isUndefined(r.top) ? o.height - r.bottom - l.top - l.height : r.top + n.height - l.top - l.height;
    return {
      left: u,
      right: a,
      top: s - c.top,
      bottom: d + c.top
    };
  }
  function b(e, n) {
    if (n.height <= overlayUiConstants.headerHeight * 2) {
      if (e.y > n.top + n.height / 2) {
        return uiLayoutPositionEnums.verticalPosition.Bottom;
      } else {
        return uiLayoutPositionEnums.verticalPosition.Top;
      }
    } else if (e.y <= n.top + overlayUiConstants.headerHeight) {
      return uiLayoutPositionEnums.verticalPosition.Top;
    } else if (e.y >= n.top + n.height - overlayUiConstants.headerHeight) {
      return uiLayoutPositionEnums.verticalPosition.Bottom;
    } else {
      return uiLayoutPositionEnums.verticalPosition.Middle;
    }
  }
  function v(e) {
    return e.x === 0 && e.y === 0 && e.width === 0 && e.height === 0;
  }
  function T(e) {
    return e.width !== 0 || e.height !== 0;
  }
  require.d(exports, {
    adjustStickyPosition: function () {
      return h;
    },
    calcOverflowAdjustment: function () {
      return m;
    },
    getSelectionRange: function () {
      return d;
    },
    adjustLayoutOffset: function () {
      return g;
    },
    calcToolbarPosition: function () {
      return p;
    },
    isEmptyRect: function () {
      return v;
    },
    calcAlignPosition: function () {
      return _;
    },
    getVerticalPosition: function () {
      return b;
    },
    compareRects: function () {
      return s;
    },
    flipPositionAlign: function () {
      return E;
    },
    hasNonZeroRect: function () {
      return T;
    }
  });
}