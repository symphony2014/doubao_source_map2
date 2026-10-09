// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'handleFileUploadToDocBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 462352
         */
module.exports = function (module, exports, require) {
  var fileSelectTriggerUtil = require("file-select-trigger-util") /*id: 625286*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  var docPreviewConstants = require("doc-preview-constants") /*id: 162554*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineStoreManager = require("docx-offline-store-manager") /*id: 218533*/;
  var fileUploaderService_1 = require("file-uploader-service_1") /*id: 571601*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var docxFileAttachmentHandler = require("docx-file-attachment-handler") /*id: 356160*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockFocusStates = require("block-focus-states") /*id: 324508*/;
  var editorBlockUtilities = require("editor-block-utilities") /*id: 321058*/;
  var blockInsertionHandler = require("block-insertion-handler") /*id: 235064*/;
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var rootBlockIdExtractor = require("root-block-id-extractor") /*id: 274051*/;
  var docxRustFileCopyHandler = require("docx-rust-file-copy-handler") /*id: 842885*/;
  var stubBooleanFunctions = require("stub-boolean-functions") /*id: 871839*/;
  let I = async e => {
    let l;
    let {
      blocks: o,
      panelType: I,
      mark: B,
      blockManager: x
    } = e;
    let w = docBlockViewUtils.getBlockEdge(o, I === editorUiComponentConstants.uiComponentTypes.Add);
    let M = editorZoneRangeUtils.getBlockMarkRange({
      block: w,
      mark: B
    });
    if (!(await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.UPLOAD, {
      sync: true
    }))) {
      return;
    }
    await editorBlockUtilities.clearMarkOrRange({
      block: w,
      mark: B,
      tupleRange: M
    });
    if (stubBooleanFunctions.alwaysFalseCheck(I)) {
      stubBooleanFunctions.emptyStubFunc(x, docBlockTypeConstants.blockTypeConstants.FILE, w);
      return;
    }
    let {
      files: A,
      event: E
    } = await fileSelectTriggerUtil.triggerFileSelect({
      allowMultiple: true
    });
    let {
      instance: D
    } = await w.blockManager.editorAPI.getService(fileUploaderService_1.fileUploaderService, {
      dynamic: true
    });
    let O = D.filterFiles(A);
    if (O.length < 1) {
      return;
    }
    let L = [];
    let P = {};
    let S = O.map(e => docxFileAttachmentHandler.createDocumentNodeFromFile(e));
    editorRevisionHandlers.handleAddRevision(w.blockManager, S, P);
    let N = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.UPLOAD_FILE, x);
    let R = rootBlockIdExtractor.getRootBlockId(x);
    let j = [];
    let {
      model: U
    } = w;
    let {
      parent: H
    } = U;
    if (!H) {
      return;
    }
    let G = H.record.id;
    if (docxOfflineFeatureCheck.isDocxOfflineFlag) {
      l = await docxRustFileCopyHandler.copyFilesToDocxRust(O, S, R);
    }
    let Z = U.position;
    await blockInsertionHandler.insertBlockHandler({
      blocks: o,
      panelType: I,
      transactionOptions: P,
      focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
      createDataCallback: e => {
        let {
          op: o,
          blockOps: n
        } = e;
        let [r,, a] = n;
        Z = a;
        S.forEach((e, n) => {
          let i = docxFileAttachmentHandler.createFileBlockWithView(o, e, r, a + n, true);
          L.push(i);
          if (docxOfflineFeatureCheck.isDocxOfflineFlag && l) {
            let e = l[n];
            let {
              size: o,
              name: r,
              width: a,
              height: c,
              mimeType: u
            } = S[n].file;
            let [, d] = i;
            N.addStoreData(d, {
              uuid: e,
              size: o,
              name: r,
              width: a,
              height: c,
              type: u
            });
          }
        });
        j = docTempTransactionManager.getSecPartyMounts({
          parentRecord: H.record,
          op: o,
          secondPartyRecordIds: L.map(e => e[0])
        });
        return {
          createRecordIds: L.map(e => e[0])
        };
      },
      afterTransactionApplied: () => {
        docTempTransactionManager.execSecondPartyTx({
          secondPartyBlockTempTransactionInfos: j,
          blockManager: x,
          parentRecordId: G,
          position: Z,
          transactionOptions: P
        });
      },
      afterTransactionAccepted: async () => {
        await D.uploadFile(E, O, L, docPreviewConstants.interactionModes.Slash);
      }
    });
    L.forEach(e => {
      let [l, o] = e;
      docxFileAttachmentHandler.setFileUploadProgress(o, w.blockManager);
    });
  };
  async function B(e) {
    let {
      blocks: l,
      panelType: o,
      mark: n,
      blockManager: r
    } = e;
    await I({
      blocks: l,
      blockManager: r,
      panelType: o,
      mark: n
    });
  }
  require.d(exports, {
    handleFileUploadToDocBlock: function () {
      return B;
    }
  });
}