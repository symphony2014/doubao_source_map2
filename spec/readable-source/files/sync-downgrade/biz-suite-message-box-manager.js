// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'MessageBoxManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: biz-suite-custom-icon.62641073.js
         * chunkId: 44969
         * moduleId: 443877
         */
module.exports = function (module, exports, require) {
  class r {
    static register() {}
    static deregister() {}
    static onError() {}
    static removeErrorListener() {}
  }
  i = "messageBoxMap";
  l = new Map();
  if ((i = typeof (c = function (e, a) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var n = e[Symbol.toPrimitive];
    if (n !== undefined) {
      var r = n.call(e, a || "default");
      if (typeof r != "object") {
        return r;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(e);
  }(i, "string")) == "symbol" ? c : c + "") in r) {
    Object.defineProperty(r, i, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    r[i] = l;
  }
  var c;
  var i;
  var l;
  var o = r;
  require.d(exports, {
    MessageBoxManager: function () {
      return o;
    }
  });
}