// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufUtilityModule_3'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 436943
         */
module.exports = function (module, exports, require) {
  module.exports = p;
  var n;
  var protobufUtilityModule_3 = require("protobuf-utility-module_3") /*id: 842874*/;
  var i = protobufUtilityModule_3.LongBits;
  var a = protobufUtilityModule_3.base64;
  var s = protobufUtilityModule_3.utf8;
  function l(e, t, o) {
    this.fn = e;
    this.len = t;
    this.next = undefined;
    this.val = o;
  }
  function c() {}
  function u(e) {
    this.head = e.head;
    this.tail = e.tail;
    this.len = e.len;
    this.next = e.states;
  }
  function p() {
    this.len = 0;
    this.head = new l(c, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  function d() {
    if (protobufUtilityModule_3.Buffer) {
      return function () {
        return (p.create = function () {
          return new n();
        })();
      };
    } else {
      return function () {
        return new p();
      };
    }
  }
  function f(e, t, o) {
    t[o] = e & 255;
  }
  function y(e, t, o) {
    while (e > 127) {
      t[o++] = e & 127 | 128;
      e >>>= 7;
    }
    t[o] = e;
  }
  function h(e, t) {
    this.len = e;
    this.next = undefined;
    this.val = t;
  }
  function g(e, t, o) {
    while (e.hi) {
      t[o++] = e.lo & 127 | 128;
      e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
      e.hi >>>= 7;
    }
    while (e.lo > 127) {
      t[o++] = e.lo & 127 | 128;
      e.lo = e.lo >>> 7;
    }
    t[o++] = e.lo;
  }
  function m(e, t, o) {
    t[o] = e & 255;
    t[o + 1] = e >>> 8 & 255;
    t[o + 2] = e >>> 16 & 255;
    t[o + 3] = e >>> 24;
  }
  p.create = d();
  p.alloc = function (e) {
    return new protobufUtilityModule_3.Array(e);
  };
  if (protobufUtilityModule_3.Array !== Array) {
    p.alloc = protobufUtilityModule_3.pool(p.alloc, protobufUtilityModule_3.Array.prototype.subarray);
  }
  p.prototype._push = function (e, t, o) {
    this.tail = this.tail.next = new l(e, t, o);
    this.len += t;
    return this;
  };
  h.prototype = Object.create(l.prototype);
  h.prototype.fn = y;
  p.prototype.uint32 = function (e) {
    this.len += (this.tail = this.tail.next = new h((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
    return this;
  };
  p.prototype.int32 = function (e) {
    if (e < 0) {
      return this._push(g, 10, i.fromNumber(e));
    } else {
      return this.uint32(e);
    }
  };
  p.prototype.sint32 = function (e) {
    return this.uint32((e << 1 ^ e >> 31) >>> 0);
  };
  p.prototype.uint64 = function (e) {
    var t = i.from(e);
    return this._push(g, t.length(), t);
  };
  p.prototype.int64 = p.prototype.uint64;
  p.prototype.sint64 = function (e) {
    var t = i.from(e).zzEncode();
    return this._push(g, t.length(), t);
  };
  p.prototype.bool = function (e) {
    return this._push(f, 1, +!!e);
  };
  p.prototype.fixed32 = function (e) {
    return this._push(m, 4, e >>> 0);
  };
  p.prototype.sfixed32 = p.prototype.fixed32;
  p.prototype.fixed64 = function (e) {
    var t = i.from(e);
    return this._push(m, 4, t.lo)._push(m, 4, t.hi);
  };
  p.prototype.sfixed64 = p.prototype.fixed64;
  p.prototype.float = function (e) {
    return this._push(protobufUtilityModule_3.float.writeFloatLE, 4, e);
  };
  p.prototype.double = function (e) {
    return this._push(protobufUtilityModule_3.float.writeDoubleLE, 8, e);
  };
  var b = protobufUtilityModule_3.Array.prototype.set ? function (e, t, o) {
    t.set(e, o);
  } : function (e, t, o) {
    for (var n = 0; n < e.length; ++n) {
      t[o + n] = e[n];
    }
  };
  p.prototype.bytes = function (e) {
    var t = e.length >>> 0;
    if (!t) {
      return this._push(f, 1, 0);
    }
    if (protobufUtilityModule_3.isString(e)) {
      var o = p.alloc(t = a.length(e));
      a.decode(e, o, 0);
      e = o;
    }
    return this.uint32(t)._push(b, t, e);
  };
  p.prototype.string = function (e) {
    var t = s.length(e);
    if (t) {
      return this.uint32(t)._push(s.write, t, e);
    } else {
      return this._push(f, 1, 0);
    }
  };
  p.prototype.fork = function () {
    this.states = new u(this);
    this.head = this.tail = new l(c, 0, 0);
    this.len = 0;
    return this;
  };
  p.prototype.reset = function () {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new l(c, 0, 0);
      this.len = 0;
    }
    return this;
  };
  p.prototype.ldelim = function () {
    var e = this.head;
    var t = this.tail;
    var o = this.len;
    this.reset().uint32(o);
    if (o) {
      this.tail.next = e.next;
      this.tail = t;
      this.len += o;
    }
    return this;
  };
  p.prototype.finish = function () {
    var e = this.head.next;
    var t = this.constructor.alloc(this.len);
    var o = 0;
    while (e) {
      e.fn(e.val, t, o);
      o += e.len;
      e = e.next;
    }
    return t;
  };
  p._configure = function (e) {
    n = e;
    p.create = d();
    n._configure();
  };
}