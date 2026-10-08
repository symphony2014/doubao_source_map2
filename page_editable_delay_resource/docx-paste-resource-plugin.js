// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'PasteResourcePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 505247
         */
module.exports = function (module, exports, require) {
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var docxFileAttachmentHandler = require("docx-file-attachment-handler") /*id: 356160*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var pasteRecordConstants = require("paste-record-constants") /*id: 780742*/;
  var docxMentionDocRenderer = require("docx-mention-doc-renderer") /*id: 957981*/;
  class h extends docxMentionDocRenderer.DocxMentionDocRenderer {
    destory() {
      docxEditorEventConstantsAndManager.globalEventBus.off(pasteRecordConstants.pasteRecordApply, this.handlePasteRecordAfterApply);
      docxEditorEventConstantsAndManager.globalEventBus.off(pasteRecordConstants.pasteRecordAccepted, this.handlePasteRecordAfterAccepted);
    }
    handlePasteRecordAfterApply(e, n, i) {
      let a = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.text.initialAttributedTexts, e.text.apool);
      let u = [];
      a.get(zeroConstantModule_1.versionValue).ops.forEach(e => {
        if (e.attributes?.[inlineComponentConstants.componentType]) {
          let r = JSON.parse(e.attributes[inlineComponentConstants.componentType]);
          if (r.type === inlineComponentConstants.mentionTypes.DOC) {
            u.push({
              component: r,
              recordId: n
            });
          } else if (r.type === inlineComponentConstants.mentionTypes.FILE) {
            docxFileAttachmentHandler.setStartCopyingState(r.data.source_block_id, i);
          }
        }
      });
      driveDocInlineComponentUtils.generateInlineDocData(u, i);
    }
    handlePasteRecordAfterAccepted(e, n, i) {
      deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.text.initialAttributedTexts, e.text.apool).get(zeroConstantModule_1.versionValue).ops.forEach(e => {
        if (e.attributes?.[inlineComponentConstants.componentType]) {
          let r = JSON.parse(e.attributes[inlineComponentConstants.componentType]);
          if (r.type === inlineComponentConstants.mentionTypes.FILE && r.data.need_copy_resource) {
            docxFileAttachmentHandler.updateInlineFileComponent(r, n, i);
          }
        }
      });
    }
    constructor(e) {
      super(e);
      docxEditorEventConstantsAndManager.globalEventBus.on(pasteRecordConstants.pasteRecordApply, this.handlePasteRecordAfterApply);
      docxEditorEventConstantsAndManager.globalEventBus.on(pasteRecordConstants.pasteRecordAccepted, this.handlePasteRecordAfterAccepted);
    }
  }
  require.d(exports, {
    PasteResourcePlugin: function () {
      return h;
    }
  });
}