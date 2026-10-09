// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'DiagramCodePanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 179830
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var focusIcon = require("focus-icon") /*id: 833901*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var b = {
    panel: "panel-hScMIu",
    container: "container-Zac1Gy",
    copyDropdownWrapper: "copyDropdownWrapper-ua3Wyn",
    divider: "divider-ejgiiB",
    actionBtn: "actionBtn-cR0bMj",
    disabled: "disabled-gQlF39"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      diagram: i,
      code: S,
      i18nConfig: C,
      hideDownload: j,
      onDownloadImage: O,
      onCopyImage: R,
      onCopyHtml: E,
      onZoomOut: P,
      onZoomIn: k,
      onZoomFit: D,
      onFullScreenEnter: M,
      onCopyText: A,
      onTabChange: _,
      getPopupContainer: T,
      enableCopyImage: N = true,
      enableCopyRichText: F = true,
      enableZoom: L = true,
      disabled: $ = false,
      defaultActiveKey: z = blockTypeConstants.blockTypes.Diagram,
      customRenderTabTools: H,
      disableDiagram: Z = false,
      panelStyle: I
    } = e;
    let [B, V] = reactCoreLibraryReexport.useState(z);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      switchTab: V,
      pageScroll: () => undefined
    }));
    let [W, U] = reactCoreLibraryReexport.useState(false);
    let q = userAgentDeviceDetector.isIPad();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: a("h-380 bg-s-color-bg-content-base rounded-s-radius-m overflow-hidden border border-solid border-s-color-border-tertiary", b.container, n),
      children: reactJsxRuntimeCoreReexport.jsxs(tabsComponentAdapter.TabsComponent, {
        type: "button",
        className: b.panel,
        renderTabBar: (e, t) => {
          let {
            activeKey: n
          } = e;
          let r = false;
          let i = null;
          if (typeof H == "function") {
            r = true;
            i = H(n);
          }
          let o = [{
            node: "item",
            name: C.downloadImage,
            onClick: O,
            disabled: $
          }, N ? {
            node: "item",
            name: C.copyImage,
            onClick: R,
            disabled: $
          } : undefined, F ? {
            node: "item",
            name: C.copyRichText,
            onClick: E,
            disabled: $
          } : undefined].filter(Boolean);
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: `
            relative flex h-42 items-center rounded-t-s-radius-xxss bg-s-color-bg-quaternary p-6
            pr-12
          `,
            children: [reactJsxRuntimeCoreReexport.jsx(t, {
              ...e
            }), r ? i : null, n !== blockTypeConstants.blockTypes.Diagram || r ? null : reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex grow items-center justify-end",
              children: [j ? null : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
                  trigger: "hover",
                  menu: o,
                  spacing: 8,
                  className: b.copyDropdownWrapper,
                  getPopupContainer: T,
                  clickToHide: true,
                  children: reactJsxRuntimeCoreReexport.jsxs("div", {
                    className: a(b.actionBtn, $ && b.disabled, "!mr-0 !py-0 !px-2"),
                    "data-testid": "diagram-download-btn",
                    children: [reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
                      className: "p-4"
                    }), reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {
                      className: "text-8"
                    })]
                  })
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: b.divider
                })]
              }), L ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: q ? undefined : C.zoomOut,
                getPopupContainer: T,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a(b.actionBtn, $ && b.disabled),
                  "data-testid": "diagram-zoom-out-btn",
                  onClick: () => {
                    if (!$ && P != null) {
                      P();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {})
                })
              }) : null, L ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: q ? undefined : C.zoomIn,
                getPopupContainer: T,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a(b.actionBtn, $ && b.disabled),
                  "data-testid": "diagram-zoom-in-btn",
                  onClick: () => {
                    if (!$ && k != null) {
                      k();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {})
                })
              }) : null, L ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: q ? undefined : C.fitPage,
                getPopupContainer: T,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a(b.actionBtn, $ && b.disabled),
                  "data-testid": "diagram-zoom-fit-btn",
                  onClick: () => {
                    if (!$ && D != null) {
                      D();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(focusIcon.FocusIcon, {})
                })
              }) : null, reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: q ? undefined : C.fullscreenView,
                getPopupContainer: T,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: a(b.actionBtn, $ && b.disabled, "!mr-0"),
                  onClick: () => {
                    if (!$ && M != null) {
                      M(n);
                    }
                  },
                  "data-testid": "diagram-fullscreen-btn",
                  children: reactJsxRuntimeCoreReexport.jsx(rtlExitIcon.RtlExitIcon, {})
                })
              })]
            }), n !== blockTypeConstants.blockTypes.Code || r ? null : reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex grow items-center justify-end",
              children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: W ? C.copyDoneText : C.copyText,
                getPopupContainer: T,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  "data-testid": "diagram-copy-btn",
                  className: a(b.actionBtn, "!mr-0"),
                  onClick: () => {
                    if (A != null) {
                      A();
                    }
                    U(true);
                    setTimeout(() => {
                      U(false);
                    }, 3000);
                  },
                  children: W ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {}) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {})
                })
              })
            })]
          });
        },
        onChange: e => {
          V(e);
          if (_ != null) {
            _(e);
          }
        },
        activeKey: B,
        defaultActiveKey: z,
        children: [i ? reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
          tab: C.diagramTitle,
          itemKey: blockTypeConstants.blockTypes.Diagram,
          className: "relative h-full",
          disabled: Z,
          style: I,
          children: i
        }) : null, S ? reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
          tab: C.codeTitle,
          itemKey: blockTypeConstants.blockTypes.Code,
          className: "relative h-full",
          style: I,
          children: S
        }) : null]
      })
    });
  });
  require.d(exports, {
    DiagramCodePanel: function () {
      return S;
    }
  });
}