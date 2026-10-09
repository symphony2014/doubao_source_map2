// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$f' to 'clientsidePrefix'
// - Renamed export 'AG' to 'componentAttributes'
// - Renamed export 'E7' to 'editorContentTypes'
// - Renamed export 'K0' to 'editorCommandList'
// - Renamed export 'OY' to 'editorModuleManager'
// - Renamed export 'PH' to 'collabConnectorName'
// - Renamed export 'S2' to 'defaultVersion'
// - Renamed export 'bQ' to 'inlineBlockAttributes'
// - Renamed export 'cY' to 'mentionLinkOperations'
// - Renamed export 'f' to 'textOperationCommands'
// - Renamed export 'qz' to 'editorModuleRegistry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 414567
         */
module.exports = function (module, exports, require) {
  var o;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorModuleZoneManager = require("editor-module-zone-manager") /*id: 586388*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var clientsideLinkExports = require("clientside-link-exports") /*id: 751953*/;
  var editorZoneStateExtended = require("editor-zone-state-extended") /*id: 132405*/;
  let h = "CollabConnector";
  let _ = "0";
  let p = "clientside-";
  (o = {}).EMBED = "embed";
  o.PLAINTEXT = "plaintext";
  o.FORMATTEDTEXT = "formattedtext";
  o.LINK = "link";
  let g = o;
  let E = {
    [editorModuleConstants.editorModuleConsts.ContentState]: contentStateManager.ContentStateManager,
    [editorModuleConstants.editorModuleConsts.Range]: activeEditorRange.ActiveEditorRange,
    [editorModuleConstants.editorModuleConsts.ZoneState]: editorZoneStateExtended.ExtendedEditorZoneState
  };
  let m = new editorModuleZoneManager.EditorModuleManager();
  m.set(E);
  let b = ["addTempIdToMentionLink"];
  let v = ["flushInput", "composition", "deleteBackward", "codeblock:key:enter", "replaceText", "replaceAll", "codeBlockEnter"];
  let T = ["insertAt", "insertText", "deleteRange", "deleteForward", "deleteToLineStart", "deleteToLineEnd", "deleteEntireWordBackward", "deleteEntireWordForward", "multiple:deleteMultipleSelection", "applyPlainTextIntoTextualBlock", "streamingWriteDraftBySelection", "flowbaseRecordOnDelete", "replaceSlashToAt", "addReminder", "pasteIntoBlock", "insertInlineBlockInTextualBlock", "autoComplete", "onApplyChange", "mention doc", "mention user", "deleteText", "insertButton", "replaceLink"];
  let C = ["equation", "objectID", "abbreviation-data", "grammarly-data", "author", inlineComponentConstants.componentType, clientsideLinkExports.linkId, displayTypeConstants.displayInlineBlock];
  let k = [displayTypeConstants.displayInlineBlock, inlineComponentConstants.componentType, "equation", "objectID"];
  require.d(exports, {
    clientsidePrefix: function () {
      return p;
    },
    componentAttributes: function () {
      return C;
    },
    editorContentTypes: function () {
      return g;
    },
    editorCommandList: function () {
      return v;
    },
    editorModuleManager: function () {
      return m;
    },
    collabConnectorName: function () {
      return h;
    },
    defaultVersion: function () {
      return _;
    },
    inlineBlockAttributes: function () {
      return k;
    },
    mentionLinkOperations: function () {
      return b;
    },
    textOperationCommands: function () {
      return T;
    },
    editorModuleRegistry: function () {
      return E;
    }
  });
}