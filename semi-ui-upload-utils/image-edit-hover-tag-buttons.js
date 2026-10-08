// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rx' to 'ImageEditTagListWithDownload'
// - Renamed export '_1' to 'ImageDownloadButton'
// - Renamed export 'EI' to 'ImageEditTagListCompact'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 304166
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var imageEditConstants = require("image-edit-constants") /*id: 18810*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var d = {
    text: "text-njXvxP",
    "new-agent-text": "new-agent-text-RTvYi0",
    hover: "hover-DQYLdi",
    "has-text": "has-text-iAepoV"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      onClick: t,
      icon: n,
      text: i,
      tooltipText: o,
      isNewAgent: a,
      showTooltip: l = true,
      showText: u = false,
      ...h
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ...h,
      onClick: t,
      className: r(d.hover, {
        [d["has-text"]]: u
      }),
      children: l ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        content: o,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center",
          children: [n, u && reactJsxRuntimeCoreReexport.jsx("span", {
            className: r(d.text, {
              [d["new-agent-text"]]: a
            }),
            children: i
          })]
        })
      }) : reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex items-center",
        children: [n, i && reactJsxRuntimeCoreReexport.jsx("span", {
          className: r(d.text, {
            [d["new-agent-text"]]: a
          }),
          children: i
        })]
      })
    });
  };
  var h = {
    divider: "divider-sKf2oK"
  };
  let p = e => {
    let {
      onClick: t,
      tagList: n,
      onDownload: l,
      isNewAgent: r
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!!(n == null ? undefined : n.length) && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [n == null ? undefined : n.map(e => reactJsxRuntimeCoreReexport.jsx(u, {
          "data-testid": `edit_image_hover_tag_${e.toolName}_btn`,
          onClick: n => {
            if (t != null) {
              t(n, e.toolName || imageEditConstants.imageEditModes.default);
            }
          },
          icon: e.icon,
          text: e.text,
          showTooltip: !e.text,
          showText: !!e.text,
          tooltipText: e.tooltipText,
          isNewAgent: r
        }, e.toolName)), reactJsxRuntimeCoreReexport.jsx("div", {
          className: h.divider
        })]
      }), reactJsxRuntimeCoreReexport.jsx(u, {
        "data-testid": "edit_image_hover_tag_download_btn",
        onClick: l,
        icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
          className: "p-4 !text-14"
        }),
        tooltipText: s("edit_image_download"),
        text: s("image_btn_download"),
        showText: true,
        isNewAgent: r,
        showTooltip: false
      })]
    });
  };
  let v = e => {
    let {
      onClick: t,
      tagList: n,
      onDownload: l,
      isNewAgent: r
    } = e;
    let s = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [!!(n == null ? undefined : n.length) && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [n == null ? undefined : n.map((e, n) => reactJsxRuntimeCoreReexport.jsx(u, {
          "data-testid": `edit_image_hover_tag_${e.toolName}_btn`,
          onClick: n => {
            if (t != null) {
              t(n, e.toolName || imageEditConstants.imageEditModes.default);
            }
          },
          icon: e.icon,
          tooltipText: e.tooltipText,
          isNewAgent: r
        }, n)), reactJsxRuntimeCoreReexport.jsx("div", {
          className: h.divider
        })]
      }), reactJsxRuntimeCoreReexport.jsx(u, {
        "data-testid": "edit_image_hover_tag_download_btn",
        onClick: l,
        icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
          className: "p-4 !text-14"
        }),
        tooltipText: s("edit_image_download"),
        isNewAgent: r
      })]
    });
  };
  let m = e => {
    let {
      onDownload: t,
      isNewAgent: n
    } = e;
    let a = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(u, {
      "data-testid": "edit_image_hover_tag_download_btn",
      onClick: t,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
        className: "p-4 !text-14"
      }),
      tooltipText: a("edit_image_download"),
      isNewAgent: n
    });
  };
  require.d(exports, {
    ImageEditTagListWithDownload: function () {
      return p;
    },
    ImageDownloadButton: function () {
      return m;
    },
    ImageEditTagListCompact: function () {
      return v;
    }
  });
}