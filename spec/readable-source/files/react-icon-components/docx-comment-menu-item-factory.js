// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'createCommentMenu'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 99934
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxEditorMenuConstants = require("docx-editor-menu-constants") /*id: 121350*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var editorSelectionUtilities = require("editor-selection-utilities") /*id: 913651*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var preAllowEditControllerName = require("pre-allow-edit-controller-name") /*id: 957001*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  require("ui-layout-position-enums") /*id: 463752*/;
  var translationSelectionUtils = require("translation-selection-utils") /*id: 632706*/;
  let w = (e, r) => {
    let o = e.hostElement.querySelector(`[data-block-id="${r}"]`);
    if (o) {
      return e.nodeToRange(o);
    } else {
      return null;
    }
  };
  let T = e => e.every(e => editorTextBlockUtilities.isTextEditable(e) && e.model.isEmpty);
  let k = (e, r, o) => {
    let l = [];
    if (e && [editorUiComponentConstants.uiComponentTypes.BlockMenu, editorUiComponentConstants.uiComponentTypes.BlockToolbar].includes(e)) {
      if ((l = docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks).length === 1) {
        let e = l[0].id;
        let o = r.getBlockViewByBlockId(e);
        let n = o.type === docBlockTypeConstants.blockTypeConstants.FILE && o.getViewType() === viewTypeConstants.viewTypes.Inline;
        let a = o.type === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW && o.getViewType() === viewTypeConstants.viewTypes.Inline;
        if (n || o.type === docBlockTypeConstants.blockTypeConstants.JIRA_ISSUE || a) {
          let n = o.props.parentId;
          let a = w(r.getBlockViewByBlockId(n), e);
          if (a) {
            let e = a.toPosition();
            l = [{
              type: docxBlockSelectionHandler_1.blockTypes.TEXT,
              id: n,
              selection: {
                start: e.start,
                end: e.start + e.len
              }
            }];
          }
        }
      }
    } else {
      l = o.getSelection();
    }
    return translationSelectionUtils.adjustSelectionForTranslation(l, r);
  };
  let Z = (e, r, o) => {
    let l = o.editorAPI.getService(preAllowEditControllerName.preAllowEditProvider, {
      optional: true
    });
    if (l) {
      let n = e.filter(e => o.hasBlockViewByBlockId(e.id)).map(e => o.getBlockViewByBlockId(e.id));
      if (l.keyEventsInterceptor.canEdit(docEditorCommandConstants.commentCommand, n, {
        source: r
      }) === false) {
        return false;
      }
    }
    return true;
  };
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function B(e, {
    panelType: r,
    category: o
  } = {}) {
    let {
      selectionAPI: v,
      blockManager: _,
      blocks: g
    } = e;
    let b = r === editorUiComponentConstants.uiComponentTypes.BlockMenu;
    let C = _.editorAPI.getService(flowCommentServiceToken.commentServiceToken);
    if (T(g) || g.some(e => [docBlockTypeConstants.blockTypeConstants.AI].concat(docxCommentFeatureFlags.isSyncedBlockCommentable() ? [] : docBlockTypeConstants.syncedSourceTypes).includes(e.type))) {
      return null;
    }
    let x = t("CreationDoc_DocX_MenuOption_Comment");
    return {
      key: editorConstantsEnums.BlockTypes.Comment,
      name: docxEditorMenuConstants.commentMenuName,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      disabled: false,
      extra: {
        behavior: editorConstantsEnums.EditorActions.Comment
      },
      className: "comment-item",
      text: b ? x : undefined,
      altText: x,
      tip: b ? null : reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
          handler: docEditorCommandConstants.commentCommand,
          showName: !b
        })
      }),
      tipPlacement: b ? "right" : "top",
      closeAfterClick: true,
      icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.Comment],
      action: (l, i, c) => {
        let s = k(r, _, v);
        if (Z(s, c, _)) {
          C.handleCreateDocComment({
            type: contentCommentTypes.CommentType.ContentComment,
            selectedBlocks: s
          });
          if (c) {
            docEditorActionMap.collectBlockEvent({
              source: c,
              actionObject: editorSelectionUtilities.isSingleTextSelection(s) ? docBlockConstants.scopeTypes.TEXT : docBlockConstants.scopeTypes.BLOCK,
              blockManager: e.blockManager,
              actionType: docEditorActionMap.actionConstants.comment,
              blocks: s,
              category: o
            });
          }
          e.selectionAPI.removeAllSelection();
        }
      }
    };
  }
  require.d(exports, {
    createCommentMenu: function () {
      return B;
    }
  });
}