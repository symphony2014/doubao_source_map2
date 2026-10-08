// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(418188) to 'promisify-helper'
// - Resolved require(81064) to 'base64-utility'
// - Resolved require(695211) to 'simple-event-emitter_1'
// - Resolved require(251759) to 'ieee-754-buffer-utils'
// - Resolved require(571968) to 'safe-require-helper'
// - Resolved require(548900) to 'utf8-encoding-utils'
// - Resolved require(699307) to 'buffer-slice-allocator'
// - Resolved require(33725) to 'long-64bit-integer-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 127374
         */
module.exports = function (module, exports, require) {
  function r(e, t, i) {
    var r = Object.keys(t);
    var n = 0;
    for (; n < r.length; ++n) {
      if (e[r[n]] === undefined || !i) {
        e[r[n]] = t[r[n]];
      }
    }
    return e;
  }
  function n(e) {
    function t(e, i) {
      if (!(this instanceof t)) {
        return new t(e, i);
      }
      Object.defineProperty(this, "message", {
        get: function () {
          return e;
        }
      });
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, t);
      } else {
        Object.defineProperty(this, "stack", {
          value: Error().stack || ""
        });
      }
      if (i) {
        r(this, i);
      }
    }
    (t.prototype = Object.create(Error.prototype)).constructor = t;
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return e;
      }
    });
    t.prototype.toString = function () {
      return this.name + ": " + this.message;
    };
    return t;
  }
  exports.asPromise = require("promisify-helper") /*id: 418188*/;
  exports.base64 = require("base64-utility") /*id: 81064*/;
  exports.EventEmitter = require("simple-event-emitter_1") /*id: 695211*/;
  exports.float = require("ieee-754-buffer-utils") /*id: 251759*/;
  exports.inquire = require("safe-require-helper") /*id: 571968*/;
  exports.utf8 = require("utf8-encoding-utils") /*id: 548900*/;
  exports.pool = require("buffer-slice-allocator") /*id: 699307*/;
  exports.LongBits = require("long-64bit-integer-utils") /*id: 33725*/;
  exports.isNode = require.g !== undefined && !!require.g && !!require.g.process && !!require.g.process.versions && !!require.g.process.versions.node;
  exports.global = exports.isNode && require.g || typeof window != "undefined" && window || typeof self != "undefined" && self || this;
  exports.emptyArray = Object.freeze ? Object.freeze([]) : [];
  exports.emptyObject = Object.freeze ? Object.freeze({}) : {};
  exports.isInteger = Number.isInteger || function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
  exports.isString = function (e) {
    return typeof e == "string" || e instanceof String;
  };
  exports.isObject = function (e) {
    return e && typeof e == "object";
  };
  exports.isset = exports.isSet = function (e, t) {
    var i = e[t];
    return i != null && !!e.hasOwnProperty(t) && (typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0);
  };
  exports.Buffer = function () {
    try {
      var e = exports.inquire("buffer").Buffer;
      if (e.prototype.utf8Write) {
        return e;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }();
  exports._Buffer_from = null;
  exports._Buffer_allocUnsafe = null;
  exports.newBuffer = function (e) {
    if (typeof e == "number") {
      if (exports.Buffer) {
        return exports._Buffer_allocUnsafe(e);
      } else {
        return new exports.Array(e);
      }
    } else if (exports.Buffer) {
      return exports._Buffer_from(e);
    } else if (typeof Uint8Array == "undefined") {
      return e;
    } else {
      return new Uint8Array(e);
    }
  };
  exports.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  exports.Long = exports.global.dcodeIO && exports.global.dcodeIO.Long || exports.global.Long || exports.inquire("long");
  exports.key2Re = /^true|false|0|1$/;
  exports.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  exports.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  exports.longToHash = function (e) {
    if (e) {
      return exports.LongBits.from(e).toHash();
    } else {
      return exports.LongBits.zeroHash;
    }
  };
  exports.longFromHash = function (e, i) {
    var r = exports.LongBits.fromHash(e);
    if (exports.Long) {
      return exports.Long.fromBits(r.lo, r.hi, i);
    } else {
      return r.toNumber(!!i);
    }
  };
  exports.merge = r;
  exports.lcFirst = function (e) {
    return e.charAt(0).toLowerCase() + e.substring(1);
  };
  exports.newError = n;
  exports.ProtocolError = n("ProtocolError");
  exports.oneOfGetter = function (e) {
    var t = {};
    var i = 0;
    for (; i < e.length; ++i) {
      t[e[i]] = 1;
    }
    return function () {
      var e = Object.keys(this);
      var i = e.length - 1;
      for (; i > -1; --i) {
        if (t[e[i]] === 1 && this[e[i]] !== undefined && this[e[i]] !== null) {
          return e[i];
        }
      }
    };
  };
  exports.oneOfSetter = function (e) {
    return function (t) {
      for (var i = 0; i < e.length; ++i) {
        if (e[i] !== t) {
          delete this[e[i]];
        }
      }
    };
  };
  exports.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
  };
  exports._configure = function () {
    var e = exports.Buffer;
    if (!e) {
      exports._Buffer_from = exports._Buffer_allocUnsafe = null;
      return;
    }
    exports._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, i) {
      return new e(t, i);
    };
    exports._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
      return new e(t);
    };
  };
}