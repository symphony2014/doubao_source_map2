// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OC' to 'uploadImageBlocks'
// - Renamed export 'Te' to 'generateUploadImage'
// - Renamed export 'VI' to 'uploadImageUri'
// - Renamed export 'Wb' to 'imageUploadTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 929679
         */
module.exports = function (module, exports, require) {
  var r;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var docxOfflineStatusCheck = require("docx-offline-status-check") /*id: 691844*/;
  var tempTransactionConst = require("temp-transaction-const") /*id: 825163*/;
  var asyncRetryUtils_1 = require("async-retry-utils_1") /*id: 989891*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  var editorRevisionHandlers = require("editor-revision-handlers") /*id: 977441*/;
  var docxImageUploadService = require("docx-image-upload-service") /*id: 691820*/;
  var docPreviewConstants = require("doc-preview-constants") /*id: 162554*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineStoreManager = require("docx-offline-store-manager") /*id: 218533*/;
  var waitingMonitorService = require("waiting-monitor-service") /*id: 622032*/;
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var docxImageUploadHandler = require("docx-image-upload-handler") /*id: 8997*/;
  var docxImageNodeCreator = require("docx-image-node-creator") /*id: 41944*/;
  var imageManagerProviderName = require("image-manager-provider-name") /*id: 852709*/;
  var imageDataCacheStorageToken = require("image-data-cache-storage-token") /*id: 328701*/;
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
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  function B(e, i) {
    let n = document.activeElement;
    let r = e.getSelection();
    if (!browserEnvironmentDetectionUtils.browserDetector.isSafari && r.length === 1 && r[0].type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
      let e = i.getBlockViewByBlockIdNotCheck(r[0].id)?.hostElement;
      if (e && n instanceof HTMLElement && n.contains(e)) {
        n.focus({
          preventScroll: true
        });
      }
    }
  }
  (r = {}).LOCAL_FILE = "select_by_local_file";
  r.IMAGE_URI = "select_by_uri";
  r.IMAGE_URL = "select_replace_by_url";
  let L = r;
  async function j(e) {
    let {
      imageType: i,
      imageUploader: n,
      imageOriginUrl: r,
      imageURI: o,
      allowMultiple: l = false
    } = e;
    let a = [];
    switch (i) {
      case L.LOCAL_FILE:
        a = l ? Array.from(await n.getFileByDialog(true)) : [await n.getFileByDialog(false)];
        break;
      case L.IMAGE_URI:
        if (o && r) {
          a = [await n.downloadImage(r, false)];
        }
        break;
      case L.IMAGE_URL:
        if (r) {
          a = [await n.downloadImage(r, false)];
        }
    }
    return a;
  }
  async function Z(e) {
    let {
      blocks: i,
      panelType: n,
      mark: r,
      blockManager: d,
      selectionAPI: f,
      isAppend: D,
      imageType: Z = L.LOCAL_FILE,
      imageOriginUrl: F,
      imageURI: U
    } = e;
    if (!(await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.UPLOAD, {
      sync: true
    }))) {
      return;
    }
    let W = documentViewUtils.getParentViewBlock(docBlockViewUtils.getBlockEdge(i, D), d);
    let z = editorZoneRangeUtils.getBlockMarkRange({
      block: W,
      mark: r
    });
    try {
      let e;
      let o = rootBlockIdExtractor.getRootBlockId(d);
      let _ = new docxImageUploadService.DocxImageUploadService({
        pageToken: o
      });
      B(f, d);
      await editorBlockUtilities.clearMarkOrRange({
        block: W,
        mark: r,
        tupleRange: z
      });
      if (stubBooleanFunctions.alwaysFalseCheck(n)) {
        stubBooleanFunctions.emptyStubFunc(d, docBlockTypeConstants.blockTypeConstants.IMAGE, W);
        return;
      }
      let T = await j({
        imageType: Z,
        imageUploader: _,
        imageOriginUrl: F,
        imageURI: U,
        allowMultiple: true
      });
      if (T.length === 0) {
        return;
      }
      let R = T.map(e => docxImageNodeCreator.createImageNodeWithFile(e));
      let D = await Promise.all(R);
      let G = {};
      editorRevisionHandlers.handleAddRevision(d, D, G);
      let {
        model: $
      } = W;
      let {
        parent: H
      } = $;
      if (!H) {
        return;
      }
      let V = H.record.id;
      let K = [];
      let X = d.editorAPI.getService(waitingMonitorService.waitingMonitor);
      if (!docxOfflineImageFlags.isImageEditEnabled) {
        X.add(V);
      }
      let {
        position: q
      } = $;
      let Q = docxOfflineStatusCheck.isDocxOfflineEnabled();
      let Y = [];
      let J = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.UPLOAD_IMAGE, d);
      if (docxOfflineImageFlags.isImageEditEnabled) {
        e = await docxRustFileCopyHandler.copyFilesToDocxRust(T, D, o);
      }
      await blockInsertionHandler.insertBlockHandler({
        blocks: i,
        panelType: n,
        focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
        transactionOptions: Q ? {} : G,
        createDataCallback: i => {
          let {
            op: n,
            blockOps: r
          } = i;
          q = r[2];
          let o = Q ? n.createChildren(D.map(e => Object.assign({
            parent_id: V
          }, e))) : documentBlockOperations.insertNewChildren(n, V, q, D);
          K = o;
          if (Q) {
            Y = docTempTransactionManager.getSecPartyMounts({
              parentRecord: H.record,
              op: n,
              secondPartyRecordIds: K
            });
          }
          let l = d.editorAPI.getService(imageDataCacheStorageToken.imageDataCacheToken);
          K.forEach((i, n) => {
            let r = T[n];
            let o = URL.createObjectURL(r);
            l.addData(i, o);
            if (docxOfflineImageFlags.isImageEditEnabled && e) {
              let r = e[n];
              let {
                size: o,
                name: l,
                width: a,
                height: s,
                mimeType: c
              } = D[n].image;
              J.addStoreData(i, {
                uuid: r,
                size: o,
                name: l,
                width: a,
                height: s,
                type: c
              });
            }
          });
          return {
            createRecordIds: o
          };
        },
        afterTransactionApplied: Q ? () => {
          docTempTransactionManager.execSecondPartyTx({
            secondPartyBlockTempTransactionInfos: Y,
            blockManager: d,
            parentRecordId: V,
            position: q,
            transactionOptions: G
          });
        } : undefined,
        afterTransactionAccepted: () => {
          X.delete(V);
          let e = n === editorUiComponentConstants.uiComponentTypes.Slash ? docPreviewConstants.interactionModes.Slash : docPreviewConstants.interactionModes.SidePanel;
          K.forEach(async (i, n) => {
            let r = `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(i)}`;
            let o = d.getBlockIdsByRecordId(i)[0];
            if (o && T[n]) {
              if (Z === L.IMAGE_URI) {
                await docxImageUploadHandler.bindImageToDoc({
                  blockManager: d,
                  imageUploader: _,
                  targetRecordId: i,
                  imageURI: U ?? "",
                  imageRecordSnapshot: D[n],
                  transactionName: r,
                  source: e
                });
              } else {
                await docxImageUploadHandler.uploadImageAtPlaceholder(d, _, d.editorAPI.getService(imageManagerProviderName.imageManagerName), "uploadImageAfterInsert", o, T[n], e);
              }
            }
          });
        }
      }).catch(e => {
        X.delete(V);
        throw e;
      });
    } catch (e) {
      docxImageUploadHandler.showUploadErrorToast(e, W.hostElement);
    }
  }
  async function F(e) {
    let {
      blocks: i,
      panelType: n,
      mark: r,
      blockManager: g,
      selectionAPI: p,
      isAppend: f,
      generateImage: v,
      imageType: m = L.IMAGE_URI
    } = e;
    if (!(await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.UPLOAD, {
      sync: true
    }))) {
      return;
    }
    let S = documentViewUtils.getParentViewBlock(docBlockViewUtils.getBlockEdge(i, f), g);
    let E = editorZoneRangeUtils.getBlockMarkRange({
      block: S,
      mark: r
    });
    try {
      let e;
      B(p, g);
      await editorBlockUtilities.clearMarkOrRange({
        block: S,
        mark: r,
        tupleRange: E
      });
      if (stubBooleanFunctions.alwaysFalseCheck(n)) {
        stubBooleanFunctions.emptyStubFunc(g, docBlockTypeConstants.blockTypeConstants.IMAGE, S);
        return;
      }
      let o = v();
      let f = [docxImageNodeCreator.createDefaultImageNode({}, {
        width: 820,
        height: 615
      })];
      let _ = {};
      editorRevisionHandlers.handleAddRevision(g, f, _);
      let {
        model: y
      } = S;
      let {
        parent: T
      } = y;
      if (!T) {
        return;
      }
      let R = T.record.id;
      let A = [];
      let x = g.editorAPI.getService(waitingMonitorService.waitingMonitor);
      if (!docxOfflineImageFlags.isImageEditEnabled) {
        x.add(R);
      }
      let N = docxOfflineStatusCheck.isDocxOfflineEnabled();
      let D = [];
      let {
        position: L
      } = y;
      let [, j] = await asyncRetryUtils_1.safeAsyncExec(async () => {
        await blockInsertionHandler.insertBlockHandler({
          blocks: i,
          panelType: n,
          focusType: blockFocusStates.focusStates.NEXT_LINE_FOCUS,
          transactionOptions: N ? {} : _,
          createDataCallback: e => {
            let {
              op: i,
              blockOps: n
            } = e;
            L = n[2];
            let r = N ? i.createChildren(f.map(e => Object.assign({
              parent_id: R
            }, e))) : documentBlockOperations.insertNewChildren(i, R, L, f);
            A = r;
            if (N) {
              D = docTempTransactionManager.getSecPartyMounts({
                parentRecord: T.record,
                op: i,
                secondPartyRecordIds: A
              });
            }
            return {
              createRecordIds: r
            };
          },
          afterTransactionApplied: N ? () => docTempTransactionManager.execSecondPartyTx({
            secondPartyBlockTempTransactionInfos: D,
            blockManager: g,
            parentRecordId: R,
            position: L,
            transactionOptions: _
          }) : undefined,
          afterTransactionAccepted: async () => {
            x.delete(R);
            let i = A[0];
            let s = `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(i)}`;
            let u = g.getBlockIdsByRecordId(i)[0];
            let h = g.getBlockViewsByRecordId(i)[0];
            if (!u || !h) {
              return;
            }
            e = u;
            let [, p] = await asyncRetryUtils_1.safeAsyncExec(async () => {
              h.toggleLoadingGradient(true);
              let e = await o;
              await U({
                blocks: [h],
                panelType: n,
                mark: r,
                blockManager: g,
                imageURI: e.imageURI,
                imageOriginUrl: e.imageOriginUrl,
                imageType: m
              });
              h.toggleLoadingGradient(false);
              docTempTransactionManager.submitTempTx(g, s);
            });
            if (p) {
              docTempTransactionManager.cancelTempTx(g, s);
              if (e && g.hasBlockModelByBlockId(e)) {
                await g.applyTransaction("removeImageUploadPlaceholder", i => {
                  documentBlockOperations.removeBlockItems(i, [e], g);
                }, {
                  undoable: false
                });
              }
            }
          }
        });
      });
      if (j) {
        x.delete(R);
        throw j;
      }
    } catch (e) {
      docxImageUploadHandler.showUploadErrorToast(e, S.hostElement);
    }
  }
  async function U(e) {
    let {
      blocks: i,
      panelType: n,
      mark: r,
      blockManager: s,
      imageURI: h,
      imageOriginUrl: f,
      imageType: _
    } = e;
    if (!(await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.UPLOAD, {
      sync: true
    }))) {
      return;
    }
    let C = i[0];
    let w = editorZoneRangeUtils.getBlockMarkRange({
      block: C,
      mark: r
    });
    let I = [{
      next: async () => {
        let e;
        let i = rootBlockIdExtractor.getRootBlockId(s);
        let n = new docxImageUploadService.DocxImageUploadService({
          pageToken: i
        });
        await editorBlockUtilities.clearMarkOrRange({
          block: C,
          mark: r,
          tupleRange: w
        });
        let [o] = await j({
          imageType: _,
          imageURI: h,
          imageUploader: n,
          imageOriginUrl: f
        });
        if (!o) {
          throw Error("file is empty");
        }
        let l = await docxImageNodeCreator.createImageNodeWithFile(o, {
          align: C.snapshot.align,
          payload: {
            caption: C.snapshot.image.caption
          }
        });
        let a = C.model.record.id;
        let c = s.editorAPI.getService(waitingMonitorService.waitingMonitor);
        if (!docxOfflineImageFlags.isImageEditEnabled) {
          c.add(a);
        }
        let d = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.UPLOAD_IMAGE, s);
        if (docxOfflineImageFlags.isImageEditEnabled) {
          e = await docxRustFileCopyHandler.copyFilesToDocxRust([o], [l], i);
        }
        return {
          imageRecordID: a,
          imageSnapshot: l,
          file: o,
          filePaths: e,
          imageUploader: n,
          resourceManager: d,
          incompleteModelMonitor: c,
          preventRouteChangeId: a,
          imageDataCacheStorage: s.editorAPI.getService(imageDataCacheStorageToken.imageDataCacheToken)
        };
      }
    }, {
      next: e => {
        let {
          file: i,
          imageDataCacheStorage: r,
          imageRecordID: o,
          filePaths: a,
          imageSnapshot: s,
          preventRouteChangeId: d,
          incompleteModelMonitor: h,
          resourceManager: g
        } = e;
        let f = URL.createObjectURL(i);
        r.addData(o, f);
        if (docxOfflineImageFlags.isImageEditEnabled && a) {
          let e = a[0];
          let {
            size: i,
            name: n,
            width: r,
            height: l,
            mimeType: c
          } = s.image;
          g.addStoreData(o, {
            uuid: e,
            size: i,
            name: n,
            width: r,
            height: l,
            type: c
          });
        }
        h.delete(d);
        let v = n === editorUiComponentConstants.uiComponentTypes.Slash ? docPreviewConstants.interactionModes.Slash : docPreviewConstants.interactionModes.SidePanel;
        let m = `${tempTransactionConst.tempTransaction}-${platformDocUtils.p5T(o)}`;
        return Promise.resolve({
          ...e,
          transactionName: m,
          source: v
        });
      },
      onError: (e, i) => {
        i.incompleteModelMonitor.delete(i.preventRouteChangeId);
        throw e;
      }
    }, {
      next: async e => {
        let {
          imageSnapshot: i,
          transactionName: n,
          source: r,
          imageRecordID: o,
          imageUploader: l,
          file: c
        } = e;
        if (_ === L.IMAGE_URI) {
          if (!h) {
            throw Error("IMAGE_URI - imageURI is required");
          }
          await docxImageUploadHandler.bindImageToDoc({
            blockManager: s,
            imageUploader: l,
            targetRecordId: o,
            imageURI: h,
            imageRecordSnapshot: i,
            transactionName: n,
            source: r
          });
        } else {
          await docxImageUploadHandler.reUploadImageAtPlaceholder({
            blockManager: s,
            imageUploader: l,
            imageManager: s.editorAPI.getService(imageManagerProviderName.imageManagerName),
            targetRecordId: o,
            file: c,
            source: r,
            imageRecordSnapshot: i,
            options: {
              caption: i.image.caption
            }
          });
        }
        docTempTransactionManager.submitTempTx(s, n);
      },
      onError: (e, i) => {
        i.incompleteModelMonitor.delete(i.preventRouteChangeId);
        docTempTransactionManager.cancelTempTx(s, i.transactionName);
        throw e;
      }
    }];
    try {
      let e;
      while (I.length) {
        let {
          next: i,
          onError: n
        } = I.shift();
        let [r, o] = await asyncRetryUtils_1.safeAsyncExec(async () => i(e));
        if (o) {
          if (n != null) {
            n(o, e);
          }
          throw o;
        }
        e = r;
      }
    } catch (e) {
      docxImageUploadHandler.showUploadErrorToast(e, C.hostElement);
      throw e;
    }
  }
  require.d(exports, {
    uploadImageBlocks: function () {
      return Z;
    },
    generateUploadImage: function () {
      return F;
    },
    uploadImageUri: function () {
      return U;
    },
    imageUploadTypes: function () {
      return L;
    }
  });
}