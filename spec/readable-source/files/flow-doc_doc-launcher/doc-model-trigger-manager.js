// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ModelTriggerMgr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 557135
         */
module.exports = function (module, exports, require) {
  function n(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  exports.ModelTriggerMgr = new class {
    set(e, i) {
      this.modelMap.set(e, i);
    }
    delete(e) {
      this.modelMap.delete(e);
    }
    getTriggered(e) {
      let i = this.modelMap.get(e);
      return i && i.triggered;
    }
    constructor() {
      n(this, "modelMap", new Map());
      n(this, "trigger", e => {
        let i = this.modelMap.get(e);
        if (i) {
          i.priorityChange();
        }
      });
    }
  }();
}