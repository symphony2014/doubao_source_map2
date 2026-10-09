// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 57830
         */
module.exports = function (module, exports, require) {
  module.exports = c;
  var r;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  var s = protobufUtilityModule.LongBits;
  var o = protobufUtilityModule.base64;
  var a = protobufUtilityModule.utf8;
  function l(e, t, i) {
    this.fn = e;
    this.len = t;
    this.next = undefined;
    this.val = i;
  }
  function u() {}
  function d(e) {
    this.head = e.head;
    this.tail = e.tail;
    this.len = e.len;
    this.next = e.states;
  }
  function c() {
    this.len = 0;
    this.head = new l(u, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  function p() {
    if (protobufUtilityModule.Buffer) {
      return function () {
        return (c.create = function () {
          return new r();
        })();
      };
    } else {
      return function () {
        return new c();
      };
    }
  }
  function h(e, t, i) {
    t[i] = e & 255;
  }
  function f(e, t) {
    this.len = e;
    this.next = undefined;
    this.val = t;
  }
  function y(e, t, i) {
    while (e.hi) {
      t[i++] = e.lo & 127 | 128;
      e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
      e.hi >>>= 7;
    }
    while (e.lo > 127) {
      t[i++] = e.lo & 127 | 128;
      e.lo = e.lo >>> 7;
    }
    t[i++] = e.lo;
  }
  function g(e, t, i) {
    t[i] = e & 255;
    t[i + 1] = e >>> 8 & 255;
    t[i + 2] = e >>> 16 & 255;
    t[i + 3] = e >>> 24;
  }
  c.create = p();
  c.alloc = function (e) {
    return new protobufUtilityModule.Array(e);
  };
  if (protobufUtilityModule.Array !== Array) {
    c.alloc = protobufUtilityModule.pool(c.alloc, protobufUtilityModule.Array.prototype.subarray);
  }
  c.prototype._push = function (e, t, i) {
    this.tail = this.tail.next = new l(e, t, i);
    this.len += t;
    return this;
  };
  f.prototype = Object.create(l.prototype);
  f.prototype.fn = function (e, t, i) {
    while (e > 127) {
      t[i++] = e & 127 | 128;
      e >>>= 7;
    }
    t[i] = e;
  };
  c.prototype.uint32 = function (e) {
    this.len += (this.tail = this.tail.next = new f((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
    return this;
  };
  c.prototype.int32 = function (e) {
    if (e < 0) {
      return this._push(y, 10, s.fromNumber(e));
    } else {
      return this.uint32(e);
    }
  };
  c.prototype.sint32 = function (e) {
    return this.uint32((e << 1 ^ e >> 31) >>> 0);
  };
  c.prototype.uint64 = function (e) {
    var t = s.from(e);
    return this._push(y, t.length(), t);
  };
  c.prototype.int64 = c.prototype.uint64;
  c.prototype.sint64 = function (e) {
    var t = s.from(e).zzEncode();
    return this._push(y, t.length(), t);
  };
  c.prototype.bool = function (e) {
    return this._push(h, 1, +!!e);
  };
  c.prototype.fixed32 = function (e) {
    return this._push(g, 4, e >>> 0);
  };
  c.prototype.sfixed32 = c.prototype.fixed32;
  c.prototype.fixed64 = function (e) {
    var t = s.from(e);
    return this._push(g, 4, t.lo)._push(g, 4, t.hi);
  };
  c.prototype.sfixed64 = c.prototype.fixed64;
  c.prototype.float = function (e) {
    return this._push(protobufUtilityModule.float.writeFloatLE, 4, e);
  };
  c.prototype.double = function (e) {
    return this._push(protobufUtilityModule.float.writeDoubleLE, 8, e);
  };
  var v = protobufUtilityModule.Array.prototype.set ? function (e, t, i) {
    t.set(e, i);
  } : function (e, t, i) {
    for (var r = 0; r < e.length; ++r) {
      t[i + r] = e[r];
    }
  };
  c.prototype.bytes = function (e) {
    var t = e.length >>> 0;
    if (!t) {
      return this._push(h, 1, 0);
    }
    if (protobufUtilityModule.isString(e)) {
      var i = c.alloc(t = o.length(e));
      o.decode(e, i, 0);
      e = i;
    }
    return this.uint32(t)._push(v, t, e);
  };
  c.prototype.string = function (e) {
    var t = a.length(e);
    if (t) {
      return this.uint32(t)._push(a.write, t, e);
    } else {
      return this._push(h, 1, 0);
    }
  };
  c.prototype.fork = function () {
    this.states = new d(this);
    this.head = this.tail = new l(u, 0, 0);
    this.len = 0;
    return this;
  };
  c.prototype.reset = function () {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new l(u, 0, 0);
      this.len = 0;
    }
    return this;
  };
  c.prototype.ldelim = function () {
    var e = this.head;
    var t = this.tail;
    var i = this.len;
    this.reset().uint32(i);
    if (i) {
      this.tail.next = e.next;
      this.tail = t;
      this.len += i;
    }
    return this;
  };
  c.prototype.finish = function () {
    var e = this.head.next;
    var t = this.constructor.alloc(this.len);
    var i = 0;
    while (e) {
      e.fn(e.val, t, i);
      i += e.len;
      e = e.next;
    }
    return t;
  };
  c._configure = function (e) {
    r = e;
    c.create = p();
    r._configure();
  };
}