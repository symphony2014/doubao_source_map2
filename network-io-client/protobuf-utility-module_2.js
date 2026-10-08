// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(418188) to 'promisify-helper'
// - Resolved require(81064) to 'base64-utility'
// - Resolved require(695211) to 'simple-event-emitter_1'
// - Resolved require(251759) to 'ieee-754-buffer-utils'
// - Resolved require(571968) to 'safe-require-helper'
// - Resolved require(548900) to 'utf8-encoding-utils'
// - Resolved require(699307) to 'buffer-slice-allocator'
// - Resolved require(68776) to 'protobuf-long-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 959925
         */
module.exports = function (module, exports, require) {
  var n = exports;
  function i(e, t, r) {
    var n = Object.keys(t);
    var i = 0;
    for (; i < n.length; ++i) {
      if (e[n[i]] === undefined || !r) {
        e[n[i]] = t[n[i]];
      }
    }
    return e;
  }
  function s(e) {
    function t(e, r) {
      if (!(this instanceof t)) {
        return new t(e, r);
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
      if (r) {
        i(this, r);
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
  n.asPromise = require("promisify-helper") /*id: 418188*/;
  n.base64 = require("base64-utility") /*id: 81064*/;
  n.EventEmitter = require("simple-event-emitter_1") /*id: 695211*/;
  n.float = require("ieee-754-buffer-utils") /*id: 251759*/;
  n.inquire = require("safe-require-helper") /*id: 571968*/;
  n.utf8 = require("utf8-encoding-utils") /*id: 548900*/;
  n.pool = require("buffer-slice-allocator") /*id: 699307*/;
  n.LongBits = require("protobuf-long-helper") /*id: 68776*/;
  n.global = typeof window != "undefined" && window || require.g !== undefined && require.g || typeof self != "undefined" && self || this;
  n.emptyArray = Object.freeze ? Object.freeze([]) : [];
  n.emptyObject = Object.freeze ? Object.freeze({}) : {};
  n.isNode = !!n.global.process && !!n.global.process.versions && !!n.global.process.versions.node;
  n.isInteger = Number.isInteger || function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
  n.isString = function (e) {
    return typeof e == "string" || e instanceof String;
  };
  n.isObject = function (e) {
    return e && typeof e == "object";
  };
  n.isset = n.isSet = function (e, t) {
    var r = e[t];
    return r != null && !!e.hasOwnProperty(t) && (typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0);
  };
  n.Buffer = function () {
    try {
      var e = n.inquire("buffer").Buffer;
      if (e.prototype.utf8Write) {
        return e;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }();
  n._Buffer_from = null;
  n._Buffer_allocUnsafe = null;
  n.newBuffer = function (e) {
    if (typeof e == "number") {
      if (n.Buffer) {
        return n._Buffer_allocUnsafe(e);
      } else {
        return new n.Array(e);
      }
    } else if (n.Buffer) {
      return n._Buffer_from(e);
    } else if (typeof Uint8Array == "undefined") {
      return e;
    } else {
      return new Uint8Array(e);
    }
  };
  n.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array;
  n.Long = n.global.dcodeIO && n.global.dcodeIO.Long || n.global.Long || n.inquire("long");
  n.key2Re = /^true|false|0|1$/;
  n.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  n.longToHash = function (e) {
    if (e) {
      return n.LongBits.from(e).toHash();
    } else {
      return n.LongBits.zeroHash;
    }
  };
  n.longFromHash = function (e, t) {
    var r = n.LongBits.fromHash(e);
    if (n.Long) {
      return n.Long.fromBits(r.lo, r.hi, t);
    } else {
      return r.toNumber(!!t);
    }
  };
  n.merge = i;
  n.lcFirst = function (e) {
    return e.charAt(0).toLowerCase() + e.substring(1);
  };
  n.newError = s;
  n.ProtocolError = s("ProtocolError");
  n.oneOfGetter = function (e) {
    var t = {};
    var r = 0;
    for (; r < e.length; ++r) {
      t[e[r]] = 1;
    }
    return function () {
      var e = Object.keys(this);
      var r = e.length - 1;
      for (; r > -1; --r) {
        if (t[e[r]] === 1 && this[e[r]] !== undefined && this[e[r]] !== null) {
          return e[r];
        }
      }
    };
  };
  n.oneOfSetter = function (e) {
    return function (t) {
      for (var r = 0; r < e.length; ++r) {
        if (e[r] !== t) {
          delete this[e[r]];
        }
      }
    };
  };
  n.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
  };
  n._configure = function () {
    var e = n.Buffer;
    if (!e) {
      n._Buffer_from = n._Buffer_allocUnsafe = null;
      return;
    }
    n._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, r) {
      return new e(t, r);
    };
    n._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
      return new e(t);
    };
  };
}