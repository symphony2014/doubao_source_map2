// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'OptimizedImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 351824
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var r = require("buffer-polyfill-impl") /*id: 989572*/.Buffer;
  function o() {
    return (o = Object.assign || function (e) {
      var t;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in t = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(t, r)) {
            e[r] = t[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function l(e, t) {
    var n = {};
    for (r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
        n[r] = e[r];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(e);
      for (; i < r.length; i++) {
        if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
          n[r[i]] = e[r[i]];
        }
      }
    }
    return n;
  }
  function a(e, t, n, i) {
    return new (n = n || Promise)(function (r, o) {
      function l(e) {
        try {
          s(i.next(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        try {
          s(i.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        var t;
        if (e.done) {
          r(e.value);
        } else {
          ((t = e.value) instanceof n ? t : new n(function (e) {
            e(t);
          })).then(l, a);
        }
      }
      s((i = i.apply(e, t || [])).next());
    });
  }
  function s(e, t) {
    var n;
    var i;
    var r;
    var o = {
      label: 0,
      sent: function () {
        if (r[0] & 1) {
          throw r[1];
        }
        return r[1];
      },
      trys: [],
      ops: []
    };
    var l = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      l[Symbol.iterator] = function () {
        return this;
      };
    }
    return l;
    function a(a) {
      return function (s) {
        var c = [a, s];
        if (n) {
          throw TypeError("Generator is already executing.");
        }
        while (o = l && c[l = 0] ? 0 : o) {
          try {
            n = 1;
            if (i && (r = c[0] & 2 ? i.return : c[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, c[1])).done) {
              return r;
            }
            i = 0;
            switch ((c = r ? [c[0] & 2, r.value] : c)[0]) {
              case 0:
              case 1:
                r = c;
                break;
              case 4:
                o.label++;
                return {
                  value: c[1],
                  done: false
                };
              case 5:
                o.label++;
                i = c[1];
                c = [0];
                continue;
              case 7:
                c = o.ops.pop();
                o.trys.pop();
                continue;
              default:
                if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                  o = 0;
                  continue;
                }
                if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) {
                  o.label = c[1];
                } else if (c[0] === 6 && o.label < r[1]) {
                  o.label = r[1];
                  r = c;
                } else {
                  if (!r || !(o.label < r[2])) {
                    if (r[2]) {
                      o.ops.pop();
                    }
                    o.trys.pop();
                    continue;
                  }
                  o.label = r[2];
                  o.ops.push(c);
                }
            }
            c = t.call(e, o);
          } catch (e) {
            c = [6, e];
            i = 0;
          } finally {
            n = r = 0;
          }
        }
        if (c[0] & 5) {
          throw c[1];
        }
        return {
          value: c[0] ? c[1] : undefined,
          done: true
        };
      };
    }
  }
  var c = {
    formats: ["webp"],
    imageSizes: [480, 750, 1080, 1366, 1920],
    quality: 75,
    loading: "lazy",
    lazyBoundary: "200px",
    placeholder: "empty"
  };
  var d = {
    webp: "awebp",
    heic: "heif",
    avif: "avis",
    jpeg: "jpeg",
    png: "png"
  };
  var u = {
    protocol: "http://",
    domain: "",
    src: "",
    search: ""
  };
  var p = {
    protocol: "http://",
    domain: "",
    src: "",
    search: "",
    template: "",
    suffix: "",
    templateWithoutParams: "",
    params: []
  };
  function h(e) {
    return e.default !== undefined;
  }
  var m = /^(.+)~(tplv-[a-zA-Z0-9]{2,10}-.+)\.([a-zA-Z]+)\??(.*)$/;
  function f(e) {
    try {
      var t = e.startsWith("http") ? e : (e.startsWith("//") ? "https:" : "http://").concat(e);
      var n = new URL(t);
      var i = m.exec(n.pathname.slice(1));
      var r = {
        protocol: n.protocol,
        domain: n.hostname,
        src: i[1],
        template: i[2],
        suffix: i[3],
        search: n.search
      };
      var l = (r.template || "").split(":");
      return o(o({}, r), {
        templateWithoutParams: l.shift() || "",
        params: l
      });
    } catch (e) {
      return p;
    }
  }
  function g(e) {
    try {
      var t = e.startsWith("http") ? e : (e.startsWith("//") ? "https:" : "http://").concat(e);
      var n = new URL(t);
      return {
        protocol: n.protocol,
        domain: n.hostname,
        src: n.pathname.slice(1),
        search: n.search
      };
    } catch (e) {
      return u;
    }
  }
  function v(e) {
    if (e !== undefined) {
      return e.toLocaleLowerCase().indexOf("safari") >= 0 && e.toLocaleLowerCase().indexOf("chrome") < 0;
    } else {
      return typeof window != "undefined" && (e = ((e = (e = window.navigator) == null ? undefined : e.userAgent) != null ? e : "").toLocaleLowerCase()).indexOf("safari") >= 0 && e.indexOf("chrome") < 0;
    }
  }
  function b(e) {
    if (e !== undefined) {
      return e.toLocaleLowerCase().indexOf("firefox") >= 0;
    } else {
      return typeof window != "undefined" && ((e = (e = window.navigator) == null ? undefined : e.userAgent) != null ? e : "").toLocaleLowerCase().indexOf("firefox") >= 0;
    }
  }
  var y = typeof self != "undefined" && self.cancelIdleCallback || function (e) {
    return clearTimeout(e);
  };
  var x = typeof self != "undefined" && self.requestIdleCallback || function (e) {
    var t = Date.now();
    return setTimeout(function () {
      e({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - t));
        }
      });
    }, 1);
  };
  var w = typeof IntersectionObserver != "undefined";
  var A = new Map();
  var _ = [];
  function k(e) {
    var t;
    var n = {
      root: e.root || null,
      margin: e.rootMargin || ""
    };
    var i = _.find(function (e) {
      return e.root === n.root && e.margin === n.margin;
    });
    if (i) {
      return A.get(i);
    } else {
      t = new Map();
      e = {
        id: n,
        observer: i = new IntersectionObserver(function (e) {
          e.forEach(function (e) {
            var n = t.get(e.target);
            var e = e.isIntersecting || e.intersectionRatio > 0;
            if (n && e) {
              n(e);
            }
          });
        }, e),
        elements: t
      };
      _.push(n);
      A.set(n, e);
      return e;
    }
  }
  function S(e, t, n) {
    var n = k(n);
    var i = n.id;
    var r = n.observer;
    var o = n.elements;
    o.set(e, t);
    r.observe(e);
    return function () {
      var t;
      o.delete(e);
      r.unobserve(e);
      if (o.size === 0 && (r.disconnect(), A.delete(i), (t = _.findIndex(function (e) {
        return e.root === i.root && e.margin === i.margin;
      })) > -1)) {
        _.splice(t, 1);
      }
    };
  }
  function C(e) {
    var t = e.rootRef;
    var n = e.rootMargin;
    var r = e.disabled || !w;
    var o = reactCoreLibraryReexport.useRef();
    var e = reactCoreLibraryReexport.useState(false);
    var l = e[0];
    var a = e[1];
    var e = reactCoreLibraryReexport.useState(t ? t.current : null);
    var s = e[0];
    var c = e[1];
    reactCoreLibraryReexport.useEffect(function () {
      var e;
      if (!w && !l) {
        e = x(function () {
          return a(true);
        });
        return function () {
          return y(e);
        };
      }
    }, [l]);
    reactCoreLibraryReexport.useEffect(function () {
      if (t) {
        c(t.current);
      }
    }, [t]);
    var e = reactCoreLibraryReexport.useCallback(function (e) {
      if (o.current) {
        o.current();
        o.current = undefined;
      }
      if (!r && !l) {
        if (e && e.tagName) {
          o.current = S(e, function (e) {
            return e && a(e);
          }, {
            root: s,
            rootMargin: n
          });
        }
      }
    }, [r, s, n, l]);
    return [e, l, reactCoreLibraryReexport.useCallback(function () {
      a(false);
    }, [])];
  }
  var $ = {
    "imagex-type": "react",
    "imagex-version": "0.3.7"
  };
  var E = new Set();
  var R = typeof window == "undefined" ? reactCoreLibraryReexport.useEffect : reactCoreLibraryReexport.useLayoutEffect;
  function T(e, t, n, i, r, o) {
    var l;
    if (o) {
      return {
        widths: [0],
        kind: "x"
      };
    } else if (r) {
      return {
        widths: e,
        kind: "w"
      };
    } else if (n === "fill") {
      return {
        widths: Array.from(new Set([l = ((r = (o = i.current) == null ? undefined : o.parentElement) == null ? undefined : r.clientWidth) || 0, l * 2].map(function (t) {
          if (e.length > 0) {
            return e.find(function (e) {
              return t <= e;
            }) || e[e.length - 1];
          } else {
            return t;
          }
        }))),
        kind: "x"
      };
    } else if (n === "responsive") {
      return {
        widths: Array.from(new Set([n = Math.max((l = ((r = (o = i.current) == null ? undefined : o.parentElement) == null ? undefined : r.clientWidth) || 0) - (i = parseInt(((r = (o = (n = i.current) == null ? undefined : n.parentElement) == null ? undefined : o.style) == null ? undefined : r.paddingLeft) || "0") + parseInt(((r = (o = (n = i.current) == null ? undefined : n.parentElement) == null ? undefined : o.style) == null ? undefined : r.paddingRight) || "0")), 0), n * 2].map(function (t) {
          if (e.length > 0) {
            return e.find(function (e) {
              return t <= e;
            }) || e[e.length - 1];
          } else {
            return t;
          }
        }))),
        kind: "x"
      };
    } else if (t !== undefined) {
      return {
        widths: Array.from(new Set([t, t * 2].map(function (t) {
          if (e.length > 0) {
            return e.find(function (e) {
              return t <= e;
            }) || e[e.length - 1];
          } else {
            return t;
          }
        }))),
        kind: "x"
      };
    } else {
      return {
        widths: [0],
        kind: "x"
      };
    }
  }
  function N(e, t, n, i) {
    var r;
    if (!!e && ((r = e.src) == null || !r.startsWith("data:image")) && e["loaded-src"] !== e.src) {
      e["loaded-src"] = e.src;
      ("decode" in e ? e.decode() : Promise.resolve()).catch(function () {}).then(function () {
        var r;
        var o;
        if (e.parentNode && (E.add(e.src), n !== "empty" && t(true), i != null) && i.current) {
          r = e.naturalWidth;
          o = e.naturalHeight;
          i.current({
            naturalWidth: r,
            naturalHeight: o
          });
        }
      });
    }
  }
  function j(e) {
    var t;
    var n;
    var i;
    var r;
    var o;
    var l;
    var a;
    var s;
    var c;
    var d;
    var u;
    var p;
    var h;
    var v;
    var b;
    var y;
    var x;
    var w;
    var A = e.src;
    var _ = e.unoptimized;
    var k = e.layout;
    var S = e.quality;
    var C = e.sizes;
    var $ = e.loader;
    var E = e.imageSizes;
    var R = e.format;
    var N = R === undefined ? "image" : R;
    var R = e.width;
    var j = e.wrapperElement;
    var e = e.ssr;
    if (A) {
      if (_) {
        return {
          src: A
        };
      } else {
        E = (_ = T(E, R, k, j, C, e)).widths;
        t = _.kind;
        if (m.test(A)) {
          n = (R = f(A)).src;
          i = R.protocol;
          r = R.domain;
          o = R.suffix;
          l = R.template;
          a = R.search;
          s = R.templateWithoutParams;
          c = R.params;
          if (E.length <= 1) {
            return {
              srcSet: x = $({
                src: n,
                width: E[0] || 0,
                quality: S,
                format: N,
                extra: {
                  suffix: o,
                  template: l,
                  templateWithoutParams: s,
                  params: c,
                  search: a,
                  protocol: i,
                  domain: r,
                  origin: A
                }
              }),
              src: x
            };
          } else {
            d = E.map(function (e) {
              return $({
                src: n,
                width: e,
                quality: S,
                format: N,
                extra: {
                  suffix: o,
                  template: l,
                  templateWithoutParams: s,
                  params: c,
                  search: a,
                  protocol: i,
                  domain: r,
                  origin: A
                }
              });
            });
            return {
              srcSet: E.map(function (e, n) {
                return `${d[n]} ${t === "w" ? e : n + 1}${t}`;
              }).join(", "),
              sizes: t === "w" ? C : undefined,
              src: d[d.length - 1]
            };
          }
        } else if (A.startsWith("tos://") || A.startsWith("TOS://")) {
          u = A.slice(6);
          if (E.length <= 1) {
            return {
              srcSet: x = $({
                src: u,
                width: E[0] || 0,
                quality: S,
                format: N,
                extra: {
                  origin: A
                }
              }),
              src: x
            };
          } else {
            p = E.map(function (e) {
              return $({
                src: u,
                width: e,
                quality: S,
                format: N,
                extra: {
                  origin: A
                }
              });
            });
            return {
              srcSet: E.map(function (e, n) {
                return `${p[n]} ${t === "w" ? e : n + 1}${t}`;
              }).join(", "),
              sizes: t === "w" ? C : undefined,
              src: p[p.length - 1]
            };
          }
        } else {
          h = (k = g(A)).src;
          v = k.protocol;
          b = k.domain;
          y = k.search;
          if (E.length <= 1) {
            return {
              srcSet: x = $({
                src: h,
                width: E[0] || 0,
                quality: S,
                format: N,
                extra: {
                  protocol: v,
                  domain: b,
                  search: y,
                  origin: A
                }
              }),
              src: x
            };
          } else {
            w = E.map(function (e) {
              return $({
                src: h,
                width: e,
                quality: S,
                format: N,
                extra: {
                  protocol: v,
                  domain: b,
                  search: y,
                  origin: A
                }
              });
            });
            return {
              srcSet: E.map(function (e, n) {
                return `${w[n]} ${t === "w" ? e : n + 1}${t}`;
              }).join(", "),
              sizes: t === "w" ? C : undefined,
              src: w[w.length - 1]
            };
          }
        }
      }
    } else {
      return {
        src: ""
      };
    }
  }
  var I = {};
  function Z(e) {
    var t = e.imgStyle;
    var n = e.errorDataURL;
    var r = e.alt;
    var e = e.error;
    if (e) {
      return reactCoreLibraryReexport.createElement("div", {
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }
      }, e);
    } else {
      return reactCoreLibraryReexport.createElement("div", {
        style: o(o({}, t || {}), {
          color: "#C9CDD4",
          backgroundColor: "#F7F8FA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        })
      }, reactCoreLibraryReexport.createElement("div", {
        style: {
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          lineHeight: 0,
          fontSize: 0,
          textAlign: "center"
        }
      }, reactCoreLibraryReexport.createElement("img", {
        style: {
          maxWidth: "60%",
          verticalAlign: "middle"
        },
        src: n || "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBzdHJva2U9IiNDOUNERDQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgc3Ryb2tlLXdpZHRoPSI0IiB2aWV3Qm94PSIwIDAgNDggNDgiIGFyaWEtaGlkZGVuPSJ0cnVlIiBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNDEgMjZWOWEyIDIgMCAwIDAtMi0ySDlhMiAyIDAgMCAwLTIgMnYzMGEyIDIgMCAwIDAgMiAyaDE3Ij48L3BhdGg+PHBhdGggZD0ibTI0IDMzIDktOC41VjI3cy0yIDEtMy41IDIuNUMyNy44NDEgMzEuMTU5IDI3IDMzIDI3IDMzaC0zWm0wIDAtMy41LTQuNUwxNyAzM2g3WiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNDOUNERDQiIHN0cm9rZT0ibm9uZSIgZD0iTTIwLjUgMjguNSAxNyAzM2g3bC0zLjUtNC41Wk0zMyAyNC41IDI0IDMzaDNzLjg0MS0xLjg0MSAyLjUtMy41QzMxIDI4IDMzIDI3IDMzIDI3di0yLjVaIj48L3BhdGg+PHBhdGggZmlsbD0iI0M5Q0RENCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIGQ9Ik00NiAzOGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTQuOTUtNC43ODIgMS43NCAxLjc0LTMuMDQ1IDMuMDQ2IDMuMDQ2IDMuMDQ2LTEuNzQgMS43NC0zLjA0Ny0zLjA0NS0zLjA0NiAzLjA0Ni0xLjc0LTEuNzQgMy4wNDYtMy4wNDctMy4wNDYtMy4wNDYgMS43NC0xLjc0IDMuMDQ2IDMuMDQ2IDMuMDQ2LTMuMDQ2WiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZD0iTTE3IDE1aC0ydjJoMnYtMloiPjwvcGF0aD48L3N2Zz4="
      })), r && reactCoreLibraryReexport.createElement("div", {
        style: {
          fontSize: "12px",
          lineHeight: 1.667,
          textAlign: "center",
          padding: "8px 16px",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, r));
    }
  }
  function O(e) {
    function t(e) {
      var t = e.format || "image";
      X.current[t] ||= j(e);
      return X.current[t];
    }
    var n;
    var r = e.formats;
    var a = e.src;
    var s = e.srcString;
    var c = e.unoptimized;
    var u = e.layout;
    var p = e.loader;
    var h = e.imageSizes;
    var m = e.quality;
    var f = m === undefined ? 75 : m;
    var g = e.sizes;
    var m = e.placeholderStyle;
    var y = e.imgStyle;
    var x = e.isVisible;
    var w = e.width;
    var A = e.height;
    var _ = e.setPlaceholderComplete;
    var k = e.placeholder;
    var S = e.setTarget;
    var C = e.onLoadingCompleteRef;
    var E = e.onLoad;
    var R = e.onError;
    var T = e.wrapperElement;
    var I = e.errorDataURL;
    var O = e.error;
    var P = e.supportWebP;
    var M = e.supportAVIF;
    var W = e.ssr;
    var F = e.ua;
    var L = l(e, ["formats", "src", "srcString", "unoptimized", "layout", "loader", "imageSizes", "quality", "sizes", "placeholderStyle", "imgStyle", "isVisible", "width", "height", "setPlaceholderComplete", "placeholder", "setTarget", "onLoadingCompleteRef", "onLoad", "onError", "wrapperElement", "errorDataURL", "error", "supportWebP", "supportAVIF", "ssr", "ua"]);
    var D = reactCoreLibraryReexport.useState(false);
    var z = D[0];
    var B = D[1];
    var X = reactCoreLibraryReexport.useRef({});
    reactCoreLibraryReexport.useEffect(function () {
      X.current = {};
    }, [s, c, u, f, g, p, h, w, T]);
    var D = reactCoreLibraryReexport.useCallback(function (e) {
      S(e);
      if (e != null && e.complete) {
        N(e, _, k, C);
      }
    }, [_, k, S, C]);
    if (c) {
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("img", o({}, L, {
        ref: D,
        decoding: "async",
        style: o(o({}, y), m),
        width: w,
        height: A
      }, x ? t({
        src: s,
        unoptimized: c,
        width: w,
        height: A,
        layout: u,
        loader: p,
        imageSizes: h,
        quality: f,
        sizes: g,
        wrapperElement: T
      }) : {
        src: a
      }, {
        onLoad: function (e) {
          B(false);
          N(e.currentTarget, _, k, C);
          if (E) {
            E(e);
          }
        },
        onError: function (e) {
          if (s) {
            if (k !== "empty") {
              _(true);
            }
            B(true);
          }
          if (R) {
            R(e);
          }
        }
      }, $)), z && u !== "raw" && Z({
        imgStyle: y,
        alt: e.alt,
        errorDataURL: I,
        error: O
      }));
    } else if (s) {
      n = r || [];
      if (b(F)) {
        n = n.filter(function (e) {
          return e !== "avif" || !W && M;
        });
      }
      if (W) {
        if (v(F) || F === "empty") {
          return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement("img", o({}, L, {
            ref: D,
            decoding: "async",
            style: o(o({}, y), m),
            width: w,
            height: A,
            src: t({
              src: s,
              unoptimized: c,
              width: w,
              height: A,
              layout: u,
              loader: p,
              imageSizes: h,
              quality: f,
              sizes: g,
              wrapperElement: T,
              ssr: W
            }).src,
            onLoad: function (e) {
              B(false);
              N(e.currentTarget, _, k, C);
              if (E) {
                E(e);
              }
            },
            onError: function (e) {
              if (s) {
                if (k !== "empty") {
                  _(true);
                }
                B(true);
              }
              if (R) {
                R(e);
              }
            }
          }, $)), z && u !== "raw" && Z({
            imgStyle: y,
            alt: e.alt,
            errorDataURL: I,
            error: O
          }));
        } else {
          return reactCoreLibraryReexport.createElement("picture", null, Array.isArray(n) && (n == null ? undefined : n.length) > 0 && n.map(function (e) {
            return reactCoreLibraryReexport.createElement("source", {
              key: e,
              type: `image/${e}`,
              srcSet: t({
                src: s,
                unoptimized: c,
                width: w,
                height: A,
                layout: u,
                loader: p,
                imageSizes: h,
                format: d[e],
                quality: f,
                sizes: g,
                wrapperElement: T,
                ssr: W
              }).srcSet
            });
          }), reactCoreLibraryReexport.createElement("img", o({}, L, {
            ref: D,
            decoding: "async",
            style: o(o({}, y), m),
            width: w,
            height: A
          }, t({
            src: s,
            unoptimized: c,
            width: w,
            height: A,
            layout: u,
            loader: p,
            imageSizes: h,
            quality: f,
            sizes: g,
            wrapperElement: T,
            ssr: W
          }), {
            onLoad: function (e) {
              B(false);
              N(e.currentTarget, _, k, C);
              if (E) {
                E(e);
              }
            },
            onError: function (e) {
              if (s) {
                if (k !== "empty") {
                  _(true);
                }
                B(true);
              }
              if (R) {
                R(e);
              }
            }
          }, $)));
        }
      } else {
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, v() ? reactCoreLibraryReexport.createElement("img", o({}, L, {
          ref: D,
          decoding: "async",
          style: o(o({}, y), m),
          width: w,
          height: A
        }, x ? t({
          src: s,
          unoptimized: c,
          width: w,
          height: A,
          layout: u,
          loader: p,
          imageSizes: h,
          quality: f,
          sizes: g,
          wrapperElement: T,
          format: r != null && r.includes("webp") && P ? d.webp : undefined
        }) : {
          src: a
        }, {
          onLoad: function (e) {
            B(false);
            N(e.currentTarget, _, k, C);
            if (E) {
              E(e);
            }
          },
          onError: function (e) {
            if (s) {
              if (k !== "empty") {
                _(true);
              }
              B(true);
            }
            if (R) {
              R(e);
            }
          }
        }, $)) : reactCoreLibraryReexport.createElement("picture", null, x && Array.isArray(n) && (n == null ? undefined : n.length) > 0 && n.map(function (e) {
          return reactCoreLibraryReexport.createElement("source", o({
            key: e,
            type: `image/${e}`
          }, t({
            src: s,
            unoptimized: c,
            width: w,
            height: A,
            layout: u,
            loader: p,
            imageSizes: h,
            format: d[e],
            quality: f,
            sizes: g,
            wrapperElement: T
          })));
        }), reactCoreLibraryReexport.createElement("img", o({}, L, {
          ref: D,
          decoding: "async",
          style: o(o({}, y), m),
          width: w,
          height: A
        }, x ? t({
          src: s,
          unoptimized: c,
          width: w,
          height: A,
          layout: u,
          loader: p,
          imageSizes: h,
          quality: f,
          sizes: g,
          wrapperElement: T
        }) : {
          src: a
        }, {
          onLoad: function (e) {
            B(false);
            N(e.currentTarget, _, k, C);
            if (E) {
              E(e);
            }
          },
          onError: function (e) {
            if (s) {
              if (k !== "empty") {
                _(true);
              }
              B(true);
            }
            if (R) {
              R(e);
            }
          }
        }, $))), z && u !== "raw" && Z({
          imgStyle: y,
          alt: e.alt,
          errorDataURL: I,
          error: O
        }));
      }
    } else {
      return reactCoreLibraryReexport.createElement("img", o({}, L, {
        style: o(o({}, y), m),
        width: w,
        height: A,
        src: a
      }, $));
    }
  }
  function P(e) {
    return e.src;
  }
  function M(e) {
    var t;
    var n;
    var d;
    var u;
    var p;
    var m = reactCoreLibraryReexport.useState(false);
    var f = m[0];
    var m = m[1];
    var g = reactCoreLibraryReexport.useRef(null);
    var y = reactCoreLibraryReexport.useState(undefined);
    var x = y[0];
    var w = y[1];
    var y = reactCoreLibraryReexport.useState(undefined);
    var A = y[0];
    var _ = y[1];
    var y = e.width !== undefined && e.height !== undefined ? `data:image/svg+xml;base64,${n = `<svg width="${e.width}" height="${e.height}" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>`, typeof btoa != "undefined" ? btoa(n) : r !== undefined ? r.from(n, "base64").toString() : ""}` : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    reactCoreLibraryReexport.useEffect(function () {
      a(undefined, undefined, undefined, function () {
        var e;
        return s(this, function (t) {
          switch (t.label) {
            case 0:
              if (v()) {
                e = w;
                return [4, new Promise(function (e) {
                  var t;
                  if (typeof window == "undefined") {
                    e(false);
                  }
                  if (window.__support_webp__ !== undefined) {
                    e(!!window.__support_webp__);
                  } else {
                    (t = new Image()).onload = function () {
                      window.__support_webp__ = (t == null ? undefined : t.height) === 160;
                      e((t == null ? undefined : t.height) === 160);
                    };
                    t.onerror = function () {
                      window.__support_webp__ = false;
                      e(false);
                    };
                    t.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvn8AnAAdQiUpUov+BiOh/AAA=";
                  }
                })];
              } else {
                return [3, 2];
              }
            case 1:
              e.apply(undefined, [t.sent()]);
              t.label = 2;
            case 2:
              return [2];
          }
        });
      }).catch(console.error);
      a(undefined, undefined, undefined, function () {
        var e;
        return s(this, function (t) {
          switch (t.label) {
            case 0:
              if (b()) {
                e = _;
                return [4, new Promise(function (e) {
                  var t;
                  if (typeof window == "undefined") {
                    e(false);
                  }
                  if (window.__support_avif__ !== undefined) {
                    e(!!window.__support_avif__);
                  } else {
                    (t = new Image()).onload = function () {
                      window.__support_avif__ = (t == null ? undefined : t.width) === 1;
                      e((t == null ? undefined : t.width) === 1);
                    };
                    t.onerror = function () {
                      window.__support_avif__ = false;
                      e(false);
                    };
                    t.src = "data:image/avif;base64,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";
                  }
                })];
              } else {
                return [3, 2];
              }
            case 1:
              e.apply(undefined, [t.sent()]);
              t.label = 2;
            case 2:
              return [2];
          }
        });
      }).catch(console.error);
    }, []);
    d = o(o(o({}, c), I), e);
    var e = o(o({}, d || {}), {
      formats: Array.isArray(d.formats) ? Array.from(new Set(d.formats)) : undefined
    });
    var k = e.lazyBoundary;
    var S = e.lazyRoot;
    var $ = e.onLoadingComplete;
    var T = e.unoptimized;
    var T = T !== undefined && T;
    var N = e.src;
    var j = N === undefined ? "" : N;
    var N = e.objectFit;
    var Z = e.objectPosition;
    var M = l(e, ["lazyBoundary", "lazyRoot", "onLoadingComplete", "unoptimized", "src", "objectFit", "objectPosition"]);
    var W = typeof (t = u = e.src) == "object" && (h(t) || t.src !== undefined) ? (h(u) ? u.default : u).src : u;
    var j = typeof j == "string" ? j : W;
    var F = e.loading === "lazy" || e.loading === undefined;
    if (j.startsWith("data:") || j.startsWith("blob:")) {
      T = true;
      F = false;
    }
    if (typeof window != "undefined" && E.has(j)) {
      F = false;
    }
    if (e.ssr) {
      F = false;
    }
    var S = C({
      rootRef: S || null,
      rootMargin: k,
      disabled: !F
    });
    var k = S[0];
    var L = S[1];
    var D = S[2];
    var S = !!e.ssr || (!F || L) && !!j && (!v() || x !== undefined) && (!b() || A !== undefined);
    var z = reactCoreLibraryReexport.useRef($);
    reactCoreLibraryReexport.useEffect(function () {
      z.current = $;
    }, [$]);
    var B = reactCoreLibraryReexport.useRef(j);
    R(function () {
      if (B.current !== j) {
        D();
        B.current = j;
      }
    }, [D, j]);
    var F = e.layout || (e.sizes ? "responsive" : "intrinsic");
    var L = {
      boxSizing: "border-box",
      display: "block",
      overflow: "hidden",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0
    };
    var X = {
      boxSizing: "border-box",
      display: "block",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0
    };
    var H = e.layout === "raw" ? {} : {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: "border-box",
      padding: 0,
      border: "none",
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      minWidth: "100%",
      maxWidth: "100%",
      minHeight: "100%",
      maxHeight: "100%",
      objectFit: N,
      objectPosition: Z
    };
    var f = e.placeholder === "empty" || f ? {} : {
      filter: "blur(20px)",
      backgroundSize: N || "cover",
      backgroundImage: `url("${e.placeholder === "skeleton" ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwLDAsMjAlLDEwMCUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjJGM0Y1IiBvZmZzZXQ9IjI1JSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U1RTZFQiIgb2Zmc2V0PSIzNyUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMkYzRjUiIG9mZnNldD0iNjMlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI0MDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZykiIC8+CiAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0zMDAlIiB0bz0iMCUiIGR1cj0iMS41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiICAvPgo8L3N2Zz4=" : e.placeholder}")`,
      backgroundPosition: Z || "0% 0%"
    };
    var N = false;
    if (F === "fill") {
      L.display = "block";
      L.position = "absolute";
      L.top = 0;
      L.left = 0;
      L.bottom = 0;
      L.right = 0;
    } else if (e.width !== undefined && e.height !== undefined) {
      if (F === "intrinsic") {
        L.display = "inline-block";
        L.position = "relative";
        N = true;
        X.maxWidth = L.maxWidth = "100%";
        p = `data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27${e.width}%27%20height=%27${e.height}%27/%3e`;
      } else if (F === "responsive") {
        Z = isNaN(Z = e.height / e.width) ? "100%" : `${Z * 100}%`;
        L.display = "block";
        L.position = "relative";
        N = true;
        X.paddingTop = Z;
      } else if (F === "fixed") {
        L.display = "inline-block";
        L.position = "relative";
        L.width = e.width;
        L.height = e.height;
      }
    }
    var Z = o(o({}, M), {
      src: y,
      srcString: W,
      loader: e.loader || P,
      imageSizes: e.imageSizes,
      placeholderStyle: f,
      isVisible: S,
      unoptimized: T,
      setPlaceholderComplete: m,
      setTarget: k,
      imgStyle: Object.assign({}, e.style, H),
      onLoadingCompleteRef: z,
      wrapperElement: g,
      supportWebP: x,
      supportAVIF: A
    });
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e.layout === "raw" ? reactCoreLibraryReexport.createElement(O, o({}, Z)) : reactCoreLibraryReexport.createElement("span", {
      ref: g,
      style: L
    }, N && reactCoreLibraryReexport.createElement("span", {
      style: X
    }, p && reactCoreLibraryReexport.createElement("img", {
      style: {
        display: "block",
        maxWidth: "100%",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
      },
      alt: "",
      "aria-hidden": true,
      src: p
    })), reactCoreLibraryReexport.createElement(O, o({}, Z))));
  }
  require.d(exports, {
    OptimizedImage: function () {
      return M;
    }
  });
}