// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(418188) to 'promisify-helper'
// - Resolved require(81064) to 'base64-utility'
// - Resolved require(695211) to 'simple-event-emitter_1'
// - Resolved require(251759) to 'ieee-754-buffer-utils'
// - Resolved require(571968) to 'safe-require-helper'
// - Resolved require(548900) to 'utf8-encoding-utils'
// - Resolved require(699307) to 'buffer-slice-allocator'
// - Resolved require(301602) to 'int64-integer-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 842874
         */
module.exports = function (module, exports, require) {
  var n = exports;
  function r(e, t, o) {
    var n = Object.keys(t);
    var r = 0;
    for (; r < n.length; ++r) {
      if (e[n[r]] === undefined || !o) {
        e[n[r]] = t[n[r]];
      }
    }
    return e;
  }
  function i(e) {
    function t(e, o) {
      if (!(this instanceof t)) {
        return new t(e, o);
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
      if (o) {
        r(this, o);
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
  n.LongBits = require("int64-integer-class") /*id: 301602*/;
  n.isNode = require.g !== undefined && !!require.g && !!require.g.process && !!require.g.process.versions && !!require.g.process.versions.node;
  n.global = n.isNode && require.g || typeof window != "undefined" && window || typeof self != "undefined" && self || this;
  n.emptyArray = Object.freeze ? Object.freeze([]) : [];
  n.emptyObject = Object.freeze ? Object.freeze({}) : {};
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
    var o = e[t];
    return o != null && !!e.hasOwnProperty(t) && (typeof o != "object" || (Array.isArray(o) ? o.length : Object.keys(o).length) > 0);
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
    var o = n.LongBits.fromHash(e);
    if (n.Long) {
      return n.Long.fromBits(o.lo, o.hi, t);
    } else {
      return o.toNumber(!!t);
    }
  };
  n.merge = r;
  n.lcFirst = function (e) {
    return e.charAt(0).toLowerCase() + e.substring(1);
  };
  n.newError = i;
  n.ProtocolError = i("ProtocolError");
  n.oneOfGetter = function (e) {
    var t = {};
    var o = 0;
    for (; o < e.length; ++o) {
      t[e[o]] = 1;
    }
    return function () {
      var e = Object.keys(this);
      var o = e.length - 1;
      for (; o > -1; --o) {
        if (t[e[o]] === 1 && this[e[o]] !== undefined && this[e[o]] !== null) {
          return e[o];
        }
      }
    };
  };
  n.oneOfSetter = function (e) {
    return function (t) {
      for (var o = 0; o < e.length; ++o) {
        if (e[o] !== t) {
          delete this[e[o]];
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
    n._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, o) {
      return new e(t, o);
    };
    n._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
      return new e(t);
    };
  };
}