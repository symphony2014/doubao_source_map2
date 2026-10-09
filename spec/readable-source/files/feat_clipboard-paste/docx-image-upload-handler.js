// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'te' to 'reUploadImageAtPlaceholder'
// - Renamed export 'WX' to 'handlePasteImageUpload'
// - Renamed export 'LH' to 'setImageUploadBackground'
// - Renamed export 'YO' to 'getUploadErrorMessage'
// - Renamed export 'Pr' to 'bindImageToDoc'
// - Renamed export 'hL' to 'showUploadErrorToast'
// - Renamed export 'Ve' to 'setTempImageInfo'
// - Renamed export 'Es' to 'uploadImageAtPlaceholder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 8997
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var l;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var externalImageUploadTaskManager = require("external-image-upload-task-manager") /*id: 271525*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  var docTempTransactionManager = require("doc-temp-transaction-manager") /*id: 633045*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var asyncRetryUtils_1 = require("async-retry-utils_1") /*id: 989891*/;
  var docxImageNodeCreator = require("docx-image-node-creator") /*id: 41944*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  (o = {})[o.DOC_UPLOAD = 0] = "DOC_UPLOAD";
  o[o.DRIVE_UPLOAD = 1] = "DRIVE_UPLOAD";
  let y = o;
  (i = {})[i.local_file_is_not_exist = 1001] = "local_file_is_not_exist";
  i[i.no_network = 1007] = "no_network";
  i[i.no_permission = 2004] = "no_permission";
  i[i.file_is_deleted = 3002] = "file_is_deleted";
  i[i.overload = 13001] = "overload";
  i[i.cancel_upload = 1000] = "cancel_upload";
  let b = i;
  let _ = {
    [b.local_file_is_not_exist]: t("CreationMobile_Upload_Error_File_Deleted_Tips"),
    [b.file_is_deleted]: t("CreationMobile_Upload_Error_File_Deleted_Tips"),
    [b.overload]: t("common.sp_storage_usage_limitation_body"),
    [b.no_permission]: t("drive.upload_drag_tip_no_permission"),
    [b.no_network]: t("common.upload_fail_network")
  };
  ({
    ..._,
    [b.no_network]: t("LarkCCM_Docx_Image_EditImage_FailedNoNet_Toast")
  });
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var aiWritingConstants = require("ai-writing-constants") /*id: 151614*/;
  var documentImageUtils = require("document-image-utils") /*id: 606561*/;
  (l = B || {})[l.Image = 1] = "Image";
  l[l.File = 2] = "File";
  l[l.VideoCloud = 3] = "VideoCloud";
  var B = l;
  function x(e, r, n) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = n;
    }
    return e;
  }
  class A {
    unbindEvent() {
      window.removeEventListener("online", this.reuploadFile);
    }
    restoreUploadParams() {
      this.uploadParams = this.cacheUploadParams;
    }
    generateUploadParams(e, r = {}) {
      let {
        uuid: n,
        src: o,
        fileName: i,
        fileSize: l,
        contentType: a,
        isFolderBlockScene: s
      } = this.thumb;
      return {
        ...r,
        uuids: [n],
        url: "/space/api/box/upload/prepare/",
        file_url: o,
        doc_url: window.location.href,
        token: this.pageToken,
        contentType: a,
        multiparts: {
          token: this.pageToken,
          obj_type: fileTypeConstants.BasicFileType.DOCX
        },
        uploadType: y.DRIVE_UPLOAD,
        uploadParams: {
          mount_point: this.mountPoitnType,
          mount_node_token: this.recordId,
          extraParams: {
            drive_route_token: this.pageToken
          },
          size: l,
          name: i || "",
          isFolderBlockScene: s
        },
        fileName: i || "",
        progress: !!this.needProgress,
        callback: r => {
          if (r && r.code === b.no_network) {
            this.restoreUploadParams();
            return;
          }
          this.uploadParams = null;
          this.unbindEvent();
          e(r);
        }
      };
    }
    async uploadFile(e, r) {
      let {
        uuid: n
      } = this.thumb;
      let {
        showToast: o,
        EToastType: i
      } = docComponentStubConfig.toastStub;
      let l = this.generateUploadParams(n => {
        let l = r == null ? undefined : r.hideErrorToas;
        if (n && n.code && !l) {
          o({
            type: i.FAIL,
            message: _[n.code] || t("Doc_Facade_UploadFail"),
            duration: 3
          });
        }
        e(n);
      }, r);
      this.cacheUploadParams = l;
      this.upload(l);
    }
    upload(e) {
      (function (e) {
        let {
          token: r,
          contentType: n,
          fileName: o,
          callback: i
        } = e;
        window.flow.biz.util.uploadFile({
          ...e,
          callback: e => {
            let a = 0;
            if (e == null ? undefined : e.data?.uri) {
              let l = diContainerInstance.diContainer.get(docFileUtilsSymbol.docFileUtilsSymbol).getFileExt(o);
              otterDocApiServiceDi.getOtterDocService().AgwBindAttachment({
                title: o,
                page_token: r,
                uri: e == null ? undefined : e.data.uri,
                type: (n == null ? undefined : n.startsWith("image")) ? B.Image : (n == null ? undefined : n.startsWith("video")) ? B.VideoCloud : B.File,
                source: aiWritingConstants.contentSource.UserUpload,
                format: l
              }).then(async r => {
                let o = (r == null ? undefined : r.data?.key) || "";
                let l = async () => {
                  let n = [];
                  try {
                    n = await documentImageUtils.fetchAttachments([{
                      file_token: o,
                      platform: "",
                      type: ""
                    }]);
                  } catch {}
                  if (n == null ? undefined : n[0]?.url) {
                    i({
                      ...e,
                      data: {
                        ...(e.data || {}),
                        token: o
                      }
                    });
                  } else if (a < 3) {
                    a++;
                    setTimeout(() => {
                      l();
                    }, 500);
                  } else {
                    i({
                      ...e,
                      code: 1
                    });
                  }
                };
                l();
              });
            } else {
              i(e);
            }
          }
        });
      })(e);
    }
    constructor(e, r, n, o, i) {
      this.thumb = e;
      this.recordId = r;
      this.mountPoitnType = n;
      this.pageToken = o;
      this.needProgress = i;
      x(this, "cacheUploadParams", null);
      x(this, "uploadParams", null);
      x(this, "reuploadFile", () => {
        if (this.uploadParams) {
          this.upload(this.uploadParams);
        }
      });
      window.addEventListener("online", this.reuploadFile);
    }
  }
  var docxImageUploadService = require("docx-image-upload-service") /*id: 691820*/;
  var docPreviewConstants = require("doc-preview-constants") /*id: 162554*/;
  var clipboardSecurityChecker = require("clipboard-security-checker") /*id: 991067*/;
  var docxClipboardHandler_1 = require("docx-clipboard-handler_1") /*id: 191387*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineStoreManager = require("docx-offline-store-manager") /*id: 218533*/;
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  var waitingMonitorService = require("waiting-monitor-service") /*id: 622032*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxImageUtils = require("docx-image-utils") /*id: 164286*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var docxFileAttachmentHandler = require("docx-file-attachment-handler") /*id: 356160*/;
  var rootBlockIdExtractor = require("root-block-id-extractor") /*id: 274051*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var toastNotificationHandler = require("toast-notification-handler") /*id: 669090*/;
  var networkStateErrorHandler = require("network-state-error-handler") /*id: 309691*/;
  var docTokenPasteUtils = require("doc-token-paste-utils") /*id: 786413*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var toastManagerWrapper = require("toast-manager-wrapper") /*id: 55407*/;
  async function et(e, r, n, o, i, l, a, d, u) {
    await new Promise(e => setTimeout(e));
    let h = e.getBlockModelByBlockIdNotCheck(i);
    if (!h) {
      return;
    }
    let g = "";
    try {
      let c;
      let u = e.editorAPI.getService(waitingMonitorService.waitingMonitor, {
        optional: true
      });
      let m = n.collectorManager.get(i);
      let {
        recordId: k
      } = h;
      try {
        let r = await new Promise((e, r) => {
          let n = new FileReader();
          n.readAsDataURL(l);
          n.onload = () => e(n.result);
          n.onerror = e => r(e);
        });
        e.getBlockViewByBlockId(i).setUploadBackground(r);
      } catch (e) {}
      m.logUploadImageStart(k, l.size, l.type, a);
      let T = performance.now();
      if (!docxOfflineImageFlags.isImageEditEnabled && u != null) {
        u.add(k);
      }
      try {
        let {
          editorAPI: n
        } = e;
        let o = syncedReferenceBlockUtils.isChangeFromCurrentEditor_1(n) || docTokenHelperUtils.resolveDocToken();
        c = await r.uploadImage({
          file: l,
          blockRecordId: k,
          routeToken: o,
          onProgress: (r, n) => {
            let o = e.getBlockViewsByRecordId(k)[0];
            if (o) {
              o.setUploadProgress(r);
            } else if (!e.getBlockModelsByRecordId(k)[0]) {
              n.cancelAll();
              if (u != null) {
                u.delete(k);
              }
            }
          },
          onComplete: r => {
            let n = e.getBlockViewsByRecordId(k)[0];
            if (n) {
              n.setUploadProgress(r);
            }
          }
        });
        if (d) {
          c.scale = d.scale || c.scale;
          c.caption = d.caption || c.caption;
        }
        g = c.token;
        m.logUploadImageEnd({
          blockId: k,
          size: l.size,
          type: l.type,
          source: a,
          fileToken: c.token,
          isSuccess: true,
          startTime: T
        });
      } catch (e) {
        if (u != null) {
          u.delete(k);
        }
        m.logUploadImageEnd({
          blockId: k,
          size: l.size,
          type: l.type,
          source: a,
          isSuccess: false,
          startTime: T,
          errorMsg: e instanceof Error ? e.message : e
        });
        throw e;
      }
      if (u != null) {
        u.delete(k);
      }
      if (!e.hasBlockModelByBlockId(i) && (!e.hasRecordByRecordId(k) || !(i = e.getBlockIdsByRecordId(k)[0]))) {
        return;
      }
      await e.applyTransaction(o, e => {
        e.replace(k, ["image"], c);
      }, {
        from: collaborativeEditingFlowSyncModule.kq.LOCAL,
        undoable: false
      });
      docTempTransactionManager.submitTempTx(e, docTempTransactionManager.getTempTxId(k));
    } catch (n) {
      if (u !== false && e.hasBlockModelByBlockId(i)) {
        await e.applyTransaction("removeImageUploadPlaceholder", r => {
          documentBlockOperations.removeBlockItems(r, [i], e);
        }, {
          undoable: false
        });
        let {
          message: r
        } = n;
        if (r === docApiConstants.driveErrors.USER_DRIVE.toString() || r === docApiConstants.driveErrors.USER_NO_DRIVE.toString() || r === docApiConstants.driveErrors.SPACE.toString()) {
          return;
        }
        toastNotificationHandler.showToast({
          pcToastType: "error",
          mobileToastType: "fail",
          message: ed(n),
          duration: 5000
        });
      }
      let {
        recordId: r
      } = h;
      docTempTransactionManager.cancelTempTx(e, docTempTransactionManager.getTempTxId(r));
      throw n;
    } finally {
      let r = docxOfflineStoreManager.DocxOfflineManager.getInstance(docBlockActionConstants.offlineDataKeys.UPLOAD_IMAGE, e);
      let {
        recordId: n
      } = h;
      let o = r.tempCacheData?.[n];
      if ((o == null ? undefined : o.uuid) && g) {
        docxRustFileOperations.updateFileToken(o.uuid, g);
      }
      if (networkStateEventCollector.collectNetworkState()) {
        r.deleteStoreDataKey(n);
      }
    }
  }
  async function er(e) {
    let {
      fileToken: r,
      blockManager: n,
      recordId: o,
      transactionName: i,
      needCopyImage: l,
      sourcePageToken: a
    } = e;
    let s = n.rootRecordId;
    let c = r;
    if (l) {
      c = (await docxApiConstantsExports.docxApiService.resourceCopyTo([r], o, docApiConstants.fileTypes.IMAGE, s, a)).data.succ_files[r];
    }
    await n.applyTransaction(i, e => {
      e.replace(o, ["image", "token"], c);
    }, {
      undoable: false
    });
    let d = n.getBlockViewsByRecordId(o)[0];
    if (d) {
      d.setUploadProgress(1);
    }
  }
  async function en(e) {
    let {
      blockManager: r,
      imageManager: n,
      recordId: o,
      payload: i,
      pasteRootId: l,
      onError: s,
      onSucess: c,
      onFinally: h
    } = e;
    let {
      driveToken: p,
      src: f,
      image: g,
      file: m,
      uuid: k,
      imFileKey: T
    } = i;
    let v = p;
    let y = new docxImageUploadService.DocxImageUploadService({
      pageToken: r.editorAPI.config.get("token")
    });
    let b = true;
    try {
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "docx_image_upload",
        stage: "handlePasteImageUpload",
        info: JSON.stringify({
          imFileKey: T,
          fileToken: v,
          src: f,
          image: g,
          uuid: k,
          file: !!m
        })
      });
      let e = await docActionManager.defaultActionMgr.checkAction(docActionManager.actionConstants.UPLOAD);
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "docx_image_upload",
        info: JSON.stringify({
          stage: "checkPermission",
          dlpPermission: e
        })
      });
      if (!e) {
        b = false;
        throw Error("admin disable upload file permission");
      }
      let s = docxClipboardHandler_1.DocxClipboardHandler.LarkResourceExternalUrlForCopy[(g == null ? undefined : g.token) || (i == null ? undefined : i.driveToken) || ""];
      if (s) {
        let e = r.getBlockIdsByRecordId(o)[0];
        b = false;
        await ei({
          blockManager: r,
          imageManager: n,
          blockId: e,
          recordId: o,
          src: xssContentSanitizer.sanitizeUrl(s, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$XpreFpFZHNjMk41T1R*alIzaDJX$mRSZFdSS$Rta*pi$1F4WTNjO$BRPT0"
          }),
          imageUploader: y
        });
        if (c != null) {
          c();
        }
        return;
      }
      if (T) {
        v = await docTokenPasteUtils.processDocTokenPaste(T, r, o, docApiConstants.fileTypes.IMAGE);
      }
      if (g) {
        await er({
          fileToken: g.token,
          blockManager: r,
          recordId: o,
          transactionName: "replaceImageToken",
          needCopyImage: true,
          sourcePageToken: l
        });
        if (c != null) {
          c();
        }
        return;
      }
      if (v) {
        await er({
          fileToken: v,
          blockManager: r,
          recordId: o,
          transactionName: "replaceImageToken2",
          needCopyImage: true,
          sourcePageToken: l
        });
        if (c != null) {
          c();
        }
        return;
      }
      if (m) {
        await eo({
          blockManager: r,
          imageManager: n,
          recordId: o,
          file: m,
          imageUploader: y,
          source: docPreviewConstants.interactionModes.Paste
        });
        if (c != null) {
          c();
        }
        return;
      }
      if (f) {
        if (f.startsWith("file://")) {
          throw Error("[image] paste image failed, invalid source url which starts with file://");
        }
        if (docxImageUrlUtils.isBase64Image(f)) {
          let e = docxImageUrlUtils.dataURLToFile(f);
          await eo({
            blockManager: r,
            imageManager: n,
            recordId: o,
            file: e,
            imageUploader: y,
            source: docPreviewConstants.interactionModes.Paste
          });
          if (c != null) {
            c();
          }
          return;
        }
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile && f.startsWith("docsource://")) {
          new A({
            src: f,
            uuid: k || ""
          }, o, docApiConstants.fileTypes.IMAGE, rootBlockIdExtractor.getRootBlockId(r)).uploadFile(e => {
            if (!e || e.code) {
              throw Error(e == null ? undefined : e.message);
            }
            er({
              fileToken: e.data.token,
              blockManager: r,
              recordId: o,
              transactionName: "flowbaseRecordOnPaste",
              needCopyImage: true,
              sourcePageToken: l
            });
          });
          if (c != null) {
            c();
          }
          return;
        }
        let e = r.getBlockIdsByRecordId(o)[0];
        b = false;
        await ei({
          blockManager: r,
          imageManager: n,
          blockId: e,
          recordId: o,
          src: f,
          imageUploader: y
        });
        if (c != null) {
          c();
        }
        return;
      }
    } catch (i) {
      r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
        action: "docx_ccm_clipboard_security_paste",
        info: JSON.stringify({
          isPasteFromIM: !!T,
          errorCode: i == null ? undefined : i.code,
          msg: i.message,
          source: "imageCopyTo"
        })
      });
      let e = syncedReferenceBlockUtils.getBlockTokenWithFallback(r.editorAPI);
      if (i.code === docxViewConfigConstants.constant4 && clipboardSecurityChecker.getClipboardEnable(e)) {
        b = false;
        toastManagerWrapper.showToast({
          type: "error",
          content: t("LarkCCM_Workspace_InTextCopyOnly_Failed_Toast")
        });
      }
      let n = r.getBlockIdsByRecordId(o)[0];
      if (r.hasBlockModelByBlockId(n)) {
        let e = r.getBlockModelByBlockId(n);
        await r.applyTransaction("removeImageUploadPlaceholder", r => {
          if (e.parent) {
            r.removeChildren(e.parent.record.id, [o]);
          }
        }, {
          undoable: false
        });
        if (b) {
          (function (e, r) {
            if (r.code === docApiConstants.driveErrors.COPY_ATTACHMENT && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              if (platformDocUtils.k2r !== null && platformDocUtils.k2r !== undefined) {
                platformDocUtils.k2r(platformDocUtils.P4G.STORAGE_SPACE, {
                  type: platformDocUtils.UdD.UPLOAD_FILE
                });
              }
              return;
            }
            if ((r.code === docApiConstants.driveErrors.USER_NO_DRIVE || r.code === docApiConstants.driveErrors.USER_DRIVE) && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              if (platformDocUtils.Qrp) {
                platformDocUtils.Qrp(docApiConstants.fileTypes.IMAGE);
              }
              return;
            }
            if (r.code === docApiConstants.driveErrors.SPACE && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
              if (platformDocUtils.k2r !== null && platformDocUtils.k2r !== undefined) {
                platformDocUtils.k2r(platformDocUtils.P4G.STORAGE_SPACE, {
                  type: platformDocUtils.UdD.UPLOAD_FILE
                });
              }
              return;
            }
            if (!docxFileAttachmentHandler.handleCrossOperationError(r)) {
              if (e && e.startsWith("file://")) {
                toastNotificationHandler.showToast({
                  pcToastType: "error",
                  mobileToastType: "fail",
                  message: t("CreationDoc_DocX_Paste_FromLocalFailed_retry_toast"),
                  duration: 5000
                });
                return;
              }
              if (!networkStateErrorHandler.handleNetworkError(t("etherpad.upload_failed"))) {
                toastNotificationHandler.showToast({
                  pcToastType: "error",
                  mobileToastType: "fail",
                  message: t("common.upload_image_failed"),
                  duration: 5000
                });
              }
            }
          })(f, i);
        }
      }
      if (s) {
        s(i);
      }
    } finally {
      if (h) {
        h();
      }
    }
  }
  async function eo(e) {
    let {
      blockManager: r,
      file: n,
      imageUploader: o,
      imageManager: i,
      source: l,
      recordId: a
    } = e;
    let s = r.getBlockIdsByRecordId(a)[0];
    let c = r.getBlockModelByBlockId(s).record.snapshot;
    let d = c ? c.image.scale : 1;
    r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
      action: "docx_image_upload",
      info: JSON.stringify({
        stage: "beforeCreateSnapshotWithFile"
      })
    });
    let u = await docxImageNodeCreator.createImageNodeWithFile(n);
    u.image.scale = d;
    r.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
      action: "docx_image_upload",
      info: JSON.stringify({
        stage: "afterCreateSnapshotWithFile",
        snapshot: u
      })
    });
    await r.applyTransaction("replaceImageInfo", e => {
      e.replace(a, ["image"], u.image);
    }, {
      undoable: false
    });
    await et(r, o, i, "uploadImageAtPlaceholder", s, n, l, {
      scale: d
    });
  }
  async function ei(e) {
    let {
      blockManager: r,
      imageManager: n,
      blockId: o,
      recordId: i,
      src: l,
      imageUploader: a
    } = e;
    let c = r.getBlockViewByBlockIdNotCheck(o);
    if (!docxImageUtils.isWechatMediaUrl(l)) {
      let e = await docxImageUrlUtils.getImageSize(l);
      if (c != null) {
        c.setExternalImageState(l, e);
      }
    }
    return new Promise((e, d) => {
      n.externalSaver.addTask(o, i, l, async (n, o) => {
        var u;
        var p;
        if (n !== externalImageUploadTaskManager.UploadTaskStatus.SUCCESS || !o) {
          d(Error("[image] save external image fail"));
          return;
        }
        let f = ((p = (await asyncRetryUtils_1.retryUntilSuccess({
          value: () => otterDocApiServiceDi.getOtterDocService().AgwMGetAttachment({
            page_token: docTokenHelperUtils.resolveDocToken(),
            keys: [o]
          }),
          ifRetry: e => {
            var n;
            return !((n = e.data) === null || n === undefined ? undefined : n.attachments?.length);
          },
          count: 3
        })).data) === null || p === undefined ? undefined : (u = p.attachments) === null || u === undefined ? undefined : u[0]?.url) || "";
        let T = await a.downloadImage(f, false);
        if (!T) {
          d(Error("[image] save external image fail"));
          return;
        }
        let v = await docxImageNodeCreator.createImageNodeWithFile(T);
        Object.assign(v.image, {
          token: o
        });
        await r.applyTransaction("replaceImageInfoOnSuccess", e => {
          e.replace(i, ["image"], v.image);
        }, {
          from: collaborativeEditingFlowSyncModule.kq.LOCAL,
          undoable: false
        });
        if (c != null) {
          c.loadImage(true);
        }
        if (c != null) {
          c.hideExternalMask();
        }
        e();
      });
    });
  }
  async function el(e, r, n) {
    let {
      image: o,
      driveToken: i,
      src: l,
      uuid: a
    } = n;
    if (o) {
      let {
        token: n,
        width: i,
        height: l,
        mimeType: a,
        scale: s
      } = o;
      let d = networkStateEventCollector.collectNetworkState();
      if (docxOfflineImageFlags.isImageShowEnabled) {
        d = await docxRustFileOperations.isImageExist(n);
      }
      if (d) {
        if (e != null) {
          e.setUploadBackground(docxImageUrlUtils.getImageUrl({
            fileId: n,
            recordId: r,
            width: i,
            height: l,
            scale: s,
            imageType: a
          }));
        }
      }
    } else if (i && l) {
      if (e != null) {
        e.setUploadBackground(l);
      }
    } else if (browserEnvironmentDetectionUtils.browserDetector.isMobile && l && l.startsWith("docsource://")) {
      if (e != null) {
        e.setUploadBackground(l);
      }
    } else if (a && docxOfflineImageFlags.isImageShowEnabled) {
      let {
        type: o
      } = n;
      let i = `${location.origin}/file/f/${a}?obj_type=22&obj_token=${docTokenHelperUtils.resolveDocToken()}`;
      if (o) {
        let e = encodeURIComponent(o);
        i = `${i}&mime_type=${e}`;
      }
      let l = `cache-resource://sdk/image?biz=ccm&key=${a}&origin_url=${encodeURIComponent(i)}`;
      docxImageUrlUtils.logOfflineEvent("load_image", r);
      if (e != null) {
        e.setUploadBackground(l);
      }
    }
  }
  function ea(e, r) {
    e.cleanImageInfo();
    e.setTempImageInfo({
      width: parseInt(`${r.width}`),
      height: parseInt(`${r.height}`),
      crop: docxEditorConstants.editorPadding
    });
    e.setUploadBackground(r.src);
    e.setUploadProgress(0);
  }
  function es(e) {
    e.setTempImageInfo(undefined);
  }
  function ec(e, r) {
    if (e.message !== `${docApiConstants.driveErrors.SPACE}` && e.message !== `${docApiConstants.driveErrors.USER_DRIVE}` && e.message !== `${docApiConstants.driveErrors.USER_NO_DRIVE}`) {
      toastManagerWrapper.showToast({
        type: "error",
        content: ed(e),
        dom: r
      });
    }
  }
  function ed(e) {
    let r = "";
    if (e.msg === docxImageUploadService.imageUploadErrorToastKey) {
      r = docxImageUploadService.imageUploadErrorToastKey;
    }
    return r || `${t("common.upload_image_failed")} ${String(e.msg || "")}`;
  }
  async function eu(e) {
    let {
      blockManager: r,
      targetRecordId: n,
      imageUploader: o,
      file: i,
      imageRecordSnapshot: l,
      imageManager: s,
      source: c,
      options: d
    } = e;
    let u = r.getBlockViewsByRecordId(n);
    let h = r.getBlockIdsByRecordId(n)[0];
    if (u.length === 0 || !h || !i) {
      return;
    }
    let p = u[0];
    let f = p.model.snapshot.image;
    ea(p, {
      width: l.image.width / f.scale,
      height: l.image.height / f.scale,
      src: xssContentSanitizer.sanitizeUrl(l.image.src, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$XpreFpFZHNjMk41T1R*alIzaDJX$mRSZFdSS$Rta*pi$1F4WTNjO$BRPT0"
      })
    });
    try {
      await et(r, o, s, "reUploadImageAtPlaceholder", h, i, c, d, false);
    } catch (e) {
      p.loadImage(true);
      throw e;
    } finally {
      es(p);
    }
  }
  async function eh(e) {
    let {
      blockManager: r,
      targetRecordId: n,
      imageUploader: o,
      imageURI: i,
      imageRecordSnapshot: l,
      options: c,
      transactionName: d
    } = e;
    let u = r.getBlockViewsByRecordId(n);
    let h = r.getBlockIdsByRecordId(n)[0];
    if (u.length === 0 || !h || !i) {
      return;
    }
    let f = r.editorAPI.getService(waitingMonitorService.waitingMonitor, {
      optional: true
    });
    if (!docxOfflineImageFlags.isImageEditEnabled && f != null) {
      f.add(n);
    }
    let g = u[0];
    let m = g.model.snapshot.image;
    try {
      let {
        image: e
      } = l;
      ea(g, {
        width: e.width / m.scale,
        height: e.height / m.scale,
        src: xssContentSanitizer.sanitizeUrl(e.src, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrNWNHSlhSbT$h$XpreFpFZHNjMk41T1R*alIzaDJX$mRSZFdSS$Rta*pi$1F4WTNjO$BRPT0"
        })
      });
      let u = r.rootRecordId;
      let h = await o.bindImageToDoc({
        uri: i,
        page_token: u
      });
      if (c == null ? undefined : c.scale) {
        e.scale = c.scale;
      }
      e.token = h;
      await r.applyTransaction(d, r => {
        r.replace(n, ["image"], e);
      }, {
        from: collaborativeEditingFlowSyncModule.kq.LOCAL,
        undoable: false
      });
    } catch (e) {
      g.loadImage(true);
      throw e;
    } finally {
      es(g);
      if (f != null) {
        f.delete(n);
      }
    }
  }
  require.d(exports, {
    reUploadImageAtPlaceholder: function () {
      return eu;
    },
    handlePasteImageUpload: function () {
      return en;
    },
    setImageUploadBackground: function () {
      return el;
    },
    getUploadErrorMessage: function () {
      return ed;
    },
    bindImageToDoc: function () {
      return eh;
    },
    showUploadErrorToast: function () {
      return ec;
    },
    setTempImageInfo: function () {
      return ea;
    },
    uploadImageAtPlaceholder: function () {
      return et;
    }
  });
}