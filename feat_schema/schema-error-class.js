// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'SchemaError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 327005
         */
module.exports = function (module, exports, require) {
  function i(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class a {
    constructor(e, t) {
      i(this, "keywordLocation", "#");
      i(this, "instanceLocation", "#");
      i(this, "keyword", undefined);
      i(this, "error", undefined);
      this.keyword = e;
      this.error = t;
    }
  }
  require.d(exports, {
    SchemaError: function () {
      return a;
    }
  });
}