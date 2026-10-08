// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'sonnerToastNotification'
// - Resolved require(913343) to 'sonner-toast-notification'
// - Renamed variable 'n' to 'themeContextHook'
// - Resolved require(53880) to 'theme-context-hook'
// - Renamed variable 'i' to 'classNamesMergeUtil'
// - Resolved require(67381) to 'class-names-merge-util'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'l' to 'toastNotificationHelper'
// - Resolved require(83051) to 'toast-notification-helper'
// - Updated imported property '_' to 'toastNotification' (module 83051)
// - Updated imported property 'F' to 'useTheme' (module 53880)
// - Updated imported property 'x7' to 'Toaster' (module 913343)
// - Updated imported property 'cn' to 'mergeClassNames' (module 67381)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 682910
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var sonnerToastNotification = require("sonner-toast-notification") /*id: 913343*/;
  var themeContextHook = require("theme-context-hook") /*id: 53880*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = e => {
    let {
      theme: t = "system"
    } = themeContextHook.useTheme();
    let {
      offset: a = {
        top: 32
      },
      position: o = "top-center",
      toastOptions: l,
      style: d,
      className: c = "",
      ...u
    } = e;
    let {
      className: h = "",
      ...p
    } = l || {};
    return reactJsxRuntimeCoreReexport.jsx(sonnerToastNotification.Toaster, {
      style: {
        "--width": "600px",
        display: "flex",
        justifyContent: "center",
        ...d
      },
      theme: t,
      offset: a,
      position: o,
      toastOptions: {
        duration: 10000,
        style: {
          width: "fit-content"
        },
        ...p,
        className: classNamesMergeUtil.mergeClassNames("dbx-sonner-toast", h)
      },
      ...u,
      className: classNamesMergeUtil.mergeClassNames("dbx-sonner-toaster", c)
    });
  };
  var toastNotificationHelper = require("toast-notification-helper") /*id: 83051*/;
  require.r(exports);
  require.d(exports, {
    DbxToaster: function () {
      return o;
    },
    dbxToastAPI: function () {
      return toastNotificationHelper.toastNotification;
    }
  });
}