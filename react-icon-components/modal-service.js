// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'modalService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 192713
         */
module.exports = function (module, exports, require) {
  function l(e, r, o) {
    var l;
    if ((r = typeof (l = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var l = o.call(e, r || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? l : l + "") in e) {
      Object.defineProperty(e, r, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = o;
    }
    return e;
  }
  let n = new class {
    init() {}
    registerModal(e, r) {}
    openModal(e, r, o) {}
    closeModal(e, r) {}
    closeAllModals() {}
    getCurrentModals() {
      return [];
    }
    getIsVisible(e) {
      return false;
    }
    constructor() {
      l(this, "zIndexBase", 1000);
      l(this, "modalService", {});
      this.init();
    }
  }();
  require.d(exports, {
    modalService: function () {
      return n;
    }
  });
}