// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S1' to 'renderShareIcon'
// - Renamed export 'pY' to 'renderShareTitle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 716603
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var fileReviewStatusUtils = require("file-review-status-utils") /*id: 282595*/;
  var fileIconRendererComponent = require("file-icon-renderer-component") /*id: 744632*/;
  var l = {
    "title-text": "title-text-n5G_V3"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      className: i,
      t,
      textClassName: n,
      firstShareNode: o,
      nodeCount: s
    } = e;
    let d = reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
      ellipsis: true,
      className: a(n, l["title-text"]),
      "data-testid": "ai_space_share_name_prefix",
      children: o == null ? undefined : o.name
    });
    if (o && s > 1) {
      return reactJsxRuntimeCoreReexport.jsxs(typographyWrapperModule.TypographyWrapper.Text, {
        className: a(i, n, l["title-text"], "flex items-center"),
        children: [d, reactJsxRuntimeCoreReexport.jsx("div", {
          className: "ml-4 shrink-0 grow-0",
          children: t("aispace_title_file_cnt", {
            count: s
          })
        })]
      });
    } else {
      return d;
    }
  };
  let u = e => {
    let {
      iconClassV1: i,
      iconClassV2: t,
      allShareNodes: n,
      multiType: a,
      nodeCount: r
    } = e;
    if (!(n == null ? undefined : n.length)) {
      return null;
    }
    let l = a || fileReviewStatusUtils.getFileCategory(n, r);
    return reactJsxRuntimeCoreReexport.jsx(fileIconRendererComponent.FileIconRenderer, {
      dataTestId: "ai_space_file_item_create_share_preview_icon",
      className: (n == null ? undefined : n.length) > 1 ? t : i,
      file: n[0],
      shareType: l
    });
  };
  require.d(exports, {
    renderShareIcon: function () {
      return u;
    },
    renderShareTitle: function () {
      return d;
    }
  });
}