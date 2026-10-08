// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zo' to 'coverActionTypes'
// - Renamed export 'un' to 'docCoverSelector'
// - Renamed export 'ZP' to 'DocxCoverManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 347206
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var docCoverConstantsSelector = require("doc-cover-constants-selector") /*id: 870484*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var storeCoverActionsMap = require("store-cover-actions-map") /*id: 535604*/;
  var coverSourceType = require("cover-source-type") /*id: 650732*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var docCoverEventTracker = require("doc-cover-event-tracker") /*id: 746198*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var larkCcmOwnerExpiredConstants = require("lark-ccm-owner-expired-constants") /*id: 442235*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxCoverSelectors = require("docx-cover-selectors") /*id: 784702*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxErrorDebugUtils = require("docx-error-debug-utils") /*id: 899478*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var flowSourceUrlValidator = require("flow-source-url-validator") /*id: 352044*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxApiConstantsExports = require("docx-api-constants-exports") /*id: 81404*/;
  (o = {})[o.SUCCESS = 0] = "SUCCESS";
  o[o.FAIL = 1] = "FAIL";
  o[o.FILE_DELETED = 90003032] = "FILE_DELETED";
  o[o.FILE_QUOTA_EXCEEDED = 90003081] = "FILE_QUOTA_EXCEEDED";
  o[o.ATTCHMENT_LIMITATION = 90015407] = "ATTCHMENT_LIMITATION";
  let N = o;
  (i = {})[i.SUCCESS = 0] = "SUCCESS";
  i[i.FAIL_OFFLINE = 1] = "FAIL_OFFLINE";
  i[i.FAIL_COPY_TOKEN = 2] = "FAIL_COPY_TOKEN";
  i[i.FAIL_CLINET_PARAMSTYPE_ERROR = 3] = "FAIL_CLINET_PARAMSTYPE_ERROR";
  i[i.FAIL_UPLOAD_IMAGE = 4] = "FAIL_UPLOAD_IMAGE";
  i[i.FAIL_CONFLICT = 5] = "FAIL_CONFLICT";
  i[i.FAIL_UNKNOWN = 6] = "FAIL_UNKNOWN";
  i[i.FAIL_AUTHORITY_CHANGE = 7] = "FAIL_AUTHORITY_CHANGE";
  i[i.FAKE_TOKEN = 8] = "FAKE_TOKEN";
  let B = i;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  let w = {
    [docApiConstants.capacityLimits.TENANT_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_SPACE,
    [docApiConstants.capacityLimits.USER_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_USER,
    [docApiConstants.capacityLimits.DEPARTMENT_CAPACITY_LIMIT]: platformDocUtils.P4G.STORAGE_DEPARTMENT
  };
  let M = e => e === docApiConstants.driveErrors.SPACE || e === docApiConstants.driveErrors.DOCS_SIZE_LIMIT ? (platformDocUtils.k2r && platformDocUtils.k2r(platformDocUtils.P4G.STORAGE_SPACE, {
    type: platformDocUtils.UdD.UPLOAD_FILE
  }), true) : e === docApiConstants.driveErrors.USER_NO_DRIVE || e === docApiConstants.driveErrors.USER_DRIVE ? (platformDocUtils.Qrp && platformDocUtils.Qrp(docApiConstants.fileTypes.IMAGE), true) : !!docApiConstants.capacityLimitCodes.includes(e) && (platformDocUtils.k2r && platformDocUtils.k2r(w[e], {
    type: "docx",
    mountNodeToken: docTokenManager.getDocToken(),
    mountPoint: docApiConstants.fileTypes.FILE
  }), true);
  var coverImageUrlUtils = require("cover-image-url-utils") /*id: 604470*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function x(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  class U {
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
      docxEditorEventConstantsAndManager.globalEventBus.off(docCoverConstantsSelector.coverActionTypes.UPDATE_COVER_POSITION, this.handleUpdateCoverPosition);
      docxEditorEventConstantsAndManager.globalEventBus.off(docCoverConstantsSelector.coverActionTypes.REMOVE_ALL_SELECTION, this.handleRemoveAllSelection);
      if (docxShortcutFeatureDetection.isShortcutEnabled()) {
        window.removeEventListener("clear", this.clearCoverInfo);
      }
      this.coverInfo = null;
      this.tokenToSrcMap = {};
      this.cancelCoverUpload();
      this.clearCoverInfo();
    }
    isCoverUploading() {
      return docxCoverSelectors.getIsUploading(reduxStoreInitializer.reduxStore.getState());
    }
    cancelCoverUpload() {
      reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.uploadCoverCancel());
    }
    collectChangeCover(e, n = {}, r) {
      let {
        err: o,
        error: i
      } = n;
      switch (e) {
        case B.FAIL_CONFLICT:
          break;
        case B.SUCCESS:
          if (this.isCoverUploading()) {
            this.cancelCoverUpload();
          }
          break;
        default:
          {
            let n;
            let r = [B.FAIL_OFFLINE, B.FAKE_TOKEN].includes(e);
            let l = e === B.FAIL_UPLOAD_IMAGE && o ? o : r ? t("CreationDoc_Docs_DocCover_NoInternetConnection_Toast") : t("CreationDoc_Docs_DocCover_FailedToModify_Toast");
            if (!r) {
              let e = Error("collectChangeCover failed");
              n = docxErrorDebugUtils.createErrorObject(i || e, e);
            }
            let c = Number((i == null ? undefined : i.code) || (i == null ? undefined : i.message));
            if (c === larkCcmOwnerExpiredConstants.ownerExpiredId) {
              l = larkCcmOwnerExpiredConstants.ownerExpiredTooltip;
            }
            if (!M(c)) {
              docxErrorToastHandler.handleDocxToast({
                type: "error",
                key: "cover_error_tips",
                content: reactJsxRuntimeCoreReexport.jsx("div", {
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: l
                }),
                duration: 3000,
                errorContext: n
              });
            }
            if (!r) {
              reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setCoverInfo(this.coverInfo));
            }
            reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.uploadCoverFail());
          }
      }
      if (r) {
        Object.assign(n, {
          backend_status_code: r
        });
      }
      if (e !== B.SUCCESS) {
        Object.assign(n, {
          load_status: "set_fail"
        });
      }
      docCoverEventTracker.DocCoverEventTracker.applyCover({
        ...n,
        frontend_status_code: e
      }, e !== B.SUCCESS);
    }
    applyDocCover(e = "", n, r) {
      let o = e && n ? {
        [coverImageUrlUtils.getCoverSourceKey(n)]: e,
        type: n,
        offset_ratio_x: 0,
        offset_ratio_y: 0,
        mime_type: r || "image/jpeg",
        dlp_status: 0
      } : null;
      this.blockManager.applyTransaction("handlePageCoverChange", e => {
        e.replace(this.pageToken, ["cover"], o);
      });
    }
    updateCoverInfo(e) {
      reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setCoverInfo(e ? {
        ...e
      } : e));
    }
    updateDlpStatus(e) {
      reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.setDlpStatus(e));
    }
    checkCoverUploadStatus(e) {
      return !!this.isCoverUploading() || (this.collectChangeCover(B.FAIL_CONFLICT, e), false);
    }
    checkEditableStatus(e) {
      return !!this.editable || (this.collectChangeCover(B.FAIL_AUTHORITY_CHANGE, e), false);
    }
    getCommonCollectParam(e = {}) {
      let {
        coverId: n,
        type: r,
        coverSource: o,
        series: i = "",
        contentType: l = ""
      } = e;
      let c = {
        action_type: o,
        cover_style: "upload",
        cover_id: "upload",
        pic_file_type: l
      };
      if (r === coverSourceType.coverSourceType.Preset || r === coverSourceType.coverSourceType.AICover) {
        c.cover_style = i;
        c.cover_id = n;
      }
      return c;
    }
    constructor({
      blockManager: e,
      pageToken: n,
      editable: r,
      selectionAPI: o
    }) {
      x(this, "blockManager", undefined);
      x(this, "pageToken", undefined);
      x(this, "coverInfo", null);
      x(this, "tokenToSrcMap", {});
      x(this, "fileSrc", "");
      x(this, "editable", undefined);
      x(this, "selectionAPI", undefined);
      x(this, "subs", undefined);
      x(this, "getRealPageToken", () => this.pageToken);
      x(this, "handleEditableChange", e => {
        this.editable = e;
      });
      x(this, "handleEditorReady", () => {
        let e = this.blockManager.structService.root;
        e.addDataListener(this.handleCoverUpdate);
        this.subs.push(new subscriptionCore.Subscription(() => {
          e.removeDataListener(this.handleCoverUpdate);
        }));
        this.handleCoverUpdate();
      });
      x(this, "handleCoverUpdate", async () => {
        try {
          let e = this.blockManager.structService.root;
          if (!e) {
            return;
          }
          let {
            snapshot: n
          } = e;
          let r = n.cover;
          let o = coverImageUrlUtils.isValidCoverSource(r);
          let i = o ? this.tokenToSrcMap[r.token] || coverImageUrlUtils.getCoverImageUrl(r) : "";
          let l = o ? {
            type: r.type,
            offset_ratio_x: r.offset_ratio_x,
            offset_ratio_y: r.offset_ratio_y,
            [coverImageUrlUtils.getCoverSourceKey(r.type)]: coverImageUrlUtils.getCoverSourceValue(r),
            src: i,
            lightSrc: coverImageUrlUtils.getCoverImageUrlFromSource(r),
            mime_type: r.mime_type,
            status: r.status
          } : null;
          this.reportUpdateCoverInfo(o, r, i, l);
          if (deepEqualUtil_1.deepEqual(this.coverInfo, l)) {
            return;
          }
          let {
            dlpStatus: c,
            coverInfo: a
          } = reduxStoreInitializer.reduxStore.getState().docx.cover;
          if (c !== null && this.tokenToSrcMap[a == null ? undefined : a.token]) {
            this.tokenToSrcMap[a.token] = undefined;
          }
          this.updateDlpStatus(null);
          this.coverInfo = l;
          this.updateCoverInfo(this.coverInfo);
          if (this.isCoverUploading()) {
            if (docxFeatureFlags.isDlpUploadEnabled() && l) {
              let e = coverImageUrlUtils.getCoverImageUrl(l) || "";
              if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
                window.flow.biz.util.deleteFileCache({
                  token: this.blockManager.rootRecordId,
                  file_token: l == null ? undefined : l.token,
                  file_url: e
                });
              }
              let n = await flowSourceUrlValidator.validateSourceUrl(e);
              this.updateDlpStatus(n);
            }
            this.cancelCoverUpload();
          }
        } catch (e) {
          if (docxShortcutFeatureDetection.isShortcutEnabled()) {
            docxShortcutFeatureDetection.debugLogger("[cover-image]", "[render cover data error]", e, "[token]", platformDocUtils.p5T(docTokenManager.getDocToken()));
          }
        }
      });
      x(this, "reportUpdateCoverInfo", (e, n, r, o) => {
        if (docxShortcutFeatureDetection.isShortcutEnabled()) {
          docxShortcutFeatureDetection.debugLogger("[cover-image]", "[block token]", e && platformDocUtils.p5T(e && n.token), ["tokenToSrcMap"], e && this.tokenToSrcMap[n.token] && platformDocUtils.p5T(this.tokenToSrcMap[n.token]), ["cover url"], r && platformDocUtils.p5T(r), "[token]", platformDocUtils.p5T(docTokenManager.getDocToken()), "[cover info]", deepEqualUtil_1.deepEqual(this.coverInfo, o), this.coverInfo && platformDocUtils.p5T(this.coverInfo?.src), o && platformDocUtils.p5T(o.src));
        }
      });
      x(this, "handleUpdateCoverPosition", e => {
        if (!e) {
          return;
        }
        let {
          offset_ratio_x: n = 0,
          offset_ratio_y: r = 0
        } = e;
        let o = {
          ...throttledPathFilterStringify.throttledPathStr(e, ["type", "url", "token", "mime_type"]),
          offset_ratio_x: n,
          offset_ratio_y: r
        };
        this.blockManager.applyTransaction("handlePageCoverChange", e => {
          e.replace(this.pageToken, ["cover"], o);
        });
      });
      x(this, "clearCoverInfo", () => {
        if (docxShortcutFeatureDetection.isShortcutEnabled()) {
          docxShortcutFeatureDetection.debugLogger("[cover-image]", "[destory clearCoverInfo]", "[token]", platformDocUtils.p5T(docTokenManager.getDocToken()));
        }
        this.updateCoverInfo(null);
      });
      x(this, "handleSetPresetCover", async (e, n) => {
        let {
          token: r,
          contentType: o
        } = e;
        try {
          let e = coverImageUrlUtils.getCoverPreviewUrl(r, o);
          this.updateCoverInfo({
            type: coverSourceType.coverSourceType.Preset,
            src: e,
            lightSrc: coverImageUrlUtils.getCoverThumbnailUrl(r, o),
            offset_ratio_x: 0,
            offset_ratio_y: 0,
            mime_type: o
          });
          let i = await function (e, n = docTokenHelperUtils.resolveDocToken()) {
            return docxApiConstantsExports.docxApiService.copyCoverImage(e, n).then(e => e);
          }([r], this.getRealPageToken());
          if (!i || i.code !== N.SUCCESS || !i.data || !i.data.succ_files) {
            return this.collectChangeCover(B.FAIL_COPY_TOKEN, n, i && i.code);
          }
          if (!this.checkCoverUploadStatus(n) || !this.checkEditableStatus(n)) {
            return;
          }
          let l = i.data.succ_files[r];
          if (docxFeatureFlags.isDlpUploadEnabled()) {
            this.tokenToSrcMap[l] = coverImageUrlUtils.getCoverPreviewUrl(l, o);
          } else {
            this.tokenToSrcMap[l] = e;
          }
          this.applyDocCover(l, coverSourceType.coverSourceType.Preset, o);
          return this.collectChangeCover(B.SUCCESS, n);
        } catch (e) {
          return this.collectChangeCover(B.FAIL_UNKNOWN, Object.assign(n, {
            error: e,
            err: e.message
          }));
        }
      });
      x(this, "handleSetAICover", async (e, n) => {
        let {
          bloburl: r,
          blobFile: o,
          imageUploader: i,
          isSuperImage: l
        } = e;
        let c = "image/png";
        this.updateCoverInfo({
          type: coverSourceType.coverSourceType.AICover,
          src: xssContentSanitizer.sanitizeUrl(r, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNamt5$2xoSmRsRXlP$Eph$0$wR$lqSTFNR050T1hOTWJ$c*9ZekpWZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
          }),
          offset_ratio_x: 0,
          offset_ratio_y: 0,
          mime_type: c,
          isSuperImage: l
        });
        let u = Object.assign({}, n, {
          action_type: "album",
          pic_file_type: o.type
        });
        let a = new File([o], "tmp.jpg", {
          type: c
        });
        try {
          let {
            token: e,
            mimeType: o
          } = await i.uploadImage({
            file: a
          });
          if (!this.checkEditableStatus(n)) {
            return;
          }
          this.tokenToSrcMap[e] = r;
          this.applyDocCover(e, coverSourceType.coverSourceType.Preset, o);
          return this.collectChangeCover(B.SUCCESS, u);
        } catch (e) {
          return this.collectChangeCover(B.FAIL_UPLOAD_IMAGE, Object.assign({
            ...u,
            error: e,
            err: e.msg
          }));
        }
      });
      x(this, "handleSetNoneCover", e => {
        this.applyDocCover("");
        this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageClick("ccm_doc_cover_choose_panel_click", docxEditorBlockMetadataUtils.getPageBlockInfo(), {
          click: "click_remove_cover"
        });
      });
      x(this, "handleRemoveAllSelection", () => {
        this.selectionAPI.removeAllSelection();
      });
      this.blockManager = e;
      this.pageToken = n;
      this.editable = r || false;
      this.selectionAPI = o;
      this.subs = [e.editorAPI.lifecycle.editorReady$.subscribe(this.handleEditorReady), this.blockManager.config.editableChange$.subscribe(this.handleEditableChange)];
      docxEditorEventConstantsAndManager.globalEventBus.on(docCoverConstantsSelector.coverActionTypes.UPDATE_COVER_POSITION, this.handleUpdateCoverPosition);
      docxEditorEventConstantsAndManager.globalEventBus.on(docCoverConstantsSelector.coverActionTypes.REMOVE_ALL_SELECTION, this.handleRemoveAllSelection);
      if (docxShortcutFeatureDetection.isShortcutEnabled()) {
        this.clearCoverInfo();
        window.addEventListener("clear", this.clearCoverInfo);
      }
    }
  }
  function G(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  var H = class extends U {
    destroy() {
      super.destroy();
      docxEditorEventConstantsAndManager.globalEventBus.off(docCoverConstantsSelector.coverActionTypes.SET_COVER_DATA, this.handleSetCover);
    }
    getSetCover(e) {
      return {
        [coverSourceType.coverSourceType.Preset]: this.handleSetPresetCover,
        [coverSourceType.coverSourceType.Customize]: this.handleSetCustomCover,
        [coverSourceType.coverSourceType.NONE]: this.handleSetNoneCover,
        [coverSourceType.coverSourceType.AICover]: this.handleSetAICover
      }[e];
    }
    constructor(e) {
      super(e);
      G(this, "handleSetCustomCover", async (e, n) => {
        let {
          file: r,
          imageUploader: o
        } = e;
        let i = URL.createObjectURL(r);
        this.updateCoverInfo({
          type: coverSourceType.coverSourceType.Customize,
          src: i,
          offset_ratio_x: 0,
          offset_ratio_y: 0,
          mime_type: r.type
        });
        let l = Object.assign({}, n, {
          action_type: "album",
          pic_file_type: r.type
        });
        try {
          let {
            token: e,
            mimeType: c
          } = await o.uploadImage({
            file: r
          });
          if (!this.checkCoverUploadStatus(n) || !this.checkEditableStatus(n)) {
            return;
          }
          this.tokenToSrcMap[e] = i;
          this.applyDocCover(e, coverSourceType.coverSourceType.Preset, c);
          return this.collectChangeCover(B.SUCCESS, l);
        } catch (e) {
          return this.collectChangeCover(B.FAIL_UPLOAD_IMAGE, Object.assign({
            ...l,
            error: e,
            err: e.msg
          }));
        }
      });
      G(this, "handleSetCover", async e => {
        try {
          var n;
          let r = this.getCommonCollectParam(e);
          docCoverEventTracker.DocCoverEventTracker.init();
          if (!networkStateEventCollector.collectNetworkState()) {
            return this.collectChangeCover(B.FAIL_OFFLINE, r);
          }
          if (!this.checkEditableStatus(r)) {
            return;
          }
          window.scrollTo(0, 0);
          if ((n = window.getSelection()) !== null && n !== undefined) {
            n.removeAllRanges();
          }
          let {
            type: o
          } = e;
          if (o !== coverSourceType.coverSourceType.NONE) {
            reduxStoreInitializer.reduxStore.dispatch(storeCoverActionsMap.uploadCoverStart());
          }
          let i = this.getSetCover(e.type);
          if (await i) {
            i(e, r);
          }
        } catch (n) {
          this.collectChangeCover(B.FAIL_UNKNOWN, {
            ...e,
            error: n,
            err: n.message
          });
        }
      });
      docxEditorEventConstantsAndManager.globalEventBus.on(docCoverConstantsSelector.coverActionTypes.SET_COVER_DATA, this.handleSetCover);
    }
  };
  require.d(exports, {
    coverActionTypes: function () {
      return docCoverConstantsSelector.coverActionTypes;
    },
    docCoverSelector: function () {
      return docCoverConstantsSelector.docCoverSelector;
    },
    DocxCoverManager: function () {
      return H;
    }
  });
}