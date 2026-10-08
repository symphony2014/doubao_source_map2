// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'DiagramCodeTabsPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93508.9407bc60.js
         * chunkId: 93508
         * moduleId: 761808
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var rtlSearchIcon_1 = require("rtl-search-icon_1") /*id: 547696*/;
  var addCircleIcon_1 = require("add-circle-icon_1") /*id: 5067*/;
  var focusIcon = require("focus-icon") /*id: 833901*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var locationPinRtlIcon = require("location-pin-rtl-icon") /*id: 861208*/;
  var resizeHorizontalIcon = require("resize-horizontal-icon") /*id: 753245*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var b = {
    panel: "panel-WSOyTy",
    container: "container-oEPh5Y",
    border: "border-tDPvlO",
    tabbar: "tabbar-JFbhpu",
    hover: "hover-JgXwVJ",
    copyDropdownWrapper: "copyDropdownWrapper-IHBbUV",
    divider: "divider-LqANPr",
    actionBtn: "actionBtn-gHL19u",
    disabled: "disabled-yJOTpr"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      diagram: i,
      code: j,
      i18nConfig: k,
      hideDownload: C,
      onDownloadImage: S,
      onCopyImage: B,
      onCopyHtml: N,
      onZoomOut: M,
      onZoomIn: R,
      onZoomFit: Z,
      onFullScreenEnter: A,
      onCopyText: T,
      onTabChange: z,
      getPopupContainer: E,
      enableCopyImage: D = true,
      enableCopyRichText: I = true,
      enableZoom: L = true,
      disabled: H = false,
      defaultActiveKey: P = blockTypeConstants.blockTypes.Diagram,
      customRenderTabTools: K,
      disableDiagram: O = false,
      panelStyle: V,
      hideBorder: U = false
    } = e;
    let [G, q] = reactCoreLibraryReexport.useState(P);
    let [F, X] = reactCoreLibraryReexport.useState({
      position: "absolute",
      top: 10,
      right: 10
    });
    let [Q, $] = reactCoreLibraryReexport.useState(() => userAgentDeviceDetector.isMobileOrIOS());
    let W = () => {
      if (!ee.current) {
        return;
      }
      let {
        top: e,
        height: t,
        right: n
      } = ee.current.getBoundingClientRect();
      let l = window.innerHeight;
      let i = window.innerWidth;
      if (l > t) {
        return;
      }
      let o = {
        position: "absolute",
        top: 10,
        right: 10
      };
      if (e < 70) {
        o = {
          position: "fixed",
          top: 70,
          right: i - n + 10
        };
        if (e * -1 > t - 20 - 36 - 60) {
          o = {
            position: "absolute",
            top: t - 10 - 36,
            right: 10
          };
        }
      } else {
        o = {
          position: "absolute",
          top: 10,
          right: 10
        };
      }
      X(o);
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      switchTab: q,
      pageScroll: W
    }));
    let [J, Y] = reactCoreLibraryReexport.useState(false);
    let ee = reactCoreLibraryReexport.useRef(null);
    let et = userAgentDeviceDetector.isIPad();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("h-380 bg-s-color-bg-content-base rounded-s-radius-m overflow-hidden", b.container, {
        [b.border]: !U || U && Q
      }, n, {
        [b.hover]: Q || typeof K == "function"
      }),
      onWheel: W,
      onMouseEnter: () => {
        $(true);
        W();
      },
      onMouseLeave: () => {
        if (!userAgentDeviceDetector.isMobileOrIOS()) {
          $(false);
        }
      },
      ref: ee,
      children: reactJsxRuntimeCoreReexport.jsxs(tabsComponentAdapter.TabsComponent, {
        type: "button",
        className: b.panel,
        renderTabBar: (e, t) => {
          let {
            activeKey: n
          } = e;
          let l = false;
          let i = null;
          if (typeof K == "function") {
            l = true;
            i = K(n);
          }
          let a = [{
            node: "item",
            name: k.downloadImage,
            onClick: S,
            disabled: H
          }, D ? {
            node: "item",
            name: k.copyImage,
            onClick: B,
            disabled: H
          } : undefined, I ? {
            node: "item",
            name: k.copyRichText,
            onClick: N,
            disabled: H
          } : undefined].filter(Boolean);
          return reactJsxRuntimeCoreReexport.jsxs("div", {
            className: o("absolute z-10 right-10 top-10 h-36 flex flex-nowrap items-center rounded-t-s-radius-xs bg-s-color-bg-quaternary p-4 border-1", b.tabbar),
            style: {
              ...F
            },
            children: [l ? i : null, n !== blockTypeConstants.blockTypes.Diagram || l ? null : reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex grow items-center justify-end",
              children: [C || H ? null : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
                  trigger: "hover",
                  menu: a,
                  spacing: 8,
                  className: b.copyDropdownWrapper,
                  getPopupContainer: E,
                  clickToHide: true,
                  children: reactJsxRuntimeCoreReexport.jsx("div", {
                    className: o(b.actionBtn, H && b.disabled, "!mr-0 !p-2"),
                    "data-testid": "diagram-download-btn",
                    children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {
                      className: "p-4"
                    })
                  })
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: b.divider
                })]
              }), L ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: et ? undefined : k.zoomOut,
                getPopupContainer: E,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: o(b.actionBtn, H && b.disabled),
                  "data-testid": "diagram-zoom-out-btn",
                  onClick: () => {
                    if (!H && M != null) {
                      M();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon_1.SearchRtlIcon, {})
                })
              }) : null, L ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: et ? undefined : k.zoomIn,
                getPopupContainer: E,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: o(b.actionBtn, H && b.disabled),
                  "data-testid": "diagram-zoom-in-btn",
                  onClick: () => {
                    if (!H && R != null) {
                      R();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(addCircleIcon_1.AddCircleIcon, {})
                })
              }) : null, L ? reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: et ? undefined : k.fitPage,
                getPopupContainer: E,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: o(b.actionBtn, H && b.disabled),
                  "data-testid": "diagram-zoom-fit-btn",
                  onClick: () => {
                    if (!H && Z != null) {
                      Z();
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(focusIcon.FocusIcon, {})
                })
              }) : null, H ? null : reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: et ? undefined : k.fullscreenView,
                getPopupContainer: E,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: o(b.actionBtn, H && b.disabled, "!mr-0"),
                  onClick: () => {
                    if (!H && A != null) {
                      A(n);
                    }
                  },
                  "data-testid": "diagram-fullscreen-btn",
                  children: reactJsxRuntimeCoreReexport.jsx(rtlExitIcon.RtlExitIcon, {})
                })
              })]
            }), n !== blockTypeConstants.blockTypes.Code || l ? null : reactJsxRuntimeCoreReexport.jsx("div", {
              className: "flex grow items-center justify-end",
              children: reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: J ? k.copyDoneText : k.copyText,
                getPopupContainer: E,
                spacing: {
                  y: 12,
                  x: 0
                },
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  "data-testid": "diagram-copy-btn",
                  className: o(b.actionBtn, "!mr-0"),
                  onClick: () => {
                    if (T != null) {
                      T();
                    }
                    Y(true);
                    setTimeout(() => {
                      Y(false);
                    }, 3000);
                  },
                  children: J ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {}) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {})
                })
              })
            }), !l && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [(n !== blockTypeConstants.blockTypes.Code || l) && H && !L ? null : reactJsxRuntimeCoreReexport.jsx("div", {
                className: b.divider
              }), reactJsxRuntimeCoreReexport.jsx(t, {
                ...e
              })]
            })]
          });
        },
        onChange: e => {
          q(e);
          if (z != null) {
            z(e);
          }
        },
        activeKey: G,
        defaultActiveKey: P,
        children: [i ? reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
          tab: k.diagramTitle,
          itemKey: blockTypeConstants.blockTypes.Diagram,
          className: "relative h-full",
          disabled: O,
          style: V,
          icon: reactJsxRuntimeCoreReexport.jsx(locationPinRtlIcon.LocationPinRtlIcon, {}),
          children: i
        }) : null, j ? reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
          tab: k.codeTitle,
          itemKey: blockTypeConstants.blockTypes.Code,
          className: "relative h-full",
          style: V,
          icon: reactJsxRuntimeCoreReexport.jsx(resizeHorizontalIcon.ResizeHorzIcon, {}),
          children: j
        }) : null]
      })
    });
  });
  require.d(exports, {
    DiagramCodeTabsPanel: function () {
      return j;
    }
  });
}