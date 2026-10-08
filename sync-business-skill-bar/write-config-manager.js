// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'WriteConfigManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 336456
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  function v(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class _ {
    static async getSettingDataWithOverrided() {
      let e = safeJsonUtils.safeParse(storageWrapperWithFallback.LocalStorageWrapper.getItem("override_ab_setting"), {});
      let [t, n] = await Promise.all([chatFgStoreHooks.fetchSourceData({
        source: chatStorageKeys.chatStorageKeys.setting
      }), chatFgStoreHooks.fetchSourceData({
        source: chatStorageKeys.chatStorageKeys.serverAB
      })]);
      this.isAllDataReady = !!t && !!n;
      return throttledDeepCloneUtil.throttledDeepClone({}, t, {
        ab_config: {
          ab_results: n
        }
      }, e);
    }
    static async fetchWriteConfig() {
      let {
        page_config: e = {},
        ab_config: t = {}
      } = await this.getSettingDataWithOverrided();
      let {
        hit_otter: n = false
      } = e;
      let {
        ab_results: i = {}
      } = t;
      let {
        doc_new_tab_home: r,
        doc_new_tag: o,
        doc_new_home: s,
        doc_needs_guidance: a,
        revision_guidance: l,
        revision_guidance_close: c,
        revision_guidance_popover: u,
        revision_direct_accept_revision_default: d,
        revision_direct_accept_revision_switch: p,
        ai_playground: h,
        inline_doc_card: f,
        doc_streaming_smooth: g,
        d2d_fusion: m
      } = i;
      return {
        inDocAbTest: !!r && !!o && !!s,
        newDoc: n,
        newTabHome: n && (!r || r === "true"),
        newTag: n && (!o || o === "true"),
        newHome: n && (!o || s === "true"),
        needsGuidance: n && !!a && a === "true",
        revisionGuidance: n && !!l && l === "true",
        revisionGuidanceClose: n && !!c && c === "true",
        revisionGuidancePopover: n && !!u && u === "true",
        revisionDirectAcceptRevisionDefault: n && !!d && d === "true",
        revisionDirectAcceptRevisionSwitch: n && !!p && p === "true",
        aiPlayground: n && !!h && h === "true",
        inlineDocCard: !!f && f === "true",
        docStreamingSmooth: !!g && g === "true",
        d2DFusion: n && !!m && m === "true"
      };
    }
    static getCurrentFreshStatus() {
      return {
        isLogined: userInfoStatusSelectors.selectUserInfoSuccess()
      };
    }
    static isDataFresh(e = {}) {
      let t = this.getCurrentFreshStatus();
      return deepEqualUtil_1.deepEqual(t, {
        ...this.freshStatus,
        ...e
      });
    }
    static getWriteConfig(e = {}) {
      let {
        forceFetch: t = false,
        ...n
      } = e;
      if (!this.config || !!t || !this.isAllDataReady || !this.isDataFresh(n)) {
        this.freshStatus = this.getCurrentFreshStatus();
        this.updateLoading(true);
        this.config = this.fetchWriteConfig().then(e => {
          if (this.isDataFresh()) {
            this.config = e;
          }
          return e;
        }).catch(e => {
          this.config = null;
          this.freshStatus = null;
          throw e;
        }).finally(() => {
          this.updateLoading(false);
        });
      }
      return this.config;
    }
    static async getConfigByKey(e, t) {
      return (await this.getWriteConfig(t))[e];
    }
    static useConfigByKey(e, t) {
      let {
        data: n = null,
        refresh: r
      } = useRequestHook.useRequest(async () => this.getWriteConfig(t));
      reactCoreLibraryReexport.useEffect(() => {
        this.events.on("after-refresh", r);
        return () => {
          this.events.off("after-refresh", r);
        };
      }, []);
      return n && n[e];
    }
    static updateLoading(e) {
      if (e !== this.loading) {
        this.events.emit("loading-change", e);
        this.loading = e;
      }
    }
    static useIsLoading() {
      let [e, t] = reactCoreLibraryReexport.useState(this.loading);
      reactCoreLibraryReexport.useEffect(() => {
        this.events.on("loading-change", t);
        return () => {
          this.events.off("loading-change", t);
        };
      }, []);
      return e;
    }
    static async refresh() {
      await this.getWriteConfig({
        forceFetch: true
      });
      this.events.emit("after-refresh");
    }
    static async isNewDoc(e = {}) {
      let {
        fallback: t,
        ...n
      } = e;
      try {
        return await this.getConfigByKey("newDoc", n);
      } catch (e) {
        if (!isUndefinedCheck.isUndefined(t)) {
          return t;
        }
        throw e;
      }
    }
    static useIsNewDoc(e = {}) {
      let {
        refreshWhenInitialFalse: t = false,
        ...n
      } = e;
      let r = this.useConfigByKey("newDoc", n);
      let o = usePreviousHook.usePrevious(r);
      reactCoreLibraryReexport.useEffect(() => {
        if (r === false && isNullishCheck.isNil(o) && t) {
          _.refresh();
        }
      }, [r]);
      return r;
    }
    static async isNewTag(e) {
      return this.getConfigByKey("newTag", e);
    }
    static useIsNewTag(e) {
      return this.useConfigByKey("newTag", e);
    }
    static async isNewHome(e) {
      return this.getConfigByKey("newHome", e);
    }
    static useIsNewHome(e) {
      return this.useConfigByKey("newHome", e);
    }
    static async isInDocAbTest(e) {
      return this.getConfigByKey("inDocAbTest", e);
    }
    static useIsInDocAbTest(e) {
      return this.useConfigByKey("inDocAbTest", e);
    }
    static async isNeedsGuidance(e) {
      return this.getConfigByKey("needsGuidance", e);
    }
    static useIsNeedsGuidance(e) {
      return this.useConfigByKey("needsGuidance", e);
    }
    static async isNeedRevisionGuidance(e) {
      return this.getConfigByKey("revisionGuidance", e);
    }
    static useNeedRevisionGuidance(e) {
      return this.useConfigByKey("revisionGuidance", e);
    }
    static async isNeedRevisionGuidanceClose(e) {
      return this.getConfigByKey("revisionGuidanceClose", e);
    }
    static useNeedRevisionGuidanceClose(e) {
      return this.useConfigByKey("revisionGuidanceClose", e);
    }
    static async isNeedRevisionGuidancePopover(e) {
      return this.getConfigByKey("revisionGuidancePopover", e);
    }
    static useNeedRevisionGuidancePopover(e) {
      return this.useConfigByKey("revisionGuidancePopover", e);
    }
    static async isDirectAcceptRevisionDefault(e) {
      return docPlaygroundCheck.isDocPlayground() || this.getConfigByKey("revisionDirectAcceptRevisionDefault", e);
    }
    static useDirectAcceptRevisionDefault(e) {
      return docPlaygroundCheck.isDocPlayground() || this.useConfigByKey("revisionDirectAcceptRevisionDefault", e);
    }
    static async isDirectAcceptRevisionSwitch(e) {
      return this.getConfigByKey("revisionDirectAcceptRevisionSwitch", e);
    }
    static useDirectAcceptRevisionSwitch(e) {
      return this.useConfigByKey("revisionDirectAcceptRevisionSwitch", e);
    }
    static async isAiPlayground(e) {
      return this.getConfigByKey("aiPlayground", e);
    }
    static useIsAiPlayground(e) {
      return this.useConfigByKey("aiPlayground", e);
    }
    static async isInlineDocCard(e) {
      return this.getConfigByKey("inlineDocCard", e);
    }
    static useInlineDocCard(e) {
      return this.useConfigByKey("inlineDocCard", e);
    }
    static async isDocStreamingSmooth(e) {
      return this.getConfigByKey("docStreamingSmooth", e);
    }
    static useDocStreamingSmooth(e) {
      return this.useConfigByKey("docStreamingSmooth", e);
    }
    static async isFusionDoc(e) {
      return this.getConfigByKey("d2DFusion", e);
    }
    static useFusionDoc(e) {
      return this.useConfigByKey("d2DFusion", e);
    }
  }
  v(_, "config", null);
  v(_, "freshStatus", null);
  v(_, "events", new eventEmitterWrapper_1.eventEmitter());
  v(_, "loading", false);
  v(_, "isAllDataReady", false);
  require.d(exports, {
    WriteConfigManager: function () {
      return _;
    }
  });
}