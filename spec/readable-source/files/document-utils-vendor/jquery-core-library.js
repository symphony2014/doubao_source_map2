// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 775150
         */
module.exports = function (module, exports, require) {
  var t;
  var r;
  t = typeof window != "undefined" ? window : this;
  r = function (e, t) {
    "use strict";

    var r;
    var n = [];
    var i = Object.getPrototypeOf;
    var o = n.slice;
    var a = n.flat ? function (e) {
      return n.flat.call(e);
    } : function (e) {
      return n.concat.apply([], e);
    };
    var s = n.push;
    var l = n.indexOf;
    var u = {};
    var c = u.toString;
    var h = u.hasOwnProperty;
    var d = h.toString;
    var f = d.call(Object);
    var A = {};
    function g(e) {
      return typeof e == "function" && typeof e.nodeType != "number";
    }
    function p(e) {
      return e != null && e === e.window;
    }
    var m = e.document;
    var y = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function v(e, t, r) {
      var n;
      var i;
      var o = (r = r || m).createElement("script");
      o.text = e;
      if (t) {
        for (n in y) {
          if (i = t[n] || t.getAttribute && t.getAttribute(n)) {
            o.setAttribute(n, i);
          }
        }
      }
      r.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(e) {
      if (e == null) {
        return e + "";
      } else if (typeof e == "object" || typeof e == "function") {
        return u[c.call(e)] || "object";
      } else {
        return typeof e;
      }
    }
    var w = "3.5.0";
    function C(e, t) {
      return new C.fn.init(e, t);
    }
    function E(e) {
      var t = !!e && "length" in e && e.length;
      var r = b(e);
      return !g(e) && !p(e) && (r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e);
    }
    C.fn = C.prototype = {
      jquery: w,
      constructor: C,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        if (e == null) {
          return o.call(this);
        } else if (e < 0) {
          return this[e + this.length];
        } else {
          return this[e];
        }
      },
      pushStack: function (e) {
        var t = C.merge(this.constructor(), e);
        t.prevObject = this;
        return t;
      },
      each: function (e) {
        return C.each(this, e);
      },
      map: function (e) {
        return this.pushStack(C.map(this, function (t, r) {
          return e.call(t, r, t);
        }));
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(C.grep(this, function (e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function () {
        return this.pushStack(C.grep(this, function (e, t) {
          return t % 2;
        }));
      },
      eq: function (e) {
        var t = this.length;
        var r = +e + (e < 0 ? t : 0);
        return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice
    };
    C.extend = C.fn.extend = function () {
      var e;
      var t;
      var r;
      var n;
      var i;
      var o;
      var a = arguments[0] || {};
      var s = 1;
      var l = arguments.length;
      var u = false;
      if (typeof a == "boolean") {
        u = a;
        a = arguments[s] || {};
        s++;
      }
      if (typeof a != "object" && !g(a)) {
        a = {};
      }
      if (s === l) {
        a = this;
        s--;
      }
      for (; s < l; s++) {
        if ((e = arguments[s]) != null) {
          for (t in e) {
            n = e[t];
            if (t !== "__proto__" && a !== n) {
              if (u && n && (C.isPlainObject(n) || (i = Array.isArray(n)))) {
                r = a[t];
                o = i && !Array.isArray(r) ? [] : i || C.isPlainObject(r) ? r : {};
                i = false;
                a[t] = C.extend(u, o, n);
              } else if (n !== undefined) {
                a[t] = n;
              }
            }
          }
        }
      }
      return a;
    };
    C.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function (e) {
        throw Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t;
        var r;
        return !!e && c.call(e) === "[object Object]" && (!(t = i(e)) || typeof (r = h.call(t, "constructor") && t.constructor) == "function" && d.call(r) === f);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) {
          return false;
        }
        return true;
      },
      globalEval: function (e, t, r) {
        v(e, {
          nonce: t && t.nonce
        }, r);
      },
      each: function (e, t) {
        var r;
        var n = 0;
        if (E(e)) {
          for (r = e.length; n < r && t.call(e[n], n, e[n]) !== false; n++);
        } else {
          for (n in e) {
            if (t.call(e[n], n, e[n]) === false) {
              break;
            }
          }
        }
        return e;
      },
      makeArray: function (e, t) {
        var r = t || [];
        if (e != null) {
          if (E(Object(e))) {
            C.merge(r, typeof e == "string" ? [e] : e);
          } else {
            s.call(r, e);
          }
        }
        return r;
      },
      inArray: function (e, t, r) {
        if (t == null) {
          return -1;
        } else {
          return l.call(t, e, r);
        }
      },
      merge: function (e, t) {
        var r = +t.length;
        var n = 0;
        var i = e.length;
        for (; n < r; n++) {
          e[i++] = t[n];
        }
        e.length = i;
        return e;
      },
      grep: function (e, t, r) {
        var n = [];
        var i = 0;
        var o = e.length;
        var a = !r;
        for (; i < o; i++) {
          if (!t(e[i], i) !== a) {
            n.push(e[i]);
          }
        }
        return n;
      },
      map: function (e, t, r) {
        var n;
        var i;
        var o = 0;
        var s = [];
        if (E(e)) {
          for (n = e.length; o < n; o++) {
            if ((i = t(e[o], o, r)) != null) {
              s.push(i);
            }
          }
        } else {
          for (o in e) {
            if ((i = t(e[o], o, r)) != null) {
              s.push(i);
            }
          }
        }
        return a(s);
      },
      guid: 1,
      support: A
    });
    if (typeof Symbol == "function") {
      C.fn[Symbol.iterator] = n[Symbol.iterator];
    }
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      u["[object " + t + "]"] = t.toLowerCase();
    });
    var I = function (e) {
      var t;
      var r;
      var n;
      var i;
      var o;
      var a;
      var s;
      var l;
      var u;
      var c;
      var h;
      var d;
      var f;
      var A;
      var g;
      var p;
      var m;
      var y;
      var v;
      var b = "sizzle" + +new Date();
      var w = e.document;
      var C = 0;
      var E = 0;
      var I = el();
      var B = el();
      var x = el();
      var D = el();
      function S(e, t) {
        if (e === t) {
          h = true;
        }
        return 0;
      }
      var k = {}.hasOwnProperty;
      var _ = [];
      var T = _.pop;
      var Q = _.push;
      var R = _.push;
      var F = _.slice;
      function L(e, t) {
        var r = 0;
        var n = e.length;
        for (; r < n; r++) {
          if (e[r] === t) {
            return r;
          }
        }
        return -1;
      }
      var O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
      var N = "[\\x20\\t\\r\\n\\f]";
      var M = "(?:\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
      var P = "\\[" + N + "*(" + M + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + N + "*\\]";
      var U = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)";
      var z = RegExp(N + "+", "g");
      var H = RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g");
      var G = RegExp("^" + N + "*," + N + "*");
      var Z = RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*");
      var W = RegExp(N + "|>");
      var j = new RegExp(U);
      var Y = RegExp("^" + M + "$");
      var K = {
        ID: RegExp("^#(" + M + ")"),
        CLASS: RegExp("^\\.(" + M + ")"),
        TAG: RegExp("^(" + M + "|[*])"),
        ATTR: RegExp("^" + P),
        PSEUDO: RegExp("^" + U),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
        bool: RegExp("^(?:" + O + ")$", "i"),
        needsContext: RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
      };
      var q = /HTML$/i;
      var V = /^(?:input|select|textarea|button)$/i;
      var J = /^h\d$/i;
      var X = /^[^{]+\{\s*\[native \w/;
      var $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
      var ee = /[+~]/;
      var et = RegExp("\\\\[\\da-fA-F]{1,6}" + N + "?|\\\\([^\\r\\n\\f])", "g");
      function er(e, t) {
        var r = "0x" + e.slice(1) - 65536;
        return t || (r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320));
      }
      var en = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g;
      function ei(e, t) {
        if (t) {
          if (e === "\0") {
            return "�";
          } else {
            return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ";
          }
        } else {
          return "\\" + e;
        }
      }
      function eo() {
        d();
      }
      var ea = ey(function (e) {
        return e.disabled === true && e.nodeName.toLowerCase() === "fieldset";
      }, {
        dir: "parentNode",
        next: "legend"
      });
      try {
        R.apply(_ = F.call(w.childNodes), w.childNodes);
        _[w.childNodes.length].nodeType;
      } catch (e) {
        R = {
          apply: _.length ? function (e, t) {
            Q.apply(e, F.call(t));
          } : function (e, t) {
            var r = e.length;
            var n = 0;
            while (e[r++] = t[n++]);
            e.length = r - 1;
          }
        };
      }
      function es(e, t, n, i) {
        var o;
        var s;
        var u;
        var c;
        var h;
        var A;
        var m;
        var y = t && t.ownerDocument;
        var w = t ? t.nodeType : 9;
        n = n || [];
        if (typeof e != "string" || !e || w !== 1 && w !== 9 && w !== 11) {
          return n;
        }
        if (!i && (d(t), t = t || f, g)) {
          if (w !== 11 && (h = $.exec(e))) {
            if (o = h[1]) {
              if (w === 9) {
                if (!(u = t.getElementById(o))) {
                  return n;
                }
                if (u.id === o) {
                  n.push(u);
                  return n;
                }
              } else if (y && (u = y.getElementById(o)) && v(t, u) && u.id === o) {
                n.push(u);
                return n;
              }
            } else if (h[2]) {
              R.apply(n, t.getElementsByTagName(e));
              return n;
            } else if ((o = h[3]) && r.getElementsByClassName && t.getElementsByClassName) {
              R.apply(n, t.getElementsByClassName(o));
              return n;
            }
          }
          if (r.qsa && !D[e + " "] && (!p || !p.test(e)) && (w !== 1 || t.nodeName.toLowerCase() !== "object")) {
            m = e;
            y = t;
            if (w === 1 && (W.test(e) || Z.test(e))) {
              if ((y = ee.test(e) && eg(t.parentNode) || t) !== t || !r.scope) {
                if (c = t.getAttribute("id")) {
                  c = c.replace(en, ei);
                } else {
                  t.setAttribute("id", c = b);
                }
              }
              s = (A = a(e)).length;
              while (s--) {
                A[s] = (c ? "#" + c : ":scope") + " " + em(A[s]);
              }
              m = A.join(",");
            }
            try {
              R.apply(n, y.querySelectorAll(m));
              return n;
            } catch (t) {
              D(e, true);
            } finally {
              if (c === b) {
                t.removeAttribute("id");
              }
            }
          }
        }
        return l(e.replace(H, "$1"), t, n, i);
      }
      function el() {
        var e = [];
        return function t(r, i) {
          if (e.push(r + " ") > n.cacheLength) {
            delete t[e.shift()];
          }
          return t[r + " "] = i;
        };
      }
      function eu(e) {
        e[b] = true;
        return e;
      }
      function ec(e) {
        var t = f.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return false;
        } finally {
          if (t.parentNode) {
            t.parentNode.removeChild(t);
          }
          t = null;
        }
      }
      function eh(e, t) {
        var r = e.split("|");
        var i = r.length;
        while (i--) {
          n.attrHandle[r[i]] = t;
        }
      }
      function ed(e, t) {
        var r = t && e;
        var n = r && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
        if (n) {
          return n;
        }
        if (r) {
          while (r = r.nextSibling) {
            if (r === t) {
              return -1;
            }
          }
        }
        if (e) {
          return 1;
        } else {
          return -1;
        }
      }
      function ef(e) {
        return function (t) {
          if ("form" in t) {
            if (t.parentNode && t.disabled === false) {
              if ("label" in t) {
                if ("label" in t.parentNode) {
                  return t.parentNode.disabled === e;
                } else {
                  return t.disabled === e;
                }
              } else {
                return t.isDisabled === e || !e !== t.isDisabled && ea(t) === e;
              }
            }
            return t.disabled === e;
          }
          return "label" in t && t.disabled === e;
        };
      }
      function eA(e) {
        return eu(function (t) {
          t *= 1;
          return eu(function (r, n) {
            var i;
            var o = e([], r.length, t);
            var a = o.length;
            while (a--) {
              if (r[i = o[a]]) {
                r[i] = !(n[i] = r[i]);
              }
            }
          });
        });
      }
      function eg(e) {
        return e && e.getElementsByTagName !== undefined && e;
      }
      r = es.support = {};
      o = es.isXML = function (e) {
        var t = e.namespaceURI;
        var r = (e.ownerDocument || e).documentElement;
        return !q.test(t || r && r.nodeName || "HTML");
      };
      d = es.setDocument = function (e) {
        var t;
        var i;
        var a = e ? e.ownerDocument || e : w;
        if (a != f && a.nodeType === 9 && a.documentElement) {
          A = (f = a).documentElement;
          g = !o(f);
          if (w != f && (i = f.defaultView) && i.top !== i) {
            if (i.addEventListener) {
              i.addEventListener("unload", eo, false);
            } else if (i.attachEvent) {
              i.attachEvent("onunload", eo);
            }
          }
          r.scope = ec(function (e) {
            A.appendChild(e).appendChild(f.createElement("div"));
            return e.querySelectorAll !== undefined && !e.querySelectorAll(":scope fieldset div").length;
          });
          r.attributes = ec(function (e) {
            e.className = "i";
            return !e.getAttribute("className");
          });
          r.getElementsByTagName = ec(function (e) {
            e.appendChild(f.createComment(""));
            return !e.getElementsByTagName("*").length;
          });
          r.getElementsByClassName = X.test(f.getElementsByClassName);
          r.getById = ec(function (e) {
            A.appendChild(e).id = b;
            return !f.getElementsByName || !f.getElementsByName(b).length;
          });
          if (r.getById) {
            n.filter.ID = function (e) {
              var t = e.replace(et, er);
              return function (e) {
                return e.getAttribute("id") === t;
              };
            };
            n.find.ID = function (e, t) {
              if (t.getElementById !== undefined && g) {
                var r = t.getElementById(e);
                if (r) {
                  return [r];
                } else {
                  return [];
                }
              }
            };
          } else {
            n.filter.ID = function (e) {
              var t = e.replace(et, er);
              return function (e) {
                var r = e.getAttributeNode !== undefined && e.getAttributeNode("id");
                return r && r.value === t;
              };
            };
            n.find.ID = function (e, t) {
              if (t.getElementById !== undefined && g) {
                var r;
                var n;
                var i;
                var o = t.getElementById(e);
                if (o) {
                  if ((r = o.getAttributeNode("id")) && r.value === e) {
                    return [o];
                  }
                  i = t.getElementsByName(e);
                  n = 0;
                  while (o = i[n++]) {
                    if ((r = o.getAttributeNode("id")) && r.value === e) {
                      return [o];
                    }
                  }
                }
                return [];
              }
            };
          }
          n.find.TAG = r.getElementsByTagName ? function (e, t) {
            if (t.getElementsByTagName !== undefined) {
              return t.getElementsByTagName(e);
            } else if (r.qsa) {
              return t.querySelectorAll(e);
            } else {
              return undefined;
            }
          } : function (e, t) {
            var r;
            var n = [];
            var i = 0;
            var o = t.getElementsByTagName(e);
            if (e === "*") {
              while (r = o[i++]) {
                if (r.nodeType === 1) {
                  n.push(r);
                }
              }
              return n;
            }
            return o;
          };
          n.find.CLASS = r.getElementsByClassName && function (e, t) {
            if (t.getElementsByClassName !== undefined && g) {
              return t.getElementsByClassName(e);
            }
          };
          m = [];
          p = [];
          if (r.qsa = X.test(f.querySelectorAll)) {
            ec(function (e) {
              var t;
              A.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>";
              if (e.querySelectorAll("[msallowcapture^='']").length) {
                p.push("[*^$]=" + N + "*(?:''|\"\")");
              }
              if (!e.querySelectorAll("[selected]").length) {
                p.push("\\[" + N + "*(?:value|" + O + ")");
              }
              if (!e.querySelectorAll("[id~=" + b + "-]").length) {
                p.push("~=");
              }
              (t = f.createElement("input")).setAttribute("name", "");
              e.appendChild(t);
              if (!e.querySelectorAll("[name='']").length) {
                p.push("\\[" + N + "*name" + N + "*=" + N + "*(?:''|\"\")");
              }
              if (!e.querySelectorAll(":checked").length) {
                p.push(":checked");
              }
              if (!e.querySelectorAll("a#" + b + "+*").length) {
                p.push(".#.+[+~]");
              }
              e.querySelectorAll("\\\f");
              p.push("[\\r\\n\\f]");
            });
            ec(function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = f.createElement("input");
              t.setAttribute("type", "hidden");
              e.appendChild(t).setAttribute("name", "D");
              if (e.querySelectorAll("[name=d]").length) {
                p.push("name" + N + "*[*^$|!~]?=");
              }
              if (e.querySelectorAll(":enabled").length !== 2) {
                p.push(":enabled", ":disabled");
              }
              A.appendChild(e).disabled = true;
              if (e.querySelectorAll(":disabled").length !== 2) {
                p.push(":enabled", ":disabled");
              }
              e.querySelectorAll("*,:x");
              p.push(",.*:");
            });
          }
          if (r.matchesSelector = X.test(y = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) {
            ec(function (e) {
              r.disconnectedMatch = y.call(e, "*");
              y.call(e, "[s!='']:x");
              m.push("!=", U);
            });
          }
          p = p.length && new RegExp(p.join("|"));
          m = m.length && new RegExp(m.join("|"));
          v = (t = X.test(A.compareDocumentPosition)) || X.test(A.contains) ? function (e, t) {
            var r = e.nodeType === 9 ? e.documentElement : e;
            var n = t && t.parentNode;
            return e === n || !!n && n.nodeType === 1 && !!(r.contains ? r.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16);
          } : function (e, t) {
            if (t) {
              while (t = t.parentNode) {
                if (t === e) {
                  return true;
                }
              }
            }
            return false;
          };
          S = t ? function (e, t) {
            if (e === t) {
              h = true;
              return 0;
            }
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            if (n) {
              return n;
            } else if ((n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) & 1 || !r.sortDetached && t.compareDocumentPosition(e) === n) {
              if (e == f || e.ownerDocument == w && v(w, e)) {
                return -1;
              } else if (t == f || t.ownerDocument == w && v(w, t)) {
                return 1;
              } else if (c) {
                return L(c, e) - L(c, t);
              } else {
                return 0;
              }
            } else if (n & 4) {
              return -1;
            } else {
              return 1;
            }
          } : function (e, t) {
            if (e === t) {
              h = true;
              return 0;
            }
            var r;
            var n = 0;
            var i = e.parentNode;
            var o = t.parentNode;
            var a = [e];
            var s = [t];
            if (!i || !o) {
              if (e == f) {
                return -1;
              } else if (t == f) {
                return 1;
              } else if (i) {
                return -1;
              } else if (o) {
                return 1;
              } else if (c) {
                return L(c, e) - L(c, t);
              } else {
                return 0;
              }
            }
            if (i === o) {
              return ed(e, t);
            }
            for (r = e; r = r.parentNode;) {
              a.unshift(r);
            }
            for (r = t; r = r.parentNode;) {
              s.unshift(r);
            }
            while (a[n] === s[n]) {
              n++;
            }
            if (n) {
              return ed(a[n], s[n]);
            } else if (a[n] == w) {
              return -1;
            } else {
              return +(s[n] == w);
            }
          };
        }
        return f;
      };
      es.matches = function (e, t) {
        return es(e, null, null, t);
      };
      es.matchesSelector = function (e, t) {
        d(e);
        if (r.matchesSelector && g && !D[t + " "] && (!m || !m.test(t)) && (!p || !p.test(t))) {
          try {
            var n = y.call(e, t);
            if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11) {
              return n;
            }
          } catch (e) {
            D(t, true);
          }
        }
        return es(t, f, null, [e]).length > 0;
      };
      es.contains = function (e, t) {
        if ((e.ownerDocument || e) != f) {
          d(e);
        }
        return v(e, t);
      };
      es.attr = function (e, t) {
        if ((e.ownerDocument || e) != f) {
          d(e);
        }
        var i = n.attrHandle[t.toLowerCase()];
        var o = i && k.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !g) : undefined;
        if (o !== undefined) {
          return o;
        } else if (r.attributes || !g) {
          return e.getAttribute(t);
        } else if ((o = e.getAttributeNode(t)) && o.specified) {
          return o.value;
        } else {
          return null;
        }
      };
      es.escape = function (e) {
        return (e + "").replace(en, ei);
      };
      es.error = function (e) {
        throw Error("Syntax error, unrecognized expression: " + e);
      };
      es.uniqueSort = function (e) {
        var t;
        var n = [];
        var i = 0;
        var o = 0;
        h = !r.detectDuplicates;
        c = !r.sortStable && e.slice(0);
        e.sort(S);
        if (h) {
          while (t = e[o++]) {
            if (t === e[o]) {
              i = n.push(o);
            }
          }
          while (i--) {
            e.splice(n[i], 1);
          }
        }
        c = null;
        return e;
      };
      i = es.getText = function (e) {
        var t;
        var r = "";
        var n = 0;
        var o = e.nodeType;
        if (o) {
          if (o === 1 || o === 9 || o === 11) {
            if (typeof e.textContent == "string") {
              return e.textContent;
            }
            for (e = e.firstChild; e; e = e.nextSibling) {
              r += i(e);
            }
          } else if (o === 3 || o === 4) {
            return e.nodeValue;
          }
        } else {
          while (t = e[n++]) {
            r += i(t);
          }
        }
        return r;
      };
      (n = es.selectors = {
        cacheLength: 50,
        createPseudo: eu,
        match: K,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: true
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            e[1] = e[1].replace(et, er);
            e[3] = (e[3] || e[4] || e[5] || "").replace(et, er);
            if (e[2] === "~=") {
              e[3] = " " + e[3] + " ";
            }
            return e.slice(0, 4);
          },
          CHILD: function (e) {
            e[1] = e[1].toLowerCase();
            if (e[1].slice(0, 3) === "nth") {
              if (!e[3]) {
                es.error(e[0]);
              }
              e[4] = +(e[4] ? e[5] + (e[6] || 1) : (e[3] === "even" || e[3] === "odd") * 2);
              e[5] = +(e[7] + e[8] || e[3] === "odd");
            } else if (e[3]) {
              es.error(e[0]);
            }
            return e;
          },
          PSEUDO: function (e) {
            var t;
            var r = !e[6] && e[2];
            if (K.CHILD.test(e[0])) {
              return null;
            } else {
              if (e[3]) {
                e[2] = e[4] || e[5] || "";
              } else if (r && j.test(r) && (t = a(r, true)) && (t = r.indexOf(")", r.length - t) - r.length)) {
                e[0] = e[0].slice(0, t);
                e[2] = r.slice(0, t);
              }
              return e.slice(0, 3);
            }
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(et, er).toLowerCase();
            if (e === "*") {
              return function () {
                return true;
              };
            } else {
              return function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            }
          },
          CLASS: function (e) {
            var t = I[e + " "];
            return t || (t = RegExp("(^|" + N + ")" + e + "(" + N + "|$)"), I(e, function (e) {
              return t.test(typeof e.className == "string" && e.className || e.getAttribute !== undefined && e.getAttribute("class") || "");
            }));
          },
          ATTR: function (e, t, r) {
            return function (n) {
              var i = es.attr(n, e);
              if (i == null) {
                return t === "!=";
              } else {
                return !t || (i += "", t === "=" ? i === r : t === "!=" ? i !== r : t === "^=" ? r && i.indexOf(r) === 0 : t === "*=" ? r && i.indexOf(r) > -1 : t === "$=" ? r && i.slice(-r.length) === r : t === "~=" ? (" " + i.replace(z, " ") + " ").indexOf(r) > -1 : t === "|=" && (i === r || i.slice(0, r.length + 1) === r + "-"));
              }
            };
          },
          CHILD: function (e, t, r, n, i) {
            var o = e.slice(0, 3) !== "nth";
            var a = e.slice(-4) !== "last";
            var s = t === "of-type";
            if (n === 1 && i === 0) {
              return function (e) {
                return !!e.parentNode;
              };
            } else {
              return function (t, r, l) {
                var u;
                var c;
                var h;
                var d;
                var f;
                var A;
                var g = o !== a ? "nextSibling" : "previousSibling";
                var p = t.parentNode;
                var m = s && t.nodeName.toLowerCase();
                var y = !l && !s;
                var v = false;
                if (p) {
                  if (o) {
                    while (g) {
                      for (d = t; d = d[g];) {
                        if (s ? d.nodeName.toLowerCase() === m : d.nodeType === 1) {
                          return false;
                        }
                      }
                      A = g = e === "only" && !A && "nextSibling";
                    }
                    return true;
                  }
                  A = [a ? p.firstChild : p.lastChild];
                  if (a && y) {
                    v = (f = (u = (c = (h = (d = p)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === C && u[1]) && u[2];
                    d = f && p.childNodes[f];
                    while (d = ++f && d && d[g] || (v = f = 0) || A.pop()) {
                      if (d.nodeType === 1 && ++v && d === t) {
                        c[e] = [C, f, v];
                        break;
                      }
                    }
                  } else {
                    if (y) {
                      v = f = (u = (c = (h = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === C && u[1];
                    }
                    if (v === false) {
                      while ((d = ++f && d && d[g] || (v = f = 0) || A.pop()) && (!(s ? d.nodeName.toLowerCase() === m : d.nodeType === 1) || !++v || (y && ((c = (h = d[b] ||= {})[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [C, v]), d !== t)));
                    }
                  }
                  return (v -= i) === n || v % n == 0 && v / n >= 0;
                }
              };
            }
          },
          PSEUDO: function (e, t) {
            var r;
            var i = n.pseudos[e] || n.setFilters[e.toLowerCase()] || es.error("unsupported pseudo: " + e);
            if (i[b]) {
              return i(t);
            } else if (i.length > 1) {
              r = [e, e, "", t];
              if (n.setFilters.hasOwnProperty(e.toLowerCase())) {
                return eu(function (e, r) {
                  var n;
                  var o = i(e, t);
                  var a = o.length;
                  while (a--) {
                    n = L(e, o[a]);
                    e[n] = !(r[n] = o[a]);
                  }
                });
              } else {
                return function (e) {
                  return i(e, 0, r);
                };
              }
            } else {
              return i;
            }
          }
        },
        pseudos: {
          not: eu(function (e) {
            var t = [];
            var r = [];
            var n = s(e.replace(H, "$1"));
            if (n[b]) {
              return eu(function (e, t, r, i) {
                var o;
                var a = n(e, null, i, []);
                var s = e.length;
                while (s--) {
                  if (o = a[s]) {
                    e[s] = !(t[s] = o);
                  }
                }
              });
            } else {
              return function (e, i, o) {
                t[0] = e;
                n(t, null, o, r);
                t[0] = null;
                return !r.pop();
              };
            }
          }),
          has: eu(function (e) {
            return function (t) {
              return es(e, t).length > 0;
            };
          }),
          contains: eu(function (e) {
            e = e.replace(et, er);
            return function (t) {
              return (t.textContent || i(t)).indexOf(e) > -1;
            };
          }),
          lang: eu(function (e) {
            if (!Y.test(e || "")) {
              es.error("unsupported lang: " + e);
            }
            e = e.replace(et, er).toLowerCase();
            return function (t) {
              var r;
              do {
                if (r = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                  return (r = r.toLowerCase()) === e || r.indexOf(e + "-") === 0;
                }
              } while ((t = t.parentNode) && t.nodeType === 1);
              return false;
            };
          }),
          target: function (t) {
            var r = e.location && e.location.hash;
            return r && r.slice(1) === t.id;
          },
          root: function (e) {
            return e === A;
          },
          focus: function (e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && (!!e.type || !!e.href || !!~e.tabIndex);
          },
          enabled: ef(false),
          disabled: ef(true),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return t === "input" && !!e.checked || t === "option" && !!e.selected;
          },
          selected: function (e) {
            if (e.parentNode) {
              e.parentNode.selectedIndex;
            }
            return e.selected === true;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function (e) {
            return !n.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return V.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return t === "input" && e.type === "button" || t === "button";
          },
          text: function (e) {
            var t;
            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
          },
          first: eA(function () {
            return [0];
          }),
          last: eA(function (e, t) {
            return [t - 1];
          }),
          eq: eA(function (e, t, r) {
            return [r < 0 ? r + t : r];
          }),
          even: eA(function (e, t) {
            for (var r = 0; r < t; r += 2) {
              e.push(r);
            }
            return e;
          }),
          odd: eA(function (e, t) {
            for (var r = 1; r < t; r += 2) {
              e.push(r);
            }
            return e;
          }),
          lt: eA(function (e, t, r) {
            for (var n = r < 0 ? r + t : r > t ? t : r; --n >= 0;) {
              e.push(n);
            }
            return e;
          }),
          gt: eA(function (e, t, r) {
            for (var n = r < 0 ? r + t : r; ++n < t;) {
              e.push(n);
            }
            return e;
          })
        }
      }).pseudos.nth = n.pseudos.eq;
      for (t in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) {
        n.pseudos[t] = function (e) {
          return function (t) {
            return t.nodeName.toLowerCase() === "input" && t.type === e;
          };
        }(t);
      }
      for (t in {
        submit: true,
        reset: true
      }) {
        n.pseudos[t] = function (e) {
          return function (t) {
            var r = t.nodeName.toLowerCase();
            return (r === "input" || r === "button") && t.type === e;
          };
        }(t);
      }
      function ep() {}
      function em(e) {
        var t = 0;
        var r = e.length;
        var n = "";
        for (; t < r; t++) {
          n += e[t].value;
        }
        return n;
      }
      function ey(e, t, r) {
        var n = t.dir;
        var i = t.next;
        var o = i || n;
        var a = r && o === "parentNode";
        var s = E++;
        if (t.first) {
          return function (t, r, i) {
            while (t = t[n]) {
              if (t.nodeType === 1 || a) {
                return e(t, r, i);
              }
            }
            return false;
          };
        } else {
          return function (t, r, l) {
            var u;
            var c;
            var d = [C, s];
            if (l) {
              while (t = t[n]) {
                if ((t.nodeType === 1 || a) && e(t, r, l)) {
                  return true;
                }
              }
            } else {
              while (t = t[n]) {
                if (t.nodeType === 1 || a) {
                  c = (t[b] ||= {})[t.uniqueID] ||= {};
                  if (i && i === t.nodeName.toLowerCase()) {
                    t = t[n] || t;
                  } else if ((u = c[o]) && u[0] === C && u[1] === s) {
                    return d[2] = u[2];
                  } else {
                    c[o] = d;
                    if (d[2] = e(t, r, l)) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
        }
      }
      function ev(e) {
        if (e.length > 1) {
          return function (t, r, n) {
            for (var i = e.length; i--;) {
              if (!e[i](t, r, n)) {
                return false;
              }
            }
            return true;
          };
        } else {
          return e[0];
        }
      }
      function eb(e, t, r, n, i) {
        var o;
        var a = [];
        var s = 0;
        var l = e.length;
        var u = t != null;
        for (; s < l; s++) {
          if ((o = e[s]) && (!r || r(o, n, i))) {
            a.push(o);
            if (u) {
              t.push(s);
            }
          }
        }
        return a;
      }
      ep.prototype = n.filters = n.pseudos;
      n.setFilters = new ep();
      a = es.tokenize = function (e, t) {
        var r;
        var i;
        var o;
        var a;
        var s;
        var l;
        var u;
        var c = B[e + " "];
        if (c) {
          if (t) {
            return 0;
          } else {
            return c.slice(0);
          }
        }
        s = e;
        l = [];
        u = n.preFilter;
        while (s) {
          if (!r || (i = G.exec(s))) {
            if (i) {
              s = s.slice(i[0].length) || s;
            }
            l.push(o = []);
          }
          r = false;
          if (i = Z.exec(s)) {
            r = i.shift();
            o.push({
              value: r,
              type: i[0].replace(H, " ")
            });
            s = s.slice(r.length);
          }
          for (a in n.filter) {
            if ((i = K[a].exec(s)) && (!u[a] || (i = u[a](i)))) {
              r = i.shift();
              o.push({
                value: r,
                type: a,
                matches: i
              });
              s = s.slice(r.length);
            }
          }
          if (!r) {
            break;
          }
        }
        if (t) {
          return s.length;
        } else if (s) {
          return es.error(e);
        } else {
          return B(e, l).slice(0);
        }
      };
      s = es.compile = function (e, t) {
        var r;
        var i;
        var o;
        var s;
        var l = [];
        var c = [];
        var h = x[e + " "];
        if (!h) {
          t ||= a(e);
          s = t.length;
          while (s--) {
            if ((h = function e(t) {
              var r;
              var i;
              var o;
              var a = t.length;
              var s = n.relative[t[0].type];
              var l = s || n.relative[" "];
              var c = +!!s;
              var h = ey(function (e) {
                return e === r;
              }, l, true);
              var d = ey(function (e) {
                return L(r, e) > -1;
              }, l, true);
              var f = [function (e, t, n) {
                var i = !s && (n || t !== u) || ((r = t).nodeType ? h(e, t, n) : d(e, t, n));
                r = null;
                return i;
              }];
              for (; c < a; c++) {
                if (i = n.relative[t[c].type]) {
                  f = [ey(ev(f), i)];
                } else {
                  if ((i = n.filter[t[c].type].apply(null, t[c].matches))[b]) {
                    for (o = ++c; o < a && !n.relative[t[o].type]; o++);
                    return function e(t, r, n, i, o, a) {
                      if (i && !i[b]) {
                        i = e(i);
                      }
                      if (o && !o[b]) {
                        o = e(o, a);
                      }
                      return eu(function (e, a, s, l) {
                        var u;
                        var c;
                        var h;
                        var d = [];
                        var f = [];
                        var A = a.length;
                        var g = e || function (e, t, r) {
                          var n = 0;
                          var i = t.length;
                          for (; n < i; n++) {
                            es(e, t[n], r);
                          }
                          return r;
                        }(r || "*", s.nodeType ? [s] : s, []);
                        var p = t && (e || !r) ? eb(g, d, t, s, l) : g;
                        var m = n ? o || (e ? t : A || i) ? [] : a : p;
                        if (n) {
                          n(p, m, s, l);
                        }
                        if (i) {
                          u = eb(m, f);
                          i(u, [], s, l);
                          c = u.length;
                          while (c--) {
                            if (h = u[c]) {
                              m[f[c]] = !(p[f[c]] = h);
                            }
                          }
                        }
                        if (e) {
                          if (o || t) {
                            if (o) {
                              u = [];
                              c = m.length;
                              while (c--) {
                                if (h = m[c]) {
                                  u.push(p[c] = h);
                                }
                              }
                              o(null, m = [], u, l);
                            }
                            for (c = m.length; c--;) {
                              if ((h = m[c]) && (u = o ? L(e, h) : d[c]) > -1) {
                                e[u] = !(a[u] = h);
                              }
                            }
                          }
                        } else {
                          m = eb(m === a ? m.splice(A, m.length) : m);
                          if (o) {
                            o(null, a, m, l);
                          } else {
                            R.apply(a, m);
                          }
                        }
                      });
                    }(c > 1 && ev(f), c > 1 && em(t.slice(0, c - 1).concat({
                      value: t[c - 2].type === " " ? "*" : ""
                    })).replace(H, "$1"), i, c < o && e(t.slice(c, o)), o < a && e(t = t.slice(o)), o < a && em(t));
                  }
                  f.push(i);
                }
              }
              return ev(f);
            }(t[s]))[b]) {
              l.push(h);
            } else {
              c.push(h);
            }
          }
          (h = x(e, (r = l.length > 0, i = c.length > 0, o = function (e, t, o, a, s) {
            var h;
            var A;
            var p;
            var m = 0;
            var y = "0";
            var v = e && [];
            var b = [];
            var w = u;
            var E = e || i && n.find.TAG("*", s);
            var I = C += w == null ? 1 : Math.random() || 0.1;
            var B = E.length;
            for (s && (u = t == f || t || s); y !== B && (h = E[y]) != null; y++) {
              if (i && h) {
                A = 0;
                if (!t && h.ownerDocument != f) {
                  d(h);
                  o = !g;
                }
                while (p = c[A++]) {
                  if (p(h, t || f, o)) {
                    a.push(h);
                    break;
                  }
                }
                if (s) {
                  C = I;
                }
              }
              if (r) {
                if (h = !p && h) {
                  m--;
                }
                if (e) {
                  v.push(h);
                }
              }
            }
            m += y;
            if (r && y !== m) {
              for (A = 0; p = l[A++];) {
                p(v, b, t, o);
              }
              if (e) {
                if (m > 0) {
                  while (y--) {
                    if (!v[y] && !b[y]) {
                      b[y] = T.call(a);
                    }
                  }
                }
                b = eb(b);
              }
              R.apply(a, b);
              if (s && !e && b.length > 0 && m + l.length > 1) {
                es.uniqueSort(a);
              }
            }
            if (s) {
              C = I;
              u = w;
            }
            return v;
          }, r ? eu(o) : o))).selector = e;
        }
        return h;
      };
      l = es.select = function (e, t, r, i) {
        var o;
        var l;
        var u;
        var c;
        var h;
        var d = typeof e == "function" && e;
        var f = !i && a(e = d.selector || e);
        r = r || [];
        if (f.length === 1) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && (u = l[0]).type === "ID" && t.nodeType === 9 && g && n.relative[l[1].type]) {
            if (!(t = (n.find.ID(u.matches[0].replace(et, er), t) || [])[0])) {
              return r;
            }
            if (d) {
              t = t.parentNode;
            }
            e = e.slice(l.shift().value.length);
          }
          for (o = K.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !n.relative[c = u.type]);) {
            if ((h = n.find[c]) && (i = h(u.matches[0].replace(et, er), ee.test(l[0].type) && eg(t.parentNode) || t))) {
              l.splice(o, 1);
              if (!(e = i.length && em(l))) {
                R.apply(r, i);
                return r;
              }
              break;
            }
          }
        }
        (d || s(e, f))(i, t, !g, r, !t || ee.test(e) && eg(t.parentNode) || t);
        return r;
      };
      r.sortStable = b.split("").sort(S).join("") === b;
      r.detectDuplicates = !!h;
      d();
      r.sortDetached = ec(function (e) {
        return e.compareDocumentPosition(f.createElement("fieldset")) & 1;
      });
      if (!ec(function (e) {
        e.innerHTML = "<a href='#'></a>";
        return e.firstChild.getAttribute("href") === "#";
      })) {
        eh("type|href|height|width", function (e, t, r) {
          if (!r) {
            return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
          }
        });
      }
      if (!r.attributes || !ec(function (e) {
        e.innerHTML = "<input/>";
        e.firstChild.setAttribute("value", "");
        return e.firstChild.getAttribute("value") === "";
      })) {
        eh("value", function (e, t, r) {
          if (!r && e.nodeName.toLowerCase() === "input") {
            return e.defaultValue;
          }
        });
      }
      if (!ec(function (e) {
        return e.getAttribute("disabled") == null;
      })) {
        eh(O, function (e, t, r) {
          var n;
          if (!r) {
            if (e[t] === true) {
              return t.toLowerCase();
            } else if ((n = e.getAttributeNode(t)) && n.specified) {
              return n.value;
            } else {
              return null;
            }
          }
        });
      }
      return es;
    }(e);
    C.find = I;
    C.expr = I.selectors;
    C.expr[":"] = C.expr.pseudos;
    C.uniqueSort = C.unique = I.uniqueSort;
    C.text = I.getText;
    C.isXMLDoc = I.isXML;
    C.contains = I.contains;
    C.escapeSelector = I.escape;
    function B(e, t, r) {
      var n = [];
      var i = r !== undefined;
      while ((e = e[t]) && e.nodeType !== 9) {
        if (e.nodeType === 1) {
          if (i && C(e).is(r)) {
            break;
          }
          n.push(e);
        }
      }
      return n;
    }
    function x(e, t) {
      var r = [];
      for (; e; e = e.nextSibling) {
        if (e.nodeType === 1 && e !== t) {
          r.push(e);
        }
      }
      return r;
    }
    var D = C.expr.match.needsContext;
    function S(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function _(e, t, r) {
      if (g(t)) {
        return C.grep(e, function (e, n) {
          return !!t.call(e, n, e) !== r;
        });
      } else if (t.nodeType) {
        return C.grep(e, function (e) {
          return e === t !== r;
        });
      } else if (typeof t != "string") {
        return C.grep(e, function (e) {
          return l.call(t, e) > -1 !== r;
        });
      } else {
        return C.filter(t, e, r);
      }
    }
    C.filter = function (e, t, r) {
      var n = t[0];
      if (r) {
        e = ":not(" + e + ")";
      }
      if (t.length === 1 && n.nodeType === 1) {
        if (C.find.matchesSelector(n, e)) {
          return [n];
        } else {
          return [];
        }
      } else {
        return C.find.matches(e, C.grep(t, function (e) {
          return e.nodeType === 1;
        }));
      }
    };
    C.fn.extend({
      find: function (e) {
        var t;
        var r;
        var n = this.length;
        var i = this;
        if (typeof e != "string") {
          return this.pushStack(C(e).filter(function () {
            for (t = 0; t < n; t++) {
              if (C.contains(i[t], this)) {
                return true;
              }
            }
          }));
        }
        t = 0;
        r = this.pushStack([]);
        for (; t < n; t++) {
          C.find(e, i[t], r);
        }
        if (n > 1) {
          return C.uniqueSort(r);
        } else {
          return r;
        }
      },
      filter: function (e) {
        return this.pushStack(_(this, e || [], false));
      },
      not: function (e) {
        return this.pushStack(_(this, e || [], true));
      },
      is: function (e) {
        return !!_(this, typeof e == "string" && D.test(e) ? C(e) : e || [], false).length;
      }
    });
    var T;
    var Q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function (e, t, r) {
      var n;
      var i;
      if (!e) {
        return this;
      }
      r = r || T;
      if (typeof e == "string") {
        if ((n = e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? [null, e, null] : Q.exec(e)) && (n[1] || !t)) {
          if (!n[1]) {
            if (i = m.getElementById(n[2])) {
              this[0] = i;
              this.length = 1;
            }
            return this;
          }
          t = t instanceof C ? t[0] : t;
          C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, true));
          if (k.test(n[1]) && C.isPlainObject(t)) {
            for (n in t) {
              if (g(this[n])) {
                this[n](t[n]);
              } else {
                this.attr(n, t[n]);
              }
            }
          }
          return this;
        }
        if (!t || t.jquery) {
          return (t || r).find(e);
        } else {
          return this.constructor(t).find(e);
        }
      }
      if (e.nodeType) {
        this[0] = e;
        this.length = 1;
        return this;
      } else if (g(e)) {
        if (r.ready !== undefined) {
          return r.ready(e);
        } else {
          return e(C);
        }
      } else {
        return C.makeArray(e, this);
      }
    }).prototype = C.fn;
    T = C(m);
    var R = /^(?:parents|prev(?:Until|All))/;
    var F = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    function L(e, t) {
      while ((e = e[t]) && e.nodeType !== 1);
      return e;
    }
    C.fn.extend({
      has: function (e) {
        var t = C(e, this);
        var r = t.length;
        return this.filter(function () {
          for (var e = 0; e < r; e++) {
            if (C.contains(this, t[e])) {
              return true;
            }
          }
        });
      },
      closest: function (e, t) {
        var r;
        var n = 0;
        var i = this.length;
        var o = [];
        var a = typeof e != "string" && C(e);
        if (!D.test(e)) {
          for (; n < i; n++) {
            for (r = this[n]; r && r !== t; r = r.parentNode) {
              if (r.nodeType < 11 && (a ? a.index(r) > -1 : r.nodeType === 1 && C.find.matchesSelector(r, e))) {
                o.push(r);
                break;
              }
            }
          }
        }
        return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
      },
      index: function (e) {
        if (e) {
          if (typeof e == "string") {
            return l.call(C(e), this[0]);
          } else {
            return l.call(this, e.jquery ? e[0] : e);
          }
        } else if (this[0] && this[0].parentNode) {
          return this.first().prevAll().length;
        } else {
          return -1;
        }
      },
      add: function (e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      },
      addBack: function (e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
      }
    });
    C.each({
      parent: function (e) {
        var t = e.parentNode;
        if (t && t.nodeType !== 11) {
          return t;
        } else {
          return null;
        }
      },
      parents: function (e) {
        return B(e, "parentNode");
      },
      parentsUntil: function (e, t, r) {
        return B(e, "parentNode", r);
      },
      next: function (e) {
        return L(e, "nextSibling");
      },
      prev: function (e) {
        return L(e, "previousSibling");
      },
      nextAll: function (e) {
        return B(e, "nextSibling");
      },
      prevAll: function (e) {
        return B(e, "previousSibling");
      },
      nextUntil: function (e, t, r) {
        return B(e, "nextSibling", r);
      },
      prevUntil: function (e, t, r) {
        return B(e, "previousSibling", r);
      },
      siblings: function (e) {
        return x((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return x(e.firstChild);
      },
      contents: function (e) {
        if (e.contentDocument != null && i(e.contentDocument)) {
          return e.contentDocument;
        } else {
          if (S(e, "template")) {
            e = e.content || e;
          }
          return C.merge([], e.childNodes);
        }
      }
    }, function (e, t) {
      C.fn[e] = function (r, n) {
        var i = C.map(this, t, r);
        if (e.slice(-5) !== "Until") {
          n = r;
        }
        if (n && typeof n == "string") {
          i = C.filter(n, i);
        }
        if (this.length > 1) {
          if (!F[e]) {
            C.uniqueSort(i);
          }
          if (R.test(e)) {
            i.reverse();
          }
        }
        return this.pushStack(i);
      };
    });
    var O = /[^\x20\t\r\n\f]+/g;
    function N(e) {
      return e;
    }
    function M(e) {
      throw e;
    }
    function P(e, t, r, n) {
      var i;
      try {
        if (e && g(i = e.promise)) {
          i.call(e).done(t).fail(r);
        } else if (e && g(i = e.then)) {
          i.call(e, t, r);
        } else {
          t.apply(undefined, [e].slice(n));
        }
      } catch (e) {
        r.apply(undefined, [e]);
      }
    }
    C.Callbacks = function (e) {
      e = typeof e == "string" ? (t = e, r = {}, C.each(t.match(O) || [], function (e, t) {
        r[t] = true;
      }), r) : C.extend({}, e);
      var t;
      var r;
      var n;
      var i;
      var o;
      var a;
      var s = [];
      var l = [];
      var u = -1;
      function c() {
        a = a || e.once;
        o = n = true;
        for (; l.length; u = -1) {
          for (i = l.shift(); ++u < s.length;) {
            if (s[u].apply(i[0], i[1]) === false && e.stopOnFalse) {
              u = s.length;
              i = false;
            }
          }
        }
        if (!e.memory) {
          i = false;
        }
        n = false;
        if (a) {
          s = i ? [] : "";
        }
      }
      var h = {
        add: function () {
          if (s) {
            if (i && !n) {
              u = s.length - 1;
              l.push(i);
            }
            (function t(r) {
              C.each(r, function (r, n) {
                if (g(n)) {
                  if (!e.unique || !h.has(n)) {
                    s.push(n);
                  }
                } else if (n && n.length && b(n) !== "string") {
                  t(n);
                }
              });
            })(arguments);
            if (i && !n) {
              c();
            }
          }
          return this;
        },
        remove: function () {
          C.each(arguments, function (e, t) {
            for (var r; (r = C.inArray(t, s, r)) > -1;) {
              s.splice(r, 1);
              if (r <= u) {
                u--;
              }
            }
          });
          return this;
        },
        has: function (e) {
          if (e) {
            return C.inArray(e, s) > -1;
          } else {
            return s.length > 0;
          }
        },
        empty: function () {
          s &&= [];
          return this;
        },
        disable: function () {
          a = l = [];
          s = i = "";
          return this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          a = l = [];
          if (!i && !n) {
            s = i = "";
          }
          return this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          if (!a) {
            t = [e, (t = t || []).slice ? t.slice() : t];
            l.push(t);
            if (!n) {
              c();
            }
          }
          return this;
        },
        fire: function () {
          h.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!o;
        }
      };
      return h;
    };
    C.extend({
      Deferred: function (t) {
        var r = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]];
        var n = "pending";
        var i = {
          state: function () {
            return n;
          },
          always: function () {
            o.done(arguments).fail(arguments);
            return this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return C.Deferred(function (t) {
              C.each(r, function (r, n) {
                var i = g(e[n[4]]) && e[n[4]];
                o[n[1]](function () {
                  var e = i && i.apply(this, arguments);
                  if (e && g(e.promise)) {
                    e.promise().progress(t.notify).done(t.resolve).fail(t.reject);
                  } else {
                    t[n[0] + "With"](this, i ? [e] : arguments);
                  }
                });
              });
              e = null;
            }).promise();
          },
          then: function (t, n, i) {
            var o = 0;
            function a(t, r, n, i) {
              return function () {
                var s = this;
                var l = arguments;
                function u() {
                  var e;
                  var u;
                  if (!(t < o)) {
                    if ((e = n.apply(s, l)) === r.promise()) {
                      throw TypeError("Thenable self-resolution");
                    }
                    if (g(u = e && (typeof e == "object" || typeof e == "function") && e.then)) {
                      if (i) {
                        u.call(e, a(o, r, N, i), a(o, r, M, i));
                      } else {
                        o++;
                        u.call(e, a(o, r, N, i), a(o, r, M, i), a(o, r, N, r.notifyWith));
                      }
                    } else {
                      if (n !== N) {
                        s = undefined;
                        l = [e];
                      }
                      (i || r.resolveWith)(s, l);
                    }
                  }
                }
                var c = i ? u : function () {
                  try {
                    u();
                  } catch (e) {
                    if (C.Deferred.exceptionHook) {
                      C.Deferred.exceptionHook(e, c.stackTrace);
                    }
                    if (t + 1 >= o) {
                      if (n !== M) {
                        s = undefined;
                        l = [e];
                      }
                      r.rejectWith(s, l);
                    }
                  }
                };
                if (t) {
                  c();
                } else {
                  if (C.Deferred.getStackHook) {
                    c.stackTrace = C.Deferred.getStackHook();
                  }
                  e.setTimeout(c);
                }
              };
            }
            return C.Deferred(function (e) {
              r[0][3].add(a(0, e, g(i) ? i : N, e.notifyWith));
              r[1][3].add(a(0, e, g(t) ? t : N));
              r[2][3].add(a(0, e, g(n) ? n : M));
            }).promise();
          },
          promise: function (e) {
            if (e != null) {
              return C.extend(e, i);
            } else {
              return i;
            }
          }
        };
        var o = {};
        C.each(r, function (e, t) {
          var a = t[2];
          var s = t[5];
          i[t[1]] = a.add;
          if (s) {
            a.add(function () {
              n = s;
            }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock);
          }
          a.add(t[3].fire);
          o[t[0]] = function () {
            o[t[0] + "With"](this === o ? undefined : this, arguments);
            return this;
          };
          o[t[0] + "With"] = a.fireWith;
        });
        i.promise(o);
        if (t) {
          t.call(o, o);
        }
        return o;
      },
      when: function (e) {
        var t = arguments.length;
        var r = t;
        var n = Array(r);
        var i = o.call(arguments);
        var a = C.Deferred();
        function s(e) {
          return function (r) {
            n[e] = this;
            i[e] = arguments.length > 1 ? o.call(arguments) : r;
            if (! --t) {
              a.resolveWith(n, i);
            }
          };
        }
        if (t <= 1 && (P(e, a.done(s(r)).resolve, a.reject, !t), a.state() === "pending" || g(i[r] && i[r].then))) {
          return a.then();
        }
        while (r--) {
          P(i[r], s(r), a.reject);
        }
        return a.promise();
      }
    });
    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function (t, r) {
      if (e.console && e.console.warn && t && U.test(t.name)) {
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, r);
      }
    };
    C.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    };
    var z = C.Deferred();
    function H() {
      m.removeEventListener("DOMContentLoaded", H);
      e.removeEventListener("load", H);
      C.ready();
    }
    C.fn.ready = function (e) {
      z.then(e).catch(function (e) {
        C.readyException(e);
      });
      return this;
    };
    C.extend({
      isReady: false,
      readyWait: 1,
      ready: function (e) {
        if (!(e === true ? --C.readyWait : C.isReady)) {
          C.isReady = true;
          if (e === true || !(--C.readyWait > 0)) {
            z.resolveWith(m, [C]);
          }
        }
      }
    });
    C.ready.then = z.then;
    if (m.readyState !== "complete" && (m.readyState === "loading" || m.documentElement.doScroll)) {
      m.addEventListener("DOMContentLoaded", H);
      e.addEventListener("load", H);
    } else {
      e.setTimeout(C.ready);
    }
    function G(e, t, r, n, i, o, a) {
      var s = 0;
      var l = e.length;
      var u = r == null;
      if (b(r) === "object") {
        i = true;
        for (s in r) {
          G(e, t, s, r[s], true, o, a);
        }
      } else if (n !== undefined && (i = true, g(n) || (a = true), u && (a ? (t.call(e, n), t = null) : (u = t, t = function (e, t, r) {
        return u.call(C(e), r);
      })), t)) {
        for (; s < l; s++) {
          t(e[s], r, a ? n : n.call(e[s], s, t(e[s], r)));
        }
      }
      if (i) {
        return e;
      } else if (u) {
        return t.call(e);
      } else if (l) {
        return t(e[0], r);
      } else {
        return o;
      }
    }
    var Z = /^-ms-/;
    var W = /-([a-z])/g;
    function j(e, t) {
      return t.toUpperCase();
    }
    function Y(e) {
      return e.replace(Z, "ms-").replace(W, j);
    }
    function K(e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    }
    function q() {
      this.expando = C.expando + q.uid++;
    }
    q.uid = 1;
    q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        if (!t) {
          t = Object.create(null);
          if (K(e)) {
            if (e.nodeType) {
              e[this.expando] = t;
            } else {
              Object.defineProperty(e, this.expando, {
                value: t,
                configurable: true
              });
            }
          }
        }
        return t;
      },
      set: function (e, t, r) {
        var n;
        var i = this.cache(e);
        if (typeof t == "string") {
          i[Y(t)] = r;
        } else {
          for (n in t) {
            i[Y(n)] = t[n];
          }
        }
        return i;
      },
      get: function (e, t) {
        if (t === undefined) {
          return this.cache(e);
        } else {
          return e[this.expando] && e[this.expando][Y(t)];
        }
      },
      access: function (e, t, r) {
        if (t === undefined || t && typeof t == "string" && r === undefined) {
          return this.get(e, t);
        } else {
          this.set(e, t, r);
          if (r !== undefined) {
            return r;
          } else {
            return t;
          }
        }
      },
      remove: function (e, t) {
        var r;
        var n = e[this.expando];
        if (n !== undefined) {
          if (t !== undefined) {
            for (r = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in n ? [t] : t.match(O) || []).length; r--;) {
              delete n[t[r]];
            }
          }
          if (t === undefined || C.isEmptyObject(n)) {
            if (e.nodeType) {
              e[this.expando] = undefined;
            } else {
              delete e[this.expando];
            }
          }
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return t !== undefined && !C.isEmptyObject(t);
      }
    };
    var V = new q();
    var J = new q();
    var X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var $ = /[A-Z]/g;
    function ee(e, t, r) {
      var n;
      var i;
      if (r === undefined && e.nodeType === 1) {
        n = "data-" + t.replace($, "-$&").toLowerCase();
        if (typeof (r = e.getAttribute(n)) == "string") {
          try {
            i = r;
            r = i === "true" || i !== "false" && (i === "null" ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i);
          } catch (e) {}
          J.set(e, t, r);
        } else {
          r = undefined;
        }
      }
      return r;
    }
    C.extend({
      hasData: function (e) {
        return J.hasData(e) || V.hasData(e);
      },
      data: function (e, t, r) {
        return J.access(e, t, r);
      },
      removeData: function (e, t) {
        J.remove(e, t);
      },
      _data: function (e, t, r) {
        return V.access(e, t, r);
      },
      _removeData: function (e, t) {
        V.remove(e, t);
      }
    });
    C.fn.extend({
      data: function (e, t) {
        var r;
        var n;
        var i;
        var o = this[0];
        var a = o && o.attributes;
        if (e === undefined) {
          if (this.length && (i = J.get(o), o.nodeType === 1 && !V.get(o, "hasDataAttrs"))) {
            for (r = a.length; r--;) {
              if (a[r] && (n = a[r].name).indexOf("data-") === 0) {
                ee(o, n = Y(n.slice(5)), i[n]);
              }
            }
            V.set(o, "hasDataAttrs", true);
          }
          return i;
        }
        if (typeof e == "object") {
          return this.each(function () {
            J.set(this, e);
          });
        } else {
          return G(this, function (t) {
            var r;
            if (o && t === undefined) {
              if ((r = J.get(o, e)) !== undefined || (r = ee(o, e)) !== undefined) {
                return r;
              } else {
                return undefined;
              }
            }
            this.each(function () {
              J.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, true);
        }
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      }
    });
    C.extend({
      queue: function (e, t, r) {
        var n;
        if (e) {
          t = (t || "fx") + "queue";
          n = V.get(e, t);
          if (r) {
            if (!n || Array.isArray(r)) {
              n = V.access(e, t, C.makeArray(r));
            } else {
              n.push(r);
            }
          }
          return n || [];
        }
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var r = C.queue(e, t);
        var n = r.length;
        var i = r.shift();
        var o = C._queueHooks(e, t);
        if (i === "inprogress") {
          i = r.shift();
          n--;
        }
        if (i) {
          if (t === "fx") {
            r.unshift("inprogress");
          }
          delete o.stop;
          i.call(e, function () {
            C.dequeue(e, t);
          }, o);
        }
        if (!n && o) {
          o.empty.fire();
        }
      },
      _queueHooks: function (e, t) {
        var r = t + "queueHooks";
        return V.get(e, r) || V.access(e, r, {
          empty: C.Callbacks("once memory").add(function () {
            V.remove(e, [t + "queue", r]);
          })
        });
      }
    });
    C.fn.extend({
      queue: function (e, t) {
        var r = 2;
        if (typeof e != "string") {
          t = e;
          e = "fx";
          r--;
        }
        if (arguments.length < r) {
          return C.queue(this[0], e);
        } else if (t === undefined) {
          return this;
        } else {
          return this.each(function () {
            var r = C.queue(this, e, t);
            C._queueHooks(this, e);
            if (e === "fx" && r[0] !== "inprogress") {
              C.dequeue(this, e);
            }
          });
        }
      },
      dequeue: function (e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var r;
        var n = 1;
        var i = C.Deferred();
        var o = this;
        var a = this.length;
        function s() {
          if (! --n) {
            i.resolveWith(o, [o]);
          }
        }
        if (typeof e != "string") {
          t = e;
          e = undefined;
        }
        e = e || "fx";
        while (a--) {
          if ((r = V.get(o[a], e + "queueHooks")) && r.empty) {
            n++;
            r.empty.add(s);
          }
        }
        s();
        return i.promise(t);
      }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var er = RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i");
    var en = ["Top", "Right", "Bottom", "Left"];
    var ei = m.documentElement;
    function eo(e) {
      return C.contains(e.ownerDocument, e);
    }
    var ea = {
      composed: true
    };
    if (ei.getRootNode) {
      eo = function (e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(ea) === e.ownerDocument;
      };
    }
    function es(e, t) {
      return (e = t || e).style.display === "none" || e.style.display === "" && eo(e) && C.css(e, "display") === "none";
    }
    function el(e, t, r, n) {
      var i;
      var o;
      var a = 20;
      var s = n ? function () {
        return n.cur();
      } : function () {
        return C.css(e, t, "");
      };
      var l = s();
      var u = r && r[3] || (C.cssNumber[t] ? "" : "px");
      var c = e.nodeType && (C.cssNumber[t] || u !== "px" && +l) && er.exec(C.css(e, t));
      if (c && c[3] !== u) {
        l /= 2;
        u = u || c[3];
        c = +l || 1;
        while (a--) {
          C.style(e, t, c + u);
          if ((1 - o) * (1 - (o = s() / l || 0.5)) <= 0) {
            a = 0;
          }
          c /= o;
        }
        c *= 2;
        C.style(e, t, c + u);
        r = r || [];
      }
      if (r) {
        c = +c || +l || 0;
        i = r[1] ? c + (r[1] + 1) * r[2] : +r[2];
        if (n) {
          n.unit = u;
          n.start = c;
          n.end = i;
        }
      }
      return i;
    }
    var eu = {};
    function ec(e, t) {
      var r;
      var n;
      var i = [];
      var o = 0;
      var a = e.length;
      for (; o < a; o++) {
        if ((n = e[o]).style) {
          r = n.style.display;
          if (t) {
            if (r === "none") {
              i[o] = V.get(n, "display") || null;
              if (!i[o]) {
                n.style.display = "";
              }
            }
            if (n.style.display === "" && es(n)) {
              i[o] = function (e) {
                var t;
                var r = e.ownerDocument;
                var n = e.nodeName;
                var i = eu[n];
                if (!i) {
                  t = r.body.appendChild(r.createElement(n));
                  i = C.css(t, "display");
                  t.parentNode.removeChild(t);
                  if (i === "none") {
                    i = "block";
                  }
                  eu[n] = i;
                }
                return i;
              }(n);
            }
          } else if (r !== "none") {
            i[o] = "none";
            V.set(n, "display", r);
          }
        }
      }
      for (o = 0; o < a; o++) {
        if (i[o] != null) {
          e[o].style.display = i[o];
        }
      }
      return e;
    }
    C.fn.extend({
      show: function () {
        return ec(this, true);
      },
      hide: function () {
        return ec(this);
      },
      toggle: function (e) {
        if (typeof e == "boolean") {
          if (e) {
            return this.show();
          } else {
            return this.hide();
          }
        } else {
          return this.each(function () {
            if (es(this)) {
              C(this).show();
            } else {
              C(this).hide();
            }
          });
        }
      }
    });
    var eh = /^(?:checkbox|radio)$/i;
    var ed = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var ef = /^$|^module$|\/(?:java|ecma)script/i;
    e0 = m.createDocumentFragment().appendChild(m.createElement("div"));
    (e1 = m.createElement("input")).setAttribute("type", "radio");
    e1.setAttribute("checked", "checked");
    e1.setAttribute("name", "t");
    e0.appendChild(e1);
    A.checkClone = e0.cloneNode(true).cloneNode(true).lastChild.checked;
    e0.innerHTML = "<textarea>x</textarea>";
    A.noCloneChecked = !!e0.cloneNode(true).lastChild.defaultValue;
    e0.innerHTML = "<option></option>";
    A.option = !!e0.lastChild;
    var eA = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    function eg(e, t) {
      var r;
      r = e.getElementsByTagName !== undefined ? e.getElementsByTagName(t || "*") : e.querySelectorAll !== undefined ? e.querySelectorAll(t || "*") : [];
      if (t === undefined || t && S(e, t)) {
        return C.merge([e], r);
      } else {
        return r;
      }
    }
    function ep(e, t) {
      var r = 0;
      var n = e.length;
      for (; r < n; r++) {
        V.set(e[r], "globalEval", !t || V.get(t[r], "globalEval"));
      }
    }
    eA.tbody = eA.tfoot = eA.colgroup = eA.caption = eA.thead;
    eA.th = eA.td;
    if (!A.option) {
      eA.optgroup = eA.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    var em = /<|&#?\w+;/;
    function ey(e, t, r, n, i) {
      var o;
      var a;
      var s;
      var l;
      var u;
      var c = t.createDocumentFragment();
      var h = [];
      var d = 0;
      var f = e.length;
      for (; d < f; d++) {
        if ((o = e[d]) || o === 0) {
          if (b(o) === "object") {
            C.merge(h, o.nodeType ? [o] : o);
          } else if (em.test(o)) {
            a = a || c.appendChild(t.createElement("div"));
            s = eA[(ed.exec(o) || ["", ""])[1].toLowerCase()] || eA._default;
            a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2];
            u = s[0];
            while (u--) {
              a = a.lastChild;
            }
            C.merge(h, a.childNodes);
            (a = c.firstChild).textContent = "";
          } else {
            h.push(t.createTextNode(o));
          }
        }
      }
      c.textContent = "";
      d = 0;
      while (o = h[d++]) {
        if (n && C.inArray(o, n) > -1) {
          if (i) {
            i.push(o);
          }
          continue;
        }
        l = eo(o);
        a = eg(c.appendChild(o), "script");
        if (l) {
          ep(a);
        }
        if (r) {
          for (u = 0; o = a[u++];) {
            if (ef.test(o.type || "")) {
              r.push(o);
            }
          }
        }
      }
      return c;
    }
    var ev = /^key/;
    var eb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
    var ew = /^([^.]*)(?:\.(.+)|)/;
    function eC() {
      return true;
    }
    function eE() {
      return false;
    }
    function eI(e, t) {
      return e === function () {
        try {
          return m.activeElement;
        } catch (e) {}
      }() == (t === "focus");
    }
    function eB(e, t, r, n, i, o) {
      var a;
      var s;
      if (typeof t == "object") {
        if (typeof r != "string") {
          n = n || r;
          r = undefined;
        }
        for (s in t) {
          eB(e, s, r, n, t[s], o);
        }
        return e;
      }
      if (n == null && i == null) {
        i = r;
        n = r = undefined;
      } else if (i == null) {
        if (typeof r == "string") {
          i = n;
          n = undefined;
        } else {
          i = n;
          n = r;
          r = undefined;
        }
      }
      if (i === false) {
        i = eE;
      } else if (!i) {
        return e;
      }
      if (o === 1) {
        a = i;
        (i = function (e) {
          C().off(e);
          return a.apply(this, arguments);
        }).guid = a.guid ||= C.guid++;
      }
      return e.each(function () {
        C.event.add(this, t, i, n, r);
      });
    }
    function ex(e, t, r) {
      if (!r) {
        if (V.get(e, t) === undefined) {
          C.event.add(e, t, eC);
        }
        return;
      }
      V.set(e, t, false);
      C.event.add(e, t, {
        namespace: false,
        handler: function (e) {
          var n;
          var i;
          var a = V.get(this, t);
          if (e.isTrigger & 1 && this[t]) {
            if (a.length) {
              if ((C.event.special[t] || {}).delegateType) {
                e.stopPropagation();
              }
            } else {
              a = o.call(arguments);
              V.set(this, t, a);
              n = r(this, t);
              this[t]();
              if (a !== (i = V.get(this, t)) || n) {
                V.set(this, t, false);
              } else {
                i = {};
              }
              if (a !== i) {
                e.stopImmediatePropagation();
                e.preventDefault();
                return i.value;
              }
            }
          } else if (a.length) {
            V.set(this, t, {
              value: C.event.trigger(C.extend(a[0], C.Event.prototype), a.slice(1), this)
            });
            e.stopImmediatePropagation();
          }
        }
      });
    }
    C.event = {
      global: {},
      add: function (e, t, r, n, i) {
        var o;
        var a;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var A;
        var g;
        var p = V.get(e);
        if (K(e)) {
          if (r.handler) {
            r = (o = r).handler;
            i = o.selector;
          }
          if (i) {
            C.find.matchesSelector(ei, i);
          }
          r.guid ||= C.guid++;
          if (!(l = p.events)) {
            l = p.events = Object.create(null);
          }
          if (!(a = p.handle)) {
            a = p.handle = function (t) {
              if (C.event.triggered !== t.type) {
                return C.event.dispatch.apply(e, arguments);
              } else {
                return undefined;
              }
            };
          }
          u = (t = (t || "").match(O) || [""]).length;
          while (u--) {
            f = g = (s = ew.exec(t[u]) || [])[1];
            A = (s[2] || "").split(".").sort();
            if (f) {
              h = C.event.special[f] || {};
              f = (i ? h.delegateType : h.bindType) || f;
              h = C.event.special[f] || {};
              c = C.extend({
                type: f,
                origType: g,
                data: n,
                handler: r,
                guid: r.guid,
                selector: i,
                needsContext: i && C.expr.match.needsContext.test(i),
                namespace: A.join(".")
              }, o);
              if (!(d = l[f])) {
                (d = l[f] = []).delegateCount = 0;
                if ((!h.setup || h.setup.call(e, n, A, a) === false) && e.addEventListener) {
                  e.addEventListener(f, a);
                }
              }
              if (h.add) {
                h.add.call(e, c);
                c.handler.guid ||= r.guid;
              }
              if (i) {
                d.splice(d.delegateCount++, 0, c);
              } else {
                d.push(c);
              }
              C.event.global[f] = true;
            }
          }
        }
      },
      remove: function (e, t, r, n, i) {
        var o;
        var a;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f;
        var A;
        var g;
        var p = V.hasData(e) && V.get(e);
        if (p && (l = p.events)) {
          for (u = (t = (t || "").match(O) || [""]).length; u--;) {
            f = g = (s = ew.exec(t[u]) || [])[1];
            A = (s[2] || "").split(".").sort();
            if (!f) {
              for (f in l) {
                C.event.remove(e, f + t[u], r, n, true);
              }
              continue;
            }
            h = C.event.special[f] || {};
            d = l[f = (n ? h.delegateType : h.bindType) || f] || [];
            s = s[2] && RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)");
            a = o = d.length;
            while (o--) {
              c = d[o];
              if ((i || g === c.origType) && (!r || r.guid === c.guid) && (!s || s.test(c.namespace)) && (!n || n === c.selector || n === "**" && c.selector)) {
                d.splice(o, 1);
                if (c.selector) {
                  d.delegateCount--;
                }
                if (h.remove) {
                  h.remove.call(e, c);
                }
              }
            }
            if (a && !d.length) {
              if (!h.teardown || h.teardown.call(e, A, p.handle) === false) {
                C.removeEvent(e, f, p.handle);
              }
              delete l[f];
            }
          }
          if (C.isEmptyObject(l)) {
            V.remove(e, "handle events");
          }
        }
      },
      dispatch: function (e) {
        var t;
        var r;
        var n;
        var i;
        var o;
        var a;
        var s = Array(arguments.length);
        var l = C.event.fix(e);
        var u = (V.get(this, "events") || Object.create(null))[l.type] || [];
        var c = C.event.special[l.type] || {};
        t = 1;
        s[0] = l;
        for (; t < arguments.length; t++) {
          s[t] = arguments[t];
        }
        l.delegateTarget = this;
        if (!c.preDispatch || c.preDispatch.call(this, l) !== false) {
          a = C.event.handlers.call(this, l, u);
          t = 0;
          while ((i = a[t++]) && !l.isPropagationStopped()) {
            l.currentTarget = i.elem;
            r = 0;
            while ((o = i.handlers[r++]) && !l.isImmediatePropagationStopped()) {
              if (!l.rnamespace || o.namespace === false || l.rnamespace.test(o.namespace)) {
                l.handleObj = o;
                l.data = o.data;
                if ((n = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && (l.result = n) === false) {
                  l.preventDefault();
                  l.stopPropagation();
                }
              }
            }
          }
          if (c.postDispatch) {
            c.postDispatch.call(this, l);
          }
          return l.result;
        }
      },
      handlers: function (e, t) {
        var r;
        var n;
        var i;
        var o;
        var a;
        var s = [];
        var l = t.delegateCount;
        var u = e.target;
        if (l && u.nodeType && (e.type !== "click" || !(e.button >= 1))) {
          for (; u !== this; u = u.parentNode || this) {
            if (u.nodeType === 1 && (e.type !== "click" || u.disabled !== true)) {
              r = 0;
              o = [];
              a = {};
              for (; r < l; r++) {
                if (a[i = (n = t[r]).selector + " "] === undefined) {
                  a[i] = n.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length;
                }
                if (a[i]) {
                  o.push(n);
                }
              }
              if (o.length) {
                s.push({
                  elem: u,
                  handlers: o
                });
              }
            }
          }
        }
        u = this;
        if (l < t.length) {
          s.push({
            elem: u,
            handlers: t.slice(l)
          });
        }
        return s;
      },
      addProp: function (e, t) {
        Object.defineProperty(C.Event.prototype, e, {
          enumerable: true,
          configurable: true,
          get: g(t) ? function () {
            if (this.originalEvent) {
              return t(this.originalEvent);
            }
          } : function () {
            if (this.originalEvent) {
              return this.originalEvent[e];
            }
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: t
            });
          }
        });
      },
      fix: function (e) {
        if (e[C.expando]) {
          return e;
        } else {
          return new C.Event(e);
        }
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function (e) {
            var t = this || e;
            if (eh.test(t.type) && t.click && S(t, "input")) {
              ex(t, "click", eC);
            }
            return false;
          },
          trigger: function (e) {
            var t = this || e;
            if (eh.test(t.type) && t.click && S(t, "input")) {
              ex(t, "click");
            }
            return true;
          },
          _default: function (e) {
            var t = e.target;
            return eh.test(t.type) && t.click && S(t, "input") && V.get(t, "click") || S(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            if (e.result !== undefined && e.originalEvent) {
              e.originalEvent.returnValue = e.result;
            }
          }
        }
      }
    };
    C.removeEvent = function (e, t, r) {
      if (e.removeEventListener) {
        e.removeEventListener(t, r);
      }
    };
    C.Event = function (e, t) {
      if (!(this instanceof C.Event)) {
        return new C.Event(e, t);
      }
      if (e && e.type) {
        this.originalEvent = e;
        this.type = e.type;
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? eC : eE;
        this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
        this.currentTarget = e.currentTarget;
        this.relatedTarget = e.relatedTarget;
      } else {
        this.type = e;
      }
      if (t) {
        C.extend(this, t);
      }
      this.timeStamp = e && e.timeStamp || Date.now();
      this[C.expando] = true;
    };
    C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: eE,
      isPropagationStopped: eE,
      isImmediatePropagationStopped: eE,
      isSimulated: false,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = eC;
        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = eC;
        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = eC;
        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    C.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      char: true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: function (e) {
        var t = e.button;
        if (e.which == null && ev.test(e.type)) {
          return e.charCode ?? e.keyCode;
        } else if (!e.which && t !== undefined && eb.test(e.type)) {
          if (t & 1) {
            return 1;
          } else if (t & 2) {
            return 3;
          } else if (t & 4) {
            return 2;
          } else {
            return 0;
          }
        } else {
          return e.which;
        }
      }
    }, C.event.addProp);
    C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      C.event.special[e] = {
        setup: function () {
          ex(this, e, eI);
          return false;
        },
        trigger: function () {
          ex(this, e);
          return true;
        },
        delegateType: t
      };
    });
    C.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      C.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var r;
          var n = e.relatedTarget;
          var i = e.handleObj;
          if (!n || n !== this && !C.contains(this, n)) {
            e.type = i.origType;
            r = i.handler.apply(this, arguments);
            e.type = t;
          }
          return r;
        }
      };
    });
    C.fn.extend({
      on: function (e, t, r, n) {
        return eB(this, e, t, r, n);
      },
      one: function (e, t, r, n) {
        return eB(this, e, t, r, n, 1);
      },
      off: function (e, t, r) {
        var n;
        var i;
        if (e && e.preventDefault && e.handleObj) {
          n = e.handleObj;
          C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler);
          return this;
        }
        if (typeof e == "object") {
          for (i in e) {
            this.off(i, t, e[i]);
          }
          return this;
        }
        if (t === false || typeof t == "function") {
          r = t;
          t = undefined;
        }
        if (r === false) {
          r = eE;
        }
        return this.each(function () {
          C.event.remove(this, e, r, t);
        });
      }
    });
    var eD = /<script|<style|<link/i;
    var eS = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var ek = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function e_(e, t) {
      return S(e, "table") && S(t.nodeType !== 11 ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }
    function eT(e) {
      e.type = (e.getAttribute("type") !== null) + "/" + e.type;
      return e;
    }
    function eQ(e) {
      if ((e.type || "").slice(0, 5) === "true/") {
        e.type = e.type.slice(5);
      } else {
        e.removeAttribute("type");
      }
      return e;
    }
    function eR(e, t) {
      var r;
      var n;
      var i;
      var o;
      var a;
      var s;
      if (t.nodeType === 1) {
        if (V.hasData(e) && (s = V.get(e).events)) {
          V.remove(t, "handle events");
          for (i in s) {
            r = 0;
            n = s[i].length;
            for (; r < n; r++) {
              C.event.add(t, i, s[i][r]);
            }
          }
        }
        if (J.hasData(e)) {
          o = J.access(e);
          a = C.extend({}, o);
          J.set(t, a);
        }
      }
    }
    function eF(e, t, r, n) {
      t = a(t);
      var i;
      var o;
      var s;
      var l;
      var u;
      var c;
      var h = 0;
      var d = e.length;
      var f = d - 1;
      var p = t[0];
      var m = g(p);
      if (m || d > 1 && typeof p == "string" && !A.checkClone && eS.test(p)) {
        return e.each(function (i) {
          var o = e.eq(i);
          if (m) {
            t[0] = p.call(this, i, o.html());
          }
          eF(o, t, r, n);
        });
      }
      if (d && (o = (i = ey(t, e[0].ownerDocument, false, e, n)).firstChild, i.childNodes.length === 1 && (i = o), o || n)) {
        for (l = (s = C.map(eg(i, "script"), eT)).length; h < d; h++) {
          u = i;
          if (h !== f) {
            u = C.clone(u, true, true);
            if (l) {
              C.merge(s, eg(u, "script"));
            }
          }
          r.call(e[h], u, h);
        }
        if (l) {
          c = s[s.length - 1].ownerDocument;
          C.map(s, eQ);
          h = 0;
          for (; h < l; h++) {
            u = s[h];
            if (ef.test(u.type || "") && !V.access(u, "globalEval") && C.contains(c, u)) {
              if (u.src && (u.type || "").toLowerCase() !== "module") {
                if (C._evalUrl && !u.noModule) {
                  C._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                  }, c);
                }
              } else {
                v(u.textContent.replace(ek, ""), u, c);
              }
            }
          }
        }
      }
      return e;
    }
    function eL(e, t, r) {
      var n;
      var i = t ? C.filter(t, e) : e;
      var o = 0;
      for (; (n = i[o]) != null; o++) {
        if (!r && n.nodeType === 1) {
          C.cleanData(eg(n));
        }
        if (n.parentNode) {
          if (r && eo(n)) {
            ep(eg(n, "script"));
          }
          n.parentNode.removeChild(n);
        }
      }
      return e;
    }
    C.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, r) {
        var n;
        var i;
        var o;
        var a;
        var s = e.cloneNode(true);
        var l = eo(e);
        if (!A.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !C.isXMLDoc(e)) {
          n = 0;
          a = eg(s);
          i = (o = eg(e)).length;
          for (; n < i; n++) {
            (function (e, t) {
              var r = t.nodeName.toLowerCase();
              if (r === "input" && eh.test(e.type)) {
                t.checked = e.checked;
              } else if (r === "input" || r === "textarea") {
                t.defaultValue = e.defaultValue;
              }
            })(o[n], a[n]);
          }
        }
        if (t) {
          if (r) {
            n = 0;
            o = o || eg(e);
            a = a || eg(s);
            i = o.length;
            for (; n < i; n++) {
              eR(o[n], a[n]);
            }
          } else {
            eR(e, s);
          }
        }
        if ((a = eg(s, "script")).length > 0) {
          ep(a, !l && eg(e, "script"));
        }
        return s;
      },
      cleanData: function (e) {
        var t;
        var r;
        var n;
        var i = C.event.special;
        var o = 0;
        for (; (r = e[o]) !== undefined; o++) {
          if (K(r)) {
            if (t = r[V.expando]) {
              if (t.events) {
                for (n in t.events) {
                  if (i[n]) {
                    C.event.remove(r, n);
                  } else {
                    C.removeEvent(r, n, t.handle);
                  }
                }
              }
              r[V.expando] = undefined;
            }
            r[J.expando] &&= undefined;
          }
        }
      }
    });
    C.fn.extend({
      detach: function (e) {
        return eL(this, e, true);
      },
      remove: function (e) {
        return eL(this, e);
      },
      text: function (e) {
        return G(this, function (e) {
          if (e === undefined) {
            return C.text(this);
          } else {
            return this.empty().each(function () {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = e;
              }
            });
          }
        }, null, e, arguments.length);
      },
      append: function () {
        return eF(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            e_(this, e).appendChild(e);
          }
        });
      },
      prepend: function () {
        return eF(this, arguments, function (e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = e_(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return eF(this, arguments, function (e) {
          if (this.parentNode) {
            this.parentNode.insertBefore(e, this);
          }
        });
      },
      after: function () {
        return eF(this, arguments, function (e) {
          if (this.parentNode) {
            this.parentNode.insertBefore(e, this.nextSibling);
          }
        });
      },
      empty: function () {
        var e;
        var t = 0;
        for (; (e = this[t]) != null; t++) {
          if (e.nodeType === 1) {
            C.cleanData(eg(e, false));
            e.textContent = "";
          }
        }
        return this;
      },
      clone: function (e, t) {
        e = e != null && e;
        t = t == null ? e : t;
        return this.map(function () {
          return C.clone(this, e, t);
        });
      },
      html: function (e) {
        return G(this, function (e) {
          var t = this[0] || {};
          var r = 0;
          var n = this.length;
          if (e === undefined && t.nodeType === 1) {
            return t.innerHTML;
          }
          if (typeof e == "string" && !eD.test(e) && !eA[(ed.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);
            try {
              for (; r < n; r++) {
                t = this[r] || {};
                if (t.nodeType === 1) {
                  C.cleanData(eg(t, false));
                  t.innerHTML = e;
                }
              }
              t = 0;
            } catch (e) {}
          }
          if (t) {
            this.empty().append(e);
          }
        }, null, e, arguments.length);
      },
      replaceWith: function () {
        var e = [];
        return eF(this, arguments, function (t) {
          var r = this.parentNode;
          if (C.inArray(this, e) < 0) {
            C.cleanData(eg(this));
            if (r) {
              r.replaceChild(t, this);
            }
          }
        }, e);
      }
    });
    C.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      C.fn[e] = function (e) {
        var r;
        var n = [];
        var i = C(e);
        var o = i.length - 1;
        var a = 0;
        for (; a <= o; a++) {
          r = a === o ? this : this.clone(true);
          C(i[a])[t](r);
          s.apply(n, r.get());
        }
        return this.pushStack(n);
      };
    });
    var eO = RegExp("^(" + et + ")(?!px)[a-z%]+$", "i");
    function eN(t) {
      var r = t.ownerDocument.defaultView;
      if (!r || !r.opener) {
        r = e;
      }
      return r.getComputedStyle(t);
    }
    function eM(e, t, r) {
      var n;
      var i;
      var o = {};
      for (i in t) {
        o[i] = e.style[i];
        e.style[i] = t[i];
      }
      n = r.call(e);
      for (i in t) {
        e.style[i] = o[i];
      }
      return n;
    }
    var eP = RegExp(en.join("|"), "i");
    function eU(e, t, r) {
      var n;
      var i;
      var o;
      var a;
      var s = e.style;
      if (r = r || eN(e)) {
        if ((a = r.getPropertyValue(t) || r[t]) === "" && !eo(e)) {
          a = C.style(e, t);
        }
        if (!A.pixelBoxStyles() && eO.test(a) && eP.test(t)) {
          n = s.width;
          i = s.minWidth;
          o = s.maxWidth;
          s.minWidth = s.maxWidth = s.width = a;
          a = r.width;
          s.width = n;
          s.minWidth = i;
          s.maxWidth = o;
        }
      }
      if (a !== undefined) {
        return a + "";
      } else {
        return a;
      }
    }
    function ez(e, t) {
      return {
        get: function () {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        }
      };
    }
    (function () {
      function t() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          ei.appendChild(u).appendChild(c);
          var t = e.getComputedStyle(c);
          n = t.top !== "1%";
          l = r(t.marginLeft) === 12;
          c.style.right = "60%";
          a = r(t.right) === 36;
          i = r(t.width) === 36;
          c.style.position = "absolute";
          o = r(c.offsetWidth / 3) === 12;
          ei.removeChild(u);
          c = null;
        }
      }
      function r(e) {
        return Math.round(parseFloat(e));
      }
      var n;
      var i;
      var o;
      var a;
      var s;
      var l;
      var u = m.createElement("div");
      var c = m.createElement("div");
      if (c.style) {
        c.style.backgroundClip = "content-box";
        c.cloneNode(true).style.backgroundClip = "";
        A.clearCloneStyle = c.style.backgroundClip === "content-box";
        C.extend(A, {
          boxSizingReliable: function () {
            t();
            return i;
          },
          pixelBoxStyles: function () {
            t();
            return a;
          },
          pixelPosition: function () {
            t();
            return n;
          },
          reliableMarginLeft: function () {
            t();
            return l;
          },
          scrollboxSize: function () {
            t();
            return o;
          },
          reliableTrDimensions: function () {
            var t;
            var r;
            var n;
            if (s == null) {
              t = m.createElement("table");
              r = m.createElement("tr");
              n = m.createElement("div");
              t.style.cssText = "position:absolute;left:-11111px";
              r.style.height = "1px";
              n.style.height = "9px";
              ei.appendChild(t).appendChild(r).appendChild(n);
              s = parseInt(e.getComputedStyle(r).height) > 3;
              ei.removeChild(t);
            }
            return s;
          }
        });
      }
    })();
    var eH = ["Webkit", "Moz", "ms"];
    var eG = m.createElement("div").style;
    var eZ = {};
    function eW(e) {
      var t = C.cssProps[e] || eZ[e];
      return t || (e in eG ? e : eZ[e] = function (e) {
        var t = e[0].toUpperCase() + e.slice(1);
        var r = eH.length;
        while (r--) {
          if ((e = eH[r] + t) in eG) {
            return e;
          }
        }
      }(e) || e);
    }
    var ej = /^(none|table(?!-c[ea]).+)/;
    var eY = /^--/;
    var eK = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    };
    var eq = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function eV(e, t, r) {
      var n = er.exec(t);
      if (n) {
        return Math.max(0, n[2] - (r || 0)) + (n[3] || "px");
      } else {
        return t;
      }
    }
    function eJ(e, t, r, n, i, o) {
      var a = +(t === "width");
      var s = 0;
      var l = 0;
      if (r === (n ? "border" : "content")) {
        return 0;
      }
      for (; a < 4; a += 2) {
        if (r === "margin") {
          l += C.css(e, r + en[a], true, i);
        }
        if (n) {
          if (r === "content") {
            l -= C.css(e, "padding" + en[a], true, i);
          }
          if (r !== "margin") {
            l -= C.css(e, "border" + en[a] + "Width", true, i);
          }
        } else {
          l += C.css(e, "padding" + en[a], true, i);
          if (r !== "padding") {
            l += C.css(e, "border" + en[a] + "Width", true, i);
          } else {
            s += C.css(e, "border" + en[a] + "Width", true, i);
          }
        }
      }
      if (!n && o >= 0) {
        l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5)) || 0;
      }
      return l;
    }
    function eX(e, t, r) {
      var n = eN(e);
      var i = (!A.boxSizingReliable() || r) && C.css(e, "boxSizing", false, n) === "border-box";
      var o = i;
      var a = eU(e, t, n);
      var s = "offset" + t[0].toUpperCase() + t.slice(1);
      if (eO.test(a)) {
        if (!r) {
          return a;
        }
        a = "auto";
      }
      if ((!A.boxSizingReliable() && i || !A.reliableTrDimensions() && S(e, "tr") || a === "auto" || !parseFloat(a) && C.css(e, "display", false, n) === "inline") && e.getClientRects().length) {
        i = C.css(e, "boxSizing", false, n) === "border-box";
        if (o = s in e) {
          a = e[s];
        }
      }
      return (a = parseFloat(a) || 0) + eJ(e, t, r || (i ? "border" : "content"), o, n, a) + "px";
    }
    function e$(e, t, r, n, i) {
      return new e$.prototype.init(e, t, r, n, i);
    }
    C.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var r = eU(e, "opacity");
              if (r === "") {
                return "1";
              } else {
                return r;
              }
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        columnCount: true,
        fillOpacity: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        widows: true,
        zIndex: true,
        zoom: true
      },
      cssProps: {},
      style: function (e, t, r, n) {
        if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
          var i;
          var o;
          var a;
          var s = Y(t);
          var l = eY.test(t);
          var u = e.style;
          if (!l) {
            t = eW(s);
          }
          a = C.cssHooks[t] || C.cssHooks[s];
          if (r === undefined) {
            if (a && "get" in a && (i = a.get(e, false, n)) !== undefined) {
              return i;
            } else {
              return u[t];
            }
          }
          if ((o = typeof r) == "string" && (i = er.exec(r)) && i[1]) {
            r = el(e, t, i);
            o = "number";
          }
          if (r != null && r == r) {
            if (o === "number" && !l) {
              r += i && i[3] || (C.cssNumber[s] ? "" : "px");
            }
            if (!A.clearCloneStyle && r === "" && t.indexOf("background") === 0) {
              u[t] = "inherit";
            }
            if (!a || !("set" in a) || (r = a.set(e, r, n)) !== undefined) {
              if (l) {
                u.setProperty(t, r);
              } else {
                u[t] = r;
              }
            }
          }
        }
      },
      css: function (e, t, r, n) {
        var i;
        var o;
        var a;
        var s = Y(t);
        if (!eY.test(t)) {
          t = eW(s);
        }
        if ((a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a) {
          i = a.get(e, true, r);
        }
        if (i === undefined) {
          i = eU(e, t, n);
        }
        if (i === "normal" && t in eq) {
          i = eq[t];
        }
        if (r === "" || r) {
          o = parseFloat(i);
          if (r === true || isFinite(o)) {
            return o || 0;
          } else {
            return i;
          }
        } else {
          return i;
        }
      }
    });
    C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = {
        get: function (e, r, n) {
          if (r) {
            if (!ej.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width) {
              return eX(e, t, n);
            } else {
              return eM(e, eK, function () {
                return eX(e, t, n);
              });
            }
          }
        },
        set: function (e, r, n) {
          var i;
          var o = eN(e);
          var a = !A.scrollboxSize() && o.position === "absolute";
          var s = (a || n) && C.css(e, "boxSizing", false, o) === "border-box";
          var l = n ? eJ(e, t, n, s, o) : 0;
          if (s && a) {
            l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - eJ(e, t, "border", false, o) - 0.5);
          }
          if (l && (i = er.exec(r)) && (i[3] || "px") !== "px") {
            e.style[t] = r;
            r = C.css(e, t);
          }
          return eV(e, r, l);
        }
      };
    });
    C.cssHooks.marginLeft = ez(A.reliableMarginLeft, function (e, t) {
      if (t) {
        return (parseFloat(eU(e, "marginLeft")) || e.getBoundingClientRect().left - eM(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }
    });
    C.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      C.cssHooks[e + t] = {
        expand: function (r) {
          var n = 0;
          var i = {};
          var o = typeof r == "string" ? r.split(" ") : [r];
          for (; n < 4; n++) {
            i[e + en[n] + t] = o[n] || o[n - 2] || o[0];
          }
          return i;
        }
      };
      if (e !== "margin") {
        C.cssHooks[e + t].set = eV;
      }
    });
    C.fn.extend({
      css: function (e, t) {
        return G(this, function (e, t, r) {
          var n;
          var i;
          var o = {};
          var a = 0;
          if (Array.isArray(t)) {
            n = eN(e);
            i = t.length;
            for (; a < i; a++) {
              o[t[a]] = C.css(e, t[a], false, n);
            }
            return o;
          }
          if (r !== undefined) {
            return C.style(e, t, r);
          } else {
            return C.css(e, t);
          }
        }, e, t, arguments.length > 1);
      }
    });
    C.Tween = e$;
    e$.prototype = {
      constructor: e$,
      init: function (e, t, r, n, i, o) {
        this.elem = e;
        this.prop = r;
        this.easing = i || C.easing._default;
        this.options = t;
        this.start = this.now = this.cur();
        this.end = n;
        this.unit = o || (C.cssNumber[r] ? "" : "px");
      },
      cur: function () {
        var e = e$.propHooks[this.prop];
        if (e && e.get) {
          return e.get(this);
        } else {
          return e$.propHooks._default.get(this);
        }
      },
      run: function (e) {
        var t;
        var r = e$.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
        } else {
          this.pos = t = e;
        }
        this.now = (this.end - this.start) * t + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (r && r.set) {
          r.set(this);
        } else {
          e$.propHooks._default.set(this);
        }
        return this;
      }
    };
    e$.prototype.init.prototype = e$.prototype;
    e$.propHooks = {
      _default: {
        get: function (e) {
          var t;
          if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
            return e.elem[e.prop];
          } else if ((t = C.css(e.elem, e.prop, "")) && t !== "auto") {
            return t;
          } else {
            return 0;
          }
        },
        set: function (e) {
          if (C.fx.step[e.prop]) {
            C.fx.step[e.prop](e);
          } else if (e.elem.nodeType === 1 && (C.cssHooks[e.prop] || e.elem.style[eW(e.prop)] != null)) {
            C.style(e.elem, e.prop, e.now + e.unit);
          } else {
            e.elem[e.prop] = e.now;
          }
        }
      }
    };
    e$.propHooks.scrollTop = e$.propHooks.scrollLeft = {
      set: function (e) {
        if (e.elem.nodeType && e.elem.parentNode) {
          e.elem[e.prop] = e.now;
        }
      }
    };
    C.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    };
    C.fx = e$.prototype.init;
    C.fx.step = {};
    var e0;
    var e1;
    var e2;
    var e5;
    var e3 = /^(?:toggle|show|hide)$/;
    var e4 = /queueHooks$/;
    function e6() {
      e.setTimeout(function () {
        e2 = undefined;
      });
      return e2 = Date.now();
    }
    function e8(e, t) {
      var r;
      var n = 0;
      var i = {
        height: e
      };
      for (t = +!!t; n < 4; n += 2 - t) {
        i["margin" + (r = en[n])] = i["padding" + r] = e;
      }
      if (t) {
        i.opacity = i.width = e;
      }
      return i;
    }
    function e7(e, t, r) {
      var n;
      var i = (e9.tweeners[t] || []).concat(e9.tweeners["*"]);
      var o = 0;
      var a = i.length;
      for (; o < a; o++) {
        if (n = i[o].call(r, t, e)) {
          return n;
        }
      }
    }
    function e9(e, t, r) {
      var n;
      var i;
      var o = 0;
      var a = e9.prefilters.length;
      var s = C.Deferred().always(function () {
        delete l.elem;
      });
      function l() {
        if (i) {
          return false;
        }
        var t = e2 || e6();
        var r = Math.max(0, u.startTime + u.duration - t);
        var n = 1 - (r / u.duration || 0);
        var o = 0;
        var a = u.tweens.length;
        for (; o < a; o++) {
          u.tweens[o].run(n);
        }
        s.notifyWith(e, [u, n, r]);
        if (n < 1 && a) {
          return r;
        } else {
          if (!a) {
            s.notifyWith(e, [u, 1, 0]);
          }
          s.resolveWith(e, [u]);
          return false;
        }
      }
      var u = s.promise({
        elem: e,
        props: C.extend({}, t),
        opts: C.extend(true, {
          specialEasing: {},
          easing: C.easing._default
        }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: e2 || e6(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var n = C.Tween(e, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
          u.tweens.push(n);
          return n;
        },
        stop: function (t) {
          var r = 0;
          var n = t ? u.tweens.length : 0;
          if (i) {
            return this;
          }
          for (i = true; r < n; r++) {
            u.tweens[r].run(1);
          }
          if (t) {
            s.notifyWith(e, [u, 1, 0]);
            s.resolveWith(e, [u, t]);
          } else {
            s.rejectWith(e, [u, t]);
          }
          return this;
        }
      });
      var c = u.props;
      for (function (e, t) {
        var r;
        var n;
        var i;
        var o;
        var a;
        for (r in e) {
          i = t[n = Y(r)];
          if (Array.isArray(o = e[r])) {
            i = o[1];
            o = e[r] = o[0];
          }
          if (r !== n) {
            e[n] = o;
            delete e[r];
          }
          if ((a = C.cssHooks[n]) && "expand" in a) {
            o = a.expand(o);
            delete e[n];
            for (r in o) {
              if (!(r in e)) {
                e[r] = o[r];
                t[r] = i;
              }
            }
          } else {
            t[n] = i;
          }
        }
      }(c, u.opts.specialEasing); o < a; o++) {
        if (n = e9.prefilters[o].call(u, e, c, u.opts)) {
          if (g(n.stop)) {
            C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n);
          }
          return n;
        }
      }
      C.map(c, e7, u);
      if (g(u.opts.start)) {
        u.opts.start.call(e, u);
      }
      u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
      C.fx.timer(C.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      }));
      return u;
    }
    C.Animation = C.extend(e9, {
      tweeners: {
        "*": [function (e, t) {
          var r = this.createTween(e, t);
          el(r.elem, e, er.exec(t), r);
          return r;
        }]
      },
      tweener: function (e, t) {
        if (g(e)) {
          t = e;
          e = ["*"];
        } else {
          e = e.match(O);
        }
        var r;
        var n = 0;
        var i = e.length;
        for (; n < i; n++) {
          r = e[n];
          e9.tweeners[r] = e9.tweeners[r] || [];
          e9.tweeners[r].unshift(t);
        }
      },
      prefilters: [function (e, t, r) {
        var n;
        var i;
        var o;
        var a;
        var s;
        var l;
        var u;
        var c;
        var h = "width" in t || "height" in t;
        var d = this;
        var f = {};
        var A = e.style;
        var g = e.nodeType && es(e);
        var p = V.get(e, "fxshow");
        if (!r.queue) {
          if ((a = C._queueHooks(e, "fx")).unqueued == null) {
            a.unqueued = 0;
            s = a.empty.fire;
            a.empty.fire = function () {
              if (!a.unqueued) {
                s();
              }
            };
          }
          a.unqueued++;
          d.always(function () {
            d.always(function () {
              a.unqueued--;
              if (!C.queue(e, "fx").length) {
                a.empty.fire();
              }
            });
          });
        }
        for (n in t) {
          i = t[n];
          if (e3.test(i)) {
            delete t[n];
            o = o || i === "toggle";
            if (i === (g ? "hide" : "show")) {
              if (i !== "show" || !p || p[n] === undefined) {
                continue;
              }
              g = true;
            }
            f[n] = p && p[n] || C.style(e, n);
          }
        }
        if (!!(l = !C.isEmptyObject(t)) || !C.isEmptyObject(f)) {
          if (h && e.nodeType === 1) {
            r.overflow = [A.overflow, A.overflowX, A.overflowY];
            if ((u = p && p.display) == null) {
              u = V.get(e, "display");
            }
            if ((c = C.css(e, "display")) === "none") {
              if (u) {
                c = u;
              } else {
                ec([e], true);
                u = e.style.display || u;
                c = C.css(e, "display");
                ec([e]);
              }
            }
            if ((c === "inline" || c === "inline-block" && u != null) && C.css(e, "float") === "none") {
              if (!l) {
                d.done(function () {
                  A.display = u;
                });
                if (u == null) {
                  u = (c = A.display) === "none" ? "" : c;
                }
              }
              A.display = "inline-block";
            }
          }
          if (r.overflow) {
            A.overflow = "hidden";
            d.always(function () {
              A.overflow = r.overflow[0];
              A.overflowX = r.overflow[1];
              A.overflowY = r.overflow[2];
            });
          }
          l = false;
          for (n in f) {
            if (!l) {
              if (p) {
                if ("hidden" in p) {
                  g = p.hidden;
                }
              } else {
                p = V.access(e, "fxshow", {
                  display: u
                });
              }
              if (o) {
                p.hidden = !g;
              }
              if (g) {
                ec([e], true);
              }
              d.done(function () {
                if (!g) {
                  ec([e]);
                }
                V.remove(e, "fxshow");
                for (n in f) {
                  C.style(e, n, f[n]);
                }
              });
            }
            l = e7(g ? p[n] : 0, n, d);
            if (!(n in p)) {
              p[n] = l.start;
              if (g) {
                l.end = l.start;
                l.start = 0;
              }
            }
          }
        }
      }],
      prefilter: function (e, t) {
        if (t) {
          e9.prefilters.unshift(e);
        } else {
          e9.prefilters.push(e);
        }
      }
    });
    C.speed = function (e, t, r) {
      var n = e && typeof e == "object" ? C.extend({}, e) : {
        complete: r || !r && t || g(e) && e,
        duration: e,
        easing: r && t || t && !g(t) && t
      };
      if (C.fx.off) {
        n.duration = 0;
      } else if (typeof n.duration != "number") {
        if (n.duration in C.fx.speeds) {
          n.duration = C.fx.speeds[n.duration];
        } else {
          n.duration = C.fx.speeds._default;
        }
      }
      if (n.queue == null || n.queue === true) {
        n.queue = "fx";
      }
      n.old = n.complete;
      n.complete = function () {
        if (g(n.old)) {
          n.old.call(this);
        }
        if (n.queue) {
          C.dequeue(this, n.queue);
        }
      };
      return n;
    };
    C.fn.extend({
      fadeTo: function (e, t, r, n) {
        return this.filter(es).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, r, n);
      },
      animate: function (e, t, r, n) {
        var i = C.isEmptyObject(e);
        var o = C.speed(t, r, n);
        function a() {
          var t = e9(this, C.extend({}, e), o);
          if (i || V.get(this, "finish")) {
            t.stop(true);
          }
        }
        a.finish = a;
        if (i || o.queue === false) {
          return this.each(a);
        } else {
          return this.queue(o.queue, a);
        }
      },
      stop: function (e, t, r) {
        function n(e) {
          var t = e.stop;
          delete e.stop;
          t(r);
        }
        if (typeof e != "string") {
          r = t;
          t = e;
          e = undefined;
        }
        if (t) {
          this.queue(e || "fx", []);
        }
        return this.each(function () {
          var t = true;
          var i = e != null && e + "queueHooks";
          var o = C.timers;
          var a = V.get(this);
          if (i) {
            if (a[i] && a[i].stop) {
              n(a[i]);
            }
          } else {
            for (i in a) {
              if (a[i] && a[i].stop && e4.test(i)) {
                n(a[i]);
              }
            }
          }
          for (i = o.length; i--;) {
            if (o[i].elem === this && (e == null || o[i].queue === e)) {
              o[i].anim.stop(r);
              t = false;
              o.splice(i, 1);
            }
          }
          if (t || !r) {
            C.dequeue(this, e);
          }
        });
      },
      finish: function (e) {
        if (e !== false) {
          e = e || "fx";
        }
        return this.each(function () {
          var t;
          var r = V.get(this);
          var n = r[e + "queue"];
          var i = r[e + "queueHooks"];
          var o = C.timers;
          var a = n ? n.length : 0;
          r.finish = true;
          C.queue(this, e, []);
          if (i && i.stop) {
            i.stop.call(this, true);
          }
          t = o.length;
          while (t--) {
            if (o[t].elem === this && o[t].queue === e) {
              o[t].anim.stop(true);
              o.splice(t, 1);
            }
          }
          for (t = 0; t < a; t++) {
            if (n[t] && n[t].finish) {
              n[t].finish.call(this);
            }
          }
          delete r.finish;
        });
      }
    });
    C.each(["toggle", "show", "hide"], function (e, t) {
      var r = C.fn[t];
      C.fn[t] = function (e, n, i) {
        if (e == null || typeof e == "boolean") {
          return r.apply(this, arguments);
        } else {
          return this.animate(e8(t, true), e, n, i);
        }
      };
    });
    C.each({
      slideDown: e8("show"),
      slideUp: e8("hide"),
      slideToggle: e8("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      C.fn[e] = function (e, r, n) {
        return this.animate(t, e, r, n);
      };
    });
    C.timers = [];
    C.fx.tick = function () {
      var e;
      var t = 0;
      var r = C.timers;
      for (e2 = Date.now(); t < r.length; t++) {
        if (!(e = r[t])() && r[t] === e) {
          r.splice(t--, 1);
        }
      }
      if (!r.length) {
        C.fx.stop();
      }
      e2 = undefined;
    };
    C.fx.timer = function (e) {
      C.timers.push(e);
      C.fx.start();
    };
    C.fx.interval = 13;
    C.fx.start = function () {
      if (!e5) {
        e5 = true;
        (function t() {
          if (e5) {
            if (m.hidden === false && e.requestAnimationFrame) {
              e.requestAnimationFrame(t);
            } else {
              e.setTimeout(t, C.fx.interval);
            }
            C.fx.tick();
          }
        })();
      }
    };
    C.fx.stop = function () {
      e5 = null;
    };
    C.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    C.fn.delay = function (t, r) {
      t = C.fx && C.fx.speeds[t] || t;
      r = r || "fx";
      return this.queue(r, function (r, n) {
        var i = e.setTimeout(r, t);
        n.stop = function () {
          e.clearTimeout(i);
        };
      });
    };
    te = m.createElement("input");
    tt = m.createElement("select").appendChild(m.createElement("option"));
    te.type = "checkbox";
    A.checkOn = te.value !== "";
    A.optSelected = tt.selected;
    (te = m.createElement("input")).value = "t";
    te.type = "radio";
    A.radioValue = te.value === "t";
    var te;
    var tt;
    var tr;
    var tn = C.expr.attrHandle;
    C.fn.extend({
      attr: function (e, t) {
        return G(this, C.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      }
    });
    C.extend({
      attr: function (e, t, r) {
        var n;
        var i;
        var o = e.nodeType;
        if (o !== 3 && o !== 8 && o !== 2) {
          if (e.getAttribute === undefined) {
            return C.prop(e, t, r);
          }
          if (o !== 1 || !C.isXMLDoc(e)) {
            i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? tr : undefined);
          }
          if (r !== undefined) {
            if (r === null) {
              C.removeAttr(e, t);
              return;
            }
            if (i && "set" in i && (n = i.set(e, r, t)) !== undefined) {
              return n;
            } else {
              e.setAttribute(t, r + "");
              return r;
            }
          }
          if (i && "get" in i && (n = i.get(e, t)) !== null) {
            return n;
          } else if ((n = C.find.attr(e, t)) == null) {
            return undefined;
          } else {
            return n;
          }
        }
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!A.radioValue && t === "radio" && S(e, "input")) {
              var r = e.value;
              e.setAttribute("type", t);
              if (r) {
                e.value = r;
              }
              return t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var r;
        var n = 0;
        var i = t && t.match(O);
        if (i && e.nodeType === 1) {
          while (r = i[n++]) {
            e.removeAttribute(r);
          }
        }
      }
    });
    tr = {
      set: function (e, t, r) {
        if (t === false) {
          C.removeAttr(e, r);
        } else {
          e.setAttribute(r, r);
        }
        return r;
      }
    };
    C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var r = tn[t] || C.find.attr;
      tn[t] = function (e, t, n) {
        var i;
        var o;
        var a = t.toLowerCase();
        if (!n) {
          o = tn[a];
          tn[a] = i;
          i = r(e, t, n) != null ? a : null;
          tn[a] = o;
        }
        return i;
      };
    });
    var ti = /^(?:input|select|textarea|button)$/i;
    var to = /^(?:a|area)$/i;
    function ta(e) {
      return (e.match(O) || []).join(" ");
    }
    function ts(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function tl(e) {
      if (Array.isArray(e)) {
        return e;
      } else {
        return typeof e == "string" && e.match(O) || [];
      }
    }
    C.fn.extend({
      prop: function (e, t) {
        return G(this, C.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      }
    });
    C.extend({
      prop: function (e, t, r) {
        var n;
        var i;
        var o = e.nodeType;
        if (o !== 3 && o !== 8 && o !== 2) {
          if (o !== 1 || !C.isXMLDoc(e)) {
            t = C.propFix[t] || t;
            i = C.propHooks[t];
          }
          if (r !== undefined) {
            if (i && "set" in i && (n = i.set(e, r, t)) !== undefined) {
              return n;
            } else {
              return e[t] = r;
            }
          } else if (i && "get" in i && (n = i.get(e, t)) !== null) {
            return n;
          } else {
            return e[t];
          }
        }
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = C.find.attr(e, "tabindex");
            if (t) {
              return parseInt(t, 10);
            } else if (ti.test(e.nodeName) || to.test(e.nodeName) && e.href) {
              return 0;
            } else {
              return -1;
            }
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    });
    if (!A.optSelected) {
      C.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          if (t && t.parentNode) {
            t.parentNode.selectedIndex;
          }
          return null;
        },
        set: function (e) {
          var t = e.parentNode;
          if (t) {
            t.selectedIndex;
            if (t.parentNode) {
              t.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    });
    C.fn.extend({
      addClass: function (e) {
        var t;
        var r;
        var n;
        var i;
        var o;
        var a;
        var s;
        var l = 0;
        if (g(e)) {
          return this.each(function (t) {
            C(this).addClass(e.call(this, t, ts(this)));
          });
        }
        if ((t = tl(e)).length) {
          while (r = this[l++]) {
            i = ts(r);
            if (n = r.nodeType === 1 && " " + ta(i) + " ") {
              for (a = 0; o = t[a++];) {
                if (n.indexOf(" " + o + " ") < 0) {
                  n += o + " ";
                }
              }
              if (i !== (s = ta(n))) {
                r.setAttribute("class", s);
              }
            }
          }
        }
        return this;
      },
      removeClass: function (e) {
        var t;
        var r;
        var n;
        var i;
        var o;
        var a;
        var s;
        var l = 0;
        if (g(e)) {
          return this.each(function (t) {
            C(this).removeClass(e.call(this, t, ts(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ((t = tl(e)).length) {
          while (r = this[l++]) {
            i = ts(r);
            if (n = r.nodeType === 1 && " " + ta(i) + " ") {
              for (a = 0; o = t[a++];) {
                while (n.indexOf(" " + o + " ") > -1) {
                  n = n.replace(" " + o + " ", " ");
                }
              }
              if (i !== (s = ta(n))) {
                r.setAttribute("class", s);
              }
            }
          }
        }
        return this;
      },
      toggleClass: function (e, t) {
        var r = typeof e;
        var n = r === "string" || Array.isArray(e);
        if (typeof t == "boolean" && n) {
          if (t) {
            return this.addClass(e);
          } else {
            return this.removeClass(e);
          }
        } else if (g(e)) {
          return this.each(function (r) {
            C(this).toggleClass(e.call(this, r, ts(this), t), t);
          });
        } else {
          return this.each(function () {
            var t;
            var i;
            var o;
            var a;
            if (n) {
              i = 0;
              o = C(this);
              a = tl(e);
              while (t = a[i++]) {
                if (o.hasClass(t)) {
                  o.removeClass(t);
                } else {
                  o.addClass(t);
                }
              }
            } else if (e === undefined || r === "boolean") {
              if (t = ts(this)) {
                V.set(this, "__className__", t);
              }
              if (this.setAttribute) {
                this.setAttribute("class", t || e === false ? "" : V.get(this, "__className__") || "");
              }
            }
          });
        }
      },
      hasClass: function (e) {
        var t;
        var r;
        var n = 0;
        for (t = " " + e + " "; r = this[n++];) {
          if (r.nodeType === 1 && (" " + ta(ts(r)) + " ").indexOf(t) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var tu = /\r/g;
    C.fn.extend({
      val: function (e) {
        var t;
        var r;
        var n;
        var i = this[0];
        if (!arguments.length) {
          if (i) {
            if ((t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (r = t.get(i, "value")) !== undefined) {
              return r;
            } else if (typeof (r = i.value) == "string") {
              return r.replace(tu, "");
            } else if (r == null) {
              return "";
            } else {
              return r;
            }
          } else {
            return undefined;
          }
        }
        n = g(e);
        return this.each(function (r) {
          var i;
          if (this.nodeType === 1) {
            if ((i = n ? e.call(this, r, C(this).val()) : e) == null) {
              i = "";
            } else if (typeof i == "number") {
              i += "";
            } else if (Array.isArray(i)) {
              i = C.map(i, function (e) {
                if (e == null) {
                  return "";
                } else {
                  return e + "";
                }
              });
            }
            if (!(t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) || !("set" in t) || t.set(this, i, "value") === undefined) {
              this.value = i;
            }
          }
        });
      }
    });
    C.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = C.find.attr(e, "value");
            return t ?? ta(C.text(e));
          }
        },
        select: {
          get: function (e) {
            var t;
            var r;
            var n;
            var i = e.options;
            var o = e.selectedIndex;
            var a = e.type === "select-one";
            var s = a ? null : [];
            var l = a ? o + 1 : i.length;
            for (n = o < 0 ? l : a ? o : 0; n < l; n++) {
              if (((r = i[n]).selected || n === o) && !r.disabled && (!r.parentNode.disabled || !S(r.parentNode, "optgroup"))) {
                t = C(r).val();
                if (a) {
                  return t;
                }
                s.push(t);
              }
            }
            return s;
          },
          set: function (e, t) {
            var r;
            var n;
            var i = e.options;
            var o = C.makeArray(t);
            var a = i.length;
            while (a--) {
              if ((n = i[a]).selected = C.inArray(C.valHooks.option.get(n), o) > -1) {
                r = true;
              }
            }
            if (!r) {
              e.selectedIndex = -1;
            }
            return o;
          }
        }
      }
    });
    C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) {
            return e.checked = C.inArray(C(e).val(), t) > -1;
          }
        }
      };
      if (!A.checkOn) {
        C.valHooks[this].get = function (e) {
          if (e.getAttribute("value") === null) {
            return "on";
          } else {
            return e.value;
          }
        };
      }
    });
    A.focusin = "onfocusin" in e;
    var tc = /^(?:focusinfocus|focusoutblur)$/;
    function th(e) {
      e.stopPropagation();
    }
    C.extend(C.event, {
      trigger: function (t, r, n, i) {
        var o;
        var a;
        var s;
        var l;
        var u;
        var c;
        var d;
        var f;
        var A = [n || m];
        var y = h.call(t, "type") ? t.type : t;
        var v = h.call(t, "namespace") ? t.namespace.split(".") : [];
        a = f = s = n = n || m;
        if (n.nodeType !== 3 && n.nodeType !== 8 && !tc.test(y + C.event.triggered)) {
          if (y.indexOf(".") > -1) {
            y = (v = y.split(".")).shift();
            v.sort();
          }
          u = y.indexOf(":") < 0 && "on" + y;
          (t = t[C.expando] ? t : new C.Event(y, typeof t == "object" && t)).isTrigger = i ? 2 : 3;
          t.namespace = v.join(".");
          t.rnamespace = t.namespace ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          t.result = undefined;
          t.target ||= n;
          r = r == null ? [t] : C.makeArray(r, [t]);
          d = C.event.special[y] || {};
          if (i || !d.trigger || d.trigger.apply(n, r) !== false) {
            if (!i && !d.noBubble && !p(n)) {
              l = d.delegateType || y;
              if (!tc.test(l + y)) {
                a = a.parentNode;
              }
              for (; a; a = a.parentNode) {
                A.push(a);
                s = a;
              }
              if (s === (n.ownerDocument || m)) {
                A.push(s.defaultView || s.parentWindow || e);
              }
            }
            for (o = 0; (a = A[o++]) && !t.isPropagationStopped();) {
              f = a;
              t.type = o > 1 ? l : d.bindType || y;
              if (c = (V.get(a, "events") || Object.create(null))[t.type] && V.get(a, "handle")) {
                c.apply(a, r);
              }
              if ((c = u && a[u]) && c.apply && K(a)) {
                t.result = c.apply(a, r);
                if (t.result === false) {
                  t.preventDefault();
                }
              }
            }
            t.type = y;
            if (!i && !t.isDefaultPrevented() && (!d._default || d._default.apply(A.pop(), r) === false) && K(n) && u && g(n[y]) && !p(n)) {
              if (s = n[u]) {
                n[u] = null;
              }
              C.event.triggered = y;
              if (t.isPropagationStopped()) {
                f.addEventListener(y, th);
              }
              n[y]();
              if (t.isPropagationStopped()) {
                f.removeEventListener(y, th);
              }
              C.event.triggered = undefined;
              if (s) {
                n[u] = s;
              }
            }
            return t.result;
          }
        }
      },
      simulate: function (e, t, r) {
        var n = C.extend(new C.Event(), r, {
          type: e,
          isSimulated: true
        });
        C.event.trigger(n, null, t);
      }
    });
    C.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var r = this[0];
        if (r) {
          return C.event.trigger(e, t, r, true);
        }
      }
    });
    if (!A.focusin) {
      C.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        function r(e) {
          C.event.simulate(t, e.target, C.event.fix(e));
        }
        C.event.special[t] = {
          setup: function () {
            var n = this.ownerDocument || this.document || this;
            var i = V.access(n, t);
            if (!i) {
              n.addEventListener(e, r, true);
            }
            V.access(n, t, (i || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this.document || this;
            var i = V.access(n, t) - 1;
            if (i) {
              V.access(n, t, i);
            } else {
              n.removeEventListener(e, r, true);
              V.remove(n, t);
            }
          }
        };
      });
    }
    var td = e.location;
    var tf = {
      guid: Date.now()
    };
    var tA = /\?/;
    C.parseXML = function (t) {
      var r;
      if (!t || typeof t != "string") {
        return null;
      }
      try {
        r = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        r = undefined;
      }
      if (!r || r.getElementsByTagName("parsererror").length) {
        C.error("Invalid XML: " + t);
      }
      return r;
    };
    var tg = /\[\]$/;
    var tp = /\r?\n/g;
    var tm = /^(?:submit|button|image|reset|file)$/i;
    var ty = /^(?:input|select|textarea|keygen)/i;
    C.param = function (e, t) {
      var r;
      var n = [];
      function i(e, t) {
        var r = g(t) ? t() : t;
        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(r == null ? "" : r);
      }
      if (e == null) {
        return "";
      }
      if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) {
        C.each(e, function () {
          i(this.name, this.value);
        });
      } else {
        for (r in e) {
          (function e(t, r, n, i) {
            var o;
            if (Array.isArray(r)) {
              C.each(r, function (r, o) {
                if (n || tg.test(t)) {
                  i(t, o);
                } else {
                  e(t + "[" + (typeof o == "object" && o != null ? r : "") + "]", o, n, i);
                }
              });
            } else if (n || b(r) !== "object") {
              i(t, r);
            } else {
              for (o in r) {
                e(t + "[" + o + "]", r[o], n, i);
              }
            }
          })(r, e[r], t, i);
        }
      }
      return n.join("&");
    };
    C.fn.extend({
      serialize: function () {
        return C.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = C.prop(this, "elements");
          if (e) {
            return C.makeArray(e);
          } else {
            return this;
          }
        }).filter(function () {
          var e = this.type;
          return this.name && !C(this).is(":disabled") && ty.test(this.nodeName) && !tm.test(e) && (this.checked || !eh.test(e));
        }).map(function (e, t) {
          var r = C(this).val();
          if (r == null) {
            return null;
          } else if (Array.isArray(r)) {
            return C.map(r, function (e) {
              return {
                name: t.name,
                value: e.replace(tp, "\r\n")
              };
            });
          } else {
            return {
              name: t.name,
              value: r.replace(tp, "\r\n")
            };
          }
        }).get();
      }
    });
    var tv = /%20/g;
    var tb = /#.*$/;
    var tw = /([?&])_=[^&]*/;
    var tC = /^(.*?):[ \t]*([^\r\n]*)$/mg;
    var tE = /^(?:GET|HEAD)$/;
    var tI = /^\/\//;
    var tB = {};
    var tx = {};
    var tD = `*/*`;
    var tS = m.createElement("a");
    function tk(e) {
      return function (t, r) {
        if (typeof t != "string") {
          r = t;
          t = "*";
        }
        var n;
        var i = 0;
        var o = t.toLowerCase().match(O) || [];
        if (g(r)) {
          while (n = o[i++]) {
            if (n[0] === "+") {
              (e[n = n.slice(1) || "*"] = e[n] || []).unshift(r);
            } else {
              (e[n] = e[n] || []).push(r);
            }
          }
        }
      };
    }
    function t_(e, t, r, n) {
      var i = {};
      var o = e === tx;
      function a(s) {
        var l;
        i[s] = true;
        C.each(e[s] || [], function (e, s) {
          var u = s(t, r, n);
          if (typeof u != "string" || o || i[u]) {
            if (o) {
              return !(l = u);
            } else {
              return undefined;
            }
          } else {
            t.dataTypes.unshift(u);
            a(u);
            return false;
          }
        });
        return l;
      }
      return a(t.dataTypes[0]) || !i["*"] && a("*");
    }
    function tT(e, t) {
      var r;
      var n;
      var i = C.ajaxSettings.flatOptions || {};
      for (r in t) {
        if (t[r] !== undefined) {
          (i[r] ? e : n ||= {})[r] = t[r];
        }
      }
      if (n) {
        C.extend(true, e, n);
      }
      return e;
    }
    tS.href = td.href;
    C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: td.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(td.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": tD,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": C.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function (e, t) {
        if (t) {
          return tT(tT(e, C.ajaxSettings), t);
        } else {
          return tT(C.ajaxSettings, e);
        }
      },
      ajaxPrefilter: tk(tB),
      ajaxTransport: tk(tx),
      ajax: function (t, r) {
        if (typeof t == "object") {
          r = t;
          t = undefined;
        }
        r = r || {};
        var n;
        var i;
        var o;
        var a;
        var s;
        var l;
        var u;
        var c;
        var h;
        var d;
        var f = C.ajaxSetup({}, r);
        var A = f.context || f;
        var g = f.context && (A.nodeType || A.jquery) ? C(A) : C.event;
        var p = C.Deferred();
        var y = C.Callbacks("once memory");
        var v = f.statusCode || {};
        var b = {};
        var w = {};
        var E = "canceled";
        var I = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (u) {
              if (!a) {
                for (a = {}; t = tC.exec(o);) {
                  a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
              }
              t = a[e.toLowerCase() + " "];
            }
            if (t == null) {
              return null;
            } else {
              return t.join(", ");
            }
          },
          getAllResponseHeaders: function () {
            if (u) {
              return o;
            } else {
              return null;
            }
          },
          setRequestHeader: function (e, t) {
            if (u == null) {
              b[e = w[e.toLowerCase()] = w[e.toLowerCase()] || e] = t;
            }
            return this;
          },
          overrideMimeType: function (e) {
            if (u == null) {
              f.mimeType = e;
            }
            return this;
          },
          statusCode: function (e) {
            var t;
            if (e) {
              if (u) {
                I.always(e[I.status]);
              } else {
                for (t in e) {
                  v[t] = [v[t], e[t]];
                }
              }
            }
            return this;
          },
          abort: function (e) {
            var t = e || E;
            if (n) {
              n.abort(t);
            }
            B(0, t);
            return this;
          }
        };
        p.promise(I);
        f.url = ((t || f.url || td.href) + "").replace(tI, td.protocol + "//");
        f.type = r.method || r.type || f.method || f.type;
        f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""];
        if (f.crossDomain == null) {
          l = m.createElement("a");
          try {
            l.href = f.url;
            l.href = l.href;
            f.crossDomain = tS.protocol + "//" + tS.host != l.protocol + "//" + l.host;
          } catch (e) {
            f.crossDomain = true;
          }
        }
        if (f.data && f.processData && typeof f.data != "string") {
          f.data = C.param(f.data, f.traditional);
        }
        t_(tB, f, r, I);
        if (u) {
          return I;
        }
        if ((c = C.event && f.global) && C.active++ == 0) {
          C.event.trigger("ajaxStart");
        }
        f.type = f.type.toUpperCase();
        f.hasContent = !tE.test(f.type);
        i = f.url.replace(tb, "");
        if (f.hasContent) {
          if (f.data && f.processData && (f.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            f.data = f.data.replace(tv, "+");
          }
        } else {
          d = f.url.slice(i.length);
          if (f.data && (f.processData || typeof f.data == "string")) {
            i += (tA.test(i) ? "&" : "?") + f.data;
            delete f.data;
          }
          if (f.cache === false) {
            i = i.replace(tw, "$1");
            d = (tA.test(i) ? "&" : "?") + "_=" + tf.guid++ + d;
          }
          f.url = i + d;
        }
        if (f.ifModified) {
          if (C.lastModified[i]) {
            I.setRequestHeader("If-Modified-Since", C.lastModified[i]);
          }
          if (C.etag[i]) {
            I.setRequestHeader("If-None-Match", C.etag[i]);
          }
        }
        if (f.data && f.hasContent && f.contentType !== false || r.contentType) {
          I.setRequestHeader("Content-Type", f.contentType);
        }
        I.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + tD + "; q=0.01" : "") : f.accepts["*"]);
        for (h in f.headers) {
          I.setRequestHeader(h, f.headers[h]);
        }
        if (f.beforeSend && (f.beforeSend.call(A, I, f) === false || u)) {
          return I.abort();
        }
        E = "abort";
        y.add(f.complete);
        I.done(f.success);
        I.fail(f.error);
        if (n = t_(tx, f, r, I)) {
          I.readyState = 1;
          if (c) {
            g.trigger("ajaxSend", [I, f]);
          }
          if (u) {
            return I;
          }
          if (f.async && f.timeout > 0) {
            s = e.setTimeout(function () {
              I.abort("timeout");
            }, f.timeout);
          }
          try {
            u = false;
            n.send(b, B);
          } catch (e) {
            if (u) {
              throw e;
            }
            B(-1, e);
          }
        } else {
          B(-1, "No Transport");
        }
        function B(t, r, a, l) {
          var h;
          var d;
          var m;
          var b;
          var w;
          var E = r;
          if (!u) {
            u = true;
            if (s) {
              e.clearTimeout(s);
            }
            n = undefined;
            o = l || "";
            I.readyState = (t > 0) * 4;
            h = t >= 200 && t < 300 || t === 304;
            if (a) {
              b = function (e, t, r) {
                var n;
                var i;
                var o;
                var a;
                var s = e.contents;
                var l = e.dataTypes;
                while (l[0] === "*") {
                  l.shift();
                  if (n === undefined) {
                    n = e.mimeType || t.getResponseHeader("Content-Type");
                  }
                }
                if (n) {
                  for (i in s) {
                    if (s[i] && s[i].test(n)) {
                      l.unshift(i);
                      break;
                    }
                  }
                }
                if (l[0] in r) {
                  o = l[0];
                } else {
                  for (i in r) {
                    if (!l[0] || e.converters[i + " " + l[0]]) {
                      o = i;
                      break;
                    }
                    a ||= i;
                  }
                  o = o || a;
                }
                if (o) {
                  if (o !== l[0]) {
                    l.unshift(o);
                  }
                  return r[o];
                }
              }(f, I, a);
            }
            if (!h && C.inArray("script", f.dataTypes) > -1) {
              f.converters["text script"] = function () {};
            }
            b = function (e, t, r, n) {
              var i;
              var o;
              var a;
              var s;
              var l;
              var u = {};
              var c = e.dataTypes.slice();
              if (c[1]) {
                for (a in e.converters) {
                  u[a.toLowerCase()] = e.converters[a];
                }
              }
              for (o = c.shift(); o;) {
                if (e.responseFields[o]) {
                  r[e.responseFields[o]] = t;
                }
                if (!l && n && e.dataFilter) {
                  t = e.dataFilter(t, e.dataType);
                }
                l = o;
                if (o = c.shift()) {
                  if (o === "*") {
                    o = l;
                  } else if (l !== "*" && l !== o) {
                    if (!(a = u[l + " " + o] || u["* " + o])) {
                      for (i in u) {
                        if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                          if (a === true) {
                            a = u[i];
                          } else if (u[i] !== true) {
                            o = s[0];
                            c.unshift(s[1]);
                          }
                          break;
                        }
                      }
                    }
                    if (a !== true) {
                      if (a && e.throws) {
                        t = a(t);
                      } else {
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + o
                          };
                        }
                      }
                    }
                  }
                }
              }
              return {
                state: "success",
                data: t
              };
            }(f, b, I, h);
            if (h) {
              if (f.ifModified) {
                if (w = I.getResponseHeader("Last-Modified")) {
                  C.lastModified[i] = w;
                }
                if (w = I.getResponseHeader("etag")) {
                  C.etag[i] = w;
                }
              }
              if (t === 204 || f.type === "HEAD") {
                E = "nocontent";
              } else if (t === 304) {
                E = "notmodified";
              } else {
                E = b.state;
                d = b.data;
                h = !(m = b.error);
              }
            } else {
              m = E;
              if (t || !E) {
                E = "error";
                if (t < 0) {
                  t = 0;
                }
              }
            }
            I.status = t;
            I.statusText = (r || E) + "";
            if (h) {
              p.resolveWith(A, [d, E, I]);
            } else {
              p.rejectWith(A, [I, E, m]);
            }
            I.statusCode(v);
            v = undefined;
            if (c) {
              g.trigger(h ? "ajaxSuccess" : "ajaxError", [I, f, h ? d : m]);
            }
            y.fireWith(A, [I, E]);
            if (c) {
              g.trigger("ajaxComplete", [I, f]);
              if (! --C.active) {
                C.event.trigger("ajaxStop");
              }
            }
          }
        }
        return I;
      },
      getJSON: function (e, t, r) {
        return C.get(e, t, r, "json");
      },
      getScript: function (e, t) {
        return C.get(e, undefined, t, "script");
      }
    });
    C.each(["get", "post"], function (e, t) {
      C[t] = function (e, r, n, i) {
        if (g(r)) {
          i = i || n;
          n = r;
          r = undefined;
        }
        return C.ajax(C.extend({
          url: e,
          type: t,
          dataType: i,
          data: r,
          success: n
        }, C.isPlainObject(e) && e));
      };
    });
    C.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) {
        if (t.toLowerCase() === "content-type") {
          e.contentType = e.headers[t] || "";
        }
      }
    });
    C._evalUrl = function (e, t, r) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (e) {
          C.globalEval(e, t, r);
        }
      });
    };
    C.fn.extend({
      wrapAll: function (e) {
        var t;
        if (this[0]) {
          if (g(e)) {
            e = e.call(this[0]);
          }
          t = C(e, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            t.insertBefore(this[0]);
          }
          t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }
            return e;
          }).append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        if (g(e)) {
          return this.each(function (t) {
            C(this).wrapInner(e.call(this, t));
          });
        } else {
          return this.each(function () {
            var t = C(this);
            var r = t.contents();
            if (r.length) {
              r.wrapAll(e);
            } else {
              t.append(e);
            }
          });
        }
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (r) {
          C(this).wrapAll(t ? e.call(this, r) : e);
        });
      },
      unwrap: function (e) {
        this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    };
    C.expr.pseudos.visible = function (e) {
      return !!e.offsetWidth || !!e.offsetHeight || !!e.getClientRects().length;
    };
    C.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    };
    var tQ = {
      0: 200,
      1223: 204
    };
    var tR = C.ajaxSettings.xhr();
    A.cors = !!tR && "withCredentials" in tR;
    A.ajax = tR = !!tR;
    C.ajaxTransport(function (t) {
      var r;
      var n;
      if (A.cors || tR && !t.crossDomain) {
        return {
          send: function (i, o) {
            var a;
            var s = t.xhr();
            s.open(t.type, t.url, t.async, t.username, t.password);
            if (t.xhrFields) {
              for (a in t.xhrFields) {
                s[a] = t.xhrFields[a];
              }
            }
            if (t.mimeType && s.overrideMimeType) {
              s.overrideMimeType(t.mimeType);
            }
            if (!t.crossDomain && !i["X-Requested-With"]) {
              i["X-Requested-With"] = "XMLHttpRequest";
            }
            for (a in i) {
              s.setRequestHeader(a, i[a]);
            }
            r = function (e) {
              return function () {
                if (r) {
                  r = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null;
                  if (e === "abort") {
                    s.abort();
                  } else if (e === "error") {
                    if (typeof s.status != "number") {
                      o(0, "error");
                    } else {
                      o(s.status, s.statusText);
                    }
                  } else {
                    o(tQ[s.status] || s.status, s.statusText, (s.responseType || "text") !== "text" || typeof s.responseText != "string" ? {
                      binary: s.response
                    } : {
                      text: s.responseText
                    }, s.getAllResponseHeaders());
                  }
                }
              };
            };
            s.onload = r();
            n = s.onerror = s.ontimeout = r("error");
            if (s.onabort !== undefined) {
              s.onabort = n;
            } else {
              s.onreadystatechange = function () {
                if (s.readyState === 4) {
                  e.setTimeout(function () {
                    if (r) {
                      n();
                    }
                  });
                }
              };
            }
            r = r("abort");
            try {
              s.send(t.hasContent && t.data || null);
            } catch (e) {
              if (r) {
                throw e;
              }
            }
          },
          abort: function () {
            if (r) {
              r();
            }
          }
        };
      }
    });
    C.ajaxPrefilter(function (e) {
      if (e.crossDomain) {
        e.contents.script = false;
      }
    });
    C.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          C.globalEval(e);
          return e;
        }
      }
    });
    C.ajaxPrefilter("script", function (e) {
      if (e.cache === undefined) {
        e.cache = false;
      }
      if (e.crossDomain) {
        e.type = "GET";
      }
    });
    C.ajaxTransport("script", function (e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t;
        var r;
        return {
          send: function (n, i) {
            t = C("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", r = function (e) {
              t.remove();
              r = null;
              if (e) {
                i(e.type === "error" ? 404 : 200, e.type);
              }
            });
            m.head.appendChild(t[0]);
          },
          abort: function () {
            if (r) {
              r();
            }
          }
        };
      }
    });
    var tF = [];
    var tL = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = tF.pop() || C.expando + "_" + tf.guid++;
        this[e] = true;
        return e;
      }
    });
    C.ajaxPrefilter("json jsonp", function (t, r, n) {
      var i;
      var o;
      var a;
      var s = t.jsonp !== false && (tL.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && tL.test(t.data) && "data");
      if (s || t.dataTypes[0] === "jsonp") {
        i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
        if (s) {
          t[s] = t[s].replace(tL, "$1" + i);
        } else if (t.jsonp !== false) {
          t.url += (tA.test(t.url) ? "&" : "?") + t.jsonp + "=" + i;
        }
        t.converters["script json"] = function () {
          if (!a) {
            C.error(i + " was not called");
          }
          return a[0];
        };
        t.dataTypes[0] = "json";
        o = e[i];
        e[i] = function () {
          a = arguments;
        };
        n.always(function () {
          if (o === undefined) {
            C(e).removeProp(i);
          } else {
            e[i] = o;
          }
          if (t[i]) {
            t.jsonpCallback = r.jsonpCallback;
            tF.push(i);
          }
          if (a && g(o)) {
            o(a[0]);
          }
          a = o = undefined;
        });
        return "script";
      }
    });
    (r = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>";
    A.createHTMLDocument = r.childNodes.length === 2;
    C.parseHTML = function (e, t, r) {
      var n;
      var i;
      var o;
      if (typeof e != "string") {
        return [];
      } else {
        if (typeof t == "boolean") {
          r = t;
          t = false;
        }
        if (!t) {
          if (A.createHTMLDocument) {
            (n = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href;
            t.head.appendChild(n);
          } else {
            t = m;
          }
        }
        i = k.exec(e);
        o = !r && [];
        if (i) {
          return [t.createElement(i[1])];
        } else {
          i = ey([e], t, o);
          if (o && o.length) {
            C(o).remove();
          }
          return C.merge([], i.childNodes);
        }
      }
    };
    C.fn.load = function (e, t, r) {
      var n;
      var i;
      var o;
      var a = this;
      var s = e.indexOf(" ");
      if (s > -1) {
        n = ta(e.slice(s));
        e = e.slice(0, s);
      }
      if (g(t)) {
        r = t;
        t = undefined;
      } else if (t && typeof t == "object") {
        i = "POST";
      }
      if (a.length > 0) {
        C.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          o = arguments;
          a.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e);
        }).always(r && function (e, t) {
          a.each(function () {
            r.apply(this, o || [e.responseText, t, e]);
          });
        });
      }
      return this;
    };
    C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    };
    C.offset = {
      setOffset: function (e, t, r) {
        var n;
        var i;
        var o;
        var a;
        var s;
        var l;
        var u = C.css(e, "position");
        var c = C(e);
        var h = {};
        if (u === "static") {
          e.style.position = "relative";
        }
        s = c.offset();
        o = C.css(e, "top");
        l = C.css(e, "left");
        if ((u === "absolute" || u === "fixed") && (o + l).indexOf("auto") > -1) {
          a = (n = c.position()).top;
          i = n.left;
        } else {
          a = parseFloat(o) || 0;
          i = parseFloat(l) || 0;
        }
        if (g(t)) {
          t = t.call(e, r, C.extend({}, s));
        }
        if (t.top != null) {
          h.top = t.top - s.top + a;
        }
        if (t.left != null) {
          h.left = t.left - s.left + i;
        }
        if ("using" in t) {
          t.using.call(e, h);
        } else {
          if (typeof h.top == "number") {
            h.top += "px";
          }
          if (typeof h.left == "number") {
            h.left += "px";
          }
          c.css(h);
        }
      }
    };
    C.fn.extend({
      offset: function (e) {
        if (arguments.length) {
          if (e === undefined) {
            return this;
          } else {
            return this.each(function (t) {
              C.offset.setOffset(this, e, t);
            });
          }
        }
        var t;
        var r;
        var n = this[0];
        if (n) {
          if (n.getClientRects().length) {
            t = n.getBoundingClientRect();
            r = n.ownerDocument.defaultView;
            return {
              top: t.top + r.pageYOffset,
              left: t.left + r.pageXOffset
            };
          } else {
            return {
              top: 0,
              left: 0
            };
          }
        } else {
          return undefined;
        }
      },
      position: function () {
        if (this[0]) {
          var e;
          var t;
          var r;
          var n = this[0];
          var i = {
            top: 0,
            left: 0
          };
          if (C.css(n, "position") === "fixed") {
            t = n.getBoundingClientRect();
          } else {
            t = this.offset();
            r = n.ownerDocument;
            e = n.offsetParent || r.documentElement;
            while (e && (e === r.body || e === r.documentElement) && C.css(e, "position") === "static") {
              e = e.parentNode;
            }
            if (e && e !== n && e.nodeType === 1) {
              i = C(e).offset();
              i.top += C.css(e, "borderTopWidth", true);
              i.left += C.css(e, "borderLeftWidth", true);
            }
          }
          return {
            top: t.top - i.top - C.css(n, "marginTop", true),
            left: t.left - i.left - C.css(n, "marginLeft", true)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && C.css(e, "position") === "static";) {
            e = e.offsetParent;
          }
          return e || ei;
        });
      }
    });
    C.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var r = t === "pageYOffset";
      C.fn[e] = function (n) {
        return G(this, function (e, n, i) {
          var o;
          if (p(e)) {
            o = e;
          } else if (e.nodeType === 9) {
            o = e.defaultView;
          }
          if (i === undefined) {
            if (o) {
              return o[t];
            } else {
              return e[n];
            }
          }
          if (o) {
            o.scrollTo(r ? o.pageXOffset : i, r ? i : o.pageYOffset);
          } else {
            e[n] = i;
          }
        }, e, n, arguments.length);
      };
    });
    C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = ez(A.pixelPosition, function (e, r) {
        if (r) {
          r = eU(e, t);
          if (eO.test(r)) {
            return C(e).position()[t] + "px";
          } else {
            return r;
          }
        }
      });
    });
    C.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      C.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (r, n) {
        C.fn[n] = function (i, o) {
          var a = arguments.length && (r || typeof i != "boolean");
          var s = r || (i === true || o === true ? "margin" : "border");
          return G(this, function (t, r, i) {
            var o;
            if (p(t)) {
              if (n.indexOf("outer") === 0) {
                return t["inner" + e];
              } else {
                return t.document.documentElement["client" + e];
              }
            } else if (t.nodeType === 9) {
              o = t.documentElement;
              return Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]);
            } else if (i === undefined) {
              return C.css(t, r, s);
            } else {
              return C.style(t, r, i, s);
            }
          }, t, a ? i : undefined, a);
        };
      });
    });
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    });
    C.fn.extend({
      bind: function (e, t, r) {
        return this.on(e, null, t, r);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, r, n) {
        return this.on(t, e, r, n);
      },
      undelegate: function (e, t, r) {
        if (arguments.length == 1) {
          return this.off(e, "**");
        } else {
          return this.off(t, e || "**", r);
        }
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    });
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, r) {
        if (arguments.length > 0) {
          return this.on(t, null, e, r);
        } else {
          return this.trigger(t);
        }
      };
    });
    var tO = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    C.proxy = function (e, t) {
      var r;
      var n;
      var i;
      if (typeof t == "string") {
        r = e[t];
        t = e;
        e = r;
      }
      if (g(e)) {
        n = o.call(arguments, 2);
        (i = function () {
          return e.apply(t || this, n.concat(o.call(arguments)));
        }).guid = e.guid = e.guid || C.guid++;
        return i;
      }
    };
    C.holdReady = function (e) {
      if (e) {
        C.readyWait++;
      } else {
        C.ready(true);
      }
    };
    C.isArray = Array.isArray;
    C.parseJSON = JSON.parse;
    C.nodeName = S;
    C.isFunction = g;
    C.isWindow = p;
    C.camelCase = Y;
    C.type = b;
    C.now = Date.now;
    C.isNumeric = function (e) {
      var t = C.type(e);
      return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
    };
    C.trim = function (e) {
      if (e == null) {
        return "";
      } else {
        return (e + "").replace(tO, "");
      }
    };
    if (typeof define == "function" && define.amd) {
      define("jquery", [], function () {
        return C;
      });
    }
    var tN = e.jQuery;
    var tM = e.$;
    C.noConflict = function (t) {
      if (e.$ === C) {
        e.$ = tM;
      }
      if (t && e.jQuery === C) {
        e.jQuery = tN;
      }
      return C;
    };
    if (t === undefined) {
      e.jQuery = e.$ = C;
    }
    return C;
  };
  if (typeof module.exports == "object") {
    module.exports = t.document ? r(t, true) : function (e) {
      if (!e.document) {
        throw Error("jQuery requires a window with a document");
      }
      return r(e);
    };
  } else {
    r(t);
  }
}