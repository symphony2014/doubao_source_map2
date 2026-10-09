// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D2' to 'trackCommentEvent'
// - Renamed export 'ZP' to 'DocCommentPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 178300
         */
module.exports = function (module, exports, require) {
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var commentSdkPlugins = require("comment-sdk-plugins") /*id: 335738*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var docxCommentFeatureFlags = require("docx-comment-feature-flags") /*id: 662786*/;
  var schedulerProvidersAccessor = require("scheduler-providers-accessor") /*id: 102884*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var docxCommentManagerProxy = require("docx-comment-manager-proxy") /*id: 755092*/;
  var commentPrefetchEvents = require("comment-prefetch-events") /*id: 110220*/;
  var docxCommentLoadCollector = require("docx-comment-load-collector") /*id: 720188*/;
  function E(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function C() {
    let e = {};
    e.promise = new Promise((i, r) => {
      e.resolve = i;
      e.reject = r;
    });
    return e;
  }
  function _(e) {
    return isFunctionUtil_1.isFunction(e == null ? undefined : e.then);
  }
  async function R() {
    return require.e("docx_comment_module") /*id: 58738*/.then(require.bind(require, "docx-comment-module") /*id: 849617*/);
  }
  function I(e, i = {}) {
    docxEventCollector.wrappedCollector("comment_monitor_dev", {
      action: e,
      source: "feed",
      ...i
    });
  }
  class M extends docxCommentManagerProxy.DocxCommentManager {
    get feedContainerReadyPromise() {
      return this.module?.feedContainerReadyPromise;
    }
    get isAutoLoad() {
      return !this.isSyncedReferenceBlock && (!!browserEnvironmentDetectionUtils.browserDetector.isFeed || !this.options.blockManager.config.get("isPresentationMode") && !!docxShortcutFeatureDetection.isAdminWithComment());
    }
    markRendered() {
      var e;
      if ((e = this.options.blockManager.editorAPI.getService(schedulerProvidersAccessor.docxSchedulerProv)) !== null && e !== undefined) {
        e.notifyCommentRendered();
      }
      reduxStoreInitializer.reduxStore.dispatch(businessStageConstants.businessConstants.updateBusinessStage(businessStageConstants.businessConstants.Business.Docx, businessStageConstants.businessConstants.DocxStage.CommentRendered));
    }
    setCurrentGlobalCommentList(e) {
      this.currentGlobalComments = e;
    }
    get currentGlobalCommenList() {
      return this.currentGlobalComments;
    }
    setCurrentCommentList(e) {
      this.currentComments = e;
    }
    get currentCommentList() {
      return this.currentComments;
    }
    get classType() {
      return docxCommentManagerProxy.CommentManagerType.pc;
    }
    handleCommentDidAdd(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.handleCommentDidAdd(e, i);
        }
      });
    }
    handleCommentDidResolve(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.handleCommentDidResolve(e);
        }
      });
    }
    handleCommentDidDelete(e, i) {
      this.ready(() => {
        var r;
        if ((r = this.module) !== null && r !== undefined) {
          r.handleCommentDidDelete(e, i);
        }
      });
    }
    handleUnloadListener() {
      if (!this.isSyncedReferenceBlock) {
        window.addEventListener("beforeunload", this.handleBeforeUnload);
      }
    }
    highlightWholeComment(e, i, r) {
      this.ready(() => {
        var n;
        if ((n = this.module) !== null && n !== undefined) {
          n.highlightWholeComment(e, i, r);
        }
      });
    }
    updateStoreCommentPosition(e) {
      this.ready(() => {
        var i;
        if ((i = this.module) !== null && i !== undefined) {
          i.updateStoreCommentPosition(e);
        }
      });
    }
    getInnerCommentModule() {
      var e;
      if ((e = this.module) === null || e === undefined) {
        return undefined;
      } else {
        return e.getInnerCommentModule();
      }
    }
    getReactionPanel() {}
    getCommentTracer(e) {
      if (this.isReady) {
        var i;
        if ((i = this.module) === null || i === undefined) {
          return undefined;
        } else {
          return i.getCommentTracer();
        }
      }
    }
    destroy() {
      super.destroy();
      this.currentComments = [];
      this.currentGlobalComments = [];
      window.removeEventListener("beforeunload", this.handleBeforeUnload);
    }
    constructor(e) {
      super(e);
      E(this, "loadingPromise", false);
      E(this, "currentGlobalComments", []);
      E(this, "currentComments", []);
      E(this, "globalCommentLoadedPromise", new Promise(e => {
        this.ready(() => {
          var i;
          if ((i = this.module) !== null && i !== undefined) {
            i.globalCommentLoadedPromise.then(e);
          }
        });
      }));
      E(this, "load", async () => {
        let e;
        if (this.isReady) {
          return;
        }
        if (platformDocUtils.KNd() || docComponentFeatureFlags.isCommentPartialOff() && !syncUrlBlockUtils.isSyncingActive()) {
          if (docxTaskSchedulerUtilities.getFlowWebPlatformUtils()) {
            docxTaskSchedulerUtilities.scheduleTaskWithConfig({
              name: "global.commentReactionListPreload",
              action: () => new Promise(e => {
                e(true);
              })
            });
            docxTaskSchedulerUtilities.scheduleTaskWithConfig({
              name: "global.revisionReactionListPreload",
              action: () => new Promise(e => {
                e(true);
              })
            });
          }
          if (docComponentFeatureFlags.isCommentPartialOff()) {
            this.markRendered();
          }
          return;
        }
        if (docComponentFeatureFlags.isSyncedBlockOpt()) {
          this.initSnapshotPatcher();
          this.markRendered();
          return;
        }
        if (this.loadingPromise) {
          return this.loadingPromise;
        }
        this.handleUnloadListener();
        let i = C();
        this.loadingPromise = i.promise;
        docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadStart, {
          depsLoading: _(M.defer),
          depsLoaded: !!M.defer,
          isSyncedReferenceBlock: this.isSyncedReferenceBlock
        });
        if (_(M.defer)) {
          e = await M.defer;
        } else if (M.defer) {
          e = M.defer;
        } else {
          try {
            var r;
            let i;
            let n;
            docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadMatchDefault);
            let s = C();
            M.defer = s.promise;
            await Promise.all([docxUtilityHelpers.retryWithDelay(platformDocUtils.ycm), docxUtilityHelpers.retryWithDelay(platformDocUtils.g6N)]);
            docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadDeps);
            let a = await docxUtilityHelpers.retryWithDelay(R);
            docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadModule);
            e = a.default;
            let {
              commentDataFetcher: d
            } = this.options;
            if (d) {
              if (!(n = d.getCore())) {
                d.setNeedScheduleCore(false);
              }
              i = d.getInitData();
            }
            r = {
              prefetchInitData: i,
              enableSyncV2: !docxShortcutFeatureDetection.isAdminWithComment(),
              dataScheduleOptions: {
                need_reaction: false,
                enable: docxCommentFeatureFlags.isMobileCommentEnabled(),
                core: n
              }
            };
            docxPerformanceStageCollector.DocxPerformanceStageCollector.updateLoadMainStageDurationList(platformDocUtils.Gkz.DOCX, platformDocUtils.Mbm.FETCH_FILE_COMMENT_START);
            commentSdkPlugins.commentPluginManager.getCurrentSuiteCommentSDK(r);
            docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadGetSdkDone);
            M.defer = e;
            s.resolve(e);
          } catch (e) {
            docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadError, {
              message: e.message,
              data: JSON.stringify({
                stack: e.stack
              }),
              isSyncedReferenceBlock: this.isSyncedReferenceBlock
            });
            this.loadingPromise = false;
            return;
          }
        }
        try {
          let i = new e(this.options);
          this.setModule(i);
          this.ready(true);
          i.detectReady();
          docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadReady, {
            isSyncedReferenceBlock: this.isSyncedReferenceBlock
          });
          if (i.getInnerCommentModule().hasInitCommentData) {
            i.triggerReady();
          }
        } catch (e) {
          docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.connectorLoadNewModuleError, {
            message: e.message,
            data: JSON.stringify({
              stack: e.stack
            }),
            isSyncedReferenceBlock: this.isSyncedReferenceBlock
          });
        }
        this.loadingPromise = false;
        i.resolve();
      });
      E(this, "handleBeforeUnload", () => {
        let e;
        if (!!this.commentModuleStartLoad && !this.isSyncedReferenceBlock && (!this.module || !this.module.getIsReady() || !this.module.docCommentLoaded)) {
          e = this.module ? {
            isReady: this.module.getIsReady(),
            docCommentLoaded: this.module.docCommentLoaded
          } : {
            depsLoading: _(M.defer),
            depsLoaded: !!M.defer,
            loadingPromise: !!this.loadingPromise
          };
          this._pageLeaveReported = true;
          docxCommentLoadCollector.collectDocxCommentLoad(commentPrefetchEvents.commentEventConstants.pageLeave, e, true);
        }
      });
      if (this.isAutoLoad) {
        this.load();
      }
    }
  }
  E(M, "defer", null);
  exports.DocCommentPlugin = M;
  require.d(exports, {
    trackCommentEvent: function () {
      return I;
    }
  });
}