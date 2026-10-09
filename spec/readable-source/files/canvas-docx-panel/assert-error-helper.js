// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'assertThrow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 85083
         */
module.exports = function (module, exports, require) {
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  class o extends Error {
    constructor(...e) {
      var i;
      var n;
      var r;
      super(...e);
      n = "assert_error";
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
      }(i = "name", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, i, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[i] = n;
      }
    }
  }
  let l = (e, i) => {
    if (!e) {
      if (isErrorUtil.isError(i)) {
        throw i;
      }
      throw new o(i);
    }
  };
  require.d(exports, {
    assertThrow: function () {
      return l;
    }
  });
}