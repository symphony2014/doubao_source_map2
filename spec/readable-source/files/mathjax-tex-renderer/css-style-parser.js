// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 389570
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
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
  };
  var r = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var T = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.Styles = undefined;
  var n = ["top", "right", "bottom", "left"];
  var o = ["width", "style", "color"];
  function i(t) {
    var e = t.split(/((?:'[^']*'|"[^"]*"|,[\s\n]|[^\s\n])*)/g);
    var Q = [];
    while (e.length > 1) {
      e.shift();
      Q.push(e.shift());
    }
    return Q;
  }
  function a(t) {
    var e;
    var r;
    var T = i(this.styles[t]);
    if (T.length === 0) {
      T.push("");
    }
    if (T.length === 1) {
      T.push(T[0]);
    }
    if (T.length === 2) {
      T.push(T[0]);
    }
    if (T.length === 3) {
      T.push(T[1]);
    }
    try {
      var n = Q(L.connect[t].children);
      var o = n.next();
      for (; !o.done; o = n.next()) {
        var a = o.value;
        this.setStyle(this.childName(t, a), T.shift());
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (o && !o.done && (r = n.return)) {
          r.call(n);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  function u(t) {
    var e;
    var r;
    var T = L.connect[t].children;
    var n = [];
    try {
      var o = Q(T);
      var i = o.next();
      for (; !i.done; i = o.next()) {
        var a = i.value;
        var u = this.styles[t + "-" + a];
        if (!u) {
          delete this.styles[t];
          return;
        }
        n.push(u);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (i && !i.done && (r = o.return)) {
          r.call(o);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    if (n[3] === n[1]) {
      n.pop();
      if (n[2] === n[0]) {
        n.pop();
        if (n[1] === n[0]) {
          n.pop();
        }
      }
    }
    this.styles[t] = n.join(" ");
  }
  function s(t) {
    var e;
    var r;
    try {
      var T = Q(L.connect[t].children);
      var n = T.next();
      for (; !n.done; n = T.next()) {
        var o = n.value;
        this.setStyle(this.childName(t, o), this.styles[t]);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (n && !n.done && (r = T.return)) {
          r.call(T);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  function l(t) {
    var e;
    var n;
    var o = T([], r(L.connect[t].children), false);
    var i = this.styles[this.childName(t, o.shift())];
    try {
      var a = Q(o);
      var u = a.next();
      for (; !u.done; u = a.next()) {
        var s = u.value;
        if (this.styles[this.childName(t, s)] !== i) {
          delete this.styles[t];
          return;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (n = a.return)) {
          n.call(a);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    this.styles[t] = i;
  }
  var c = {
    width: /^(?:[\d.]+(?:[a-z]+)|thin|medium|thick|inherit|initial|unset)$/,
    style: /^(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit|initial|unset)$/
  };
  function p(t) {
    var e;
    var r;
    var T;
    var n;
    var o = {
      width: "",
      style: "",
      color: ""
    };
    try {
      var a = Q(i(this.styles[t]));
      var u = a.next();
      for (; !u.done; u = a.next()) {
        var s = u.value;
        if (s.match(c.width) && o.width === "") {
          o.width = s;
        } else if (s.match(c.style) && o.style === "") {
          o.style = s;
        } else {
          o.color = s;
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (u && !u.done && (r = a.return)) {
          r.call(a);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    try {
      var l = Q(L.connect[t].children);
      var p = l.next();
      for (; !p.done; p = l.next()) {
        var h = p.value;
        this.setStyle(this.childName(t, h), o[h]);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (p && !p.done && (n = l.return)) {
          n.call(l);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
  }
  function h(t) {
    var e;
    var r;
    var T = [];
    try {
      var n = Q(L.connect[t].children);
      var o = n.next();
      for (; !o.done; o = n.next()) {
        var i = o.value;
        var a = this.styles[this.childName(t, i)];
        if (a) {
          T.push(a);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (o && !o.done && (r = n.return)) {
          r.call(n);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    if (T.length) {
      this.styles[t] = T.join(" ");
    } else {
      delete this.styles[t];
    }
  }
  var f = {
    style: /^(?:normal|italic|oblique|inherit|initial|unset)$/,
    variant: RegExp("^(?:normal|none|inherit|initial|unset|common-ligatures|no-common-ligatures|discretionary-ligatures|no-discretionary-ligatures|historical-ligatures|no-historical-ligatures|contextual|no-contextual|(?:stylistic|character-variant|swash|ornaments|annotation)\\([^)]*\\)|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps|lining-nums|oldstyle-nums|proportional-nums|tabular-nums|diagonal-fractions|stacked-fractions|ordinal|slashed-zero|jis78|jis83|jis90|jis04|simplified|traditional|full-width|proportional-width|ruby)$"),
    weight: /^(?:normal|bold|bolder|lighter|[1-9]00|inherit|initial|unset)$/,
    stretch: RegExp("^(?:normal|(?:(?:ultra|extra|semi)-)?condensed|(?:(?:semi|extra|ulta)-)?expanded|inherit|initial|unset)$"),
    size: RegExp("^(?:xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|[d.]+%|[d.]+[a-z]+|inherit|initial|unset)(?:/(?:normal|[d.+](?:%|[a-z]+)?))?$")
  };
  function d(t) {
    var e;
    var T;
    var n;
    var o;
    var a = i(this.styles[t]);
    var u = {
      style: "",
      variant: [],
      weight: "",
      stretch: "",
      size: "",
      family: "",
      "line-height": ""
    };
    try {
      var s = Q(a);
      var l = s.next();
      for (; !l.done; l = s.next()) {
        var c = l.value;
        u.family = c;
        try {
          n = undefined;
          var p = Q(Object.keys(f));
          var h = p.next();
          for (; !h.done; h = p.next()) {
            var d = h.value;
            if ((Array.isArray(u[d]) || u[d] === "") && c.match(f[d])) {
              if (d === "size") {
                var D = r(c.split(/\//), 2);
                var m = D[0];
                var y = D[1];
                u[d] = m;
                if (y) {
                  u["line-height"] = y;
                }
              } else if (u.size === "") {
                if (Array.isArray(u[d])) {
                  u[d].push(c);
                } else {
                  u[d] = c;
                }
              }
            }
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (h && !h.done && (o = p.return)) {
              o.call(p);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (l && !l.done && (T = s.return)) {
          T.call(s);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
    (function (t, e) {
      var r;
      var T;
      try {
        var n = Q(L.connect[t].children);
        var o = n.next();
        for (; !o.done; o = n.next()) {
          var i = o.value;
          var a = this.childName(t, i);
          if (Array.isArray(e[i])) {
            var u = e[i];
            if (u.length) {
              this.styles[a] = u.join(" ");
            }
          } else if (e[i] !== "") {
            this.styles[a] = e[i];
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (T = n.return)) {
            T.call(n);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    })(t, u);
    delete this.styles[t];
  }
  function D(t) {}
  var L = function () {
    function t(t = "") {
      this.parse(t);
    }
    Object.defineProperty(t.prototype, "cssText", {
      get: function () {
        var t;
        var e;
        var r = [];
        try {
          var T = Q(Object.keys(this.styles));
          var n = T.next();
          for (; !n.done; n = T.next()) {
            var o = n.value;
            var i = this.parentName(o);
            if (!this.styles[i]) {
              r.push(o + ": " + this.styles[o] + ";");
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (n && !n.done && (e = T.return)) {
              e.call(T);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        return r.join(" ");
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.set = function (e, Q) {
      e = this.normalizeName(e);
      this.setStyle(e, Q);
      if (t.connect[e] && !t.connect[e].combine) {
        this.combineChildren(e);
        delete this.styles[e];
      }
      while (e.match(/-/) && (e = this.parentName(e), t.connect[e])) {
        t.connect[e].combine.call(this, e);
      }
    };
    t.prototype.get = function (t) {
      t = this.normalizeName(t);
      if (this.styles.hasOwnProperty(t)) {
        return this.styles[t];
      } else {
        return "";
      }
    };
    t.prototype.setStyle = function (e, Q) {
      this.styles[e] = Q;
      if (t.connect[e] && t.connect[e].children) {
        t.connect[e].split.call(this, e);
      }
      if (Q === "") {
        delete this.styles[e];
      }
    };
    t.prototype.combineChildren = function (e) {
      var r;
      var T;
      var n = this.parentName(e);
      try {
        var o = Q(t.connect[e].children);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          var u = this.childName(n, a);
          t.connect[u].combine.call(this, u);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (T = o.return)) {
            T.call(o);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    };
    t.prototype.parentName = function (t) {
      var e = t.replace(/-[^-]*$/, "");
      if (t === e) {
        return "";
      } else {
        return e;
      }
    };
    t.prototype.childName = function (e, Q) {
      if (Q.match(/-/)) {
        return Q;
      } else {
        if (t.connect[e] && !t.connect[e].combine) {
          Q += e.replace(/.*-/, "-");
          e = this.parentName(e);
        }
        return e + "-" + Q;
      }
    };
    t.prototype.normalizeName = function (t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      });
    };
    t.prototype.parse = function (t = "") {
      var e = this.constructor.pattern;
      this.styles = {};
      for (var Q = t.replace(e.comment, "").split(e.style); Q.length > 1;) {
        var T = r(Q.splice(0, 3), 3);
        var n = T[0];
        var o = T[1];
        var i = T[2];
        if (n.match(/[^\s\n]/)) {
          return;
        }
        this.set(o, i);
      }
    };
    t.pattern = {
      style: /([-a-z]+)[\s\n]*:[\s\n]*((?:'[^']*'|"[^"]*"|\n|.)*?)[\s\n]*(?:;|$)/g,
      comment: /\/\*[^]*?\*\//g
    };
    t.connect = {
      padding: {
        children: n,
        split: a,
        combine: u
      },
      border: {
        children: n,
        split: s,
        combine: l
      },
      "border-top": {
        children: o,
        split: p,
        combine: h
      },
      "border-right": {
        children: o,
        split: p,
        combine: h
      },
      "border-bottom": {
        children: o,
        split: p,
        combine: h
      },
      "border-left": {
        children: o,
        split: p,
        combine: h
      },
      "border-width": {
        children: n,
        split: a,
        combine: null
      },
      "border-style": {
        children: n,
        split: a,
        combine: null
      },
      "border-color": {
        children: n,
        split: a,
        combine: null
      },
      font: {
        children: ["style", "variant", "weight", "stretch", "line-height", "size", "family"],
        split: d,
        combine: D
      }
    };
    return t;
  }();
  exports.Styles = L;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}