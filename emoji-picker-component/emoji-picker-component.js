// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'f' to 'i18nTranslationHook_1'
// - Resolved require(895147) to 'i18n-translation-hook_1'
// - Renamed variable 's' to 'browserThemeManager'
// - Resolved require(542418) to 'browser-theme-manager'
// - Renamed variable 'o' to 'i18nLanguageDetector'
// - Resolved require(1451) to 'i18n-language-detector'
// - Renamed variable 't' to 'emojiPickerStylesConstants'
// - Resolved require(492426) to 'emoji-picker-styles-constants'
// - Renamed variable 'r' to 'clientEmojiFeatureCheck'
// - Resolved require(527329) to 'client-emoji-feature-check'
// - Renamed variable 'd' to 'emojiDataConfig'
// - Resolved require(184968) to 'emoji-data-config'
// - Renamed variable 'e7' to 'tooltipComponentModule'
// - Resolved require(91247) to 'tooltip-component-module'
// - Renamed variable 'ie' to 'unifiedButtonComponent'
// - Resolved require(488299) to 'unified-button-component'
// - Renamed variable 'ii' to 'objectAssignUtil'
// - Resolved require(513453) to 'object-assign-util'
// - Renamed variable 'ia' to 'objectOmitHelper_1'
// - Resolved require(713602) to 'object-omit-helper_1'
// - Renamed variable 'is' to 'universeIconWrapper'
// - Resolved require(19498) to 'universe-icon-wrapper'
// - Updated imported property 'Z' to 'omitWithSymbols' (module 713602)
// - Updated imported property 'Z' to 'objectAssign' (module 513453)
// - Updated imported property 'Z' to 'UniverseIcon' (module 19498)
// - Updated imported property 'Q' to 'useI18n' (module 895147)
// - Updated imported property 'NJ' to 'isEnglishLocale' (module 1451)
// - Updated imported property 'Km' to 'checkEmojiSearchFeature' (module 527329)
// - Updated imported property 'on' to 'getEmojiCategoryLabels' (module 527329)
// - Updated imported property 'DY' to 'getThemeMode' (module 542418)
// - Updated imported property 'jX' to 'emojiPickerStyles' (module 492426)
// - Updated imported property 'eq' to 'emojiSearchStyles' (module 492426)
// - Updated imported property 'ss' to 'emojiCategories' (module 492426)
// - Updated imported property 'u' to 'TooltipComponent' (module 91247)
// - Updated imported property 'zx' to 'UnifiedButton' (module 488299)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 280293
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nTranslationHook_1 = require("i18n-translation-hook_1") /*id: 895147*/;
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var i18nLanguageDetector = require("i18n-language-detector") /*id: 1451*/;
  var emojiPickerStylesConstants = require("emoji-picker-styles-constants") /*id: 492426*/;
  var clientEmojiFeatureCheck = require("client-emoji-feature-check") /*id: 527329*/;
  var emojiDataConfig = require("emoji-data-config") /*id: 184968*/;
  function u(e) {
    if (e && e.__esModule) {
      return e.default;
    } else {
      return e;
    }
  }
  function l(e, i, n) {
    if (i in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  var c;
  var v;
  var m;
  var k;
  var h;
  var _;
  var p = {};
  var w = [];
  var b = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function g(e, i) {
    for (var n in i) {
      e[n] = i[n];
    }
    return e;
  }
  function y(e) {
    var i = e.parentNode;
    if (i) {
      i.removeChild(e);
    }
  }
  function x(e, i, n) {
    var a;
    var f;
    var s;
    var o = {};
    for (s in i) {
      if (s == "key") {
        a = i[s];
      } else if (s == "ref") {
        f = i[s];
      } else {
        o[s] = i[s];
      }
    }
    if (arguments.length > 2) {
      o.children = arguments.length > 3 ? c.call(arguments, 2) : n;
    }
    if (typeof e == "function" && e.defaultProps != null) {
      for (s in e.defaultProps) {
        if (o[s] === undefined) {
          o[s] = e.defaultProps[s];
        }
      }
    }
    return C(e, o, a, f, null);
  }
  function C(e, i, n, a, f) {
    var s = {
      type: e,
      props: i,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: undefined,
      __c: null,
      __h: null,
      constructor: undefined,
      __v: f == null ? ++m : f
    };
    if (f == null && v.vnode != null) {
      v.vnode(s);
    }
    return s;
  }
  function j() {
    return {
      current: null
    };
  }
  function S(e) {
    return e.children;
  }
  function z(e, i) {
    this.props = e;
    this.context = i;
  }
  function q(e, i) {
    if (i == null) {
      if (e.__) {
        return q(e.__, e.__.__k.indexOf(e) + 1);
      } else {
        return null;
      }
    }
    var n;
    for (; i < e.__k.length; i++) {
      if ((n = e.__k[i]) != null && n.__e != null) {
        return n.__e;
      }
    }
    if (typeof e.type == "function") {
      return q(e);
    } else {
      return null;
    }
  }
  function M(e) {
    if (!e.__d && (e.__d = true) && k.push(e) && !E.__r++ || _ !== v.debounceRendering) {
      ((_ = v.debounceRendering) || h)(E);
    }
  }
  function E() {
    var e;
    for (; E.__r = k.length;) {
      e = k.sort(function (e, i) {
        return e.__v.__b - i.__v.__b;
      });
      k = [];
      e.some(function (e) {
        var i;
        var n;
        var a;
        var f;
        var s;
        if (e.__d) {
          f = (a = e.__v).__e;
          if (s = e.__P) {
            i = [];
            (n = g({}, a)).__v = a.__v + 1;
            R(s, a, n, e.__n, s.ownerSVGElement !== undefined, a.__h != null ? [f] : null, i, f == null ? q(a) : f, a.__h);
            I(i, a);
            if (a.__e != f) {
              (function e(i) {
                var n;
                var a;
                if ((i = i.__) != null && i.__c != null) {
                  i.__e = i.__c.base = null;
                  n = 0;
                  for (; n < i.__k.length; n++) {
                    if ((a = i.__k[n]) != null && a.__e != null) {
                      i.__e = i.__c.base = a.__e;
                      break;
                    }
                  }
                  return e(i);
                }
              })(a);
            }
          }
        }
      });
    }
  }
  function L(e, i, n, a, f, s, o, t, r, d) {
    var u;
    var l;
    var c;
    var m;
    var k;
    var h;
    var _;
    var b = a && a.__k || w;
    var g = b.length;
    n.__k = [];
    u = 0;
    for (; u < i.length; u++) {
      if ((m = n.__k[u] = (m = i[u]) == null || typeof m == "boolean" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? C(null, m, null, null, m) : Array.isArray(m) ? C(S, {
        children: m
      }, null, null, null) : m.__b > 0 ? C(m.type, m.props, m.key, null, m.__v) : m) != null) {
        m.__ = n;
        m.__b = n.__b + 1;
        if ((c = b[u]) === null || c && m.key == c.key && m.type === c.type) {
          b[u] = undefined;
        } else {
          for (l = 0; l < g; l++) {
            if ((c = b[l]) && m.key == c.key && m.type === c.type) {
              b[l] = undefined;
              break;
            }
            c = null;
          }
        }
        R(e, m, c = c || p, f, s, o, t, r, d);
        k = m.__e;
        if ((l = m.ref) && c.ref != l) {
          _ ||= [];
          if (c.ref) {
            _.push(c.ref, null, m);
          }
          _.push(l, m.__c || k, m);
        }
        if (k != null) {
          if (h == null) {
            h = k;
          }
          if (typeof m.type == "function" && m.__k === c.__k) {
            m.__d = r = function e(i, n, a) {
              var f;
              var s = i.__k;
              var o = 0;
              for (; s && o < s.length; o++) {
                if (f = s[o]) {
                  f.__ = i;
                  n = typeof f.type == "function" ? e(f, n, a) : A(a, f, f, s, f.__e, n);
                }
              }
              return n;
            }(m, r, e);
          } else {
            r = A(e, m, c, b, k, r);
          }
          if (typeof n.type == "function") {
            n.__d = r;
          }
        } else if (r && c.__e == r && r.parentNode != e) {
          r = q(c);
        }
      }
    }
    n.__e = h;
    u = g;
    while (u--) {
      if (b[u] != null) {
        if (typeof n.type == "function" && b[u].__e != null && b[u].__e == n.__d) {
          n.__d = q(a, u + 1);
        }
        (function e(i, n, a) {
          var f;
          var s;
          if (v.unmount) {
            v.unmount(i);
          }
          if (f = i.ref) {
            if (!f.current || f.current === i.__e) {
              H(f, null, n);
            }
          }
          if ((f = i.__c) != null) {
            if (f.componentWillUnmount) {
              try {
                f.componentWillUnmount();
              } catch (e) {
                v.__e(e, n);
              }
            }
            f.base = f.__P = null;
          }
          if (f = i.__k) {
            for (s = 0; s < f.length; s++) {
              if (f[s]) {
                e(f[s], n, typeof i.type != "function");
              }
            }
          }
          if (!a && i.__e != null) {
            y(i.__e);
          }
          i.__e = i.__d = undefined;
        })(b[u], b[u]);
      }
    }
    if (_) {
      for (u = 0; u < _.length; u++) {
        H(_[u], _[++u], _[++u]);
      }
    }
  }
  function P(e, i) {
    i = i || [];
    if (e != null && typeof e != "boolean") {
      if (Array.isArray(e)) {
        e.some(function (e) {
          P(e, i);
        });
      } else {
        i.push(e);
      }
    }
    return i;
  }
  function A(e, i, n, a, f, s) {
    var o;
    var t;
    var r;
    if (i.__d !== undefined) {
      o = i.__d;
      i.__d = undefined;
    } else if (n == null || f != s || f.parentNode == null) {
      e: if (s == null || s.parentNode !== e) {
        e.appendChild(f);
        o = null;
      } else {
        t = s;
        r = 0;
        for (; (t = t.nextSibling) && r < a.length; r += 2) {
          if (t == f) {
            break e;
          }
        }
        e.insertBefore(f, s);
        o = s;
      }
    }
    if (o !== undefined) {
      return o;
    } else {
      return f.nextSibling;
    }
  }
  function D(e, i, n) {
    if (i[0] === "-") {
      e.setProperty(i, n);
    } else {
      e[i] = n == null ? "" : typeof n != "number" || b.test(i) ? n : n + "px";
    }
  }
  function O(e, i, n, a, f) {
    var s;
    e: if (i === "style") {
      if (typeof n == "string") {
        e.style.cssText = n;
      } else {
        if (typeof a == "string") {
          e.style.cssText = a = "";
        }
        if (a) {
          for (i in a) {
            if (!n || !(i in n)) {
              D(e.style, i, "");
            }
          }
        }
        if (n) {
          for (i in n) {
            if (!a || n[i] !== a[i]) {
              D(e.style, i, n[i]);
            }
          }
        }
      }
    } else if (i[0] === "o" && i[1] === "n") {
      s = i !== (i = i.replace(/Capture$/, ""));
      i = i.toLowerCase() in e ? i.toLowerCase().slice(2) : i.slice(2);
      e.l ||= {};
      e.l[i + s] = n;
      if (n) {
        if (!a) {
          e.addEventListener(i, s ? B : T, s);
        }
      } else {
        e.removeEventListener(i, s ? B : T, s);
      }
    } else if (i !== "dangerouslySetInnerHTML") {
      if (f) {
        i = i.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      } else if (i !== "href" && i !== "list" && i !== "form" && i !== "tabIndex" && i !== "download" && i in e) {
        try {
          e[i] = n == null ? "" : n;
          break e;
        } catch (e) {}
      }
      if (typeof n != "function") {
        if (n != null && (n !== false || i[0] === "a" && i[1] === "r")) {
          e.setAttribute(i, n);
        } else {
          e.removeAttribute(i);
        }
      }
    }
  }
  function T(e) {
    this.l[e.type + false](v.event ? v.event(e) : e);
  }
  function B(e) {
    this.l[e.type + true](v.event ? v.event(e) : e);
  }
  function R(e, i, n, a, f, s, o, t, r) {
    var d;
    var u;
    var l;
    var m;
    var k;
    var h;
    var _;
    var w;
    var b;
    var x;
    var C;
    var j = i.type;
    if (i.constructor !== undefined) {
      return null;
    }
    if (n.__h != null) {
      r = n.__h;
      t = i.__e = n.__e;
      i.__h = null;
      s = [t];
    }
    if (d = v.__b) {
      d(i);
    }
    try {
      e: if (typeof j == "function") {
        w = i.props;
        b = (d = j.contextType) && a[d.__c];
        x = d ? b ? b.props.value : d.__ : a;
        if (n.__c) {
          _ = (u = i.__c = n.__c).__ = u.__E;
        } else {
          if ("prototype" in j && j.prototype.render) {
            i.__c = u = new j(w, x);
          } else {
            i.__c = u = new z(w, x);
            u.constructor = j;
            u.render = N;
          }
          if (b) {
            b.sub(u);
          }
          u.props = w;
          u.state ||= {};
          u.context = x;
          u.__n = a;
          l = u.__d = true;
          u.__h = [];
        }
        if (u.__s == null) {
          u.__s = u.state;
        }
        if (j.getDerivedStateFromProps != null) {
          if (u.__s == u.state) {
            u.__s = g({}, u.__s);
          }
          g(u.__s, j.getDerivedStateFromProps(w, u.__s));
        }
        m = u.props;
        k = u.state;
        if (l) {
          if (j.getDerivedStateFromProps == null && u.componentWillMount != null) {
            u.componentWillMount();
          }
          if (u.componentDidMount != null) {
            u.__h.push(u.componentDidMount);
          }
        } else {
          if (j.getDerivedStateFromProps == null && w !== m && u.componentWillReceiveProps != null) {
            u.componentWillReceiveProps(w, x);
          }
          if (!u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(w, u.__s, x) === false || i.__v === n.__v) {
            u.props = w;
            u.state = u.__s;
            if (i.__v !== n.__v) {
              u.__d = false;
            }
            u.__v = i;
            i.__e = n.__e;
            i.__k = n.__k;
            i.__k.forEach(function (e) {
              if (e) {
                e.__ = i;
              }
            });
            if (u.__h.length) {
              o.push(u);
            }
            break e;
          }
          if (u.componentWillUpdate != null) {
            u.componentWillUpdate(w, u.__s, x);
          }
          if (u.componentDidUpdate != null) {
            u.__h.push(function () {
              u.componentDidUpdate(m, k, h);
            });
          }
        }
        u.context = x;
        u.props = w;
        u.state = u.__s;
        if (d = v.__r) {
          d(i);
        }
        u.__d = false;
        u.__v = i;
        u.__P = e;
        d = u.render(u.props, u.state, u.context);
        u.state = u.__s;
        if (u.getChildContext != null) {
          a = g(g({}, a), u.getChildContext());
        }
        if (!l && u.getSnapshotBeforeUpdate != null) {
          h = u.getSnapshotBeforeUpdate(m, k);
        }
        C = d != null && d.type === S && d.key == null ? d.props.children : d;
        L(e, Array.isArray(C) ? C : [C], i, n, a, f, s, o, t, r);
        u.base = i.__e;
        i.__h = null;
        if (u.__h.length) {
          o.push(u);
        }
        if (_) {
          u.__E = u.__ = null;
        }
        u.__e = false;
      } else if (s == null && i.__v === n.__v) {
        i.__k = n.__k;
        i.__e = n.__e;
      } else {
        i.__e = function (e, i, n, a, f, s, o, t) {
          var r;
          var d;
          var u;
          var l = n.props;
          var v = i.props;
          var m = i.type;
          var k = 0;
          if (m === "svg") {
            f = true;
          }
          if (s != null) {
            for (; k < s.length; k++) {
              if ((r = s[k]) && "setAttribute" in r == !!m && (m ? r.localName === m : r.nodeType === 3)) {
                e = r;
                s[k] = null;
                break;
              }
            }
          }
          if (e == null) {
            if (m === null) {
              return document.createTextNode(v);
            }
            e = f ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, v.is && v);
            s = null;
            t = false;
          }
          if (m === null) {
            if (l !== v && (!t || e.data !== v)) {
              e.data = v;
            }
          } else {
            s = s && c.call(e.childNodes);
            d = (l = n.props || p).dangerouslySetInnerHTML;
            u = v.dangerouslySetInnerHTML;
            if (!t) {
              if (s != null) {
                l = {};
                k = 0;
                for (; k < e.attributes.length; k++) {
                  l[e.attributes[k].name] = e.attributes[k].value;
                }
              }
              if (u || d) {
                if (!u || (!d || u.__html != d.__html) && u.__html !== e.innerHTML) {
                  e.innerHTML = u && u.__html || "";
                }
              }
            }
            (function (e, i, n, a, f) {
              var s;
              for (s in n) {
                if (s !== "children" && s !== "key" && !(s in i)) {
                  O(e, s, null, n[s], a);
                }
              }
              for (s in i) {
                if ((!f || typeof i[s] == "function") && s !== "children" && s !== "key" && s !== "value" && s !== "checked" && n[s] !== i[s]) {
                  O(e, s, i[s], n[s], a);
                }
              }
            })(e, v, l, f, t);
            if (u) {
              i.__k = [];
            } else {
              L(e, Array.isArray(k = i.props.children) ? k : [k], i, n, a, f && m !== "foreignObject", s, o, s ? s[0] : n.__k && q(n, 0), t);
              if (s != null) {
                for (k = s.length; k--;) {
                  if (s[k] != null) {
                    y(s[k]);
                  }
                }
              }
            }
            if (!t) {
              if ("value" in v && (k = v.value) !== undefined && (k !== l.value || k !== e.value || m === "progress" && !k)) {
                O(e, "value", k, l.value, false);
              }
              if ("checked" in v && (k = v.checked) !== undefined && k !== e.checked) {
                O(e, "checked", k, l.checked, false);
              }
            }
          }
          return e;
        }(n.__e, i, n, a, f, s, o, r);
      }
      if (d = v.diffed) {
        d(i);
      }
    } catch (e) {
      i.__v = null;
      if (r || s != null) {
        i.__e = t;
        i.__h = !!r;
        s[s.indexOf(t)] = null;
      }
      v.__e(e, i, n);
    }
  }
  function I(e, i) {
    if (v.__c) {
      v.__c(i, e);
    }
    e.some(function (i) {
      try {
        e = i.__h;
        i.__h = [];
        e.some(function (e) {
          e.call(i);
        });
      } catch (e) {
        v.__e(e, i.__v);
      }
    });
  }
  function H(e, i, n) {
    try {
      if (typeof e == "function") {
        e(i);
      } else {
        e.current = i;
      }
    } catch (e) {
      v.__e(e, n);
    }
  }
  function N(e, i, n) {
    return this.constructor(e, n);
  }
  function Z(e, i, n) {
    var a;
    var f;
    var s;
    if (v.__) {
      v.__(e, i);
    }
    f = (a = typeof n == "function") ? null : n && n.__k || i.__k;
    s = [];
    R(i, e = (!a && n || i).__k = x(S, null, [e]), f || p, p, i.ownerSVGElement !== undefined, !a && n ? [n] : f ? null : i.firstChild ? c.call(i.childNodes) : null, s, !a && n ? n : f ? f.__e : i.firstChild, a);
    I(s, e);
  }
  c = w.slice;
  v = {
    __e: function (e, i) {
      var n;
      var a;
      var f;
      while (i = i.__) {
        if ((n = i.__c) && !n.__) {
          try {
            if ((a = n.constructor) && a.getDerivedStateFromError != null) {
              n.setState(a.getDerivedStateFromError(e));
              f = n.__d;
            }
            if (n.componentDidCatch != null) {
              n.componentDidCatch(e);
              f = n.__d;
            }
            if (f) {
              return n.__E = n;
            }
          } catch (i) {
            e = i;
          }
        }
      }
      throw e;
    }
  };
  m = 0;
  z.prototype.setState = function (e, i) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = g({}, this.state);
    if (typeof e == "function") {
      e = e(g({}, n), this.props);
    }
    if (e) {
      g(n, e);
    }
    if (e != null && this.__v) {
      if (i) {
        this.__h.push(i);
      }
      M(this);
    }
  };
  z.prototype.forceUpdate = function (e) {
    if (this.__v) {
      this.__e = true;
      if (e) {
        this.__h.push(e);
      }
      M(this);
    }
  };
  z.prototype.render = S;
  k = [];
  h = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
  E.__r = 0;
  var V = 0;
  function F(e, i, n, a, f) {
    var s;
    var o;
    var t = {};
    for (o in i) {
      if (o == "ref") {
        s = i[o];
      } else {
        t[o] = i[o];
      }
    }
    var r = {
      type: e,
      props: t,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: undefined,
      __c: null,
      __h: null,
      constructor: undefined,
      __v: --V,
      __source: a,
      __self: f
    };
    if (typeof e == "function" && (s = e.defaultProps)) {
      for (o in s) {
        if (t[o] === undefined) {
          t[o] = s[o];
        }
      }
    }
    if (v.vnode) {
      v.vnode(r);
    }
    return r;
  }
  var U = {
    set: function (e, i) {
      try {
        window.localStorage[`emoji-mart.${e}`] = JSON.stringify(i);
      } catch (e) {}
    },
    get: function (e) {
      try {
        let i = window.localStorage[`emoji-mart.${e}`];
        if (i) {
          return JSON.parse(i);
        }
      } catch (e) {}
    }
  };
  let K = new Map();
  let $ = [{
    v: 15,
    emoji: "🫨"
  }, {
    v: 14,
    emoji: "🫠"
  }, {
    v: 13.1,
    emoji: "😶‍🌫️"
  }, {
    v: 13,
    emoji: "🥸"
  }, {
    v: 12.1,
    emoji: "🧑‍🦰"
  }, {
    v: 12,
    emoji: "🥱"
  }, {
    v: 11,
    emoji: "🥰"
  }, {
    v: 5,
    emoji: "🤩"
  }, {
    v: 4,
    emoji: "👱‍♀️"
  }, {
    v: 3,
    emoji: "🤣"
  }, {
    v: 2,
    emoji: "👋🏻"
  }, {
    v: 1,
    emoji: "🙃"
  }];
  function W(e) {
    if (K.has(e)) {
      return K.get(e);
    }
    let i = G(e);
    K.set(e, i);
    return i;
  }
  let G = (() => {
    let e = null;
    try {
      if (!navigator.userAgent.includes("jsdom")) {
        e = document.createElement("canvas").getContext("2d", {
          willReadFrequently: true
        });
      }
    } catch {}
    if (!e) {
      return () => false;
    }
    let i = Math.floor(12.5);
    e.font = i + "px Arial, Sans-Serif";
    e.textBaseline = "top";
    e.canvas.width = 40;
    e.canvas.height = 25;
    return i => {
      e.clearRect(0, 0, 40, 25);
      e.fillStyle = "#FF0000";
      e.fillText(i, 0, 22);
      e.fillStyle = "#0000FF";
      e.fillText(i, 20, 22);
      let n = e.getImageData(0, 0, 20, 25).data;
      let a = n.length;
      let f = 0;
      for (; f < a && !n[f + 3]; f += 4);
      if (f >= a) {
        return false;
      }
      let s = 20 + f / 4 % 20;
      let o = Math.floor(f / 4 / 20);
      let t = e.getImageData(s, o, 1, 1).data;
      return n[f] === t[0] && n[f + 2] === t[2] && !(e.measureText(i).width >= 20);
    };
  })();
  var X = {
    latestVersion: function () {
      for (let {
        v: e,
        emoji: i
      } of $) {
        if (W(i)) {
          return e;
        }
      }
    },
    noCountryFlags: function () {
      return !W("🇨🇦");
    }
  };
  let J = ["+1", "grinning", "kissing_heart", "heart_eyes", "laughing", "stuck_out_tongue_winking_eye", "sweat_smile", "joy", "scream", "disappointed", "unamused", "weary", "sob", "sunglasses", "heart"];
  let Y = null;
  function Q(e) {
    let i = e ? `${e}-used` : "used";
    return {
      get: () => U.get(i) || [],
      set: e => U.set(i, e)
    };
  }
  var ee = {
    add: function (e, i) {
      let {
        maxFrequentRows: n,
        perLine: a,
        source: f
      } = i;
      Y = U.get("frequently") || {};
      let s = Q(f);
      let o = s.get();
      let t = e.id || e;
      if (!t) {
        return;
      }
      if (Y[t]) {
        delete Y[t];
      }
      let r = o.indexOf(t);
      if (r !== -1) {
        o.splice(r, 1);
      }
      o.unshift(t);
      U.set("last", t);
      s.set(o.slice(0, n * a));
    },
    get: function (e) {
      let {
        maxFrequentRows: i,
        perLine: n,
        source: a
      } = e;
      if (!i) {
        return [];
      }
      Y = U.get("frequently");
      let f = Q(a);
      let s = f.get();
      let o = [];
      if (!s.length && !Y) {
        Y = {};
        for (let e in J.slice(0, n)) {
          let i = J[e];
          Y[i] = n - e;
          o.push(i);
        }
        f.set(o);
        return o;
      }
      let t = i * n;
      let r = U.get("last");
      if (Y) {
        s.forEach(e => {
          if (Y[e]) {
            delete Y[e];
          }
        });
      }
      for (let e in Y) {
        o.push(e);
      }
      o.sort((e, i) => {
        let n = Y[i];
        let a = Y[e];
        if (n == a) {
          return e.localeCompare(i);
        } else {
          return n - a;
        }
      });
      if (o.length > t) {
        let e = o.slice(t);
        o = o.slice(0, t);
        for (let i of e) {
          if (i != r) {
            delete Y[i];
          }
        }
        if (r && o.indexOf(r) == -1) {
          delete Y[o[o.length - 1]];
          o.splice(-1, 1, r);
        }
      }
      return [...s, ...o].slice(0, t);
    }
  };
  var ei = {};
  ei = {
    search: "Search",
    search_no_results_1: "Oh no!",
    search_no_results_2: "That emoji couldn’t be found",
    pick: "Pick an emoji…",
    add_custom: "Add custom emoji",
    categories: {
      activity: "Activity",
      custom: "Custom",
      flags: "Flags",
      foods: "Food & Drink",
      frequent: "Frequently used",
      nature: "Animals & Nature",
      objects: "Objects",
      people: "Smileys & People",
      places: "Travel & Places",
      search: "Search Results",
      symbols: "Symbols"
    },
    skins: {
      "1": "Default",
      "2": "Light",
      "3": "Medium-Light",
      "4": "Medium",
      "5": "Medium-Dark",
      "6": "Dark",
      choose: "Choose default skin tone"
    }
  };
  var en = {
    autoFocus: {
      value: false
    },
    dynamicWidth: {
      value: false
    },
    emojiButtonColors: {
      value: null
    },
    emojiButtonRadius: {
      value: "100%"
    },
    emojiButtonSize: {
      value: 36
    },
    emojiSize: {
      value: 24
    },
    emojiVersion: {
      value: 15,
      choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15]
    },
    exceptEmojis: {
      value: []
    },
    icons: {
      value: "auto",
      choices: ["auto", "outline", "solid"]
    },
    locale: {
      value: "en",
      choices: ["en", "ar", "be", "cs", "de", "es", "fa", "fi", "fr", "hi", "it", "ja", "ko", "nl", "pl", "pt", "ru", "sa", "tr", "uk", "vi", "zh"]
    },
    maxFrequentRows: {
      value: 4
    },
    navPosition: {
      value: "top",
      choices: ["top", "bottom", "none"]
    },
    noCountryFlags: {
      value: false
    },
    noResultsEmoji: {
      value: null
    },
    perLine: {
      value: 9
    },
    previewEmoji: {
      value: null
    },
    previewPosition: {
      value: "bottom",
      choices: ["top", "bottom", "none"]
    },
    searchPosition: {
      value: "sticky",
      choices: ["sticky", "static", "none"]
    },
    set: {
      value: "native",
      choices: ["native", "apple", "facebook", "google", "twitter"]
    },
    skin: {
      value: 1,
      choices: [1, 2, 3, 4, 5, 6]
    },
    skinTonePosition: {
      value: "preview",
      choices: ["preview", "search", "none"]
    },
    theme: {
      value: "auto",
      choices: ["auto", "light", "dark"]
    },
    categories: null,
    categoryIcons: null,
    custom: null,
    data: null,
    i18n: null,
    getImageURL: null,
    getSpritesheetURL: null,
    onAddCustomEmoji: null,
    onClickOutside: null,
    onEmojiSelect: null,
    stickySearch: {
      deprecated: true,
      value: true
    },
    source: ""
  };
  let ea = null;
  let ef = null;
  let es = {};
  async function eo(e) {
    if (es[e]) {
      return es[e];
    }
    let i = await fetch(e);
    let n = await i.json();
    es[e] = n;
    return n;
  }
  let et = null;
  let er = null;
  let ed = false;
  function eu(e, {
    caller: i
  } = {}) {
    et ||= new Promise(e => {
      er = e;
    });
    if (e) {
      el(e);
    }
    return et;
  }
  async function el(e) {
    ed = true;
    let {
      emojiVersion: i,
      set: n,
      locale: a
    } = e;
    i ||= en.emojiVersion.value;
    n ||= en.set.value;
    a ||= en.locale.value;
    if (ef) {
      ef.categories = ef.categories.filter(e => !e.name);
    } else {
      (ef = (typeof e.data == "function" ? await e.data() : e.data) || (await eo(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${i}/${n}.json`))).emoticons = {};
      ef.natives = {};
      ef.categories.unshift({
        id: "frequent",
        emojis: []
      });
      for (let a in ef.aliases) {
        let e = ef.aliases[a];
        let i = ef.emojis[e];
        if (i) {
          i.aliases ||= [];
          i.aliases.push(a);
        }
      }
      ef.originalCategories = ef.categories;
    }
    ea = (typeof e.i18n == "function" ? await e.i18n() : e.i18n) || (a == "en" ? u(ei) : await eo(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${a}.json`));
    if (e.custom) {
      for (let i in e.custom) {
        i = parseInt(i);
        let n = e.custom[i];
        let a = e.custom[i - 1];
        if (n.emojis && n.emojis.length) {
          n.id ||= `custom_${i + 1}`;
          n.name ||= ea.categories.custom;
          if (a && !n.icon) {
            n.target = a.target || a;
          }
          ef.categories.push(n);
          for (let e of n.emojis) {
            ef.emojis[e.id] = e;
          }
        }
      }
    }
    if (e.categories) {
      ef.categories = ef.originalCategories.filter(i => e.categories.indexOf(i.id) != -1).sort((i, n) => e.categories.indexOf(i.id) - e.categories.indexOf(n.id));
    }
    let f = null;
    let s = null;
    if (n == "native") {
      f = X.latestVersion();
      s = e.noCountryFlags || X.noCountryFlags();
    }
    let o = ef.categories.length;
    let t = false;
    while (o--) {
      let i = ef.categories[o];
      if (i.id == "frequent") {
        let {
          maxFrequentRows: n,
          perLine: a
        } = e;
        n = n >= 0 ? n : en.maxFrequentRows.value;
        a ||= en.perLine.value;
        i.emojis = ee.get({
          maxFrequentRows: n,
          perLine: a,
          source: e.source
        });
      }
      if (!i.emojis || !i.emojis.length) {
        ef.categories.splice(o, 1);
        continue;
      }
      let {
        categoryIcons: n
      } = e;
      if (n) {
        let e = n[i.id];
        if (e && !i.icon) {
          i.icon = e;
        }
      }
      let a = i.emojis.length;
      while (a--) {
        let n = i.emojis[a];
        let o = n.id ? n : ef.emojis[n];
        let r = () => {
          i.emojis.splice(a, 1);
        };
        if (!o || e.exceptEmojis && e.exceptEmojis.includes(o.id) || f && o.version > f || s && i.id == "flags" && !eh.includes(o.id)) {
          r();
          continue;
        }
        if (!o.search) {
          t = true;
          o.search = "," + [[o.id, false], [o.name, true], [o.keywords, false], [o.emoticons, false]].map(e => {
            let [i, n] = e;
            if (i) {
              return (Array.isArray(i) ? i : [i]).map(e => (n ? e.split(/[-|_|\s]+/) : [e]).map(e => e.toLowerCase())).flat();
            }
          }).flat().filter(e => e && e.trim()).join(",");
          if (o.emoticons) {
            for (let e of o.emoticons) {
              ef.emoticons[e] ||= o.id;
            }
          }
          let e = 0;
          for (let i of o.skins) {
            if (!i) {
              continue;
            }
            e++;
            let {
              native: n
            } = i;
            if (n) {
              ef.natives[n] = o.id;
              o.search += `,${n}`;
            }
            let a = e == 1 ? "" : `:skin-tone-${e}:`;
            i.shortcodes = `:${o.id}:${a}`;
          }
        }
      }
    }
    if (t) {
      ek.reset();
    }
    er();
  }
  function ec(e, i, n) {
    e ||= {};
    let a = {};
    for (let f in i) {
      a[f] = ev(f, e, i, n);
    }
    return a;
  }
  function ev(e, i, n, a) {
    let f = n[e];
    let s = a && a.getAttribute(e) || (i[e] != null && i[e] != undefined ? i[e] : null);
    if (f) {
      if (s != null && f.value && typeof f.value != typeof s) {
        s = typeof f.value == "boolean" ? s != "false" : f.value.constructor(s);
      }
      if (f.transform && s) {
        s = f.transform(s);
      }
      if (s == null || f.choices && f.choices.indexOf(s) == -1) {
        s = f.value;
      }
    }
    return s;
  }
  let em = null;
  var ek = {
    search: async function (e) {
      let i;
      let n;
      let {
        maxResults: a,
        caller: f
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!e || !e.trim().length) {
        return null;
      }
      a ||= 90;
      await eu(null, {
        caller: f || "SearchIndex.search"
      });
      let s = e.toLowerCase().replace(/(\w)-/, "$1 ").split(/[\s|,]+/).filter((e, i, n) => e.trim() && n.indexOf(e) == i);
      if (!s.length) {
        return;
      }
      let o = em ||= Object.values(ef.emojis);
      for (let e of s) {
        if (!o.length) {
          break;
        }
        i = [];
        n = {};
        for (let a of o) {
          if (!a.search) {
            continue;
          }
          let f = a.search.indexOf(`,${e}`);
          if (f != -1) {
            i.push(a);
            n[a.id] ||= 0;
            n[a.id] += a.id == e ? 0 : f + 1;
          }
        }
        o = i;
      }
      if (!(i.length < 2)) {
        i.sort((e, i) => {
          let a = n[e.id];
          let f = n[i.id];
          if (a == f) {
            return e.id.localeCompare(i.id);
          } else {
            return a - f;
          }
        });
        if (i.length > a) {
          i = i.slice(0, a);
        }
      }
      return i;
    },
    get: function (e) {
      if (e.id) {
        return e;
      } else {
        return ef.emojis[e] || ef.emojis[ef.aliases[e]] || ef.emojis[ef.natives[e]];
      }
    },
    reset: function () {
      em = null;
    },
    SHORTCODES_REGEX: /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/
  };
  let eh = ["checkered_flag", "crossed_flags", "pirate_flag", "rainbow-flag", "transgender_flag", "triangular_flag_on_post", "waving_black_flag", "waving_white_flag"];
  async function e_(e = 1) {
    for (let i in [...Array(e).keys()]) {
      await new Promise(requestAnimationFrame);
    }
  }
  var ep = {
    categories: {
      activity: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: F("path", {
            d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
          })
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
          })
        })
      },
      custom: F("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: F("path", {
          d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
        })
      }),
      flags: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: F("path", {
            d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
          })
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
          })
        })
      },
      foods: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: F("path", {
            d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
          })
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
          })
        })
      },
      frequent: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: [F("path", {
            d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
          }), F("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
          })]
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
          })
        })
      },
      nature: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: [F("path", {
            d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
          }), F("path", {
            d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
          })]
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 576 512",
          children: F("path", {
            d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
          })
        })
      },
      objects: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: [F("path", {
            d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
          }), F("path", {
            d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
          })]
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 384 512",
          children: F("path", {
            d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
          })
        })
      },
      people: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: [F("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
          }), F("path", {
            d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
          })]
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
          })
        })
      },
      places: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: [F("path", {
            d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
          }), F("path", {
            d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
          })]
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
          })
        })
      },
      symbols: {
        outline: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          children: F("path", {
            d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
          })
        }),
        solid: F("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          children: F("path", {
            d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
          })
        })
      }
    },
    search: {
      loupe: F("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: F("path", {
          d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        })
      }),
      delete: F("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: F("path", {
          d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
        })
      })
    }
  };
  function ew(e) {
    let {
      id: i,
      skin: n,
      emoji: a
    } = e;
    if (e.shortcodes) {
      let a = e.shortcodes.match(ek.SHORTCODES_REGEX);
      if (a) {
        i = a[1];
        if (a[2]) {
          n = a[2];
        }
      }
    }
    a ||= ek.get(i || e.native);
    if (!a) {
      return e.fallback;
    }
    let f = a.skins[n - 1] || a.skins[0];
    let s = f.src || (e.set == "native" || e.spritesheet ? undefined : typeof e.getImageURL == "function" ? e.getImageURL(e.set, f.unified) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/64/${f.unified}.png`);
    let o = typeof e.getSpritesheetURL == "function" ? e.getSpritesheetURL(e.set) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/sheets-256/64.png`;
    return F("span", {
      class: "emoji-mart-emoji",
      "data-emoji-set": e.set,
      children: s ? F("img", {
        style: {
          maxWidth: e.size || "1em",
          maxHeight: e.size || "1em",
          display: "inline-block"
        },
        alt: f.native || f.shortcodes,
        src: s
      }) : e.set == "native" ? F("span", {
        style: {
          fontSize: e.size,
          fontFamily: "\"EmojiMart\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Segoe UI\", \"Apple Color Emoji\", \"Twemoji Mozilla\", \"Noto Color Emoji\", \"Android Emoji\""
        },
        children: f.native
      }) : F("span", {
        style: {
          display: "block",
          width: e.size,
          height: e.size,
          backgroundImage: `url(${o})`,
          backgroundSize: `${ef.sheet.cols * 100}% ${ef.sheet.rows * 100}%`,
          backgroundPosition: `${100 / (ef.sheet.cols - 1) * f.x}% ${100 / (ef.sheet.rows - 1) * f.y}%`
        }
      })
    });
  }
  let eb = typeof window != "undefined" && window.HTMLElement ? window.HTMLElement : Object;
  class eg extends eb {
    static get observedAttributes() {
      return Object.keys(this.Props);
    }
    update(e = {}) {
      for (let i in e) {
        this.attributeChangedCallback(i, null, e[i]);
      }
    }
    attributeChangedCallback(e, i, n) {
      if (!this.component) {
        return;
      }
      let a = ev(e, {
        [e]: n
      }, this.constructor.Props, this);
      if (this.component.componentWillReceiveProps) {
        this.component.componentWillReceiveProps({
          [e]: a
        });
      } else {
        this.component.props[e] = a;
        this.component.forceUpdate();
      }
    }
    disconnectedCallback() {
      this.disconnected = true;
      if (this.component && this.component.unregister) {
        this.component.unregister();
      }
    }
    constructor(e = {}) {
      super();
      this.props = e;
      if (e.parent || e.ref) {
        let i = null;
        let n = e.parent || (i = e.ref && e.ref.current);
        if (i) {
          i.innerHTML = "";
        }
        if (n) {
          n.appendChild(this);
        }
      }
    }
  }
  class ey extends eg {
    setShadow() {
      this.attachShadow({
        mode: "open"
      });
    }
    injectStyles(e) {
      if (!e) {
        return;
      }
      let i = document.createElement("style");
      i.textContent = e;
      this.shadowRoot.insertBefore(i, this.shadowRoot.firstChild);
    }
    constructor(e, {
      styles: i
    } = {}) {
      super(e);
      this.setShadow();
      this.injectStyles(i);
    }
  }
  var ex = {
    fallback: "",
    id: "",
    native: "",
    shortcodes: "",
    size: {
      value: "",
      transform: e => /\D/.test(e) ? e : `${e}px`
    },
    set: en.set,
    skin: en.skin
  };
  class eC extends eg {
    async connectedCallback() {
      let e = ec(this.props, ex, this);
      e.element = this;
      e.ref = e => {
        this.component = e;
      };
      await eu();
      if (!this.disconnected) {
        Z(F(ew, {
          ...e
        }), this);
      }
    }
    constructor(e) {
      super(e);
    }
  }
  l(eC, "Props", ex);
  if (typeof customElements != "undefined" && !customElements.get("em-emoji")) {
    customElements.define("em-emoji", eC);
  }
  var ej;
  var eS;
  var ez = [];
  var eq = v.__b;
  var eM = v.__r;
  var eE = v.diffed;
  var eL = v.__c;
  var eP = v.unmount;
  function eA() {
    var e;
    for (ez.sort(function (e, i) {
      return e.__v.__b - i.__v.__b;
    }); e = ez.pop();) {
      if (e.__P) {
        try {
          e.__H.__h.forEach(eO);
          e.__H.__h.forEach(eT);
          e.__H.__h = [];
        } catch (i) {
          e.__H.__h = [];
          v.__e(i, e.__v);
        }
      }
    }
  }
  v.__b = function (e) {
    ej = null;
    if (eq) {
      eq(e);
    }
  };
  v.__r = function (e) {
    if (eM) {
      eM(e);
    }
    var i = (ej = e.__c).__H;
    if (i) {
      i.__h.forEach(eO);
      i.__h.forEach(eT);
      i.__h = [];
    }
  };
  v.diffed = function (e) {
    if (eE) {
      eE(e);
    }
    var i = e.__c;
    if (i && i.__H && i.__H.__h.length) {
      if (ez.push(i) === 1 || eS !== v.requestAnimationFrame) {
        ((eS = v.requestAnimationFrame) || function (e) {
          var i;
          function n() {
            clearTimeout(a);
            if (eD) {
              cancelAnimationFrame(i);
            }
            setTimeout(e);
          }
          var a = setTimeout(n, 100);
          if (eD) {
            i = requestAnimationFrame(n);
          }
        })(eA);
      }
    }
    ej = null;
  };
  v.__c = function (e, i) {
    i.some(function (e) {
      try {
        e.__h.forEach(eO);
        e.__h = e.__h.filter(function (e) {
          return !e.__ || eT(e);
        });
      } catch (n) {
        i.some(function (e) {
          e.__h &&= [];
        });
        i = [];
        v.__e(n, e.__v);
      }
    });
    if (eL) {
      eL(e, i);
    }
  };
  v.unmount = function (e) {
    if (eP) {
      eP(e);
    }
    var i;
    var n = e.__c;
    if (n && n.__H) {
      n.__H.__.forEach(function (e) {
        try {
          eO(e);
        } catch (e) {
          i = e;
        }
      });
      if (i) {
        v.__e(i, n.__v);
      }
    }
  };
  var eD = typeof requestAnimationFrame == "function";
  function eO(e) {
    var i = ej;
    var n = e.__c;
    if (typeof n == "function") {
      e.__c = undefined;
      n();
    }
    ej = i;
  }
  function eT(e) {
    var i = ej;
    e.__c = e.__();
    ej = i;
  }
  function eB(e, i) {
    for (var n in e) {
      if (n !== "__source" && !(n in i)) {
        return true;
      }
    }
    for (var a in i) {
      if (a !== "__source" && e[a] !== i[a]) {
        return true;
      }
    }
    return false;
  }
  function eR(e) {
    this.props = e;
  }
  (eR.prototype = new z()).isPureReactComponent = true;
  eR.prototype.shouldComponentUpdate = function (e, i) {
    return eB(this.props, e) || eB(this.state, i);
  };
  var eI = v.__b;
  v.__b = function (e) {
    if (e.type && e.type.__f && e.ref) {
      e.props.ref = e.ref;
      e.ref = null;
    }
    if (eI) {
      eI(e);
    }
  };
  if (typeof Symbol != "undefined" && Symbol.for) {
    Symbol.for("react.forward_ref");
  }
  var eH = v.__e;
  v.__e = function (e, i, n) {
    if (e.then) {
      var a;
      var f = i;
      while (f = f.__) {
        if ((a = f.__c) && a.__c) {
          if (i.__e == null) {
            i.__e = n.__e;
            i.__k = n.__k;
          }
          return a.__c(e, i);
        }
      }
    }
    eH(e, i, n);
  };
  var eN = v.unmount;
  function eZ() {
    this.__u = 0;
    this.t = null;
    this.__b = null;
  }
  function eV(e) {
    var i = e.__.__c;
    return i && i.__e && i.__e(e);
  }
  function eF() {
    this.u = null;
    this.o = null;
  }
  v.unmount = function (e) {
    var i = e.__c;
    if (i && i.__R) {
      i.__R();
    }
    if (i && e.__h === true) {
      e.type = null;
    }
    if (eN) {
      eN(e);
    }
  };
  (eZ.prototype = new z()).__c = function (e, i) {
    var n = i.__c;
    var a = this;
    if (a.t == null) {
      a.t = [];
    }
    a.t.push(n);
    var f = eV(a.__v);
    var s = false;
    function o() {
      if (!s) {
        s = true;
        n.__R = null;
        if (f) {
          f(t);
        } else {
          t();
        }
      }
    }
    n.__R = o;
    function t() {
      if (! --a.__u) {
        if (a.state.__e) {
          var e;
          var i = a.state.__e;
          a.__v.__k[0] = function e(i, n, a) {
            if (i) {
              i.__v = null;
              i.__k = i.__k && i.__k.map(function (i) {
                return e(i, n, a);
              });
              if (i.__c && i.__c.__P === n) {
                if (i.__e) {
                  a.insertBefore(i.__e, i.__d);
                }
                i.__c.__e = true;
                i.__c.__P = a;
              }
            }
            return i;
          }(i, i.__c.__P, i.__c.__O);
        }
        for (a.setState({
          __e: a.__b = null
        }); e = a.t.pop();) {
          e.forceUpdate();
        }
      }
    }
    var r = i.__h === true;
    if (!a.__u++ && !r) {
      a.setState({
        __e: a.__b = a.__v.__k[0]
      });
    }
    e.then(o, o);
  };
  eZ.prototype.componentWillUnmount = function () {
    this.t = [];
  };
  eZ.prototype.render = function (e, i) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div");
        var a = this.__v.__k[0].__c;
        this.__v.__k[0] = function e(i, n, a) {
          if (i) {
            if (i.__c && i.__c.__H) {
              i.__c.__H.__.forEach(function (e) {
                if (typeof e.__c == "function") {
                  e.__c();
                }
              });
              i.__c.__H = null;
            }
            if ((i = function (e, i) {
              for (var n in i) {
                e[n] = i[n];
              }
              return e;
            }({}, i)).__c != null) {
              if (i.__c.__P === a) {
                i.__c.__P = n;
              }
              i.__c = null;
            }
            i.__k = i.__k && i.__k.map(function (i) {
              return e(i, n, a);
            });
          }
          return i;
        }(this.__b, n, a.__O = a.__P);
      }
      this.__b = null;
    }
    var f = i.__e && x(S, null, e.fallback);
    if (f) {
      f.__h = null;
    }
    return [x(S, null, i.__e ? null : e.children), f];
  };
  function eU(e, i, n) {
    if (++n[1] === n[0]) {
      e.o.delete(i);
    }
    if (e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) {
      for (n = e.u; n;) {
        while (n.length > 3) {
          n.pop()();
        }
        if (n[1] < n[0]) {
          break;
        }
        e.u = n = n[2];
      }
    }
  }
  (eF.prototype = new z()).__e = function (e) {
    var i = this;
    var n = eV(i.__v);
    var a = i.o.get(e);
    a[0]++;
    return function (f) {
      function s() {
        if (i.props.revealOrder) {
          a.push(f);
          eU(i, e, a);
        } else {
          f();
        }
      }
      if (n) {
        n(s);
      } else {
        s();
      }
    };
  };
  eF.prototype.render = function (e) {
    this.u = null;
    this.o = new Map();
    var i = P(e.children);
    if (e.revealOrder && e.revealOrder[0] === "b") {
      i.reverse();
    }
    for (var n = i.length; n--;) {
      this.o.set(i[n], this.u = [1, 0, this.u]);
    }
    return e.children;
  };
  eF.prototype.componentDidUpdate = eF.prototype.componentDidMount = function () {
    var e = this;
    this.o.forEach(function (i, n) {
      eU(e, n, i);
    });
  };
  var eK = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
  var e$ = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var eW = typeof document != "undefined";
  z.prototype.isReactComponent = {};
  ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
    Object.defineProperty(z.prototype, e, {
      configurable: true,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (i) {
        Object.defineProperty(this, e, {
          configurable: true,
          writable: true,
          value: i
        });
      }
    });
  });
  var eG = v.event;
  function eX() {}
  function eJ() {
    return this.cancelBubble;
  }
  function eY() {
    return this.defaultPrevented;
  }
  v.event = function (e) {
    if (eG) {
      e = eG(e);
    }
    e.persist = eX;
    e.isPropagationStopped = eJ;
    e.isDefaultPrevented = eY;
    return e.nativeEvent = e;
  };
  var eQ = {
    configurable: true,
    get: function () {
      return this.class;
    }
  };
  var e1 = v.vnode;
  v.vnode = function (e) {
    var i = e.type;
    var n = e.props;
    var a = n;
    if (typeof i == "string") {
      var f = i.indexOf("-") === -1;
      a = {};
      for (var s in n) {
        var o;
        var t = n[s];
        if ((!eW || s !== "children" || i !== "noscript") && (s !== "value" || !("defaultValue" in n) || t != null)) {
          if (s === "defaultValue" && "value" in n && n.value == null) {
            s = "value";
          } else if (s === "download" && t === true) {
            t = "";
          } else if (/ondoubleclick/i.test(s)) {
            s = "ondblclick";
          } else if (/^onchange(textarea|input)/i.test(s + i) && (o = n.type, !(typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(o))) {
            s = "oninput";
          } else if (/^onfocus$/i.test(s)) {
            s = "onfocusin";
          } else if (/^onblur$/i.test(s)) {
            s = "onfocusout";
          } else if (/^on(Ani|Tra|Tou|BeforeInp)/.test(s)) {
            s = s.toLowerCase();
          } else if (f && e$.test(s)) {
            s = s.replace(/[A-Z0-9]/, "-$&").toLowerCase();
          } else if (t === null) {
            t = undefined;
          }
          a[s] = t;
        }
      }
      if (i == "select" && a.multiple && Array.isArray(a.value)) {
        a.value = P(n.children).forEach(function (e) {
          e.props.selected = a.value.indexOf(e.props.value) != -1;
        });
      }
      if (i == "select" && a.defaultValue != null) {
        a.value = P(n.children).forEach(function (e) {
          e.props.selected = a.multiple ? a.defaultValue.indexOf(e.props.value) != -1 : a.defaultValue == e.props.value;
        });
      }
      e.props = a;
      if (n.class != n.className) {
        eQ.enumerable = "className" in n;
        if (n.className != null) {
          a.class = n.className;
        }
        Object.defineProperty(a, "className", eQ);
      }
    }
    e.$$typeof = eK;
    if (e1) {
      e1(e);
    }
  };
  var e0 = v.__r;
  v.__r = function (e) {
    if (e0) {
      e0(e);
    }
    e.__c;
  };
  let e2 = {
    light: "outline",
    dark: "solid"
  };
  class e3 extends eR {
    renderIcon(e) {
      let {
        icon: i
      } = e;
      if (i) {
        if (i.svg) {
          return F("span", {
            class: "flex",
            dangerouslySetInnerHTML: {
              __html: i.svg
            }
          });
        }
        if (i.src) {
          return F("img", {
            src: i.src
          });
        }
      }
      let n = ep.categories[e.id] || ep.categories.custom;
      return n[this.props.icons == "auto" ? e2[this.props.theme] : this.props.icons] || n;
    }
    render() {
      let e = null;
      return F("nav", {
        id: "nav",
        class: "padding",
        "data-position": this.props.position,
        dir: this.props.dir,
        children: F("div", {
          class: "flex relative",
          children: [this.categories.map((i, n) => {
            let a = i.name || ea.categories[i.id];
            let f = !this.props.unfocused && i.id == this.state.categoryId;
            if (f) {
              e = n;
            }
            return F("button", {
              "aria-label": a,
              "aria-selected": f || undefined,
              title: a,
              type: "button",
              class: "flex flex-grow flex-center",
              onMouseDown: e => e.preventDefault(),
              onClick: () => {
                this.props.onClick({
                  category: i,
                  i: n
                });
              },
              children: this.renderIcon(i)
            });
          }), F("div", {
            class: "bar",
            style: {
              width: `${100 / this.categories.length}%`,
              opacity: +(e != null),
              transform: this.props.dir === "rtl" ? `scaleX(-1) translateX(${e * 100}%)` : `translateX(${e * 100}%)`
            }
          })]
        })
      });
    }
    constructor() {
      super();
      this.categories = ef.categories.filter(e => !e.target);
      this.state = {
        categoryId: this.categories[0].id
      };
    }
  }
  class e4 extends eR {
    shouldComponentUpdate(e) {
      for (let i in e) {
        if (i != "children" && e[i] != this.props[i]) {
          return true;
        }
      }
      return false;
    }
    render() {
      return this.props.children;
    }
  }
  class e6 extends z {
    getInitialState(e = this.props) {
      return {
        skin: U.get("skin") || e.skin,
        theme: this.initTheme(e.theme)
      };
    }
    componentWillMount() {
      this.dir = ea.rtl ? "rtl" : "ltr";
      this.refs = {
        menu: j(),
        navigation: j(),
        scroll: j(),
        search: j(),
        searchInput: j(),
        skinToneButton: j(),
        skinToneRadio: j()
      };
      this.initGrid();
      this.setState({
        usedCategory: ef.categories.find(e => {
          let {
            id: i
          } = e;
          return i === "frequent";
        }) || {}
      });
      if (this.props.stickySearch == false && this.props.searchPosition == "sticky") {
        this.props.searchPosition = "static";
      }
    }
    componentDidMount() {
      this.register();
      this.shadowRoot = this.base.parentNode;
      if (this.props.autoFocus) {
        this.timer = setTimeout(() => {
          let {
            searchInput: e
          } = this.refs;
          if (e.current) {
            e.current.focus();
          }
        }, 50);
      }
    }
    componentWillReceiveProps(e) {
      this.nextState ||= {};
      for (let i in e) {
        this.nextState[i] = e[i];
      }
      clearTimeout(this.nextStateTimer);
      this.nextStateTimer = setTimeout(() => {
        let e = false;
        for (let i in this.nextState) {
          this.props[i] = this.nextState[i];
          if (i === "custom" || i === "categories") {
            e = true;
          }
        }
        delete this.nextState;
        let i = this.getInitialState();
        if (e) {
          return this.reset(i);
        }
        this.setState(i);
      });
    }
    componentWillUnmount() {
      this.unregister();
      clearTimeout(this.timer);
      this.timer = null;
    }
    async reset(e = {}) {
      await eu(this.props);
      this.initGrid();
      this.unobserve();
      this.setState(e, () => {
        this.observeCategories();
        this.observeRows();
      });
    }
    register() {
      document.addEventListener("click", this.handleClickOutside);
      this.observe();
    }
    unregister() {
      var e;
      document.removeEventListener("click", this.handleClickOutside);
      if ((e = this.darkMedia) !== null && e !== undefined) {
        e.removeEventListener("change", this.darkMediaCallback);
      }
      this.unobserve();
    }
    observe() {
      this.observeCategories();
      this.observeRows();
    }
    unobserve({
      except: e = []
    } = {}) {
      if (!Array.isArray(e)) {
        e = [e];
      }
      for (let i of this.observers) {
        if (!e.includes(i)) {
          i.disconnect();
        }
      }
      this.observers = [].concat(e);
    }
    initGrid() {
      let {
        categories: e
      } = ef;
      this.refs.categories = new Map();
      let i = ef.categories.map(e => e.id).join(",");
      if (this.navKey && this.navKey != i && this.refs.scroll.current) {
        this.refs.scroll.current.scrollTop = 0;
      }
      this.navKey = i;
      this.grid = [];
      this.grid.setsize = 0;
      let n = (e, i) => {
        let n = [];
        n.__categoryId = i.id;
        n.__index = e.length;
        this.grid.push(n);
        let a = this.grid.length - 1;
        let f = a % 10 ? {} : j();
        f.index = a;
        f.posinset = this.grid.setsize + 1;
        e.push(f);
        return n;
      };
      for (let i of e) {
        let e = [];
        let a = n(e, i);
        for (let f of i.emojis) {
          if (a.length == this.getPerLine()) {
            a = n(e, i);
          }
          this.grid.setsize += 1;
          a.push(f);
        }
        this.refs.categories.set(i.id, {
          root: j(),
          rows: e
        });
      }
    }
    initTheme(e) {
      if (e != "auto") {
        return e;
      }
      if (!this.darkMedia) {
        this.darkMedia = matchMedia("(prefers-color-scheme: dark)");
        if (this.darkMedia.media.match(/^not/)) {
          return "light";
        }
        this.darkMedia.addEventListener("change", this.darkMediaCallback);
      }
      if (this.darkMedia.matches) {
        return "dark";
      } else {
        return "light";
      }
    }
    initDynamicPerLine(e = this.props) {
      if (!e.dynamicWidth) {
        return;
      }
      let {
        element: i,
        emojiButtonSize: n
      } = e;
      let a = () => {
        let {
          width: e
        } = i.getBoundingClientRect();
        return Math.floor(e / n);
      };
      let f = new ResizeObserver(() => {
        this.unobserve({
          except: f
        });
        this.setState({
          perLine: a()
        }, () => {
          this.initGrid();
          this.forceUpdate(() => {
            this.observeCategories();
            this.observeRows();
          });
        });
      });
      f.observe(i);
      this.observers.push(f);
      return a();
    }
    getPerLine() {
      return this.state.perLine || this.props.perLine;
    }
    getEmojiByPos(e) {
      let [i, n] = e;
      let a = this.state.searchResults || this.grid;
      let f = a[i] && a[i][n];
      if (f) {
        return ek.get(f);
      }
    }
    observeCategories() {
      let e = this.refs.navigation.current;
      if (!e) {
        return;
      }
      let i = new Map();
      let n = i => {
        if (i != e.state.categoryId) {
          e.setState({
            categoryId: i
          });
        }
      };
      let a = new IntersectionObserver(e => {
        for (let n of e) {
          let e = n.target.dataset.id;
          i.set(e, n.intersectionRatio);
        }
        for (let [e, a] of [...i]) {
          if (a) {
            n(e);
            break;
          }
        }
      }, {
        root: this.refs.scroll.current,
        threshold: [0, 1]
      });
      for (let {
        root: e
      } of this.refs.categories.values()) {
        a.observe(e.current);
      }
      this.observers.push(a);
    }
    observeRows() {
      let e = {
        ...this.state.visibleRows
      };
      let i = new IntersectionObserver(i => {
        for (let n of i) {
          let i = parseInt(n.target.dataset.index);
          if (n.isIntersecting) {
            e[i] = true;
          } else {
            delete e[i];
          }
        }
        this.setState({
          visibleRows: e
        });
      }, {
        root: this.refs.scroll.current,
        rootMargin: `${this.props.emojiButtonSize * 15}px 0px ${this.props.emojiButtonSize * 10}px`
      });
      for (let {
        rows: e
      } of this.refs.categories.values()) {
        for (let n of e) {
          if (n.current) {
            i.observe(n.current);
          }
        }
      }
      this.observers.push(i);
    }
    preventDefault(e) {
      e.preventDefault();
    }
    unfocusSearch() {
      let e = this.refs.searchInput.current;
      if (e) {
        e.blur();
      }
    }
    navigate(e) {
      let {
        e: i,
        input: n,
        left: a,
        right: f,
        up: s,
        down: o
      } = e;
      let t = this.state.searchResults || this.grid;
      if (!t.length) {
        return;
      }
      let [r, d] = this.state.pos;
      let u = (() => {
        if (r == 0 && d == 0 && !i.repeat && (a || s)) {
          return null;
        }
        if (r == -1) {
          if (!i.repeat && (f || o) && n.selectionStart == n.value.length) {
            return [0, 0];
          } else {
            return null;
          }
        }
        if (a || f) {
          let e = t[r];
          let i = a ? -1 : 1;
          if (!e[d += i]) {
            r += i;
            if (!(e = t[r])) {
              r = a ? 0 : t.length - 1;
              d = a ? 0 : t[r].length - 1;
              return [r, d];
            }
            d = a ? e.length - 1 : 0;
          }
          return [r, d];
        }
        if (s || o) {
          let e = t[r += s ? -1 : 1];
          if (e) {
            if (!e[d]) {
              d = e.length - 1;
            }
          } else {
            r = s ? 0 : t.length - 1;
            d = s ? 0 : t[r].length - 1;
          }
          return [r, d];
        }
      })();
      if (u) {
        i.preventDefault();
      } else {
        if (this.state.pos[0] > -1) {
          this.setState({
            pos: [-1, -1]
          });
        }
        return;
      }
      this.setState({
        pos: u,
        keyboard: true
      }, () => {
        this.scrollTo({
          row: u[0]
        });
      });
    }
    scrollTo(e) {
      let {
        categoryId: i,
        row: n
      } = e;
      let a = this.state.searchResults || this.grid;
      if (!a.length) {
        return;
      }
      let f = this.refs.scroll.current;
      let s = f.getBoundingClientRect();
      let o = 0;
      if (n >= 0) {
        i = a[n].__categoryId;
      }
      if (i) {
        o = (this.refs[i] || this.refs.categories.get(i).root).current.getBoundingClientRect().top - (s.top - f.scrollTop) + 1;
      }
      if (n >= 0) {
        if (n) {
          let e = o + a[n].__index * this.props.emojiButtonSize;
          let i = e + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
          if (e < f.scrollTop) {
            o = e;
          } else {
            if (!(i > f.scrollTop + s.height)) {
              return;
            }
            o = i - s.height;
          }
        } else {
          o = 0;
        }
      }
      this.ignoreMouse();
      f.scrollTop = o;
    }
    ignoreMouse() {
      this.mouseIsIgnored = true;
      clearTimeout(this.ignoreMouseTimer);
      this.ignoreMouseTimer = setTimeout(() => {
        delete this.mouseIsIgnored;
      }, 100);
    }
    handleEmojiOver(e) {
      if (!this.mouseIsIgnored && !this.state.showSkins) {
        this.setState({
          pos: e || [-1, -1],
          keyboard: false
        });
      }
    }
    handleEmojiClick(e) {
      let {
        e: i,
        emoji: n,
        pos: a
      } = e;
      if (this.props.onEmojiSelect && (!n && a && (n = this.getEmojiByPos(a)), n)) {
        let e = function (e, {
          skinIndex: i = 0
        } = {}) {
          let n = e.skins[i] || (i = 0, e.skins[i]);
          let a = {
            id: e.id,
            name: e.name,
            native: n.native,
            unified: n.unified,
            keywords: e.keywords,
            shortcodes: n.shortcodes || e.shortcodes
          };
          if (e.skins.length > 1) {
            a.skin = i + 1;
          }
          if (n.src) {
            a.src = n.src;
          }
          if (e.aliases && e.aliases.length) {
            a.aliases = e.aliases;
          }
          if (e.emoticons && e.emoticons.length) {
            a.emoticons = e.emoticons;
          }
          return a;
        }(n, {
          skinIndex: this.state.skin - 1
        });
        let {
          maxFrequentRows: a,
          perLine: f,
          source: s
        } = this.props;
        if (a) {
          ee.add(e, this.props);
          let i = {
            id: "frequent",
            emojis: ee.get({
              maxFrequentRows: a,
              perLine: f,
              source: s
            })
          };
          this.setState({
            usedCategory: i
          });
        }
        this.props.onEmojiSelect(e, i);
      }
    }
    closeSkins() {
      if (this.state.showSkins) {
        this.setState({
          showSkins: null,
          tempSkin: null
        });
        this.base.removeEventListener("click", this.handleBaseClick);
        this.base.removeEventListener("keydown", this.handleBaseKeydown);
      }
    }
    handleSkinMouseOver(e) {
      this.setState({
        tempSkin: e
      });
    }
    handleSkinClick(e) {
      this.ignoreMouse();
      this.closeSkins();
      this.setState({
        skin: e,
        tempSkin: null
      });
      U.set("skin", e);
    }
    renderNav() {
      return F(e3, {
        ref: this.refs.navigation,
        icons: this.props.icons,
        theme: this.state.theme,
        dir: this.dir,
        unfocused: !!this.state.searchResults,
        position: this.props.navPosition,
        onClick: this.handleCategoryClick
      }, this.navKey);
    }
    renderPreview() {
      let e = this.getEmojiByPos(this.state.pos);
      let i = this.state.searchResults && !this.state.searchResults.length;
      return F("div", {
        id: "preview",
        class: "flex flex-middle",
        dir: this.dir,
        "data-position": this.props.previewPosition,
        children: [F("div", {
          class: "flex flex-middle flex-grow",
          children: [F("div", {
            class: "flex flex-auto flex-middle flex-center",
            style: {
              height: this.props.emojiButtonSize,
              fontSize: this.props.emojiButtonSize
            },
            children: F(ew, {
              emoji: e,
              id: i ? this.props.noResultsEmoji || "cry" : this.props.previewEmoji || (this.props.previewPosition == "top" ? "point_down" : "point_up"),
              set: this.props.set,
              size: this.props.emojiButtonSize,
              skin: this.state.tempSkin || this.state.skin,
              spritesheet: true,
              getSpritesheetURL: this.props.getSpritesheetURL
            })
          }), F("div", {
            class: `margin-${this.dir[0]}`,
            children: e || i ? F("div", {
              class: `padding-${this.dir[2]} align-${this.dir[0]}`,
              children: [F("div", {
                class: "preview-title ellipsis",
                children: e ? e.name : ea.search_no_results_1
              }), F("div", {
                class: "preview-subtitle ellipsis color-c",
                children: e ? e.skins[0].shortcodes : ea.search_no_results_2
              })]
            }) : F("div", {
              class: "preview-placeholder color-c",
              children: ea.pick
            })
          })]
        }), !e && this.props.skinTonePosition == "preview" && this.renderSkinToneButton()]
      });
    }
    renderEmojiButton(e, i) {
      var n;
      let {
        pos: a,
        posinset: f,
        grid: s
      } = i;
      let o = this.props.emojiButtonSize;
      let t = this.state.tempSkin || this.state.skin;
      let r = (e.skins[t - 1] || e.skins[0]).native;
      let d = Array.isArray(n = this.state.pos) && Array.isArray(a) && n.length === a.length && n.every((e, i) => e == a[i]);
      let u = a.concat(e.id).join("");
      return F(e4, {
        selected: d,
        skin: t,
        size: o,
        children: F("button", {
          "aria-label": r,
          "aria-selected": d || undefined,
          "aria-posinset": f,
          "aria-setsize": s.setsize,
          "data-keyboard": this.state.keyboard,
          title: this.props.previewPosition == "none" ? e.name : undefined,
          type: "button",
          class: "flex flex-center flex-middle",
          tabindex: "-1",
          onClick: i => this.handleEmojiClick({
            e: i,
            emoji: e
          }),
          onMouseEnter: () => this.handleEmojiOver(a),
          onMouseLeave: () => this.handleEmojiOver(),
          style: {
            width: this.props.emojiButtonSize,
            height: this.props.emojiButtonSize,
            fontSize: this.props.emojiSize,
            lineHeight: 0
          },
          children: [F("div", {
            "aria-hidden": "true",
            class: "background",
            style: {
              borderRadius: this.props.emojiButtonRadius,
              backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(f - 1) % this.props.emojiButtonColors.length] : undefined
            }
          }), F(ew, {
            emoji: e,
            set: this.props.set,
            size: this.props.emojiSize,
            skin: t,
            spritesheet: true,
            getSpritesheetURL: this.props.getSpritesheetURL
          })]
        })
      }, u);
    }
    renderSearch() {
      let e = this.props.previewPosition == "none" || this.props.skinTonePosition == "search";
      return F("div", {
        children: [F("div", {
          class: "spacer"
        }), F("div", {
          class: "flex flex-middle",
          children: [F("div", {
            class: "search relative flex-grow",
            children: [F("input", {
              type: "search",
              ref: this.refs.searchInput,
              placeholder: ea.search,
              onClick: this.handleSearchClick,
              onInput: this.handleSearchInput,
              onKeyDown: this.handleSearchKeyDown,
              autoComplete: "off"
            }), F("span", {
              class: "icon loupe flex",
              children: ep.search.loupe
            }), this.state.searchResults && F("button", {
              title: "Clear",
              "aria-label": "Clear",
              type: "button",
              class: "icon delete flex",
              onClick: this.clearSearch,
              onMouseDown: this.preventDefault,
              children: ep.search.delete
            })]
          }), e && this.renderSkinToneButton()]
        })]
      });
    }
    renderSearchResults() {
      let {
        searchResults: e
      } = this.state;
      if (e) {
        return F("div", {
          class: "category",
          ref: this.refs.search,
          children: [F("div", {
            class: `sticky padding-small align-${this.dir[0]}`,
            children: ea.categories.search
          }), F("div", {
            children: e.length ? e.map((i, n) => F("div", {
              class: "flex",
              children: i.map((i, a) => this.renderEmojiButton(i, {
                pos: [n, a],
                posinset: n * this.props.perLine + a + 1,
                grid: e
              }))
            })) : F("div", {
              class: `padding-small align-${this.dir[0]}`,
              children: this.props.onAddCustomEmoji && F("a", {
                onClick: this.props.onAddCustomEmoji,
                children: ea.add_custom
              })
            })
          })]
        });
      } else {
        return null;
      }
    }
    renderCategoryItem(e) {
      let i = this.getPerLine();
      let {
        root: n,
        rows: a
      } = this.refs.categories.get(e.id);
      return F("div", {
        "data-id": e.target ? e.target.id : e.id,
        class: "category",
        ref: n,
        children: [F("div", {
          class: `sticky padding-small align-${this.dir[0]}`,
          children: e.name || ea.categories[e.id]
        }), F("div", {
          class: "relative",
          style: {
            height: a.length * this.props.emojiButtonSize
          },
          children: a.map((n, a) => {
            let f = n.index - n.index % 10;
            let s = this.state.visibleRows[f];
            let o = "current" in n ? n : undefined;
            if (!s && !o) {
              return null;
            }
            let t = a * i;
            let r = e.emojis.slice(t, t + i);
            if (r.length < i) {
              r.push(...Array(i - r.length));
            }
            return F("div", {
              "data-index": n.index,
              ref: o,
              class: "flex row",
              style: {
                top: a * this.props.emojiButtonSize
              },
              children: s && r.map((e, i) => {
                if (!e) {
                  return F("div", {
                    style: {
                      width: this.props.emojiButtonSize,
                      height: this.props.emojiButtonSize
                    }
                  });
                }
                let a = ek.get(e);
                return this.renderEmojiButton(a, {
                  pos: [n.index, i],
                  posinset: n.posinset + i,
                  grid: this.grid
                });
              })
            }, n.index);
          })
        })]
      });
    }
    renderUsedCategoryItem() {
      let {
        usedCategory: e
      } = this.state;
      if (e.id) {
        return this.renderCategoryItem(e);
      } else {
        return null;
      }
    }
    renderCategories(e = ef.categories) {
      let i = !!this.state.searchResults;
      return F("div", {
        style: {
          visibility: i ? "hidden" : undefined,
          display: i ? "none" : undefined,
          height: "100%"
        },
        children: [this.renderUsedCategoryItem(), e.filter(e => {
          let {
            id: i
          } = e;
          return i !== "frequent";
        }).map(this.renderCategoryItem.bind(this))]
      });
    }
    renderSkinToneButton() {
      if (this.props.skinTonePosition == "none") {
        return null;
      } else {
        return F("div", {
          class: "flex flex-auto flex-center flex-middle",
          style: {
            position: "relative",
            width: this.props.emojiButtonSize,
            height: this.props.emojiButtonSize
          },
          children: F("button", {
            type: "button",
            ref: this.refs.skinToneButton,
            class: "skin-tone-button flex flex-auto flex-center flex-middle",
            "aria-selected": this.state.showSkins ? "" : undefined,
            "aria-label": ea.skins.choose,
            title: ea.skins.choose,
            onClick: this.openSkins,
            style: {
              width: this.props.emojiSize,
              height: this.props.emojiSize
            },
            children: F("span", {
              class: `skin-tone skin-tone-${this.state.skin}`
            })
          })
        });
      }
    }
    renderLiveRegion() {
      let e = this.getEmojiByPos(this.state.pos);
      return F("div", {
        "aria-live": "polite",
        class: "sr-only",
        children: e ? e.name : ""
      });
    }
    renderSkins() {
      let e = this.refs.skinToneButton.current.getBoundingClientRect();
      let i = this.base.getBoundingClientRect();
      let n = {};
      if (this.dir == "ltr") {
        n.right = i.right - e.right - 3;
      } else {
        n.left = e.left - i.left - 3;
      }
      if (this.props.previewPosition == "bottom" && this.props.skinTonePosition == "preview") {
        n.bottom = i.bottom - e.top + 6;
      } else {
        n.top = e.bottom - i.top + 3;
        n.bottom = "auto";
      }
      return F("div", {
        ref: this.refs.menu,
        role: "radiogroup",
        dir: this.dir,
        "aria-label": ea.skins.choose,
        class: "menu hidden",
        "data-position": n.top ? "top" : "bottom",
        style: n,
        children: [...Array(6).keys()].map(e => {
          let i = e + 1;
          let n = this.state.skin == i;
          return F("div", {
            children: [F("input", {
              type: "radio",
              name: "skin-tone",
              value: i,
              "aria-label": ea.skins[i],
              ref: n ? this.refs.skinToneRadio : null,
              defaultChecked: n,
              onChange: () => this.handleSkinMouseOver(i),
              onKeyDown: e => {
                if (e.code == "Enter" || e.code == "Space" || e.code == "Tab") {
                  e.preventDefault();
                  this.handleSkinClick(i);
                }
              }
            }), F("button", {
              "aria-hidden": "true",
              tabindex: "-1",
              onClick: () => this.handleSkinClick(i),
              onMouseEnter: () => this.handleSkinMouseOver(i),
              onMouseLeave: () => this.handleSkinMouseOver(),
              class: "option flex flex-grow flex-middle",
              children: [F("span", {
                class: `skin-tone skin-tone-${i}`
              }), F("span", {
                class: "margin-small-lr",
                children: ea.skins[i]
              })]
            })]
          });
        })
      });
    }
    render() {
      let e = this.props.perLine * this.props.emojiButtonSize;
      return F("section", {
        id: "root",
        class: "flex flex-column",
        dir: this.dir,
        style: {
          width: this.props.dynamicWidth ? "100%" : `calc(${e}px + (var(--padding) + var(--sidebar-width)))`
        },
        "data-emoji-set": this.props.set,
        "data-theme": this.state.theme,
        "data-menu": this.state.showSkins ? "" : undefined,
        children: [this.props.previewPosition == "top" && this.renderPreview(), this.props.navPosition == "top" && this.renderNav(), this.props.searchPosition == "sticky" && F("div", {
          class: "padding-lr",
          children: this.renderSearch()
        }), F("div", {
          ref: this.refs.scroll,
          class: "scroll flex-grow padding-lr",
          children: F("div", {
            style: {
              width: this.props.dynamicWidth ? "100%" : e,
              height: "100%"
            },
            children: [this.props.searchPosition == "static" && this.renderSearch(), this.renderSearchResults(), this.renderCategories()]
          })
        }), this.props.navPosition == "bottom" && this.renderNav(), this.props.previewPosition == "bottom" && this.renderPreview(), this.state.showSkins && this.renderSkins(), this.renderLiveRegion()]
      });
    }
    constructor(e) {
      super();
      l(this, "darkMediaCallback", () => {
        if (this.props.theme == "auto") {
          this.setState({
            theme: this.darkMedia.matches ? "dark" : "light"
          });
        }
      });
      l(this, "handleClickOutside", e => {
        let {
          element: i
        } = this.props;
        if (e.target != i) {
          if (this.state.showSkins) {
            this.closeSkins();
          }
          if (this.props.onClickOutside) {
            this.props.onClickOutside(e);
          }
        }
      });
      l(this, "handleBaseClick", e => {
        if (this.state.showSkins && !e.target.closest(".menu")) {
          e.preventDefault();
          e.stopImmediatePropagation();
          this.closeSkins();
        }
      });
      l(this, "handleBaseKeydown", e => {
        if (this.state.showSkins && e.key == "Escape") {
          e.preventDefault();
          e.stopImmediatePropagation();
          this.closeSkins();
        }
      });
      l(this, "handleSearchClick", () => {
        if (this.getEmojiByPos(this.state.pos)) {
          this.setState({
            pos: [-1, -1]
          });
        }
      });
      l(this, "handleSearchInput", async () => {
        let e = this.refs.searchInput.current;
        if (!e) {
          return;
        }
        let {
          value: i
        } = e;
        let n = await ek.search(i);
        let a = () => {
          if (this.refs.scroll.current) {
            this.refs.scroll.current.scrollTop = 0;
          }
        };
        if (!n) {
          return this.setState({
            searchResults: n,
            pos: [-1, -1]
          }, a);
        }
        let f = e.selectionStart == e.value.length ? [0, 0] : [-1, -1];
        let s = [];
        s.setsize = n.length;
        let o = null;
        for (let e of n) {
          if (!s.length || o.length == this.getPerLine()) {
            (o = []).__categoryId = "search";
            o.__index = s.length;
            s.push(o);
          }
          o.push(e);
        }
        this.ignoreMouse();
        this.setState({
          searchResults: s,
          pos: f
        }, a);
      });
      l(this, "handleSearchKeyDown", e => {
        let i = e.currentTarget;
        e.stopImmediatePropagation();
        switch (e.key) {
          case "ArrowLeft":
            this.navigate({
              e: e,
              input: i,
              left: true
            });
            break;
          case "ArrowRight":
            this.navigate({
              e: e,
              input: i,
              right: true
            });
            break;
          case "ArrowUp":
            this.navigate({
              e: e,
              input: i,
              up: true
            });
            break;
          case "ArrowDown":
            this.navigate({
              e: e,
              input: i,
              down: true
            });
            break;
          case "Enter":
            e.preventDefault();
            this.handleEmojiClick({
              e: e,
              pos: this.state.pos
            });
            break;
          case "Escape":
            e.preventDefault();
            if (this.state.searchResults) {
              this.clearSearch();
            } else {
              this.unfocusSearch();
            }
        }
      });
      l(this, "clearSearch", () => {
        let e = this.refs.searchInput.current;
        if (e) {
          e.value = "";
          e.focus();
          this.handleSearchInput();
        }
      });
      l(this, "handleCategoryClick", e => {
        let {
          category: i,
          i: n
        } = e;
        this.scrollTo(n == 0 ? {
          row: -1
        } : {
          categoryId: i.id
        });
      });
      l(this, "openSkins", e => {
        let {
          currentTarget: i
        } = e;
        let n = i.getBoundingClientRect();
        this.setState({
          showSkins: n
        }, async () => {
          await e_(2);
          let e = this.refs.menu.current;
          if (e) {
            e.classList.remove("hidden");
            this.refs.skinToneRadio.current.focus();
            this.base.addEventListener("click", this.handleBaseClick, true);
            this.base.addEventListener("keydown", this.handleBaseKeydown, true);
          }
        });
      });
      this.observers = [];
      this.timer = null;
      this.state = {
        pos: [-1, -1],
        perLine: this.initDynamicPerLine(e),
        visibleRows: {
          0: true
        },
        ...this.getInitialState(e),
        usedCategory: []
      };
    }
  }
  class e9 extends ey {
    async connectedCallback() {
      let e = ec(this.props, en, this);
      e.element = this;
      e.ref = e => {
        this.component = e;
      };
      await eu(e);
      if (!this.disconnected) {
        Z(F(e6, {
          ...e
        }), this.shadowRoot);
      }
    }
    constructor(e) {
      super(e, {
        styles: u(e5)
      });
    }
  }
  l(e9, "Props", en);
  if (typeof customElements != "undefined" && !customElements.get("em-emoji-picker")) {
    customElements.define("em-emoji-picker", e9);
  }
  var e5 = {};
  e5 = ":host {\n  width: min-content;\n  height: 435px;\n  min-height: 230px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  --border-radius: 10px;\n  --category-icon-size: 18px;\n  --font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  --font-size: 15px;\n  --preview-placeholder-size: 21px;\n  --preview-title-size: 1.1em;\n  --preview-subtitle-size: .9em;\n  --shadow-color: 0deg 0% 0%;\n  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);\n  display: flex;\n}\n\n[data-theme=\"light\"] {\n  --em-rgb-color: var(--rgb-color, 34, 36, 39);\n  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);\n  --em-rgb-background: var(--rgb-background, 255, 255, 255);\n  --em-rgb-input: var(--rgb-input, 255, 255, 255);\n  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));\n  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));\n}\n\n[data-theme=\"dark\"] {\n  --em-rgb-color: var(--rgb-color, 222, 222, 221);\n  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);\n  --em-rgb-background: var(--rgb-background, 21, 22, 23);\n  --em-rgb-input: var(--rgb-input, 0, 0, 0);\n  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));\n  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));\n}\n\n#root {\n  --color-a: rgb(var(--em-rgb-color));\n  --color-b: rgba(var(--em-rgb-color), .65);\n  --color-c: rgba(var(--em-rgb-color), .45);\n  --padding: 12px;\n  --padding-small: calc(var(--padding) / 2);\n  --sidebar-width: 16px;\n  --duration: 225ms;\n  --duration-fast: 125ms;\n  --duration-instant: 50ms;\n  --easing: cubic-bezier(.4, 0, .2, 1);\n  width: 100%;\n  text-align: left;\n  border-radius: var(--border-radius);\n  background-color: rgb(var(--em-rgb-background));\n  position: relative;\n}\n\n@media (prefers-reduced-motion) {\n  #root {\n    --duration: 0;\n    --duration-fast: 0;\n    --duration-instant: 0;\n  }\n}\n\n#root[data-menu] button {\n  cursor: auto;\n}\n\n#root[data-menu] .menu button {\n  cursor: pointer;\n}\n\n:host, #root, input, button {\n  color: rgb(var(--em-rgb-color));\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  line-height: normal;\n}\n\n*, :before, :after {\n  box-sizing: border-box;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.relative {\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-auto {\n  flex: none;\n}\n\n.flex-center {\n  justify-content: center;\n}\n\n.flex-column {\n  flex-direction: column;\n}\n\n.flex-grow {\n  flex: auto;\n}\n\n.flex-middle {\n  align-items: center;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.padding {\n  padding: var(--padding);\n}\n\n.padding-t {\n  padding-top: var(--padding);\n}\n\n.padding-lr {\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n}\n\n.padding-r {\n  padding-right: var(--padding);\n}\n\n.padding-small {\n  padding: var(--padding-small);\n}\n\n.padding-small-b {\n  padding-bottom: var(--padding-small);\n}\n\n.padding-small-lr {\n  padding-left: var(--padding-small);\n  padding-right: var(--padding-small);\n}\n\n.margin {\n  margin: var(--padding);\n}\n\n.margin-r {\n  margin-right: var(--padding);\n}\n\n.margin-l {\n  margin-left: var(--padding);\n}\n\n.margin-small-l {\n  margin-left: var(--padding-small);\n}\n\n.margin-small-lr {\n  margin-left: var(--padding-small);\n  margin-right: var(--padding-small);\n}\n\n.align-l {\n  text-align: left;\n}\n\n.align-r {\n  text-align: right;\n}\n\n.color-a {\n  color: var(--color-a);\n}\n\n.color-b {\n  color: var(--color-b);\n}\n\n.color-c {\n  color: var(--color-c);\n}\n\n.ellipsis {\n  white-space: nowrap;\n  max-width: 100%;\n  width: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sr-only {\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  top: auto;\n  left: -10000px;\n  overflow: hidden;\n}\n\na {\n  cursor: pointer;\n  color: rgb(var(--em-rgb-accent));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\n.spacer {\n  height: 10px;\n}\n\n[dir=\"rtl\"] .scroll {\n  padding-left: 0;\n  padding-right: var(--padding);\n}\n\n.scroll {\n  padding-right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.scroll::-webkit-scrollbar {\n  width: var(--sidebar-width);\n  height: var(--sidebar-width);\n}\n\n.scroll::-webkit-scrollbar-track {\n  border: 0;\n}\n\n.scroll::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\n.scroll::-webkit-scrollbar-corner {\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.scroll::-webkit-scrollbar-thumb {\n  min-height: 20%;\n  min-height: 65px;\n  border: 4px solid rgb(var(--em-rgb-background));\n  border-radius: 8px;\n}\n\n.scroll::-webkit-scrollbar-thumb:hover {\n  background-color: var(--em-color-border-over) !important;\n}\n\n.scroll:hover::-webkit-scrollbar-thumb {\n  background-color: var(--em-color-border);\n}\n\n.sticky {\n  z-index: 1;\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  font-weight: 500;\n  position: sticky;\n  top: -1px;\n}\n\n[dir=\"rtl\"] .search input[type=\"search\"] {\n  padding: 10px 2.2em 10px 2em;\n}\n\n[dir=\"rtl\"] .search .loupe {\n  left: auto;\n  right: .7em;\n}\n\n[dir=\"rtl\"] .search .delete {\n  left: .7em;\n  right: auto;\n}\n\n.search {\n  z-index: 2;\n  position: relative;\n}\n\n.search input, .search button {\n  font-size: calc(var(--font-size)  - 1px);\n}\n\n.search input[type=\"search\"] {\n  width: 100%;\n  background-color: var(--em-color-border);\n  transition-duration: var(--duration);\n  transition-property: background-color, box-shadow;\n  transition-timing-function: var(--easing);\n  border: 0;\n  border-radius: 10px;\n  outline: 0;\n  padding: 10px 2em 10px 2.2em;\n  display: block;\n}\n\n.search input[type=\"search\"]::-ms-input-placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type=\"search\"]::placeholder {\n  color: inherit;\n  opacity: .6;\n}\n\n.search input[type=\"search\"], .search input[type=\"search\"]::-webkit-search-decoration, .search input[type=\"search\"]::-webkit-search-cancel-button, .search input[type=\"search\"]::-webkit-search-results-button, .search input[type=\"search\"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n}\n\n.search input[type=\"search\"]:focus {\n  background-color: rgb(var(--em-rgb-input));\n  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);\n}\n\n.search .icon {\n  z-index: 1;\n  color: rgba(var(--em-rgb-color), .7);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.search .loupe {\n  pointer-events: none;\n  left: .7em;\n}\n\n.search .delete {\n  right: .7em;\n}\n\nsvg {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n}\n\nbutton {\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: currentColor;\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n}\n\n#nav {\n  z-index: 2;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#nav button {\n  color: var(--color-b);\n  transition: color var(--duration) var(--easing);\n}\n\n#nav button:hover {\n  color: var(--color-a);\n}\n\n#nav svg, #nav img {\n  width: var(--category-icon-size);\n  height: var(--category-icon-size);\n}\n\n#nav[dir=\"rtl\"] .bar {\n  left: auto;\n  right: 0;\n}\n\n#nav .bar {\n  width: 100%;\n  height: 3px;\n  background-color: rgb(var(--em-rgb-accent));\n  transition: transform var(--duration) var(--easing);\n  border-radius: 3px 3px 0 0;\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n}\n\n#nav button[aria-selected] {\n  color: rgb(var(--em-rgb-accent));\n}\n\n#preview {\n  z-index: 2;\n  padding: calc(var(--padding)  + 4px) var(--padding);\n  padding-right: var(--sidebar-width);\n  position: relative;\n}\n\n#preview .preview-placeholder {\n  font-size: var(--preview-placeholder-size);\n}\n\n#preview .preview-title {\n  font-size: var(--preview-title-size);\n}\n\n#preview .preview-subtitle {\n  font-size: var(--preview-subtitle-size);\n}\n\n#nav:before, #preview:before {\n  content: \"\";\n  height: 2px;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#nav[data-position=\"top\"]:before, #preview[data-position=\"top\"]:before {\n  background: linear-gradient(to bottom, var(--em-color-border), transparent);\n  top: 100%;\n}\n\n#nav[data-position=\"bottom\"]:before, #preview[data-position=\"bottom\"]:before {\n  background: linear-gradient(to top, var(--em-color-border), transparent);\n  bottom: 100%;\n}\n\n.category:last-child {\n  min-height: calc(100% + 1px);\n}\n\n.category button {\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;\n  position: relative;\n}\n\n.category button > * {\n  position: relative;\n}\n\n.category button .background {\n  opacity: 0;\n  background-color: var(--em-color-border);\n  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.category button:hover .background {\n  transition-duration: var(--duration-instant);\n  transition-delay: 0s;\n}\n\n.category button[aria-selected] .background {\n  opacity: 1;\n}\n\n.category button[data-keyboard] .background {\n  transition: none;\n}\n\n.row {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.skin-tone-button {\n  border: 1px solid rgba(0, 0, 0, 0);\n  border-radius: 100%;\n}\n\n.skin-tone-button:hover {\n  border-color: var(--em-color-border);\n}\n\n.skin-tone-button:active .skin-tone {\n  transform: scale(.85) !important;\n}\n\n.skin-tone-button .skin-tone {\n  transition: transform var(--duration) var(--easing);\n}\n\n.skin-tone-button[aria-selected] {\n  background-color: var(--em-color-border);\n  border-top-color: rgba(0, 0, 0, .05);\n  border-bottom-color: rgba(0, 0, 0, 0);\n  border-left-width: 0;\n  border-right-width: 0;\n}\n\n.skin-tone-button[aria-selected] .skin-tone {\n  transform: scale(.9);\n}\n\n.menu {\n  z-index: 2;\n  white-space: nowrap;\n  border: 1px solid var(--em-color-border);\n  background-color: rgba(var(--em-rgb-background), .9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition-property: opacity, transform;\n  transition-duration: var(--duration);\n  transition-timing-function: var(--easing);\n  border-radius: 10px;\n  padding: 4px;\n  position: absolute;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);\n}\n\n.menu.hidden {\n  opacity: 0;\n}\n\n.menu[data-position=\"bottom\"] {\n  transform-origin: 100% 100%;\n}\n\n.menu[data-position=\"bottom\"].hidden {\n  transform: scale(.9)rotate(-3deg)translateY(5%);\n}\n\n.menu[data-position=\"top\"] {\n  transform-origin: 100% 0;\n}\n\n.menu[data-position=\"top\"].hidden {\n  transform: scale(.9)rotate(3deg)translateY(-5%);\n}\n\n.menu input[type=\"radio\"] {\n  clip: rect(0 0 0 0);\n  width: 1px;\n  height: 1px;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n}\n\n.menu input[type=\"radio\"]:checked + .option {\n  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));\n}\n\n.option {\n  width: 100%;\n  border-radius: 6px;\n  padding: 4px 6px;\n}\n\n.option:hover {\n  color: #fff;\n  background-color: rgb(var(--em-rgb-accent));\n}\n\n.skin-tone {\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n\n.skin-tone:after {\n  content: \"\";\n  mix-blend-mode: overlay;\n  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));\n  border: 1px solid rgba(0, 0, 0, .8);\n  border-radius: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;\n}\n\n.skin-tone-1 {\n  background-color: #ffc93a;\n}\n\n.skin-tone-2 {\n  background-color: #ffdab7;\n}\n\n.skin-tone-3 {\n  background-color: #e7b98f;\n}\n\n.skin-tone-4 {\n  background-color: #c88c61;\n}\n\n.skin-tone-5 {\n  background-color: #a46134;\n}\n\n.skin-tone-6 {\n  background-color: #5d4437;\n}\n\n[data-index] {\n  justify-content: space-between;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone:after {\n  box-shadow: none;\n  border-color: rgba(0, 0, 0, .5);\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-1 {\n  background-color: #fade72;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-2 {\n  background-color: #f3dfd0;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-3 {\n  background-color: #eed3a8;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-4 {\n  background-color: #cfad8d;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-5 {\n  background-color: #a8805d;\n}\n\n[data-emoji-set=\"twitter\"] .skin-tone-6 {\n  background-color: #765542;\n}\n\n[data-emoji-set=\"google\"] .skin-tone:after {\n  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);\n}\n\n[data-emoji-set=\"google\"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=\"google\"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone:after {\n  border-color: rgba(0, 0, 0, .4);\n  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-1 {\n  background-color: #f5c748;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-2 {\n  background-color: #f1d5aa;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-3 {\n  background-color: #d4b48d;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-4 {\n  background-color: #aa876b;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-5 {\n  background-color: #916544;\n}\n\n[data-emoji-set=\"facebook\"] .skin-tone-6 {\n  background-color: #61493f;\n}\n\n";
  let e8 = reactCoreLibraryReexport.forwardRef((e, i) => {
    let n = reactCoreLibraryReexport.useRef(null);
    if (n.current) {
      n.current.update(e);
    }
    reactCoreLibraryReexport.useEffect(() => {
      n.current = new e9(Object.assign(Object.assign({}, e), {
        ref: i
      }));
      return () => {
        n.current = null;
      };
    }, []);
    return reactCoreLibraryReexport.createElement("div", {
      ref: i
    });
  });
  var tooltipComponentModule = require("tooltip-component-module") /*id: 91247*/;
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var io = ["prefixId"];
  function it(e) {
    e.prefixId;
    var i = objectOmitHelper_1.omitWithSymbols(e, io);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i), reactCoreLibraryReexport.createElement("path", {
      d: "M21.485 6.896a.5.5 0 0 0 0-.792l-3.18-2.449a.5.5 0 0 0-.805.397V5.5h-1c-1.652 0-2.96.917-4.01 2.035-1.033 1.1-1.95 2.54-2.803 3.88l-.03.049c-.89 1.396-1.713 2.684-2.605 3.633-.887.945-1.704 1.404-2.552 1.404H3.12l-.088-.001h-.03a1 1 0 0 0-.005 2h.441l1.062.001c1.652 0 2.96-.917 4.01-2.035 1.034-1.1 1.95-2.54 2.803-3.88l.03-.049c.89-1.396 1.713-2.684 2.605-3.633.887-.945 1.704-1.403 2.552-1.403h1v1.447a.5.5 0 0 0 .805.396l3.18-2.448Zm-8.995 9.569a14.84 14.84 0 0 1-1.07-1.296c.402-.588.776-1.177 1.123-1.723l.049-.076c.446.645.891 1.231 1.356 1.725.887.945 1.704 1.404 2.552 1.404h1v-1.448a.5.5 0 0 1 .805-.396l3.18 2.448a.5.5 0 0 1 0 .792l-3.18 2.449a.5.5 0 0 1-.805-.396v-1.449h-1c-1.652 0-2.96-.917-4.01-2.034Zm-4.033-5.91c.347-.547.722-1.136 1.124-1.725a14.71 14.71 0 0 0-1.07-1.297C7.46 6.415 6.15 5.498 4.5 5.498H3.437l-.322.001h-.118L3 6.5l-.003-1a1 1 0 1 0 .005 2L3 6.5l.002 1H4.5c.848 0 1.665.458 2.552 1.403.465.495.911 1.081 1.358 1.727l.047-.074Z",
      fill: "currentColor"
    }));
  }
  var ir = reactCoreLibraryReexport.forwardRef(function (e, i) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: it
    }, e, {
      ref: i,
      svgProps: {
        "data-icon": "RandomFilled"
      }
    }));
  });
  let id = e => {
    let {
      onEmojiSelect: i,
      autoFocus: n,
      supportRandom: u = false,
      source: l
    } = e;
    let c = i18nTranslationHook_1.useI18n();
    let v = u && (i18nLanguageDetector.isEnglishLocale() || clientEmojiFeatureCheck.checkEmojiSearchFeature());
    let m = (browserThemeManager.getThemeMode() || "").toLowerCase();
    let k = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      (function (e, i) {
        var n;
        let a = (e || document).querySelector("em-emoji-picker");
        let f = document.createElement("style");
        f.innerHTML = emojiPickerStylesConstants.emojiPickerStyles;
        if (i) {
          f.innerHTML += emojiPickerStylesConstants.emojiSearchStyles;
        }
        if ((n = a == null ? undefined : a.shadowRoot) !== null && n !== undefined) {
          n.appendChild(f);
        }
      })(k == null ? undefined : k.current, u);
    }, []);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(e8, {
      ref: k,
      data: emojiDataConfig.getPickData(),
      categories: emojiPickerStylesConstants.emojiCategories,
      i18n: clientEmojiFeatureCheck.getEmojiCategoryLabels(c),
      maxFrequentRows: 1,
      navPosition: "bottom",
      previewPosition: "none",
      searchPosition: i18nLanguageDetector.isEnglishLocale() || clientEmojiFeatureCheck.checkEmojiSearchFeature() ? "sticky" : "none",
      skinTonePosition: "none",
      icons: "outline",
      theme: m,
      perLine: 11,
      onEmojiSelect: e => {
        i(e);
      },
      autoFocus: n,
      source: l
    }), !!v && reactCoreLibraryReexport.createElement(tooltipComponentModule.TooltipComponent, {
      title: c("LarkCCM_Docs_CalloutEmoji_Random_Tooltip"),
      placement: "top"
    }, reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      onClick: e.onRandomPick,
      className: "random-pick-btn"
    }, reactCoreLibraryReexport.createElement(ir, null))));
  };
  require.r(exports);
  require.d(exports, {
    EmojiPicker: function () {
      return id;
    }
  });
}