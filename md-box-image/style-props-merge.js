// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'mergeStyleProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 151183
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var reactPropsMergeUtil = require("react-props-merge-util") /*id: 582060*/;
  var stylePropsConfig = require("style-props-config") /*id: 584416*/;
  let s = ["sx"];
  let l = e => {
    var n;
    let r = {
      systemProps: {},
      otherProps: {}
    };
    let i = (e == null || (n = e.theme) == null ? undefined : n.unstable_sxConfig) ?? stylePropsConfig.stylePropsConfig;
    Object.keys(e).forEach(t => {
      if (i[t]) {
        r.systemProps[t] = e[t];
      } else {
        r.otherProps[t] = e[t];
      }
    });
    return r;
  };
  function u(e) {
    let t;
    let {
      sx: n
    } = e;
    let {
      systemProps: a,
      otherProps: u
    } = l(objectOmitUtil_3.omitKeys(e, s));
    t = Array.isArray(n) ? [a, ...n] : typeof n == "function" ? (...e) => {
      let t = n(...e);
      if (reactPropsMergeUtil.isPlainObject(t)) {
        return objectAssignUtil.objectAssign({}, a, t);
      } else {
        return a;
      }
    } : objectAssignUtil.objectAssign({}, a, n);
    return objectAssignUtil.objectAssign({}, u, {
      sx: t
    });
  }
  require.d(exports, {
    mergeStyleProps: function () {
      return u;
    }
  });
}