// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'DiagramFullscreenContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 709999
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var focusIcon = require("focus-icon") /*id: 833901*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  let h = e => {
    let {
      onCopy: t
    } = e;
    let [n, i] = reactCoreLibraryReexport.useState(false);
    return {
      CopyIcon: n ? rtlChatCheckIconComponent.RtlChatCheckIcon : noteOutlinedIcon.NoteOutlinedIcon,
      handleCopy: () => {
        if (t != null) {
          t();
        }
        i(true);
        setTimeout(() => {
          i(false);
        }, 2000);
      }
    };
  };
  var g = {
    fullscreenRoot: "fullscreenRoot-IBNMoL",
    container: "container-HLFirU",
    header: "header-ewSitn",
    actionBtn: "actionBtn-L37bRr",
    actionMenu: "actionMenu-gJ29Xs",
    otherBtnMenu: "otherBtnMenu-ieSx1b",
    diagramContent: "diagramContent-BKtthW",
    disabled: "disabled-wBAFZv"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      onDownloadImage: t,
      onCopyImage: n,
      onCopyHtml: o,
      onZoomIn: f,
      onZoomOut: p,
      onZoomFit: y,
      onCloseClick: w,
      enableCopyImage: k = true,
      enableCopyRichText: x = true,
      i18nConfig: S,
      children: C,
      disabled: E = false,
      enableZoom: R = true
    } = e;
    let T = reactCoreLibraryReexport.useRef(null);
    let j = () => T.current;
    let N = userAgentDeviceDetector.isIPad();
    let {
      CopyIcon: P,
      handleCopy: I
    } = h({
      onCopy: n
    });
    let {
      CopyIcon: $,
      handleCopy: M
    } = h({
      onCopy: o
    });
    return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("div", {
      className: g.fullscreenRoot,
      "data-testid": "diagram-fullscreen-container",
      ref: T,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: g.container,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: g.header,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: g.actionMenu,
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              onClick: E ? undefined : t,
              className: a(g.actionBtn, E && g.disabled),
              "data-testid": "diagram-fullscreen-download",
              children: [reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
                children: S.downloadImage
              })]
            }), k && reactJsxRuntimeCoreReexport.jsxs("div", {
              onClick: E ? undefined : I,
              className: a(g.actionBtn, E && g.disabled),
              "data-testid": "diagram-fullscreen-zoom-copy-img",
              children: [reactJsxRuntimeCoreReexport.jsx(P, {}), reactJsxRuntimeCoreReexport.jsx("span", {
                children: S.copyImage
              })]
            }), x ? reactJsxRuntimeCoreReexport.jsxs("div", {
              onClick: E ? undefined : M,
              className: a(g.actionBtn, E && g.disabled),
              "data-testid": "diagram-fullscreen-zoom-copy-html",
              children: [reactJsxRuntimeCoreReexport.jsx($, {}), reactJsxRuntimeCoreReexport.jsx("span", {
                children: S.copyHtml
              })]
            }) : null]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: g.otherBtnMenu,
            children: [R ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: N ? undefined : S.zoomOut,
              getPopupContainer: j,
              spacing: {
                y: 12,
                x: 0
              },
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: a(g.actionBtn, E && g.disabled),
                onClick: () => {
                  if (!E && p != null) {
                    p();
                  }
                },
                "data-testid": "diagram-fullscreen-zoom-out",
                children: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {})
              })
            }) : null, R ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: N ? undefined : S.zoomIn,
              getPopupContainer: j,
              spacing: {
                y: 12,
                x: 0
              },
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: a(g.actionBtn, E && g.disabled),
                onClick: () => {
                  if (!E && f != null) {
                    f();
                  }
                },
                "data-testid": "diagram-fullscreen-zoom-in",
                children: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {})
              })
            }) : null, R ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: N ? undefined : S.zoomFit,
              getPopupContainer: j,
              spacing: {
                y: 12,
                x: 0
              },
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: a(g.actionBtn, E && g.disabled),
                onClick: () => {
                  if (!E && y != null) {
                    y();
                  }
                },
                "data-testid": "diagram-fullscreen-zoom-fit",
                children: reactJsxRuntimeCoreReexport.jsx(focusIcon.FocusIcon, {})
              })
            }) : null, R ? reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
              layout: "vertical",
              margin: "0px"
            }) : null, reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
              content: N ? undefined : S.close,
              getPopupContainer: j,
              spacing: {
                y: 12,
                x: 0
              },
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: g.actionBtn,
                onClick: () => w == null ? undefined : w(),
                "data-testid": "diagram-exit-fullscreen",
                children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {})
              })
            })]
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: g.diagramContent,
          children: C
        })]
      })
    }), document.body);
  };
  require.d(exports, {
    DiagramFullscreenContainer: function () {
      return y;
    }
  });
}