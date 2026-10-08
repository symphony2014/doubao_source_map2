// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'ApiError'
// - Renamed export 'z' to 'extractErrorInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 291616
         */
module.exports = function (module, exports, require) {
  var jsonSafeUtils_1 = require("json-safe-utils_1") /*id: 176900*/;
  class r extends Error {
    constructor(e) {
      var t;
      var n;
      var i;
      super(`httpStatus=${e.httpStatus}, code=${e.code}, message=${e.message}, logId=${e.logId}`);
      n = undefined;
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
      }(t = "errorOption", "string")) == "symbol" ? i : i + "") in this) {
        Object.defineProperty(this, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = n;
      }
      this.name = "ApiError";
      this.errorOption = e;
    }
  }
  let o = e => {
    if (e instanceof r && e.errorOption) {
      let {
        errorOption: t
      } = e;
      return {
        httpStatus: t.httpStatus,
        code: t.code,
        logId: t.logId,
        response: jsonSafeUtils_1.jsonUtils.stringify(t.response),
        requestConfig: jsonSafeUtils_1.jsonUtils.stringify(t.requestConfig)
      };
    }
    return {};
  };
  require.d(exports, {
    ApiError: function () {
      return r;
    },
    extractErrorInfo: function () {
      return o;
    }
  });
}