// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'i' to 'getProviderName'
// - Resolved require(804610) to 'get-provider-name'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'u' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 's' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'syncedReferenceBlockUtils'
// - Resolved require(262712) to 'synced-reference-block-utils'
// - Renamed variable 'a' to 'editorContextFacade'
// - Resolved require(788056) to 'editor-context-facade'
// - Renamed variable 'd' to 'blockTipsTooltipComponent'
// - Resolved require(614382) to 'block-tips-tooltip-component'
// - Renamed variable 'E' to 'featureConstantsTypes'
// - Resolved require(882886) to 'feature-constants-types'
// - Renamed variable 'b' to 'docsModeProviderToken'
// - Resolved require(431030) to 'docs-mode-provider-token'
// - Renamed variable '_' to 'docxSuggestionModeEvents'
// - Resolved require(263624) to 'docx-suggestion-mode-events'
// - Renamed variable 'g' to 'docxSuggestionModeToast'
// - Resolved require(940071) to 'docx-suggestion-mode-toast'
// - Renamed variable 'v' to 'docTranslateEditCheck'
// - Resolved require(293309) to 'doc-translate-edit-check'
// - Renamed variable 'k' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'e' to 'EditorContextFacade' (module 788056)
// - Updated imported property 'D' to 'docsModeProvider' (module 431030)
// - Updated imported property 'po' to 'ZERO_OFFSET' (module 135760)
// - Updated imported property 'ix' to 'registerViewExt' (module 135760)
// - Updated imported property 't' to 'isTranslateEditMode' (module 293309)
// - Updated imported property 'kk' to 'EditorModes' (module 882886)
// - Updated imported property 'UZ' to 'UiSources' (module 882886)
// - Updated imported property 'm' to 'trackChangeToEdit' (module 263624)
// - Updated imported property 'v' to 'trackAlertView' (module 263624)
// - Updated imported property 'j' to 'handleEditBlock' (module 940071)
// - Updated imported property 'X' to 'showSuggestionToast' (module 940071)
// - Updated imported property 'V_' to 'getBlockViewByBlockIdWithSynced' (module 262712)
// - Updated imported property 'rj' to 'isSyncedReferenceBlock' (module 262712)
// - Updated imported property 'cl' to 'getSyncedReferenceBlockModel' (module 262712)
// - Updated imported property 'Li' to 'getSyncedBlockPermission' (module 262712)
// - Updated imported property 'g' to 'BlockTipsTooltip' (module 614382)
// - Updated imported property 'l' to 'getProviderName' (module 804610)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_revision_resource.5de599f1.js
         * chunkId: 40498
         * moduleId: 853291
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var getProviderName = require("get-provider-name") /*id: 804610*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var blockTipsTooltipComponent = require("block-tips-tooltip-component") /*id: 614382*/;
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  var docsModeProviderToken = require("docs-mode-provider-token") /*id: 431030*/;
  var docxSuggestionModeEvents = require("docx-suggestion-mode-events") /*id: 263624*/;
  var docxSuggestionModeToast = require("docx-suggestion-mode-toast") /*id: 940071*/;
  var docTranslateEditCheck = require("doc-translate-edit-check") /*id: 293309*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let S = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp;
  let p = e => {
    let {
      isTranslateMode: l,
      isRevisingMode: o
    } = e;
    if (l && !o) {
      return [docBlockTypeConstants.blockTypeConstants.SHEET];
    } else if (o && !l) {
      return [docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.MINDMAP, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.BASE_REFER, docBlockTypeConstants.blockTypeConstants.TASK, docBlockTypeConstants.blockTypeConstants.ISV, docBlockTypeConstants.blockTypeConstants.POLL, docBlockTypeConstants.blockTypeConstants.IFRAME, docBlockTypeConstants.blockTypeConstants.JIRA_FILTER, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE, docBlockTypeConstants.blockTypeConstants.MEEGO];
    } else {
      return undefined;
    }
  };
  let C = e => {
    let {
      isTranslateMode: l,
      isRevisingMode: o
    } = e;
    if (l && !o) {
      return [];
    } else if (o && !l) {
      return [docBlockTypeConstants.blockTypeConstants.OKRX, docBlockTypeConstants.blockTypeConstants.TASK_LIST];
    } else {
      return undefined;
    }
  };
  class L extends editorContextFacade.EditorContextFacade {
    getAfterSlot() {
      return e => {
        let {
          blockManager: l,
          boundary: o
        } = e.recursionProps;
        let i = l.editorAPI.getService(docsModeProviderToken.docsModeProvider, {
          optional: true
        });
        let [u, a] = reactCoreLibraryReexport.useState("");
        let [L, f] = reactCoreLibraryReexport.useState(docxEditorCore.ZERO_OFFSET);
        let T = p({
          isTranslateMode: docTranslateEditCheck.isTranslateEditMode(l),
          isRevisingMode: (i == null ? undefined : i.getDocsMode()) === featureConstantsTypes.EditorModes.REVISING
        }) || [];
        let A = C({
          isTranslateMode: docTranslateEditCheck.isTranslateEditMode(l),
          isRevisingMode: (i == null ? undefined : i.getDocsMode()) === featureConstantsTypes.EditorModes.REVISING
        }) || [];
        let I = S ? T.concat(A) : A;
        let M = reactCoreLibraryReexport.useCallback(e => docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE === e ? t("LarkCCM_Docs_Suggest_UnableToEditSyncedBlockInSuggestMode_Tooltip") : A.includes(e) ? t("LarkCCM_Docs_Suggest_CantSuggestApplyDirectly_Toast") : docTranslateEditCheck.isTranslateEditMode(l) ? t("LarkCCM_Docs_Translate_UnableEditBlock_Tooltip") : t("LarkCCM_Docs_Suggest_UnableToEditBlockInSuggestMode_Tooltip"), []);
        let R = reactCoreLibraryReexport.useCallback(e => {
          let l = e.target;
          if (!l || !l.closest) {
            return [];
          }
          let o = l.closest(".block");
          if (o) {
            return [o.getAttribute("data-block-id"), o.getAttribute("data-block-type")];
          } else {
            return [];
          }
        }, []);
        let D = reactCoreLibraryReexport.useCallback(e => {
          let [l, o] = R(e);
          if (!l || !o || !T.includes(o)) {
            m();
            return;
          }
        }, [o]);
        function m() {
          a("");
          f(docxEditorCore.ZERO_OFFSET);
          o.removeEventListener("scroll", D);
          setTimeout(() => {
            document.removeEventListener("click", D);
          });
        }
        let N = reactCoreLibraryReexport.useCallback(m, [o]);
        let B = reactCoreLibraryReexport.useCallback(() => {
          if (i != null) {
            i.switchToEditing(featureConstantsTypes.UiSources.TOAST);
          }
          docxSuggestionModeEvents.trackChangeToEdit();
        }, []);
        let O = reactCoreLibraryReexport.useCallback(e => {
          switch (e.type) {
            case docBlockTypeConstants.blockTypeConstants.BASE_REFER:
              var l;
              if ((l = e.getCurrViewType) === null || l === undefined ? undefined : l.call(e)) {
                return 15;
              }
              return 0;
            case docBlockTypeConstants.blockTypeConstants.BITABLE:
            case docBlockTypeConstants.blockTypeConstants.JIRA_FILTER:
              return 15;
            default:
              return 0;
          }
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          let e = e => {
            var n;
            if ((i == null ? undefined : i.getDocsMode()) !== featureConstantsTypes.EditorModes.REVISING && !docTranslateEditCheck.isTranslateEditMode(l)) {
              return;
            }
            if (e.target && e.target.closest(".faster_container.spreadsheet")) {
              docxSuggestionModeToast.handleEditBlock(l);
              return;
            }
            let [r, u] = R(e);
            if (!r || !u) {
              return;
            }
            let d = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(l, Number(r));
            if (!d) {
              return;
            }
            r = d.id;
            let {
              editorAPI: b
            } = d.blockManager;
            if (syncedReferenceBlockUtils.isSyncedReferenceBlock(b) && !docTranslateEditCheck.isTranslateEditMode(l)) {
              let e = syncedReferenceBlockUtils.getSyncedReferenceBlockModel(b);
              r = (e == null ? undefined : e.id) || r;
              u = (e == null ? undefined : e.type) || u;
            }
            if (u === docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE) {
              let e = syncedReferenceBlockUtils.getSyncedBlockPermission(b);
              if (!e || !e.edit && e.view) {
                return;
              }
            }
            if (I.includes(u) || !S && !docTranslateEditCheck.isTranslateEditMode(l) && docBlockTypeConstants.blockTypeConstants.AI === u && e.target.closest(".copilot-comp__input-operation-wrapper")) {
              let e = M(u);
              docxSuggestionModeToast.showSuggestionToast(l, e);
              return;
            }
            if (T.includes(u)) {
              o.removeEventListener("scroll", D);
              document.removeEventListener("click", D);
              n = r;
              a(M(u));
              f(e => {
                if (e !== n) {
                  docxSuggestionModeEvents.trackAlertView();
                }
                return n;
              });
              o.addEventListener("scroll", D);
              setTimeout(() => {
                document.addEventListener("click", D);
              });
            }
          };
          let n = S ? "pointerup" : "click";
          document.addEventListener(n, e, true);
          let r = i == null ? undefined : i.onDocsModeChange(N);
          return () => {
            document.removeEventListener(n, e, true);
            if (r != null) {
              r.unsubscribe();
            }
          };
        }, [o, l, R, N, D]);
        if (S) {
          return null;
        } else {
          return reactJsxRuntimeCoreReexport.jsx(blockTipsTooltipComponent.BlockTipsTooltip, {
            blockManager: l,
            blockId: L,
            tips: u,
            onSwitchDocsMode: B,
            isRevisingTips: (i == null ? undefined : i.getDocsMode()) === featureConstantsTypes.EditorModes.REVISING,
            onClose: N,
            handleBlockOffset: O
          });
        }
      };
    }
  }
  function f() {
    docxEditorCore.registerViewExt(getProviderName.getProviderName, L);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return f;
    }
  });
}