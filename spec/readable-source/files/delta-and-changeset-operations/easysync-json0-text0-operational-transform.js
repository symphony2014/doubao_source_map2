// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ji' to 'EasysyncJson0Text0OT'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46252.e1de9c24.js
         * chunkId: 46252
         * moduleId: 176294
         */
module.exports = function (module, exports, require) {
  var r;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  function l(t, e, n, r) {
    function i(t, n, r, i) {
      e(r, t, n, "left");
      e(i, n, t, "right");
    }
    var o = t.transformX = function (t, e) {
      n(t);
      n(e);
      var s = [];
      var a = 0;
      for (; a < e.length; a++) {
        var c = e[a];
        var u = [];
        var l = 0;
        while (l < t.length) {
          var h = [];
          i(t[l], c, u, h);
          l++;
          if (h.length === 1) {
            c = h[0];
          } else if (h.length === 0) {
            for (var p = l; p < t.length; p++) {
              r(u, t[p]);
            }
            c = null;
            break;
          } else {
            var f = o(t.slice(l), h);
            var d = 0;
            for (; d < f[0].length; d++) {
              r(u, f[0][d]);
            }
            for (var b = 0; b < f[1].length; b++) {
              r(s, f[1][b]);
            }
            c = null;
            break;
          }
        }
        if (c != null) {
          r(s, c);
        }
        t = u;
      }
      return [t, s];
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
        return o(t, n)[0];
      } else {
        return o(n, t)[1];
      }
    };
  }
  var h = {
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
  function f(t) {
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
  function d(t) {
    for (var e = 0; e < t.length; e++) {
      f(t[e]);
    }
  }
  h.apply = function (t, e) {
    var n;
    d(e);
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
  var b = h._append = function (t, e) {
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
  h.compose = function (t, e) {
    d(t);
    d(e);
    var n = t.slice();
    var r = 0;
    for (; r < e.length; r++) {
      b(n, e[r]);
    }
    return n;
  };
  h.normalize = function (t) {
    var e = [];
    if (t.i != null || t.p != null) {
      t = [t];
    }
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      if (r.p == null) {
        r.p = 0;
      }
      b(e, r);
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
    }
    if (t <= e.p) {
      return t;
    } else if (t <= e.p + e.d.length) {
      return e.p;
    } else {
      return t - e.d.length;
    }
  }
  h.transformCursor = function (t, e, n) {
    var r = n === "right";
    var i = 0;
    for (; i < e.length; i++) {
      t = v(t, e[i], r);
    }
    return t;
  };
  var g = h._tc = function (t, e, n, r) {
    f(e);
    f(n);
    if (e.i != null) {
      b(t, {
        i: e.i,
        p: v(e.p, n, r === "right")
      });
    } else if (n.i != null) {
      var i = e.d;
      if (e.p < n.p) {
        b(t, {
          d: i.slice(0, n.p - e.p),
          p: e.p
        });
        i = i.slice(n.p - e.p);
      }
      if (i !== "") {
        b(t, {
          d: i,
          p: e.p + n.i.length
        });
      }
    } else if (e.p >= n.p + n.d.length) {
      b(t, {
        d: e.d,
        p: e.p - n.d.length
      });
    } else if (e.p + e.d.length <= n.p) {
      b(t, e);
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
        b(t, o);
      }
    }
    return t;
  };
  h.invert = function (t) {
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
  l(h, g, d, b);
  let {
    transform: y
  } = h;
  function m(t) {
    return Object.prototype.toString.call(t) == "[object Array]";
  }
  function x(t) {
    return JSON.parse(JSON.stringify(t));
  }
  var T = {
    name: "json0",
    uri: "http://sharejs.org/types/JSONv0"
  };
  var w = {};
  function S(t) {
    w[t.name] = t;
  }
  T.registerSubtype = S;
  T.create = function (t) {
    if (t === undefined) {
      return null;
    } else {
      return x(t);
    }
  };
  let k = (t, e) => {
    let n = t;
    for (let t = 0; t < e.length; t++) {
      if ((n = n[e[t]]) === undefined) {
        throw Error("bad path");
      }
    }
    return n;
  };
  function A(t) {
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
  function N(t) {
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
  function O(t, e) {
    T.checkValidOp(e);
    e = x(e);
    var n = {
      data: t
    };
    var r = 0;
    for (; r < e.length; r++) {
      var i = e[r];
      if (i.action && (i.action.si != null || i.action.sd != null)) {
        A(i);
      }
      var o = null;
      var s = n;
      var a = "data";
      var c = 0;
      for (; c < i.p.length; c++) {
        var l = i.p[c];
        o = s;
        s = s[a];
        a = l;
        if (o == null) {
          throw Error("Path invalid");
        }
      }
      if (i.subType && i.subType.t && i.subType.o !== undefined && w[i.subType.t]) {
        s[a] = w[i.subType.t].apply(s[a], i.subType.o);
      } else if (i.action && i.action.na !== undefined) {
        if (typeof s[a] != "number") {
          throw Error("Referenced element not a number");
        }
        s[a] += i.action.na;
      } else if (i.action && i.action.li !== undefined && i.action.ld !== undefined) {
        T.checkList(s);
        if (!deepEqualUtil_1.deepEqual(s[a], i.action.ld)) {
          throw Error("element does not match c.ld");
        }
        s[a] = i.action.li;
      } else if (i.action && i.action.li !== undefined) {
        T.checkList(s);
        s.splice(a, 0, i.action.li);
      } else if (i.action && i.action.ld !== undefined) {
        T.checkList(s);
        if (!deepEqualUtil_1.deepEqual(s[a], i.action.ld)) {
          throw Error("element does not match c.ld");
        }
        s.splice(a, 1);
      } else if (i.action && i.action.lm !== undefined) {
        T.checkList(s);
        if (i.action.lm != a) {
          var h = s[a];
          s.splice(a, 1);
          s.splice(i.action.lm, 0, h);
        }
      } else if (i.action && i.action.oi !== undefined) {
        T.checkObj(s);
        s[a] = i.action.oi;
      } else if (i.action && i.action.od !== undefined) {
        T.checkObj(s);
        delete s[a];
      } else {
        throw Error("invalid / missing instruction in op");
      }
    }
    return n.data;
  }
  T.invertComponent = function (t, e) {
    var n = {
      p: t.p,
      action: {}
    };
    if (t.subType && t.subType.t && w[t.subType.t]) {
      n.subType = n.subType || {};
      n.subType.t = t.subType.t;
      if (e) {
        e[t.p];
      }
      n.subType.o = w[t.subType.t].invert(t.subType.o, k(e, t.p));
    }
    if (t.action && t.action.si !== undefined) {
      n.action.sd = t.action.si;
    }
    if (t.action && t.action.sd !== undefined) {
      n.action.si = t.action.sd;
    }
    if (t.action && t.action.oi !== undefined) {
      n.action.od = t.action.oi;
    }
    if (t.action && t.action.od !== undefined) {
      n.action.oi = t.action.od;
    }
    if (t.action && t.action.li !== undefined) {
      n.action.ld = t.action.li;
    }
    if (t.action && t.action.ld !== undefined) {
      n.action.li = t.action.ld;
    }
    if (t.action && t.action.na !== undefined) {
      n.action.na = -t.action.na;
    }
    if (t.action && t.action.lm !== undefined) {
      n.action.lm = t.p[t.p.length - 1];
      n.p = t.p.slice(0, t.p.length - 1).concat([t.action.lm]);
    }
    return n;
  };
  T.invert = function (t, e) {
    var n = t.slice().reverse();
    var r = [];
    var i = 0;
    for (; i < n.length; i++) {
      r.push(T.invertComponent(n[i], e));
    }
    return r;
  };
  T.checkValidOp = function (t) {
    if (!m(t)) {
      throw Error("op is not array");
    }
    for (var e = 0; e < t.length; e++) {
      if (!m(t[e].p)) {
        throw Error("Missing path");
      }
    }
  };
  T.checkList = function (t) {
    if (!m(t)) {
      throw Error("Referenced element not a list");
    }
  };
  T.checkObj = function (t) {
    if (!t || t.constructor !== Object) {
      throw Error("Referenced element not an object (it was " + JSON.stringify(t) + ")");
    }
  };
  T.apply = O;
  T.shatter = function (t) {
    var e = [];
    var n = 0;
    for (; n < t.length; n++) {
      e.push([t[n]]);
    }
    return e;
  };
  T.incrementalApply = function (t, e, n) {
    for (var r = 0; r < e.length; r++) {
      var i = [e[r]];
      t = T.apply(t, i);
      n(i, t);
    }
    return t;
  };
  var L = T.pathMatches = function (t, e, n) {
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
  T.append = function (t, e) {
    e = x(e);
    if (t.length === 0) {
      t.push(e);
      return;
    }
    var n = t[t.length - 1];
    if (e.action && n.action && (e.action.si != null || e.action.sd != null) && (n.action.si != null || n.action.sd != null)) {
      A(e);
      A(n);
    }
    if (L(e.p, n.p)) {
      if (e.subType && e.subType.t && n.subType && n.subType.t && e.subType.t === n.subType.t && w[e.subType.t]) {
        n.subType.o = w[e.subType.t].compose(n.subType.o, e.subType.o);
        if (e.action && (e.action.si != null || e.action.sd != null)) {
          var r = e.p;
          var i = 0;
          for (; i < n.subType.o.length - 1; i++) {
            e.subType.o = [n.subType.o.pop()];
            e.p = r.slice();
            N(e);
            t.push(e);
          }
          N(n);
        }
      } else if (n.action && n.action.na != null && e.action.na != null) {
        t[t.length - 1] = {
          p: n.p,
          action: {
            na: n.action.na + e.action.na
          }
        };
      } else if (n.action && e.action && n.action.li !== undefined && e.action.li === undefined && e.action.ld === n.action.li) {
        if (n.action.ld !== undefined) {
          delete n.action.li;
        } else {
          t.pop();
        }
      } else if (n.action && e.action && n.action.od !== undefined && n.action.oi === undefined && e.action.oi !== undefined && e.action.od === undefined) {
        n.action.oi = e.action.oi;
      } else if (n.action && e.action && n.action.oi !== undefined && e.action.od !== undefined) {
        if (e.action && e.action.oi !== undefined) {
          n.action.oi = e.action.oi;
        } else if (n.action && n.action.od !== undefined) {
          delete n.action.oi;
        } else {
          t.pop();
        }
      } else if (!e.action || e.action.lm === undefined || e.p[e.p.length - 1] !== e.action.lm) {
        t.push(e);
      }
    } else {
      if (e.action && n.action && (e.action.si != null || e.action.sd != null) && (n.action.si != null || n.action.sd != null)) {
        N(e);
        N(n);
      }
      t.push(e);
    }
  };
  T.compose = function (t, e) {
    T.checkValidOp(t);
    T.checkValidOp(e);
    var n = x(t);
    var r = 0;
    for (; r < e.length; r++) {
      T.append(n, e[r]);
    }
    return n;
  };
  T.normalize = function (t) {
    var e = [];
    t = m(t) ? t : [t];
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      if (r.p == null) {
        r.p = [];
      }
      T.append(e, r);
    }
    return e;
  };
  T.commonLengthForOps = function (t, e) {
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
  T.canOpAffectPath = function (t, e) {
    return T.commonLengthForOps({
      p: e
    }, t) != null;
  };
  T.transformComponent = function (t, e, n, r) {
    e = x(e);
    var i = T.commonLengthForOps(n, e);
    var o = T.commonLengthForOps(e, n);
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
        var c = x(n);
        c.p = c.p.slice(s);
        e.action.ld = T.apply(x(e.action.ld), [c]);
      } else if (e.action && e.action.od !== undefined) {
        var c = x(n);
        c.p = c.p.slice(s);
        e.action.od = T.apply(x(e.action.od), [c]);
      }
    }
    if (i != null) {
      var u = s == a;
      var c = n;
      if (e.action && n.action && (e.action.si != null || e.action.sd != null) && (n.action.si != null || n.action.sd != null)) {
        A(e);
        A(c = x(n));
      }
      if (c.subType && c.subType.t && w[c.subType.t]) {
        if (e.subType && e.subType.t && e.subType.t === c.subType.t) {
          var l = w[e.subType.t].transform(e.subType.o, c.subType.o, r);
          if (e.action && (e.action.si != null || e.action.sd != null)) {
            var h = e.p;
            var p = 0;
            for (; p < l.length; p++) {
              e.subType = e.subType || {};
              e.subType.o = [l[p]];
              e.p = h.slice();
              N(e);
              T.append(t, e);
            }
          } else if (!m(l) || l.length > 0) {
            e.subType = e.subType || {};
            e.subType.o = l;
            T.append(t, e);
          }
          return t;
        }
      } else if (n.action && n.action.na !== undefined) ;else if (n.action && n.action.li !== undefined && n.action.ld !== undefined) {
        if (n.p[i] === e.p[i]) {
          if (!u) {
            return t;
          }
          if (e.action && e.action.ld !== undefined) {
            if (!e.action || e.action.li === undefined || r !== "left") {
              return t;
            }
            e.action.ld = x(n.action.li);
          }
        }
      } else if (n.action && n.action.li !== undefined) {
        if (e.action && e.action.li !== undefined && e.action.ld === undefined && u && e.p[i] === n.p[i]) {
          if (r === "right") {
            e.p[i]++;
          }
        } else if (n.p[i] <= e.p[i]) {
          e.p[i]++;
        }
        if (e.action && e.action.lm !== undefined && u && n.p[i] <= e.action.lm) {
          e.action.lm++;
        }
      } else if (n.action && n.action.ld !== undefined) {
        if (e.action && e.action.lm !== undefined && u) {
          if (n.p[i] === e.p[i]) {
            return t;
          }
          var h = n.p[i];
          var f = e.p[i];
          var d = e.action.lm;
          if (h < d || h === d && f < d) {
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
          var b = n.p[i];
          var v = n.action.lm;
          if (b !== v) {
            if (f === b) {
              if (r !== "left") {
                return t;
              }
              e.p[i] = v;
              if (f === d) {
                e.action.lm = v;
              }
            } else {
              if (f > b) {
                e.p[i]--;
              }
              if (f > v) {
                e.p[i]++;
              } else if (f === v && b > v) {
                e.p[i]++;
                if (f === d) {
                  e.action.lm++;
                }
              }
              if (d > b) {
                e.action.lm--;
              } else if (d === b && d > f) {
                e.action.lm--;
              }
              if (d > v) {
                e.action.lm++;
              } else if (d === v) {
                if (v > b && d > f || v < b && d < f) {
                  if (r === "right") {
                    e.action.lm++;
                  }
                } else if (d > f) {
                  e.action.lm++;
                } else if (d === b) {
                  e.action.lm--;
                }
              }
            }
          }
        } else if (e.action && e.action.li !== undefined && e.action.ld === undefined && u) {
          var f = n.p[i];
          var d = n.action.lm;
          if ((h = e.p[i]) > f) {
            e.p[i]--;
          }
          if (h > d) {
            e.p[i]++;
          }
        } else {
          var f = n.p[i];
          var d = n.action.lm;
          if ((h = e.p[i]) === f) {
            e.p[i] = d;
          } else {
            if (h > f) {
              e.p[i]--;
            }
            if (h > d) {
              e.p[i]++;
            } else if (h === d && f > d) {
              e.p[i]++;
            }
          }
        }
      } else if (n.action && n.action.oi !== undefined && n.action.od !== undefined) {
        if (e.p[i] === n.p[i]) {
          if (!e.action || e.action.oi === undefined || !u) {
            return t;
          }
          if (r === "right") {
            return t;
          }
          e.action.od = n.action.oi;
        }
      } else if (n.action && n.action.oi !== undefined) {
        if (e.action && e.action.oi !== undefined && e.p[i] === n.p[i]) {
          if (r !== "left") {
            return t;
          }
          T.append(t, {
            p: e.p,
            action: {
              od: n.action.oi
            }
          });
        }
      } else if (n.action && n.action.od !== undefined && e.p[i] == n.p[i]) {
        if (!u || !e.action || e.action.oi === undefined) {
          return t;
        }
        delete e.action.od;
      }
    }
    T.append(t, e);
    return t;
  };
  l(T, T.transformComponent, T.checkValidOp, T.append);
  let {
    transform: C
  } = T;
  T.registerSubtype(h);
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  (function () {
    function t(t) {
      this.curSpliceStart = 0;
      this.curSpliceNumDelete = 0;
      this.curSpliceNewLines = [];
      this.inSplice = false;
      this.curLine = 0;
      this.curCol = 0;
      this.lines = t;
    }
    t.prototype.lines_toSource = function () {
      return this.lines.toSource();
    };
    t.prototype.enterSplice = function () {
      this.curSpliceStart = this.curLine;
      this.curSpliceNumDelete = 0;
      this.curSpliceNewLines = [];
      if (this.curCol > 0) {
        this.putCurLineInSplice();
      }
      this.inSplice = true;
    };
    t.prototype.leaveSplice = function () {
      var t = 0;
      var e = this.curSpliceStart + this.curSpliceNumDelete;
      var n = this.curSpliceNewLines.length;
      if (e > this.curSpliceStart || n > 0) {
        this.performSplice(this.curSpliceStart + t, e - this.curSpliceStart, this.curSpliceNewLines.slice(0, n));
        t += n - (e - this.curSpliceStart);
      }
      this.curSpliceStart = 0;
      this.curSpliceNumDelete = 0;
      this.curSpliceNewLines = [];
      this.inSplice = false;
    };
    t.prototype.performSplice = function (t, e, n) {
      this.lines.splice([t, e].concat(n));
    };
    t.prototype.isCurLineInSplice = function () {
      return this.curLine - this.curSpliceStart < this.curSpliceNewLines.length;
    };
    t.prototype.debugPrint = function (t) {};
    t.prototype.putCurLineInSplice = function () {
      if (!this.isCurLineInSplice()) {
        this.curSpliceNewLines.push(this.lines.get(this.curSpliceStart + this.curSpliceNumDelete));
        this.curSpliceNumDelete++;
      }
      return this.curLine - this.curSpliceStart;
    };
    t.prototype.skipLines = function (t, e) {
      if (t) {
        if (e) {
          if (!this.inSplice) {
            this.enterSplice();
          }
          for (var n = 0; n < t; n++) {
            this.curCol = 0;
            this.putCurLineInSplice();
            this.curLine++;
          }
        } else {
          if (this.inSplice) {
            if (t > 1) {
              this.leaveSplice();
            } else {
              this.putCurLineInSplice();
            }
          }
          this.curLine += t;
          this.curCol = 0;
        }
      }
    };
    t.prototype.skip = function (t, e, n) {
      if (t) {
        if (e) {
          this.skipLines(e, n);
        } else {
          if (n && !this.inSplice) {
            this.enterSplice();
          }
          if (this.inSplice) {
            this.putCurLineInSplice();
          }
          this.curCol += t;
        }
      }
    };
    t.prototype.nextKLinesText = function (t) {
      var e = this.curSpliceStart + this.curSpliceNumDelete;
      if (this.lines.slice) {
        return this.lines.slice(e, e + t).join("");
      } else {
        return null;
      }
    };
    t.prototype.removeLines = function (t) {
      var e = "";
      if (t) {
        if (!this.inSplice) {
          this.enterSplice();
        }
        if (this.isCurLineInSplice()) {
          if (this.curCol === 0) {
            e = this.curSpliceNewLines[this.curSpliceNewLines.length - 1];
            this.curSpliceNewLines.length--;
            e += this.nextKLinesText(t - 1);
            this.curSpliceNumDelete += t - 1;
          } else {
            e = this.nextKLinesText(t - 1);
            this.curSpliceNumDelete += t - 1;
            var n = this.curSpliceNewLines.length - 1;
            e = this.curSpliceNewLines[n].substring(this.curCol) + e;
            this.curSpliceNewLines[n] = this.curSpliceNewLines[n].substring(0, this.curCol) + this.lines.get(this.curSpliceStart + this.curSpliceNumDelete);
            this.curSpliceNumDelete += 1;
          }
        } else {
          e = this.nextKLinesText(t);
          this.curSpliceNumDelete += t;
        }
      }
      return e;
    };
    t.prototype.remove = function (t, e) {
      var n = "";
      if (t) {
        if (e) {
          return this.removeLines(e);
        }
        if (!this.inSplice) {
          this.enterSplice();
        }
        var r = this.putCurLineInSplice();
        n = this.curSpliceNewLines[r].substring(this.curCol, this.curCol + t);
        this.curSpliceNewLines[r] = this.curSpliceNewLines[r].substring(0, this.curCol) + this.curSpliceNewLines[r].substring(this.curCol + t);
      }
      return n;
    };
    t.prototype.insert = function (t, e) {
      if (t) {
        if (!this.inSplice) {
          this.enterSplice();
        }
        if (e) {
          var n = this.splitTextLines(t);
          if (this.isCurLineInSplice()) {
            var r = this.curSpliceNewLines.length - 1;
            var i = this.curSpliceNewLines[r];
            var o = this.curCol;
            this.curSpliceNewLines[r] = i.substring(0, o) + n[0];
            this.curLine++;
            n.splice(0, 1);
            Array.prototype.push.apply(this.curSpliceNewLines, n);
            this.curLine += n.length;
            this.curSpliceNewLines.push(i.substring(o));
            this.curCol = 0;
          } else {
            Array.prototype.push.apply(this.curSpliceNewLines, n);
            this.curLine += n.length;
          }
        } else {
          var s = this.putCurLineInSplice();
          this.curSpliceNewLines[s] = this.curSpliceNewLines[s].substring(0, this.curCol) + t + this.curSpliceNewLines[s].substring(this.curCol);
          this.curCol += t.length;
        }
      }
    };
    t.prototype.splitTextLines = function (t) {
      return t.match(/[^\n]*(?:\n|[^\n]$)/g);
    };
    t.prototype.hasMore = function () {
      var t = this.lines.length();
      if (this.inSplice) {
        t += this.curSpliceNewLines.length - this.curSpliceNumDelete;
      }
      return this.curLine < t;
    };
    t.prototype.close = function () {
      if (this.inSplice) {
        this.leaveSplice();
      }
    };
  })();
  function j(t, e) {
    return (j = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }
  function E(t) {
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
  function I(t, e) {
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
  var _ = function (t) {
    function e(e, n = false) {
      var r = t.call(this, e) || this;
      r.silence = n;
      return r;
    }
    (function (t, e) {
      function n() {
        this.constructor = t;
      }
      j(t, e);
      t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
    })(e, t);
    return e;
  }(Error);
  function Z(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = I(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new _("Failed assertion: " + e, n);
    }
  }
  var P = function () {
    function t() {
      var t = this;
      this.toJsonable = function () {
        var e = {};
        for (var n in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(n)) {
            var r = t.numToAttrib[n];
            e[n] = [r[0], r[1]];
          }
        }
        return {
          numToAttrib: e,
          nextNum: t.nextNum,
          attribToNum: t.attribToNum
        };
      };
      this.fromJsonable = function (e) {
        t.numToAttrib = {};
        t.nextNum = e.nextNum;
        t.attribToNum = {};
        for (var n in e.numToAttrib) {
          if (e.numToAttrib.hasOwnProperty(n)) {
            var r = e.numToAttrib[n];
            t.attribToNum[String(r)] = Number(n);
            t.numToAttrib[n] = [r[0], r[1]];
          }
        }
        try {
          t.checkConsistent();
        } catch (e) {
          t.handleError(e);
        }
        t.dirty = true;
        return t;
      };
      this.checkConsistent = function () {
        for (var e = 0; e < t.nextNum; e++) {
          Z(e in t.numToAttrib, "AttribPool: " + e + " is not in this.numToAttrib");
        }
        var n = {};
        for (var r in t.numToAttrib) {
          if (t.numToAttrib.hasOwnProperty(r)) {
            Z(Number(r) >= 0 && Number(r) < t.nextNum, "AttribPool: " + r + " is not in range [0," + t.nextNum + "]");
            var i = t.numToAttrib[r];
            Z(Object.prototype.toString.call(i) === "[object Array]", "AttribPool: attrib should be an array");
            Z(i.length === 2, "AttribPool: attrib length should be 2");
            Z(typeof i[0] == "string", "AttribPool: key should be string");
            Z(typeof i[1] == "string", "AttribPool: value should be string");
            Z(!(String(i) in n), "AttribPool: attrib was already seen");
            n[String(i)] = true;
            Z(t.attribToNum[String(i)] === Number(r), "AttribPool: attribToNum does not match");
          }
        }
        for (var o in t.attribToNum) {
          if (t.attribToNum.hasOwnProperty(o)) {
            Z(o in n, "AttribPool: attr was not seen");
          }
        }
      };
      this.numToAttrib = {};
      this.attribToNum = {};
      this.nextNum = 0;
      this.dirty = false;
    }
    t.prototype.putAttrib = function (t, e) {
      var n = [String(t[0] || ""), String(t[1] || "")];
      var r = String(n);
      if (r in this.attribToNum) {
        return this.attribToNum[r];
      }
      if (e) {
        return -1;
      }
      var i = this.nextNum++;
      this.attribToNum[r] = i;
      this.numToAttrib[i] = n;
      this.dirty = true;
      return i;
    };
    t.prototype.getAttrib = function (t) {
      var e = this.numToAttrib[t];
      if (e) {
        return [e[0], e[1]];
      } else {
        return e;
      }
    };
    t.prototype.updateAttrib = function (t, e) {
      var n = this.getAttrib(t);
      if (n) {
        var r = String(n);
        var i = String(e);
        if (this.attribToNum[r] != null) {
          delete this.attribToNum[r];
        }
        this.attribToNum[i] = t;
        this.numToAttrib[t] = e;
      }
    };
    t.prototype.getAttribKey = function (t) {
      var e = this.numToAttrib[t];
      if (e) {
        return e[0];
      } else {
        return "";
      }
    };
    t.prototype.getAttribValue = function (t) {
      var e = this.numToAttrib[t];
      if (e) {
        return e[1];
      } else {
        return "";
      }
    };
    t.prototype.getAttribNum = function (t) {
      var e = t;
      if (typeof e != "string") {
        e = String(e);
      }
      return this.attribToNum[e];
    };
    t.prototype.eachAttrib = function (t) {
      for (var e in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(e)) {
          var n = this.numToAttrib[e];
          t(n[0], n[1]);
        }
      }
    };
    t.prototype.toJsonableNoCloning = function () {
      return {
        numToAttrib: this.numToAttrib,
        nextNum: this.nextNum
      };
    };
    t.prototype.fromJsonableNoCloning = function (t) {
      this.numToAttrib = t.numToAttrib;
      this.nextNum = t.nextNum;
      this.attribToNum = {};
      for (var e in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(e)) {
          this.attribToNum[String(this.numToAttrib[e])] = Number(e);
        }
      }
      try {
        this.checkConsistent();
      } catch (t) {
        this.handleError(t);
      }
      return this;
    };
    t.prototype.handleError = function (t) {
      throw t;
    };
    t.prototype.copy = function () {
      var e = new t();
      for (var n in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(n)) {
          var r = this.numToAttrib[n];
          e.numToAttrib[n] = [r[0], r[1]];
        }
      }
      for (var i in this.attribToNum) {
        if (this.attribToNum.hasOwnProperty(i)) {
          e.attribToNum[i] = this.attribToNum[i];
        }
      }
      e.nextNum = this.nextNum;
      return e;
    };
    return t;
  }();
  function B(t) {
    return {
      opcode: t || "",
      chars: 0,
      lines: 0,
      attribs: "",
      getAttribute: function (t, e) {
        return function (t, e, n) {
          var r = function (t) {
            var e = [];
            var n = false;
            var r = false;
            var i = 0;
            var o = 0;
            for (; o < t.length; o++) {
              var s = t.charCodeAt(o);
              if (n || r) {
                if (s >= 48 && s <= 57) {
                  i *= 36;
                  i += s - 48;
                } else if (s >= 97 && s <= 122) {
                  i *= 36;
                  i += s - 97 + 10;
                } else if (s >= 65 && s <= 90) {
                  i *= 36;
                  i += s - 65 + 10;
                } else {
                  if (!n) {
                    o += i;
                    i = 0;
                    r = false;
                    continue;
                  }
                  e.push(i);
                  i = 0;
                  n = false;
                }
              }
              switch (s) {
                case 42:
                  n = true;
                  break;
                case 36:
                  return e;
                case 35:
                  r = true;
              }
            }
            if (n) {
              e.push(i);
            }
            return e;
          }(t);
          var i = r.length - 1;
          for (; i >= 0; i--) {
            var o = r[i];
            if (n.getAttribKey(o) === e) {
              return n.getAttribValue(o);
            }
          }
          return "";
        }(this.attribs, t, e);
      }
    };
  }
  function R(t) {
    t.opcode = "";
    t.chars = 0;
    t.lines = 0;
    t.attribs = "";
  }
  function D(t, e) {
    e.opcode = t.opcode;
    e.chars = t.chars;
    e.lines = t.lines;
    e.attribs = t.attribs;
  }
  var V = function () {
    function t(t, e = 0) {
      this.opStr = t;
      this.index = e;
      this.op = B();
    }
    t.prototype.hasNext = function () {
      return this.index < this.opStr.length;
    };
    t.prototype.next = function (t) {
      var e = t || this.op;
      if (this.index !== this.opStr.length) {
        e.lines = 0;
        var n = undefined;
        var r = this.index;
        while (this.index < this.opStr.length) {
          var i = this.opStr.charCodeAt(this.index);
          if (i === 124) {
            n = this.index;
            this.index++;
            while (this.index < this.opStr.length) {
              var o = this.opStr.charCodeAt(this.index);
              if (o === 43 || o === 45 || o === 61) {
                e.opcode = this.opStr.charAt(this.index);
                break;
              }
              if (o >= 48 && o <= 57) {
                e.lines *= 36;
                e.lines += o - 48;
              } else if (o >= 97 && o <= 122) {
                e.lines *= 36;
                e.lines += o - 97 + 10;
              }
              this.index++;
            }
            break;
          }
          if (i === 43 || i === 45 || i === 61) {
            n = this.index;
            e.opcode = this.opStr.charAt(this.index);
            break;
          }
          this.index++;
        }
        e.attribs = this.opStr.substring(r, n);
        e.chars = 0;
        this.index++;
        while (this.index < this.opStr.length) {
          var o = this.opStr.charCodeAt(this.index);
          if (o >= 48 && o <= 57) {
            e.chars *= 36;
            e.chars += o - 48;
          } else {
            if (!(o >= 97) || !(o <= 122)) {
              break;
            }
            e.chars *= 36;
            e.chars += o - 97 + 10;
          }
          this.index++;
        }
        return e;
      }
      R(e);
      return e;
    };
    return t;
  }();
  function J(t, e, n = false, r = {}) {
    if (!t) {
      if (typeof r == "object" && Object.keys(r).length) {
        Object.entries(r).map(function (t) {
          var e = I(t, 2);
          return e[0] + ": " + e[1];
        }).join(", ");
      }
      throw new _("Failed assertion: " + e, n);
    }
  }
  function M(t, e) {
    var n;
    var r;
    if (e === undefined) {
      e = 0;
    }
    n = t || "";
    if ((r = e) === undefined) {
      r = 0;
    }
    return new V(n || "", r);
  }
  function F(t) {
    return t.toString(36).toLowerCase();
  }
  function H(t) {
    return parseInt(t, 36);
  }
  var W = /\*([0-9a-z]+)/g;
  function $(t, e) {
    var n = t.indexOf("$");
    if (n < 0) {
      n = t.length;
    }
    var r = t.substring(0, n).match(W) || [];
    var i = 0;
    for (; i < r.length; i++) {
      e(H(r[i].substring(1)));
    }
  }
  function K(t, e, n, r) {
    if (!t && n) {
      return e;
    }
    if (!e) {
      return t;
    }
    var i;
    var o;
    var s = [];
    $(t, function (t) {
      s.push(r.getAttrib(t));
    });
    $(e, function (t) {
      var e = r.getAttrib(t);
      var i = false;
      var o = 0;
      for (; o < s.length; o++) {
        var a = s[o];
        if (a[0] === e[0]) {
          if (e[1] || n) {
            a[1] = e[1];
          } else {
            s.splice(o, 1);
          }
          i = true;
          break;
        }
      }
      if (!i && (e[1] || n)) {
        s.push(e);
      }
    });
    s.sort();
    var a = "";
    try {
      var c = E(s);
      var u = c.next();
      for (; !u.done; u = c.next()) {
        var l = u.value;
        a += "*" + F(r.putAttrib(l));
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (o = c.return)) {
          o.call(c);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a;
  }
  function U() {
    var t;
    t = [];
    var e = {
      append: function (e) {
        t.push(e.attribs);
        if (e.lines) {
          t.push("|", F(e.lines));
        }
        t.push(e.opcode);
        t.push(F(e.chars));
      },
      toString: function () {
        return t.join("");
      },
      clear: function () {
        t.length = 0;
      }
    };
    var n = B();
    var r = 0;
    function i(t) {
      if (n.opcode) {
        if (!t || n.opcode !== "=" || !!n.attribs) {
          e.append(n);
          if (r) {
            n.chars = r;
            n.lines = 0;
            e.append(n);
            r = 0;
          }
        }
        n.opcode = "";
      }
    }
    return {
      append: function (t) {
        if (t.chars > 0) {
          if (n.opcode === t.opcode && n.attribs === t.attribs) {
            if (t.lines > 0) {
              n.chars += r + t.chars;
              n.lines += t.lines;
              r = 0;
            } else if (n.lines === 0) {
              n.chars += t.chars;
            } else {
              r += t.chars;
            }
          } else {
            i();
            D(t, n);
          }
        }
      },
      toString: function () {
        i();
        return e.toString();
      },
      clear: function () {
        e.clear();
        R(n);
      },
      endDocument: function () {
        i(true);
      }
    };
  }
  function q(t, e, n) {
    if (e) {
      if (typeof e == "string") {
        return e;
      }
      if (n && e && e.length) {
        if (e.length > 1) {
          (e = e.slice()).sort();
        }
        var r = [];
        var i = 0;
        for (; i < e.length; i++) {
          var o = e[i];
          if (t === "=" || t === "+" && o[1]) {
            r.push("*" + F(n.putAttrib(o)));
          }
        }
        return r.join("");
      }
    }
    return "";
  }
  function G() {
    var t = [];
    function e() {
      return t.join("");
    }
    return {
      append: function (e) {
        t.push(String(e));
      },
      toString: e,
      toResult: e
    };
  }
  function Q() {
    var t = U();
    var e = U();
    var n = U();
    var r = G();
    var i = "";
    var o = 0;
    function s() {
      r.append(n.toString());
      n.clear();
    }
    function a() {
      r.append(t.toString());
      t.clear();
      r.append(e.toString());
      e.clear();
    }
    function c(r) {
      if (r.opcode && r.chars) {
        if (r.opcode === "-") {
          if (i === "=") {
            s();
          }
          t.append(r);
          o -= r.chars;
        } else if (r.opcode === "+") {
          if (i === "=") {
            s();
          }
          e.append(r);
          o += r.chars;
        } else if (r.opcode === "=") {
          if (i !== "=") {
            a();
          }
          n.append(r);
        }
        i = r.opcode;
      }
    }
    return {
      append: c,
      toString: function () {
        a();
        s();
        return r.toString();
      },
      clear: function () {
        t.clear();
        e.clear();
        n.clear();
        o = 0;
      },
      endDocument: function () {
        n.endDocument();
      },
      appendOpWithText: function (t, e, n, r) {
        var i = B(t);
        i.attribs = q(t, n, r);
        var o = e.lastIndexOf("\n");
        if (o < 0) {
          i.chars = e.length;
        } else {
          i.chars = o + 1;
          i.lines = e.match(/\n/g).length;
          c(i);
          i.chars = e.length - (o + 1);
        }
        i.lines = 0;
        c(i);
      },
      getLengthChange: function () {
        return o;
      }
    };
  }
  function X(t, e, n, r, i) {
    var o = M(t, e);
    var s = M(n, r);
    var a = Q();
    var c = B();
    var u = B();
    var l = B();
    while (c.opcode || o.hasNext() || u.opcode || s.hasNext()) {
      if (!c.opcode && o.hasNext()) {
        o.next(c);
      }
      if (!u.opcode && s.hasNext()) {
        s.next(u);
      }
      i(c, u, l);
      if (l.opcode) {
        a.append(l);
        l.opcode = "";
      }
    }
    a.endDocument();
    return a.toString();
  }
  function Y(t) {
    if (typeof t == "string") {
      return function (t) {
        var e = 0;
        var n = t.split("\n").length - 1;
        function r(t) {
          Z(t <= i(), "!(n <= remaining())", false, {
            n: t,
            remaining: i()
          });
        }
        function i() {
          return t.length - e;
        }
        return {
          take: function (i) {
            r(i);
            var o = t.substr(e, i);
            n -= o.split("\n").length - 1;
            e += i;
            return o;
          },
          skip: function (t) {
            r(t);
            e += t;
          },
          remaining: i,
          peek: function (n) {
            r(n);
            return t.substr(e, n);
          },
          newlines: function () {
            return n;
          }
        };
      }(t);
    } else {
      return function (t) {
        function e(t) {
          J(t <= r(), "!(n <= remaining())", false, {
            n: t,
            remaining: r()
          });
        }
        var n = 0;
        function r() {
          return t.length - n;
        }
        return {
          take: function (r) {
            e(r);
            var i = t.slice(n, n + r);
            n += r;
            return i;
          },
          skip: function (t) {
            e(t);
            n += t;
          },
          remaining: r,
          peek: function (r) {
            e(r);
            return t.slice(n, n + r);
          }
        };
      }(t);
    }
  }
  function tt(t, e, n, r) {
    if (!t && n) {
      return e;
    }
    if (!e) {
      return t;
    }
    var i;
    var o;
    var s = [];
    t.replace(/\*([0-9a-z]+)/g, function (t, e) {
      s.push(r.getAttrib(H(e)));
      return "";
    });
    e.replace(/\*([0-9a-z]+)/g, function (t, e) {
      var i = r.getAttrib(H(e));
      var o = false;
      var a = 0;
      for (; a < s.length; a++) {
        var c = s[a];
        if (c[0] === i[0]) {
          if (i[1] || n) {
            c[1] = i[1];
          } else {
            s.splice(a, 1);
          }
          o = true;
          break;
        }
      }
      if (!o && (i[1] || n)) {
        s.push(i);
      }
      return "";
    });
    s.sort();
    var a = G();
    try {
      var c = E(s);
      var u = c.next();
      for (; !u.done; u = c.next()) {
        var l = u.value;
        a.append("*");
        a.append(F(r.putAttrib(l)));
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (o = c.return)) {
          o.call(c);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a.toString();
  }
  function te(t) {
    Z(t, "itemType should be defined");
    if (t === "Z") {
      return G();
    } else {
      return function () {
        var t = [];
        function e() {
          return t;
        }
        return {
          append: function (e) {
            t = t.concat(e);
          },
          toList: e,
          toResult: e
        };
      }();
    }
  }
  function tn(t) {
    var e = {};
    var n = 0;
    while (n < t.length) {
      var r = /^(Z|ZR|ZC)([0-9a-z]*):([0-9a-z]+)([><])([0-9a-z]+)|/.exec(t.substring(n));
      if (!r || !r[0]) {
        throw new _("Changeset: Not a changeset: " + t + " at position " + n);
      }
      var i = r[1].charAt(r[1].length - 1);
      var o = r[2] === "" ? "0" : r[2];
      if (o in e) {
        for (var s in e) {
          if (e.hasOwnProperty(s) && e[s].itemType === "Z") {
            e[s].charBank = "obfuscated " + e[s].charBank.length;
          }
        }
        Z(false, "zoneIds should be unique", false, {
          zoneId: o,
          cssObj: JSON.stringify(e)
        });
      }
      if (o === "0") {
        Z(i === "Z", "itemType must be Z");
      }
      var a = H(r[3]);
      var c = a + (r[4] === ">" ? 1 : -1) * H(r[5]);
      var u = n + r[0].length;
      var l = t.indexOf("$", n);
      var h = t.indexOf("#", n);
      var p = h >= 0 && l >= 0 && h < l;
      var f = t.length;
      if (l >= 0) {
        f = l;
      }
      if (p) {
        f = h;
      }
      var d = l >= 0 ? l + 1 : t.length;
      var b = p ? d + H(t.substring(h + 1, l)) : t.length;
      e[o] = {
        itemType: i,
        oldLen: a,
        newLen: c,
        ops: t.substring(u, f),
        charBank: t.substring(d, b)
      };
      if (i !== "Z") {
        Z(e[o].ops.indexOf("|") === -1, "ops must has |");
        e[o].charBank = e[o].charBank === "" ? [] : e[o].charBank.split("|");
      }
      n = b;
    }
    return e;
  }
  function tr(t, e) {
    var n = tn(t);
    var r = {};
    for (var i in n) {
      if (n.hasOwnProperty(i)) {
        r[i] = e(i, n[i]);
      }
    }
    return r;
  }
  function ti(t) {
    var e = "";
    var n = Object.keys(t).sort();
    var r = 0;
    for (; r < n.length; r++) {
      var i = n[r];
      J(typeof i == "string", "pack: zoneId must be string");
      J(i !== "", "pack: zoneId cannot be empty string");
      if (r !== 0 && n[r] === n[r - 1]) {
        for (var o in t) {
          if (t.hasOwnProperty(o) && t[o].itemType === "Z") {
            t[o].charBank = "obfuscated " + t[o].charBank.length;
          }
        }
        J(false, "pack: zoneIds must be distinct zoneIds", false, {
          zoneIds: n,
          csMap: JSON.stringify(t)
        });
      }
      var s = t[i];
      (function (t, n, r, i, o, s, a) {
        J(t === "Z" || t === "R" || t === "C", "itemType error");
        if (t !== "Z") {
          o = o.join("|");
        }
        if (t !== "Z") {
          J(i.indexOf("|") === -1, "ops |");
        }
        var c = r - n;
        var u = c >= 0 ? ">" + F(c) : "<" + F(-c);
        e += (t !== "Z" ? "Z" : "") + t + (a === "0" ? "" : a) + ":" + F(n) + u + i;
        if (!s) {
          e += "#" + F(o.length);
        }
        e += "$" + o;
      })(s.itemType, s.oldLen, s.newLen, s.ops, s.charBank, r === n.length - 1, i);
    }
    return e;
  }
  function to(t, e, n, r) {
    var i;
    var o;
    var s;
    var a;
    if (r === undefined) {
      r = false;
    }
    i = t;
    o = e;
    s = n;
    if ((a = r) === undefined) {
      a = false;
    }
    return ti(function (t, e, n, r) {
      function i(t, e, i) {
        if (!e) {
          return i;
        }
        if (!i) {
          return e;
        }
        var o = e.oldLen;
        Z(e.newLen === i.oldLen, "mismatched composition");
        var s = i.newLen;
        var a = Y(e.charBank);
        var c = Y(i.charBank);
        var u = te(e.itemType);
        var l = X(e.ops, 0, i.ops, 0, function (t, e, i) {
          var o = t.opcode;
          var s = e.opcode;
          if (o === "+" && s === "-") {
            a.skip(Math.min(t.chars, e.chars));
          }
          (function (t, e, n, r, i = false) {
            if (t.opcode === "-") {
              D(t, n);
              t.opcode = "";
            } else if (t.opcode) {
              switch (e.opcode) {
                case "-":
                  if (e.chars <= t.chars) {
                    if (t.opcode === "=") {
                      n.opcode = "-";
                      n.chars = e.chars;
                      n.lines = e.lines;
                      n.attribs = i ? e.attribs : "";
                    }
                    t.chars -= e.chars;
                    t.lines -= e.lines;
                    e.opcode = "";
                    if (!t.chars) {
                      t.opcode = "";
                    }
                  } else {
                    if (t.opcode === "=") {
                      n.opcode = "-";
                      n.chars = t.chars;
                      n.lines = t.lines;
                      n.attribs = i ? e.attribs : "";
                    }
                    e.chars -= t.chars;
                    e.lines -= t.lines;
                    t.opcode = "";
                  }
                  break;
                case "+":
                  D(e, n);
                  e.opcode = "";
                  break;
                case "=":
                  if (e.chars <= t.chars) {
                    n.opcode = t.opcode;
                    n.chars = e.chars;
                    n.lines = e.lines;
                    n.attribs = tt(t.attribs, e.attribs, t.opcode === "=", r);
                    e.opcode = "";
                    t.chars -= e.chars;
                    t.lines -= e.lines;
                    if (!t.chars) {
                      t.opcode = "";
                    }
                  } else {
                    n.opcode = t.opcode;
                    n.chars = t.chars;
                    n.lines = t.lines;
                    n.attribs = tt(t.attribs, e.attribs, t.opcode === "=", r);
                    t.opcode = "";
                    e.chars -= t.chars;
                    e.lines -= t.lines;
                  }
                  break;
                case "":
                  D(t, n);
                  t.opcode = "";
              }
            } else {
              D(e, n);
              e.opcode = "";
            }
          })(t, e, i, n, r);
          if (i.opcode === "+") {
            if (s === "+") {
              u.append(c.take(i.chars));
            } else {
              u.append(a.take(i.chars));
            }
          }
        });
        var h = u.toResult();
        return {
          itemType: e.itemType,
          oldLen: o,
          newLen: s,
          ops: l,
          charBank: h
        };
      }
      if (r === undefined) {
        r = false;
      }
      var o;
      var s = {};
      for (var a in t) {
        if (t.hasOwnProperty(a)) {
          if (e[a]) {
            Z(t[a].itemType === e[a].itemType, "cs1 and cs2 itemType error");
          }
          if ((o = i(a, t[a], e[a] || null)) !== null) {
            s[a] = o;
          }
        }
      }
      for (var a in e) {
        if (!!e.hasOwnProperty(a) && !(a in t) && (o = i(a, null, e[a])) !== null) {
          s[a] = o;
        }
      }
      return s;
    }(tn(i), tn(o), s, a));
  }
  function ts(t, e, n) {
    return function (t, e) {
      function n(t) {
        var e = Q();
        var n = M(t);
        while (n.hasNext()) {
          var i = n.next();
          i.attribs = r(i.attribs);
          e.append(i);
        }
        e.endDocument();
        return e.toString();
      }
      function r(t) {
        return t.replace(/\*([0-9a-z]+)/g, function (t, n) {
          var r = e(H(n));
          if (r === true) {
            return t;
          } else if (typeof r == "number") {
            return "*" + F(r);
          } else {
            return "";
          }
        });
      }
      if (t.length > 0 && t[0] === "Z") {
        return ti(tr(t, function (t, e) {
          e.ops = n(e.ops);
          return e;
        }));
      } else if (t.indexOf("+") !== -1 || t.indexOf("=") !== -1) {
        return n(t);
      } else {
        return r(t);
      }
    }(t, function (t) {
      var r = e.getAttrib(t);
      if (r) {
        return n.putAttrib(r);
      } else {
        return null;
      }
    });
  }
  var ta = "zone_changesets";
  function tc(t, e) {
    var n;
    var r = new P().fromJsonableNoCloning(t.apool);
    var i = new P().fromJsonableNoCloning(e.apool);
    var o = {};
    for (var s in t[ta]) {
      if (t[ta].hasOwnProperty(s)) {
        var a = ts(t[ta][s], r, i);
        o[s] = to(a, e[ta][s] || "", i);
      }
    }
    for (var s in e[ta]) {
      if (!t[ta][s]) {
        o[s] = to("", e[ta][s], i);
      }
    }
    (n = {})[ta] = o;
    n.apool = i.toJsonable();
    return n;
  }
  function tu(t, e, n, r) {
    return ti(function (t, e, n) {
      var r = {};
      for (var i in t) {
        if (t.hasOwnProperty(i)) {
          if (e[i]) {
            Z(t[i].itemType === e[i].itemType, "map follow itemType error");
          }
          var o = n(i, t[i], e[i] || null);
          if (o !== null) {
            r[i] = o;
          }
        }
      }
      for (var i in e) {
        if (!(i in t)) {
          var o = n(i, null, e[i]);
          if (o !== null) {
            r[i] = o;
          }
        }
      }
      return r;
    }(tn(t), tn(e), function (t, e, i) {
      var o;
      var s;
      var a;
      var c;
      var u;
      var l;
      var h;
      if (e) {
        if (i) {
          Z(e.oldLen === i.oldLen, "mismatched follow - cannot transform cs1 on top of cs2", false, {
            unpacked1: JSON.stringify(e),
            unpacked2: JSON.stringify(i)
          });
          o = Y(e.charBank);
          s = Y(i.charBank);
          a = e.newLen;
          c = 0;
          u = 0;
          l = function (t, e) {
            if (!e) {
              return i;
            }
            var n = e.putAttrib(t, true);
            if (n < 0) {
              return i;
            }
            var r = RegExp("\\*" + F(n) + "(?!\\w)");
            return function (t) {
              return r.test(t);
            };
            function i() {
              return false;
            }
          }(["insertorder", "first"], r);
          h = X(e.ops, 0, i.ops, 0, function (t, e, i) {
            if (t.opcode === "+" || e.opcode === "+") {
              var a = undefined;
              if (e.opcode !== "+") {
                a = 1;
              } else if (t.opcode !== "+") {
                a = 2;
              } else {
                var h = o.peek(1);
                var p = s.peek(1);
                var f = l(t.attribs);
                var d = l(e.attribs);
                a = f && !d ? 1 : d && !f ? 2 : h === "\n" && p !== "\n" ? 2 : h !== "\n" && p === "\n" ? 1 : n ? 2 : 1;
              }
              if (a === 1) {
                o.skip(t.chars);
                i.opcode = "=";
                i.lines = t.lines;
                i.chars = t.chars;
                i.attribs = "";
                t.opcode = "";
              } else {
                s.skip(e.chars);
                D(e, i);
                e.opcode = "";
              }
            } else if (t.opcode === "-") {
              if (e.opcode) {
                if (t.chars <= e.chars) {
                  e.chars -= t.chars;
                  e.lines -= t.lines;
                  t.opcode = "";
                  if (!e.chars) {
                    e.opcode = "";
                  }
                } else {
                  t.chars -= e.chars;
                  t.lines -= e.lines;
                  e.opcode = "";
                }
              } else {
                t.opcode = "";
              }
            } else if (e.opcode === "-") {
              D(e, i);
              if (t.opcode) {
                if (e.chars <= t.chars) {
                  t.chars -= e.chars;
                  t.lines -= e.lines;
                  e.opcode = "";
                  if (!t.chars) {
                    t.opcode = "";
                  }
                } else {
                  i.lines = t.lines;
                  i.chars = t.chars;
                  e.lines -= t.lines;
                  e.chars -= t.chars;
                  t.opcode = "";
                }
              } else {
                e.opcode = "";
              }
            } else if (t.opcode) {
              if (e.opcode) {
                i.opcode = "=";
                i.attribs = function (t, e, n) {
                  if (!e || !n) {
                    return "";
                  }
                  if (!t) {
                    return e;
                  }
                  var r;
                  var i;
                  var o = [];
                  e.replace(/\*([0-9a-z]+)/g, function (t, e) {
                    o.push(n.getAttrib(H(e)));
                    return "";
                  });
                  t.replace(/\*([0-9a-z]+)/g, function (t, e) {
                    var r = n.getAttrib(H(e));
                    var i = 0;
                    for (; i < o.length; i++) {
                      var s = o[i];
                      if (r[0] === s[0]) {
                        if (r[1] <= s[1]) {
                          o.splice(i, 1);
                        }
                        break;
                      }
                    }
                    return "";
                  });
                  var s = G();
                  try {
                    var a = E(o);
                    var c = a.next();
                    for (; !c.done; c = a.next()) {
                      var u = c.value;
                      s.append("*");
                      s.append(F(n.putAttrib(u)));
                    }
                  } catch (t) {
                    r = {
                      error: t
                    };
                  } finally {
                    try {
                      if (c && !c.done && (i = a.return)) {
                        i.call(a);
                      }
                    } finally {
                      if (r) {
                        throw r.error;
                      }
                    }
                  }
                  return s.toString();
                }(t.attribs, e.attribs, r);
                if (t.chars <= e.chars) {
                  i.chars = t.chars;
                  i.lines = t.lines;
                  e.chars -= t.chars;
                  e.lines -= t.lines;
                  t.opcode = "";
                  if (!e.chars) {
                    e.opcode = "";
                  }
                } else {
                  i.chars = e.chars;
                  i.lines = e.lines;
                  t.chars -= e.chars;
                  t.lines -= e.lines;
                  e.opcode = "";
                }
              } else {
                t.opcode = "";
              }
            } else {
              D(e, i);
              e.opcode = "";
            }
            switch (i.opcode) {
              case "=":
                c += i.chars;
                u += i.chars;
                break;
              case "-":
                c += i.chars;
                break;
              case "+":
                u += i.chars;
            }
          });
          u += a - c;
          return {
            itemType: i.itemType,
            oldLen: a,
            newLen: u,
            ops: h,
            charBank: i.charBank
          };
        } else {
          return null;
        }
      } else {
        return i;
      }
    }));
  }
  function tl(t) {
    return function (t) {
      var e = tn(t);
      var n = {};
      for (var r in e) {
        if (e.hasOwnProperty(r)) {
          var i = e[r];
          var o = i.oldLen;
          var s = i.newLen;
          var a = i.ops;
          var c = i.itemType;
          var u = i.charBank;
          n[r] = function (t, e, n, r, i, o) {
            var s;
            if (i === undefined) {
              i = "0";
            }
            if (o === undefined) {
              o = "Z";
            }
            return ti(((s = {})[i] = {
              charBank: r,
              itemType: o,
              newLen: e,
              oldLen: t,
              ops: n
            }, s));
          }(o, s, a, u, r, c);
        }
      }
      return n;
    }(t);
  }
  function th(t) {
    return function (t) {
      var e = {};
      for (var n in t) {
        if (t.hasOwnProperty(n)) {
          Object.assign(e, tn(t[n]));
        }
      }
      return ti(e);
    }(t);
  }
  (r = {}).LEFT = "left";
  r.RIGHT = "right";
  var tp = r;
  class tf {
    transform(t, e, n) {
      let r = t[ta];
      let i = e[ta];
      let o = th(r);
      let s = new P().fromJsonable(t.apool);
      let a = new P().fromJsonable(e.apool);
      let c = ts(o, s, a);
      let u = {};
      let l = tl(c);
      for (let t in i) {
        if (i.hasOwnProperty(t)) {
          u[t] = tu(i[t], l[t] || "", n !== tp.LEFT, a);
        }
      }
      for (let t in r) {
        if (!i[t]) {
          u[t] = tu("", l[t] || "", n !== tp.LEFT, a);
        }
      }
      return {
        [ta]: u,
        apool: a.toJsonable()
      };
    }
    invert(t, e, n) {
      let r = {};
      let {
        initialAttributedTexts: i,
        apool: o
      } = e;
      let {
        attribs: s,
        text: a
      } = i;
      let c = new P().fromJsonable(o);
      let u = new P().fromJsonable(t.apool);
      let l = t[ta];
      for (let t in l) {
        if (l.hasOwnProperty(t)) {
          let e = s[t] || "|1+1";
          let i = a[t] || "\n";
          let o = i.split("\n");
          if (n && o[o.length - 1] === "") {
            o.pop();
          }
          let h = function (t, e) {
            let n = M(t);
            let r = [];
            let i = [];
            for (let t = 0; t < e.length; t++) {
              if (e[t] === "\n") {
                i.push(t);
              }
            }
            if (i.length === 0) {
              return [t];
            }
            let o = i.shift();
            let s = 0;
            let a = "";
            while (n.hasNext()) {
              let t = n.next();
              if (t.opcode !== "+") {
                throw Error("transformAttribsToAlines opcode must be +");
              }
              a += t.attribs;
              if (typeof o != "number" || s + t.chars - 1 < o) {
                a += `+${t.chars.toString(36)}`;
                s += t.chars;
                continue;
              }
              let e = t.chars;
              while (e > 0 && (!isNumberUtil.isNumber(o) || s + e - 1 >= o)) {
                if (isNumberUtil.isNumber(o)) {
                  if (a === "") {
                    a = t.attribs;
                  }
                  let n = o - s + 1;
                  a += `|1+${n.toString(36)}`;
                  s += n;
                  e -= n;
                  r.push(a);
                  a = "";
                } else {
                  a += `${t.attribs}+${e}`;
                  s += e;
                  e = 0;
                  break;
                }
                o = i.shift();
              }
            }
            if (a) {
              r.push(a);
              a = "";
            }
            return r;
          }(e, i);
          let p = tn(ts(l[t], u, c));
          let f = {
            get: t => `${o[t]}
`
          };
          r[t] = function (t, e, n, r) {
            var i;
            var o;
            var s;
            var a;
            var c;
            var u;
            var l;
            var h;
            var p;
            var f;
            var d = 0;
            var b = 0;
            var v = null;
            var g = B("+");
            var y = M(t.ops);
            i = t.newLen;
            if ((o = t.itemType) === undefined) {
              o = "Z";
            }
            if (s === undefined) {
              s = "0";
            }
            if ((a = o) === undefined) {
              a = "Z";
            }
            if ((c = s) === undefined) {
              c = "0";
            }
            a = a || "Z";
            u = Q();
            l = B();
            h = te(a);
            var m = p = {
              keepOverOp: function (t) {
                p.keep(t.chars, t.lines);
              },
              keepOverOpWithNewAttributes: function (t, e, n) {
                p.keep(t.chars, t.lines, e, n);
              },
              keepOverOpWithoutAttribute: function (t, e, n) {
                p.keep(t.chars, t.lines, [[e, ""]], n);
              },
              keep: function (t, e, n, r) {
                l.opcode = "=";
                l.attribs = n && q("=", n, r) || "";
                l.chars = t;
                l.lines = e || 0;
                u.append(l);
                return p;
              },
              keepText: function (t, e, n) {
                u.appendOpWithText("=", t, e, n);
                return p;
              },
              insert: function (t, e, n) {
                if (a === "Z") {
                  u.appendOpWithText("+", t, e, n);
                } else {
                  u.append({
                    opcode: "+",
                    chars: t.length,
                    attribs: e,
                    lines: 0
                  });
                }
                h.append(t);
                return p;
              },
              remove: function (t, e) {
                l.opcode = "-";
                l.attribs = "";
                l.chars = t;
                l.lines = e || 0;
                u.append(l);
                return p;
              },
              removeText: function (t) {
                u.appendOpWithText("-", t);
              },
              insertAText: function (t) {
                if (t.text.charAt(t.text.length - 1) !== "\n") {
                  throw new _("insertAText: text must end in newline");
                }
                (function (t, e) {
                  var n = M(t.attribs);
                  var r = B();
                  while (n.hasNext()) {
                    n.next(r);
                    if (n.hasNext()) {
                      e.append(r);
                    } else if (r.lines <= 1) {
                      r.lines = 0;
                      r.chars--;
                      if (r.chars) {
                        e.append(r);
                      }
                    } else {
                      var i = t.text.lastIndexOf("\n", t.text.length - 2) + 1;
                      var o = t.text.length - i - 1;
                      r.lines--;
                      r.chars -= o + 1;
                      e.append(r);
                      r.lines = 0;
                      r.chars = o;
                      if (r.chars) {
                        e.append(r);
                      }
                    }
                  }
                })(t, u);
                h.append(t.text.slice(0, -1));
                return p;
              },
              toChangeset: function () {
                if (!c) {
                  throw new _("Changeset: zoneId should be non-trivial");
                }
                var t = {};
                t[c] = p.toUnpacked();
                return ti(t);
              },
              toString: function () {
                if (!c) {
                  throw new _("Changeset: zoneId should be non-trivial");
                }
                var t = {};
                t[c] = p.toUnpacked();
                return ti(t);
              },
              toUnpacked: function () {
                u.endDocument();
                var t = i + u.getLengthChange();
                return {
                  itemType: a,
                  oldLen: i,
                  newLen: t,
                  ops: u.toString(),
                  charBank: h.toResult()
                };
              }
            };
            var x = [];
            var T = [];
            function w(t) {
              if (e.atIndex) {
                return e.atIndex(t).text + "\n";
              } else if (e.get) {
                return e.get(t);
              } else {
                return e[t];
              }
            }
            function S(t, e) {
              if (!v || f !== d) {
                v = M(n[d]);
                f = d;
                var r = 0;
                var i = false;
                while (!i) {
                  Z(v.hasNext(), "curLineOpIter has next 1");
                  v.next(g);
                  if (r + g.chars >= b) {
                    g.chars -= b - r;
                    i = true;
                  } else {
                    r += g.chars;
                  }
                }
              }
              while (t > 0) {
                if (!g.chars && !v.hasNext()) {
                  b = 0;
                  f = ++d;
                  g.chars = 0;
                  v = M(n[d]);
                }
                if (!g.chars) {
                  Z(v.hasNext(), "curLineOpIter has next 2");
                  v.next(g);
                }
                var o = Math.min(t, g.chars);
                e(o, g.attribs, o === g.chars && g.lines > 0);
                t -= o;
                g.chars -= o;
                b += o;
              }
              if (!g.chars && !v.hasNext()) {
                d++;
                b = 0;
              }
            }
            while (y.hasNext()) {
              (function () {
                var e = y.next();
                if (e.opcode === "=") {
                  if (e.attribs) {
                    x.length = 0;
                    T.length = 0;
                    $(e.attribs, function (t) {
                      x.push(r.getAttribKey(t));
                      T.push(r.getAttribValue(t));
                    });
                    var n;
                    var i;
                    var o;
                    var s;
                    o = function (t) {
                      var e = [];
                      var n = 0;
                      for (; n < x.length; n++) {
                        var i = x[n];
                        var o = T[n];
                        var s = function (t, e, n) {
                          var r = "";
                          if (t) {
                            $(t, function (t) {
                              if (n.getAttribKey(t) === e) {
                                r = n.getAttribValue(t);
                              }
                            });
                          }
                          return r;
                        }(t, i, r);
                        if (o !== s) {
                          e.push([i, s]);
                        }
                      }
                      return q("=", e, r);
                    };
                    s = {};
                    function a(t) {
                      s[t] ||= o(t);
                      return s[t];
                    }
                    S(e.chars, function (t, e, n) {
                      m.keep(t, +!!n, a(e));
                    });
                  } else {
                    n = e.chars;
                    if (i = e.lines) {
                      d += i;
                      b = 0;
                    } else if (v && f === d) {
                      S(n, function () {});
                    } else {
                      b += n;
                    }
                    m.keep(e.chars, e.lines);
                  }
                } else if (e.opcode === "+") {
                  m.remove(e.chars, e.lines);
                } else if (e.opcode === "-") {
                  var c = function (e) {
                    var n = 0;
                    var r = te(t.itemType);
                    var i = Y(w(d));
                    i.skip(b);
                    var o = i.take(i.remaining());
                    n += o.length;
                    r.append(o);
                    var s = d + 1;
                    while (n < e) {
                      var a = w(s);
                      n += a.length;
                      r.append(a);
                      s++;
                    }
                    return (i = Y(r.toResult())).take(Math.min(e, i.remaining()));
                  }(e.chars);
                  var u = 0;
                  S(e.chars, function (t, e, n) {
                    var r = Y(c);
                    r.skip(u);
                    m.insert(r.take(Math.min(r.remaining(), t)), e);
                    u += t;
                  });
                }
              })();
            }
            return m.toUnpacked();
          }(p[t], f, h, c);
        }
      }
      let h = new P();
      return {
        [ta]: tl(ts(ti(r), c, h)),
        apool: h.toJsonable()
      };
    }
    apply(t, e) {
      let n = new P().fromJsonableNoCloning(e.apool);
      let r = new P().fromJsonableNoCloning(t.apool);
      let i = function (t, e, n) {
        function r(t) {
          var e = {};
          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              e[n] = t[n];
            }
          }
          return e;
        }
        J("0" in e.text, "0 must be in zatext.text");
        J("0" in e.attribs, "0 must be in zatext.attribs");
        var i = {
          text: r(e.text),
          attribs: r(e.attribs),
          rows: {},
          cols: {}
        };
        if (e.rows) {
          i.rows = r(e.rows);
        }
        if (e.cols) {
          i.cols = r(e.cols);
        }
        tr(t, function (t, e) {
          var r;
          var o;
          r = i.text;
          if (e.itemType === "Z") {
            r = i.text;
          } else if (e.itemType === "R") {
            i.rows ||= {};
            r = i.rows;
          } else if (e.itemType === "C") {
            i.cols ||= {};
            r = i.cols;
          } else {
            J(false, "bad item type", false, {
              itemType: e.itemType
            });
          }
          if (!(t in r)) {
            r[t] = (o = e.itemType) === "Z" ? "\n" : o === "R" || o === "C" ? [] : (Z(false, "itemType error"), "");
          }
          if (!(t in i.attribs)) {
            i.attribs[t] = function (t) {
              if (t === "Z") {
                return "|1+1";
              }
              if (t === "R" || t === "C") {
                return "";
              }
              throw new _("unrecognized itemType " + t);
            }(e.itemType);
          }
          r[t] = function (t, e, n) {
            Z(e.length === t.oldLen, "mismatched apply: charBank.length / csObj.oldLen", false, {
              charBank: e.length,
              oldLen: t.oldLen
            });
            var r = M(t.ops);
            var i = Y(t.charBank);
            var o = Y(e);
            var s = te(t.itemType);
            while (r.hasNext()) {
              var a = r.next();
              switch (a.opcode) {
                case "+":
                  s.append(i.take(a.chars));
                  break;
                case "-":
                  o.skip(a.chars);
                  break;
                case "=":
                  s.append(o.take(a.chars));
              }
            }
            s.append(o.take(o.remaining()));
            return s.toResult();
          }(e, r[t], 0);
          i.attribs[t] = function (t, e, n) {
            var r;
            var i;
            var o;
            var s = "";
            var a = 0;
            var c = 0;
            var u = 0;
            var l = 0;
            var h = 0;
            var p = 0;
            var f = "";
            var d = true;
            var b = 0;
            var v = M(t.ops);
            function g() {
              if (a > 0) {
                s += r + "|" + F(a) + "+" + F(c);
              }
              if (u > 0) {
                s += r + "+" + F(u);
              }
              a = 0;
              c = 0;
              u = 0;
            }
            function y(t, e, n) {
              if (t !== 0) {
                if ((c > 0 || u > 0) && r === n) {
                  if (e) {
                    c += t + u;
                    a += e;
                    u = 0;
                  } else {
                    u += t;
                  }
                } else {
                  g();
                  if (e) {
                    a = e;
                    c = t;
                  } else {
                    u = t;
                  }
                  r = n;
                }
              }
            }
            function m() {
              if (l >= e.length) {
                throw new _("astr not long enough");
              }
              var t;
              var n = l;
              while (e.charCodeAt(l) !== 124 && e.charCodeAt(l) !== 43) {
                l++;
              }
              var r = l;
              var i = 0;
              if (e.charCodeAt(l) === 124) {
                for (l++; (t = e.charCodeAt(l)) !== 43;) {
                  i = t >= 97 && t <= 122 ? i * 36 + (t - 97 + 10) : i * 36 + (t - 48);
                  l++;
                }
              }
              var o = 0;
              for (l++;;) {
                if ((t = e.charCodeAt(l)) >= 97 && t <= 122) {
                  o = o * 36 + (t - 97 + 10);
                } else {
                  if (!(t >= 48) || !(t <= 57)) {
                    break;
                  }
                  o = o * 36 + (t - 48);
                }
                l++;
              }
              return {
                attribStart: n,
                attribEnd: r,
                chars: o,
                lines: i
              };
            }
            while (v.hasNext()) {
              var x = v.next();
              if (x.opcode === "+") {
                if (d) {
                  var T = -1;
                  var w = b;
                  var S = v.index;
                  var k = v.index;
                  var A = false;
                  var N = t.ops;
                  while (true) {
                    var O = N.charCodeAt(k);
                    if (A && (O === 124 || O === 42 || O === 43 || O === 45 || O === 61 || k === N.length)) {
                      A = false;
                      T = w;
                      w = S;
                      S = k;
                    }
                    if (k === N.length || O === 45 || O === 61) {
                      break;
                    }
                    if (O === 43) {
                      A = true;
                    }
                    k++;
                  }
                  if (T === -1) {
                    y(x.chars, x.lines, x.attribs);
                  } else {
                    if (T > b) {
                      g();
                      s += N.substring(b, T);
                      v.index = T;
                      var L = v.next();
                      y(L.chars, L.lines, L.attribs);
                    } else {
                      y(x.chars, x.lines, x.attribs);
                    }
                    var C = v.next();
                    y(C.chars, C.lines, C.attribs);
                  }
                } else {
                  y(x.chars, x.lines, x.attribs);
                  d = true;
                  b = v.index;
                }
              } else if (x.opcode === "-") {
                d = false;
                if (x.chars <= p) {
                  h -= x.lines;
                  p -= x.chars;
                } else {
                  x.lines -= h;
                  x.chars -= p;
                  h = 0;
                  p = 0;
                  while (true) {
                    if ((i = m()).chars >= x.chars) {
                      p = i.chars - x.chars;
                      h = i.lines - x.lines;
                      f = e.substring(i.attribStart, i.attribEnd);
                      break;
                    }
                    x.chars -= i.chars;
                    x.lines -= i.lines;
                  }
                }
              } else {
                d = false;
                if (x.attribs === "") {
                  if (p === 0) {
                    p = (i = m()).chars;
                    h = i.lines;
                    f = e.substring(i.attribStart, i.attribEnd);
                  }
                  if (x.chars <= p) {
                    y(x.chars, x.lines, f);
                    h -= x.lines;
                    p -= x.chars;
                  } else {
                    y(p, h, f);
                    x.lines -= h;
                    x.chars -= p;
                    h = 0;
                    p = 0;
                    var z = l;
                    o = null;
                    i = null;
                    while (!((i = m()).chars >= x.chars)) {
                      x.chars -= i.chars;
                      x.lines -= i.lines;
                      o = i;
                    }
                    if (o) {
                      if (o.attribStart > z) {
                        g();
                        s += e.substring(z, o.attribStart);
                      }
                      y(o.chars, o.lines, e.substring(o.attribStart, o.attribEnd));
                    }
                    f = e.substring(i.attribStart, i.attribEnd);
                    y(x.chars, x.lines, f);
                    p = i.chars - x.chars;
                    h = i.lines - x.lines;
                  }
                } else if (x.chars <= p) {
                  y(x.chars, x.lines, K(f, x.attribs, false, n));
                  h -= x.lines;
                  p -= x.chars;
                } else {
                  y(p, h, K(f, x.attribs, false, n));
                  x.lines -= h;
                  x.chars -= p;
                  h = 0;
                  p = 0;
                  while (true) {
                    i = m();
                    var j = e.substring(i.attribStart, i.attribEnd);
                    if (i.chars >= x.chars) {
                      y(x.chars, x.lines, K(j, x.attribs, false, n));
                      p = i.chars - x.chars;
                      h = i.lines - x.lines;
                      f = j;
                      break;
                    }
                    y(i.chars, i.lines, K(j, x.attribs, false, n));
                    x.chars -= i.chars;
                    x.lines -= i.lines;
                  }
                }
              }
            }
            if (p === 0 && l < e.length) {
              p = (i = m()).chars;
              h = i.lines;
              f = e.substring(i.attribStart, i.attribEnd);
            }
            if (p > 0) {
              y(p, h, f);
            }
            g();
            if (l < e.length) {
              s += e.substring(l, e.length);
            }
            return s;
          }(e, i.attribs[t], n);
        });
        (function (t) {
          for (var e in t.text) {
            if (e !== "0" && t.text[e] === "\n") {
              delete t.text[e];
              delete t.attribs[e];
            }
          }
          if (t.rows) {
            for (var e in t.rows) {
              if (!t.rows[e] || t.rows[e].length === 0) {
                delete t.rows[e];
                if (e in t.attribs) {
                  delete t.attribs[e];
                }
              }
            }
          }
          if (t.cols) {
            for (var e in t.cols) {
              if (!t.cols[e] || t.cols[e].length === 0) {
                delete t.cols[e];
                if (e in t.attribs) {
                  delete t.attribs[e];
                }
              }
            }
          }
        })(i);
        return i;
      }(ts(th(e.zone_changesets), n, r), t.initialAttributedTexts, r);
      let o = new P();
      for (let t in i.attribs) {
        if (i.attribs.hasOwnProperty(t)) {
          i.attribs[t] = ts(i.attribs[t], r, o);
        }
      }
      t.apool = o.toJsonable();
      t.initialAttributedTexts = i;
      return t;
    }
    static register() {
      if (!this.hasRegistered) {
        S(new tf());
        this.hasRegistered = true;
      }
    }
    constructor() {
      this.name = "easysync";
      this.compose = tc;
    }
  }
  tf.hasRegistered = false;
  var blockTreeUtilities = require("block-tree-utilities") /*id: 183833*/;
  var cryptoMd5HashFunction = require("crypto-md5-hash-function") /*id: 204205*/;
  let tv = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  tv.length;
  let tg = "fdc";
  let ty = t => {
    let e = 0;
    for (let n = 1; n < t.length; n++) {
      e ^= t[n].charCodeAt(0);
    }
    return String.fromCharCode(65 + e % 26) + t.substring(1);
  };
  let tm = (t, e = tg) => {
    if (!t.startsWith(e)) {
      return t;
    }
    let n = t.substring(0, e.length + 2);
    let r = t.substring(5, 9) + n[0] + t.substring(9, 13) + n[1] + t.substring(13, 17) + n[2] + t.substring(17, 21) + n[3] + t.substring(21, 25) + n[4] + t.substring(25);
    return ty(r);
  };
  let tx = (t, e) => {
    let n = cryptoMd5HashFunction(t).slice(0, e).split("").map(t => parseInt(t, 16));
    let r = 0;
    let i = "";
    for (let t of n) {
      r += t;
      i += tv[r % tv.length];
    }
    return i;
  };
  let tT = (t, ...e) => tm((tg + tx([t, ...e].join("__"))).slice(0, 27));
  class tw {
    get value() {
      if (!this.innerValue) {
        throw Error("Cannot get value, snapshot has not set");
      }
      return this.innerValue;
    }
    getById(t) {
      return this.value[t];
    }
    purify() {
      if (!this.innerValue) {
        throw Error("Cannot purify, snapshot has not set");
      }
      blockTreeUtilities.cleanBlockTree(this.innerValue);
    }
    update(t) {
      this.innerValue = deepCloneWrapper_1.deepClone(t);
    }
    apply(t, e = {}) {
      let {
        purify: n = true,
        safty: r = false,
        onError: s
      } = e;
      let a = t => {
        if (r) {
          if (s) {
            s(t);
          }
          return;
        }
        throw t;
      };
      if (!this.innerValue) {
        return a(Error("Cannot apply, snapshot has not set"));
      }
      let c = [];
      let u = deepCloneWrapper_1.deepClone(t);
      let l = getOwnKeys.getOwnKeys(u);
      for (let t of l) {
        try {
          let {
            id: e,
            payload: {
              ops: n
            }
          } = u[t];
          if (e !== t) {
            throw new blockTreeUtilities.SnapshotApplyError("The block change set id is not match with the corresponding map key");
          }
          for (let e of n) {
            var h;
            var p;
            var f;
            var d;
            if (e.p.length === 0 && ((h = e.action) == null ? undefined : h.oi)) {
              this.innerValue[t] = {
                id: t,
                version: 1,
                data: (f = e.action) == null ? undefined : f.oi
              };
              if (c.includes(t)) {
                c = c.filter(e => e !== t);
              }
            } else if (e.p.length === 0 && ((p = e.action) == null ? undefined : p.od)) {
              delete this.innerValue[t];
              c.push(t);
            } else {
              if (c.includes(t)) {
                continue;
              }
              let r = blockTreeUtilities.extractChildOperationInfo(e);
              if (!this.innerValue[t]) {
                let r = n.indexOf(e);
                let i = blockTreeUtilities.getBlockTreeHierarchy(this.innerValue);
                let o = this.prevStructure;
                this.prevStructure = i;
                let s = this.prevChangeSet;
                let a = {
                  op: e,
                  ops: n,
                  key: t,
                  opIndex: r,
                  blockIds: l,
                  structure: i,
                  changeSet: u,
                  prevStructure: o,
                  prevChangeSet: s
                };
                throw new blockTreeUtilities.SnapshotApplyError(`Cannot apply op since key is not in snapshot: ${t}`, a);
              }
              let i = this.innerValue[t].data;
              if (r) {
                let {
                  id: t,
                  index: e
                } = r;
                if (((d = i.children) == null ? undefined : d[e]) === t) {
                  continue;
                }
              }
              this.innerValue[t].data = O(i, [e]);
            }
          }
        } catch (t) {
          this.handleApplyError(t);
          a(t);
          continue;
        }
      }
      this.prevChangeSet = u;
      if (n) {
        this.purify();
      }
    }
    addChild(t, e) {
      if (!this.innerValue) {
        throw Error("Cannot add child, snapshot has not set");
      }
      if (e.parent_id !== t) {
        throw Error("Cannot add child, Block data has wrong parent_id");
      }
      let {
        data: n
      } = this.innerValue[t];
      let {
        type: r,
        text_indent: o
      } = n;
      if (collectionIncludesUtil.includes(["table"], r) || r === "text" && isUndefinedCheck.isUndefined(o)) {
        throw Error(`Cannot add child to ${r}`);
      }
      n.children ||= [];
      let c = tT(t, String(n.children.length), e.type);
      if (c in this.innerValue) {
        throw Error("Generated new id is already exists in snapshot");
      }
      let u = deepCloneWrapper_1.deepClone(e);
      this.addFreeChild(c, u);
      n.children.push(c);
      return c;
    }
    addFreeChild(t, e) {
      if (!this.innerValue) {
        throw Error("Cannot add child, snapshot has not set");
      }
      if (t in this.innerValue) {
        throw Error("Generated new id is already exists in snapshot");
      }
      let n = deepCloneWrapper_1.deepClone(e);
      this.innerValue[t] = {
        id: t,
        version: 1,
        data: n
      };
    }
    updateBlock(t, e) {
      if (!this.innerValue) {
        throw Error("Cannot mutate block, snapshot has not set");
      }
      let n = this.innerValue[t];
      if (!n) {
        throw Error(`Cannot muate block, id is not exist in snapshot: ${t}`);
      }
      let r = e(deepCloneWrapper_1.deepClone(n.data));
      n.data = r;
    }
    constructor(t = {}) {
      this.innerValue = null;
      this.prevChangeSet = null;
      this.prevStructure = null;
      let {
        initial: e,
        purify: n = true,
        onApplyError: r
      } = t;
      tf.register();
      if (e) {
        this.innerValue = blockTreeUtilities.isValidBlock(e) ? blockTreeUtilities.createRootBlock(e.rootId, e.author) : deepCloneWrapper_1.deepClone(e);
        if (n) {
          this.purify();
        }
      }
      this.handleApplyError = r ?? emptyExportFunction.emptyFunction;
    }
  }
  require.d(exports, {
    EasysyncJson0Text0OT: function () {
      return tw;
    }
  });
}