// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'AiSpaceFileList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 263505
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useHoverStateHook = require("use-hover-state-hook") /*id: 105691*/;
  var spinnerLoadingExport = require("spinner-loading-export") /*id: 372882*/;
  var styledCheckbox = require("styled-checkbox") /*id: 569376*/;
  var fileRowLayoutComponent_1 = require("file-row-layout-component_1") /*id: 718094*/;
  var aiSpaceFileListItem = require("ai-space-file-list-item") /*id: 60213*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    var t;
    let {
      referenceStyle: n,
      dropdownProps: a,
      appendTo: r
    } = e;
    let [o, l] = reactCoreLibraryReexport.useState([0, 0]);
    let [s, d] = reactCoreLibraryReexport.useState(false);
    let c = r == null ? undefined : r();
    let u = reactFunctionMemoHook.useMemoizedCallback(e => {
      l(e);
      d(true);
    });
    let p = reactFunctionMemoHook.useMemoizedCallback(() => {
      d(false);
    });
    let m = typeof a.render == "function" ? (t = a.render) === null || t === undefined ? undefined : t.call(a) : a.render;
    let h = reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        position: "fixed",
        left: o[0],
        top: o[1],
        width: "auto",
        height: "auto",
        zIndex: 1000,
        ...n
      },
      className: a == null ? undefined : a.className,
      children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        open: s,
        onOpenChange: d,
        modal: false,
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          asChild: true,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "h-1 w-1"
          })
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
          className: "overflow-visible",
          children: m
        })]
      })
    });
    return {
      hideContextMenu: p,
      showContextMenu: u,
      dropdown: m ? c ? reactDomEntryWrapper.createPortal(h, c) : h : null
    };
  };
  var w = {
    container: "container-ccVvMT",
    "header-wrapper": "header-wrapper-EOc4NE",
    headerWrapper: "header-wrapper-EOc4NE",
    header: "header-MREAxl",
    left: "left-rQGaiw",
    title: "title-jtrwMS",
    middle: "middle-if5Ue1",
    right: "right-aLFHX3",
    "list-container": "list-container-ZlHkOs",
    listContainer: "list-container-ZlHkOs",
    "spin-wrapper": "spin-wrapper-UxJaSL",
    spinWrapper: "spin-wrapper-UxJaSL",
    "bottom-tip": "bottom-tip-EcIRLR",
    bottomTip: "bottom-tip-EcIRLR",
    "bottom-tip-text": "bottom-tip-text-iJP3EE",
    bottomTipText: "bottom-tip-text-iJP3EE",
    divider: "divider-Rl3ZIo",
    "context-menu-wrapper": "context-menu-wrapper-dISo2P",
    contextMenuWrapper: "context-menu-wrapper-dISo2P",
    "check-all-box-wrapper": "check-all-box-wrapper-tjuaZP",
    checkAllBoxWrapper: "check-all-box-wrapper-tjuaZP"
  };
  let b = (e, t) => e.filter(e => t.has(e.id)).map(e => e.id);
  let C = e => {
    let {
      colCount: t,
      nameColumnTitle: n,
      timeColumnTitle: r,
      ownerColumnTitle: s,
      actionColumnTitle: f,
      files: v,
      rowHeight: _,
      enableCheckBox: C,
      mutiple: k = true,
      disableContextMenuFileIds: S = [],
      selectedFileIds: N,
      renderFileLabel: j,
      renderActionButtons: I,
      renderContextMenu: T,
      onClickFileTitle: E,
      onDoubleClickRowItem: M,
      onContextMenuShow: R,
      onSelectedFileIdsChange: $,
      hasMore: D,
      onLoadMore: F,
      className: P,
      highlightNodeId: L,
      scrollRef: A,
      renderPreviewContent: Z,
      fileItemPopoverProps: W,
      enableCheckAllBox: O = true,
      fileItemClassName: z,
      onClickFileItemContainer: B,
      getFileLabelTooltipContent: V,
      headerClassName: U,
      headerLeftClassName: H,
      headerRightClassName: J,
      renderFileStatusLabel: X,
      getFileLabelDisable: q,
      renderFileItemRightArea: K,
      timeColumnDisplayText: G,
      ownerColumnComp: Q,
      getImageBlobUrl: Y,
      scrollResetToken: ee,
      fileItemWithCheckBox: et,
      onFileInView: en,
      fileItemRightAreaClassName: ei,
      headerRightAreaClassName: ea,
      enableHeaderClickCheckAll: er = true,
      scrollViewAfterComp: eo,
      bottomLoadingArea: el,
      scrollableClassName: es
    } = e;
    let ed = reactCoreLibraryReexport.useRef(null);
    let ec = reactCoreLibraryReexport.useRef(ee);
    let eu = reactCoreLibraryReexport.useRef();
    let [ep, em] = reactCoreLibraryReexport.useState(false);
    let eh = v.filter(e => e.showCheckBox !== false && e.enableCheck !== false);
    let [ef, ev] = reactCoreLibraryReexport.useState(new Set());
    let e_ = isUndefinedCheck.isUndefined(N) ? ef : N;
    let eg = useLatestCallbackHook_1.useLatestCallback(() => {
      let e = new Set();
      ev(e);
      if ($ != null) {
        $(b(eh, e));
      }
    });
    let ex = (e, t) => {
      if (e) {
        let e = new Set(k ? [...e_, t.id] : [t.id]);
        ev(e);
        if ($ != null) {
          $(b(eh, e));
        }
      } else {
        let e = new Set(e_);
        e.delete(t.id);
        ev(e);
        if ($ != null) {
          $(b(eh, e));
        }
      }
    };
    let ew = () => {
      let e = new Set(eh.map(e => e.id));
      ev(e);
      if ($ != null) {
        $(eh.filter(t => e.has(t.id)).map(e => e.id));
      }
    };
    let eb = e => {
      let {
        id: t,
        enableCheck: n,
        showCheckBox: i
      } = e;
      if (B != null) {
        B(e);
      }
      if (n !== false && i !== false) {
        ex(!e_.has(t), e);
      }
    };
    let {
      dropdown: eC,
      showContextMenu: ey,
      hideContextMenu: ek
    } = x({
      dropdownProps: {
        render: () => T == null ? undefined : T({
          hideContextMenu: () => ek()
        }),
        className: w["context-menu-wrapper"]
      }
    });
    useHoverStateHook.useHoverState(ed, {
      onChange: em
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (ee !== ec.current) {
        var e;
        ec.current = ee;
        if (A != null && (e = A.current) !== null && e !== undefined) {
          e.scrollToTop();
        }
      }
    }, [ee]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(w.container, P),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: ed,
        className: o(["flex items-center", w["header-wrapper"], U]),
        onClick: () => {
          if (er) {
            if (e_.size > 0 && e_.size === eh.length) {
              eg();
            } else {
              ew();
            }
          }
        },
        children: [O && reactJsxRuntimeCoreReexport.jsx("div", {
          className: w["check-all-box-wrapper"],
          children: (C || ep) && reactJsxRuntimeCoreReexport.jsx(styledCheckbox.Checkbox, {
            checked: e_.size > 0 && e_.size === eh.length || e_.size > 0 && e_.size < eh.length && "indeterminate",
            className: w["check-all-box"],
            onCheckedChange: e => {
              if (e) {
                ew();
              } else {
                eg();
              }
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx(fileRowLayoutComponent_1.FileRowLayout, {
          colCount: t,
          wrapperStyle: {
            height: 36,
            width: "100%",
            borderBottom: "0.5px solid var(--dbx-line-divider-0010, rgba(0, 0, 0, 0.1))"
          },
          wrapperClassName: w.header,
          left: reactJsxRuntimeCoreReexport.jsx("div", {
            className: o([w.left, H]),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: w.title,
              children: n
            })
          }),
          middle1: reactJsxRuntimeCoreReexport.jsx("div", {
            className: w.middle,
            children: s
          }),
          middle2: reactJsxRuntimeCoreReexport.jsx("div", {
            className: w.middle,
            children: r
          }),
          middle2ClassName: "min-w-150!",
          rightClassName: ea,
          right: reactJsxRuntimeCoreReexport.jsx("div", {
            className: o([w.right, J]),
            children: f
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: w["list-container"],
        children: reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
          after: eo,
          innerBefore: e => reactJsxRuntimeCoreReexport.jsx(y, {
            hasMore: D,
            controller: e,
            scrollRef: eu
          }),
          ref: A,
          showScrollbar: true,
          reachBottomThreshold: 30,
          onScroll: () => {
            var e;
            ek();
            if ((e = eu.current) !== null && e !== undefined) {
              e.call(eu);
            }
          },
          onReachBottom: () => {
            if (D) {
              if (F != null) {
                F();
              }
            }
          },
          scrollableClassName: o(["h-full", es]),
          children: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [v == null ? undefined : v.map(e => {
              let {
                id: n
              } = e;
              return reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(aiSpaceFileListItem.FileListItem, {
                  onFileInView: en,
                  fileItemWithCheckBox: et,
                  colCount: t,
                  className: z,
                  renderPreviewContent: Z,
                  rowHeight: _,
                  onClickContainer: () => {
                    eb(e);
                  },
                  onDoubleClickContainer: () => {
                    if (M != null) {
                      M(e);
                    }
                  },
                  enableCheckBox: C,
                  singleSelect: !k,
                  highlight: L === n,
                  file: e,
                  checked: e_.has(n),
                  onCheckedChange: t => ex(t, e),
                  onClickFileTitle: t => {
                    t.stopPropagation();
                    if (E != null) {
                      E(e);
                    }
                  },
                  onContextMenu: t => {
                    if (typeof T == "function") {
                      t.preventDefault();
                      t.stopPropagation();
                      if (!S.includes(e.id)) {
                        ex(true, e);
                        ey([t.clientX, t.clientY]);
                        if (R != null) {
                          R(e);
                        }
                      }
                    }
                  },
                  renderFileLabel: j,
                  renderActionButtons: I,
                  popoverProps: W,
                  getFileLabelTooltipContent: V,
                  fileStatusComp: X,
                  getFileLabelDisable: q,
                  renderRightArea: K,
                  timeColumnDisplayText: G,
                  ownerColumnComp: Q,
                  getImageBlobUrl: Y,
                  rightAreaClassName: ei
                })
              }, n);
            }), D && (el || reactJsxRuntimeCoreReexport.jsx("div", {
              className: w["spin-wrapper"],
              children: reactJsxRuntimeCoreReexport.jsx(spinnerLoadingExport.Spinner, {
                color: "brand"
              })
            }))]
          })
        })
      }), eC]
    });
  };
  function y(e) {
    let {
      hasMore: t,
      controller: n,
      scrollRef: a
    } = e;
    let [r, o] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (a) {
        a.current = () => {
          o(r + 1);
        };
      }
    }, [a, r]);
    if (!t && n.getScrollTop() > 0) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: w["bottom-tip"],
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          className: w["bottom-tip-text"],
          children: i18nTranslationUtils.i18nextTranslate("drive_page_end")
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    }
  }
  require.d(exports, {
    AiSpaceFileList: function () {
      return C;
    }
  });
}