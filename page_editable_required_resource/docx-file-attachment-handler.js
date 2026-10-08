// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A4' to 'handleCrossOperationError'
// - Renamed export 'DX' to 'updateFileBlockStates'
// - Renamed export 'GF' to 'processFileCopyTo'
// - Renamed export 'GZ' to 'setFileUploadProgress'
// - Renamed export 'Hp' to 'bindAttachmentToBlock'
// - Renamed export 'NF' to 'createFileBlockWithView'
// - Renamed export 'OQ' to 'setStartCopyingState'
// - Renamed export 'hH' to 'createFileBlocksFromData'
// - Renamed export 'lE' to 'createDocumentNodeFromFile'
// - Renamed export 'mv' to 'removeFileBlockByRecordId'
// - Renamed export 'qD' to 'processFileTokenPaste'
// - Renamed export 'x2' to 'updateInlineFileComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 356160
         */
module.exports = function (module, exports, require) {
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  require("document-node-utils_2") /*id: 868545*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var aiWritingConstants = require("ai-writing-constants") /*id: 151614*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var docxDocumentNodeFactory = require("docx-document-node-factory") /*id: 52340*/;
  var observableStateManager = require("observable-state-manager") /*id: 910520*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  require("editor-revision-handlers") /*id: 977441*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineStoreManager = require("docx-offline-store-manager") /*id: 218533*/;
  var offlineUploadProvider = require("offline-upload-provider") /*id: 363270*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var collabTriggersProvider = require("collab-triggers-provider") /*id: 164012*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var rootBlockIdExtractor = require("root-block-id-extractor") /*id: 274051*/;
  var docxErrorUtils = require("docx-error-utils") /*id: 390897*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  var docMultiGeoConstants = require("doc-multi-geo-constants") /*id: 254280*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docTokenPasteUtils = require("doc-token-paste-utils") /*id: 786413*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var toastManagerWrapper = require("toast-manager-wrapper") /*id: 55407*/;
  function F(e) {
    if (docxErrorUtils.isCrossOperationError(e)) {
      let r = docMultiGeoConstants.multiGeoStatusMap.get(e.code);
      if (r) {
        toastManagerWrapper.showToast({
          type: "error",
          content: r
        });
      }
      return true;
    }
    return false;
  }
  function H(e, r = {}) {
    let {
      size: n,
      type: o,
      name: i
    } = e;
    return docxDocumentNodeFactory.createDocumentNode({
      file: {
        token: docxViewConfigConstants.emptyString,
        mimeType: o,
        size: n,
        name: i
      },
      ...r
    });
  }
  function U(e, r, n, o, i) {
    let {
      name: l,
      size: a
    } = r.file;
    let c = fileUtilsAndViewHelpers.getViewTypeBySize(l, a);
    let d = documentViewUtils.createViewNode(c);
    let [u] = i ? documentBlockOperations.batchCreateChildren(e, n, [d]) : documentBlockOperations.insertNewChildren(e, n, o, [d]);
    let [h] = documentBlockOperations.insertNewChildren(e, u, 0, [r]);
    return [u, h];
  }
  function Z(e, r, n) {
    let o = [];
    let i = [];
    n.forEach(n => {
      if (n.type === docBlockTypeConstants.blockTypeConstants.FILE) {
        let {
          file: l
        } = n;
        let {
          name: a,
          size: c
        } = l;
        let d = fileUtilsAndViewHelpers.getViewTypeBySize(a, c);
        let u = documentViewUtils.createViewNode(d);
        let h = documentBlockOperations.createSingleBlock(e, r, u);
        let p = documentBlockOperations.createSingleBlock(e, h, n);
        e.replaceChildren(h, [p]);
        o.push(h);
        i.push(p);
      } else {
        let l = documentBlockOperations.createSingleBlock(e, r, n);
        o.push(l);
        i.push(l);
      }
    });
    return {
      childrenRecordIds: o,
      placeholderRecordIds: i
    };
  }
  function j(e, r) {
    observableStateManager.stateManager.setState(e, {
      progress: Math.floor(r * 100)
    });
  }
  function V(e, r) {
    let {
      type: n
    } = r.getRecord(e).snapshot;
    if (n === docBlockTypeConstants.blockTypeConstants.VIEW) {
      V(r.getBlockModelsByRecordId(e)[0].recordId, r);
      return;
    }
    if (n === docBlockTypeConstants.blockTypeConstants.FILE) {
      observableStateManager.stateManager.setState(e, {
        fromSelf: true
      });
    }
  }
  function z(e, r) {
    if (e) {
      observableStateManager.stateManager.setStartCopying(e);
    }
  }
  function X(e, r, n) {
    r.forEach((r, o) => {
      if (r.type === docBlockTypeConstants.blockTypeConstants.FILE) {
        V(e[o], n);
      }
    });
  }
  async function W(e) {
    let a;
    let {
      token: s,
      recordId: c,
      blockManager: p,
      fileType: g,
      width: m,
      height: k,
      onError: y
    } = e;
    let b = p.getRecord(c);
    if (!b) {
      return;
    }
    let _ = b.snapshot?.file;
    let I = b.snapshot?.parent_id;
    if (!b || !_ || !p.editable) {
      return;
    }
    try {
      let e = await otterDocApiServiceDi.getOtterDocService().AgwBindAttachment({
        title: _.name,
        page_token: docTokenHelperUtils.resolveDocToken(),
        uri: s,
        type: g,
        source: aiWritingConstants.contentSource.UserUpload
      });
      a = e == null ? undefined : e.data?.key;
    } catch {
      if (y != null) {
        y();
      }
      return;
    }
    if (!a) {
      if (y != null) {
        y();
      }
      return;
    }
    try {
      await p.applyTransaction("updateFileBlockToken", e => {
        e.replace(b.id, ["file", "token"], a);
        if (m) {
          e.replace(b.id, ["file", "width"], m);
        }
        if (m) {
          e.replace(b.id, ["file", "originWidth"], m);
        }
        if (k) {
          e.replace(b.id, ["file", "height"], k);
        }
        if (k) {
          e.replace(b.id, ["file", "originHeight"], k);
        }
      }, {
        from: collaborativeEditingFlowSyncModule.kq.LOCAL,
        undoable: false
      });
      if (typeof I == "string") {
        docTempTransactionManager.submitTempTx(p, docTempTransactionManager.getTempTxId(I));
      }
    } catch (e) {
      if (typeof I == "string") {
        docTempTransactionManager.cancelTempTx(p, docTempTransactionManager.getTempTxId(I));
      }
    }
    observableStateManager.stateManager.deleteState(b.id);
    let E = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.UPLOAD_FILE, p);
    if (networkStateEventCollector.collectNetworkState()) {
      E.deleteStoreDataKey(c);
    }
  }
  async function G(e, r) {
    await r.applyTransaction("removeFileBlockByRecordId", n => {
      let o = r.getBlockModelsByRecordId(e)[0];
      let i = o == null ? undefined : o.parent;
      if (!o || !i) {
        return;
      }
      let l = i.record.snapshot.type;
      let [a] = r.getBlockViewsByRecordId(e);
      if ((a == null ? undefined : a.props.displaymode) === viewTypeConstants.viewTypes.Inline && editorTextBlockUtilities.isTextBlock(i)) {
        let e = r.getBlockViewByBlockIdNotCheck(i.id);
        if (!e) {
          return;
        }
        let l = editorZoneRangeUtils.createEditorRange(e, {
          inlineblock: o.record.id
        });
        let {
          zoneState: a
        } = i;
        let s = a.remove(l).toAttributeText();
        n.replace(i.record.id, ["text"], s);
      } else if (l === docBlockTypeConstants.blockTypeConstants.VIEW) {
        documentBlockOperations.removeBlockItems(n, [i.id], r);
      } else {
        documentBlockOperations.removeBlockItems(n, [o.id], r);
      }
    });
  }
  let J = async (e, r, n, o) => {
    let i = "";
    let l = await n.editorAPI.getService(offlineUploadProvider.offlineUploadSvcId, {
      dynamic: true,
      async: true
    });
    try {
      if (e) {
        i = await docTokenPasteUtils.processDocTokenPaste(e, n, o, docApiConstants.fileTypes.FILE);
      } else if (browserEnvironmentDetectionUtils.browserDetector.isMobile && r) {
        window.flow.biz.util.getLocalMedia({
          videoLocalPaths: [r],
          callback: async e => {
            try {
              if (e.code !== 0 || !e.thumbs) {
                throw Error(`${e.code}: getLocalMedia failed`);
              }
              let {
                thumbs: r
              } = e;
              r = r.map(e => {
                let {
                  contentType: r,
                  width: n,
                  height: o
                } = e = typeof e == "string" ? JSON.parse(e) : e;
                if ((r ?? "").startsWith("video") && n && o) {
                  let {
                    adjustHeight: r,
                    adjustWidth: i
                  } = fileUtilsAndViewHelpers.adjustImageDimensions(n, o);
                  Object.assign(e, {
                    originWidth: n,
                    originHeight: o,
                    width: i,
                    height: r
                  });
                }
                return e;
              });
              if (l != null) {
                l.handleFileReUpload(o, r[0]);
              }
            } catch (e) {
              toastManagerWrapper.showToast({
                type: "error",
                content: t("block.failed_to_paste_block")
              });
              G(o, n);
            }
          }
        });
      }
      return i;
    } catch (e) {
      throw Error(e == null ? undefined : e.message);
    }
  };
  async function K(e, r, n, o, i, s, c) {
    let d = true;
    let {
      driveToken: u,
      imFileKey: h,
      imLocalPath: p
    } = e;
    let f = u;
    try {
      if (h || p) {
        f = await J(h, p, n, r);
      }
      if (p) {
        return;
      }
      if (!f) {
        throw Error("no file token.");
      }
      if (!(d = await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.UPLOAD))) {
        throw Error("admin disable upload file permission");
      }
      let e = await Q(f, r, n, o);
      n.applyTransaction("updateFileBlockToken", n => {
        n.replace(r, ["file", "token"], e);
      }, {
        undoable: false
      });
      if (s != null) {
        s();
      }
    } catch (o) {
      if (c != null) {
        c();
      }
      G(r, n);
      if (F(o)) {
        return;
      }
      if ((o.code === docApiConstants.driveErrors.USER_NO_DRIVE || o.code === docApiConstants.driveErrors.USER_DRIVE) && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        if (platformDocUtils.Qrp) {
          platformDocUtils.Qrp(docApiConstants.fileTypes.FILE);
        }
        return;
      }
      if (o.code === docApiConstants.driveErrors.SPACE && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        if (platformDocUtils.k2r !== null && platformDocUtils.k2r !== undefined) {
          platformDocUtils.k2r("storage-space", {
            type: "upload-file"
          });
        }
        return;
      }
      if (o.code === docApiConstants.driveErrors.FILE_SIZE_BEYOND_LIMIT && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        if (platformDocUtils.k2r !== null && platformDocUtils.k2r !== undefined) {
          platformDocUtils.k2r(platformDocUtils.P4G.FILE_SIZE, {
            fileSizeLimitType: platformDocUtils.e2L.UPLOAD
          });
        }
        return;
      }
      let e = syncedReferenceBlockUtils.getBlockTokenWithFallback(n.editorAPI);
      if (o.code === docxViewConfigConstants.constant4 && clipboardSecurityChecker.getClipboardEnable(e)) {
        if (d) {
          toastManagerWrapper.showToast({
            type: "error",
            content: t("LarkCCM_Workspace_InTextCopyOnly_Failed_Toast")
          }, false);
        }
        n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
          action: "docx_ccm_clipboard_security_paste",
          info: JSON.stringify({
            errorCode: o == null ? undefined : o.code,
            source: "fileCopyTo"
          })
        });
        return;
      }
      if (d) {
        toastManagerWrapper.showToast({
          type: "error",
          content: t("block.failed_to_paste_block")
        }, false);
      }
    } finally {
      if (i) {
        i();
      }
    }
  }
  async function q(e, r, n) {
    let o;
    if (!e.data.source_block_id) {
      return;
    }
    let i = e.data;
    let l = i.source_block_id;
    try {
      o = await Q(i.token, l, n);
    } catch (e) {
      F(e);
    }
    if (o) {
      var a;
      var s;
      await n.applyTransaction("updateInlineFileComponentAfter", i => {
        i.replace(l, ["file", "token"], o);
        let a = n.getBlockModelsByRecordId(r)[0];
        let s = editorDataManagerClass.EditorDataManager.serialize(a.record.snapshot.text);
        s.nodes.forEach(r => {
          var a;
          if (r.mark?.[inlineComponentConstants.componentType]) {
            let i = JSON.parse(r.mark[inlineComponentConstants.componentType]);
            if (i.id === e.id) {
              i.data.need_copy_resource = false;
              i.data.source_block_id = l;
              i.data.source_version = ((a = n.editorAPI.getService(collabTriggersProvider.collabProvider, {
                optional: true
              })) === null || a === undefined ? undefined : a.getVersion(l)) || docxViewConfigConstants.defaultCount;
              i.data.token = o;
              r.mark[inlineComponentConstants.componentType] = JSON.stringify(i);
            }
          }
        });
        i.replace(r, [docBlockTypeConstants.blockTypeConstants.TEXT], editorDataManagerClass.EditorDataManager.deserialize(s));
      }, {
        undoable: false
      });
      s = 0;
      if (a = l) {
        observableStateManager.stateManager.setEndCopying(a);
      }
      observableStateManager.stateManager.deleteState(l);
    }
  }
  async function Q(e, r, n, o) {
    var i;
    if (!e) {
      throw Error("copy to fail, no old token.");
    }
    let l = rootBlockIdExtractor.getRootBlockId(n);
    let a = await docxApiConstantsExports.docxApiService.resourceCopyTo([e], r, docApiConstants.fileTypes.FILE, l, o);
    if (a.code !== docxApiConstantsExports.operationStatus.SUCCESSFUL) {
      throw Error("copy to request fail.");
    }
    if (a == null) {
      return undefined;
    } else if ((i = a.data) === null || i === undefined) {
      return undefined;
    } else {
      return i.succ_files[e];
    }
  }
  require.d(exports, {
    handleCrossOperationError: function () {
      return F;
    },
    updateFileBlockStates: function () {
      return X;
    },
    processFileCopyTo: function () {
      return K;
    },
    setFileUploadProgress: function () {
      return V;
    },
    bindAttachmentToBlock: function () {
      return W;
    },
    createFileBlockWithView: function () {
      return U;
    },
    setStartCopyingState: function () {
      return z;
    },
    createFileBlocksFromData: function () {
      return Z;
    },
    createDocumentNodeFromFile: function () {
      return H;
    },
    removeFileBlockByRecordId: function () {
      return G;
    },
    processFileTokenPaste: function () {
      return j;
    },
    updateInlineFileComponent: function () {
      return q;
    }
  });
}