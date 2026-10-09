// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'mousedownListener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 564276
         */
module.exports = function (module, exports, require) {
  function n(e, i, r) {
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
  var o;
  (o = l || {}).CLICK = "click";
  o.MOUSEDOWN = "mousedown";
  var l = o;
  class s {
    addListener(e) {
      this.listeners.push(e);
      if (!this.bound) {
        this.listenGlobalClickEvent();
      }
    }
    removeListener(e) {
      let i = this.listeners.findIndex(i => i === e);
      if (i >= 0) {
        this.listeners.splice(i, 1);
      }
      if (this.listeners.length === 0 && this.bound) {
        this.unListenGlobalClickEvent();
      }
    }
    listenGlobalClickEvent() {
      document.addEventListener(this.event, this.handleGlobalClick, true);
      this.bound = true;
    }
    unListenGlobalClickEvent() {
      document.removeEventListener(this.event, this.handleGlobalClick, true);
      this.bound = false;
    }
    constructor(e) {
      n(this, "listeners", []);
      n(this, "bound", false);
      n(this, "event", undefined);
      n(this, "handleGlobalClick", e => {
        this.listeners.forEach(i => i(e));
      });
      this.event = e;
    }
  }
  let a = new s(l.MOUSEDOWN);
  new s(l.CLICK);
  require.d(exports, {
    mousedownListener: function () {
      return a;
    }
  });
}