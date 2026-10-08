// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vs' to 'transform'
// - Renamed export 'OS' to 'TransformDirection'
// - Renamed export 'ZP' to 'DocNode'
// - Renamed export 'P6' to 'easysyncUtils'
// - Renamed export 'qC' to 'compose'
// - Renamed export 'nn' to 'apply'
// - Renamed export 'U_' to 'invert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 379386
         */
module.exports = function (module, exports, require) {
  function r(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function i(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return s;
  }
  (s = a ||= {}).LEFT = "left";
  s.RIGHT = "right";
  var o;
  var s;
  var a;
  var u;
  function c(t, e, n, i) {
    function o(t, n, r, i) {
      e(r, t, n, "left");
      e(i, n, t, "right");
    }
    var s = t.transformX = function (t, e) {
      n(t);
      n(e);
      var a;
      var u;
      var c;
      var l;
      var p;
      var h;
      var f = [];
      try {
        var d = r(e);
        var v = d.next();
        for (; !v.done; v = d.next()) {
          var y = v.value;
          var g = [];
          var _ = 0;
          while (_ < t.length) {
            var m = [];
            o(t[_], y, g, m);
            _++;
            if (m.length === 1) {
              y = m[0];
            } else if (m.length === 0) {
              for (var b = _; b < t.length; b++) {
                i(g, t[b]);
              }
              y = null;
              break;
            } else {
              var E = s(t.slice(_), m);
              try {
                c = undefined;
                var w = r(E[0]);
                var S = w.next();
                for (; !S.done; S = w.next()) {
                  var T = S.value;
                  i(g, T);
                }
              } catch (t) {
                c = {
                  error: t
                };
              } finally {
                try {
                  if (S && !S.done && (l = w.return)) {
                    l.call(w);
                  }
                } finally {
                  if (c) {
                    throw c.error;
                  }
                }
              }
              try {
                p = undefined;
                var I = r(E[1]);
                var A = I.next();
                for (; !A.done; A = I.next()) {
                  var C = A.value;
                  i(f, C);
                }
              } catch (t) {
                p = {
                  error: t
                };
              } finally {
                try {
                  if (A && !A.done && (h = I.return)) {
                    h.call(I);
                  }
                } finally {
                  if (p) {
                    throw p.error;
                  }
                }
              }
              y = null;
              break;
            }
          }
          if (y != null) {
            i(f, y);
          }
          t = g;
        }
      } catch (t) {
        a = {
          error: t
        };
      } finally {
        try {
          if (v && !v.done && (u = d.return)) {
            u.call(d);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
      return [t, f];
    };
    t.transform = function (t, n, r) {
      if (r !== "left" && r !== "right") {
        throw Error("type must be 'left' or 'right'");
      }
      if (n.length === 0) {
        return t;
      } else if (t.length === 1 && n.length === 1) {
        return e([], t[0], n[0], r);
      } else if (r === "left") {
        return s(t, n)[0];
      } else {
        return s(n, t)[1];
      }
    };
  }
  var l = {
    name: "text0",
    uri: "http://sharejs.org/types/textv0",
    create: function (t) {
      if (t != null && typeof t != "string") {
        throw Error("Initial data must be a string");
      }
      return t || "";
    }
  };
  function p(t, e, n) {
    return t.slice(0, e) + n + t.slice(e);
  }
  function h(t) {
    if (typeof t.p != "number") {
      throw Error("component missing position field");
    }
    if (typeof t.i == "string" == (typeof t.d == "string")) {
      throw Error("component needs an i or d field");
    }
    if (t.p < 0) {
      throw Error("position cannot be negative");
    }
  }
  function f(t) {
    for (var e = 0; e < t.length; e++) {
      h(t[e]);
    }
  }
  l.apply = function (t, e) {
    var n;
    f(e);
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      if (i.i != null) {
        t = p(t, i.p, i.i);
      } else {
        n = t.slice(i.p, i.p + i.d.length);
        if (i.d !== n) {
          throw Error("Delete component '" + i.d + "' does not match deleted text '" + n + "'");
        }
        t = t.slice(0, i.p) + t.slice(i.p + i.d.length);
      }
    }
    return t;
  };
  var d = l._append = function (t, e) {
    if (e.i !== "" && e.d !== "") {
      if (t.length === 0) {
        t.push(e);
      } else {
        var n = t[t.length - 1];
        if (n.i != null && e.i != null && n.p <= e.p && e.p <= n.p + n.i.length) {
          t[t.length - 1] = {
            i: p(n.i, e.p - n.p, e.i),
            p: n.p
          };
        } else if (n.d != null && e.d != null && e.p <= n.p && n.p <= e.p + e.d.length) {
          t[t.length - 1] = {
            d: p(e.d, n.p - e.p, n.d),
            p: e.p
          };
        } else {
          t.push(e);
        }
      }
    }
  };
  l.compose = function (t, e) {
    f(t);
    f(e);
    var n = t.slice();
    var r = 0;
    for (; r < e.length; r++) {
      d(n, e[r]);
    }
    return n;
  };
  l.normalize = function (t) {
    var e = [];
    if (t.i != null || t.p != null) {
      t = [t];
    }
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      if (r.p == null) {
        r.p = 0;
      }
      d(e, r);
    }
    return e;
  };
  function v(t, e, n) {
    if (e.i != null) {
      if (e.p < t || e.p === t && n) {
        return t + e.i.length;
      } else {
        return t;
      }
    } else if (t <= e.p) {
      return t;
    } else if (t <= e.p + e.d.length) {
      return e.p;
    } else {
      return t - e.d.length;
    }
  }
  l.transformCursor = function (t, e, n) {
    var r = n === "right";
    var i = 0;
    for (; i < e.length; i++) {
      t = v(t, e[i], r);
    }
    return t;
  };
  var y = l._tc = function (t, e, n, r) {
    h(e);
    h(n);
    if (e.i != null) {
      d(t, {
        i: e.i,
        p: v(e.p, n, r === "right")
      });
    } else if (n.i != null) {
      var i = e.d;
      if (e.p < n.p) {
        d(t, {
          d: i.slice(0, n.p - e.p),
          p: e.p
        });
        i = i.slice(n.p - e.p);
      }
      if (i !== "") {
        d(t, {
          d: i,
          p: e.p + n.i.length
        });
      }
    } else if (e.p >= n.p + n.d.length) {
      d(t, {
        d: e.d,
        p: e.p - n.d.length
      });
    } else if (e.p + e.d.length <= n.p) {
      d(t, e);
    } else {
      var o = {
        d: "",
        p: e.p
      };
      if (e.p < n.p) {
        o.d = e.d.slice(0, n.p - e.p);
      }
      if (e.p + e.d.length > n.p + n.d.length) {
        o.d += e.d.slice(n.p + n.d.length - e.p);
      }
      var s = Math.max(e.p, n.p);
      var a = Math.min(e.p + e.d.length, n.p + n.d.length);
      if (e.d.slice(s - e.p, a - e.p) !== n.d.slice(s - n.p, a - n.p)) {
        throw Error("Delete ops delete different text in the same region of the document");
      }
      if (o.d !== "") {
        o.p = v(o.p, n);
        d(t, o);
      }
    }
    return t;
  };
  l.invert = function (t) {
    t = t.slice().reverse();
    var e;
    var n = 0;
    for (; n < t.length; n++) {
      t[n] = (e = t[n]).i != null ? {
        d: e.i,
        p: e.p
      } : {
        i: e.d,
        p: e.p
      };
    }
    return t;
  };
  c(l, y, f, d);
  var changesetOperationsCore = require("changeset-operations-core") /*id: 378584*/;
  (o = u ||= {})[o.DIFF_DELETE = -1] = "DIFF_DELETE";
  o[o.DIFF_INSERT = 1] = "DIFF_INSERT";
  o[o.DIFF_EQUAL = 0] = "DIFF_EQUAL";
  var _ = function () {
    function t(t, e) {
      this.op = t;
      this.text = e;
    }
    t.prototype.toString = function () {
      return this.op + "," + this.text;
    };
    return t;
  }();
  var m = new (function () {
    function t() {
      var t = this;
      this.diff = function (e, n) {
        if (e === null || n === null) {
          throw Error("Null input. (diff)");
        }
        if (e === n) {
          if (e) {
            return [new _(u.DIFF_EQUAL, e)];
          } else {
            return [];
          }
        }
        var r = t.diffCommonPrefix(e, n);
        var i = e.substring(0, r);
        e = e.substring(r);
        n = n.substring(r);
        r = t.diffCommonSuffix(e, n);
        var o = e.substring(e.length - r);
        e = e.substring(0, e.length - r);
        n = n.substring(0, n.length - r);
        var s = t.diffCompute(e, n);
        if (i) {
          s.unshift(new _(u.DIFF_EQUAL, i));
        }
        if (o) {
          s.push(new _(u.DIFF_EQUAL, o));
        }
        t.diffMerge(s);
        return s;
      };
      this.diffCommonPrefix = function (t, e) {
        if (!t || !e || t.charAt(0) !== e.charAt(0)) {
          return 0;
        }
        var n = 0;
        var r = Math.min(t.length, e.length);
        var i = r;
        var o = 0;
        while (n < i) {
          if (t.substring(o, i) === e.substring(o, i)) {
            o = n = i;
          } else {
            r = i;
          }
          i = Math.floor((r - n) / 2 + n);
        }
        return i;
      };
      this.diffCommonSuffix = function (t, e) {
        var n = t.length;
        var r = e.length;
        if (!t || !e || t.charAt(n - 1) !== e.charAt(r - 1)) {
          return 0;
        }
        var i = 0;
        var o = Math.min(n, r);
        var s = o;
        var a = 0;
        while (i < s) {
          if (t.substring(t.length - s, t.length - a) === e.substring(e.length - s, e.length - a)) {
            a = i = s;
          } else {
            o = s;
          }
          s = Math.floor((o - i) / 2 + i);
        }
        return s;
      };
      this.diffCompute = function (e, n) {
        var r = [];
        if (!e) {
          return [new _(u.DIFF_INSERT, n)];
        }
        if (!n) {
          return [new _(u.DIFF_DELETE, e)];
        }
        var i = e.length > n.length ? e : n;
        var o = e.length > n.length ? n : e;
        var s = i.indexOf(o);
        if (s !== -1) {
          r.push(new _(u.DIFF_INSERT, i.substring(0, s)), new _(u.DIFF_EQUAL, o), new _(u.DIFF_INSERT, i.substring(s + o.length)));
          if (e.length > n.length) {
            r[0].op = r[2].op = u.DIFF_DELETE;
          }
          return r;
        }
        if (o.length === 1) {
          return [new _(u.DIFF_DELETE, e), new _(u.DIFF_INSERT, n)];
        }
        var a = t.diffHalfMatch(e, n);
        if (a) {
          var c = a[0] || "";
          var l = a[1] || "";
          var p = a[2] || "";
          var h = a[3] || "";
          var f = a[4] || "";
          var d = t.diff(c, p);
          var v = t.diff(l, h);
          return d.concat([new _(u.DIFF_EQUAL, f)], v);
        }
        return t.diffBisect(e, n);
      };
      this.diffBisect = function (e, n) {
        var r = e.length;
        var i = n.length;
        var o = Math.ceil((r + i) / 2);
        var s = o * 2;
        var a = t.generateV(s);
        var c = a.v1;
        var l = a.v2;
        c[o + 1] = 0;
        l[o + 1] = 0;
        var p = 0;
        var h = 0;
        var f = r - i;
        var d = f % 2 != 0;
        var v = 0;
        var y = 0;
        var g = 0;
        for (; g < o; g++) {
          for (var m = -g + p; m <= g - h; m += 2) {
            var b = o + m;
            var E = undefined;
            var w = (E = m === -g || m !== g && c[b - 1] < c[b + 1] ? c[b + 1] : c[b - 1] + 1) - m;
            while (E < r && w < i && e.charAt(E) === n.charAt(w)) {
              E++;
              w++;
            }
            c[b] = E;
            if (E > r) {
              h += 2;
            } else if (w > i) {
              p += 2;
            } else if (d) {
              var S = o + f - m;
              if (S >= 0 && S < s && l[S] !== -1) {
                var T = r - l[S];
                if (E >= T) {
                  return t.diffBisectSplit(e, n, E, w);
                }
              }
            }
          }
          for (var I = -g + v; I <= g - y; I += 2) {
            var S = o + I;
            var T = undefined;
            var A = (T = I === -g || I !== g && l[S - 1] < l[S + 1] ? l[S + 1] : l[S - 1] + 1) - I;
            while (T < r && A < i && e.charAt(r - T - 1) === n.charAt(i - A - 1)) {
              T++;
              A++;
            }
            l[S] = T;
            if (T > r) {
              y += 2;
            } else if (A > i) {
              v += 2;
            } else if (!d) {
              var b = o + f - I;
              if (b >= 0 && b < s && c[b] !== -1) {
                var E = c[b];
                var w = o + E - b;
                if (E >= (T = r - T)) {
                  return t.diffBisectSplit(e, n, E, w);
                }
              }
            }
          }
        }
        return [new _(u.DIFF_DELETE, e), new _(u.DIFF_INSERT, n)];
      };
      this.diffBisectSplit = function (e, n, r, i) {
        var o = e.substring(0, r);
        var s = n.substring(0, i);
        var a = e.substring(r);
        var u = n.substring(i);
        var c = t.diff(o, s);
        var l = t.diff(a, u);
        return c.concat(l);
      };
      this.diffHalfMatch = function (e, n) {
        var r;
        var i;
        var o;
        var s;
        var a;
        var u = e.length > n.length ? e : n;
        var c = e.length > n.length ? n : e;
        if (u.length < 4 || c.length * 2 < u.length) {
          return null;
        }
        var l = t.diff_halfMatchI_(u, c, Math.ceil(u.length / 4));
        var p = t.diff_halfMatchI_(u, c, Math.ceil(u.length / 2));
        if (l || p) {
          r = p ? l && l[4].length > p[4].length ? l : p : l;
          if (e.length > n.length) {
            i = r && r[0];
            o = r && r[1];
            s = r && r[2];
            a = r && r[3];
          } else {
            s = r && r[0];
            a = r && r[1];
            i = r && r[2];
            o = r && r[3];
          }
          return [i, o, s, a, r && r[4]];
        } else {
          return null;
        }
      };
      this.diff_halfMatchI_ = function (e, n, r) {
        var i = e.substring(r, r + Math.floor(e.length / 4));
        var o = -1;
        var s = "";
        var a = "";
        var u = "";
        var c = "";
        var l = "";
        while ((o = n.indexOf(i, o + 1)) !== -1) {
          var p = t.diffCommonPrefix(e.substring(r), n.substring(o));
          var h = t.diffCommonSuffix(e.substring(0, r), n.substring(0, o));
          if (s.length < h + p) {
            s = n.substring(o - h, o) + n.substring(o, o + p);
            a = e.substring(0, r - h) || "";
            u = e.substring(r + p) || "";
            c = n.substring(0, o - h) || "";
            l = n.substring(o + p) || "";
          }
        }
        if (s.length * 2 >= e.length) {
          return [a, u, c, l, s];
        } else {
          return null;
        }
      };
      this.diffMerge = function (e) {
        e.push(new _(u.DIFF_EQUAL, ""));
        var n;
        var r = 0;
        var i = 0;
        var o = 0;
        var s = "";
        var a = "";
        while (r < e.length) {
          switch (e[r].op) {
            case u.DIFF_INSERT:
              o++;
              a += e[r].text;
              r++;
              break;
            case u.DIFF_DELETE:
              i++;
              s += e[r].text;
              r++;
              break;
            case u.DIFF_EQUAL:
              if (i + o > 1) {
                if (i !== 0 && o !== 0) {
                  if ((n = t.diffCommonPrefix(a, s)) !== 0) {
                    if (r - i - o > 0 && e[r - i - o - 1].op === u.DIFF_EQUAL) {
                      e[r - i - o - 1].text += a.substring(0, n);
                    } else {
                      e.splice(0, 0, new _(u.DIFF_EQUAL, a.substring(0, n)));
                      r++;
                    }
                    a = a.substring(n);
                    s = s.substring(n);
                  }
                  if ((n = t.diffCommonSuffix(a, s)) !== 0) {
                    e[r].text = a.substring(a.length - n) + e[r].text;
                    a = a.substring(0, a.length - n);
                    s = s.substring(0, s.length - n);
                  }
                }
                r -= i + o;
                e.splice(r, i + o);
                if (s.length) {
                  e.splice(r, 0, new _(u.DIFF_DELETE, s));
                  r++;
                }
                if (a.length) {
                  e.splice(r, 0, new _(u.DIFF_INSERT, a));
                  r++;
                }
                r++;
              } else if (r !== 0 && e[r - 1].op === u.DIFF_EQUAL) {
                e[r - 1].text += e[r].text;
                e.splice(r, 1);
              } else {
                r++;
              }
              o = 0;
              i = 0;
              s = "";
              a = "";
          }
        }
        if (e[e.length - 1].text === "") {
          e.pop();
        }
        var c = false;
        for (r = 1; r < e.length - 1;) {
          if (e[r - 1].op === u.DIFF_EQUAL && e[r + 1].op === u.DIFF_EQUAL) {
            if (e[r].text.substring(e[r].text.length - e[r - 1].text.length) === e[r - 1].text) {
              e[r].text = e[r - 1].text + e[r].text.substring(0, e[r].text.length - e[r - 1].text.length);
              e[r + 1].text = e[r - 1].text + e[r + 1].text;
              e.splice(r - 1, 1);
              c = true;
            } else if (e[r].text.substring(0, e[r + 1].text.length) === e[r + 1].text) {
              e[r - 1].text += e[r + 1].text;
              e[r].text = e[r].text.substring(e[r + 1].text.length) + e[r + 1].text;
              e.splice(r + 1, 1);
              c = true;
            }
          }
          r++;
        }
        if (c) {
          t.diffMerge(e);
        }
      };
    }
    t.prototype.generateV = function (t) {
      var e = Array(t);
      var n = Array(t);
      var r = 0;
      for (; r < t; r++) {
        e[r] = -1;
        n[r] = -1;
      }
      return {
        v1: e,
        v2: n
      };
    };
    return t;
  }())();
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var w = /\*([0-9a-z]+)/g;
  function S(t) {
    return !!t.action && !!isObjectOrFunction_1_1.isObjectOrFunction(t.action.oi) && !!isObjectOrFunction_1_1.isObjectOrFunction(t.action.od) && !!isObjectOrFunction_1_1.isObjectOrFunction(t.action.oi.apool) && !!isObjectOrFunction_1_1.isObjectOrFunction(t.action.oi.initialAttributedTexts) && !!isObjectOrFunction_1_1.isObjectOrFunction(t.action.od.apool) && !!isObjectOrFunction_1_1.isObjectOrFunction(t.action.od.initialAttributedTexts);
  }
  function T(t) {
    return !!t.subType && t.subType.t === "easysync";
  }
  function I(t) {
    if (typeof t != "string") {
      throw Error("Cs is empty");
    }
    var e = changesetOperationsCore.createOpIterator(t);
    var n = [];
    while (e.hasNext()) {
      var r = e.next();
      if (r.opcode === "+") {
        var i = (r.attribs.match(w) || []).map(function (t) {
          return changesetOperationsCore.base36Decode(t.substring(1));
        });
        Array(r.chars).fill(i).forEach(function (t) {
          n.push(t);
        });
      } else {
        throw Error("ClientVars initial cs should not have op type other than +");
      }
    }
    return n;
  }
  function A(t, e, n, r, i) {
    for (var o = 1; o < t; o++) {
      var s = e + o;
      var a = (r || 0) + o;
      if (!deepEqualUtil_1.deepEqual(n[s], n[s - 1]) || i && !deepEqualUtil_1.deepEqual(i[a], i[a - 1])) {
        return o;
      }
    }
    return t;
  }
  function C(t, e, n) {
    var r = t.slice(e, e + n);
    var i = r.lastIndexOf("\n");
    return [Array.from(r).reduce(function (t, e) {
      if (e === "\n") {
        return t + 1;
      } else {
        return t;
      }
    }, 0), i];
  }
  function M(t) {
    var e = t.action.od;
    var n = t.action.oi;
    var r = e.initialAttributedTexts.text["0"];
    var o = n.initialAttributedTexts.text["0"];
    var s = new changesetOperationsCore.AttribPool().fromJsonable(e.apool);
    var a = new changesetOperationsCore.AttribPool().fromJsonable(n.apool);
    var c = new changesetOperationsCore.AttribPool();
    var l = I(e.initialAttributedTexts.attribs["0"]);
    var p = I(n.initialAttributedTexts.attribs["0"]);
    var h = changesetOperationsCore.buildChangeset(r.length, "Z", "0");
    var f = m.diff(r, o);
    var d = 0;
    var v = 0;
    f.forEach(function (t) {
      var e;
      var n;
      var r;
      var o;
      var f = t.op;
      var y = t.text;
      if (f === u.DIFF_EQUAL) {
        (function (t, e, n, r, o, s, a, u, c) {
          var l = t.length;
          var p = 0;
          while (p < l) {
            (function () {
              var h = e + p;
              var f = n + p;
              var d = A(l - p, h, r, f, o);
              var v = new Map();
              var y = new Map();
              r[h].forEach(function (t) {
                var e = s.getAttrib(t);
                v.set(e[0], e[1]);
              });
              o[f].forEach(function (t) {
                var e = a.getAttrib(t);
                if (v.get(e[0]) !== e[1]) {
                  y.set(e[0], e[1]);
                }
                v.delete(e[0]);
              });
              v.forEach(function (t, e) {
                y.set(e, "");
              });
              var g = i(C(t, h - e, d), 2);
              var _ = g[0];
              var m = g[1];
              var b = Array.from(y.entries());
              if (m < 0) {
                u.keep(d, 0, b, c);
              } else {
                u.keep(m + 1, _, b, c);
                u.keep(d - (m + 1), 0, b, c);
              }
              p += d;
            })();
          }
        })(y, d, v, l, p, s, a, h, c);
        v += y.length;
        d += y.length;
      } else if (f === u.DIFF_INSERT) {
        (function (t, e, n, r, i, o) {
          var s = t.length;
          var a = 0;
          while (a < s) {
            (function () {
              var u = e + a;
              var c = A(s - a, u, n);
              var l = new Map();
              n[u].forEach(function (t) {
                var e = r.getAttrib(t);
                l.set(e[0], e[1]);
              });
              i.insert(t.slice(a, a + c), Array.from(l.entries()), o);
              a += c;
            })();
          }
        })(y, v, p, a, h, c);
        v += y.length;
      } else if (f === u.DIFF_DELETE) {
        e = y.length;
        r = (n = i(C(y, 0, e), 2))[0];
        if ((o = n[1]) < 0) {
          h.remove(e, 0);
        } else {
          h.remove(o + 1, r);
          h.remove(e - (o + 1), 0);
        }
        d += y.length;
      }
    });
    return {
      p: t.p,
      subType: {
        t: "easysync",
        o: {
          zone_changesets: {
            0: h.toString()
          },
          apool: c.toJsonable()
        }
      }
    };
  }
  function k(t) {
    return Object.prototype.toString.call(t) === "[object Array]";
  }
  function O(t) {
    return JSON.parse(JSON.stringify(t));
  }
  var R = {
    name: "json0",
    uri: "http://sharejs.org/types/JSONv0"
  };
  function D(t, e) {
    if (window.collectEvent) {
      window.collectEvent("doc_bug_track_dev", {
        action: "json0_error_" + t,
        info: {
          msg: e
        }
      });
    }
  }
  var N = {};
  function x(t) {
    t.subType = t.subType || {};
    t.subType.t = "text0";
    var e = {
      p: t.p.pop()
    };
    if (t.action && t.action.si != null) {
      e.i = t.action.si;
    }
    if (t.action && t.action.sd != null) {
      e.d = t.action.sd;
    }
    t.subType.o = [e];
  }
  function P(t) {
    t.p.push(t.subType.o[0].p);
    if (t.subType.o[0].i != null) {
      t.action.si = t.subType.o[0].i;
    }
    if (t.subType.o[0].d != null) {
      t.action.sd = t.subType.o[0].d;
    }
    delete t.subType.t;
    delete t.subType.o;
    delete t.subType;
  }
  R.registerSubtype = function (t) {
    N[t.name] = t;
  };
  R.create = function (t) {
    if (t === undefined) {
      return null;
    } else {
      return O(t);
    }
  };
  R.invertComponent = function (t, e, n) {
    var r = {
      p: t.p,
      action: {}
    };
    if (t.subType && t.subType.t && N[t.subType.t]) {
      r.subType = r.subType || {};
      r.subType.t = t.subType.t;
      var i = e && e[t.p];
      r.subType.o = N[t.subType.t].invert(t.subType.o, i, n);
    }
    if (t.action && t.action.si !== undefined) {
      r.action.sd = t.action.si;
    }
    if (t.action && t.action.sd !== undefined) {
      r.action.si = t.action.sd;
    }
    if (t.action && t.action.oi !== undefined) {
      r.action.od = t.action.oi;
    }
    if (t.action && t.action.od !== undefined) {
      r.action.oi = t.action.od;
    }
    if (t.action && t.action.li !== undefined) {
      r.action.ld = t.action.li;
    }
    if (t.action && t.action.ld !== undefined) {
      r.action.li = t.action.ld;
    }
    if (t.action && t.action.na !== undefined) {
      r.action.na = -t.action.na;
    }
    if (t.action && t.action.lm !== undefined) {
      r.action.lm = t.p[t.p.length - 1];
      r.p = t.p.slice(0, t.p.length - 1).concat([t.action.lm]);
    }
    return r;
  };
  R.invert = function (t, e, n = true) {
    var r = t.slice().reverse();
    var i = [];
    var o = 0;
    for (; o < r.length; o++) {
      i.push(R.invertComponent(r[o], e, n));
    }
    return i;
  };
  R.checkValidOp = function (t) {
    if (!k(t)) {
      throw Error("op is not array");
    }
    for (var e = 0; e < t.length; e++) {
      if (!k(t[e].p)) {
        throw Error("Missing path");
      }
    }
  };
  R.checkList = function (t, e, n) {
    if (!k(t)) {
      throw Error("Referenced element not a list");
    }
    if (t.length < e) {
      D(n, "Out-of-bounds write: element length=" + t.length + " but the index=" + e);
    }
  };
  R.checkObj = function (t) {
    if (!t || t.constructor !== Object) {
      throw Error("Referenced element not an object (it was " + JSON.stringify(t) + ")");
    }
  };
  R.apply = function (t, e) {
    R.checkValidOp(e);
    e = O(e);
    var n = {
      data: t
    };
    var r = 0;
    for (; r < e.length; r++) {
      var i = e[r];
      if (i.action && (i.action.si != null || i.action.sd != null)) {
        x(i);
      }
      var o = null;
      var s = n;
      var a = "data";
      var u = 0;
      for (; u < i.p.length; u++) {
        var c = i.p[u];
        o = s;
        s = s[a];
        a = c;
        if (o == null) {
          throw Error("Path invalid");
        }
      }
      if (i.subType && i.subType.t && i.subType.o !== undefined && N[i.subType.t]) {
        s[a] = N[i.subType.t].apply(s[a], i.subType.o);
      } else if (i.action && i.action.na !== undefined) {
        if (typeof s[a] != "number") {
          throw Error("Referenced element not a number");
        }
        s[a] += i.action.na;
      } else if (i.action && i.action.li !== undefined && i.action.ld !== undefined) {
        R.checkList(s, a, t == null ? undefined : t.type);
        if (!deepEqualUtil_1.deepEqual(s[a], i.action.ld)) {
          throw Error("element does not match c.ld, key:" + a + ", elem[key]:" + JSON.stringify(s[a]) + ", c.ld: " + JSON.stringify(i.action.ld));
        }
        s[a] = i.action.li;
      } else if (i.action && i.action.li !== undefined) {
        R.checkList(s, a, t == null ? undefined : t.type);
        s.splice(a, 0, i.action.li);
      } else if (i.action && i.action.ld !== undefined) {
        R.checkList(s, a, t == null ? undefined : t.type);
        if (!deepEqualUtil_1.deepEqual(s[a], i.action.ld)) {
          throw Error("element does not match c.ld, key:" + a + ", elem[key]:" + JSON.stringify(s[a]) + ", c.ld: " + JSON.stringify(i.action.ld));
        }
        s.splice(a, 1);
      } else if (i.action && i.action.lm !== undefined) {
        R.checkList(s, a, t == null ? undefined : t.type);
        if (i.action.lm != a) {
          var l = s[a];
          s.splice(a, 1);
          s.splice(i.action.lm, 0, l);
        }
      } else if (i.action && i.action.oi !== undefined) {
        R.checkObj(s);
        s[a] = i.action.oi;
      } else if (i.action && i.action.od !== undefined) {
        R.checkObj(s);
        if (!deepEqualUtil_1.deepEqual(s[a], i.action.od)) {
          D(t == null ? undefined : t.type, "element does not match c.od, key:" + a + ", elem[key]:" + JSON.stringify(s[a]) + ", c.od: " + JSON.stringify(i.action.od));
        }
        delete s[a];
      } else {
        throw Error("invalid / missing instruction in op");
      }
    }
    return n.data;
  };
  R.shatter = function (t) {
    var e = [];
    var n = 0;
    for (; n < t.length; n++) {
      e.push([t[n]]);
    }
    return e;
  };
  R.incrementalApply = function (t, e, n) {
    for (var r = 0; r < e.length; r++) {
      var i = [e[r]];
      t = R.apply(t, i);
      n(i, t);
    }
    return t;
  };
  var B = R.pathMatches = function (t, e, n) {
    if (t.length != e.length) {
      return false;
    }
    for (var r = 0; r < t.length; r++) {
      if (t[r] !== e[r] && (!n || r !== t.length - 1)) {
        return false;
      }
    }
    return true;
  };
  function L(t, e) {
    var n = changesetOperationsCore.createOpIterator(t);
    var r = [];
    var i = [];
    var o = 0;
    for (; o < e.length; o++) {
      if (e[o] === "\n") {
        i.push(o);
      }
    }
    if (i.length === 0) {
      return [t];
    }
    var s = i.shift();
    var a = 0;
    var u = "";
    while (n.hasNext()) {
      var c = n.next();
      if (c.opcode !== "+") {
        throw Error("transformAttribsToAlines opcode must be +");
      }
      u += c.attribs;
      if (typeof s != "number" || a + c.chars - 1 < s) {
        u += "+" + c.chars.toString(36);
        a += c.chars;
        continue;
      }
      for (var l = c.chars; typeof s == "number" && l > 0 && a + l - 1 >= s;) {
        if (u === "") {
          u = c.attribs;
        }
        var p = s - a + 1;
        u += "|1+" + p.toString(36);
        a += p;
        l -= p;
        r.push(u);
        u = "";
        s = i.shift();
      }
    }
    if (u !== "") {
      r.push(u);
    }
    return r;
  }
  R.append = function (t, e, n = {}) {
    e = O(e);
    var r;
    var i = n.hasEasysyncOp;
    var o = i !== undefined && i;
    var s = n.lastEasysyncOpIndex;
    var a = s === undefined ? -1 : s;
    var u = S(e);
    var c = T(e);
    var l = u || c;
    if (o && u) {
      e = M(e);
    }
    if (t.length === 0) {
      t.push(e);
      if (l) {
        return 0;
      } else {
        return null;
      }
    }
    var p = null;
    if (o && l) {
      if (a === -1) {
        p = t.length;
        for (var h = t.length - 1; h >= 0; h--) {
          if (B(e.p, t[h].p) && T(t[h])) {
            r = t[h];
            p = h;
            break;
          }
        }
      } else {
        r = t[a];
        p = a;
      }
    }
    r ||= t[t.length - 1];
    if (e.action && r.action && (e.action.si != null || e.action.sd != null) && (r.action.si != null || r.action.sd != null)) {
      x(e);
      x(r);
    }
    if (B(e.p, r.p)) {
      if (e.subType && e.subType.t && r.subType && r.subType.t && e.subType.t === r.subType.t && N[e.subType.t]) {
        r.subType.o = N[e.subType.t].compose(r.subType.o, e.subType.o);
        if (e.action && (e.action.si != null || e.action.sd != null)) {
          var f = e.p;
          var h = 0;
          for (; h < r.subType.o.length - 1; h++) {
            e.subType.o = [r.subType.o.pop()];
            e.p = f.slice();
            P(e);
            t.push(e);
          }
          P(r);
        }
      } else if (r.action && r.action.na != null && e.action.na != null) {
        t[t.length - 1] = {
          p: r.p,
          action: {
            na: r.action.na + e.action.na
          }
        };
      } else if (r.action && e.action && r.action.li !== undefined && e.action.li === undefined && e.action.ld === r.action.li) {
        if (r.action.ld !== undefined) {
          delete r.action.li;
        } else {
          t.pop();
        }
      } else if (r.action && e.action && r.action.od !== undefined && r.action.oi === undefined && e.action.oi !== undefined && e.action.od === undefined) {
        r.action.oi = e.action.oi;
      } else if (r.action && e.action && r.action.oi !== undefined && e.action.od !== undefined) {
        if (e.action && e.action.oi !== undefined) {
          r.action.oi = e.action.oi;
        } else if (r.action && r.action.od !== undefined) {
          delete r.action.oi;
        } else {
          t.pop();
        }
      } else if (!e.action || e.action.lm === undefined || e.p[e.p.length - 1] !== e.action.lm) {
        t.push(e);
      }
    } else {
      if (e.action && r.action && (e.action.si != null || e.action.sd != null) && (r.action.si != null || r.action.sd != null)) {
        P(e);
        P(r);
      }
      t.push(e);
    }
    return p;
  };
  R.compose = function (t, e) {
    R.checkValidOp(t);
    R.checkValidOp(e);
    var n = O(t);
    var r = t.concat(e).some(function (t) {
      return T(t);
    });
    var i = new Map();
    var o = 0;
    for (; o < e.length; o++) {
      var s = e[o].p.join("_");
      var a = R.append(n, e[o], {
        hasEasysyncOp: r,
        lastEasysyncOpIndex: i.has(s) ? i.get(s) : -1
      });
      if (a !== null) {
        i.set(s, a);
      }
    }
    return n;
  };
  R.normalize = function (t) {
    var e = [];
    t = k(t) ? t : [t];
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      if (r.p == null) {
        r.p = [];
      }
      R.append(e, r);
    }
    return e;
  };
  R.commonLengthForOps = function (t, e) {
    var n = t.p.length;
    var r = e.p.length;
    if (t.action && t.action.na != null || t.subType && t.subType.t) {
      n++;
    }
    if (e.action && e.action.na != null || e.subType && e.subType.t) {
      r++;
    }
    if (n === 0) {
      return -1;
    }
    if (r === 0) {
      return null;
    }
    n--;
    r--;
    for (var i = 0; i < n; i++) {
      var o = t.p[i];
      if (i >= r || o !== e.p[i]) {
        return null;
      }
    }
    return n;
  };
  R.canOpAffectPath = function (t, e) {
    return R.commonLengthForOps({
      p: e
    }, t) != null;
  };
  R.transformComponent = function (t, e, n, r) {
    e = O(e);
    if (deepEqualUtil_1.deepEqual(e.p, n.p)) {
      if (T(e) && S(n)) {
        n = M(n);
      } else if (T(n) && S(e)) {
        e = M(e);
      }
    }
    var i = R.commonLengthForOps(n, e);
    var o = R.commonLengthForOps(e, n);
    var s = e.p.length;
    var a = n.p.length;
    if (e.action && e.action.na != null || e.subType && e.subType.t) {
      s++;
    }
    if (n.action && n.action.na != null || n.subType && n.subType.t) {
      a++;
    }
    if (o != null && a > s && e.p[o] == n.p[o]) {
      if (e.action && e.action.ld !== undefined) {
        var u = O(n);
        u.p = u.p.slice(s);
        e.action.ld = R.apply(O(e.action.ld), [u]);
      } else if (e.action && e.action.od !== undefined) {
        var u = O(n);
        u.p = u.p.slice(s);
        e.action.od = R.apply(O(e.action.od), [u]);
      }
    }
    if (i != null) {
      var c = s == a;
      var u = n;
      if (e.action && n.action && (e.action.si != null || e.action.sd != null) && (n.action.si != null || n.action.sd != null)) {
        x(e);
        x(u = O(n));
      }
      if (u.subType && u.subType.t && N[u.subType.t]) {
        if (e.subType && e.subType.t && e.subType.t === u.subType.t) {
          var l = N[e.subType.t].transform(e.subType.o, u.subType.o, r);
          if (e.action && (e.action.si != null || e.action.sd != null)) {
            var p = e.p;
            var h = 0;
            for (; h < l.length; h++) {
              e.subType = e.subType || {};
              e.subType.o = [l[h]];
              e.p = p.slice();
              P(e);
              R.append(t, e);
            }
          } else if (!k(l) || l.length > 0) {
            e.subType = e.subType || {};
            e.subType.o = l;
            R.append(t, e);
          }
          return t;
        }
      } else if (n.action && n.action.na !== undefined) ;else if (n.action && n.action.li !== undefined && n.action.ld !== undefined) {
        if (n.p[i] === e.p[i]) {
          if (!c) {
            return t;
          }
          if (e.action && e.action.ld !== undefined) {
            if (!e.action || e.action.li === undefined || r !== "left") {
              return t;
            }
            e.action.ld = O(n.action.li);
          }
        }
      } else if (n.action && n.action.li !== undefined) {
        if (e.action && e.action.li !== undefined && e.action.ld === undefined && c && e.p[i] === n.p[i]) {
          if (r === "right") {
            e.p[i]++;
          }
        } else if (n.p[i] <= e.p[i]) {
          e.p[i]++;
        }
        if (e.action && e.action.lm !== undefined && c && n.p[i] <= e.action.lm) {
          e.action.lm++;
        }
      } else if (n.action && n.action.ld !== undefined) {
        if (e.action && e.action.lm !== undefined && c) {
          if (n.p[i] === e.p[i]) {
            return t;
          }
          var p = n.p[i];
          var f = e.p[i];
          var d = e.action.lm;
          if (p < d || p === d && f < d) {
            e.action.lm--;
          }
        }
        if (n.p[i] < e.p[i]) {
          e.p[i]--;
        } else if (n.p[i] === e.p[i]) {
          if (a < s) {
            return t;
          }
          if (e.action && e.action.ld !== undefined) {
            if (e.action.li === undefined) {
              return t;
            }
            delete e.action.ld;
          }
        }
      } else if (n.action && n.action.lm !== undefined) {
        if (e.action && e.action.lm !== undefined && s === a) {
          var f = e.p[i];
          var d = e.action.lm;
          var v = n.p[i];
          var y = n.action.lm;
          if (v !== y) {
            if (f === v) {
              if (r !== "left") {
                return t;
              }
              e.p[i] = y;
              if (f === d) {
                e.action.lm = y;
              }
            } else {
              if (f > v) {
                e.p[i]--;
              }
              if (f > y) {
                e.p[i]++;
              } else if (f === y && v > y) {
                e.p[i]++;
                if (f === d) {
                  e.action.lm++;
                }
              }
              if (d > v) {
                e.action.lm--;
              } else if (d === v && d > f) {
                e.action.lm--;
              }
              if (d > y) {
                e.action.lm++;
              } else if (d === y) {
                if (y > v && d > f || y < v && d < f) {
                  if (r === "right") {
                    e.action.lm++;
                  }
                } else if (d > f) {
                  e.action.lm++;
                } else if (d === v) {
                  e.action.lm--;
                }
              }
            }
          }
        } else if (e.action && e.action.li !== undefined && e.action.ld === undefined && c) {
          var f = n.p[i];
          var d = n.action.lm;
          var p = e.p[i];
          if (p > f) {
            e.p[i]--;
          }
          if (p > d) {
            e.p[i]++;
          }
        } else {
          var f = n.p[i];
          var d = n.action.lm;
          var p = e.p[i];
          if (p === f) {
            e.p[i] = d;
          } else {
            if (p > f) {
              e.p[i]--;
            }
            if (p > d) {
              e.p[i]++;
            } else if (p === d && f > d) {
              e.p[i]++;
            }
          }
        }
      } else if (n.action && n.action.oi !== undefined && n.action.od !== undefined) {
        if (e.p[i] === n.p[i]) {
          if (!e.action || e.action.oi === undefined || !c || r === "right") {
            return t;
          }
          e.action.od = n.action.oi;
        }
      } else if (n.action && n.action.oi !== undefined) {
        if (e.action && e.action.oi !== undefined && e.p[i] === n.p[i]) {
          if (r !== "left") {
            return t;
          }
          R.append(t, {
            p: e.p,
            action: {
              od: n.action.oi
            }
          });
        }
      } else if (n.action && n.action.od !== undefined && e.p[i] == n.p[i]) {
        if (!c || !e.action || e.action.oi === undefined) {
          return t;
        }
        delete e.action.od;
      }
    }
    R.append(t, e);
    return t;
  };
  c(R, R.transformComponent, R.checkValidOp, R.append);
  R.registerSubtype(l);
  var F = new (function () {
    function t() {
      this.name = "easysync";
      this.compose = changesetOperationsCore.composeChangesetDocs;
    }
    t.prototype.transform = function (t, e, n) {
      var r;
      var i = t[changesetOperationsCore.ZONE_CHANGESETS];
      var o = e[changesetOperationsCore.ZONE_CHANGESETS];
      var s = changesetOperationsCore.mergeChangesetMaps(i);
      var u = new changesetOperationsCore.AttribPool().fromJsonable(t.apool);
      var c = new changesetOperationsCore.AttribPool().fromJsonable(e.apool);
      var l = changesetOperationsCore.mapAttribs(s, u, c);
      var p = {};
      var h = changesetOperationsCore.unpackChangesets(l);
      for (var f in o) {
        if (o.hasOwnProperty(f)) {
          p[f] = changesetOperationsCore.followChangeset(o[f], h[f] || "", n !== a.LEFT, c);
        }
      }
      for (var f in i) {
        if (!o[f]) {
          p[f] = changesetOperationsCore.followChangeset("", h[f] || "", n !== a.LEFT, c);
        }
      }
      (r = {})[changesetOperationsCore.ZONE_CHANGESETS] = p;
      r.apool = c.toJsonable();
      return r;
    };
    t.prototype.invert = function (t, e, n) {
      var r;
      var i = {};
      var o = e.initialAttributedTexts;
      var s = e.apool;
      var a = o.attribs;
      var u = o.text;
      var c = new changesetOperationsCore.AttribPool().fromJsonable(s);
      var l = new changesetOperationsCore.AttribPool().fromJsonable(t.apool);
      var p = t[changesetOperationsCore.ZONE_CHANGESETS];
      for (var h in p) {
        (function (t) {
          if (p.hasOwnProperty(t)) {
            var e = a[t] || "|1+1";
            var r = u[t] || "\n";
            var o = r.split("\n");
            if (n && o[o.length - 1] === "") {
              o.pop();
            }
            var s = L(e, r);
            var h = changesetOperationsCore.mapAttribs(p[t], l, c);
            var f = changesetOperationsCore.parseChangeset(h);
            i[t] = changesetOperationsCore.composeChangesets(f[t], {
              get: function (t) {
                return o[t] + "\n";
              }
            }, s, c);
          }
        })(h);
      }
      var f = new changesetOperationsCore.AttribPool();
      var d = changesetOperationsCore.packChangesets(i);
      var v = changesetOperationsCore.mapAttribs(d, c, f);
      (r = {})[changesetOperationsCore.ZONE_CHANGESETS] = changesetOperationsCore.unpackChangesets(v);
      r.apool = f.toJsonable();
      return r;
    };
    t.prototype.apply = function (t, e) {
      var n = new changesetOperationsCore.AttribPool().fromJsonableNoCloning(e.apool);
      var r = new changesetOperationsCore.AttribPool().fromJsonableNoCloning(t.apool);
      var i = changesetOperationsCore.mapAttribs(changesetOperationsCore.mergeChangesetMaps(e.zone_changesets), n, r);
      var o = changesetOperationsCore.applyChangeset(i, t.initialAttributedTexts, r);
      var s = new changesetOperationsCore.AttribPool();
      for (var a in o.attribs) {
        if (o.attribs.hasOwnProperty(a)) {
          o.attribs[a] = changesetOperationsCore.mapAttribs(o.attribs[a], r, s);
        }
      }
      t.apool = s.toJsonable();
      t.initialAttributedTexts = o;
      return t;
    };
    return t;
  }())();
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  function U(t, e) {
    var n;
    var r = "data";
    (n = {})[r] = t;
    var i = n;
    var o = 0;
    while (o < e.length) {
      i = i[r];
      r = e[o];
      if (i === undefined) {
        throw Error("bad path");
      }
      o += 1;
    }
    return {
      elem: i,
      key: r
    };
  }
  function z(t) {
    if (t instanceof Array) {
      return t;
    }
    if (typeof t == "number") {
      return [t];
    }
    if (typeof t == "string") {
      return t.split(".");
    }
    throw Error("Invalid type of path: " + typeof t);
  }
  function H(t, e, n, r) {
    var i = Array.prototype.slice.call(e);
    var o = [];
    if (n.length > 1 && typeof i[i.length - 1] != "function") {
      i.push(function () {});
    }
    if (i.length < (r || n.length)) {
      i.unshift(o);
    } else {
      var s = z(i[0]);
      if (s) {
        i[0] = o.concat(s);
      }
    }
    return n.apply(t, i);
  }
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var Z = R.apply;
  var q = R.compose;
  var W = R.transform;
  var G = R.invert;
  R.registerSubtype(F);
  var Y = {
    isEasysyncOp: T,
    isTextOdoiOp: S,
    convertToEasysyncOp: M,
    transformAttribsToAlines: L
  };
  var K = function () {
    function t(t, e, n) {
      this.parent = null;
      this.children = null;
      this.id = "";
      this.key = "";
      this.snapshot = "";
      if (!e) {
        throw Error("Node value cannot be empty");
      }
      this.set([], e);
      this.id = uuidGeneratorUtil.generateUuid();
      this.parent = t;
      this.snapshot = deepCloneWrapper_1.deepClone(e);
      this.children = n;
    }
    t.registerSubtype = function (t) {
      R.registerSubtype(t);
    };
    t.transform = function (t, e, n = a.LEFT) {
      return W(t, e, n);
    };
    t.compose = function (t, e) {
      return q(t, e);
    };
    t.invert = function (t, e, n = true) {
      return G(t, e, n);
    };
    t.prototype.apply = function (t) {
      var e = Z(this.snapshot, t);
      this.set([], e);
    };
    t.prototype.get = function (t) {
      var e = this;
      if (t) {
        return H(this, arguments, function (t) {
          var n = U(e.snapshot, t);
          return n.elem[n.key];
        });
      } else {
        return this.snapshot;
      }
    };
    t.prototype.move = function (t, e) {
      var n = this;
      return H(this, arguments, function (t, e) {
        var r = U(n.snapshot, t);
        var i = r.elem;
        var o = r.key;
        var s = [];
        if (i.constructor === Array) {
          t[t.length - 1] = parseInt(t[t.length - 1], 10);
          s.push({
            p: t,
            action: {
              lm: e
            }
          });
          var a = i.splice(o, 1)[0];
          i.splice(e, 0, a);
        } else {
          throw Error("bad path");
        }
        return s;
      });
    };
    t.prototype.set = function (t, e) {
      var n = this;
      return H(this, arguments, function (t, e) {
        var r = U(n.snapshot, t);
        var i = r.elem;
        var o = r.key;
        var s = [];
        if (i.constructor === Array) {
          t[t.length - 1] = parseInt(t[t.length - 1], 10);
          s.push({
            p: t,
            action: {
              li: e
            }
          });
          if (i[o] !== undefined) {
            s.unshift({
              p: t,
              action: {
                ld: i[o]
              }
            });
          }
          i[o] = e;
        } else if (typeof i == "object") {
          s.push({
            p: t,
            action: {
              oi: e
            }
          });
          if (i[o] !== undefined) {
            s.unshift({
              p: t,
              action: {
                od: i[o]
              }
            });
          }
          i[o] = e;
        } else {
          throw Error("bad path");
        }
        if (t.length === 0) {
          n.snapshot = e;
        }
        return s;
      });
    };
    t.prototype.getSnapshot = function () {
      return this.snapshot;
    };
    t.prototype.remove = function (t, e) {
      var n = this;
      return H(this, arguments, function (t, e) {
        if (e == null || typeof e == "function") {
          var r = U(n.snapshot, t);
          var i = r.elem;
          var o = r.key;
          var s = [];
          if (i[o] === undefined) {
            throw Error("no element at that path");
          }
          if (i.constructor === Array) {
            t[t.length - 1] = parseInt(t[t.length - 1], 10);
            s.push({
              p: t,
              action: {
                ld: i[o]
              }
            });
            i.splice(o, 1);
          } else if (typeof i == "object") {
            s.push({
              p: t,
              action: {
                od: i[o]
              }
            });
            delete i[o];
          } else {
            throw Error("bad path");
          }
          return s;
        }
        var a = parseInt(t.pop(), 10);
        var r = U(n.snapshot, t);
        var i = r.elem;
        var o = r.key;
        if (typeof i[o] == "string") {
          var u = {
            p: t.concat(a),
            action: {
              sd: r.elem[r.key].slice(a, a + e)
            }
          };
          i[o] = i[o].substring(0, a) + i[o].substring(a + e);
          return [u];
        }
        if (i[o].constructor === Array) {
          var c = [];
          var l = a;
          for (; l < a + e; l++) {
            c.push({
              p: t.concat(a),
              action: {
                ld: i[o][l]
              }
            });
            i[o].splice(l, 1);
          }
          return c;
        }
        throw Error("element at path does not support range");
      });
    };
    t.prototype.replaceString = function (t, e, n, r) {
      var i = this;
      return H(this, arguments, function (t, e, n, r) {
        var o = U(i.snapshot, t);
        var s = o.key;
        var a = o.elem;
        var u = a[s];
        var c = [];
        if (typeof u == "string") {
          if (e < 0 || e > u.length || n < 0 || e + n > u.length) {
            throw Error("bad path: start or end overflow");
          }
          var l = u.substring(e, e + n);
          if (l) {
            c.push({
              p: t.concat(e),
              action: {
                sd: l
              }
            });
          }
          if (r && typeof r == "string") {
            c.push({
              p: t.concat(e),
              action: {
                si: r
              }
            });
          } else {
            r = "";
          }
          a[s] = u.substring(0, e) + r + u.substring(e + n);
          return c;
        }
        throw Error("bad path: element the path ref is not string");
      });
    };
    return t;
  }();
  var $ = R.apply;
  var X = R.compose;
  var J = R.transform;
  var Q = R.invert;
  R.registerSubtype;
  var tt = K;
  require.d(exports, {
    transform: function () {
      return J;
    },
    TransformDirection: function () {
      return a;
    },
    DocNode: function () {
      return tt;
    },
    easysyncUtils: function () {
      return Y;
    },
    compose: function () {
      return X;
    },
    apply: function () {
      return $;
    },
    invert: function () {
      return Q;
    }
  });
}