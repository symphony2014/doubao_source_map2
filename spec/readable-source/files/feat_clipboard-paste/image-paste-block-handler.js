// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'networkStateEventCollector'
// - Resolved require(67722) to 'network-state-event-collector'
// - Renamed variable 'a' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'i' to 'networkStateErrorHandler'
// - Resolved require(309691) to 'network-state-error-handler'
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 's' to 'tempTransactionConst'
// - Resolved require(825163) to 'temp-transaction-const'
// - Renamed variable 'c' to 'docTempTransactionManager'
// - Resolved require(633045) to 'doc-temp-transaction-manager'
// - Renamed variable 'd' to 'docBlockActionConstants'
// - Resolved require(119943) to 'doc-block-action-constants'
// - Renamed variable 'p' to 'docxOfflineImageFlags'
// - Resolved require(332375) to 'docx-offline-image-flags'
// - Renamed variable 'u' to 'docxImageUploadHandler'
// - Resolved require(8997) to 'docx-image-upload-handler'
// - Updated imported property 'n' to 'isImageEditEnabled' (module 332375)
// - Updated imported property 'G' to 'handleNetworkError' (module 309691)
// - Updated imported property 'LH' to 'setImageUploadBackground' (module 8997)
// - Updated imported property 'WX' to 'handlePasteImageUpload' (module 8997)
// - Updated imported property 'LK' to 'blockActionTypes' (module 119943)
// - Updated imported property 'G' to 'collectNetworkState' (module 67722)
// - Updated imported property 'g' to 'tempTransaction' (module 825163)
// - Updated imported property 'M4' to 'submitTempTx' (module 633045)
// - Updated imported property 'BS' to 'cancelTempTx' (module 633045)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 821882
         */
module.exports = function (module, exports, require) {
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var networkStateErrorHandler = require("network-state-error-handler") /*id: 309691*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var tempTransactionConst = require("temp-transaction-const") /*id: 825163*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  var docxImageUploadHandler = require("docx-image-upload-handler") /*id: 8997*/;
  function m(e) {
    let {
      fileToken: o,
      src: n,
      oldRecord: a,
      file: i,
      uuid: l,
      imFileKey: s
    } = e;
    return {
      driveToken: o,
      image: a == null ? undefined : a.snapshot?.image,
      file: i,
      src: n,
      uuid: l,
      imFileKey: s
    };
  }
  async function h(e) {
    let {
      payload: r,
      block: o
    } = e;
    if (!docxOfflineImageFlags.isImageEditEnabled) {
      networkStateErrorHandler.handleNetworkError(t("CreationDoc_DocX_ImageUpload_failed_toast"));
    }
    let n = m(r);
    if (o.view) {
      docxImageUploadHandler.setImageUploadBackground(o.view, o.record.id, n);
    }
    if (o.view) {
      o.view.setUploadProgress(0);
    }
    (await o.offlineUpload).addStoreData(docBlockActionConstants.blockActionTypes.PASTE_IMAGE, o.record.id, n);
    if (!docxOfflineImageFlags.isImageEditEnabled) {
      var a;
      if ((a = o.incompleteModelMonitor) !== null && a !== undefined) {
        a.add(o.recordId);
      }
    }
  }
  async function f(e) {
    let {
      payload: r,
      block: o,
      pasteRootId: i
    } = e;
    let l = m(r);
    let {
      id: p
    } = o.record;
    docxImageUploadHandler.handlePasteImageUpload({
      blockManager: o.blockManager,
      imageManager: o.imageManager,
      recordId: p,
      payload: l,
      pasteRootId: i,
      onFinally: async () => {
        var e;
        if (networkStateEventCollector.collectNetworkState()) {
          (await o.offlineUpload).removeStoreData(docBlockActionConstants.blockActionTypes.PASTE_IMAGE, p);
        }
        if ((e = o.incompleteModelMonitor) !== null && e !== undefined) {
          e.delete(o.recordId);
        }
      },
      onSucess: () => {
        let e = `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(p)}`;
        docTempTransactionManager.submitTempTx(o.blockManager, e);
      },
      onError: () => {
        let e = `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(p)}`;
        docTempTransactionManager.cancelTempTx(o.blockManager, e);
      }
    });
  }
  let b = {
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.IMAGE,
      onPasteRecordAfterApply: h,
      onPasteRecordAfterAccepted: f
    }
  };
  exports.default = [b];
  require.r(exports);
}