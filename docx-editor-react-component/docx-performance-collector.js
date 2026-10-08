// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'DocxPerformanceCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21824.a596cfb5.js
         * chunkId: 21824
         * moduleId: 258745
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var docxPerfMarkConstants = require("docx-perf-mark-constants") /*id: 895953*/;
  var docxErrorStatusConsts = require("docx-error-status-consts") /*id: 731910*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  function c(e, i, r) {
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
  let d = new class {
    init() {
      this.runCounts.clear();
      this.costTimes.clear();
    }
    getRunCountsByName(e) {
      return this.runCounts.get(e);
    }
    getCostTimesByName(e) {
      return this.costTimes.get(e)?.[0];
    }
    forEachCollectInfos(e) {
      this.runCounts.forEach((i, r) => {
        e(i, r);
      });
      this.costTimes.forEach((i, r) => {
        e(i[0], r);
      });
    }
    countRunTimes(e, i) {
      this.runCounts.set(e, i ?? (this.runCounts.get(e) ?? 0) + 1);
    }
    countCostTimes(e, i) {
      let r = Date.now();
      if (i === undefined) {
        let i = this.costTimes.get(e) ?? [0, r];
        this.costTimes.set(e, [r - i[1] + i[0], r]);
      } else {
        this.costTimes.set(e, [i, r]);
      }
    }
    constructor() {
      c(this, "runCounts", new Map());
      c(this, "costTimes", new Map());
    }
  }();
  function u(e, i, r) {
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
  let h = new class {
    setPerfParams(e) {
      if (this.isInited) {
        if ("setPerfParams" in docxPerformanceStageCollector.DocxPerformanceStageCollector) {
          docxPerformanceStageCollector.DocxPerformanceStageCollector.setPerfParams(e);
          return;
        }
        docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData(e);
      }
    }
    perfCollectorInit() {
      this.isInited = true;
      platformDocUtils.vpe.on(platformEventDefinitions.eventConstants.PC.COMMON.PERFORMANCE_STAGE_INIT, this.handleStageInit);
      platformDocUtils.vpe.on(platformEventDefinitions.eventConstants.PC.COMMON.PERFORMANCE_STAGE_UPDATE, this.handleStageUpdate);
    }
    perfCollectTime(e, i, {
      once: r = false
    } = {}) {
      if (!!this.isInited && (!r || !this.collectedSet.has(e))) {
        if (docxPerfMarkConstants.enablePerfMark) {
          performance.mark(e);
        }
        this.collectedSet.add(e);
        this.setPerfParams({
          [e]: i ?? Date.now() - docxPerformanceStageCollector.DocxPerformanceStageCollector.getStartTime()
        });
      }
    }
    perfCollectTimeOnce(e, i) {
      this.perfCollectTime(e, i, {
        once: true
      });
    }
    perfCollectCount(e, i) {
      if (this.isInited) {
        if (docxPerfMarkConstants.enablePerfMark) {
          performance.mark(e);
        }
        d.countRunTimes(e, i);
      }
    }
    perfCollectCountWithEndStage(e, i, {
      endStage: r
    } = {
      endStage: docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_ALLOW_EDIT
    }) {
      if (!this.endStageSet.has(r)) {
        this.perfCollectCount(e, i);
      }
    }
    constructor() {
      u(this, "collectedSet", new Set());
      u(this, "endStageSet", new Set());
      u(this, "isInited", false);
      u(this, "handleStageInit", () => {
        d.init();
        this.endStageSet.clear();
        this.collectedSet.clear();
      });
      u(this, "handleStageUpdate", e => {
        let {
          stage: i,
          curModule: r
        } = e;
        if (this.isInited && r === platformDocUtils.Gkz.DOCX && i === docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_ALLOW_EDIT) {
          let e = {};
          d.forEachCollectInfos((i, r) => {
            e[r] = i;
          });
          this.endStageSet.add(i);
          this.setPerfParams(e);
        }
      });
    }
  }();
  require.d(exports, {
    DocxPerformanceCollector: function () {
      return h;
    }
  });
}