// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'AiSpaceFileListModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: aispace-input-filelist-modal.0d7d9a41.js
         * chunkId: 38418
         * moduleId: 302940
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var asyncSkillDeepChangeCb = require("async-skill-deep-change-cb") /*id: 29951*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var aiSpaceFilePathBreadcrumb = require("ai-space-file-path-breadcrumb") /*id: 432898*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e) {
    let {
      spaceController: t,
      spaceStore: n
    } = e;
    let {
      rootId: r,
      currentPath: o
    } = n(e => {
      let t = e.currentPathStack[e.currentPathStack.length - 1] || e.rootId;
      return {
        rootId: e.rootId,
        currentNodeId: t,
        currentPath: e.currentPathStack
      };
    }, deepEqualUtil_1.deepEqual);
    let s = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(aiSpaceFilePathBreadcrumb.renderFilePathBreadcrumb, {
      pathList: [{
        id: r,
        name: s("aispace_all_files")
      }, ...o.map(e => {
        let t = n.getState().nodeInfoMap[e];
        if (t == null ? undefined : t.name) {
          return {
            id: e,
            name: t.name
          };
        }
      })].filter(e => !isUndefinedCheck.isUndefined(e)),
      onClickItem: async e => {
        if (e.id === n.getState().rootId) {
          var r;
          n.getState().updateCurrentPathStack([]);
          await ((r = t.loadInitialData) === null || r === undefined ? undefined : r.call(t));
        } else {
          let r = o.indexOf(e.id);
          if (r !== -1) {
            n.getState().updateCurrentPathStack(o.slice(0, r + 1));
          }
          await t.fetchAndUpdateNodeInfo(e.id);
        }
      }
    });
  }
  var filePreviewWrapperComponent = require("file-preview-wrapper-component") /*id: 378670*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var dateFormatHelper = require("date-format-helper") /*id: 701397*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var fileListComponent = require("file-list-component") /*id: 463269*/;
  var fileIconRendererComponent = require("file-icon-renderer-component") /*id: 744632*/;
  var w = {
    "file-box-wrapper": "file-box-wrapper-mPZGTs",
    "file-box-icon": "file-box-icon-FzEeyb",
    title: "title-VegL_V",
    highlight: "highlight-ZWvhtD",
    disabled: "disabled-Ca1D4b",
    "file-list-container": "file-list-container-IIcIej",
    "file-list-item": "file-list-item-Ak98Bi",
    "header-left": "header-left-v6c4e3"
  };
  function S(e) {
    let {
      spaceController: t,
      spaceStore: n,
      enableCheckBox: o,
      onDoubleClickRowItem: f,
      filterReviewInvalid: S,
      searchValue: E,
      supportedFileTypes: I = [],
      unsupportedNodeTypes: k,
      hideUnsupportedFile: N = false,
      mutiple: P
    } = e;
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let {
      hasMore: j,
      selectedNodeIds: D,
      childNodes: M,
      currentPathStack: F,
      nodeInfoMap: A,
      isLoading: Z
    } = n(e => {
      var n;
      let r = e.currentPathStack[e.currentPathStack.length - 1] || e.rootId;
      let a = (n = e.nodeListStatusMap[r]?.hasMore) !== null && n !== undefined && n;
      let o = e.currentPathStack.length === 0;
      let s = e.nodeListMap[r];
      let l = isUndefinedCheck.isUndefined(s);
      let {
        systemNodeIds: c
      } = e;
      let u = [...(s || [])];
      if (o && c.length > 0) {
        let t = c.filter(t => {
          let r = e.nodeInfoMap[t];
          return (r == null ? undefined : r.content?.directoryType) === businessLayoutConstants.ViewCategory.ConversationFiles;
        });
        u.unshift(...t);
      }
      return {
        rootId: e.rootId,
        hasMore: a,
        selectedNodeIds: e.selectedNodeIds,
        isLoading: l,
        childNodes: u.map(t => e.nodeInfoMap[t]).filter(e => !isUndefinedCheck.isUndefined(e)),
        currentPathStack: e.currentPathStack,
        nodeInfoMap: e.nodeInfoMap
      };
    }, deepEqualUtil_1.deepEqual);
    let R = reactCoreLibraryReexport.useRef(null);
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      var e;
      if ((e = R.current) !== null && e !== undefined) {
        e.scrollToTop();
      }
    }, [F]);
    let L = reactCoreLibraryReexport.useMemo(() => {
      let e = fileEntityTypeMapper.convertNodeList(M || []);
      if (N) {
        e = e.filter(e => {
          return e.type === fileEntityTypeConstants.fileEntityTypes.Directory || I.includes(e.ext || getFileExtension.getFileExtension(e.name ?? ""));
        });
      }
      let t = k == null ? undefined : k.map(e => fileEntityTypeMapper.fileTypeToEntityTypeMap[e]);
      return e.map(e => {
        let n = false;
        if (e.type !== fileEntityTypeConstants.fileEntityTypes.Directory) {
          if (e.riskReviewStatus !== "success") {
            n = true;
          } else if (e.nameReviewStatus !== "success") {
            n = true;
          } else if (e.contentReviewStatus !== "success") {
            n = true;
          } else if (t == null ? undefined : t.includes(e.type)) {
            n = true;
          } else if (!I.includes(e.ext || getFileExtension.getFileExtension(e.name ?? ""))) {
            n = true;
          }
        }
        let i = e.type !== fileEntityTypeConstants.fileEntityTypes.Directory;
        let a = e.type === fileEntityTypeConstants.fileEntityTypes.File;
        let o = e.type === fileEntityTypeConstants.fileEntityTypes.Image;
        let s = a && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.name)) === "PDF";
        let l = a && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(e.name)) === "Document";
        return {
          ...e,
          showCheckBox: i,
          enableCheck: !n,
          disabled: n,
          enablePreview: !n && i && (s || l || o)
        };
      });
    }, [M, S]);
    let O = e => {
      if (e.type === fileEntityTypeConstants.fileEntityTypes.Directory) {
        n.getState().pushCurrentPathStack(e.id);
        t.fetchAndUpdateNodeInfo(e.id);
      }
    };
    if (Z) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex h-full w-full items-center justify-center",
        children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {})
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(fileListComponent.FileListComponent, {
        timeColumnDisplayText: e => dateFormatHelper.formatRelativeDate(Number(e.updateTime)),
        headerClassName: "ml-8 mr-8",
        headerLeftClassName: w["header-left"],
        fileItemClassName: w["file-list-item"],
        className: w["file-list-container"],
        nameColumnTitle: reactJsxRuntimeCoreReexport.jsx(g, {
          spaceController: t,
          spaceStore: n
        }),
        timeColumnTitle: T("aispace_modified_time"),
        scrollRef: R,
        files: L,
        hasMore: j,
        mutiple: P,
        selectedFileIds: new Set(D),
        onSelectedFileIdsChange: e => {
          let t = L.map(e => e.id);
          let r = D.filter(e => !t.includes(e));
          n.getState().updateSelectedNodeIds([...r, ...e]);
        },
        onLoadMore: () => {
          var e;
          let n = t.getCurrentNodeId();
          if ((e = t.loadMoreNodeList) !== null && e !== undefined) {
            e.call(t, n);
          }
        },
        onDoubleClickRowItem: e => {
          if (f != null) {
            f(e);
          }
          O(e);
        },
        enableCheckBox: o,
        onClickFileTitle: e => {
          if (e.type !== fileEntityTypeConstants.fileEntityTypes.Directory) {
            if (e.enableCheck === false) {
              return;
            }
            let t = D.indexOf(e.id);
            if (t < 0) {
              n.getState().updateSelectedNodeIds([...D, e.id]);
            } else {
              n.getState().updateSelectedNodeIds(D.slice(0, t).concat(D.slice(t + 1)));
            }
          }
          O(e);
        },
        renderFileLabel: e => {
          let {
            originComp: t,
            file: n,
            disabled: r
          } = e;
          if (!E) {
            return t;
          }
          {
            let e = n.name.indexOf(E);
            let t = [n.name];
            if (e !== -1) {
              t = [reactJsxRuntimeCoreReexport.jsx("span", {
                className: r ? w.disabled : "",
                children: n.name.slice(0, e)
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: s([w.highlight, r ? w.disabled : ""]),
                children: E
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: r ? w.disabled : "",
                children: n.name.slice(e + E.length)
              })];
            }
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: w["file-box-wrapper"],
              children: [reactJsxRuntimeCoreReexport.jsx(fileIconRendererComponent.FileIconRenderer, {
                file: n,
                className: w["file-box-icon"]
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: w.title,
                children: t.map(e => e)
              })]
            });
          }
        },
        fileItemPopoverProps: {
          style: {
            marginLeft: "30px"
          },
          popoverPosition: "label-right"
        },
        renderPreviewContent: e => reactJsxRuntimeCoreReexport.jsx(filePreviewWrapperComponent.FilePreviewWrapper, {
          file: e,
          nodeInfoMap: A
        }),
        enableCheckAllBox: false,
        onClickFileItemContainer: e => {
          O(e);
        }
      });
    }
  }
  require.d(exports, {
    AiSpaceFileListModal: function () {
      return S;
    }
  });
}