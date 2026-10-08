// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'kg' to 'trackCoverBug'
// - Renamed export 'ZP' to 'DocCoverEventTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 746198
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var eventCollectorClass = require("event-collector-class") /*id: 425897*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var jsonSafeUtils = require("json-safe-utils") /*id: 39873*/;
  function a(e, n, r) {
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
  function s(e, n) {
    if (n) {
      jsonSafeUtils.safeJsonStringify(n);
    }
    browserEnvironmentDetectionUtils.browserDetector.isMobile;
    docxEventCollector.docEventCollector("doc_bug_track_dev", {
      action: `[cover]:${e}`,
      info: n
    });
  }
  exports.DocCoverEventTracker = new class {
    initEvent() {
      return new eventCollectorClass.EventCollector({
        eventName: "ccm_doc_cover_choose_panel_click",
        sendEventType: eventCollectorClass.eventTypeEnum.Click,
        blockView: docxEditorBlockMetadataUtils.getPageBlockInfo(),
        extraParams: {
          click: "click_choose_cover"
        }
      });
    }
    applyCover(e = {}, n = false) {
      this.setStatus = true;
      if (this.sendEventWithDelay) {
        this.sendEventWithDelay.setExtraData(e);
      }
      this.send(n);
    }
    loadCover(e = {}) {
      this.loadStatus = true;
      if (this.sendEventWithDelay) {
        this.sendEventWithDelay.setExtraData(e);
      }
      this.send();
    }
    init() {
      this.loadStatus = this.setStatus = false;
      this.sendEventWithDelay = this.initEvent();
    }
    send(e = false) {
      if (this.sendEventWithDelay && (e || this.setStatus && this.loadStatus)) {
        this.sendEventWithDelay.send();
        this.setStatus = this.loadStatus = false;
        this.sendEventWithDelay = null;
      }
    }
    constructor() {
      a(this, "setStatus", undefined);
      a(this, "loadStatus", undefined);
      a(this, "sendEventWithDelay", undefined);
      this.setStatus = false;
      this.loadStatus = false;
    }
  }();
  require.d(exports, {
    trackCoverBug: function () {
      return s;
    }
  });
}