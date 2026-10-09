// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createBoxTheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 369642
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var reactPropsMergeUtil = require("react-props-merge-util") /*id: 582060*/;
  var boxBreakpointUtil = require("box-breakpoint-util") /*id: 576098*/;
  var s = {
    borderRadius: 4
  };
  var spacingPropsUtils = require("spacing-props-utils") /*id: 482854*/;
  var sxStyleProcessor = require("sx-style-processor") /*id: 232869*/;
  var stylePropsConfig = require("style-props-config") /*id: 584416*/;
  var colorSchemeStyle = require("color-scheme-style") /*id: 491552*/;
  let p = ["breakpoints", "palette", "spacing", "shape"];
  function h(e = {}, ...t) {
    let {
      breakpoints: n = {},
      palette: h = {},
      spacing: f,
      shape: m = {}
    } = e;
    let g = objectOmitUtil_3.omitKeys(e, p);
    let y = boxBreakpointUtil.createBreakpoints(n);
    let b = function (e = 8) {
      if (e.mui) {
        return e;
      }
      let t = spacingPropsUtils.getSpacingResolver({
        spacing: e
      });
      let n = (...e) => (e.length === 0 ? [1] : e).map(e => {
        let n = t(e);
        if (typeof n == "number") {
          return `${n}px`;
        } else {
          return n;
        }
      }).join(" ");
      n.mui = true;
      return n;
    }(f);
    let v = reactPropsMergeUtil.deepMergeProps({
      breakpoints: y,
      direction: "ltr",
      components: {},
      palette: objectAssignUtil.objectAssign({
        mode: "light"
      }, h),
      spacing: b,
      shape: objectAssignUtil.objectAssign({}, s, m)
    }, g);
    v.applyStyles = colorSchemeStyle.resolveColorScheme;
    (v = t.reduce((e, t) => reactPropsMergeUtil.deepMergeProps(e, t), v)).unstable_sxConfig = objectAssignUtil.objectAssign({}, stylePropsConfig.stylePropsConfig, g == null ? undefined : g.unstable_sxConfig);
    v.unstable_sx = function (e) {
      return sxStyleProcessor.processSxStyles({
        sx: e,
        theme: this
      });
    };
    return v;
  }
  require.d(exports, {
    createBoxTheme: function () {
      return h;
    }
  });
}