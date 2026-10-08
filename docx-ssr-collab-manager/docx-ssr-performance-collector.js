// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ssrPerformanceTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 970523
         */
module.exports = function (module, exports, require) {
  var s;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docxErrorStatusConsts = require("docx-error-status-consts") /*id: 731910*/;
  var docxPerformanceStageCollector = require("docx-performance-stage-collector") /*id: 753948*/;
  function h(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  (s = d || {})[s.REMOVE_SSR_SUCCESS = 0] = "REMOVE_SSR_SUCCESS";
  s[s.RENDER_EDITOR_SUCCESS = 1] = "RENDER_EDITOR_SUCCESS";
  var d = s;
  exports.ssrPerformanceTracker = new class {
    init() {
      this.extraData = {
        noSSR: 0,
        isSSRRemoved: 0,
        isEditorRendered: 0,
        removeSSROT: "none",
        removeSSRRAFDuration: 0,
        removeSSRTimeoutDuration: 0,
        removeSSRDuration: 0
      };
    }
    collectRemoveSSRRAFDuration(e, i) {
      this.extraData.removeSSROT = i;
      this.extraData.removeSSRRAFDuration = e;
    }
    collectRemoveSSRTimeoutDuration(e) {
      this.extraData.removeSSRTimeoutDuration = e;
    }
    collectRemoveSSRSuccessByNextRender(e) {
      docxPerformanceStageCollector.DocxPerformanceStageCollector.runInNextRender(() => this.collectRemoveSSRSuccess(e));
    }
    collectRenderEditorSuccessByNextRender(e) {
      docxPerformanceStageCollector.DocxPerformanceStageCollector.runInNextRender(() => this.collectRenderEditorSuccess(e));
    }
    collectAllowEditEnd(e, i) {
      let {
        noSSR: r,
        isSSRRemoved: s,
        isEditorRendered: n,
        removeSSRTimeoutDuration: o,
        removeSSRRAFDuration: h,
        removeSSRDuration: u,
        removeSSROT: f
      } = this.extraData;
      if ((r | s) & n) {
        docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData({
          no_ssr: r,
          collect_allow_edit_from: e,
          allow_edit_duration: i - docxPerformanceStageCollector.DocxPerformanceStageCollector.getStartTime(),
          hide_ssr_until_raf_duration: r ? 0 : h,
          hide_ssr_perf_duration: e === d.REMOVE_SSR_SUCCESS ? o - h : 0,
          remove_ssr_duration: r ? 0 : u,
          remove_ssr_rot: f
        });
        if (docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_ALLOW_EDIT_WITH_SSR_CLEAN === undefined) {
          docxUtilityHelpers.captureException(Error("invaild DOCX_RENDER_STAGE case happened"));
          docxPerformanceStageCollector.DocxPerformanceStageCollector.setExtraData({
            invaild_docx_render_stage_case: 1
          });
        }
        docxPerformanceStageCollector.DocxPerformanceStageCollector.updateStage(docxErrorStatusConsts.docxRenderStates.RENDER_DOCX_ALLOW_EDIT_WITH_SSR_CLEAN ?? 15);
      }
    }
    constructor() {
      h(this, "extraData", undefined);
      h(this, "collectRemoveSSRSuccess", e => {
        let i = e.current;
        let r = Date.now();
        this.extraData.isSSRRemoved = 1;
        if (i !== null) {
          this.extraData.removeSSRDuration = r - i;
        }
        this.collectAllowEditEnd(d.REMOVE_SSR_SUCCESS, r);
      });
      h(this, "collectRenderEditorSuccess", e => {
        this.extraData.isEditorRendered = 1;
        if (!window.collectParams?.hasSsrRender) {
          this.extraData.noSSR = 1;
        }
        this.collectAllowEditEnd(d.RENDER_EDITOR_SUCCESS, e.current || Date.now());
      });
      this.init();
      platformDocUtils.vpe.on(platformEventDefinitions.eventConstants.PC.COMMON.PERFORMANCE_STAGE_INIT, this.init);
    }
  }();
}