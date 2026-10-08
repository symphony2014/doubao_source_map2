// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'BlockTipsTooltip'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 614382
         */
module.exports = function (module, exports, require) {
  var efficiencyColorfulIconComponent = require("efficiency-colorful-icon-component") /*id: 819305*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var blockRectServiceId = require("block-rect-service-id") /*id: 768934*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function d(e) {
    let {
      blockManager: i,
      blockId: n,
      tips: d,
      delay_ms: u = 5000,
      onClose: h,
      isRevisingTips: g,
      onSwitchDocsMode: p,
      handleBlockOffset: f
    } = e;
    let v = {};
    reactCoreLibraryReexport.useEffect(() => {
      let e = setTimeout(() => {
        h(n);
      }, u);
      return () => {
        clearTimeout(e);
      };
    }, [h, u, n]);
    if (!d || !n) {
      return null;
    }
    let m = i.getBlockViewByBlockIdNotCheck(n);
    if (!m) {
      return null;
    }
    let b = m.hostElement;
    if (!b) {
      return null;
    }
    let _ = 0;
    if (g && f) {
      _ = f(m);
    }
    let {
      top: y,
      left: k
    } = i.editorAPI.getService(blockRectServiceId.blockRectServiceId).getBlockClientRect(n) || b.getBoundingClientRect();
    v.left = k;
    let S = y - 8 - 30 + _;
    if (S >= 68) {
      let e = document.body.offsetHeight - 4 - 30;
      v.top = Math.min(S, e);
    } else {
      v.top = 68;
    }
    return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("div", {
      className: "block-tips__container",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "block-tips-tooltip__container",
        style: v,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: "block-tips-tooltip__icon",
            children: reactJsxRuntimeCoreReexport.jsx(efficiencyColorfulIconComponent.EfficiencyColorfulIcon, {})
          }), d, g && reactJsxRuntimeCoreReexport.jsx("div", {
            className: "block-tips-tooltip_button",
            children: reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
              type: "text",
              color: "primary",
              size: "extra-small",
              onClick: p,
              children: t("LarkCCM_Docs_Suggest_SwitchToEditMode_Button")
            })
          })]
        })
      })
    }), document.body);
  }
  require.d(exports, {
    BlockTipsTooltip: function () {
      return d;
    }
  });
}