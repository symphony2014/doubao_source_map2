// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'LayoutCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 857808
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  class o {}
  if ((i = typeof (r = function (e, t) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var a = e[Symbol.toPrimitive];
    if (a !== undefined) {
      var i = a.call(e, t || "default");
      if (typeof i != "object") {
        return i;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }(i = "renderStart", "string")) == "symbol" ? r : r + "") in o) {
    Object.defineProperty(o, i, {
      value: 0,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    o[i] = 0;
  }
  require.d(exports, {
    LayoutCanvas: function () {
      return o;
    }
  });
}