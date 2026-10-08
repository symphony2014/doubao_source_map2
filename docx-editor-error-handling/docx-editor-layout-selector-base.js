// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createLayoutSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 710348
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var renderEventConstants = require("render-event-constants") /*id: 189091*/;
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
    isBlockVisible(e) {
      return this.visibleBlockIds.indexOf(e) > -1;
    }
    onBlockChange(e, i) {
      if (this.isBlockVisible(e) && this.visibleListenerBlockIds.indexOf(e) === -1) {
        this.visibleListenerBlockIds.push(e);
      }
      this.eventEmitter.on(this.getEventName(e), i);
    }
    emitBlockChange(e, i) {
      this.eventEmitter.emit(this.getEventName(e), {
        isVisible: i
      });
    }
    offBlockChange(e, i) {
      this.eventEmitter.off(this.getEventName(e), i);
      if (this.eventEmitter.getListeners(this.getEventName(e)).length === 0) {
        this.visibleListenerBlockIds.splice(this.visibleListenerBlockIds.indexOf(e), 1);
      }
    }
    destroy() {
      this.handleLayoutPaint.cancel();
      this.blockManager.removeListener(renderEventConstants.paint, this.handleLayoutPaint);
    }
    getEventName(e) {
      return `BlockViewportChange_${e}`;
    }
    stopTaskQueue() {
      window.cancelAnimationFrame(this.animationRequestId);
    }
    runTaskQueue() {
      if (this.taskQueue.length !== 0) {
        window.cancelAnimationFrame(this.animationRequestId);
        this.animationRequestId = window.requestAnimationFrame(() => {
          let e = 0;
          let i = [];
          while (e < 10 && this.taskQueue.length > 0) {
            let r = this.taskQueue.shift();
            if (r) {
              let {
                blockId: e,
                isVisible: n
              } = r;
              this.emitBlockChange(e, n);
              i.push(e);
              if (n) {
                this.visibleListenerBlockIds.push(e);
              } else {
                this.visibleListenerBlockIds.splice(this.visibleListenerBlockIds.indexOf(e), 1);
              }
            }
            e++;
          }
          this.runTaskQueue();
        });
      }
    }
    calculateVisibleBlocks(e) {
      let i = e.filter(e => this.eventEmitter.getListeners(this.getEventName(e)).length > 0);
      let r = [...i, ...this.visibleListenerBlockIds].reduce((e, r) => {
        let n = this.visibleListenerBlockIds.indexOf(r) === -1;
        let o = i.indexOf(r) === -1;
        if (n) {
          e.enter.push({
            blockId: r,
            isVisible: true
          });
        }
        if (o) {
          e.leave.push({
            blockId: r,
            isVisible: false
          });
        }
        return e;
      }, {
        enter: [],
        leave: []
      });
      return {
        currentTasks: [...r.enter, ...r.leave],
        currentVisibleBlockIds: i
      };
    }
    constructor(e) {
      s(this, "blockManager", undefined);
      s(this, "eventEmitter", new docxEditorEventConstantsAndManager.EventEmitter());
      s(this, "animationRequestId", undefined);
      s(this, "taskQueue", []);
      s(this, "visibleBlockIds", []);
      s(this, "visibleListenerBlockIds", []);
      s(this, "handleLayoutPaint", debounceUtil_1_1.debounce(() => {
        let {
          layoutManager: e
        } = this.blockManager;
        let i = e.getViewportBlocks();
        let r = e.getBufferBlocks();
        this.visibleBlockIds = [...i, ...r];
        let {
          currentTasks: n
        } = this.calculateVisibleBlocks(this.visibleBlockIds);
        this.stopTaskQueue();
        this.taskQueue = n;
        this.runTaskQueue();
      }, 300));
      this.blockManager = e.blockManager;
      this.blockManager.addListener(renderEventConstants.paint, this.handleLayoutPaint);
    }
  }
  require.d(exports, {
    createLayoutSelector: function () {
      return a;
    }
  });
}