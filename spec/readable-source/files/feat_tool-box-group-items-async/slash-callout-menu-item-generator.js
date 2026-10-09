// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'generateCalloutMenuItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 749485
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var docxToolboxBlockIconMapping = require("docx-toolbox-block-icon-mapping") /*id: 773648*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docBlockPositionUtils = require("doc-block-position-utils") /*id: 116715*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var bookmarkLinkMetadataProcessor_1 = require("bookmark-link-metadata-processor_1") /*id: 339633*/;
  var docBlockTypeAliasesMapping = require("doc-block-type-aliases-mapping") /*id: 322889*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, {
    panelType: l,
    isAppend: o,
    showTooltip: g,
    category: T
  } = {}) {
    let {
      blockManager: _,
      selectionAPI: C,
      blocks: f,
      extraProps: y = {}
    } = e;
    let I = docBlockViewUtils.getBlockEdge(f, o);
    if (calloutBlockUtils.hasSpecialParent(I.model) || (!I || !calloutBlockUtils.isEmojiSupported(I.model) || !!calloutBlockUtils.hasBadDescendants(I.model)) && !o) {
      return null;
    }
    let B = l === editorUiComponentConstants.uiComponentTypes.Slash;
    let x = I.type === docBlockTypeConstants.blockTypeConstants.CALLOUT;
    let w = e => {
      docEditorActionMap.collectBlockEvent({
        selectionAPI: C,
        source: e,
        blockManager: _,
        actionType: docEditorActionMap.actionConstants.turn_into_callout,
        actionValue: {
          value1: x ? "false" : "true"
        },
        blocks: f,
        category: T,
        mark: y.mark
      });
    };
    let M = async (e, n, r) => {
      w(r);
      let [a, c] = await docBlockPositionUtils.calculateBlockPosition({
        blocks: [I],
        extraProps: y,
        isAppend: o,
        blockManager: _
      });
      editorBlockUtilities.clearMarkOrRange({
        block: I,
        mark: y.mark,
        notFocus: true
      });
      if (stubBooleanFunctions.alwaysFalseCheck(l)) {
        stubBooleanFunctions.emptyStubFunc(_, docBlockTypeConstants.blockTypeConstants.CALLOUT, a);
        return;
      }
      let d = _.editorAPI.getService(bookmarkLinkMetadataProcessor_1.H);
      await d.handleModelsTurnInto({
        models: [a.model],
        triggerKey: docBlockTypeConstants.blockTypeConstants.CALLOUT,
        knownContext: {
          toggle: false
        }
      });
      C.setSelection([{
        id: a.id,
        type: docxBlockSelectionHandler_1.blockTypes.TEXT,
        selection: {
          start: c.start,
          end: c.start
        }
      }]);
    };
    let A = docxToolboxBlockIconMapping.getBlockTypeLabel(docBlockTypeConstants.blockTypeConstants.CALLOUT);
    return {
      name: "slash callout",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      text: A,
      keywords: docBlockTypeAliasesMapping.blockTypeKeywords[docBlockTypeAliasesMapping.blockTypeAliases.CALLOUT],
      icon: docxToolboxBlockIconMapping.blockTypeIconMap[docBlockTypeConstants.blockTypeConstants.CALLOUT],
      tip: g ? reactJsxRuntimeCoreReexport.jsx("div", {
        children: A
      }) : undefined,
      tipPlacement: "top",
      action: M,
      active: !B && !o && x,
      blockType: docBlockTypeConstants.blockTypeConstants.CALLOUT,
      closeAfterClick: true
    };
  }
  require.d(exports, {
    generateCalloutMenuItem: function () {
      return g;
    }
  });
}