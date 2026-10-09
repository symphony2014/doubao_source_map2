// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'SelectionEventHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 873551
         */
module.exports = function (module, exports, require) {
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  class i {
    setup() {
      if (this.onBeforeStart) {
        this.context.on(eventTypeConstants.selectionEvents.beforeStart, this.onBeforeStart);
      }
      if (this.onContextmenu) {
        this.context.on(eventTypeConstants.selectionEvents.contextmenu, this.onContextmenu);
      }
      this.context.on(eventTypeConstants.selectionEvents.start, this.onStart);
      if (this.onMove) {
        this.context.on(eventTypeConstants.selectionEvents.move, this.onMove);
      }
      this.context.on(eventTypeConstants.selectionEvents.stop, this.onStop);
      if (this.onBrowserSelectionChange) {
        this.context.on(eventTypeConstants.selectionEvents.browserSelectionChange, this.wrapBrowserSelectionChange);
      }
    }
    destroy() {
      if (this.onBeforeStart) {
        this.context.off(eventTypeConstants.selectionEvents.beforeStart, this.onBeforeStart);
      }
      if (this.onContextmenu) {
        this.context.off(eventTypeConstants.selectionEvents.contextmenu, this.onContextmenu);
      }
      this.context.off(eventTypeConstants.selectionEvents.start, this.onStart);
      if (this.onMove) {
        this.context.off(eventTypeConstants.selectionEvents.move, this.onMove);
      }
      this.context.off(eventTypeConstants.selectionEvents.stop, this.onStop);
      if (this.onBrowserSelectionChange) {
        this.context.off(eventTypeConstants.selectionEvents.browserSelectionChange, this.wrapBrowserSelectionChange);
      }
    }
    constructor(e) {
      var n;
      var r;
      var o;
      this.context = e;
      n = "wrapBrowserSelectionChange";
      r = (e, n) => {
        if (this.context.blockManager.modelService.isInitialDataReady() && this.onBrowserSelectionChange) {
          this.onBrowserSelectionChange(e, n);
        }
      };
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
      }(n, "string")) == "symbol" ? o : o + "") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
    }
  }
  require.d(exports, {
    SelectionEventHandler: function () {
      return i;
    }
  });
}