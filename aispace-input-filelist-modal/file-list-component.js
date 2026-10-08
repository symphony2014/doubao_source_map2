// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'FileListComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 463269
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var useHoverStateHook = require("use-hover-state-hook") /*id: 105691*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaCheckboxComponents = require("samantha-checkbox-components") /*id: 739837*/;
  var fileRowLayoutComponent = require("file-row-layout-component") /*id: 569650*/;
  var fileIconRendererComponent = require("file-icon-renderer-component") /*id: 744632*/;
  var contextMenuDropdownWrapper = require("context-menu-dropdown-wrapper") /*id: 979062*/;
  var h = {
    container: "container-BiiPof",
    header: "header-KFqDXg",
    left: "left-fowfmU",
    title: "title-ef2GPo",
    right: "right-CoLKan",
    "list-container": "list-container-K3ndMJ",
    listContainer: "list-container-K3ndMJ",
    "spin-wrapper": "spin-wrapper-it7xwt",
    spinWrapper: "spin-wrapper-it7xwt",
    divider: "divider-ALu8FZ",
    "context-menu-wrapper": "context-menu-wrapper-iNxmF8",
    contextMenuWrapper: "context-menu-wrapper-iNxmF8",
    "check-all-box-wrapper": "check-all-box-wrapper-R9trwR",
    checkAllBoxWrapper: "check-all-box-wrapper-R9trwR"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = (e, i) => e.filter(e => i.has(e.id)).map(e => e.id);
  let g = e => {
    let {
      nameColumnTitle: i,
      timeColumnTitle: t,
      files: r,
      rowHeight: g,
      enableCheckBox: k,
      mutiple: w = true,
      disableContextMenuFileIds: x = [],
      selectedFileIds: b,
      renderFileLabel: y,
      renderActionButtons: S,
      renderContextMenu: I,
      onClickFileTitle: T,
      onDoubleClickRowItem: P,
      onContextMenuShow: C,
      onSelectedFileIdsChange: j,
      hasMore: A,
      onLoadMore: N,
      className: E,
      highlightNodeId: R,
      scrollRef: D,
      renderPreviewContent: F,
      fileItemPopoverProps: M,
      enableCheckAllBox: $ = true,
      fileItemClassName: L,
      onClickFileItemContainer: W,
      getFileLabelTooltipContent: Z,
      headerClassName: G,
      headerLeftClassName: J,
      renderFileStatusLabel: q,
      getFileLabelDisable: z,
      renderFileItemRightArea: U,
      timeColumnDisplayText: B
    } = e;
    let O = reactCoreLibraryReexport.useRef(null);
    let [V, H] = reactCoreLibraryReexport.useState(false);
    let X = r.filter(e => e.showCheckBox !== false && e.enableCheck !== false);
    let [K, Q] = reactCoreLibraryReexport.useState(new Set());
    let Y = isUndefinedCheck.isUndefined(b) ? K : b;
    let ee = useLatestCallbackHook_1.useLatestCallback(() => {
      let e = new Set();
      Q(e);
      if (j != null) {
        j(v(X, e));
      }
    });
    let ei = (e, i) => {
      if (e) {
        let e = new Set(w ? [...Y, i.id] : [i.id]);
        Q(e);
        if (j != null) {
          j(v(X, e));
        }
      } else {
        let e = new Set(Y);
        e.delete(i.id);
        Q(e);
        if (j != null) {
          j(v(X, e));
        }
      }
    };
    let et = e => {
      let {
        id: i,
        enableCheck: t,
        showCheckBox: n
      } = e;
      if (W != null) {
        W(e);
      }
      if (t !== false && n !== false) {
        ei(!Y.has(i), e);
      }
    };
    let {
      dropdown: en,
      showContextMenu: ea,
      hideContextMenu: er
    } = contextMenuDropdownWrapper.useContextMenu({
      dropdownProps: {
        render: I == null ? undefined : I({
          hideContextMenu: () => er()
        }),
        className: h["context-menu-wrapper"]
      }
    });
    useHoverStateHook.useHoverState(O, {
      onChange: H
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: o(h.container, E),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: O,
        className: o(["flex items-center", G]),
        children: [$ && reactJsxRuntimeCoreReexport.jsx("div", {
          className: h["check-all-box-wrapper"],
          children: (k || V) && reactJsxRuntimeCoreReexport.jsx(samanthaCheckboxComponents.CheckboxWrapper, {
            checked: Y.size > 0 && Y.size === X.length,
            className: h["check-all-box"],
            onChange: e => {
              if (e.target.checked) {
                let e = new Set(X.map(e => e.id));
                Q(e);
                if (j != null) {
                  j(X.filter(i => e.has(i.id)).map(e => e.id));
                }
              } else {
                ee();
              }
            },
            indeterminate: Y.size > 0 && Y.size < X.length
          })
        }), reactJsxRuntimeCoreReexport.jsx(fileRowLayoutComponent.FileRowLayout, {
          wrapperStyle: {
            height: 36,
            width: "100%",
            borderBottom: "0.5px solid var(--s-color-border-tertiary, rgba(0, 0, 0, 0.08))"
          },
          wrapperClassName: h.header,
          left: reactJsxRuntimeCoreReexport.jsx("div", {
            className: o([h.left, J]),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: h.title,
              children: i
            })
          }),
          right: reactJsxRuntimeCoreReexport.jsx("div", {
            className: h.right,
            children: t
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: h["list-container"],
        children: reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
          ref: D,
          showScrollbar: true,
          reachBottomThreshold: 30,
          onScroll: () => er(),
          onReachBottom: () => {
            if (A) {
              if (N != null) {
                N();
              }
            }
          },
          scrollableClassName: "h-full",
          children: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [r == null ? undefined : r.map(e => {
              let {
                id: i
              } = e;
              return reactJsxRuntimeCoreReexport.jsx("div", {
                children: reactJsxRuntimeCoreReexport.jsx(fileIconRendererComponent.FileRowItem, {
                  className: L,
                  renderPreviewContent: F,
                  rowHeight: g,
                  onClickContainer: () => {
                    et(e);
                  },
                  onDoubleClickContainer: () => {
                    if (P != null) {
                      P(e);
                    }
                  },
                  enableCheckBox: k,
                  singleSelect: !w,
                  highlight: R === i,
                  file: e,
                  checked: Y.has(i),
                  onCheckedChange: i => ei(i, e),
                  onClickFileTitle: i => {
                    i.stopPropagation();
                    if (T != null) {
                      T(e);
                    }
                  },
                  onContextMenu: i => {
                    i.preventDefault();
                    i.stopPropagation();
                    if (!x.includes(e.id)) {
                      ei(true, e);
                      ea([i.clientX, i.clientY]);
                      if (C != null) {
                        C(e);
                      }
                    }
                  },
                  renderFileLabel: y,
                  renderActionButtons: S,
                  popoverProps: M,
                  getFileLabelTooltipContent: Z,
                  fileStatusComp: q,
                  getFileLabelDisable: z,
                  renderRightArea: U,
                  timeColumnDisplayText: B
                })
              }, i);
            }), A && reactJsxRuntimeCoreReexport.jsx("div", {
              className: h["spin-wrapper"],
              children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
            })]
          })
        })
      }), en]
    });
  };
  require.d(exports, {
    FileListComponent: function () {
      return g;
    }
  });
}