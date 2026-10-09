// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iJ' to 'createTensionZero'
// - Renamed export 'Ys' to 'select'
// - Renamed export 'Xf' to 'timeScale'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41069.b8943696.js
         * chunkId: 41069
         * moduleId: 381804
         */
module.exports = function (module, exports, require) {
  var arrayMaxUtil_1 = require("array-max-util_1") /*id: 948581*/;
  var arrayMaxUtil = require("array-max-util") /*id: 878770*/;
  function o(t, n) {
    let e;
    let r = -1;
    let i = -1;
    if (n === undefined) {
      for (let n of t) {
        ++i;
        if (n != null && (e > n || e === undefined && n >= n)) {
          e = n;
          r = i;
        }
      }
    } else {
      for (let o of t) {
        if ((o = n(o, ++i, t)) != null && (e > o || e === undefined && o >= o)) {
          e = o;
          r = i;
        }
      }
    }
    return r;
  }
  function u(t) {
    return t;
  }
  function a(t) {
    return "translate(" + t + ",0)";
  }
  function s(t) {
    return "translate(0," + t + ")";
  }
  function c() {
    return !this.__axis;
  }
  function l(t, n) {
    var e = [];
    var r = null;
    var i = null;
    var o = 6;
    var l = 6;
    var h = 3;
    var f = typeof window != "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5;
    var p = t === 1 || t === 4 ? -1 : 1;
    var _ = t === 4 || t === 2 ? "x" : "y";
    var v = t === 1 || t === 3 ? a : s;
    function d(a) {
      var s = r == null ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r;
      var d = i == null ? n.tickFormat ? n.tickFormat.apply(n, e) : u : i;
      var m = Math.max(o, 0) + h;
      var y = n.range();
      var g = +y[0] + f;
      var w = +y[y.length - 1] + f;
      var x = (n.bandwidth ? function (t, n) {
        n = Math.max(0, t.bandwidth() - n * 2) / 2;
        if (t.round()) {
          n = Math.round(n);
        }
        return e => +t(e) + n;
      } : function (t) {
        return n => +t(n);
      })(n.copy(), f);
      var A = a.selection ? a.selection() : a;
      var b = A.selectAll(".domain").data([null]);
      var z = A.selectAll(".tick").data(s, n).order();
      var Z = z.exit();
      var k = z.enter().append("g").attr("class", "tick");
      var E = z.select("line");
      var S = z.select("text");
      b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
      z = z.merge(k);
      E = E.merge(k.append("line").attr("stroke", "currentColor").attr(_ + "2", p * o));
      S = S.merge(k.append("text").attr("fill", "currentColor").attr(_, p * m).attr("dy", t === 1 ? "0em" : t === 3 ? "0.71em" : "0.32em"));
      if (a !== A) {
        b = b.transition(a);
        z = z.transition(a);
        E = E.transition(a);
        S = S.transition(a);
        Z = Z.transition(a).attr("opacity", 0.000001).attr("transform", function (t) {
          if (isFinite(t = x(t))) {
            return v(t + f);
          } else {
            return this.getAttribute("transform");
          }
        });
        k.attr("opacity", 0.000001).attr("transform", function (t) {
          var n = this.parentNode.__axis;
          return v((n && isFinite(n = n(t)) ? n : x(t)) + f);
        });
      }
      Z.remove();
      b.attr("d", t === 4 || t === 2 ? l ? "M" + p * l + "," + g + "H" + f + "V" + w + "H" + p * l : "M" + f + "," + g + "V" + w : l ? "M" + g + "," + p * l + "V" + f + "H" + w + "V" + p * l : "M" + g + "," + f + "H" + w);
      z.attr("opacity", 1).attr("transform", function (t) {
        return v(x(t) + f);
      });
      E.attr(_ + "2", p * o);
      S.attr(_, p * m).text(d);
      A.filter(c).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === 2 ? "start" : t === 4 ? "end" : "middle");
      A.each(function () {
        this.__axis = x;
      });
    }
    d.scale = function (t) {
      if (arguments.length) {
        n = t;
        return d;
      } else {
        return n;
      }
    };
    d.ticks = function () {
      e = Array.from(arguments);
      return d;
    };
    d.tickArguments = function (t) {
      if (arguments.length) {
        e = t == null ? [] : Array.from(t);
        return d;
      } else {
        return e.slice();
      }
    };
    d.tickValues = function (t) {
      if (arguments.length) {
        r = t == null ? null : Array.from(t);
        return d;
      } else {
        return r && r.slice();
      }
    };
    d.tickFormat = function (t) {
      if (arguments.length) {
        i = t;
        return d;
      } else {
        return i;
      }
    };
    d.tickSize = function (t) {
      if (arguments.length) {
        o = l = +t;
        return d;
      } else {
        return o;
      }
    };
    d.tickSizeInner = function (t) {
      if (arguments.length) {
        o = +t;
        return d;
      } else {
        return o;
      }
    };
    d.tickSizeOuter = function (t) {
      if (arguments.length) {
        l = +t;
        return d;
      } else {
        return l;
      }
    };
    d.tickPadding = function (t) {
      if (arguments.length) {
        h = +t;
        return d;
      } else {
        return h;
      }
    };
    d.offset = function (t) {
      if (arguments.length) {
        f = +t;
        return d;
      } else {
        return f;
      }
    };
    return d;
  }
  function h(t) {
    return l(1, t);
  }
  function f(t) {
    return l(3, t);
  }
  function p() {}
  function _(t) {
    if (t == null) {
      return p;
    } else {
      return function () {
        return this.querySelector(t);
      };
    }
  }
  function v() {
    return [];
  }
  function d(t) {
    if (t == null) {
      return v;
    } else {
      return function () {
        return this.querySelectorAll(t);
      };
    }
  }
  function m(t) {
    return function () {
      return this.matches(t);
    };
  }
  function y(t) {
    return function (n) {
      return n.matches(t);
    };
  }
  var g = Array.prototype.find;
  function w() {
    return this.firstElementChild;
  }
  var x = Array.prototype.filter;
  function A() {
    return Array.from(this.children);
  }
  function b(t) {
    return Array(t.length);
  }
  function z(t, n) {
    this.ownerDocument = t.ownerDocument;
    this.namespaceURI = t.namespaceURI;
    this._next = null;
    this._parent = t;
    this.__data__ = n;
  }
  function Z(t, n, e, r, i, o) {
    var u;
    var a = 0;
    var s = n.length;
    var c = o.length;
    for (; a < c; ++a) {
      if (u = n[a]) {
        u.__data__ = o[a];
        r[a] = u;
      } else {
        e[a] = new z(t, o[a]);
      }
    }
    for (; a < s; ++a) {
      if (u = n[a]) {
        i[a] = u;
      }
    }
  }
  function k(t, n, e, r, i, o, u) {
    var a;
    var s;
    var c;
    var l = new Map();
    var h = n.length;
    var f = o.length;
    var p = Array(h);
    for (a = 0; a < h; ++a) {
      if (s = n[a]) {
        p[a] = c = u.call(s, s.__data__, a, n) + "";
        if (l.has(c)) {
          i[a] = s;
        } else {
          l.set(c, s);
        }
      }
    }
    for (a = 0; a < f; ++a) {
      c = u.call(t, o[a], a, o) + "";
      if (s = l.get(c)) {
        r[a] = s;
        s.__data__ = o[a];
        l.delete(c);
      } else {
        e[a] = new z(t, o[a]);
      }
    }
    for (a = 0; a < h; ++a) {
      if ((s = n[a]) && l.get(p[a]) === s) {
        i[a] = s;
      }
    }
  }
  function E(t) {
    return t.__data__;
  }
  function S(t, n) {
    if (t < n) {
      return -1;
    } else if (t > n) {
      return 1;
    } else if (t >= n) {
      return 0;
    } else {
      return NaN;
    }
  }
  z.prototype = {
    constructor: z,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    }
  };
  var M = "http://www.w3.org/1999/xhtml";
  var T = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: M,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function N(t) {
    var n = t += "";
    var e = n.indexOf(":");
    if (e >= 0 && (n = t.slice(0, e)) !== "xmlns") {
      t = t.slice(e + 1);
    }
    if (T.hasOwnProperty(n)) {
      return {
        space: T[n],
        local: t
      };
    } else {
      return t;
    }
  }
  function C(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }
  function P(t, n) {
    return t.style.getPropertyValue(n) || C(t).getComputedStyle(t, null).getPropertyValue(n);
  }
  function B(t) {
    return t.trim().split(/^|\s+/);
  }
  function D(t) {
    return t.classList || new L(t);
  }
  function L(t) {
    this._node = t;
    this._names = B(t.getAttribute("class") || "");
  }
  function V(t, n) {
    var e = D(t);
    var r = -1;
    var i = n.length;
    while (++r < i) {
      e.add(n[r]);
    }
  }
  function Y(t, n) {
    var e = D(t);
    var r = -1;
    var i = n.length;
    while (++r < i) {
      e.remove(n[r]);
    }
  }
  function O() {
    this.textContent = "";
  }
  function X() {
    this.innerHTML = "";
  }
  function H() {
    if (this.nextSibling) {
      this.parentNode.appendChild(this);
    }
  }
  function q() {
    if (this.previousSibling) {
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
  }
  function I(t) {
    var n = N(t);
    return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (t) {
      return function () {
        var n = this.ownerDocument;
        var e = this.namespaceURI;
        if (e === M && n.documentElement.namespaceURI === M) {
          return n.createElement(t);
        } else {
          return n.createElementNS(e, t);
        }
      };
    })(n);
  }
  function F() {
    return null;
  }
  function U() {
    var t = this.parentNode;
    if (t) {
      t.removeChild(this);
    }
  }
  function j() {
    var t = this.cloneNode(false);
    var n = this.parentNode;
    if (n) {
      return n.insertBefore(t, this.nextSibling);
    } else {
      return t;
    }
  }
  function R() {
    var t = this.cloneNode(true);
    var n = this.parentNode;
    if (n) {
      return n.insertBefore(t, this.nextSibling);
    } else {
      return t;
    }
  }
  function K(t) {
    return function () {
      var n = this.__on;
      if (n) {
        var e;
        var r = 0;
        var i = -1;
        var o = n.length;
        for (; r < o; ++r) {
          e = n[r];
          if (t.type && e.type !== t.type || e.name !== t.name) {
            n[++i] = e;
          } else {
            this.removeEventListener(e.type, e.listener, e.options);
          }
        }
        if (++i) {
          n.length = i;
        } else {
          delete this.__on;
        }
      }
    };
  }
  function W(t, n, e) {
    return function () {
      var r;
      var i = this.__on;
      function o(t) {
        n.call(this, t, this.__data__);
      }
      if (i) {
        var u = 0;
        var a = i.length;
        for (; u < a; ++u) {
          if ((r = i[u]).type === t.type && r.name === t.name) {
            this.removeEventListener(r.type, r.listener, r.options);
            this.addEventListener(r.type, r.listener = o, r.options = e);
            r.value = n;
            return;
          }
        }
      }
      this.addEventListener(t.type, o, e);
      r = {
        type: t.type,
        name: t.name,
        value: n,
        listener: o,
        options: e
      };
      if (i) {
        i.push(r);
      } else {
        this.__on = [r];
      }
    };
  }
  function G(t, n, e) {
    var r = C(t);
    var i = r.CustomEvent;
    if (typeof i == "function") {
      i = new i(n, e);
    } else {
      i = r.document.createEvent("Event");
      if (e) {
        i.initEvent(n, e.bubbles, e.cancelable);
        i.detail = e.detail;
      } else {
        i.initEvent(n, false, false);
      }
    }
    t.dispatchEvent(i);
  }
  L.prototype = {
    add: function (t) {
      if (this._names.indexOf(t) < 0) {
        this._names.push(t);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function (t) {
      var n = this._names.indexOf(t);
      if (n >= 0) {
        this._names.splice(n, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    }
  };
  var $ = [null];
  function Q(t, n) {
    this._groups = t;
    this._parents = n;
  }
  function J() {
    return new Q([[document.documentElement]], $);
  }
  Q.prototype = J.prototype = {
    constructor: Q,
    select: function (t) {
      if (typeof t != "function") {
        t = _(t);
      }
      var n = this._groups;
      var e = n.length;
      var r = Array(e);
      var i = 0;
      for (; i < e; ++i) {
        var o;
        var u;
        var a = n[i];
        var s = a.length;
        var c = r[i] = Array(s);
        var l = 0;
        for (; l < s; ++l) {
          if ((o = a[l]) && (u = t.call(o, o.__data__, l, a))) {
            if ("__data__" in o) {
              u.__data__ = o.__data__;
            }
            c[l] = u;
          }
        }
      }
      return new Q(r, this._parents);
    },
    selectAll: function (t) {
      if (typeof t == "function") {
        var n;
        n = t;
        t = function () {
          var t;
          t = n.apply(this, arguments);
          if (t == null) {
            return [];
          } else if (Array.isArray(t)) {
            return t;
          } else {
            return Array.from(t);
          }
        };
      } else {
        t = d(t);
      }
      var e = this._groups;
      var r = e.length;
      var i = [];
      var o = [];
      var u = 0;
      for (; u < r; ++u) {
        var a;
        var s = e[u];
        var c = s.length;
        var l = 0;
        for (; l < c; ++l) {
          if (a = s[l]) {
            i.push(t.call(a, a.__data__, l, s));
            o.push(a);
          }
        }
      }
      return new Q(i, o);
    },
    selectChild: function (t) {
      var n;
      return this.select(t == null ? w : (n = typeof t == "function" ? t : y(t), function () {
        return g.call(this.children, n);
      }));
    },
    selectChildren: function (t) {
      var n;
      return this.selectAll(t == null ? A : (n = typeof t == "function" ? t : y(t), function () {
        return x.call(this.children, n);
      }));
    },
    filter: function (t) {
      if (typeof t != "function") {
        t = m(t);
      }
      var n = this._groups;
      var e = n.length;
      var r = Array(e);
      var i = 0;
      for (; i < e; ++i) {
        var o;
        var u = n[i];
        var a = u.length;
        var s = r[i] = [];
        var c = 0;
        for (; c < a; ++c) {
          if ((o = u[c]) && t.call(o, o.__data__, c, u)) {
            s.push(o);
          }
        }
      }
      return new Q(r, this._parents);
    },
    data: function (t, n) {
      if (!arguments.length) {
        return Array.from(this, E);
      }
      var e = n ? k : Z;
      var r = this._parents;
      var i = this._groups;
      if (typeof t != "function") {
        y = t;
        t = function () {
          return y;
        };
      }
      var o = i.length;
      var u = Array(o);
      var a = Array(o);
      var s = Array(o);
      var c = 0;
      for (; c < o; ++c) {
        var l = r[c];
        var h = i[c];
        var f = h.length;
        var p = typeof (m = t.call(l, l && l.__data__, c, r)) == "object" && "length" in m ? m : Array.from(m);
        var _ = p.length;
        var v = a[c] = Array(_);
        var d = u[c] = Array(_);
        e(l, h, v, d, s[c] = Array(f), p, n);
        var m;
        var y;
        var g;
        var w;
        var x = 0;
        var A = 0;
        for (; x < _; ++x) {
          if (g = v[x]) {
            for (x >= A && (A = x + 1); !(w = d[A]) && ++A < _;);
            g._next = w || null;
          }
        }
      }
      (u = new Q(u, r))._enter = a;
      u._exit = s;
      return u;
    },
    enter: function () {
      return new Q(this._enter || this._groups.map(b), this._parents);
    },
    exit: function () {
      return new Q(this._exit || this._groups.map(b), this._parents);
    },
    join: function (t, n, e) {
      var r = this.enter();
      var i = this;
      var o = this.exit();
      if (typeof t == "function") {
        if (r = t(r)) {
          r = r.selection();
        }
      } else {
        r = r.append(t + "");
      }
      if (n != null && (i = n(i))) {
        i = i.selection();
      }
      if (e == null) {
        o.remove();
      } else {
        e(o);
      }
      if (r && i) {
        return r.merge(i).order();
      } else {
        return i;
      }
    },
    merge: function (t) {
      var n = t.selection ? t.selection() : t;
      var e = this._groups;
      var r = n._groups;
      var i = e.length;
      var o = r.length;
      var u = Math.min(i, o);
      var a = Array(i);
      var s = 0;
      for (; s < u; ++s) {
        var c;
        var l = e[s];
        var h = r[s];
        var f = l.length;
        var p = a[s] = Array(f);
        var _ = 0;
        for (; _ < f; ++_) {
          if (c = l[_] || h[_]) {
            p[_] = c;
          }
        }
      }
      for (; s < i; ++s) {
        a[s] = e[s];
      }
      return new Q(a, this._parents);
    },
    selection: function () {
      return this;
    },
    order: function () {
      var t = this._groups;
      var n = -1;
      var e = t.length;
      while (++n < e) {
        var r;
        var i = t[n];
        var o = i.length - 1;
        var u = i[o];
        while (--o >= 0) {
          if (r = i[o]) {
            if (u && r.compareDocumentPosition(u) ^ 4) {
              u.parentNode.insertBefore(r, u);
            }
            u = r;
          }
        }
      }
      return this;
    },
    sort: function (t) {
      function n(n, e) {
        if (n && e) {
          return t(n.__data__, e.__data__);
        } else {
          return !n - !e;
        }
      }
      t ||= S;
      var e = this._groups;
      var r = e.length;
      var i = Array(r);
      var o = 0;
      for (; o < r; ++o) {
        var u;
        var a = e[o];
        var s = a.length;
        var c = i[o] = Array(s);
        var l = 0;
        for (; l < s; ++l) {
          if (u = a[l]) {
            c[l] = u;
          }
        }
        c.sort(n);
      }
      return new Q(i, this._parents).order();
    },
    call: function () {
      var t = arguments[0];
      arguments[0] = this;
      t.apply(null, arguments);
      return this;
    },
    nodes: function () {
      return Array.from(this);
    },
    node: function () {
      var t = this._groups;
      var n = 0;
      var e = t.length;
      for (; n < e; ++n) {
        var r = t[n];
        var i = 0;
        var o = r.length;
        for (; i < o; ++i) {
          var u = r[i];
          if (u) {
            return u;
          }
        }
      }
      return null;
    },
    size: function () {
      let t = 0;
      for (let n of this) {
        ++t;
      }
      return t;
    },
    empty: function () {
      return !this.node();
    },
    each: function (t) {
      var n = this._groups;
      var e = 0;
      var r = n.length;
      for (; e < r; ++e) {
        var i;
        var o = n[e];
        var u = 0;
        var a = o.length;
        for (; u < a; ++u) {
          if (i = o[u]) {
            t.call(i, i.__data__, u, o);
          }
        }
      }
      return this;
    },
    attr: function (t, n) {
      var e = N(t);
      if (arguments.length < 2) {
        var r = this.node();
        if (e.local) {
          return r.getAttributeNS(e.space, e.local);
        } else {
          return r.getAttribute(e);
        }
      }
      return this.each((n == null ? e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : typeof n == "function" ? e.local ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          if (e == null) {
            this.removeAttributeNS(t.space, t.local);
          } else {
            this.setAttributeNS(t.space, t.local, e);
          }
        };
      } : function (t, n) {
        return function () {
          var e = n.apply(this, arguments);
          if (e == null) {
            this.removeAttribute(t);
          } else {
            this.setAttribute(t, e);
          }
        };
      } : e.local ? function (t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      } : function (t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      })(e, n));
    },
    style: function (t, n, e) {
      if (arguments.length > 1) {
        return this.each((n == null ? function (t) {
          return function () {
            this.style.removeProperty(t);
          };
        } : typeof n == "function" ? function (t, n, e) {
          return function () {
            var r = n.apply(this, arguments);
            if (r == null) {
              this.style.removeProperty(t);
            } else {
              this.style.setProperty(t, r, e);
            }
          };
        } : function (t, n, e) {
          return function () {
            this.style.setProperty(t, n, e);
          };
        })(t, n, e == null ? "" : e));
      } else {
        return P(this.node(), t);
      }
    },
    property: function (t, n) {
      if (arguments.length > 1) {
        return this.each((n == null ? function (t) {
          return function () {
            delete this[t];
          };
        } : typeof n == "function" ? function (t, n) {
          return function () {
            var e = n.apply(this, arguments);
            if (e == null) {
              delete this[t];
            } else {
              this[t] = e;
            }
          };
        } : function (t, n) {
          return function () {
            this[t] = n;
          };
        })(t, n));
      } else {
        return this.node()[t];
      }
    },
    classed: function (t, n) {
      var e = B(t + "");
      if (arguments.length < 2) {
        var r = D(this.node());
        var i = -1;
        var o = e.length;
        while (++i < o) {
          if (!r.contains(e[i])) {
            return false;
          }
        }
        return true;
      }
      return this.each((typeof n == "function" ? function (t, n) {
        return function () {
          (n.apply(this, arguments) ? V : Y)(this, t);
        };
      } : n ? function (t) {
        return function () {
          V(this, t);
        };
      } : function (t) {
        return function () {
          Y(this, t);
        };
      })(e, n));
    },
    text: function (t) {
      if (arguments.length) {
        return this.each(t == null ? O : (typeof t == "function" ? function (t) {
          return function () {
            var n = t.apply(this, arguments);
            this.textContent = n == null ? "" : n;
          };
        } : function (t) {
          return function () {
            this.textContent = t;
          };
        })(t));
      } else {
        return this.node().textContent;
      }
    },
    html: function (t) {
      if (arguments.length) {
        return this.each(t == null ? X : (typeof t == "function" ? function (t) {
          return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = n == null ? "" : n;
          };
        } : function (t) {
          return function () {
            this.innerHTML = t;
          };
        })(t));
      } else {
        return this.node().innerHTML;
      }
    },
    raise: function () {
      return this.each(H);
    },
    lower: function () {
      return this.each(q);
    },
    append: function (t) {
      var n = typeof t == "function" ? t : I(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function (t, n) {
      var e = typeof t == "function" ? t : I(t);
      var r = n == null ? F : typeof n == "function" ? n : _(n);
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    },
    remove: function () {
      return this.each(U);
    },
    clone: function (t) {
      return this.select(t ? R : j);
    },
    datum: function (t) {
      if (arguments.length) {
        return this.property("__data__", t);
      } else {
        return this.node().__data__;
      }
    },
    on: function (t, n, e) {
      var r;
      var i;
      var o = (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "";
        var e = t.indexOf(".");
        if (e >= 0) {
          n = t.slice(e + 1);
          t = t.slice(0, e);
        }
        return {
          type: t,
          name: n
        };
      });
      var u = o.length;
      if (arguments.length < 2) {
        var a = this.node().__on;
        if (a) {
          var s;
          var c = 0;
          var l = a.length;
          for (; c < l; ++c) {
            r = 0;
            s = a[c];
            for (; r < u; ++r) {
              if ((i = o[r]).type === s.type && i.name === s.name) {
                return s.value;
              }
            }
          }
        }
        return;
      }
      r = 0;
      a = n ? W : K;
      for (; r < u; ++r) {
        this.each(a(o[r], n, e));
      }
      return this;
    },
    dispatch: function (t, n) {
      return this.each((typeof n == "function" ? function (t, n) {
        return function () {
          return G(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return G(this, t, n);
        };
      })(t, n));
    },
    [Symbol.iterator]: function* () {
      var t = this._groups;
      var n = 0;
      var e = t.length;
      for (; n < e; ++n) {
        var r;
        var i = t[n];
        var o = 0;
        var u = i.length;
        for (; o < u; ++o) {
          if (r = i[o]) {
            yield r;
          }
        }
      }
    }
  };
  var eventDispatcherFactory = require("event-dispatcher-factory") /*id: 522958*/;
  var timerSchedulerUtils = require("timer-scheduler-utils") /*id: 301426*/;
  function te(t, n, e) {
    var r = new timerSchedulerUtils.Timer();
    n = n == null ? 0 : +n;
    r.restart(e => {
      r.stop();
      t(e + n);
    }, n, e);
    return r;
  }
  var tr = eventDispatcherFactory.createDispatcher("start", "end", "cancel", "interrupt");
  var ti = [];
  function to(t, n, e, r, i, o) {
    var u = t.__transition;
    if (u) {
      if (e in u) {
        return;
      }
    } else {
      t.__transition = {};
    }
    (function (t, n, e) {
      var r;
      var i = t.__transition;
      function o(s) {
        var c;
        var l;
        var h;
        var f;
        if (e.state !== 1) {
          return a();
        }
        for (c in i) {
          if ((f = i[c]).name === e.name) {
            if (f.state === 3) {
              return te(o);
            }
            if (f.state === 4) {
              f.state = 6;
              f.timer.stop();
              f.on.call("interrupt", t, t.__data__, f.index, f.group);
              delete i[c];
            } else if (+c < n) {
              f.state = 6;
              f.timer.stop();
              f.on.call("cancel", t, t.__data__, f.index, f.group);
              delete i[c];
            }
          }
        }
        te(function () {
          if (e.state === 3) {
            e.state = 4;
            e.timer.restart(u, e.delay, e.time);
            u(s);
          }
        });
        e.state = 2;
        e.on.call("start", t, t.__data__, e.index, e.group);
        if (e.state === 2) {
          c = 0;
          e.state = 3;
          r = Array(h = e.tween.length);
          l = -1;
          for (; c < h; ++c) {
            if (f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) {
              r[++l] = f;
            }
          }
          r.length = l + 1;
        }
      }
      function u(n) {
        var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = 5, 1);
        var o = -1;
        var u = r.length;
        while (++o < u) {
          r[o].call(t, i);
        }
        if (e.state === 5) {
          e.on.call("end", t, t.__data__, e.index, e.group);
          a();
        }
      }
      function a() {
        e.state = 6;
        e.timer.stop();
        delete i[n];
        for (var r in i) {
          return;
        }
        delete t.__transition;
      }
      i[n] = e;
      e.timer = timerSchedulerUtils.timer(function (t) {
        e.state = 1;
        e.timer.restart(o, e.delay, e.time);
        if (e.delay <= t) {
          o(t - e.delay);
        }
      }, 0, e.time);
    })(t, e, {
      name: n,
      index: r,
      group: i,
      on: tr,
      tween: ti,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: 0
    });
  }
  function tu(t, n) {
    var e = ts(t, n);
    if (e.state > 0) {
      throw Error("too late; already scheduled");
    }
    return e;
  }
  function ta(t, n) {
    var e = ts(t, n);
    if (e.state > 3) {
      throw Error("too late; already running");
    }
    return e;
  }
  function ts(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) {
      throw Error("transition not found");
    }
    return e;
  }
  function tc(t, n) {
    var e;
    var r;
    var i;
    var o = t.__transition;
    var u = true;
    if (o) {
      n = n == null ? null : n + "";
      for (i in o) {
        if ((e = o[i]).name !== n) {
          u = false;
          continue;
        }
        r = e.state > 2 && e.state < 5;
        e.state = 6;
        e.timer.stop();
        e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group);
        delete o[i];
      }
      if (u) {
        delete t.__transition;
      }
    }
  }
  var transformInterpolationUtils = require("transform-interpolation-utils") /*id: 619801*/;
  function th(t, n, e) {
    var r = t._id;
    t.each(function () {
      var t = ta(this, r);
      (t.value ||= {})[n] = e.apply(this, arguments);
    });
    return function (t) {
      return ts(t, r).value[n];
    };
  }
  var colorFormatConverter_1 = require("color-format-converter_1") /*id: 55571*/;
  var linearInterpolation_2 = require("linear-interpolation_2") /*id: 948395*/;
  var colorInterpolationUtils = require("color-interpolation-utils") /*id: 450141*/;
  var stringNumericLerp = require("string-numeric-lerp") /*id: 296338*/;
  function td(t, n) {
    var e;
    return (typeof n == "number" ? linearInterpolation_2.createLerp : n instanceof colorFormatConverter_1.parseColor ? colorInterpolationUtils.interpolateColor : (e = colorFormatConverter_1.parseColor(n)) ? (n = e, colorInterpolationUtils.interpolateColor) : stringNumericLerp.stringNumericLerp)(t, n);
  }
  var tm = J.prototype.constructor;
  function ty(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  var tg = 0;
  function tw(t, n, e, r) {
    this._groups = t;
    this._parents = n;
    this._name = e;
    this._id = r;
  }
  var tx = J.prototype;
  tw.prototype = function (t) {
    return J().transition(t);
  }.prototype = {
    constructor: tw,
    select: function (t) {
      var n = this._name;
      var e = this._id;
      if (typeof t != "function") {
        t = _(t);
      }
      var r = this._groups;
      var i = r.length;
      var o = Array(i);
      var u = 0;
      for (; u < i; ++u) {
        var a;
        var s;
        var c = r[u];
        var l = c.length;
        var h = o[u] = Array(l);
        var f = 0;
        for (; f < l; ++f) {
          if ((a = c[f]) && (s = t.call(a, a.__data__, f, c))) {
            if ("__data__" in a) {
              s.__data__ = a.__data__;
            }
            h[f] = s;
            to(h[f], n, e, f, h, ts(a, e));
          }
        }
      }
      return new tw(o, this._parents, n, e);
    },
    selectAll: function (t) {
      var n = this._name;
      var e = this._id;
      if (typeof t != "function") {
        t = d(t);
      }
      var r = this._groups;
      var i = r.length;
      var o = [];
      var u = [];
      var a = 0;
      for (; a < i; ++a) {
        var s;
        var c = r[a];
        var l = c.length;
        var h = 0;
        for (; h < l; ++h) {
          if (s = c[h]) {
            var f;
            var p = t.call(s, s.__data__, h, c);
            var _ = ts(s, e);
            var v = 0;
            var m = p.length;
            for (; v < m; ++v) {
              if (f = p[v]) {
                to(f, n, e, v, p, _);
              }
            }
            o.push(p);
            u.push(s);
          }
        }
      }
      return new tw(o, u, n, e);
    },
    selectChild: tx.selectChild,
    selectChildren: tx.selectChildren,
    filter: function (t) {
      if (typeof t != "function") {
        t = m(t);
      }
      var n = this._groups;
      var e = n.length;
      var r = Array(e);
      var i = 0;
      for (; i < e; ++i) {
        var o;
        var u = n[i];
        var a = u.length;
        var s = r[i] = [];
        var c = 0;
        for (; c < a; ++c) {
          if ((o = u[c]) && t.call(o, o.__data__, c, u)) {
            s.push(o);
          }
        }
      }
      return new tw(r, this._parents, this._name, this._id);
    },
    merge: function (t) {
      if (t._id !== this._id) {
        throw Error();
      }
      var n = this._groups;
      var e = t._groups;
      var r = n.length;
      var i = e.length;
      var o = Math.min(r, i);
      var u = Array(r);
      var a = 0;
      for (; a < o; ++a) {
        var s;
        var c = n[a];
        var l = e[a];
        var h = c.length;
        var f = u[a] = Array(h);
        var p = 0;
        for (; p < h; ++p) {
          if (s = c[p] || l[p]) {
            f[p] = s;
          }
        }
      }
      for (; a < r; ++a) {
        u[a] = n[a];
      }
      return new tw(u, this._parents, this._name, this._id);
    },
    selection: function () {
      return new tm(this._groups, this._parents);
    },
    transition: function () {
      var t = this._name;
      var n = this._id;
      var e = ++tg;
      var r = this._groups;
      var i = r.length;
      var o = 0;
      for (; o < i; ++o) {
        var u;
        var a = r[o];
        var s = a.length;
        var c = 0;
        for (; c < s; ++c) {
          if (u = a[c]) {
            var l = ts(u, n);
            to(u, t, e, c, a, {
              time: l.time + l.delay + l.duration,
              delay: 0,
              duration: l.duration,
              ease: l.ease
            });
          }
        }
      }
      return new tw(r, this._parents, t, e);
    },
    call: tx.call,
    nodes: tx.nodes,
    node: tx.node,
    size: tx.size,
    empty: tx.empty,
    each: tx.each,
    on: function (t, n) {
      var e;
      var r;
      var i;
      var o = this._id;
      if (arguments.length < 2) {
        return ts(this.node(), o).on.on(t);
      } else {
        return this.each((i = (t + "").trim().split(/^|\s+/).every(function (t) {
          var n = t.indexOf(".");
          if (n >= 0) {
            t = t.slice(0, n);
          }
          return !t || t === "start";
        }) ? tu : ta, function () {
          var u = i(this, o);
          var a = u.on;
          if (a !== e) {
            (r = (e = a).copy()).on(t, n);
          }
          u.on = r;
        }));
      }
    },
    attr: function (t, n) {
      var e = N(t);
      var r = e === "transform" ? transformInterpolationUtils.parseSvgTransform : td;
      return this.attrTween(t, typeof n == "function" ? (e.local ? function (t, n, e) {
        var r;
        var i;
        var o;
        return function () {
          var u;
          var a;
          var s = e(this);
          if (s == null) {
            this.removeAttributeNS(t.space, t.local);
            return;
          } else if ((u = this.getAttributeNS(t.space, t.local)) === (a = s + "")) {
            return null;
          } else if (u === r && a === i) {
            return o;
          } else {
            i = a;
            return o = n(r = u, s);
          }
        };
      } : function (t, n, e) {
        var r;
        var i;
        var o;
        return function () {
          var u;
          var a;
          var s = e(this);
          if (s == null) {
            this.removeAttribute(t);
            return;
          } else if ((u = this.getAttribute(t)) === (a = s + "")) {
            return null;
          } else if (u === r && a === i) {
            return o;
          } else {
            i = a;
            return o = n(r = u, s);
          }
        };
      })(e, r, th(this, "attr." + t, n)) : n == null ? (e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      })(e) : (e.local ? function (t, n, e) {
        var r;
        var i;
        var o = e + "";
        return function () {
          var u = this.getAttributeNS(t.space, t.local);
          if (u === o) {
            return null;
          } else if (u === r) {
            return i;
          } else {
            return i = n(r = u, e);
          }
        };
      } : function (t, n, e) {
        var r;
        var i;
        var o = e + "";
        return function () {
          var u = this.getAttribute(t);
          if (u === o) {
            return null;
          } else if (u === r) {
            return i;
          } else {
            return i = n(r = u, e);
          }
        };
      })(e, r, n));
    },
    attrTween: function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) {
        return (e = this.tween(e)) && e._value;
      }
      if (n == null) {
        return this.tween(e, null);
      }
      if (typeof n != "function") {
        throw Error();
      }
      var r = N(t);
      return this.tween(e, (r.local ? function (t, n) {
        var e;
        var r;
        function i() {
          var i = n.apply(this, arguments);
          if (i !== r) {
            e = (r = i) && function (n) {
              this.setAttributeNS(t.space, t.local, i.call(this, n));
            };
          }
          return e;
        }
        i._value = n;
        return i;
      } : function (t, n) {
        var e;
        var r;
        function i() {
          var i = n.apply(this, arguments);
          if (i !== r) {
            e = (r = i) && function (n) {
              this.setAttribute(t, i.call(this, n));
            };
          }
          return e;
        }
        i._value = n;
        return i;
      })(r, n));
    },
    style: function (t, n, e) {
      var r;
      var i;
      var o;
      var u;
      var a;
      var s;
      var c;
      var l;
      var h;
      var f;
      var p;
      var _;
      var v;
      var d;
      var m;
      var y;
      var g;
      var w;
      var x;
      var A;
      var b;
      var z = (t += "") == "transform" ? transformInterpolationUtils.parseCssTransform : td;
      if (n == null) {
        return this.styleTween(t, (r = t, function () {
          var t = P(this, r);
          this.style.removeProperty(r);
          var n = P(this, r);
          if (t === n) {
            return null;
          } else if (t === i && n === o) {
            return u;
          } else {
            return u = z(i = t, o = n);
          }
        })).on("end.style." + t, ty(t));
      } else if (typeof n == "function") {
        return this.styleTween(t, (a = t, s = th(this, "style." + t, n), function () {
          var t = P(this, a);
          var n = s(this);
          var e = n + "";
          if (n == null) {
            this.style.removeProperty(a);
            e = n = P(this, a);
          }
          if (t === e) {
            return null;
          } else if (t === c && e === l) {
            return h;
          } else {
            l = e;
            return h = z(c = t, n);
          }
        })).each((f = this._id, g = "end." + (y = "style." + (p = t)), function () {
          var t = ta(this, f);
          var n = t.on;
          var e = t.value[y] == null ? m ||= ty(p) : undefined;
          if (n !== _ || d !== e) {
            (v = (_ = n).copy()).on(g, d = e);
          }
          t.on = v;
        }));
      } else {
        return this.styleTween(t, (w = t, b = n + "", function () {
          var t = P(this, w);
          if (t === b) {
            return null;
          } else if (t === x) {
            return A;
          } else {
            return A = z(x = t, n);
          }
        }), e).on("end.style." + t, null);
      }
    },
    styleTween: function (t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) {
        return (r = this.tween(r)) && r._value;
      }
      if (n == null) {
        return this.tween(r, null);
      }
      if (typeof n != "function") {
        throw Error();
      }
      return this.tween(r, function (t, n, e) {
        var r;
        var i;
        function o() {
          var o = n.apply(this, arguments);
          if (o !== i) {
            r = (i = o) && function (n) {
              this.style.setProperty(t, o.call(this, n), e);
            };
          }
          return r;
        }
        o._value = n;
        return o;
      }(t, n, e == null ? "" : e));
    },
    text: function (t) {
      var n;
      var e;
      return this.tween("text", typeof t == "function" ? (n = th(this, "text", t), function () {
        var t = n(this);
        this.textContent = t == null ? "" : t;
      }) : (e = t == null ? "" : t + "", function () {
        this.textContent = e;
      }));
    },
    textTween: function (t) {
      var n = "text";
      if (arguments.length < 1) {
        return (n = this.tween(n)) && n._value;
      }
      if (t == null) {
        return this.tween(n, null);
      }
      if (typeof t != "function") {
        throw Error();
      }
      return this.tween(n, function (t) {
        var n;
        var e;
        function r() {
          var r = t.apply(this, arguments);
          if (r !== e) {
            n = (e = r) && function (t) {
              this.textContent = r.call(this, t);
            };
          }
          return n;
        }
        r._value = t;
        return r;
      }(t));
    },
    remove: function () {
      var t;
      return this.on("end.remove", (t = this._id, function () {
        var n = this.parentNode;
        for (var e in this.__transition) {
          if (+e !== t) {
            return;
          }
        }
        if (n) {
          n.removeChild(this);
        }
      }));
    },
    tween: function (t, n) {
      var e = this._id;
      t += "";
      if (arguments.length < 2) {
        var r;
        var i = ts(this.node(), e).tween;
        var o = 0;
        var u = i.length;
        for (; o < u; ++o) {
          if ((r = i[o]).name === t) {
            return r.value;
          }
        }
        return null;
      }
      return this.each((n == null ? function (t, n) {
        var e;
        var r;
        return function () {
          var i = ta(this, t);
          var o = i.tween;
          if (o !== e) {
            r = e = o;
            var u = 0;
            var a = r.length;
            for (; u < a; ++u) {
              if (r[u].name === n) {
                (r = r.slice()).splice(u, 1);
                break;
              }
            }
          }
          i.tween = r;
        };
      } : function (t, n, e) {
        var r;
        var i;
        if (typeof e != "function") {
          throw Error();
        }
        return function () {
          var o = ta(this, t);
          var u = o.tween;
          if (u !== r) {
            i = (r = u).slice();
            var a = {
              name: n,
              value: e
            };
            var s = 0;
            var c = i.length;
            for (; s < c; ++s) {
              if (i[s].name === n) {
                i[s] = a;
                break;
              }
            }
            if (s === c) {
              i.push(a);
            }
          }
          o.tween = i;
        };
      })(e, t, n));
    },
    delay: function (t) {
      var n = this._id;
      if (arguments.length) {
        return this.each((typeof t == "function" ? function (t, n) {
          return function () {
            tu(this, t).delay = +n.apply(this, arguments);
          };
        } : function (t, n) {
          n *= 1;
          return function () {
            tu(this, t).delay = n;
          };
        })(n, t));
      } else {
        return ts(this.node(), n).delay;
      }
    },
    duration: function (t) {
      var n = this._id;
      if (arguments.length) {
        return this.each((typeof t == "function" ? function (t, n) {
          return function () {
            ta(this, t).duration = +n.apply(this, arguments);
          };
        } : function (t, n) {
          n *= 1;
          return function () {
            ta(this, t).duration = n;
          };
        })(n, t));
      } else {
        return ts(this.node(), n).duration;
      }
    },
    ease: function (t) {
      var n = this._id;
      if (arguments.length) {
        return this.each(function (t, n) {
          if (typeof n != "function") {
            throw Error();
          }
          return function () {
            ta(this, t).ease = n;
          };
        }(n, t));
      } else {
        return ts(this.node(), n).ease;
      }
    },
    easeVarying: function (t) {
      var n;
      if (typeof t != "function") {
        throw Error();
      }
      return this.each((n = this._id, function () {
        var e = t.apply(this, arguments);
        if (typeof e != "function") {
          throw Error();
        }
        ta(this, n).ease = e;
      }));
    },
    end: function () {
      var t;
      var n;
      var e = this;
      var r = e._id;
      var i = e.size();
      return new Promise(function (o, u) {
        var a = {
          value: u
        };
        var s = {
          value: function () {
            if (--i == 0) {
              o();
            }
          }
        };
        e.each(function () {
          var e = ta(this, r);
          var i = e.on;
          if (i !== t) {
            (n = (t = i).copy())._.cancel.push(a);
            n._.interrupt.push(a);
            n._.end.push(s);
          }
          e.on = n;
        });
        if (i === 0) {
          o();
        }
      });
    },
    [Symbol.iterator]: tx[Symbol.iterator]
  };
  var tA = {
    time: null,
    delay: 0,
    duration: 250,
    ease: function (t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
  };
  J.prototype.interrupt = function (t) {
    return this.each(function () {
      tc(this, t);
    });
  };
  J.prototype.transition = function (t) {
    var n;
    var e;
    if (t instanceof tw) {
      n = t._id;
      t = t._name;
    } else {
      n = ++tg;
      (e = tA).time = timerSchedulerUtils.now();
      t = t == null ? null : t + "";
    }
    var r = this._groups;
    var i = r.length;
    var o = 0;
    for (; o < i; ++o) {
      var u;
      var a = r[o];
      var s = a.length;
      var c = 0;
      for (; c < s; ++c) {
        if (u = a[c]) {
          to(u, t, n, c, a, e || function (t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);) {
              if (!(t = t.parentNode)) {
                throw Error(`transition ${n} not found`);
              }
            }
            return e;
          }(u, n));
        }
      }
    }
    return new tw(r, this._parents, t, n);
  };
  let {
    abs: tb,
    max: tz,
    min: tZ
  } = Math;
  function tk(t) {
    return {
      type: t
    };
  }
  ["w", "e"].map(tk);
  ["n", "s"].map(tk);
  ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(tk);
  var numberFormatUtils_2 = require("number-format-utils_2") /*id: 100085*/;
  var hierarchyTreeCore = require("hierarchy-tree-core") /*id: 358655*/;
  var treemapPaddingLayout = require("treemap-padding-layout") /*id: 39858*/;
  var d3InterpolationRegistry = require("d3-interpolation-registry") /*id: 952480*/;
  var numberRangeUtil = require("number-range-util") /*id: 510583*/;
  var scaleConfigHelpers = require("scale-config-helpers") /*id: 666730*/;
  var scaleImplicitFactory = require("scale-implicit-factory") /*id: 436368*/;
  var linearScaleDomainTicksNice = require("linear-scale-domain-ticks-nice") /*id: 611418*/;
  var dateTimeScaleFactory = require("date-time-scale-factory") /*id: 512921*/;
  var hexColorPalette = require("hex-color-palette") /*id: 82567*/;
  var tV = require("packed-hex-color-parser") /*id: 606612*/.parseHexColors("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
  function tY(t) {
    if (typeof t == "string") {
      return new Q([[document.querySelector(t)]], [document.documentElement]);
    } else {
      return new Q([[t]], $);
    }
  }
  var arcPathGenerator = require("arc-path-generator") /*id: 489961*/;
  var lineGeneratorFactory = require("line-generator-factory") /*id: 832501*/;
  var arrayConvertUtils = require("array-convert-utils") /*id: 30870*/;
  var constantCreator_1 = require("constant-creator_1") /*id: 29801*/;
  function tI(t, n) {
    if (n < t) {
      return -1;
    } else if (n > t) {
      return 1;
    } else if (n >= t) {
      return 0;
    } else {
      return NaN;
    }
  }
  function tF(t) {
    return t;
  }
  var safeMathUtils = require("safe-math-utils") /*id: 608921*/;
  function tj() {
    var t = tF;
    var n = tI;
    var e = null;
    var r = constantCreator_1.createConstant(0);
    var i = constantCreator_1.createConstant(safeMathUtils.twoPi);
    var o = constantCreator_1.createConstant(0);
    function u(u) {
      var a;
      var s;
      var c;
      var l;
      var h;
      var f = (u = arrayConvertUtils.toArray(u)).length;
      var p = 0;
      var _ = Array(f);
      var v = Array(f);
      var d = +r.apply(this, arguments);
      var m = Math.min(safeMathUtils.twoPi, Math.max(-safeMathUtils.twoPi, i.apply(this, arguments) - d));
      var y = Math.min(Math.abs(m) / f, o.apply(this, arguments));
      var g = y * (m < 0 ? -1 : 1);
      for (a = 0; a < f; ++a) {
        if ((h = v[_[a] = a] = +t(u[a], a, u)) > 0) {
          p += h;
        }
      }
      if (n != null) {
        _.sort(function (t, e) {
          return n(v[t], v[e]);
        });
      } else if (e != null) {
        _.sort(function (t, n) {
          return e(u[t], u[n]);
        });
      }
      a = 0;
      c = p ? (m - f * g) / p : 0;
      for (; a < f; ++a, d = l) {
        l = d + ((h = v[s = _[a]]) > 0 ? h * c : 0) + g;
        v[s] = {
          data: u[s],
          index: a,
          value: h,
          startAngle: d,
          endAngle: l,
          padAngle: y
        };
      }
      return v;
    }
    u.value = function (n) {
      if (arguments.length) {
        t = typeof n == "function" ? n : constantCreator_1.createConstant(+n);
        return u;
      } else {
        return t;
      }
    };
    u.sortValues = function (t) {
      if (arguments.length) {
        n = t;
        e = null;
        return u;
      } else {
        return n;
      }
    };
    u.sort = function (t) {
      if (arguments.length) {
        e = t;
        n = null;
        return u;
      } else {
        return e;
      }
    };
    u.startAngle = function (t) {
      if (arguments.length) {
        r = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return u;
      } else {
        return r;
      }
    };
    u.endAngle = function (t) {
      if (arguments.length) {
        i = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return u;
      } else {
        return i;
      }
    };
    u.padAngle = function (t) {
      if (arguments.length) {
        o = typeof t == "function" ? t : constantCreator_1.createConstant(+t);
        return u;
      } else {
        return o;
      }
    };
    return u;
  }
  var linkPathGenerator = require("link-path-generator") /*id: 830541*/;
  var bezierCurveContextFactory = require("bezier-curve-context-factory") /*id: 939192*/;
  var bezierCurveStrategy = require("bezier-curve-strategy") /*id: 935387*/;
  var bezierCurveGenerator = require("bezier-curve-generator") /*id: 213635*/;
  var areaCurveContext = require("area-curve-context") /*id: 469551*/;
  var betaCurveGenerator = require("beta-curve-generator") /*id: 233861*/;
  var splineCurveInterpolator_1 = require("spline-curve-interpolator_1") /*id: 649926*/;
  var splineCurveInterpolator_2 = require("spline-curve-interpolator_2") /*id: 271613*/;
  var splineCurveInterpolator = require("spline-curve-interpolator") /*id: 449949*/;
  var splineCurveFactory = require("spline-curve-factory") /*id: 73002*/;
  var splineCurveInterpolator_3 = require("spline-curve-interpolator_3") /*id: 316841*/;
  var splineCurveGenerator = require("spline-curve-generator") /*id: 724731*/;
  var lineContextAdapter = require("line-context-adapter") /*id: 146614*/;
  var linePathGenerator = require("line-path-generator") /*id: 409913*/;
  var pathCurveRenderer = require("path-curve-renderer") /*id: 704678*/;
  var naturalSplineCurve = require("natural-spline-curve") /*id: 893629*/;
  var lineInterpolationFactory = require("line-interpolation-factory") /*id: 263180*/;
  var dateIntervalInstance = require("date-interval-instance") /*id: 700987*/;
  var dateSecondInterval = require("date-second-interval") /*id: 674887*/;
  var dateMinuteIntervalFactory = require("date-minute-interval-factory") /*id: 958451*/;
  var dateHourIntervalFactories = require("date-hour-interval-factories") /*id: 803362*/;
  var dateIntervalFactories = require("date-interval-factories") /*id: 202829*/;
  var weeklyDateIntervalFactories = require("weekly-date-interval-factories") /*id: 169485*/;
  var dateMonthIntervals = require("date-month-intervals") /*id: 272706*/;
  var dateTimeFormatUtils = require("date-time-format-utils") /*id: 958788*/;
  let ns = {
    capture: true,
    passive: false
  };
  function nc(t) {
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  var zoomInterpolation = require("zoom-interpolation") /*id: 842235*/;
  function nh(t, n) {
    t = function (t) {
      let n;
      while (n = t.sourceEvent) {
        t = n;
      }
      return t;
    }(t);
    if (n === undefined) {
      n = t.currentTarget;
    }
    if (n) {
      var e = n.ownerSVGElement || n;
      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        r.x = t.clientX;
        r.y = t.clientY;
        return [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y];
      }
      if (n.getBoundingClientRect) {
        var i = n.getBoundingClientRect();
        return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
      }
    }
    return [t.pageX, t.pageY];
  }
  var nf = t => () => t;
  function np(t, {
    sourceEvent: n,
    target: e,
    transform: r,
    dispatch: i
  }) {
    Object.defineProperties(this, {
      type: {
        value: t,
        enumerable: true,
        configurable: true
      },
      sourceEvent: {
        value: n,
        enumerable: true,
        configurable: true
      },
      target: {
        value: e,
        enumerable: true,
        configurable: true
      },
      transform: {
        value: r,
        enumerable: true,
        configurable: true
      },
      _: {
        value: i
      }
    });
  }
  function n_(t, n, e) {
    this.k = t;
    this.x = n;
    this.y = e;
  }
  n_.prototype = {
    constructor: n_,
    scale: function (t) {
      if (t === 1) {
        return this;
      } else {
        return new n_(this.k * t, this.x, this.y);
      }
    },
    translate: function (t, n) {
      if (t === 0 & n === 0) {
        return this;
      } else {
        return new n_(this.k, this.x + this.k * t, this.y + this.k * n);
      }
    },
    apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      return t * this.k + this.x;
    },
    applyY: function (t) {
      return t * this.k + this.y;
    },
    invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var nv = new n_(1, 0, 0);
  function nd(t) {
    while (!t.__zoom) {
      if (!(t = t.parentNode)) {
        return nv;
      }
    }
    return t.__zoom;
  }
  function nm(t) {
    t.stopImmediatePropagation();
  }
  function ny(t) {
    t.preventDefault();
    t.stopImmediatePropagation();
  }
  function ng(t) {
    return (!t.ctrlKey || t.type === "wheel") && !t.button;
  }
  function nw() {
    var t = this;
    if (t instanceof SVGElement) {
      if ((t = t.ownerSVGElement || t).hasAttribute("viewBox")) {
        return [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]];
      } else {
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
      }
    } else {
      return [[0, 0], [t.clientWidth, t.clientHeight]];
    }
  }
  function nx() {
    return this.__zoom || nv;
  }
  function nA(t) {
    return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1);
  }
  function nb() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function nz(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0];
    var i = t.invertX(n[1][0]) - e[1][0];
    var o = t.invertY(n[0][1]) - e[0][1];
    var u = t.invertY(n[1][1]) - e[1][1];
    return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u));
  }
  function nZ() {
    var t;
    var n;
    var e;
    var r = ng;
    var i = nw;
    var o = nz;
    var u = nA;
    var a = nb;
    var s = [0, Infinity];
    var c = [[-Infinity, -Infinity], [Infinity, Infinity]];
    var l = 250;
    var h = zoomInterpolation.interpolateZoom;
    var f = eventDispatcherFactory.createDispatcher("start", "zoom", "end");
    var p = 0;
    var _ = 10;
    function v(t) {
      t.property("__zoom", nx).on("wheel.zoom", A, {
        passive: false
      }).on("mousedown.zoom", b).on("dblclick.zoom", z).filter(a).on("touchstart.zoom", Z).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", E).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function d(t, n) {
      if ((n = Math.max(s[0], Math.min(s[1], n))) === t.k) {
        return t;
      } else {
        return new n_(n, t.x, t.y);
      }
    }
    function m(t, n, e) {
      var r = n[0] - e[0] * t.k;
      var i = n[1] - e[1] * t.k;
      if (r === t.x && i === t.y) {
        return t;
      } else {
        return new n_(t.k, r, i);
      }
    }
    function y(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }
    function g(t, n, e, r) {
      t.on("start.zoom", function () {
        w(this, arguments).event(r).start();
      }).on("interrupt.zoom end.zoom", function () {
        w(this, arguments).event(r).end();
      }).tween("zoom", function () {
        var t = arguments;
        var o = w(this, t).event(r);
        var u = i.apply(this, t);
        var a = e == null ? y(u) : typeof e == "function" ? e.apply(this, t) : e;
        var s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]);
        var c = this.__zoom;
        var l = typeof n == "function" ? n.apply(this, t) : n;
        var f = h(c.invert(a).concat(s / c.k), l.invert(a).concat(s / l.k));
        return function (t) {
          if (t === 1) {
            t = l;
          } else {
            var n = f(t);
            var e = s / n[2];
            t = new n_(e, a[0] - n[0] * e, a[1] - n[1] * e);
          }
          o.zoom(null, t);
        };
      });
    }
    function w(t, n, e) {
      return !e && t.__zooming || new x(t, n);
    }
    function x(t, n) {
      this.that = t;
      this.args = n;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = i.apply(t, n);
      this.taps = 0;
    }
    function A(t, ...n) {
      if (r.apply(this, arguments)) {
        var e = w(this, n).event(t);
        var i = this.__zoom;
        var a = Math.max(s[0], Math.min(s[1], i.k * Math.pow(2, u.apply(this, arguments))));
        var l = nh(t);
        if (e.wheel) {
          if (e.mouse[0][0] !== l[0] || e.mouse[0][1] !== l[1]) {
            e.mouse[1] = i.invert(e.mouse[0] = l);
          }
          clearTimeout(e.wheel);
        } else {
          if (i.k === a) {
            return;
          }
          e.mouse = [l, i.invert(l)];
          tc(this);
          e.start();
        }
        ny(t);
        e.wheel = setTimeout(function () {
          e.wheel = null;
          e.end();
        }, 150);
        e.zoom("mouse", o(m(d(i, a), e.mouse[0], e.mouse[1]), e.extent, c));
      }
    }
    function b(t, ...n) {
      if (!e && r.apply(this, arguments)) {
        var i;
        var u;
        var a;
        var s = t.currentTarget;
        var l = w(this, n, true).event(t);
        var h = tY(t.view).on("mousemove.zoom", function (t) {
          ny(t);
          if (!l.moved) {
            var n = t.clientX - _;
            var e = t.clientY - v;
            l.moved = n * n + e * e > p;
          }
          l.event(t).zoom("mouse", o(m(l.that.__zoom, l.mouse[0] = nh(t, s), l.mouse[1]), l.extent, c));
        }, true).on("mouseup.zoom", function (t) {
          var n;
          var e;
          var r;
          var i;
          h.on("mousemove.zoom mouseup.zoom", null);
          n = t.view;
          e = l.moved;
          r = n.document.documentElement;
          i = tY(n).on("dragstart.drag", null);
          if (e) {
            i.on("click.drag", nc, ns);
            setTimeout(function () {
              i.on("click.drag", null);
            }, 0);
          }
          if ("onselectstart" in r) {
            i.on("selectstart.drag", null);
          } else {
            r.style.MozUserSelect = r.__noselect;
            delete r.__noselect;
          }
          ny(t);
          l.event(t).end();
        }, true);
        var f = nh(t, s);
        var _ = t.clientX;
        var v = t.clientY;
        u = (i = t.view).document.documentElement;
        a = tY(i).on("dragstart.drag", nc, ns);
        if ("onselectstart" in u) {
          a.on("selectstart.drag", nc, ns);
        } else {
          u.__noselect = u.style.MozUserSelect;
          u.style.MozUserSelect = "none";
        }
        nm(t);
        l.mouse = [f, this.__zoom.invert(f)];
        tc(this);
        l.start();
      }
    }
    function z(t, ...n) {
      if (r.apply(this, arguments)) {
        var e = this.__zoom;
        var u = nh(t.changedTouches ? t.changedTouches[0] : t, this);
        var a = e.invert(u);
        var s = e.k * (t.shiftKey ? 0.5 : 2);
        var h = o(m(d(e, s), u, a), i.apply(this, n), c);
        ny(t);
        if (l > 0) {
          tY(this).transition().duration(l).call(g, h, u, t);
        } else {
          tY(this).call(v.transform, h, u, t);
        }
      }
    }
    function Z(e, ...i) {
      if (r.apply(this, arguments)) {
        var o;
        var u;
        var a;
        var s;
        var c = e.touches;
        var l = c.length;
        var h = w(this, i, e.changedTouches.length === l).event(e);
        nm(e);
        u = 0;
        for (; u < l; ++u) {
          s = [s = nh(a = c[u], this), this.__zoom.invert(s), a.identifier];
          if (h.touch0) {
            if (!h.touch1 && h.touch0[2] !== s[2]) {
              h.touch1 = s;
              h.taps = 0;
            }
          } else {
            h.touch0 = s;
            o = true;
            h.taps = 1 + !!t;
          }
        }
        t &&= clearTimeout(t);
        if (o) {
          if (h.taps < 2) {
            n = s[0];
            t = setTimeout(function () {
              t = null;
            }, 500);
          }
          tc(this);
          h.start();
        }
      }
    }
    function k(t, ...n) {
      if (this.__zooming) {
        var e;
        var r;
        var i;
        var u;
        var a = w(this, n).event(t);
        var s = t.changedTouches;
        var l = s.length;
        ny(t);
        e = 0;
        for (; e < l; ++e) {
          i = nh(r = s[e], this);
          if (a.touch0 && a.touch0[2] === r.identifier) {
            a.touch0[0] = i;
          } else if (a.touch1 && a.touch1[2] === r.identifier) {
            a.touch1[0] = i;
          }
        }
        r = a.that.__zoom;
        if (a.touch1) {
          var h = a.touch0[0];
          var f = a.touch0[1];
          var p = a.touch1[0];
          var _ = a.touch1[1];
          var v = (v = p[0] - h[0]) * v + (v = p[1] - h[1]) * v;
          var y = (y = _[0] - f[0]) * y + (y = _[1] - f[1]) * y;
          r = d(r, Math.sqrt(v / y));
          i = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2];
          u = [(f[0] + _[0]) / 2, (f[1] + _[1]) / 2];
        } else {
          if (!a.touch0) {
            return;
          }
          i = a.touch0[0];
          u = a.touch0[1];
        }
        a.zoom("touch", o(m(r, i, u), a.extent, c));
      }
    }
    function E(t, ...r) {
      if (this.__zooming) {
        var i;
        var o;
        var u = w(this, r).event(t);
        var a = t.changedTouches;
        var s = a.length;
        nm(t);
        if (e) {
          clearTimeout(e);
        }
        e = setTimeout(function () {
          e = null;
        }, 500);
        i = 0;
        for (; i < s; ++i) {
          o = a[i];
          if (u.touch0 && u.touch0[2] === o.identifier) {
            delete u.touch0;
          } else if (u.touch1 && u.touch1[2] === o.identifier) {
            delete u.touch1;
          }
        }
        if (u.touch1 && !u.touch0) {
          u.touch0 = u.touch1;
          delete u.touch1;
        }
        if (u.touch0) {
          u.touch0[1] = this.__zoom.invert(u.touch0[0]);
        } else {
          u.end();
          if (u.taps === 2 && (o = nh(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < _)) {
            var c = tY(this).on("dblclick.zoom");
            if (c) {
              c.apply(this, arguments);
            }
          }
        }
      }
    }
    v.transform = function (t, n, e, r) {
      var i = t.selection ? t.selection() : t;
      i.property("__zoom", nx);
      if (t !== i) {
        g(t, n, e, r);
      } else {
        i.interrupt().each(function () {
          w(this, arguments).event(r).start().zoom(null, typeof n == "function" ? n.apply(this, arguments) : n).end();
        });
      }
    };
    v.scaleBy = function (t, n, e, r) {
      v.scaleTo(t, function () {
        var t = this.__zoom.k;
        var e = typeof n == "function" ? n.apply(this, arguments) : n;
        return t * e;
      }, e, r);
    };
    v.scaleTo = function (t, n, e, r) {
      v.transform(t, function () {
        var t = i.apply(this, arguments);
        var r = this.__zoom;
        var u = e == null ? y(t) : typeof e == "function" ? e.apply(this, arguments) : e;
        var a = r.invert(u);
        var s = typeof n == "function" ? n.apply(this, arguments) : n;
        return o(m(d(r, s), u, a), t, c);
      }, e, r);
    };
    v.translateBy = function (t, n, e, r) {
      v.transform(t, function () {
        return o(this.__zoom.translate(typeof n == "function" ? n.apply(this, arguments) : n, typeof e == "function" ? e.apply(this, arguments) : e), i.apply(this, arguments), c);
      }, null, r);
    };
    v.translateTo = function (t, n, e, r, u) {
      v.transform(t, function () {
        var t = i.apply(this, arguments);
        var u = this.__zoom;
        var a = r == null ? y(t) : typeof r == "function" ? r.apply(this, arguments) : r;
        return o(nv.translate(a[0], a[1]).scale(u.k).translate(typeof n == "function" ? -n.apply(this, arguments) : -n, typeof e == "function" ? -e.apply(this, arguments) : -e), t, c);
      }, r, u);
    };
    x.prototype = {
      event: function (t) {
        if (t) {
          this.sourceEvent = t;
        }
        return this;
      },
      start: function () {
        if (++this.active == 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function (t, n) {
        if (this.mouse && t !== "mouse") {
          this.mouse[1] = n.invert(this.mouse[0]);
        }
        if (this.touch0 && t !== "touch") {
          this.touch0[1] = n.invert(this.touch0[0]);
        }
        if (this.touch1 && t !== "touch") {
          this.touch1[1] = n.invert(this.touch1[0]);
        }
        this.that.__zoom = n;
        this.emit("zoom");
        return this;
      },
      end: function () {
        if (--this.active == 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function (t) {
        var n = tY(this.that).datum();
        f.call(t, this.that, new np(t, {
          sourceEvent: this.sourceEvent,
          target: v,
          type: t,
          transform: this.that.__zoom,
          dispatch: f
        }), n);
      }
    };
    v.wheelDelta = function (t) {
      if (arguments.length) {
        u = typeof t == "function" ? t : nf(+t);
        return v;
      } else {
        return u;
      }
    };
    v.filter = function (t) {
      if (arguments.length) {
        r = typeof t == "function" ? t : nf(!!t);
        return v;
      } else {
        return r;
      }
    };
    v.touchable = function (t) {
      if (arguments.length) {
        a = typeof t == "function" ? t : nf(!!t);
        return v;
      } else {
        return a;
      }
    };
    v.extent = function (t) {
      if (arguments.length) {
        i = typeof t == "function" ? t : nf([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]);
        return v;
      } else {
        return i;
      }
    };
    v.scaleExtent = function (t) {
      if (arguments.length) {
        s[0] = +t[0];
        s[1] = +t[1];
        return v;
      } else {
        return [s[0], s[1]];
      }
    };
    v.translateExtent = function (t) {
      if (arguments.length) {
        c[0][0] = +t[0][0];
        c[1][0] = +t[1][0];
        c[0][1] = +t[0][1];
        c[1][1] = +t[1][1];
        return v;
      } else {
        return [[c[0][0], c[0][1]], [c[1][0], c[1][1]]];
      }
    };
    v.constrain = function (t) {
      if (arguments.length) {
        o = t;
        return v;
      } else {
        return o;
      }
    };
    v.duration = function (t) {
      if (arguments.length) {
        l = +t;
        return v;
      } else {
        return l;
      }
    };
    v.interpolate = function (t) {
      if (arguments.length) {
        h = t;
        return v;
      } else {
        return h;
      }
    };
    v.on = function () {
      var t = f.on.apply(f, arguments);
      if (t === f) {
        return v;
      } else {
        return t;
      }
    };
    v.clickDistance = function (t) {
      if (arguments.length) {
        p = (t *= 1) * t;
        return v;
      } else {
        return Math.sqrt(p);
      }
    };
    v.tapDistance = function (t) {
      if (arguments.length) {
        _ = +t;
        return v;
      } else {
        return _;
      }
    };
    return v;
  }
  nd.prototype = n_.prototype;
  require.d(exports, {
    S1K: function () {
      return dateSecondInterval.secondDateInterval;
    },
    createTensionZero: function () {
      return lineInterpolationFactory.createTensionZero;
    },
    Z_i: function () {
      return dateMinuteIntervalFactory.localMinuteInterval;
    },
    VV$: function () {
      return arrayMaxUtil.maxBy;
    },
    Cn1: function () {
      return hexColorPalette.colorPalette;
    },
    dCK: function () {
      return splineCurveInterpolator_2.splineInterpolator;
    },
    YY7: function () {
      return splineCurveInterpolator.createSplineCurve;
    },
    zgE: function () {
      return splineCurveGenerator.splineCurve;
    },
    WUZ: function () {
      return numberFormatUtils_2.formatNumber;
    },
    rr1: function () {
      return dateIntervalFactories.localDateFactory;
    },
    $m7: function () {
      return splineCurveInterpolator_3.curveInterpolator;
    },
    fGX: function () {
      return splineCurveFactory.splineCurve;
    },
    JHv: function () {
      return d3InterpolationRegistry.interpolateHcl;
    },
    tiA: function () {
      return function t() {
        var n;
        var e;
        var r = scaleImplicitFactory.createImplicitScale().unknown(undefined);
        var i = r.domain;
        var o = r.range;
        var u = 0;
        var a = 1;
        var s = false;
        var c = 0;
        var l = 0;
        var h = 0.5;
        function f() {
          var t = i().length;
          var r = a < u;
          var f = r ? a : u;
          var p = r ? u : a;
          n = (p - f) / Math.max(1, t - c + l * 2);
          if (s) {
            n = Math.floor(n);
          }
          f += (p - f - n * (t - c)) * h;
          e = n * (1 - c);
          if (s) {
            f = Math.round(f);
            e = Math.round(e);
          }
          var _ = numberRangeUtil.generateRange(t).map(function (t) {
            return f + n * t;
          });
          return o(r ? _.reverse() : _);
        }
        delete r.unknown;
        r.domain = function (t) {
          if (arguments.length) {
            i(t);
            return f();
          } else {
            return i();
          }
        };
        r.range = function (t) {
          if (arguments.length) {
            [u, a] = t;
            u *= 1;
            a *= 1;
            return f();
          } else {
            return [u, a];
          }
        };
        r.rangeRound = function (t) {
          [u, a] = t;
          u *= 1;
          a *= 1;
          s = true;
          return f();
        };
        r.bandwidth = function () {
          return e;
        };
        r.step = function () {
          return n;
        };
        r.round = function (t) {
          if (arguments.length) {
            s = !!t;
            return f();
          } else {
            return s;
          }
        };
        r.padding = function (t) {
          if (arguments.length) {
            c = Math.min(1, l = +t);
            return f();
          } else {
            return c;
          }
        };
        r.paddingInner = function (t) {
          if (arguments.length) {
            c = Math.min(1, t);
            return f();
          } else {
            return c;
          }
        };
        r.paddingOuter = function (t) {
          if (arguments.length) {
            l = +t;
            return f();
          } else {
            return l;
          }
        };
        r.align = function (t) {
          if (arguments.length) {
            h = Math.max(0, Math.min(1, t));
            return f();
          } else {
            return h;
          }
        };
        r.copy = function () {
          return t(i(), [u, a]).round(s).paddingInner(c).paddingOuter(l).align(h);
        };
        return scaleConfigHelpers.setRangeDomain.apply(f(), arguments);
      };
    },
    LLu: function () {
      return f;
    },
    SxZ: function () {
      return naturalSplineCurve.createSplineCurve;
    },
    WQY: function () {
      return bezierCurveStrategy.bezierCurveFactory;
    },
    select: function () {
      return tY;
    },
    OvA: function () {
      return splineCurveInterpolator_1.splineCurveFactory;
    },
    EFj: function () {
      return weeklyDateIntervalFactories.wednesdayInterval;
    },
    u93: function () {
      return areaCurveContext.createCurveY;
    },
    fxm: function () {
      return lineContextAdapter.LineContext;
    },
    Igq: function () {
      return weeklyDateIntervalFactories.thursdayInterval;
    },
    i$Z: function () {
      return dateTimeFormatUtils.formatDate;
    },
    timeScale: function () {
      return dateTimeScaleFactory.timeScale;
    },
    Fp7: function () {
      return arrayMaxUtil_1.max;
    },
    qpX: function () {
      return areaCurveContext.createCurveX;
    },
    sPX: function () {
      return nZ;
    },
    _Di: function () {
      return o;
    },
    LqH: function () {
      return weeklyDateIntervalFactories.saturdayInterval;
    },
    PKp: function () {
      return scaleImplicitFactory.createImplicitScale;
    },
    Ox9: function () {
      return weeklyDateIntervalFactories.mondayInterval;
    },
    jvg: function () {
      return lineGeneratorFactory.lineGenerator;
    },
    tFB: function () {
      return betaCurveGenerator.betaCurveGenerator;
    },
    $0Z: function () {
      return bezierCurveGenerator.createCurve;
    },
    P2S: function () {
      return nd;
    },
    WQD: function () {
      return dateHourIntervalFactories.localHourInterval;
    },
    c_6: function () {
      return linePathGenerator.LineGenerator;
    },
    bT9: function () {
      return hierarchyTreeCore.createHierarchy;
    },
    F5q: function () {
      return h;
    },
    jsv: function () {
      return lineInterpolationFactory.createTensionOne;
    },
    BYU: function () {
      return linearScaleDomainTicksNice.createLinearScaleFactory;
    },
    Zyz: function () {
      return weeklyDateIntervalFactories.sundayInterval;
    },
    Dts: function () {
      return bezierCurveContextFactory.createCurveContext;
    },
    YDX: function () {
      return weeklyDateIntervalFactories.tuesdayInterval;
    },
    ve8: function () {
      return tj;
    },
    CRH: function () {
      return nv;
    },
    K2I: function () {
      return tV;
    },
    Nb1: function () {
      return arcPathGenerator.createArcGenerator;
    },
    F0B: function () {
      return dateMonthIntervals.monthInterval;
    },
    U8T: function () {
      return dateIntervalInstance.dateInterval;
    },
    y2j: function () {
      return weeklyDateIntervalFactories.fridayInterval;
    },
    pNI: function () {
      return treemapPaddingLayout.createTreemapPad;
    },
    ak_: function () {
      return pathCurveRenderer.createAltRenderer;
    },
    eA_: function () {
      return lineInterpolationFactory.createTensionHalf;
    },
    h5h: function () {
      return linkPathGenerator.linkGenerator;
    },
    FdL: function () {
      return pathCurveRenderer.createPathRenderer;
    }
  });
}