// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'SelectionChangeHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 126916
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var immediatelySignalModule = require("immediately-signal-module") /*id: 734298*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  function s(e, i, r) {
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
  class a {
    updateCurrentSelection(e) {
      this.current = e;
    }
    constructor(e, i) {
      this.prev = e;
      this.current = i;
    }
  }
  class c {
    restoreSelection(e, i) {
      if (this.selectionInfo) {
        this.selectionInfo.updateCurrentSelection(i);
      } else {
        this.selectionInfo = new a(e, i);
      }
    }
    removeSelectionInfo() {
      this.selectionInfo = null;
    }
    init(e, i, r) {
      this.selectionChangeCallback = e;
      this.selectionAPI = i;
      i.on(eventTypeConstants.selectionEvents.selectingTapStart, this.handleSelectingTapStart);
      i.on(eventTypeConstants.selectionEvents.selectingTapStop, this.handleSelectingTapStop);
      let n = r.editorAPI.getService(immediatelySignalModule.signalValue, {
        optional: true
      });
      this.sub = n == null ? undefined : n.subscribe(this.handleImmediatelyTriggerLastSelectionChange);
    }
    destroy() {
      var e;
      this.selectionAPI.off(eventTypeConstants.selectionEvents.selectingTapStart, this.handleSelectingTapStart);
      this.selectionAPI.off(eventTypeConstants.selectionEvents.selectingTapStop, this.handleSelectingTapStop);
      this.removeSelectionInfo();
      this.selectionChangeCallback = null;
      this.triggerDebouncedSelectionChange.cancel();
      this.commentInteractionForbidden = false;
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    constructor() {
      s(this, "commentInteractionForbidden", false);
      s(this, "selectionAPI", undefined);
      s(this, "selectionInfo", null);
      s(this, "selectionChangeCallback", null);
      s(this, "sub", undefined);
      s(this, "triggerSelectionChange", () => {
        this.commentInteractionForbidden = false;
        if (this.selectionInfo) {
          var e;
          if ((e = this.selectionChangeCallback) !== null && e !== undefined) {
            e.call(this, this.selectionInfo.prev, this.selectionInfo.current);
          }
          this.removeSelectionInfo();
        }
      });
      s(this, "triggerDebouncedSelectionChange", debounceUtil_1_1.debounce(this.triggerSelectionChange, 10, {
        leading: false,
        trailing: true
      }));
      s(this, "handleSelectingTapStart", () => {
        this.triggerDebouncedSelectionChange.cancel();
        this.commentInteractionForbidden = true;
      });
      s(this, "handleSelectingTapStop", () => {
        this.triggerDebouncedSelectionChange();
      });
      s(this, "handleImmediatelyTriggerLastSelectionChange", () => {
        this.triggerDebouncedSelectionChange.cancel();
        this.triggerSelectionChange();
      });
      s(this, "handleSelectionChange", (e, i) => {
        if (this.commentInteractionForbidden) {
          this.restoreSelection(e, i);
        } else {
          var r;
          if ((r = this.selectionChangeCallback) !== null && r !== undefined) {
            r.call(this, e, i);
          }
        }
      });
    }
  }
  require.d(exports, {
    SelectionChangeHandler: function () {
      return c;
    }
  });
}