// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'r' to 'typescriptRuntimeHelpers'
// - Resolved require(4100) to 'typescript-runtime-helpers'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 's' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'c' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'd' to 'boolDefaultUtil'
// - Resolved require(87573) to 'bool-default-util'
// - Renamed variable 'h' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'y' to 'blockLoadPerformanceTracker'
// - Resolved require(446264) to 'block-load-performance-tracker'
// - Renamed variable 'u' to 'fileUtilsAndViewHelpers'
// - Resolved require(192103) to 'file-utils-and-view-helpers'
// - Renamed variable 'g' to 'videoAnalyzerServiceProvider'
// - Resolved require(935951) to 'video-analyzer-service-provider'
// - Resolved require(475875) to 'docx-bool-config-getters'
// - Renamed variable 'p' to 'observableStateManager'
// - Resolved require(910520) to 'observable-state-manager'
// - Updated imported property 'd' to 'getDefaultBool' (module 87573)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'n8' to 'adjustImageDimensions' (module 192103)
// - Updated imported property 'v' to 'stateManager' (module 910520)
// - Updated imported property 'd' to 'BlockLoadPerformanceTracker' (module 446264)
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 't' to 'videoAnalyzerName' (module 935951)
// - Updated imported property 'gn' to 'metadata' (module 4100)
// - Updated imported property 'fM' to 'decorate' (module 4100)
// - Updated imported property 'w6' to 'reflectMetadata' (module 4100)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_video-analyzer.a6f307db.js
         * chunkId: 41966
         * moduleId: 264464
         */
module.exports = function (module, exports, require) {
  var l;
  var a;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var boolDefaultUtil = require("bool-default-util") /*id: 87573*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var blockLoadPerformanceTracker = require("block-load-performance-tracker") /*id: 446264*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var videoAnalyzerServiceProvider = require("video-analyzer-service-provider") /*id: 935951*/;
  require("docx-bool-config-getters") /*id: 475875*/;
  var observableStateManager = require("observable-state-manager") /*id: 910520*/;
  function f(e, i, t) {
    var l;
    if ((i = typeof (l = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var l = t.call(e, i || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? l : l + "") in e) {
      Object.defineProperty(e, i, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = t;
    }
    return e;
  }
  let z = boolDefaultUtil.getDefaultBool("ccm_docx_fileblock_analyze_video_size_total", 40000000);
  class _ {
    getAnalyzingFileSize() {
      return this.analyzingFileSize;
    }
    checkIsAnalyzingByRecordId(e) {
      return this.analyzingFileMap.has(e);
    }
    increaseAnalyzingFileSize(e) {
      return this.analyzingFileSize + e <= z && (this.analyzingFileSize += e, true);
    }
    decreaseAnalyzingFileSize(e) {
      this.analyzingFileSize = Math.max(0, this.analyzingFileSize - e);
      return true;
    }
    startAnalyzeVideo(e, i) {
      if (!e.type.startsWith("video") || !e || !e.size || !this.increaseAnalyzingFileSize(e.size) || this.checkIsAnalyzingByRecordId(i)) {
        return;
      }
      let t = URL.createObjectURL(e);
      let l = new AbortController();
      let a = document.createElement("video");
      this.analyzingFileMap.set(i, {
        video: a,
        eventController: l,
        size: e.size,
        startTime: Date.now()
      });
      try {
        a.src = xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-Wmti$3hy$2xjN*R*bFhO$2hp%0d3MldsaEpkb%Z-Tld0-$dHZDFaRWhP-%dOdFpERmpkejA5"
        });
        a.addEventListener("loadedmetadata", () => this.handleAnalyzeFinish(i), {
          once: true,
          signal: l.signal
        });
      } catch (t) {
        docxEventCollector.wrappedCollector("docx_file_block_dev", {
          action: "analyse_local_video",
          file_type: e.type,
          file_size: e.size,
          is_success: "false",
          error_msg: (t == null ? undefined : t.message) || JSON.stringify(t),
          record_id: i
        });
        this.stopAnalyzeByRecordId(i, t);
      }
    }
    handleAnalyzeFinish(e) {
      var i;
      let t = this.analyzingFileMap.get(e);
      if (!(t == null ? undefined : t.video)) {
        return;
      }
      let {
        video: l
      } = t;
      let {
        size: a,
        startTime: n
      } = t;
      let {
        videoWidth: r,
        videoHeight: o
      } = l;
      this.decreaseAnalyzingFileSize(a);
      URL.revokeObjectURL(l.src);
      l = null;
      this.analyzingFileMap.delete(e);
      let s = function (e, i) {
        let t = e.getBlockModelsByRecordId(i)[0];
        return !!t && !t.snapshot.file.originWidth;
      }(this.blockManager, e);
      (function (e, i, t, l) {
        let a = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
        if (t <= 0 || l <= 0) {
          return;
        }
        let {
          adjustWidth: n,
          adjustHeight: r
        } = fileUtilsAndViewHelpers.adjustImageDimensions(t, l);
        if (a && e.editable) {
          e.applyTransaction("setVideoSize", e => {
            e.replace(i, ["file", "originWidth"], t);
            e.replace(i, ["file", "originHeight"], l);
            e.replace(i, ["file", "width"], n);
            e.replace(i, ["file", "height"], r);
          }, {
            undoable: false
          });
        } else {
          observableStateManager.stateManager.setState(i, {
            width: n,
            height: r,
            originWidth: t,
            originHeight: l
          });
        }
      })(this.blockManager, e, r, o, s);
      let c = this.blockManager.getBlockViewsByRecordId(e)[0];
      if (c != null && (i = c.setLoadingForVideo) !== null && i !== undefined) {
        i.call(c, false);
      }
      let d = this.blockManager.getBlockModelsByRecordId(e)[0];
      let g = Date.now() - n;
      blockLoadPerformanceTracker.BlockLoadPerformanceTracker.reportBlockLoadStage({
        file_block_local_loadedmetadata_duration: g
      }, d.id);
      docxEventCollector.wrappedCollector("docx_file_block_dev", {
        action: "analyse_local_video",
        file_type: d.snapshot.type,
        file_size: a,
        is_success: "true",
        duration: g,
        record_id: e
      });
    }
    stopAnalyzeByRecordId(e, i) {
      let t = this.analyzingFileMap.get(e);
      if (!(t == null ? undefined : t.video)) {
        return;
      }
      let {
        video: l
      } = t;
      let {
        eventController: a,
        size: n,
        startTime: r
      } = t;
      if (a != null) {
        a.abort();
      }
      URL.revokeObjectURL(l.src);
      l = null;
      this.analyzingFileMap.delete(e);
      let o = Date.now() - r;
      docxEventCollector.wrappedCollector("docx_file_block_dev", {
        action: "analyse_local_video",
        file_size: n,
        is_success: "false",
        duration: o,
        record_id: e,
        error_msg: "stop_analyze"
      });
    }
    destroy() {
      this.analyzingFileMap.forEach((e, i) => this.stopAnalyzeByRecordId(i));
      this.analyzingFileMap.clear();
    }
    constructor(e) {
      f(this, "analyzingFileSize", 0);
      f(this, "blockManager", undefined);
      f(this, "analyzingFileMap", new Map());
      this.blockManager = e;
    }
  }
  let m = dependencyInjectionContainer.Provide(videoAnalyzerServiceProvider.videoAnalyzerName)((a = class {
    destroy() {
      var e;
      if ((e = this.instance) !== null && e !== undefined) {
        e.destroy();
      }
    }
    constructor(e) {
      var i;
      var t;
      var l;
      t = undefined;
      if ((i = typeof (l = function (e, i) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var t = e[Symbol.toPrimitive];
        if (t !== undefined) {
          var l = t.call(e, i || "default");
          if (typeof l != "object") {
            return l;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (i === "string" ? String : Number)(e);
      }(i = "instance", "string")) == "symbol" ? l : l + "") in this) {
        Object.defineProperty(this, i, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = t;
      }
      this.instance = new _(e);
    }
  }, l = a = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, blockManagerToken.blockManagerToken), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined])], a))) || l;
  function b() {
    docxEditorCore.registerProviders([{
      provide: videoAnalyzerServiceProvider.videoAnalyzerName,
      useClass: m
    }]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return b;
    }
  });
}