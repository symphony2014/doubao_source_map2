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
// - Renamed variable 'u' to 'businessInputField'
// - Resolved require(324730) to 'business-input-field'
// - Renamed variable 'p' to 'styledCheckbox'
// - Resolved require(569376) to 'styled-checkbox'
// - Renamed variable 'h' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 'f' to 'alertDialogComponents'
// - Resolved require(119530) to 'alert-dialog-components'
// - Renamed variable 'm' to 'searchIconComponent_1'
// - Resolved require(706927) to 'search-icon-component_1'
// - Renamed variable 'g' to 'aiSpaceFileListModal'
// - Resolved require(302940) to 'ai-space-file-list-modal'
// - Renamed variable 'v' to 'aispaceInputStore'
// - Resolved require(718092) to 'aispace-input-store'
// - Renamed variable '_' to 'aispaceInputFilelistStore'
// - Resolved require(631075) to 'aispace-input-filelist-store'
// - Renamed variable 'y' to 'aiSpaceAttachmentUploadHook'
// - Resolved require(742247) to 'ai-space-attachment-upload-hook'
// - Renamed variable 'b' to 'aiSpaceInputController'
// - Resolved require(737589) to 'ai-space-input-controller'
// - Renamed variable 'C' to 'fileListPreviewInitializer'
// - Resolved require(234378) to 'file-list-preview-initializer'
// - Renamed variable 'x' to 'checkContentReviewStatus'
// - Resolved require(312453) to 'check-content-review-status'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
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
// - Updated imported property 'DK' to 'AlertDialogWrapper' (module 119530)
// - Updated imported property 'Gj' to 'AlertDialogRoot' (module 119530)
// - Updated imported property 'Jo' to 'AlertDialogHeader' (module 119530)
// - Updated imported property 'gF' to 'AlertDialogFooter' (module 119530)
// - Updated imported property '$' to 'BusinessInput' (module 324730)
// - Updated imported property 'l' to 'SearchIcon' (module 706927)
// - Updated imported property 'X' to 'AiSpaceFileListModal' (module 302940)
// - Updated imported property 't' to 'Checkbox' (module 569376)
// - Updated imported property 'Z' to 'throttledIntersect' (module 832949)
// - Updated imported property 'Z' to 'arrayUniqueDiff' (module 634911)
// - Updated imported property 'Z' to 'Button' (module 576887)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: aispace-input-filelist-modal.0d7d9a41.js
         * chunkId: 38418
         * moduleId: 889483
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
  var businessInputField = require("business-input-field") /*id: 324730*/;
  var styledCheckbox = require("styled-checkbox") /*id: 569376*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var alertDialogComponents = require("alert-dialog-components") /*id: 119530*/;
  var searchIconComponent_1 = require("search-icon-component_1") /*id: 706927*/;
  var aiSpaceFileListModal = require("ai-space-file-list-modal") /*id: 302940*/;
  var aispaceInputStore = require("aispace-input-store") /*id: 718092*/;
  var aispaceInputFilelistStore = require("aispace-input-filelist-store") /*id: 631075*/;
  var aiSpaceAttachmentUploadHook = require("ai-space-attachment-upload-hook") /*id: 742247*/;
  var aiSpaceInputController = require("ai-space-input-controller") /*id: 737589*/;
  var fileListPreviewInitializer = require("file-list-preview-initializer") /*id: 234378*/;
  var checkContentReviewStatus = require("check-content-review-status") /*id: 312453*/;
  var w = {
    modal: "modal-Kao942",
    "list-wrapper": "list-wrapper-j4GnH2",
    "list-inner": "list-inner-PWQBPu",
    "search-result-inner": "search-result-inner-G8tgaE",
    "search-wrapper": "search-wrapper-Diqgww",
    "search-input": "search-input-J6ERO7",
    "footer-wrapper": "footer-wrapper-FO6FAM",
    "footer-button-wrapper": "footer-button-wrapper-eaJdkd",
    "footer-button": "footer-button-Etd2yx"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let E = e => {
    let {
      onClose: t,
      supportedFileTypes: n,
      from: s,
      confirmTextOverride: E,
      onConfirmOverride: I,
      disableMultiSelect: k,
      hideUnsupportedFile: N,
      mutiple: P,
      title: T
    } = e;
    let j = i18nTranslationUtils.useTranslationWithFallback();
    let D = reactCoreLibraryReexport.useRef(new aiSpaceInputController.AiSpaceNavController());
    let M = reactCoreLibraryReexport.useRef(new aiSpaceInputController.AiSpaceSearchCtrl());
    let F = reactCoreLibraryReexport.useRef(null);
    let [A, Z] = reactCoreLibraryReexport.useState(false);
    let [R, L] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      D.current.loadInitialData();
    }, []);
    let {
      selectFiles: O,
      updateSelectedNodeIds: $,
      allValidNodeIds: U,
      updateCurrentPathStack: q,
      childNodeIds: B
    } = aispaceInputStore.aispaceInputStore(e => {
      var t;
      let {
        selectedNodeIds: r,
        nodeInfoMap: i,
        updateSelectedNodeIds: a,
        updateCurrentPathStack: o
      } = e;
      let s = r.map(e => i[e]);
      let l = Object.keys(i).filter(e => {
        let t = i[e];
        return checkContentReviewStatus.checkReviewStatus(t, n);
      });
      let d = e.currentPathStack[e.currentPathStack.length - 1] || e.rootId;
      return {
        selectFiles: s,
        updateSelectedNodeIds: a,
        allValidNodeIds: l,
        childNodeIds: (t = e.nodeListMap[d]) === null || t === undefined ? undefined : t.filter(e => {
          let t = i[e];
          return checkContentReviewStatus.checkReviewStatus(t, n);
        }),
        updateCurrentPathStack: o
      };
    });
    fileListPreviewInitializer.initializeFilePreviews({
      store: aispaceInputStore.aispaceInputStore,
      supportedFileTypes: n
    });
    let {
      selectFiles: V,
      updateSelectedNodeIds: J,
      allValidNodeIds: G,
      clearNodes: K
    } = aispaceInputFilelistStore.inputFilelistStore(e => {
      let {
        selectedNodeIds: t,
        nodeInfoMap: r,
        updateSelectedNodeIds: i,
        clearNodeInfoMap: a,
        clearNodeListMap: o
      } = e;
      let s = t.map(e => r[e]);
      return {
        selectFiles: s,
        updateSelectedNodeIds: i,
        allValidNodeIds: Object.keys(r).filter(e => {
          let t = r[e];
          return checkContentReviewStatus.checkReviewStatus(t, n);
        }),
        clearNodes: () => {
          a();
          o();
        }
      };
    });
    let z = aiSpaceAttachmentUploadHook.useAiSpaceFileUpload();
    let W = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(e => {
      var t;
      J([]);
      K();
      if ((t = M.current) !== null && t !== undefined) {
        t.handleSearch({
          searchValue: e,
          fileTypes: n.map(e => `.${e}`)
        });
      }
    }, 500), []);
    let X = !R;
    let H = X ? O : V;
    let Q = H.map(e => e == null ? undefined : e.id);
    let Y = X ? U.length : G.length;
    let ee = X ? B : G;
    let et = X ? $ : J;
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("upload_from_drive_popup_show", {
        show_from: s
      });
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      J([]);
      $([]);
      q([]);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(alertDialogComponents.AlertDialogWrapper, {
      open: true,
      children: reactJsxRuntimeCoreReexport.jsxs(alertDialogComponents.AlertDialogRoot, {
        onEscapeKeyDown: t,
        className: w.modal,
        children: [reactJsxRuntimeCoreReexport.jsx(alertDialogComponents.AlertDialogHeader, {
          title: T ?? j("aispace_searchWindow_header"),
          showCloseIcon: true,
          onClickCloseIcon: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: w["search-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx(businessInputField.BusinessInput, {
            prefix: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_1.SearchIcon, {
              className: "h-20 w-20 text-dbx-text-secondary"
            }),
            className: w["search-input"],
            autoFocus: true,
            value: R,
            onChange: e => {
              L(e);
              W(e);
            },
            ref: F,
            showClear: true,
            placeholder: j("aispace_searchWindow_searchBar_placeholder")
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: w["list-wrapper"],
          children: [X && reactJsxRuntimeCoreReexport.jsx("div", {
            className: w["list-inner"],
            children: reactJsxRuntimeCoreReexport.jsx(aiSpaceFileListModal.AiSpaceFileListModal, {
              spaceController: D.current,
              spaceStore: aispaceInputStore.aispaceInputStore,
              enableCheckBox: true,
              supportedFileTypes: n,
              hideUnsupportedFile: N,
              mutiple: P
            })
          }), !X && reactJsxRuntimeCoreReexport.jsx("div", {
            className: w["search-result-inner"],
            children: reactJsxRuntimeCoreReexport.jsx(aiSpaceFileListModal.AiSpaceFileListModal, {
              spaceController: M.current,
              spaceStore: aispaceInputFilelistStore.inputFilelistStore,
              enableCheckBox: true,
              searchValue: R,
              supportedFileTypes: n,
              hideUnsupportedFile: N,
              mutiple: P
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsxs(alertDialogComponents.AlertDialogFooter, {
          className: w["footer-wrapper"],
          children: [!k && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: `
                flex h-full items-center justify-start gap-12
                text-dbx-text-primary
              `,
            children: [reactJsxRuntimeCoreReexport.jsx(styledCheckbox.Checkbox, {
              checked: H.length > 0 && H.length === Y || H.length > 0 && H.length < Y && "indeterminate",
              className: l(["w-16 h-16 relative"]),
              onCheckedChange: () => {
                if (throttledArrayIntersection.throttledIntersect(Q, ee).length === (ee == null ? undefined : ee.length)) {
                  et(arrayUniqueDiffUtil.arrayUniqueDiff(Q, ee));
                } else {
                  et([...new Set([...(ee || []), ...Q])]);
                }
              }
            }), j("aispace_searchWindow_fileCount", {
              s_fileCount: H.length
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: w["footer-button-wrapper"],
            children: [reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
              variant: "rectangle",
              color: "grey-outline",
              onClick: () => {
                t();
              },
              className: w["footer-button"],
              children: j("aispace_searchWindow_btn_cancel")
            }), reactJsxRuntimeCoreReexport.jsxs(buttonComponentExport.Button, {
              className: w["footer-button"],
              variant: "rectangle",
              color: "brand-filled",
              onClick: async () => {
                if (H == null ? undefined : H.length) {
                  try {
                    Z(true);
                    if (I) {
                      await I(H);
                    } else {
                      await z(H, t);
                      teaAnalyticsEventTracker.trackEvent("upload_from_drive_popup_click", {
                        show_from: "more_drive_files",
                        from: s
                      });
                    }
                  } finally {
                    Z(false);
                  }
                }
              },
              disabled: !(H == null ? undefined : H.length),
              loading: A,
              children: [E ?? j("aispace_searchWindow_btn_add"), !k && `${H.length ? `(${H.length})` : ""}`]
            })]
          })]
        })]
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    UploadAISpaceFilesModal: function () {
      return E;
    }
  });
}