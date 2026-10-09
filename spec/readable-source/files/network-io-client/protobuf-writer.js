// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 40638
         */
module.exports = function (module, exports, require) {
  module.exports = u;
  var n;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  var s = protobufUtilityModule_2.LongBits;
  var o = protobufUtilityModule_2.base64;
  var a = protobufUtilityModule_2.utf8;
  function c(e, t, r) {
    this.fn = e;
    this.len = t;
    this.next = undefined;
    this.val = r;
  }
  function l() {}
  function h(e) {
    this.head = e.head;
    this.tail = e.tail;
    this.len = e.len;
    this.next = e.states;
  }
  function u() {
    this.len = 0;
    this.head = new c(l, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  function f(e, t, r) {
    t[r] = e & 255;
  }
  function p(e, t, r) {
    while (e > 127) {
      t[r++] = e & 127 | 128;
      e >>>= 7;
    }
    t[r] = e;
  }
  function d(e, t) {
    this.len = e;
    this.next = undefined;
    this.val = t;
  }
  function y(e, t, r) {
    while (e.hi) {
      t[r++] = e.lo & 127 | 128;
      e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
      e.hi >>>= 7;
    }
    while (e.lo > 127) {
      t[r++] = e.lo & 127 | 128;
      e.lo = e.lo >>> 7;
    }
    t[r++] = e.lo;
  }
  function g(e, t, r) {
    t[r] = e & 255;
    t[r + 1] = e >>> 8 & 255;
    t[r + 2] = e >>> 16 & 255;
    t[r + 3] = e >>> 24;
  }
  u.create = protobufUtilityModule_2.Buffer ? function () {
    return (u.create = function () {
      return new n();
    })();
  } : function () {
    return new u();
  };
  u.alloc = function (e) {
    return new protobufUtilityModule_2.Array(e);
  };
  if (protobufUtilityModule_2.Array !== Array) {
    u.alloc = protobufUtilityModule_2.pool(u.alloc, protobufUtilityModule_2.Array.prototype.subarray);
  }
  u.prototype._push = function (e, t, r) {
    this.tail = this.tail.next = new c(e, t, r);
    this.len += t;
    return this;
  };
  d.prototype = Object.create(c.prototype);
  d.prototype.fn = p;
  u.prototype.uint32 = function (e) {
    this.len += (this.tail = this.tail.next = new d((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
    return this;
  };
  u.prototype.int32 = function (e) {
    if (e < 0) {
      return this._push(y, 10, s.fromNumber(e));
    } else {
      return this.uint32(e);
    }
  };
  u.prototype.sint32 = function (e) {
    return this.uint32((e << 1 ^ e >> 31) >>> 0);
  };
  u.prototype.uint64 = function (e) {
    var t = s.from(e);
    return this._push(y, t.length(), t);
  };
  u.prototype.int64 = u.prototype.uint64;
  u.prototype.sint64 = function (e) {
    var t = s.from(e).zzEncode();
    return this._push(y, t.length(), t);
  };
  u.prototype.bool = function (e) {
    return this._push(f, 1, +!!e);
  };
  u.prototype.fixed32 = function (e) {
    return this._push(g, 4, e >>> 0);
  };
  u.prototype.sfixed32 = u.prototype.fixed32;
  u.prototype.fixed64 = function (e) {
    var t = s.from(e);
    return this._push(g, 4, t.lo)._push(g, 4, t.hi);
  };
  u.prototype.sfixed64 = u.prototype.fixed64;
  u.prototype.float = function (e) {
    return this._push(protobufUtilityModule_2.float.writeFloatLE, 4, e);
  };
  u.prototype.double = function (e) {
    return this._push(protobufUtilityModule_2.float.writeDoubleLE, 8, e);
  };
  var v = protobufUtilityModule_2.Array.prototype.set ? function (e, t, r) {
    t.set(e, r);
  } : function (e, t, r) {
    for (var n = 0; n < e.length; ++n) {
      t[r + n] = e[n];
    }
  };
  u.prototype.bytes = function (e) {
    var t = e.length >>> 0;
    if (!t) {
      return this._push(f, 1, 0);
    }
    if (protobufUtilityModule_2.isString(e)) {
      var r = u.alloc(t = o.length(e));
      o.decode(e, r, 0);
      e = r;
    }
    return this.uint32(t)._push(v, t, e);
  };
  u.prototype.string = function (e) {
    var t = a.length(e);
    if (t) {
      return this.uint32(t)._push(a.write, t, e);
    } else {
      return this._push(f, 1, 0);
    }
  };
  u.prototype.fork = function () {
    this.states = new h(this);
    this.head = this.tail = new c(l, 0, 0);
    this.len = 0;
    return this;
  };
  u.prototype.reset = function () {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new c(l, 0, 0);
      this.len = 0;
    }
    return this;
  };
  u.prototype.ldelim = function () {
    var e = this.head;
    var t = this.tail;
    var r = this.len;
    this.reset().uint32(r);
    if (r) {
      this.tail.next = e.next;
      this.tail = t;
      this.len += r;
    }
    return this;
  };
  u.prototype.finish = function () {
    var e = this.head.next;
    var t = this.constructor.alloc(this.len);
    var r = 0;
    while (e) {
      e.fn(e.val, t, r);
      r += e.len;
      e = e.next;
    }
    return t;
  };
  u._configure = function (e) {
    n = e;
  };
}