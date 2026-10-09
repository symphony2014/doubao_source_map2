// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LineEditableManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 996925
         */
module.exports = function (module, exports, require) {
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  function l(e, n, r) {
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
  exports.LineEditableManager = new class {
    init() {
      docxEditorEventConstantsAndManager.globalEventBus.on(docxEditorEventConstantsAndManager.eventConstants.COMMON.HEARTBEAT_CALLBACK, this.handleHeartbeatCallback);
    }
    destroy() {
      this.fetched = false;
      this.lineEditable = false;
      docxEditorEventConstantsAndManager.globalEventBus.off(docxEditorEventConstantsAndManager.eventConstants.COMMON.HEARTBEAT_CALLBACK, this.handleHeartbeatCallback);
    }
    async fetchLineEditableFg() {
      this.lineEditable = true;
      this.fetched = true;
    }
    constructor() {
      l(this, "lineEditable", undefined);
      l(this, "fetched", false);
      l(this, "handleHeartbeatCallback", () => {
        if (this.fetched) {
          this.throttleFetchLineEditableFg();
          return;
        }
        this.fetchLineEditableFg();
      });
      l(this, "throttleFetchLineEditableFg", debounceUtilWrapper.createDebounce(this.fetchLineEditableFg, 1800000, {
        leading: true
      }));
      this.fetchLineEditableFg = this.fetchLineEditableFg.bind(this);
    }
  }();
}