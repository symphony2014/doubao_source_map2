// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'IosLeafLinkWrapper'
// - Renamed export 'Z' to 'IosLeafTextWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 575135
         */
module.exports = function (module, exports, require) {
  var editorLeafTextComponent = require("editor-leaf-text-component") /*id: 374368*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var useSelectionChangeTracker = require("use-selection-change-tracker") /*id: 472242*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      className: n,
      contentEditable: r,
      selectionAPI: s,
      ...d
    } = e;
    let f = !isUndefinedCheck.isUndefined(r);
    let h = useSelectionChangeTracker.useSelectionChange(s);
    return reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
      className: l(n, {
        "ios-user-select-none": !r && browserEnvDetectionUtil.browserDetector.isIOS && h
      }),
      ...(f ? {
        contentEditable: r
      } : {}),
      ...d
    });
  };
  var f = e => browserEnvDetectionUtil.browserDetector.isIOS ? reactJsxRuntimeCoreReexport.jsx(d, {
    ...e
  }) : reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
    ...e
  });
  let h = e => {
    let {
      className: n,
      contentEditable: r,
      selectionAPI: i,
      ...s
    } = e;
    let d = !isUndefinedCheck.isUndefined(r);
    let f = useSelectionChangeTracker.useSelectionChange(i);
    return reactJsxRuntimeCoreReexport.jsx("a", {
      className: l(n, {
        "ios-user-select-none": !r && browserEnvDetectionUtil.browserDetector.isIOS && f
      }),
      ...(d ? {
        contentEditable: r
      } : {}),
      ...s
    });
  };
  let p = e => browserEnvDetectionUtil.browserDetector.isIOS ? reactJsxRuntimeCoreReexport.jsx(h, {
    ...e
  }) : reactJsxRuntimeCoreReexport.jsx("a", {
    ...e
  });
  require.d(exports, {
    IosLeafLinkWrapper: function () {
      return p;
    },
    IosLeafTextWrapper: function () {
      return f;
    }
  });
}