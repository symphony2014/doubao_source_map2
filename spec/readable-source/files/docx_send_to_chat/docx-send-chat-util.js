// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 871260
         */
module.exports = function (module, exports, require) {
  var t;
  var r;
  var i = Object.prototype.toString;
  var n = Math.max;
  t = function (e) {
    if (!e || !e.length) {
      return [];
    }
    var t = 0;
    e = function (e, t) {
      var r = -1;
      var i = e ? e.length : 0;
      var n = 0;
      var a = [];
      while (++r < i) {
        var o = e[r];
        if (t(o, r, e)) {
          a[n++] = o;
        }
      }
      return a;
    }(e, function (e) {
      var r;
      var a;
      var o;
      var s;
      var l;
      var c;
      var u;
      var d;
      if ((o = r = e) && typeof o == "object" && (a = r) != null && typeof (s = a.length) == "number" && s > -1 && s % 1 == 0 && s <= 9007199254740991 && (u = typeof (c = l = a), d = c && (u == "object" || u == "function") ? i.call(l) : "") != "[object Function]" && d != "[object GeneratorFunction]") {
        t = n(e.length, t);
        return true;
      }
    });
    return function (e, t) {
      var r = -1;
      var i = Array(e);
      while (++r < e) {
        i[r] = t(r);
      }
      return i;
    }(t, function (t) {
      return function (e, t) {
        var r = -1;
        var i = e ? e.length : 0;
        var n = Array(i);
        while (++r < i) {
          n[r] = t(e[r], r, e);
        }
        return n;
      }(e, function (e) {
        if (e == null) {
          return undefined;
        } else {
          return e[t];
        }
      });
    });
  };
  r = n(r === undefined ? t.length - 1 : r, 0);
  function a() {
    var e = arguments;
    var i = -1;
    var a = n(e.length - r, 0);
    var o = Array(a);
    while (++i < a) {
      o[i] = e[r + i];
    }
    i = -1;
    var s = Array(r + 1);
    for (; ++i < r;) {
      s[i] = e[i];
    }
    s[r] = o;
    return function (e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }(t, this, s);
  }
  module.exports = a;
}