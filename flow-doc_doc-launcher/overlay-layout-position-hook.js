// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useOverlayPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 397384
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var overlayUiConstants = require("overlay-ui-constants") /*id: 645442*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  function u(e) {
    let {
      visible: n,
      referencePoint: r,
      targetRect: u,
      boundaryRect: s,
      isMultipleClick: d = false
    } = e;
    let h = reactCoreLibraryReexport.useRef(uiLayoutPositionEnums.positionModeTypes.None);
    let f = reactCoreLibraryReexport.useRef(uiLayoutPositionEnums.positionAlignTypes.None);
    let p = reactCoreLibraryReexport.useRef({});
    let g = reactCoreLibraryReexport.useRef({
      x: 0,
      y: 0
    });
    let m = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!n) {
        h.current = uiLayoutPositionEnums.positionModeTypes.None;
        f.current = uiLayoutPositionEnums.positionAlignTypes.None;
        p.current = {};
        g.current = {
          x: 0,
          y: 0
        };
      }
    }, [n]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (n && m.current === null) {
        m.current = u;
      } else if (!n) {
        m.current = null;
      }
      return () => {
        if (n) {
          m.current = u;
        }
      };
    }, [n, u]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (uiLayoutPositionUtils.hasNonZeroRect(u) && m.current && uiLayoutPositionUtils.hasNonZeroRect(m.current) && u.width !== m.current.width && h.current !== uiLayoutPositionEnums.positionModeTypes.None && f.current !== uiLayoutPositionEnums.positionAlignTypes.None && Object.keys(p).length > 0) {
        if (u.left > g.current.x + m.current.left) {
          g.current.x = 0;
        } else if (u.right < g.current.x + m.current.left) {
          g.current.x = u.width;
        } else {
          g.current.x = g.current.x + m.current.left - u.left;
        }
      }
    }, [u]);
    return [reactCoreLibraryReexport.useCallback(e => {
      let n;
      let {
        adaptiveSize: o,
        contentRect: i,
        currentDirection: s
      } = e;
      if (!r || !uiLayoutPositionUtils.hasNonZeroRect(u)) {
        return uiLayoutPositionEnums.positionAlignTypes.None;
      }
      if (f.current !== uiLayoutPositionEnums.positionAlignTypes.None) {
        return f.current;
      }
      if (s !== uiLayoutPositionEnums.positionAlignTypes.None) {
        return s;
      }
      let p = o[uiLayoutPositionEnums.positionAlignTypes.TopCenter];
      n = u.height <= overlayUiConstants.buttonHeight ? p.height < i.height ? uiLayoutPositionEnums.verticalPosition.Bottom : uiLayoutPositionEnums.verticalPosition.Top : d && u.height <= overlayUiConstants.headerHeight ? uiLayoutPositionEnums.verticalPosition.Top : uiLayoutPositionUtils.getVerticalPosition(r, u);
      g.current = {
        x: r.x - u.left,
        y: 0
      };
      if (n === uiLayoutPositionEnums.verticalPosition.Top) {
        if (p.height >= i.height) {
          h.current = uiLayoutPositionEnums.positionModeTypes.OutBox;
          f.current = uiLayoutPositionEnums.positionAlignTypes.TopCenter;
        } else {
          h.current = uiLayoutPositionEnums.positionModeTypes.StickTop;
        }
        return uiLayoutPositionEnums.positionAlignTypes.TopCenter;
      } else if (n === uiLayoutPositionEnums.verticalPosition.Middle) {
        h.current = uiLayoutPositionEnums.positionModeTypes.Fixed;
        g.current = {
          x: g.current.x,
          y: r.y - u.top
        };
        if (p.height - u.top + r.y >= i.height) {
          return uiLayoutPositionEnums.positionAlignTypes.TopCenter;
        } else {
          return uiLayoutPositionEnums.positionAlignTypes.BottomCenter;
        }
      } else {
        if (o[uiLayoutPositionEnums.positionAlignTypes.BottomCenter].height >= i.height) {
          h.current = uiLayoutPositionEnums.positionModeTypes.OutBox;
          f.current = uiLayoutPositionEnums.positionAlignTypes.BottomCenter;
        } else {
          h.current = uiLayoutPositionEnums.positionModeTypes.StickBottom;
        }
        return uiLayoutPositionEnums.positionAlignTypes.BottomCenter;
      }
    }, [r, u]), reactCoreLibraryReexport.useCallback(e => {
      let {
        contentRect: n,
        targetRect: i,
        viewportInfo: l,
        offsetInfo: u,
        direction: d,
        bodyRect: m
      } = e;
      if (r && d !== uiLayoutPositionEnums.positionAlignTypes.None) {
        if (h.current === uiLayoutPositionEnums.positionModeTypes.OutBox) {
          p.current = {};
          return uiLayoutPositionUtils.calcAlignPosition({
            contentRect: n,
            viewportInfo: l,
            direction: d,
            offsetInfo: u,
            targetRect: new DOMRect(g.current.x + i.left, i.top, 1, i.height),
            bodyRect: m
          });
        }
        if (h.current === uiLayoutPositionEnums.positionModeTypes.Fixed) {
          p.current = {};
          return uiLayoutPositionUtils.calcAlignPosition({
            contentRect: n,
            viewportInfo: l,
            direction: d,
            offsetInfo: u,
            targetRect: new DOMRect(g.current.x + i.left, i.top + g.current.y, 1, 1),
            bodyRect: m
          });
        }
        if (Object.keys(p.current).length === 0) {
          p.current = uiLayoutPositionUtils.calcAlignPosition({
            contentRect: n,
            viewportInfo: l,
            direction: d,
            offsetInfo: u,
            targetRect: new DOMRect(g.current.x + i.left, i.top, 1, i.height),
            bodyRect: m
          });
          let e = uiLayoutPositionUtils.calcOverflowAdjustment({
            positionInfo: p.current,
            contentRect: n,
            viewportInfo: l,
            boundaryRect: s,
            bodyRect: m
          });
          if (e.top > 0) {
            if (isUndefinedCheck.isUndefined(p.current.top)) {
              p.current.bottom -= e.top;
            } else {
              p.current.top += e.top;
            }
          }
          if (e.bottom > 0) {
            if (isUndefinedCheck.isUndefined(p.current.top)) {
              p.current.bottom += e.bottom;
            } else {
              p.current.top -= e.bottom;
            }
          }
        }
        let e = uiLayoutPositionUtils.calcOverflowAdjustment({
          positionInfo: p.current,
          contentRect: n,
          viewportInfo: l,
          boundaryRect: new DOMRect(i.left, i.top - u[1] - n.height, i.width, i.height + u[1] * 2 + n.height * 2),
          bodyRect: m
        });
        if (e.top > 0) {
          h.current = uiLayoutPositionEnums.positionModeTypes.OutBox;
          f.current = uiLayoutPositionEnums.positionAlignTypes.TopCenter;
          if (isUndefinedCheck.isUndefined(p.current.top)) {
            p.current.bottom -= e.top;
          } else {
            p.current.top += e.top;
          }
        }
        if (e.bottom > 0) {
          h.current = uiLayoutPositionEnums.positionModeTypes.OutBox;
          f.current = uiLayoutPositionEnums.positionAlignTypes.BottomCenter;
          if (isUndefinedCheck.isUndefined(p.current.top)) {
            p.current.bottom += e.bottom;
          } else {
            p.current.top -= e.bottom;
          }
        }
        return p.current;
      }
      return {};
    }, [r, s])];
  }
  require.d(exports, {
    useOverlayPosition: function () {
      return u;
    }
  });
}