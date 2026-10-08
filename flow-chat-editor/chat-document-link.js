// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'ChatDocLink'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 68458
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var rtlFileDocumentIcon_2 = require("rtl-file-document-icon_2") /*id: 150297*/;
  var s = {
    container: "container-UcEmDc",
    "no-permission": "no-permission-BIVv1E",
    icon: "icon-boxQFv"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      title: n,
      url: r,
      hasPermission: i = true,
      onClick: u
    } = e;
    let d = safeJsonUtils.safeStringify({
      url: r,
      title: n
    });
    return reactJsxRuntimeCoreReexport.jsxs("a", {
      onClick: u,
      className: o(s.container, !i && s["no-permission"]),
      contentEditable: false,
      "data-doclink": "true",
      "data-lark-doclink": d,
      children: [reactJsxRuntimeCoreReexport.jsx(rtlFileDocumentIcon_2.FileDocumentIcon, {
        className: s.icon
      }), n]
    });
  };
  require.d(exports, {
    ChatDocLink: function () {
      return u;
    }
  });
}