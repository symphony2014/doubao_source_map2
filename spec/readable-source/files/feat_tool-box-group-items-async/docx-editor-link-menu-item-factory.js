// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createLinkMenuItem'
// - Renamed export 'z' to 'getLinkIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 912539
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var documentBlockInsertUtil = require("document-block-insert-util") /*id: 907868*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var docxKeyboardShortcutView = require("docx-keyboard-shortcut-view") /*id: 781697*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docLinkSelectionUtils = require("doc-link-selection-utils") /*id: 162630*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function _() {
    return docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.Hyperlink];
  }
  function C(e, {
    isAppend: l,
    showTooltip: o,
    category: c,
    panelType: u
  } = {}) {
    let {
      blocks: C,
      blockManager: f,
      selectionAPI: y,
      extraProps: I = {}
    } = e;
    if (C.length === 0) {
      return null;
    }
    let B = docBlockViewUtils.getBlockEdge(C, l);
    let x = async (o, r, d) => {
      let h = B;
      if (l) {
        h = await documentBlockInsertUtil.insertBlocks({
          blockManager: f,
          blocks: C,
          newBlockType: docBlockTypeConstants.blockTypeConstants.TEXT
        });
      }
      let g = editorZoneRangeUtils.createEditorRange(h, e.extraProps?.mark);
      let {
        zoneState: T
      } = h.model;
      if (!g.isCollapsed()) {
        let l = T.remove(g).toAttributeText();
        await e.blockManager.applyTransaction("changeBlockContent", e => {
          e.replace(h.record.id, ["text"], l);
        });
      }
      docEditorActionMap.collectBlockEvent({
        selectionAPI: y,
        source: d,
        blockManager: e.blockManager,
        actionType: docEditorActionMap.actionConstants.add_inline_link,
        blocks: C,
        target: "ccm_doc_link_edit_panel_view",
        category: c,
        mark: I.mark
      });
      if (stubBooleanFunctions.alwaysFalseCheck(u)) {
        stubBooleanFunctions.emptyStubFunc(f, docBlockTypeConstants.blockTypeConstants.LINK, h);
        return;
      }
      let _ = docLinkSelectionUtils.LinkTypeOptions.basic;
      let x = uuidGeneratorUtil.generateUuid();
      let {
        offset: w
      } = g.start;
      let M = {
        selection: editorRangeUtilities.convertRangeWithZone(h, [w, w]),
        renderType: _,
        token: x,
        text: ""
      };
      e.blockManager.dispatch(docLinkSelectionUtils.openLinkPanelAction, [h.id, M]);
    };
    return {
      name: "link",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.Link
      },
      text: t("CreationDoc_Docs_WebBookmark_DisplayAs_Link_Button"),
      keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.LINK],
      closeAfterClick: true,
      icon: _(),
      blockType: docBlockTypeConstants.blockTypeConstants.LINK,
      tip: o ? reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(docxKeyboardShortcutView.ShortcutPanel, {
          handler: docEditorCommandConstants.linkCommand
        })
      }) : undefined,
      action: x
    };
  }
  require.d(exports, {
    createLinkMenuItem: function () {
      return C;
    },
    getLinkIcon: function () {
      return _;
    }
  });
}