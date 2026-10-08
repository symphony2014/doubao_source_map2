// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'debounceUtil_1_1'
// - Resolved require(887312) to 'debounce-util_1_1'
// - Renamed variable 'a' to 'throttledArrayIntersection'
// - Resolved require(832949) to 'throttled-array-intersection'
// - Renamed variable 'o' to 'arrayUniqueDiffUtil'
// - Resolved require(634911) to 'array-unique-diff-util'
// - Renamed variable 's' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'd' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'u' to 'checkboxWrapperComponent'
// - Resolved require(495136) to 'checkbox-wrapper-component'
// - Renamed variable 'p' to 'modalConfirmDialogManager'
// - Resolved require(948195) to 'modal-confirm-dialog-manager'
// - Renamed variable 'h' to 'samanthaInputComponent'
// - Resolved require(214717) to 'samantha-input-component'
// - Renamed variable 'f' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'm' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable 'g' to 'searchOutlinedIconComponent_1'
// - Resolved require(772730) to 'search-outlined-icon-component_1'
// - Renamed variable 'v' to 'aiSpaceFileListModal'
// - Resolved require(302940) to 'ai-space-file-list-modal'
// - Renamed variable '_' to 'aispaceInputStore'
// - Resolved require(718092) to 'aispace-input-store'
// - Renamed variable 'y' to 'aispaceInputFilelistStore'
// - Resolved require(631075) to 'aispace-input-filelist-store'
// - Renamed variable 'b' to 'aiSpaceAttachmentUploadHook'
// - Resolved require(742247) to 'ai-space-attachment-upload-hook'
// - Renamed variable 'C' to 'aiSpaceInputController'
// - Resolved require(737589) to 'ai-space-input-controller'
// - Renamed variable 'x' to 'fileListPreviewInitializer'
// - Resolved require(234378) to 'file-list-preview-initializer'
// - Renamed variable 'w' to 'checkContentReviewStatus'
// - Resolved require(312453) to 'check-content-review-status'
// - Renamed variable 'E' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'c' to 'AiSpaceNavController' (module 737589)
// - Updated imported property 'k' to 'AiSpaceSearchCtrl' (module 737589)
// - Updated imported property 'q' to 'aispaceInputStore' (module 718092)
// - Updated imported property 'v' to 'checkReviewStatus' (module 312453)
// - Updated imported property 'P' to 'initializeFilePreviews' (module 234378)
// - Updated imported property 'h' to 'inputFilelistStore' (module 631075)
// - Updated imported property 'm' to 'useAiSpaceFileUpload' (module 742247)
// - Updated imported property 'Z' to 'debounce' (module 887312)
// - Updated imported property 'T' to 'ModalConfirmDialog' (module 948195)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property 'K' to 'SamanthaInput' (module 214717)
// - Updated imported property 'Z' to 'SearchOutlinedIcon' (module 772730)
// - Updated imported property 'X' to 'AiSpaceFileListModal' (module 302940)
// - Updated imported property 'ZP' to 'CheckboxWrapper' (module 495136)
// - Updated imported property 'Z' to 'throttledIntersect' (module 832949)
// - Updated imported property 'Z' to 'arrayUniqueDiff' (module 634911)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: aispace-input-filelist-modal.0d7d9a41.js
         * chunkId: 38418
         * moduleId: 901158
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var throttledArrayIntersection = require("throttled-array-intersection") /*id: 832949*/;
  var arrayUniqueDiffUtil = require("array-unique-diff-util") /*id: 634911*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var samanthaInputComponent = require("samantha-input-component") /*id: 214717*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var searchOutlinedIconComponent_1 = require("search-outlined-icon-component_1") /*id: 772730*/;
  var aiSpaceFileListModal = require("ai-space-file-list-modal") /*id: 302940*/;
  var aispaceInputStore = require("aispace-input-store") /*id: 718092*/;
  var aispaceInputFilelistStore = require("aispace-input-filelist-store") /*id: 631075*/;
  var aiSpaceAttachmentUploadHook = require("ai-space-attachment-upload-hook") /*id: 742247*/;
  var aiSpaceInputController = require("ai-space-input-controller") /*id: 737589*/;
  var fileListPreviewInitializer = require("file-list-preview-initializer") /*id: 234378*/;
  var checkContentReviewStatus = require("check-content-review-status") /*id: 312453*/;
  var S = {
    modal: "modal-m8pm1N",
    "modal-container": "modal-container-tEtZuZ",
    modalContainer: "modal-container-tEtZuZ",
    "modal-close": "modal-close-thyDu5",
    modalClose: "modal-close-thyDu5",
    header: "header-McDlsz",
    "modal-title": "modal-title-XMNv9K",
    modalTitle: "modal-title-XMNv9K",
    "modal-close-icon": "modal-close-icon-PAj7jS",
    modalCloseIcon: "modal-close-icon-PAj7jS",
    "list-wrapper": "list-wrapper-RhC6QR",
    listWrapper: "list-wrapper-RhC6QR",
    "list-inner": "list-inner-FrduCc",
    listInner: "list-inner-FrduCc",
    "search-result-inner": "search-result-inner-HUnipk",
    searchResultInner: "search-result-inner-HUnipk",
    "search-input": "search-input-G0VmaT",
    searchInput: "search-input-G0VmaT",
    "footer-wrapper": "footer-wrapper-IgMnRz",
    footerWrapper: "footer-wrapper-IgMnRz",
    "confirm-button": "confirm-button-IINufl",
    confirmButton: "confirm-button-IINufl",
    "footer-button-wrapper": "footer-button-wrapper-V2z2Kb",
    footerButtonWrapper: "footer-button-wrapper-V2z2Kb",
    "footer-checkbox": "footer-checkbox-QCyxBQ",
    footerCheckbox: "footer-checkbox-QCyxBQ",
    "search-icon": "search-icon-QByP9N",
    searchIcon: "search-icon-QByP9N"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let I = e => {
    let {
      onClose: t,
      supportedFileTypes: n,
      unsupportedNodeTypes: s,
      from: I,
      confirmTextOverride: k,
      onConfirmOverride: N,
      disableMultiSelect: P,
      hideUnsupportedFile: T,
      mutiple: j,
      title: D,
      getPopupContainer: M
    } = e;
    let F = i18nTranslationUtils.useTranslationWithFallback();
    let A = reactCoreLibraryReexport.useRef(new aiSpaceInputController.AiSpaceNavController());
    let Z = reactCoreLibraryReexport.useRef(new aiSpaceInputController.AiSpaceSearchCtrl());
    let R = reactCoreLibraryReexport.useRef(null);
    let [L, O] = reactCoreLibraryReexport.useState(false);
    let [$, U] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      A.current.loadInitialData();
    }, []);
    let {
      selectFiles: q,
      updateSelectedNodeIds: B,
      allValidNodeIds: V,
      updateCurrentPathStack: J,
      childNodeIds: G
    } = aispaceInputStore.aispaceInputStore(e => {
      var t;
      let {
        selectedNodeIds: r,
        nodeInfoMap: i,
        updateSelectedNodeIds: a,
        updateCurrentPathStack: o
      } = e;
      let l = r.map(e => i[e]);
      let d = Object.keys(i).filter(e => {
        let t = i[e];
        return checkContentReviewStatus.checkReviewStatus(t, n, s);
      });
      let c = e.currentPathStack[e.currentPathStack.length - 1] || e.rootId;
      return {
        selectFiles: l,
        updateSelectedNodeIds: a,
        allValidNodeIds: d,
        childNodeIds: (t = e.nodeListMap[c]) === null || t === undefined ? undefined : t.filter(e => {
          let t = i[e];
          return checkContentReviewStatus.checkReviewStatus(t, n, s);
        }),
        updateCurrentPathStack: o
      };
    });
    fileListPreviewInitializer.initializeFilePreviews({
      store: aispaceInputStore.aispaceInputStore,
      supportedFileTypes: n,
      unsupportedNodeTypes: s
    });
    let {
      selectFiles: K,
      updateSelectedNodeIds: z,
      allValidNodeIds: W,
      clearNodes: X
    } = aispaceInputFilelistStore.inputFilelistStore(e => {
      let {
        selectedNodeIds: t,
        nodeInfoMap: r,
        updateSelectedNodeIds: i,
        clearNodeInfoMap: a,
        clearNodeListMap: o
      } = e;
      let l = t.map(e => r[e]);
      return {
        selectFiles: l,
        updateSelectedNodeIds: i,
        allValidNodeIds: Object.keys(r).filter(e => {
          let t = r[e];
          return checkContentReviewStatus.checkReviewStatus(t, n, s);
        }),
        clearNodes: () => {
          a();
          o();
        }
      };
    });
    let H = aiSpaceAttachmentUploadHook.useAiSpaceFileUpload();
    let Q = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(e => {
      var t;
      z([]);
      X();
      if ((t = Z.current) !== null && t !== undefined) {
        t.handleSearch({
          searchValue: e,
          fileTypes: n.map(e => `.${e}`)
        });
      }
    }, 500), []);
    let Y = !$;
    let ee = Y ? q : K;
    let et = ee.map(e => e == null ? undefined : e.id);
    let en = Y ? V.length : W.length;
    let er = Y ? G : W;
    let ei = Y ? B : z;
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("upload_from_drive_popup_show", {
        show_from: I
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      z([]);
      B([]);
      J([]);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(modalConfirmDialogManager.ModalConfirmDialog, {
      visible: true,
      width: "calc(min(618px, 100vw - 48px))",
      centered: true,
      className: S.modal,
      footer: null,
      header: null,
      bodyStyle: {
        height: "100%"
      },
      zIndex: 1200,
      closeOnEsc: true,
      onCancel: () => {
        t();
      },
      maskClosable: true,
      getPopupContainer: M,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: S["modal-container"],
        onClick: e => {
          e.stopPropagation();
        },
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: S["modal-title"],
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            children: D ?? F("aispace_searchWindow_header")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: l(["w-26 h-26 flex justify-center items-center", S["modal-close"]]),
            children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: S["modal-close-icon"],
              onClick: () => t()
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: S["search-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx(samanthaInputComponent.SamanthaInput, {
            prefix: reactJsxRuntimeCoreReexport.jsx(searchOutlinedIconComponent_1.SearchOutlinedIcon, {
              className: S["search-icon"]
            }),
            className: S["search-input"],
            autoFocus: true,
            value: $,
            onChange: e => {
              U(e);
              Q(e);
            },
            ref: R,
            showClear: true,
            placeholder: F("aispace_searchWindow_searchBar_placeholder")
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: S["list-wrapper"],
          children: [Y && reactJsxRuntimeCoreReexport.jsx("div", {
            className: S["list-inner"],
            children: reactJsxRuntimeCoreReexport.jsx(aiSpaceFileListModal.AiSpaceFileListModal, {
              spaceController: A.current,
              spaceStore: aispaceInputStore.aispaceInputStore,
              enableCheckBox: true,
              supportedFileTypes: n,
              unsupportedNodeTypes: s,
              hideUnsupportedFile: T,
              mutiple: j
            })
          }), !Y && reactJsxRuntimeCoreReexport.jsx("div", {
            className: S["search-result-inner"],
            children: reactJsxRuntimeCoreReexport.jsx(aiSpaceFileListModal.AiSpaceFileListModal, {
              spaceController: Z.current,
              spaceStore: aispaceInputFilelistStore.inputFilelistStore,
              enableCheckBox: true,
              searchValue: $,
              supportedFileTypes: n,
              unsupportedNodeTypes: s,
              hideUnsupportedFile: T,
              mutiple: j
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: S["footer-wrapper"],
            children: [!P && reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "flex h-full items-center justify-start gap-12",
              children: [reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
                checked: ee.length > 0 && ee.length === en,
                indeterminate: ee.length > 0 && ee.length < en,
                className: l(["w-16 h-16 relative"]),
                style: {
                  top: "-2px"
                },
                onChange: () => {
                  if (throttledArrayIntersection.throttledIntersect(et, er).length === (er == null ? undefined : er.length)) {
                    ei(arrayUniqueDiffUtil.arrayUniqueDiff(et, er));
                  } else {
                    ei([...new Set([...(er || []), ...et])]);
                  }
                }
              }), F("aispace_searchWindow_fileCount", {
                s_fileCount: ee.length
              })]
            }), reactJsxRuntimeCoreReexport.jsxs("div", {
              className: S["footer-button-wrapper"],
              children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                type: "tertiary",
                size: "large",
                onClick: () => {
                  t();
                },
                children: F("aispace_searchWindow_btn_cancel")
              }), reactJsxRuntimeCoreReexport.jsxs(samanthaButtonComponent.SamanthaButton, {
                onClick: async () => {
                  if (ee == null ? undefined : ee.length) {
                    try {
                      O(true);
                      if (N) {
                        await N(ee);
                      } else {
                        await H(ee, t);
                        teaAnalyticsEventTracker.trackEvent("upload_from_drive_popup_click", {
                          show_from: I
                        });
                      }
                    } finally {
                      O(false);
                    }
                  }
                },
                disabled: !(ee == null ? undefined : ee.length),
                className: S["confirm-button"],
                type: "primary",
                size: "large",
                loading: L,
                children: [k ?? F("aispace_searchWindow_btn_add"), !P && `${ee.length ? `(${ee.length})` : ""}`]
              })]
            })]
          })]
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    UploadAISpaceFilesModal: function () {
      return I;
    }
  });
}