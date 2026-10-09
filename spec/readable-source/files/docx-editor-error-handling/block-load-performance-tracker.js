// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'BlockLoadPerformanceTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 446264
         */
module.exports = function (module, exports, require) {
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var observableTakeOperator = require("observable-take-operator") /*id: 731916*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var docxPerfMarkConstants = require("docx-perf-mark-constants") /*id: 895953*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  require("json-safe-utils") /*id: 39873*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var flowDocChatMemberIo = require("flow-doc-chat-member-io") /*id: 956604*/;
  var docBlockAnalyticsConstants = require("doc-block-analytics-constants") /*id: 337105*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var blockMacroUtils = require("block-macro-utils") /*id: 761509*/;
  function _(e, i, r) {
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
  let R = new class {
    listenRouteChange() {
      var e;
      e = () => this.reset();
      platformDocUtils.m8M.listen(e);
    }
    registerPermanentStage(e, i, r) {
      let o = this.permanentStage.get(e) ?? {};
      this.permanentStage.set(e, throttledDeepCloneUtil.throttledDeepClone(o, {
        [i]: r
      }));
      Object.values(this.blockLoadRecords).filter(i => {
        let {
          type: r
        } = i;
        return r === e;
      }).forEach(e => {
        this.addPermanentStage(e);
        this.reportIfCollectEnd(i, e);
      });
    }
    addPermanentStage(e) {
      let {
        id: r,
        type: n
      } = e;
      if (this.permanentStage.has(n)) {
        this.modifyBlockLoadRecord({
          id: r,
          loadMainStageDurationList: this.permanentStage.get(n) ?? {}
        });
      }
    }
    blockTTVisTTU(e) {
      return !docBlockAnalyticsConstants.fileBlockTypes.includes(e);
    }
    modifyBlockLoadRecord(e) {
      let {
        id: i
      } = e;
      let r = this.blockLoadRecords[i];
      if (r) {
        this.blockLoadRecords[i] = throttledDeepCloneUtil.throttledDeepClone(r, e);
      }
    }
    clearStageInfo(e, i) {
      let r = this.blockLoadRecords[i] || {};
      if (r.loadMainStageDurationList) {
        delete r.loadMainStageDurationList[docBlockAnalyticsConstants.blockEventNames[e]];
      }
    }
    recordBlockProfile(e, i) {
      this.modifyBlockLoadRecord({
        id: e,
        profile: i
      });
    }
    reportIfCollectEnd(e, i, r = false) {
      let {
        id: n
      } = i;
      let o = function (e, i) {
        let {
          type: r,
          profile: n = {},
          loadMainStageDurationList: o = {}
        } = i;
        return ({
          [docxViewConfigConstants.viewTypeFile]() {
            let {
              block_file_type: i = null
            } = n;
            switch (i) {
              case viewTypeConstants.viewTypes.Card:
              case viewTypeConstants.viewTypes.Inline:
                return e === docBlockAnalyticsConstants.blockStateConstants.TTV;
              case viewTypeConstants.viewTypes.Preview:
                return e === docBlockAnalyticsConstants.blockStateConstants.TTU;
              default:
                return false;
            }
          },
          [docBlockTypeConstants.blockTypeConstants.TASK_LIST]: () => e === docBlockAnalyticsConstants.blockStateConstants.TTU,
          [docBlockTypeConstants.blockTypeConstants.SHEET]() {
            let e = o[docBlockAnalyticsConstants.sheetToUsage.SHEET_TO_USAGE];
            let i = o[docBlockAnalyticsConstants.blockEventNames[docBlockAnalyticsConstants.blockStateConstants.TTU]];
            return !isNullishCheck.isNil(e) && !isNullishCheck.isNil(i);
          },
          [docBlockTypeConstants.blockTypeConstants.BITABLE]: () => e === docBlockAnalyticsConstants.blockStateConstants.TTU
        }[r] || function () {
          if (r && blockMacroUtils.blockTypes.has(r)) {
            return e === docBlockAnalyticsConstants.blockStateConstants.TTU;
          } else {
            return e === docBlockAnalyticsConstants.blockStateConstants.TTU || e === docBlockAnalyticsConstants.blockStateConstants.TTV;
          }
        })();
      }(e, i);
      let {
        type: l,
        profile: s = {},
        loadMainStageDurationList: a = {}
      } = i;
      let c = a[docBlockAnalyticsConstants.blockEventNames[docBlockAnalyticsConstants.blockStateConstants.SHOW]] !== undefined;
      let d = l === docBlockTypeConstants.blockTypeConstants.JIRA_ISSUE || l === docxViewConfigConstants.viewTypeFile && s.block_file_type === viewTypeConstants.viewTypes.Inline;
      let u = (c || d) && o || this.readyButNeverInViewportIds.has(n) && e === docBlockAnalyticsConstants.blockStateConstants.SHOW;
      if (o && !c && !d) {
        this.readyButNeverInViewportIds.add(n);
        return;
      }
      if (u) {
        let e = {};
        if (r) {
          Object.assign(e, {
            isFromCache: true
          });
        }
        let {
          block_ttv: i,
          block_ttu: o
        } = this.blockLoadRecords[n]?.loadMainStageDurationList;
        if (i === undefined && o !== undefined) {
          Object.assign(e, {
            loadMainStageDurationList: {
              [docBlockAnalyticsConstants.blockEventNames[docBlockAnalyticsConstants.blockStateConstants.TTV]]: o
            }
          });
        }
        this.modifyBlockLoadRecord({
          id: n,
          ...e
        });
        this.blockTeaReport(n);
        if (this.hasFirstScreenBlockIdsInWhileList) {
          this.firstScreenBlockIdsInWhileList = this.firstScreenBlockIdsInWhileList.filter(e => e !== n);
          if (this.firstScreenBlockIdsInWhileList.length === 0) {
            docxPerformanceStageCollector.DocxPerformanceStageCollector.setFirstScreenBlockLoaded();
          }
        }
        this.cleanReportData(n);
      }
    }
    reportBlockLoadStage(e, i) {
      Promise.resolve().then(() => {
        if (typeof e == "string" && typeof i != "number") {
          let {
            id: r,
            type: n
          } = i;
          if (e === docBlockAnalyticsConstants.blockStateConstants.INIT) {
            if (this.needReportBlockIds.includes(r)) {
              return;
            }
            this.needReportBlockIds.push(r);
            if (n) {
              this.blockLoadRecords[r] = {
                loadMainStageDurationList: {
                  [docBlockAnalyticsConstants.blockEventNames[docBlockAnalyticsConstants.blockStateConstants.INIT]]: i.time
                },
                ...i
              };
            }
            return;
          }
          let o = this.blockLoadRecords[r];
          if (!o) {
            return;
          }
          if (e === docBlockAnalyticsConstants.blockStateConstants.TURN_INTO_REAL_TYPE) {
            this.modifyBlockLoadRecord({
              id: r,
              loadMainStageDurationList: {
                [docBlockAnalyticsConstants.blockEventNames[docBlockAnalyticsConstants.blockStateConstants.TURN_INTO_REAL_TYPE]]: i.time || 0
              }
            });
            return;
          }
          this.modifyBlockLoadRecord({
            ...o,
            loadMainStageDurationList: {
              [docBlockAnalyticsConstants.blockEventNames[e]]: i.time || 0
            }
          });
          this.addPermanentStage(o);
          let {
            isFromCache: l
          } = i;
          this.reportIfCollectEnd(e, o, l);
        } else if (typeof e == "object" && typeof i == "number") {
          this.modifyBlockLoadRecord({
            id: i,
            loadMainStageDurationList: e
          });
        }
      });
    }
    hasReportedBlockErrorSet(e, i) {
      let r = this.getErrorKey(e, i);
      return this.reportedBlockErrorSet.has(r);
    }
    getErrorKey(e, i) {
      let r = this.isInViewport(e);
      return `${e}-${r}-${i}`;
    }
    isInViewport(e) {
      let {
        blockManager: r
      } = this;
      if (!r) {
        return;
      }
      let n = syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(r, e);
      if (!n) {
        return;
      }
      let {
        struct: o
      } = n;
      let l = o.parent?.id;
      return !!(o.isInline() && l ? r.layoutManager.isBlockInViewport(l) : r.layoutManager.isBlockInViewport(e));
    }
    reportBlockLoadError(e) {
      let {
        id: i,
        type: r,
        errorMessage: o,
        errorCode: l,
        errorType: s,
        reportTimes: c = 0
      } = e;
      let {
        blockManager: d
      } = this;
      if (!d) {
        return;
      }
      let u = syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(d, i);
      if (!u) {
        return;
      }
      let {
        struct: h
      } = u;
      let {
        source: g
      } = h;
      let m = this.isInViewport(i);
      let v = this.getErrorKey(i, c);
      if (this.hasReportedBlockErrorSet(i, c)) {
        return;
      }
      let b = this.getBlockLoadReportData(i);
      let y = {
        block_type: r,
        block_id: i,
        is_in_synced_reference: syncedReferenceBlockUtils.isSyncedReferenceBlock(u.editorAPI),
        is_inline: h.isInline(),
        is_in_viewport: m,
        is_online: networkStateEventCollector.collectNetworkState(),
        source: g,
        is_first_screen: +!!this.firstScreenBlockIds.includes(i),
        open_from: this.openFrom,
        platform: browserEnvironmentDetectionUtils.browserDetector.isMobile ? "mobile" : "pc",
        error_reason: o || "error",
        error_code: l,
        error_type: s,
        member_id: `${flowDocChatMemberIo.getChatIoInstance().getMemberId()}`,
        block_load_data: JSON.stringify(b),
        report_times: c,
        record_id: b.record_id
      };
      this.reportedBlockErrorSet.add(v);
      docxEventCollector.wrappedCollector(docBlockAnalyticsConstants.loadFailMetric, y);
      if (c === 0) {
        var E;
        if ((E = syncedReferenceBlockUtils.getBlockViewByBlockIdWithSynced(d, i)) !== null && E !== undefined) {
          E.setViewLoaded(false);
        }
      }
    }
    setBlockManager(e) {
      this.blockManager = e;
    }
    cleanup() {
      this.blockManager = undefined;
    }
    reportBlockInit(e, i) {
      if (docBlockTypeConstants.allBlockTypeSet.has(e.type)) {
        this.reportBlockLoadStage(docBlockAnalyticsConstants.blockStateConstants.INIT, {
          id: e.id,
          time: Date.now(),
          type: e.type,
          from: i
        });
      }
    }
    getBlockLoadReportData(e) {
      try {
        var n;
        let {
          type: l,
          from: s,
          isRetry: a,
          loadMainStageDurationList: u = {},
          viewBlockHasLeave: f,
          profile: g
        } = this.getBlockLoadInfo(e);
        let m = this.firstScreenBlockIds.includes(e);
        let {
          block_show_in_viewport: v,
          block_ttv: b,
          block_ttu: y
        } = u;
        if (this.effectiveSSRDomReadyTime && m && window.docSSRDomReadyTime) {
          u.ssr_dom_ready_time = window.docSSRDomReadyTime;
        }
        let E = this.blockManager && syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(this.blockManager, e)?.recordId;
        let C = {
          block_type: l,
          block_id: e,
          is_onscreen: +!!v,
          is_first_screen: +!!m,
          is_buffer_block: this.firstScreenBufferBlockIds.includes(e),
          is_retry: a,
          view_block_has_leave: +!!f,
          from: s,
          load_main_stage_duration_list: JSON.stringify(u),
          block_profile: Object.assign(this.getCommonProfile(e), g),
          open_from: this.openFrom,
          fg: {
            is_schedule_v2_enable: docxTaskSchedulerUtilities.getFlowWebPlatformUtils(),
            is_mobile_blockssr_enabled: docxFeatureFlags.isE2Enabled()
          },
          member_id: `${flowDocChatMemberIo.getChatIoInstance().getMemberId()}`,
          has_doc_ssr: this.openFrom === docBlockAnalyticsConstants.urlParam && this.hasDocSSR,
          doc_render_start_time: docxPerformanceStageCollector.DocxPerformanceStageCollector.getStartTime(),
          doc_all_done: ((n = this.blockManager) === null || n === undefined ? undefined : n.lazyRecordStatus?.isAllDone) || false,
          record_id: platformDocUtils.p5T(E)
        };
        if (v) {
          if (b !== undefined) {
            C.load_ttv_duration_ms = Math.max(b - v, 0);
          }
          if (y !== undefined) {
            C.load_ttu_duration_ms = Math.max(y - v, 0);
          }
        }
        return C;
      } catch (e) {
        return {};
      }
    }
    blockTeaReport(e) {
      if (!this.needReportBlockIds.includes(e)) {
        return;
      }
      let i = this.getBlockLoadInfo(e);
      if (!i) {
        return;
      }
      let r = this.getBlockLoadReportData(e);
      if (!r) {
        return;
      }
      let {
        type: n
      } = i;
      if (this.firstScreenBlockIds.includes(e)) {
        docxPerformanceStageCollector.DocxPerformanceStageCollector.setOtherEventData(docBlockAnalyticsConstants.loadDurationMetric, r);
      }
      docxEventCollector.wrappedCollector(docBlockAnalyticsConstants.loadDurationMetric, r);
      if (n) {
        this.onBlockLoadCbs.forEach(i => i({
          id: e,
          type: n,
          ttu_duration: r.load_ttu_duration_ms
        }));
      }
    }
    onBlockLoadEnd(e) {
      this.onBlockLoadCbs.push(e);
    }
    offBlockLoadEnd(e) {
      let i = this.onBlockLoadCbs.indexOf(e);
      if (i > -1) {
        this.onBlockLoadCbs.splice(i, 1);
      }
    }
    getBlockLoadInfo(e) {
      return this.blockLoadRecords[e];
    }
    getCommonProfile(e) {
      var i;
      var r;
      var n;
      if (!this.blockManager) {
        return {};
      }
      let o = syncedReferenceBlockUtils.getBlockModelByBlockIdWithSynced(this.blockManager, e);
      return {
        ancestor_root_block_type: o && (i = this.blockManager, r = o.editorAPI, n = this.blockManager.getBlockViewByBlockIdNotCheck(e), syncedReferenceBlockUtils.isSyncedReferenceBlock(r) ? docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE : n && docxSyncedBlockUtils.findSyncedSourceId(n.model, i) ? docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE : null) || docBlockTypeConstants.blockTypeConstants.PAGE
      };
    }
    cleanReportData(e) {
      let i = this.needReportBlockIds.indexOf(e);
      if (i > -1) {
        this.needReportBlockIds.splice(i, 1);
      }
      this.readyButNeverInViewportIds.delete(e);
      delete this.blockLoadRecords[e];
    }
    constructor() {
      _(this, "blockLoadRecords", {});
      _(this, "needReportBlockIds", []);
      _(this, "blockManager", undefined);
      _(this, "firstScreenBufferBlockIds", []);
      _(this, "firstScreenBlockIds", []);
      _(this, "firstScreenBlockIdsInWhileList", []);
      _(this, "hasFirstScreenBlockIdsInWhileList", false);
      _(this, "effectiveSSRDomReadyTime", true);
      _(this, "openFrom", docxPerformanceStageCollector.DocxPerformanceStageCollector.from || docBlockAnalyticsConstants.urlParam);
      _(this, "hasDocSSR", window.collectParams?.hasSsrRender || false);
      _(this, "permanentStage", new Map());
      _(this, "reportedBlockErrorSet", new Set());
      _(this, "readyButNeverInViewportIds", new Set());
      _(this, "onBlockLoadCbs", []);
      _(this, "subRenderFirstScreenSuccess", null);
      _(this, "getFirstScreenBlockIds", () => this.firstScreenBlockIds);
      _(this, "initEvent", () => {
        this.subRenderFirstScreenSuccess = docxEditorEventConstantsAndManager.globalReplaySubject.pipe(observableTakeOperator.takeOperator(1)).subscribe(this.handleRenderDocxFirstScreenSuccess);
        window.addEventListener("visibilitychange", this.viewBlockMarkLeave);
      });
      _(this, "destroy", () => {
        var e;
        this.onBlockLoadCbs = [];
        if ((e = this.subRenderFirstScreenSuccess) !== null && e !== undefined) {
          e.unsubscribe();
        }
        this.subRenderFirstScreenSuccess = null;
        window.removeEventListener("visibilitychange", this.viewBlockMarkLeave);
      });
      _(this, "handleRenderDocxFirstScreenSuccess", () => {
        var e;
        var i;
        var r;
        var n;
        this.firstScreenBlockIds = ((i = this.blockManager) === null || i === undefined ? undefined : (e = i.layoutManager) === null || e === undefined ? undefined : e.getViewportBlocks()) || [];
        this.firstScreenBufferBlockIds = ((n = this.blockManager) === null || n === undefined ? undefined : (r = n.layoutManager) === null || r === undefined ? undefined : r.getBufferBlocks()) || [];
        if (this.firstScreenBlockIds?.length) {
          this.firstScreenBlockIdsInWhileList = this.firstScreenBlockIds.filter(e => {
            var i;
            let r = (i = this.blockManager) === null || i === undefined ? undefined : i.getBlockModelByBlockIdNotCheck(e);
            return !!r && docBlockTypeConstants.allBlockTypeSet.has(r.type);
          });
        }
        if (this.firstScreenBlockIdsInWhileList.length) {
          this.hasFirstScreenBlockIdsInWhileList = true;
        } else {
          docxPerformanceStageCollector.DocxPerformanceStageCollector.setFirstScreenBlockLoaded();
        }
      });
      _(this, "reset", () => {
        this.destroy();
        this.cleanup();
        this.readyButNeverInViewportIds.clear();
        this.firstScreenBlockIds = [];
        this.firstScreenBlockIdsInWhileList = [];
        this.blockLoadRecords = {};
        this.hasFirstScreenBlockIdsInWhileList = false;
        this.effectiveSSRDomReadyTime = false;
        this.openFrom = docBlockAnalyticsConstants.spaMode;
        this.initEvent();
      });
      _(this, "viewBlockMarkLeave", () => {
        if (document.visibilityState === "hidden") {
          Object.keys(this.blockLoadRecords).forEach(e => {
            if (this.blockLoadRecords[e].show) {
              this.blockLoadRecords[e].viewBlockHasLeave = true;
            }
          });
        }
      });
      this.listenRouteChange();
      this.initEvent();
    }
  }();
  if (docxPerfMarkConstants.enablePerfMark) {
    window.blockLoadRecord = R;
  }
  require.d(exports, {
    BlockLoadPerformanceTracker: function () {
      return R;
    }
  });
}