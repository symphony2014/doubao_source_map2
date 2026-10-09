// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 24058
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  function o(e, t, r, n, o) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = Error().stack;
    }
    this.message = e;
    this.name = "AxiosError";
    if (t) {
      this.code = t;
    }
    if (r) {
      this.config = r;
    }
    if (n) {
      this.request = n;
    }
    if (o) {
      this.response = o;
    }
  }
  utilsTypeCheckHelpers.inherits(o, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var i = o.prototype;
  var a = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(function (e) {
    a[e] = {
      value: e
    };
  });
  Object.defineProperties(o, a);
  Object.defineProperty(i, "isAxiosError", {
    value: true
  });
  o.from = function (e, t, r, a, s, u) {
    var c = Object.create(i);
    utilsTypeCheckHelpers.toFlatObject(e, c, function (e) {
      return e !== Error.prototype;
    });
    o.call(c, e.message, t, r, a, s);
    c.cause = e;
    c.name = e.name;
    if (u) {
      Object.assign(c, u);
    }
    return c;
  };
  module.exports = o;
}