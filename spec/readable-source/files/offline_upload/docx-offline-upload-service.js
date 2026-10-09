// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'h' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'd' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'f' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'p' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'y' to 'docxOfflineService'
// - Resolved require(170752) to 'docx-offline-service'
// - Renamed variable 'g' to 'networkStateEventCollector'
// - Resolved require(67722) to 'network-state-event-collector'
// - Renamed variable 'b' to 'docxUtilityHelpers'
// - Resolved require(859002) to 'docx-utility-helpers'
// - Renamed variable 'm' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'k' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'M' to 'docxRustFileOperations'
// - Resolved require(966944) to 'docx-rust-file-operations'
// - Renamed variable 'v' to 'offlineUploadProvider'
// - Resolved require(363270) to 'offline-upload-provider'
// - Renamed variable 'w' to 'debugBrowserConfig'
// - Resolved require(471456) to 'debug-browser-config'
// - Renamed variable '$' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'I' to 'idleCallbackPolyfill_1'
// - Resolved require(55404) to 'idle-callback-polyfill_1'
// - Renamed variable '_' to 'docxFileAttachmentHandler'
// - Resolved require(356160) to 'docx-file-attachment-handler'
// - Renamed variable 'A' to 'imageManagerProviderName'
// - Resolved require(852709) to 'image-manager-provider-name'
// - Renamed variable 'D' to 'docxImageUploadHandler'
// - Resolved require(8997) to 'docx-image-upload-handler'
// - Renamed variable 'E' to 'changeSourceValidators'
// - Resolved require(568290) to 'change-source-validators'
// - Renamed variable 'F' to 'docxOfflineStoreManager'
// - Resolved require(218533) to 'docx-offline-store-manager'
// - Renamed variable 'U' to 'docBlockActionConstants'
// - Resolved require(119943) to 'doc-block-action-constants'
// - Renamed variable 'B' to 'docxOfflineEventUtilities'
// - Resolved require(35973) to 'docx-offline-event-utilities'
// - Updated imported property 'K' to 'requestIdleCallback' (module 55404)
// - Updated imported property 'G' to 'cancelIdleCallback' (module 55404)
// - Updated imported property 'm5' to 'Dynamic' (module 555385)
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'cM' to 'noopHandler' (module 35973)
// - Updated imported property 'd3' to 'isEmptyString' (module 35973)
// - Updated imported property 'IC' to 'isReplaceAction' (module 35973)
// - Updated imported property 'Pj' to 'getSnapshotToken' (module 35973)
// - Updated imported property 'HL' to 'collectOfflineEvent' (module 35973)
// - Updated imported property '$n' to 'isTimeExpired' (module 35973)
// - Updated imported property 'f' to 'DocxOfflineManager' (module 218533)
// - Updated imported property 'zy' to 'offlineDataKeys' (module 119943)
// - Updated imported property 'N6' to 'offlineToTypeMap' (module 119943)
// - Updated imported property 'jO' to 'actionToOfflineMap' (module 119943)
// - Updated imported property 'LK' to 'blockActionTypes' (module 119943)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'J' to 'alignmentConstants' (module 433991)
// - Updated imported property 'LH' to 'setImageUploadBackground' (module 8997)
// - Updated imported property 'Ve' to 'setTempImageInfo' (module 8997)
// - Updated imported property 'WX' to 'handlePasteImageUpload' (module 8997)
// - Updated imported property 'WM' to 'isOfflineSource' (module 568290)
// - Updated imported property 'G' to 'collectNetworkState' (module 67722)
// - Updated imported property 'GF' to 'processFileCopyTo' (module 356160)
// - Updated imported property 'U' to 'imageManagerName' (module 852709)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'ei' to 'LIFECYCLE_TOKEN' (module 135760)
// - Updated imported property 'J' to 'offlineService' (module 170752)
// - Updated imported property 'O' to 'offlineUploadSvcId' (module 363270)
// - Updated imported property 'R7' to 'maskSensitiveData' (module 859002)
// - Updated imported property 'cT' to 'uploadFile' (module 966944)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: offline_upload.2bc1c0bf.js
         * chunkId: 1462
         * moduleId: 351630
         */
module.exports = function (module, exports, require) {
  var a;
  var r;
  var n;
  var l;
  var o;
  var s;
  var c;
  var u;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxOfflineService = require("docx-offline-service") /*id: 170752*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  var offlineUploadProvider = require("offline-upload-provider") /*id: 363270*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var R = debugBrowserConfig;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  function O(e, t, i) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var a = i.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  class S {
    constructor(e, t = {}) {
      var i = this;
      this.executor = e;
      O(this, "tasks", new Map());
      O(this, "historyQueue", new Set());
      O(this, "id", undefined);
      O(this, "autoExecut", undefined);
      O(this, "executeOnce", undefined);
      O(this, "run", () => {
        if (this.tasks.size) {
          this.cancel();
          this.id = idleCallbackPolyfill_1.requestIdleCallback(async () => {
            let e = [...this.tasks.entries()];
            this.clear();
            for (let [t, i] of e) {
              try {
                if (this.executeOnce && this.historyQueue.has(t)) {
                  continue;
                }
                if (this.executeOnce) {
                  this.historyQueue.add(t);
                }
                await this.executor(i);
              } catch (e) {
                if (this.executeOnce) {
                  this.historyQueue.delete(t);
                }
              }
            }
          });
        }
      });
      O(this, "push", function (e, t, a = i.autoExecut) {
        if (e && t) {
          i.tasks.set(e, t);
          if (a) {
            i.run();
          }
        }
      });
      O(this, "do", () => this.run());
      O(this, "cancel", () => {
        if (this.id) {
          idleCallbackPolyfill_1.cancelIdleCallback(this.id);
        }
      });
      O(this, "clear", () => this.tasks.clear());
      let {
        autoExecut: a = true,
        executeOnce: r = true
      } = t;
      this.autoExecut = a;
      this.executeOnce = r;
    }
  }
  var docxFileAttachmentHandler = require("docx-file-attachment-handler") /*id: 356160*/;
  var imageManagerProviderName = require("image-manager-provider-name") /*id: 852709*/;
  var docxImageUploadHandler = require("docx-image-upload-handler") /*id: 8997*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var docxOfflineStoreManager = require("docx-offline-store-manager") /*id: 218533*/;
  var docBlockActionConstants = require("doc-block-action-constants") /*id: 119943*/;
  var docxOfflineEventUtilities = require("docx-offline-event-utilities") /*id: 35973*/;
  function z(e, t, i, a) {
    if (i) {
      Object.defineProperty(e, t, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(a) : undefined
      });
    }
  }
  function P(e, t, i) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var a = i.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  function L(e, t, i, a, r) {
    var n = {};
    Object.keys(a).forEach(function (e) {
      n[e] = a[e];
    });
    n.enumerable = !!n.enumerable;
    n.configurable = !!n.configurable;
    if ("value" in n || n.initializer) {
      n.writable = true;
    }
    n = i.slice().reverse().reduce(function (i, a) {
      return a(e, t, i) || i;
    }, n);
    if (r && n.initializer !== undefined) {
      n.value = n.initializer ? n.initializer.call(r) : undefined;
      n.initializer = undefined;
    }
    if (n.initializer === undefined) {
      Object.defineProperty(e, t, n);
      return null;
    } else {
      return n;
    }
  }
  let T = R("offline-upload:");
  a = dependencyInjectionContainer.Dynamic();
  n = L((r = class {
    onServiceInit() {
      docxOfflineEventUtilities.noopHandler("init");
      this.bufferQueue = new S(this.restore);
      window.addEventListener("online", this.handleOnline);
      this.getAllCacheData();
    }
    onServiceDispose() {
      docxOfflineEventUtilities.noopHandler("destroy");
      window.removeEventListener("online", this.handleOnline);
      this.allResourceKeys.forEach(e => docxOfflineStoreManager.DocxOfflineManager.destroy(e, this.blockManager));
    }
    constructor() {
      P(this, "bufferQueue", undefined);
      z(this, "imageManager", n, this);
      z(this, "blockManager", l, this);
      z(this, "lifecycle", o, this);
      P(this, "waitingUploadMap", new Map());
      P(this, "waitingOnlineMap", new Map());
      P(this, "allResourceKeys", Object.values(docBlockActionConstants.offlineDataKeys).filter(e => typeof e == "string"));
      P(this, "getAllCacheData", async () => {
        for (let e of this.allResourceKeys) {
          await this.getCacheDataByKey(e);
        }
      });
      P(this, "handleAcceptCommit", async e => {
        let t = e.id;
        for (let e of this.allResourceKeys) {
          let i = await this.getCacheDataByKey(e);
          if (i && i[t]) {
            this.queueWhenMountAndAckFinished(t, e, "handleAcceptCommit");
            break;
          }
        }
      });
      P(this, "onBlockMount", async e => {
        let {
          props: t
        } = e;
        let {
          struct: i
        } = t;
        let {
          id: a,
          recordId: r
        } = i;
        let n = platformDocUtils.p5T(r);
        for (let e of this.allResourceKeys) {
          let o = await this.getCacheDataByKey(e);
          let s = docBlockActionConstants.offlineToTypeMap[e];
          if (!o || !o[r] || t.struct.type !== s) {
            continue;
          }
          let c = o[r];
          let u = `recordId ${n}, key ${e}`;
          if (s === docBlockTypeConstants.blockTypeConstants.IMAGE) {
            let e = this.blockManager.getBlockViewByBlockId(a);
            if (docxOfflineEventUtilities.isEmptyString(i.snapshot.image?.token)) {
              docxOfflineEventUtilities.noopHandler(`onBlockMount set mask, ${u}`);
              docxImageUploadHandler.setImageUploadBackground(e, n, c);
            } else if (docxOfflineEventUtilities.isReplaceAction(c)) {
              docxImageUploadHandler.setTempImageInfo(e, c);
            }
          }
          if (changeSourceValidators.isOfflineSource(i)) {
            this.queueWhenMountAndAckFinished(r, e, "onBlockMount");
          } else {
            let t = {
              recordId: r,
              key: e
            };
            if (networkStateEventCollector.collectNetworkState()) {
              docxOfflineEventUtilities.noopHandler(`onBlockMount isApplyBackUp false, online push bufferQueue, ${u}`);
              this.bufferQueue.push(r, t);
            } else {
              docxOfflineEventUtilities.noopHandler(`onBlockMount isApplyBackUp false, offline set waitingOnlineMap, ${u}`);
              this.waitingOnlineMap.set(r, t);
            }
          }
        }
      });
      P(this, "getStoreData", e => {
        T("getStoreData", e);
        let t = docBlockActionConstants.actionToOfflineMap[e];
        return this.getCacheDataByKey(t);
      });
      P(this, "addStoreData", (e, t, i) => {
        docxOfflineEventUtilities.noopHandler(`addStoreData', ${e} ${platformDocUtils.p5T(t)}`);
        let a = docBlockActionConstants.actionToOfflineMap[e];
        this.addStoreDataByKey(a, t, i);
      });
      P(this, "removeStoreData", (e, t) => {
        docxOfflineEventUtilities.noopHandler(`removeStoreData, ${e} ${platformDocUtils.p5T(t)}`);
        let i = docBlockActionConstants.actionToOfflineMap[e];
        this.deleteStoreDataByKey(i, t);
      });
      P(this, "handlePastedImageReUpload", (e, t, i) => {
        T("restoreUpload image start", e, t);
        docxImageUploadHandler.handlePasteImageUpload({
          blockManager: this.blockManager,
          imageManager: this.imageManager.get(),
          recordId: e,
          payload: t,
          onFinally: () => {
            if (networkStateEventCollector.collectNetworkState()) {
              this.removeStoreData(docBlockActionConstants.blockActionTypes.PASTE_IMAGE, e);
            }
            T("restoreUpload image end", e);
          },
          onError: i
        });
      });
      P(this, "handlePastedFileReUpload", (e, t) => {
        T("restoreUpload file start", e, t);
        docxFileAttachmentHandler.processFileCopyTo(t, e, this.blockManager, () => {
          if (networkStateEventCollector.collectNetworkState()) {
            this.removeStoreData(docBlockActionConstants.blockActionTypes.PASTE_FILE, e);
          }
          T("restoreUpload file end", e);
        });
      });
      P(this, "handleOnline", () => {
        docxOfflineEventUtilities.noopHandler(`handleOnline push bufferQueue, waitingOnlineMapkeys ${Array.from(this.waitingOnlineMap.keys()).toString()}, size: ${this.waitingOnlineMap.size}`);
        if (this.waitingOnlineMap.size) {
          for (let [e, t] of this.waitingOnlineMap.entries()) {
            this.bufferQueue.push(e, t);
          }
        }
      });
      P(this, "queueWhenMountAndAckFinished", (e, t, i) => {
        let a = {
          recordId: e,
          key: t
        };
        let r = platformDocUtils.p5T(e);
        let n = `caller ${i}, recordId ${r}, key ${t}`;
        if (this.waitingUploadMap.has(e)) {
          if (networkStateEventCollector.collectNetworkState()) {
            docxOfflineEventUtilities.noopHandler(`queueWhenMountAndAckFinished, online push bufferQueue, ${n}`);
            this.bufferQueue.push(e, a);
          } else {
            docxOfflineEventUtilities.noopHandler(`queueWhenMountAndAckFinished, offline set waitingOnlineMap, ${n}`);
            this.waitingOnlineMap.set(e, a);
          }
        } else {
          docxOfflineEventUtilities.noopHandler(`queueWhenMountAndAckFinished, set waitingUploadMap, ${n}`);
          this.waitingUploadMap.set(e, a);
        }
      });
    }
  }).prototype, "imageManager", [a, imageManagerProviderName.imageManagerName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  l = L(r.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  o = L(r.prototype, "lifecycle", [docxEditorCore.LIFECYCLE_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let j = r;
  function K(e, t, i, a) {
    if (i) {
      Object.defineProperty(e, t, {
        enumerable: i.enumerable,
        configurable: i.configurable,
        writable: i.writable,
        value: i.initializer ? i.initializer.call(a) : undefined
      });
    }
  }
  function W(e, t, i) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var a = i.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  function C(e, t, i, a, r) {
    var n = {};
    Object.keys(a).forEach(function (e) {
      n[e] = a[e];
    });
    n.enumerable = !!n.enumerable;
    n.configurable = !!n.configurable;
    if ("value" in n || n.initializer) {
      n.writable = true;
    }
    n = i.slice().reverse().reduce(function (i, a) {
      return a(e, t, i) || i;
    }, n);
    if (r && n.initializer !== undefined) {
      n.value = n.initializer ? n.initializer.call(r) : undefined;
      n.initializer = undefined;
    }
    if (n.initializer === undefined) {
      Object.defineProperty(e, t, n);
      return null;
    } else {
      return n;
    }
  }
  let x = docxOfflineService.offlineService.getLogger("offline-upload");
  let N = dependencyInjectionContainer.Provide(offlineUploadProvider.offlineUploadSvcId)((c = C((s = class extends j {
    constructor(...e) {
      super(...e);
      K(this, "blockManager", c, this);
      K(this, "lifecycle", u, this);
      W(this, "_getResourceManager", e => docxOfflineStoreManager.DocxOfflineManager.getInstance(e, this.blockManager));
      W(this, "getCacheDataByKey", e => this._getResourceManager(e).getCacheData());
      W(this, "addStoreDataByKey", (e, t, i) => this._getResourceManager(e).addStoreData(t, i));
      W(this, "deleteStoreDataByKey", (e, t) => this._getResourceManager(e).deleteStoreDataKey(t));
      W(this, "restore", async e => {
        let {
          recordId: t,
          key: i
        } = e;
        let a = await this.getCacheDataByKey(i);
        if (a && a[t]) {
          let e = a[t];
          let r = this.blockManager.getBlockIdsByRecordId(t)[0];
          let n = this.blockManager.getBlockModelByBlockId(r);
          let l = docxOfflineEventUtilities.getSnapshotToken(i, n);
          let o = this.blockManager.hasBlockViewByBlockId(r);
          let s = docxOfflineEventUtilities.isEmptyString(l);
          if (o && s) {
            x.info(`restore handle start, key: ${i}, recordId: ${docxUtilityHelpers.maskSensitiveData(t)}`);
            docxOfflineEventUtilities.collectOfflineEvent("restore_start", t);
            switch (i) {
              case docBlockActionConstants.offlineDataKeys.UPLOAD_IMAGE:
                return this.handleInsertImageReUpload(t, e);
              case docBlockActionConstants.offlineDataKeys.PASTE_IMAGE:
                return this.handlePastedImageReUpload(t, e, () => {
                  docxOfflineEventUtilities.collectOfflineEvent("restore_fail", t, "handlePastedImageReUpload error");
                });
              case docBlockActionConstants.offlineDataKeys.UPLOAD_FILE:
                return this.handleInsertFileReUpload(t, e);
              case docBlockActionConstants.offlineDataKeys.PASTE_FILE:
                return this.handlePastedFileReUpload(t, e);
              default:
                return;
            }
          } else {
            let {
              addTimestamp: a
            } = e;
            let r = docxOfflineEventUtilities.isTimeExpired(a);
            if (r) {
              this.deleteStoreDataByKey(i, t);
            }
            x.info(`restore clear,
          key: ${i},
          recordId: ${docxUtilityHelpers.maskSensitiveData(t)},
          hasBlockView: ${o},
          isEmptyToken: ${s},
          needClear: ${r}`);
          }
        }
      });
      W(this, "handleInsertImageReUpload", async (e, t) => {
        try {
          x.info(`handleInsertImageReUpload, recordId: ${docxUtilityHelpers.maskSensitiveData(e)}`);
          let {
            uuid: i,
            type: a,
            name: r,
            width: n,
            height: l,
            size: o,
            options: s
          } = t;
          if (!n || !l) {
            return;
          }
          let c = await docxRustFileOperations.uploadFile({
            key: i,
            obj_type: 22,
            mount_node_point: e,
            mount_point: "docx_image",
            is_asynchronous: true
          });
          let u = {
            src: xssContentSanitizer.sanitizeUrl("", null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9-Qmli$nA1$1ZNNWRscHRXbk5o$npWc1R*aFdkMkpIT1do-$F6bDZXb*hLTW1*WFRteE1Namx0$20xN*NHSnRWWFJr$0$KellqSkdhMHh--khSalIzZDFaRWhP-%dOdFpERmpkejA5"
            }),
            token: c,
            mimeType: a,
            size: o,
            name: r,
            scale: 1,
            width: n,
            height: l,
            align: docBlockTypeConstants.alignmentConstants.CENTER
          };
          if (s && s.scale) {
            u.scale = s.scale;
          }
          this.blockManager.applyTransaction("reUploadImageAtPlaceholder", t => {
            t.replace(e, ["image"], u);
          }, {
            from: collaborativeEditingFlowSyncModule.kq.LOCAL,
            undoable: false
          });
          let d = this.blockManager.getBlockViewsByRecordId(e)[0];
          if (d) {
            d.setUploadProgress(1);
          }
        } catch (t) {
          docxOfflineEventUtilities.collectOfflineEvent("restore_fail", e, "handleInsertImageReUpload error");
          x.error("handleInsertImageReUpload error", t);
        } finally {
          if (networkStateEventCollector.collectNetworkState()) {
            this.removeStoreData(docBlockActionConstants.blockActionTypes.UPLOAD_IMAGE, e);
            x.info(`handleInsertImageReUpload end, recordId: ${docxUtilityHelpers.maskSensitiveData(e)}`);
          }
        }
      });
      W(this, "handleInsertFileReUpload", async (e, t) => {
        try {
          x.info(`handleInsertFileReUpload, recordId: ${docxUtilityHelpers.maskSensitiveData(e)}`);
          let {
            uuid: i,
            type: a,
            name: r,
            size: n
          } = t;
          let l = 0;
          if (["audio", "video", "application/pdf"].some(e => a == null ? undefined : a.includes(e))) {
            l = 2;
          }
          let o = {
            token: await docxRustFileOperations.uploadFile({
              key: i,
              obj_type: 22,
              mount_node_point: e,
              mount_point: "docx_file",
              is_asynchronous: true,
              resource_type: 1,
              api_type: l
            }),
            mimeType: a,
            size: n,
            name: r
          };
          this.blockManager.applyTransaction("reUploadFileAtPlaceholder", t => {
            t.replace(e, ["file"], o);
          }, {
            from: collaborativeEditingFlowSyncModule.kq.LOCAL,
            undoable: false
          });
        } catch (t) {
          docxOfflineEventUtilities.collectOfflineEvent("restore_fail", e, "handleInsertFileReUpload error");
          x.error("handleInsertFileReUpload error", t);
        } finally {
          if (networkStateEventCollector.collectNetworkState()) {
            this.removeStoreData(docBlockActionConstants.blockActionTypes.UPLOAD_FILE, e);
            x.info(`handleInsertFileReUpload end, recordId: ${docxUtilityHelpers.maskSensitiveData(e)}`);
          }
        }
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), u = C(s.prototype, "lifecycle", [docxEditorCore.LIFECYCLE_TOKEN], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), s)) || s;
  require.r(exports);
  require.d(exports, {
    OfflineUploadImpl: function () {
      return N;
    }
  });
}