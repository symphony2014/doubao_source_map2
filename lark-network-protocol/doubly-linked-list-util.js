// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(116996) to 'linked-list-iterator-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 336411
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = this;
    if (!(t instanceof r)) {
      t = new r();
    }
    t.tail = null;
    t.head = null;
    t.length = 0;
    if (e && typeof e.forEach == "function") {
      e.forEach(function (e) {
        t.push(e);
      });
    } else if (arguments.length > 0) {
      var i = 0;
      var n = arguments.length;
      for (; i < n; i++) {
        t.push(arguments[i]);
      }
    }
    return t;
  }
  function n(e, t, i, r) {
    if (!(this instanceof n)) {
      return new n(e, t, i, r);
    }
    this.list = r;
    this.value = e;
    if (t) {
      t.next = this;
      this.prev = t;
    } else {
      this.prev = null;
    }
    if (i) {
      i.prev = this;
      this.next = i;
    } else {
      this.next = null;
    }
  }
  module.exports = r;
  r.Node = n;
  r.create = r;
  r.prototype.removeNode = function (e) {
    if (e.list !== this) {
      throw Error("removing node which does not belong to this list");
    }
    var t = e.next;
    var i = e.prev;
    if (t) {
      t.prev = i;
    }
    if (i) {
      i.next = t;
    }
    if (e === this.head) {
      this.head = t;
    }
    if (e === this.tail) {
      this.tail = i;
    }
    e.list.length--;
    e.next = null;
    e.prev = null;
    e.list = null;
    return t;
  };
  r.prototype.unshiftNode = function (e) {
    if (e !== this.head) {
      if (e.list) {
        e.list.removeNode(e);
      }
      var t = this.head;
      e.list = this;
      e.next = t;
      if (t) {
        t.prev = e;
      }
      this.head = e;
      this.tail ||= e;
      this.length++;
    }
  };
  r.prototype.pushNode = function (e) {
    if (e !== this.tail) {
      if (e.list) {
        e.list.removeNode(e);
      }
      var t = this.tail;
      e.list = this;
      e.prev = t;
      if (t) {
        t.next = e;
      }
      this.tail = e;
      this.head ||= e;
      this.length++;
    }
  };
  r.prototype.push = function () {
    var e;
    var t;
    var i = 0;
    var r = arguments.length;
    for (; i < r; i++) {
      e = this;
      t = arguments[i];
      e.tail = new n(t, e.tail, null, e);
      e.head ||= e.tail;
      e.length++;
    }
    return this.length;
  };
  r.prototype.unshift = function () {
    var e;
    var t;
    var i = 0;
    var r = arguments.length;
    for (; i < r; i++) {
      e = this;
      t = arguments[i];
      e.head = new n(t, null, e.head, e);
      e.tail ||= e.head;
      e.length++;
    }
    return this.length;
  };
  r.prototype.pop = function () {
    if (this.tail) {
      var e = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return e;
    }
  };
  r.prototype.shift = function () {
    if (this.head) {
      var e = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return e;
    }
  };
  r.prototype.forEach = function (e, t) {
    t = t || this;
    var i = this.head;
    var r = 0;
    for (; i !== null; r++) {
      e.call(t, i.value, r, this);
      i = i.next;
    }
  };
  r.prototype.forEachReverse = function (e, t) {
    t = t || this;
    var i = this.tail;
    var r = this.length - 1;
    for (; i !== null; r--) {
      e.call(t, i.value, r, this);
      i = i.prev;
    }
  };
  r.prototype.get = function (e) {
    var t = 0;
    var i = this.head;
    for (; i !== null && t < e; t++) {
      i = i.next;
    }
    if (t === e && i !== null) {
      return i.value;
    }
  };
  r.prototype.getReverse = function (e) {
    var t = 0;
    var i = this.tail;
    for (; i !== null && t < e; t++) {
      i = i.prev;
    }
    if (t === e && i !== null) {
      return i.value;
    }
  };
  r.prototype.map = function (e, t) {
    t = t || this;
    var i = new r();
    var n = this.head;
    while (n !== null) {
      i.push(e.call(t, n.value, this));
      n = n.next;
    }
    return i;
  };
  r.prototype.mapReverse = function (e, t) {
    t = t || this;
    var i = new r();
    var n = this.tail;
    while (n !== null) {
      i.push(e.call(t, n.value, this));
      n = n.prev;
    }
    return i;
  };
  r.prototype.reduce = function (e, t) {
    var i;
    var r = this.head;
    if (arguments.length > 1) {
      i = t;
    } else if (this.head) {
      r = this.head.next;
      i = this.head.value;
    } else {
      throw TypeError("Reduce of empty list with no initial value");
    }
    for (var n = 0; r !== null; n++) {
      i = e(i, r.value, n);
      r = r.next;
    }
    return i;
  };
  r.prototype.reduceReverse = function (e, t) {
    var i;
    var r = this.tail;
    if (arguments.length > 1) {
      i = t;
    } else if (this.tail) {
      r = this.tail.prev;
      i = this.tail.value;
    } else {
      throw TypeError("Reduce of empty list with no initial value");
    }
    for (var n = this.length - 1; r !== null; n--) {
      i = e(i, r.value, n);
      r = r.prev;
    }
    return i;
  };
  r.prototype.toArray = function () {
    var e = Array(this.length);
    var t = 0;
    var i = this.head;
    for (; i !== null; t++) {
      e[t] = i.value;
      i = i.next;
    }
    return e;
  };
  r.prototype.toArrayReverse = function () {
    var e = Array(this.length);
    var t = 0;
    var i = this.tail;
    for (; i !== null; t++) {
      e[t] = i.value;
      i = i.prev;
    }
    return e;
  };
  r.prototype.slice = function (e, t) {
    if ((t = t || this.length) < 0) {
      t += this.length;
    }
    if ((e = e || 0) < 0) {
      e += this.length;
    }
    var i = new r();
    if (t < e || t < 0) {
      return i;
    }
    if (e < 0) {
      e = 0;
    }
    if (t > this.length) {
      t = this.length;
    }
    var n = 0;
    var s = this.head;
    for (; s !== null && n < e; n++) {
      s = s.next;
    }
    for (; s !== null && n < t; n++, s = s.next) {
      i.push(s.value);
    }
    return i;
  };
  r.prototype.sliceReverse = function (e, t) {
    if ((t = t || this.length) < 0) {
      t += this.length;
    }
    if ((e = e || 0) < 0) {
      e += this.length;
    }
    var i = new r();
    if (t < e || t < 0) {
      return i;
    }
    if (e < 0) {
      e = 0;
    }
    if (t > this.length) {
      t = this.length;
    }
    var n = this.length;
    var s = this.tail;
    for (; s !== null && n > t; n--) {
      s = s.prev;
    }
    for (; s !== null && n > e; n--, s = s.prev) {
      i.push(s.value);
    }
    return i;
  };
  r.prototype.splice = function (e, t, ...i) {
    if (e > this.length) {
      e = this.length - 1;
    }
    if (e < 0) {
      e = this.length + e;
    }
    var r = 0;
    var s = this.head;
    for (; s !== null && r < e; r++) {
      s = s.next;
    }
    var o = [];
    var r = 0;
    for (; s && r < t; r++) {
      o.push(s.value);
      s = this.removeNode(s);
    }
    if (s === null) {
      s = this.tail;
    }
    if (s !== this.head && s !== this.tail) {
      s = s.prev;
    }
    for (var r = 0; r < i.length; r++) {
      s = function (e, t, i) {
        var r = t === e.head ? new n(i, null, t, e) : new n(i, t, t.next, e);
        if (r.next === null) {
          e.tail = r;
        }
        if (r.prev === null) {
          e.head = r;
        }
        e.length++;
        return r;
      }(this, s, i[r]);
    }
    return o;
  };
  r.prototype.reverse = function () {
    var e = this.head;
    var t = this.tail;
    var i = e;
    for (; i !== null; i = i.prev) {
      var r = i.prev;
      i.prev = i.next;
      i.next = r;
    }
    this.head = t;
    this.tail = e;
    return this;
  };
  try {
    require("linked-list-iterator-util") /*id: 116996*/(r);
  } catch (e) {}
}