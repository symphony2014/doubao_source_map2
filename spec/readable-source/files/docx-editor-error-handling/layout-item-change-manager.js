// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'LayoutItemChangeManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 988323
         */
module.exports = function (module, exports, require) {
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var layoutEventTypes = require("layout-event-types") /*id: 580889*/;
  function l(e, i, r) {
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
  class s {
    constructor(e) {
      var i = this;
      this.host = e;
      l(this, "eventEmitter", new docxEditorEventConstantsAndManager.EventEmitter());
      l(this, "cacheHostEle", undefined);
      l(this, "cacheHostRect", new DOMRect(0, 0, 0, 0));
      l(this, "isNeedUpdateCache", true);
      l(this, "getHost", () => {
        this.cacheHostEle ||= this.host && this.host();
        return this.cacheHostEle;
      });
      l(this, "getHostRect", () => {
        var e;
        let i = this.getHost && ((e = this.getHost()) === null || e === undefined ? undefined : e.getBoundingClientRect());
        if (i) {
          this.cacheHostRect = i;
          this.isNeedUpdateCache = false;
        }
        return i || new DOMRect(0, 0, 0, 0);
      });
      l(this, "getHostRectCache", () => this.isNeedUpdateCache ? this.getHostRect() : this.cacheHostRect);
      l(this, "emitLayoutChange", function (e) {
        var r = arguments.length;
        var n = Array(r > 1 ? r - 1 : 0);
        var l = 1;
        for (; l < r; l++) {
          n[l - 1] = arguments[l];
        }
        i.eventEmitter.emit(layoutEventTypes.layoutEventTypes.LAYOUT_ITEM_CHANGE, e, ...n);
        i.isNeedUpdateCache = true;
      });
      l(this, "onLayoutChange", e => {
        this.eventEmitter.on(layoutEventTypes.layoutEventTypes.LAYOUT_ITEM_CHANGE, e);
        return () => {
          this.eventEmitter.removeListener(layoutEventTypes.layoutEventTypes.LAYOUT_ITEM_CHANGE, e);
        };
      });
    }
  }
  require.d(exports, {
    LayoutItemChangeManager: function () {
      return s;
    }
  });
}