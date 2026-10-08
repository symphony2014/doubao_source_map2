// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cI' to 'PageType'
// - Renamed export 'nM' to 'historyVisibilityTracker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: history.95e09a2f.js
         * chunkId: 17374
         * moduleId: 52208
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var historyVisibilityConstants = require("history-visibility-constants") /*id: 209015*/;
  function o(e, i, E) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var E = e[Symbol.toPrimitive];
      if (E !== undefined) {
        var r = E.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: E,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = E;
    }
    return e;
  }
  class T {
    constructor() {
      o(this, "eleMap", new Map());
      o(this, "blockManager", undefined);
      o(this, "addViewportBlocks", e => {
        if (this.blockManager) {
          [...this.blockManager.layoutManager.getViewportBlocks(), this.blockManager.getRootBlockId()].forEach(i => {
            var E;
            let r = (E = this.blockManager) === null || E === undefined ? undefined : E.getBlockViewByBlockIdNotCheck(i);
            let s = r == null ? undefined : r.model;
            if (s && (!s || !(s.depth > 1)) && (r == null ? undefined : r.hostElement)) {
              e.set(`${i}-${s.type}`, r.hostElement);
            }
          });
        }
        return e;
      });
      o(this, "getCollection", () => {
        let e = new Map(this.eleMap);
        this.addViewportBlocks(e);
        return e;
      });
      o(this, "add", (e, i) => {
        this.eleMap.set(e, i);
      });
      o(this, "remove", e => {
        this.eleMap.delete(e);
      });
      o(this, "addBySelector", e => {
        let i = document.querySelector(e);
        this.eleMap.set(e, i || null);
      });
    }
  }
  var historyVisibilityObserver = require("history-visibility-observer") /*id: 474806*/;
  function I(e, i, E) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var E = e[Symbol.toPrimitive];
      if (E !== undefined) {
        var r = E.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: E,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = E;
    }
    return e;
  }
  let n = new class {
    setStatus(e) {
      this.status = e;
    }
    observe(e, i) {
      if (i) {
        this.collector.add(e, i);
      } else {
        this.collector.addBySelector(e);
      }
    }
    unObserve(e) {
      this.collector.remove(e);
    }
    init() {
      historyVisibilityObserver.historyVisibility.init(this.checkVisiblity);
    }
    constructor() {
      I(this, "collector", new T());
      I(this, "status", historyVisibilityConstants.PageType.UNKNOWN);
      I(this, "registerBlockManager", e => {
        this.collector.blockManager = e;
      });
      I(this, "unRegisterBlockManager", () => {
        this.collector.blockManager = null;
      });
      I(this, "checkVisiblity", e => {
        let i = this.collector.getCollection();
        let E = {};
        let o = new Map();
        let T = {
          trigger_from: e,
          raf_times: 0,
          intersction_observer: false
        };
        let M = new IntersectionObserver(e => {
          e.forEach(e => {
            T.intersction_observer = true;
            let i = o.get(e.target);
            if (e.intersectionRatio > 0) {
              E[i] = historyVisibilityConstants.VisibilityStatus.VISIBLE;
            } else {
              E[i] = historyVisibilityConstants.VisibilityStatus.INVISIBLE;
            }
          });
          M.disconnect();
        });
        i.forEach((e, i) => {
          if (e) {
            if (document.body.contains(e)) {
              M.observe(e);
              o.set(e, i);
            } else {
              E[i] = historyVisibilityConstants.VisibilityStatus.NOT_IN_DOCUMENT;
            }
          } else {
            E[i] = historyVisibilityConstants.VisibilityStatus.NOT_FOUND;
          }
        });
        requestAnimationFrame(() => {
          T.raf_times++;
          requestAnimationFrame(() => {
            T.raf_times++;
          });
        });
        setTimeout(() => {
          let e = Object.assign({
            docx_status: this.status,
            visibility_msg: JSON.stringify(E)
          }, T);
          docxEventCollector.wrappedCollector(historyVisibilityConstants.viewportCheckName, e);
        }, 1000);
      });
      this.init();
    }
  }();
  require.d(exports, {
    PageType: function () {
      return historyVisibilityConstants.PageType;
    },
    historyVisibilityTracker: function () {
      return n;
    }
  });
}