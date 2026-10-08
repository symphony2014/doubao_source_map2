// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'themeSwitchDocIcon'
// - Resolved require(240268) to 'theme-switch-doc-icon'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'blockTypeIconMapping'
// - Resolved require(265784) to 'block-type-icon-mapping'
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'EE' to 'fallbackIcons' (module 265784)
// - Updated imported property 'AI' to 'blockIcons' (module 265784)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Z' to 'DocumentThemeIcon' (module 240268)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2621.5f8fa129.js
         * chunkId: 2621
         * moduleId: 845867
         */
module.exports = function (module, exports, require) {
  var themeSwitchDocIcon = require("theme-switch-doc-icon") /*id: 240268*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var blockTypeIconMapping = require("block-type-icon-mapping") /*id: 265784*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = "fallback-not-supported-share-anchor-block-view";
  let M = (e, a) => {
    let r = blockTypeIconMapping.fallbackIcons[e] || blockTypeIconMapping.blockIcons[e];
    return e === docBlockTypeConstants.blockTypeConstants.IFRAME && blockTypeIconMapping.blockIcons[a] || r;
  };
  function s(e) {
    let {
      originType: a,
      title: r,
      iframeType: i,
      styles: l,
      className: s,
      illustrationStyles: u
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `${c} ${s}`,
      style: l,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${c}_title`,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `${c}_title_icon`,
          children: M(a, i)
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: `${c}_title_text`,
          children: r
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${c}_content`,
        children: [reactJsxRuntimeCoreReexport.jsx(themeSwitchDocIcon.DocumentThemeIcon, {
          style: u,
          className: `${c}_content_icon`
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `${c}_content_text`,
          children: t("LarkCCM_Docs_Toolbar_Share_UnableToPreview_Desc")
        })]
      })]
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}