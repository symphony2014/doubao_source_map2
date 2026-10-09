// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initImageEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 165800
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var a;
  var s;
  var c;
  var d;
  var h;
  var u;
  var m;
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var imageDataCacheStorageToken = require("image-data-cache-storage-token") /*id: 328701*/;
  let b = dependencyInjectionContainer.Provide(imageDataCacheStorageToken.imageDataCacheToken)(o = class {
    addData(e, i) {
      this.data[e] = i;
    }
    removeKey(e, i) {
      let n = this.data[e];
      if (n) {
        if (i != null) {
          i(n);
        }
      }
      delete this.data[e];
    }
    clearKey(e) {
      Object.keys(this.data).forEach(i => this.removeKey.bind(this, i, e));
    }
    hasKey(e) {
      return !!this.data[e];
    }
    getValueOfKey(e) {
      let i = this.data[e];
      return i ?? null;
    }
    onServiceDispose() {
      this.clearKey(window.URL.revokeObjectURL);
    }
    constructor() {
      var e;
      var i;
      var n;
      i = {};
      if ((e = typeof (n = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, i || "default");
          if (typeof o != "object") {
            return o;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(e = "data", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = i;
      }
    }
  }) || o;
  var imageManagerProviderName = require("image-manager-provider-name") /*id: 852709*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxOfflineImageFlags = require("docx-offline-image-flags") /*id: 332375*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
  var ssrImageLoadStateManager = require("ssr-image-load-state-manager") /*id: 181276*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  function E(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let B = ["fetchCdnInfos", "fetch", "buzz", "profile", "delete", "destroy"];
  var T = class {
    constructor(e) {
      var i = this;
      this.getAuthToken = e;
      E(this, "instance", undefined);
      E(this, "load", function (e) {
        var o = arguments.length;
        var r = Array(o > 1 ? o - 1 : 0);
        var l = 1;
        for (; l < o; l++) {
          r[l - 1] = arguments[l];
        }
        if (i.instance) {
          return i[e](...r);
        } else {
          return require.e("docx_index_delay_for_edit") /*id: 84820*/.then(require.bind(require, "drive-image-fetcher-manager") /*id: 566430*/).then(n => {
            let {
              DriveImageFetcherManager: o
            } = n;
            i.instance = i.instance || new o(i.getAuthToken);
            B.forEach(e => {
              i[e] = i.instance[e].bind(i.instance);
            });
            return i[e](...r);
          });
        }
      });
      E(this, "buzz", emptyExportFunction.emptyFunction);
      E(this, "delete", emptyExportFunction.emptyFunction);
      E(this, "destroy", emptyExportFunction.emptyFunction);
      E(this, "fetchCdnInfos", this.load.bind(this, "fetchCdnInfos"));
      E(this, "fetch", this.load.bind(this, "fetch"));
    }
  };
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var vcOrFeishuRoomsDetector = require("vc-or-feishu-rooms-detector") /*id: 484530*/;
  var externalImageUploadTaskManager = require("external-image-upload-task-manager") /*id: 271525*/;
  var blobUrlCacheManager = require("blob-url-cache-manager") /*id: 865553*/;
  var docPreviewConstants = require("doc-preview-constants") /*id: 162554*/;
  var performanceTimer = require("performance-timer") /*id: 984702*/;
  function j(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  class z {
    collectDisplayEvent(e) {
      Object.assign(this.displayParams, e);
    }
    uploadDisplayEvent() {
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("display_new_gallery", this.displayParams);
    }
    get collectedInfo() {
      return {
        ...this.displayParams
      };
    }
    logDisplayBase(e) {
      this.collectDisplayEvent({
        ...e,
        image_category: "Drive",
        retryTimes: 0
      });
    }
    logRetry() {
      this.collectDisplayEvent({
        retryTimes: (this.displayParams.retryTimes || 0) + 1
      });
    }
    logDisplayImageStart() {
      this.timer.start("displayImage");
    }
    logCdnFetchStatus(e) {
      this.collectDisplayEvent(e);
    }
    logLoadImageStart() {
      this.timer.start("loadImage");
    }
    logLoadImageEnd() {
      let e = this.timer.end("loadImage");
      this.collectDisplayEvent({
        load_time_cost: e
      });
    }
    logDisplayImageEnd(e) {
      let i = this.timer.end("displayImage");
      this.collectDisplayEvent({
        display_time_cost: i,
        load_fail: e.load_fail,
        token: platformDocUtils.p5T(e.token),
        origin_src: platformDocUtils.p5T(e.origin_src),
        state_src: platformDocUtils.p5T(e.state_src)
      });
      this.uploadDisplayEvent();
    }
    logPlayBigGif(e, i) {
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("play_big_gif", {
        file_token: platformDocUtils.p5T(e),
        page_token: platformDocUtils.p5T(i)
      });
    }
    logSaveExternalImage(e, i, n, o) {
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("external_save_status", {
        file_token: platformDocUtils.p5T(e),
        page_token: platformDocUtils.p5T(i),
        time_cost: Math.round(performance.now() - o),
        status: n ? "success" : "fail"
      });
    }
    logUploadImageStart(e, i, n, o) {
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("new_image_upload_start", {
        uuid: platformDocUtils.p5T(e),
        file_size: i,
        mime_type: n,
        source: o
      });
    }
    logUploadImageEnd(e) {
      let {
        blockId: i,
        size: n,
        type: o,
        source: r,
        fileToken: l,
        isSuccess: a,
        startTime: s,
        errorMsg: c
      } = e;
      let d = {
        uuid: platformDocUtils.p5T(i),
        file_token: l ? platformDocUtils.p5T(l) : null,
        file_size: n == null ? undefined : n.toString(),
        mime_type: o,
        source: r,
        upload_status: a ? docPreviewConstants.uploadStatusTypes.Success : docPreviewConstants.uploadStatusTypes.Fail,
        cost_time: performance.now() - s
      };
      if (!a) {
        d.upload_error_msg = JSON.stringify(c);
      }
      this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("new_image_upload_end", d);
    }
    destroy() {
      this.displayParams = {};
      this.timer.clear();
    }
    constructor(e) {
      this.blockManager = e;
      j(this, "displayParams", {
        decrypt_necessary: false,
        request_cdn_necessary: false
      });
      j(this, "timer", new performanceTimer.PerformanceTimer());
    }
  }
  class L {
    get(e) {
      let i = this.collectorMap.get(e);
      if (!i) {
        i = new z(this.blockManager);
        this.collectorMap.set(e, i);
      }
      return i;
    }
    delete(e) {
      let i = this.collectorMap.get(e);
      this.collectorMap.delete(e);
      if (i) {
        i.destroy();
      }
    }
    destroy() {
      this.collectorMap.forEach(e => e.destroy());
    }
    constructor(e) {
      this.blockManager = e;
      j(this, "collectorMap", new Map());
    }
  }
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var flowPermissionSelectorFactory = require("flow-permission-selector-factory") /*id: 953431*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  function G(e, i, n, o) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(o) : undefined
      });
    }
  }
  function X(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  function K(e, i, n, o, r) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = n.slice().reverse().reduce(function (n, o) {
      return o(e, i, n) || n;
    }, l);
    if (r && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(r) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let q = debugLoggerFactory.createLogger("imageManager");
  r = dependencyInjectionContainer.Provide(imageManagerProviderName.imageManagerName);
  l = dependencyInjectionContainer.Optional();
  a = dependencyInjectionContainer.Optional();
  s = dependencyInjectionContainer.Inject(lazyRecordStatusToken.lazyRecordStatus);
  let Y = r((u = class {
    stopPlayingGifInViewport() {
      let {
        imageBlocksInViewport: e
      } = this.getImageBlocks();
      this.isStopGifPlay = true;
      e.forEach(e => {
        if (docxImageUrlUtils.isGifImage(e.model.snapshot.image.mimeType)) {
          e.showCoverGif();
        }
      });
    }
    isGifHadPlayed(e) {
      return this.hadPlayedGifMap.has(e);
    }
    addHadPlayedGif(e) {
      this.hadPlayedGifMap.set(e, true);
    }
    playGifInViewport() {
      let {
        imageBlocksInViewport: e
      } = this.getImageBlocks();
      this.isStopGifPlay = false;
      e.forEach(e => {
        if (docxImageUrlUtils.isGifImage(e.model.snapshot.image.mimeType)) {
          e.showOriginalGif();
        }
      });
    }
    getImageBlocks() {
      let e = this.blockManager.layoutManager.getBufferBlocks();
      let i = this.blockManager.layoutManager.getViewportBlocks();
      let n = [...e, ...i];
      let o = this.getBlocksFromIds(n).filter(e => e.type === docBlockTypeConstants.blockTypeConstants.IMAGE);
      let r = o.filter(e => i.includes(e.id));
      let l = this.getBlocksFromIds([...this.imageInfoMap.keys()].map(e => this.blockManager.getBlockIdsByRecordId(e)[0])).filter(e => !i.includes(e.id));
      let a = [...r, ...l];
      return {
        imageBlocksInViewportAndBuffer: o,
        imageBlocksInViewport: r,
        imageBlocksNotInViewport: l,
        allImageBlocks: a
      };
    }
    init() {
      var e;
      this.blockManager.addListener(renderEventConstants.paint, this.handleLayoutPaint);
      this.sliceResponseSub = (e = this.lazyRecordStatus) === null || e === undefined ? undefined : e.sliceResponse$.subscribe(this.genPreloadImageInfo.bind(this));
      window.addEventListener("online", this.handleUpdateOnlineStatus);
      window.addEventListener("offline", this.handleUpdateOnlineStatus);
      window.addEventListener("orientationchange", this.onOrientationChange);
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        window.addEventListener("beforeunload", this.handleBeforeunload);
      }
      let {
        dataService: i
      } = this.blockManager;
      let n = i.getRecordMap();
      if (n.size) {
        let e = [];
        for (let [i, o] of n) {
          e.push({
            id: i,
            data: o.snapshot
          });
        }
        this.genPreloadImageInfoImpl(e);
      }
    }
    genPreloadImageInfo(e) {
      let {
        clientvar: i
      } = e;
      return this.genPreloadImageInfoImpl(Object.values(i.block_map));
    }
    genPreloadImageInfoImpl(e) {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        return;
      }
      let i = e.filter(e => {
        let {
          id: i,
          data: n
        } = e;
        return n.type === docBlockTypeConstants.blockTypeConstants.IMAGE && !ssrImageLoadStateManager.getImageLoadState(i);
      }).map(e => {
        let {
          id: i,
          data: n
        } = e;
        let {
          token: o,
          width: r,
          height: l,
          mimeType: a,
          scale: s,
          size: c
        } = n.image;
        return {
          uuid: i,
          token: o,
          isHD: docxImageUrlUtils.shouldUseOriginalImage({
            width: r,
            height: l,
            mimeType: a,
            size: c
          }),
          width: r,
          height: l,
          scale: s,
          mimeType: a
        };
      });
      this.imageFetcher.fetchCdnInfos(i);
    }
    destroy() {
      var e;
      window.removeEventListener("online", this.handleUpdateOnlineStatus);
      window.removeEventListener("offline", this.handleUpdateOnlineStatus);
      window.removeEventListener("orientationchange", this.onOrientationChange);
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        window.removeEventListener("beforeunload", this.handleBeforeunload);
      }
      if ((e = this.sliceResponseSub) !== null && e !== undefined) {
        e.unsubscribe();
      }
      if (this.deleteTaskMap.size) {
        this.deleteTaskMap.forEach(e => {
          clearTimeout(e);
        });
        this.deleteTaskMap.clear();
      }
      this.imageFetcher.destroy();
      this.imageInfoMap.clear();
      this.gifCoverUrlCacheMap.forEach(e => {
        if (e) {
          URL.revokeObjectURL(e);
        }
      });
      this.gifCoverUrlCacheMap.clear();
      this.collectorManager.destroy();
      this.externalSaver.destroy();
      this.handleLayoutPaint.cancel();
      this.blockManager.removeListener(renderEventConstants.paint, this.handleLayoutPaint);
      blobUrlCacheManager.BlobUrlCacheManager.destroy();
    }
    onServiceDispose() {
      this.destroy();
    }
    setGifCoverUrlCache(e, i) {
      this.gifCoverUrlCacheMap.set(e, i);
    }
    getGifCoverUrlCache(e) {
      return this.gifCoverUrlCacheMap.get(e);
    }
    deleteGifCoverUrlCache(e) {
      return this.gifCoverUrlCacheMap.delete(e);
    }
    getImageInfo(e) {
      return this.imageInfoMap.get(e) || {
        url: "",
        isHD: false
      };
    }
    fetch(e, i, n) {
      return this.imageFetcher.fetch(e, i, n);
    }
    buzz(e, i) {
      return this.imageFetcher.buzz(e, i);
    }
    profile() {
      if (this.imageFetcher.profile) {
        return this.imageFetcher.profile();
      } else {
        return {};
      }
    }
    add(e, i) {
      let n = this.deleteTaskMap.get(e);
      if (n) {
        clearTimeout(n);
        this.deleteTaskMap.delete(e);
        return this.imageInfoMap.get(e);
      } else {
        this.imageInfoMap.set(e, i);
        return null;
      }
    }
    update(e, i) {
      let n = this.getImageInfo(e);
      this.imageInfoMap.set(e, {
        ...n,
        ...i
      });
    }
    delete(e, i, n) {
      let o = setTimeout(() => {
        this.performDeleteTask(e, i, n);
        this.deleteTaskMap.delete(i);
      }, 3000);
      this.deleteTaskMap.set(i, o);
    }
    performDeleteTask(e, i, n) {
      this.externalSaver.stopTask(i);
      this.imageInfoMap.delete(i);
      this.collectorManager.delete(n);
      this.gifCoverUrlCacheMap.delete(i);
      this.imageFetcher.delete(e, i);
      let o = this.objUrlList.get(i);
      if (o) {
        URL.revokeObjectURL(o);
      }
      this.objUrlList.delete(i);
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        var r;
        if ((r = this.docxSignalService) !== null && r !== undefined) {
          r.mobileImageDeleteSignal.next(i);
        }
      }
    }
    getBlocksFromIds(e) {
      let i = [];
      e.forEach(e => {
        try {
          let n = this.blockManager.getBlockViewByBlockId(e);
          i.push(n);
        } catch (e) {
          return;
        }
      });
      return i;
    }
    canEditImageSelection(e) {
      if (!(e == null ? undefined : e.length)) {
        return false;
      }
      let i = flowPermissionSelectorFactory.createEditableSelector();
      let n = e[0];
      return !!i && !!n.currentImageSrc && !n.getIsAIGenerating();
    }
    get fetcher() {
      var i;
      if ((i = this.imageFetcher) === null || i === undefined) {
        return undefined;
      } else {
        return i.instance?.fetchers;
      }
    }
    constructor(e) {
      X(this, "collectorManager", undefined);
      X(this, "externalSaver", undefined);
      X(this, "isStopGifPlay", false);
      X(this, "handleLayoutPaint", debounceUtil_1_1.debounce(() => {
        let {
          imageBlocksInViewportAndBuffer: e,
          imageBlocksInViewport: i,
          imageBlocksNotInViewport: n
        } = this.getImageBlocks();
        e.forEach(e => {
          e.loadImage();
          q("======loadImage", e);
        });
        i.forEach(e => {
          if (docxImageUrlUtils.isGifImage(e.model.snapshot.image.mimeType)) {
            if (this.isStopGifPlay || vcOrFeishuRoomsDetector.isInVcOrFeishuRooms() && !this.isGifHadPlayed(e.record.id)) {
              e.showCoverGif();
            } else {
              e.showOriginalGif();
            }
          }
        });
        n.forEach(e => {
          if (docxImageUrlUtils.isGifImage(e.model.snapshot.image.mimeType) && !e.isInPaginationModelActive) {
            e.showCoverGif();
          }
        });
      }, 100));
      G(this, "docxSignalService", d, this);
      G(this, "lazyRecordStatus", h, this);
      X(this, "sliceResponseSub", undefined);
      X(this, "imageFetcher", undefined);
      X(this, "imageInfoMap", new Map());
      X(this, "deleteTaskMap", new Map());
      X(this, "gifCoverUrlCacheMap", new Map());
      X(this, "objUrlList", new Map());
      X(this, "isOnline", true);
      X(this, "blockManager", undefined);
      X(this, "hadPlayedGifMap", new Map());
      X(this, "handleUpdateOnlineStatus", () => {
        let e = navigator.onLine;
        if (e === this.isOnline) {
          return;
        }
        this.isOnline = e;
        let {
          allImageBlocks: i
        } = this.getImageBlocks();
        i.forEach(i => i.updateOnlineStatus(e));
      });
      X(this, "handleBeforeunload", e => {
        let {
          allImageBlocks: i
        } = this.getImageBlocks();
        if (!docxOfflineImageFlags.isImageEditEnabled && i.some(e => e.isUploading)) {
          this.blockManager.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "exit_with_uncommitted",
            info: "image_manager"
          });
          let i = t("editor.leave_page_warning_message");
          e.returnValue = i;
          return platformDocUtils.WMy;
        }
      });
      X(this, "onOrientationChange", () => {
        let {
          allImageBlocks: e
        } = this.getImageBlocks();
        e.forEach(e => e.onOrientationChange());
      });
      this.blockManager = e;
      this.collectorManager = new L(this.blockManager);
      this.externalSaver = new externalImageUploadTaskManager.ExternalImageUploadManager(this.collectorManager);
      this.imageFetcher = new T(e.config.get("getAuthToken"));
    }
  }, d = K((c = u = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, blockManagerToken.blockManagerToken), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined])], u)).prototype, "docxSignalService", [l, docxSignalSubjectRegistry.docxSignalService], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), h = K(c.prototype, "lazyRecordStatus", [a, s], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), c)) || c;
  var eventBreakRuleToken = require("event-break-rule-token") /*id: 727603*/;
  var layoutNodeConfig = require("layout-node-config") /*id: 266509*/;
  var layoutNodeBuilderReexport = require("layout-node-builder-reexport") /*id: 893890*/;
  var captionEditorKeyboardCheck = require("caption-editor-keyboard-check") /*id: 28975*/;
  let ei = e => {
    let {
      event: i
    } = e;
    return captionEditorKeyboardCheck.isCaptionEditorKey(i);
  };
  var docxImageBlockModel = require("docx-image-block-model") /*id: 608725*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var imageOperationServiceProvider = require("image-operation-service-provider") /*id: 713630*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  function ea(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  let es = dependencyInjectionContainer.Provide(imageOperationServiceProvider.imageOpServiceName)(m = class {
    hasImageCropping() {
      return !!this.imageCropping$.getValue();
    }
    isImageCropping(e) {
      return this.imageCropping$.getValue() === e;
    }
    destroy() {
      this.imageCropping$.complete();
      this.imageResetCroppingData$.complete();
    }
    onServiceDispose() {
      this.destroy();
    }
    isOverideImageSlashItems() {
      return !!this._genImageSlashItemsFunc;
    }
    genImageSlashItems(e, i) {
      var n;
      return ((n = this._genImageSlashItemsFunc) === null || n === undefined ? undefined : n.call(this, e, i)) || null;
    }
    registerGenImageSlashItemsFunc(e) {
      this._genImageSlashItemsFunc = e;
    }
    constructor() {
      ea(this, "_genImageSlashItemsFunc", undefined);
      ea(this, "imageCropping$", new behaviorSubjectClass.BehaviorSubject(""));
      ea(this, "imageResetCroppingData$", new behaviorSubjectClass.BehaviorSubject(docxEditorConstants.editorPadding));
    }
  }) || m;
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxImageBlockView = require("docx-image-block-view") /*id: 600667*/;
  var em = reactReduxCore.connect((e, i) => {
    let n = syncedReferenceBlockUtils.getBlockTokenWithFallback(i.editorAPI, false, true);
    return {
      ...flowPermissionSelectors.selectActionFlags(e, i.struct.snapshot.image.token, n, true)
    };
  })(docxImageBlockView.DocxImageBlockView);
  function ev(e) {
    docxEditorCore.registerProviders([{
      provide: layoutNodeBuilderReexport.layoutNodeBuilder,
      useClass: layoutNodeConfig.LayoutNodeConfig,
      args: [docBlockTypeConstants.blockTypeConstants.IMAGE, {
        defaultHeight: 120,
        priority: bearVirtualLayoutReconciler.RenderPriority.PRIORITY
      }]
    }, Y, b, es, {
      provide: eventBreakRuleToken.eventBreakRuleToken,
      useValue: ei
    }]);
    docxEditorCore.registerViewModel(docxImageBlockModel.ImageBlockModel, {
      viewCreator: em,
      extensions: e
    });
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(imageManagerProviderName.imageManagerName).init();
    });
  }
  require.d(exports, {
    initImageEditor: function () {
      return ev;
    }
  });
}