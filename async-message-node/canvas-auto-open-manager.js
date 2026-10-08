// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'canvasAutoOpenManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 706581
         */
module.exports = function (module, exports, require) {
  function i(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let l = new class {
    updateAutoOpenCanvas(e) {
      this.autoOpenCanvas = e;
    }
    isAutoOpenCanvas() {
      return this.autoOpenCanvas;
    }
    startOpenCanvas(e = 200) {
      this.autoOpening = true;
      setTimeout(() => this.autoOpening = false, e);
    }
    isCanvasAutoOpening() {
      return this.autoOpening;
    }
    reset() {
      this.autoOpenCanvas = true;
      this.autoOpening = false;
    }
    constructor() {
      i(this, "autoOpenCanvas", true);
      i(this, "autoOpening", false);
    }
  }();
  require.d(exports, {
    canvasAutoOpenManager: function () {
      return l;
    }
  });
}