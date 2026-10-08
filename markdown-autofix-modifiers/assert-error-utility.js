// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'assert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 27936
         */
module.exports = function (module, exports, require) {
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  class n extends Error {
    constructor(...e) {
      var t;
      var r;
      var i;
      super(...e);
      r = "assert_error";
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
      }(t = "name", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
    }
  }
  let l = (e, t) => {
    if (!e) {
      if (isErrorUtil.isError(t)) {
        throw t;
      }
      throw new n(t);
    }
  };
  require.d(exports, {
    assert: function () {
      return l;
    }
  });
}