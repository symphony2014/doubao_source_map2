// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'stylePropsConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 584416
         */
module.exports = function (module, exports, require) {
  var spacingPropsUtils = require("spacing-props-utils") /*id: 482854*/;
  var themeStylePropResolver = require("theme-style-prop-resolver") /*id: 284434*/;
  var propsMergeUtil = require("props-merge-util") /*id: 649340*/;
  function a(...e) {
    let t = e.reduce((e, t) => {
      t.filterProps.forEach(n => {
        e[n] = t;
      });
      return e;
    }, {});
    let n = e => Object.keys(e).reduce((n, r) => t[r] ? propsMergeUtil.mergeProps(n, t[r](e)) : n, {});
    n.propTypes = {};
    n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []);
    return n;
  }
  var breakpointUtils = require("breakpoint-utils") /*id: 314944*/;
  function l(e) {
    if (typeof e != "number") {
      return e;
    } else {
      return `${e}px solid`;
    }
  }
  function u(e, t) {
    return themeStylePropResolver.createStyleFunction({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  let c = u("border", l);
  let d = u("borderTop", l);
  let p = u("borderRight", l);
  let h = u("borderBottom", l);
  let f = u("borderLeft", l);
  let m = u("borderColor");
  let g = u("borderTopColor");
  let y = u("borderRightColor");
  let b = u("borderBottomColor");
  let v = u("borderLeftColor");
  let x = u("outline", l);
  let _ = u("outlineColor");
  let w = e => {
    if (e.borderRadius !== undefined && e.borderRadius !== null) {
      let t = spacingPropsUtils.resolveThemeSpacing(e.theme, "shape.borderRadius", 4, "borderRadius");
      return breakpointUtils.handleBreakpoints(e, e.borderRadius, e => ({
        borderRadius: spacingPropsUtils.getNegativeSpacing(t, e)
      }));
    }
    return null;
  };
  w.propTypes = {};
  w.filterProps = ["borderRadius"];
  a(c, d, p, h, f, m, g, y, b, v, w, x, _);
  let C = e => {
    if (e.gap !== undefined && e.gap !== null) {
      let t = spacingPropsUtils.resolveThemeSpacing(e.theme, "spacing", 8, "gap");
      return breakpointUtils.handleBreakpoints(e, e.gap, e => ({
        gap: spacingPropsUtils.getNegativeSpacing(t, e)
      }));
    }
    return null;
  };
  C.propTypes = {};
  C.filterProps = ["gap"];
  let O = e => {
    if (e.columnGap !== undefined && e.columnGap !== null) {
      let t = spacingPropsUtils.resolveThemeSpacing(e.theme, "spacing", 8, "columnGap");
      return breakpointUtils.handleBreakpoints(e, e.columnGap, e => ({
        columnGap: spacingPropsUtils.getNegativeSpacing(t, e)
      }));
    }
    return null;
  };
  O.propTypes = {};
  O.filterProps = ["columnGap"];
  let S = e => {
    if (e.rowGap !== undefined && e.rowGap !== null) {
      let t = spacingPropsUtils.resolveThemeSpacing(e.theme, "spacing", 8, "rowGap");
      return breakpointUtils.handleBreakpoints(e, e.rowGap, e => ({
        rowGap: spacingPropsUtils.getNegativeSpacing(t, e)
      }));
    }
    return null;
  };
  S.propTypes = {};
  S.filterProps = ["rowGap"];
  let k = themeStylePropResolver.createStyleFunction({
    prop: "gridColumn"
  });
  let E = themeStylePropResolver.createStyleFunction({
    prop: "gridRow"
  });
  let j = themeStylePropResolver.createStyleFunction({
    prop: "gridAutoFlow"
  });
  let P = themeStylePropResolver.createStyleFunction({
    prop: "gridAutoColumns"
  });
  let Z = themeStylePropResolver.createStyleFunction({
    prop: "gridAutoRows"
  });
  let T = themeStylePropResolver.createStyleFunction({
    prop: "gridTemplateColumns"
  });
  let A = themeStylePropResolver.createStyleFunction({
    prop: "gridTemplateRows"
  });
  function M(e, t) {
    if (t === "grey") {
      return t;
    } else {
      return e;
    }
  }
  a(C, O, S, k, E, j, P, Z, T, A, themeStylePropResolver.createStyleFunction({
    prop: "gridTemplateAreas"
  }), themeStylePropResolver.createStyleFunction({
    prop: "gridArea"
  }));
  let N = themeStylePropResolver.createStyleFunction({
    prop: "color",
    themeKey: "palette",
    transform: M
  });
  function R(e) {
    if (e <= 1 && e !== 0) {
      return `${e * 100}%`;
    } else {
      return e;
    }
  }
  a(N, themeStylePropResolver.createStyleFunction({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: M
  }), themeStylePropResolver.createStyleFunction({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: M
  }));
  let I = themeStylePropResolver.createStyleFunction({
    prop: "width",
    transform: R
  });
  let L = e => e.maxWidth !== undefined && e.maxWidth !== null ? breakpointUtils.handleBreakpoints(e, e.maxWidth, t => {
    var n;
    var r;
    let i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? undefined : n[t]) || breakpointUtils.breakpointValues[t];
    if (i) {
      if (((r = e.theme) == null || (r = r.breakpoints) == null ? undefined : r.unit) !== "px") {
        return {
          maxWidth: `${i}${e.theme.breakpoints.unit}`
        };
      } else {
        return {
          maxWidth: i
        };
      }
    } else {
      return {
        maxWidth: R(t)
      };
    }
  }) : null;
  L.filterProps = ["maxWidth"];
  let $ = themeStylePropResolver.createStyleFunction({
    prop: "minWidth",
    transform: R
  });
  let D = themeStylePropResolver.createStyleFunction({
    prop: "height",
    transform: R
  });
  let z = themeStylePropResolver.createStyleFunction({
    prop: "maxHeight",
    transform: R
  });
  let H = themeStylePropResolver.createStyleFunction({
    prop: "minHeight",
    transform: R
  });
  themeStylePropResolver.createStyleFunction({
    prop: "size",
    cssProperty: "width",
    transform: R
  });
  themeStylePropResolver.createStyleFunction({
    prop: "size",
    cssProperty: "height",
    transform: R
  });
  a(I, L, $, D, z, H, themeStylePropResolver.createStyleFunction({
    prop: "boxSizing"
  }));
  var F = {
    border: {
      themeKey: "borders",
      transform: l
    },
    borderTop: {
      themeKey: "borders",
      transform: l
    },
    borderRight: {
      themeKey: "borders",
      transform: l
    },
    borderBottom: {
      themeKey: "borders",
      transform: l
    },
    borderLeft: {
      themeKey: "borders",
      transform: l
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: l
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: w
    },
    color: {
      themeKey: "palette",
      transform: M
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: M
    },
    backgroundColor: {
      themeKey: "palette",
      transform: M
    },
    p: {
      style: spacingPropsUtils.handlePaddingProps
    },
    pt: {
      style: spacingPropsUtils.handlePaddingProps
    },
    pr: {
      style: spacingPropsUtils.handlePaddingProps
    },
    pb: {
      style: spacingPropsUtils.handlePaddingProps
    },
    pl: {
      style: spacingPropsUtils.handlePaddingProps
    },
    px: {
      style: spacingPropsUtils.handlePaddingProps
    },
    py: {
      style: spacingPropsUtils.handlePaddingProps
    },
    padding: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingTop: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingRight: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingBottom: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingLeft: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingX: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingY: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingInline: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingInlineStart: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingInlineEnd: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingBlock: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingBlockStart: {
      style: spacingPropsUtils.handlePaddingProps
    },
    paddingBlockEnd: {
      style: spacingPropsUtils.handlePaddingProps
    },
    m: {
      style: spacingPropsUtils.handleMarginProps
    },
    mt: {
      style: spacingPropsUtils.handleMarginProps
    },
    mr: {
      style: spacingPropsUtils.handleMarginProps
    },
    mb: {
      style: spacingPropsUtils.handleMarginProps
    },
    ml: {
      style: spacingPropsUtils.handleMarginProps
    },
    mx: {
      style: spacingPropsUtils.handleMarginProps
    },
    my: {
      style: spacingPropsUtils.handleMarginProps
    },
    margin: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginTop: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginRight: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginBottom: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginLeft: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginX: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginY: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginInline: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginInlineStart: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginInlineEnd: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginBlock: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginBlockStart: {
      style: spacingPropsUtils.handleMarginProps
    },
    marginBlockEnd: {
      style: spacingPropsUtils.handleMarginProps
    },
    displayPrint: {
      cssProperty: false,
      transform: e => ({
        "@media print": {
          display: e
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: C
    },
    rowGap: {
      style: S
    },
    columnGap: {
      style: O
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: R
    },
    maxWidth: {
      style: L
    },
    minWidth: {
      transform: R
    },
    height: {
      transform: R
    },
    maxHeight: {
      transform: R
    },
    minHeight: {
      transform: R
    },
    boxSizing: {},
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  require.d(exports, {
    stylePropsConfig: function () {
      return F;
    }
  });
}