// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'networkStateEventCollector'
// - Resolved require(67722) to 'network-state-event-collector'
// - Renamed variable 'a' to 'docxOfflineFeatureCheck'
// - Resolved require(821237) to 'docx-offline-feature-check'
// - Renamed variable 'i' to 'observableStateManager'
// - Resolved require(910520) to 'observable-state-manager'
// - Renamed variable 'l' to 'docTempTransactionManager'
// - Resolved require(633045) to 'doc-temp-transaction-manager'
// - Renamed variable 's' to 'docPreviewConstants'
// - Resolved require(162554) to 'doc-preview-constants'
// - Renamed variable 'c' to 'docBlockActionConstants'
// - Resolved require(119943) to 'doc-block-action-constants'
// - Renamed variable 'd' to 'fileUploaderService_1'
// - Resolved require(571601) to 'file-uploader-service_1'
// - Renamed variable 'p' to 'docxFileAttachmentHandler'
// - Resolved require(356160) to 'docx-file-attachment-handler'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'G' to 'fileUploaderService' (module 571601)
// - Updated imported property 'v' to 'stateManager' (module 910520)
// - Updated imported property 'cX' to 'interactionModes' (module 162554)
// - Updated imported property 'LK' to 'blockActionTypes' (module 119943)
// - Updated imported property 't' to 'isDocxOfflineFlag' (module 821237)
// - Updated imported property 'GF' to 'processFileCopyTo' (module 356160)
// - Updated imported property 'G' to 'collectNetworkState' (module 67722)
// - Updated imported property '$D' to 'getTempTxId' (module 633045)
// - Updated imported property 'M4' to 'submitTempTx' (module 633045)
// - Updated imported property 'BS' to 'cancelTempTx' (module 633045)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 177294
         */
module.exports = function (module, exports, require) {
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxOfflineFeatureCheck = require("docx-offline-feature-check") /*id: 821237*/;
  var observableStateManager = require("observable-state-manager") /*id: 910520*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var docPreviewConstants = require("doc-preview-constants") /*id: 162554*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var fileUploaderService_1 = require("file-uploader-service_1") /*id: 571601*/;
  var docxFileAttachmentHandler = require("docx-file-attachment-handler") /*id: 356160*/;
  async function u(e, r) {
    let {
      instance: o
    } = await r.blockManager.editorAPI.getService(fileUploaderService_1.fileUploaderService, {
      dynamic: true
    });
    observableStateManager.stateManager.setState(r.record.id, {
      fromSelf: true,
      isCopying: false
    });
    try {
      let n = [r.record.snapshot.parent_id, r.record.id];
      o.uploadFile({}, [e], [n], docPreviewConstants.interactionModes.Paste);
    } catch (e) {}
  }
  async function m(e) {
    let {
      block: r,
      payload: o
    } = e;
    observableStateManager.stateManager.setStartCopying(r.record.id);
    let {
      token: n,
      imFileKey: l,
      file: s,
      src: d,
      uuid: p,
      imLocalPath: u
    } = o;
    (await r.offlineUpload).addStoreData(docBlockActionConstants.blockActionTypes.PASTE_FILE, r.record.id, {
      driveToken: n,
      imFileKey: l,
      imLocalPath: u,
      file: s,
      src: d,
      uuid: p
    });
    if (!docxOfflineFeatureCheck.isDocxOfflineFlag) {
      var m;
      if ((m = r.incompleteModelMonitor) !== null && m !== undefined) {
        m.add(r.recordId);
      }
    }
  }
  async function h(e) {
    let {
      block: r,
      payload: o,
      pasteRootId: a
    } = e;
    let s = function (e) {
      let {
        token: r,
        src: o,
        file: n,
        uuid: a,
        imFileKey: i,
        imLocalPath: l
      } = e;
      return {
        driveToken: r,
        file: n,
        src: o,
        uuid: a,
        imFileKey: i,
        imLocalPath: l
      };
    }(o);
    let {
      driveToken: d,
      imFileKey: m,
      imLocalPath: h
    } = s;
    if (d || m || h) {
      var f;
      if ((f = r.incompleteModelMonitor) !== null && f !== undefined) {
        f.add(r.recordId);
      }
      await docxFileAttachmentHandler.processFileCopyTo(s, r.record.id, r.blockManager, a, async () => {
        var e;
        if (networkStateEventCollector.collectNetworkState()) {
          (await r.offlineUpload).removeStoreData(docBlockActionConstants.blockActionTypes.PASTE_FILE, r.record.id);
        }
        if ((e = r.incompleteModelMonitor) !== null && e !== undefined) {
          e.delete(r.recordId);
        }
      }, () => {
        let o = r.parent?.recordId;
        if (!o) {
          return;
        }
        let n = docTempTransactionManager.getTempTxId(o);
        docTempTransactionManager.submitTempTx(r.blockManager, n);
      }, () => {
        let o = r.parent?.recordId;
        if (!o) {
          return;
        }
        let n = docTempTransactionManager.getTempTxId(o);
        docTempTransactionManager.cancelTempTx(r.blockManager, n);
      });
    } else if (o.file) {
      await u(o.file, r);
    }
    observableStateManager.stateManager.setEndCopying(r.record.id);
  }
  let f = {
    blockSetting: {
      blockType: require("doc-block-type-constants") /*id: 433991*/.blockTypeConstants.FILE,
      onPasteRecordAfterApply: m,
      onPasteRecordAfterAccepted: h
    }
  };
  exports.default = [f];
  require.r(exports);
}