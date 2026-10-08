// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GO' to 'getFocusableEls'
// - Renamed export 'Tq' to 'asyncDelayLoop'
// - Renamed export 'Xh' to 'safeDeepClone'
// - Renamed export 'UW' to 'stopEventProp'
// - Renamed export 'GW' to 'configProxyHandler'
// - Renamed export 'J2' to 'highlightSearchText'
// - Renamed export 'np' to 'getScrollbarWidth'
// - Renamed export 'ql' to 'matchMediaHandler'
// - Renamed export 'vY' to 'getActiveElement'
// - Renamed export 'ID' to 'isIconElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 264233
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var deepCloneWrapper_2 = require("deep-clone-wrapper_2") /*id: 251504*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var pageNoopHandler = require("page-noop-handler") /*id: 73359*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let u = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  let c = e => {
    let {
      autoEscape: t,
      caseSensitive: n,
      searchWords: i,
      sourceString: r
    } = e;
    return i.filter(e => e).reduce((e, i) => {
      let s;
      if (t) {
        i = u(i);
      }
      let a = new RegExp(i, n ? "g" : "gi");
      while (s = a.exec(r)) {
        let t = s.index;
        let n = a.lastIndex;
        if (n > t) {
          e.push({
            highlight: false,
            start: t,
            end: n
          });
        }
        if (s.index === a.lastIndex) {
          a.lastIndex++;
        }
      }
      return e;
    }, []);
  };
  let d = e => {
    let {
      chunks: t
    } = e;
    return t.sort((e, t) => e.start - t.start).reduce((e, t) => {
      if (e.length === 0) {
        return [t];
      }
      {
        let n = e.pop();
        if (t.start <= n.end) {
          let i = Math.max(n.end, t.end);
          e.push({
            highlight: false,
            start: n.start,
            end: i
          });
        } else {
          e.push(n, t);
        }
        return e;
      }
    }, []);
  };
  let f = e => {
    let {
      chunksToHighlight: t,
      totalLength: n
    } = e;
    let i = [];
    let r = (e, t, n) => {
      if (t - e > 0) {
        i.push({
          start: e,
          end: t,
          highlight: n
        });
      }
    };
    if (t.length === 0) {
      r(0, n, false);
    } else {
      let e = 0;
      t.forEach(t => {
        r(e, t.start, false);
        r(t.start, t.end, true);
        e = t.end;
      });
      r(e, n, false);
    }
    return i;
  };
  let h = e => {
    let {
      autoEscape: t = true,
      caseSensitive: n = false,
      searchWords: i,
      sourceString: r
    } = e;
    if (isStringTypeCheck.isString(i)) {
      i = [i];
    }
    return f({
      chunksToHighlight: d({
        chunks: c({
          autoEscape: t,
          caseSensitive: n,
          searchWords: i,
          sourceString: r
        })
      }),
      totalLength: r ? r.length : 0
    });
  };
  var isHtmlElementCheck = require("is-html-element-check") /*id: 287357*/;
  var m = new class {
    constructor() {
      this.config = {};
    }
  }();
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  function _(e, t, n, i) {
    return new (n ||= Promise)(function (r, s) {
      function a(e) {
        try {
          l(i.next(e));
        } catch (e) {
          s(e);
        }
      }
      function o(e) {
        try {
          l(i.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function l(e) {
        var t;
        if (e.done) {
          r(e.value);
        } else {
          ((t = e.value) instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, o);
        }
      }
      l((i = i.apply(e, t || [])).next());
    });
  }
  function v(e, t) {
    if (e && typeof e.stopPropagation == "function") {
      e.stopPropagation();
    }
    if (!t && e.nativeEvent && typeof e.nativeEvent.stopImmediatePropagation == "function") {
      e.nativeEvent.stopImmediatePropagation();
    }
  }
  function y(e, t) {
    return deepCloneWrapper_2.deepClone(e, e => {
      if (typeof t == "function") {
        return t(e);
      }
      if (typeof e == "function" || reactCoreLibraryReexport.isValidElement(e) || Object.prototype.toString.call(e) === "[object Error]") {
        return e;
      }
      if (Array.isArray(e) && e.length === 0) {
        let t = Object.keys(e);
        if (t.length) {
          let n = [];
          t.forEach(t => {
            safeObjectSetWrapper.safeObjectSet(n, t, e[t]);
          });
          try {
            pageNoopHandler.noopHandler(objectPathGetDefault.getObjectPathDefault(processBrowserShim, "env.NODE_ENV") !== "production", `[Semi] You may use an out-of-bounds array. In some cases, your program may not behave as expected.
                    The maximum length of an array is 4294967295.
                    Please check whether the array subscript in your data exceeds the maximum value of the JS array subscript`);
          } catch (e) {}
          return n;
        }
      }
    });
  }
  let S = e => {
    let {
      sourceString: t = "",
      searchWords: n = [],
      option: i = {
        autoEscape: true,
        caseSensitive: false
      }
    } = e;
    let r = h(Object.assign({
      sourceString: t,
      searchWords: n
    }, i));
    let s = i.highlightTag || "mark";
    let o = i.highlightClassName || "";
    let l = i.highlightStyle || {};
    return r.map((e, n) => {
      let {
        end: i,
        start: r,
        highlight: u
      } = e;
      let c = t.substr(r, i - r);
      if (u) {
        return reactCoreLibraryReexport.createElement(s, {
          style: l,
          className: o,
          key: c + n
        }, c);
      } else {
        return c;
      }
    });
  };
  let b = (e, t) => {
    let {
      match: n,
      unmatch: i,
      callInInit: r = true
    } = t;
    if (typeof window != "undefined") {
      let t = window.matchMedia(e);
      function s(e) {
        if (e.matches) {
          if (n) {
            n(e);
          }
        } else if (i) {
          i(e);
        }
      }
      if (r) {
        s(t);
      }
      if (Object.prototype.hasOwnProperty.call(t, "addEventListener")) {
        t.addEventListener("change", s);
        return () => t.removeEventListener("change", s);
      } else {
        t.addListener(s);
        return () => t.removeListener(s);
      }
    }
    return () => undefined;
  };
  let E = e => reactCoreLibraryReexport.isValidElement(e) && objectPathGetDefault.getObjectPathDefault(e.type, "elementType") === "Icon";
  function w() {
    if (document) {
      return document.activeElement;
    } else {
      return null;
    }
  }
  function T(e) {
    if (isHtmlElementCheck.isHtmlElement(e)) {
      return Array.from(e.querySelectorAll("input:not([disabled]):not([tabindex='-1']),textarea:not([disabled]):not([tabindex='-1']),button:not([disabled]):not([tabindex='-1']),a[href]:not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),area[href]:not([tabindex='-1']),iframe:not([tabindex='-1']),object:not([tabindex='-1']),*[tabindex]:not([tabindex='-1']),*[contenteditable]:not([tabindex='-1'])"));
    } else {
      return [];
    }
  }
  function k() {
    if (globalThis && Object.prototype.toString.call(globalThis) === "[object Window]") {
      return window.innerWidth - document.documentElement.clientWidth;
    } else {
      return 0;
    }
  }
  function O(e, t = {}) {
    let n = () => {
      return (m == null ? undefined : m.config)?.overrideDefaultProps?.[e] || {};
    };
    return new Proxy(Object.assign({}, t), {
      get(e, t, i) {
        let r = n();
        if (t in r) {
          return r[t];
        } else {
          return Reflect.get(e, t, i);
        }
      },
      set: (e, t, n, i) => Reflect.set(e, t, n, i),
      ownKeys() {
        let e = n();
        return Array.from(new Set([...Reflect.ownKeys(t), ...Object.keys(e)]));
      },
      getOwnPropertyDescriptor(e, t) {
        let i = n();
        if (t in i) {
          return Reflect.getOwnPropertyDescriptor(i, t);
        } else {
          return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }
    });
  }
  require.d(exports, {
    getFocusableEls: function () {
      return T;
    },
    asyncDelayLoop: function () {
      return function e(t, n) {
        return _(this, undefined, undefined, function* () {
          if (n === 0) {
            yield t();
            return;
          }
          yield new Promise(i => {
            setTimeout(() => _(this, undefined, undefined, function* () {
              yield e(t, n - 1);
              i();
            }), 0);
          });
        });
      };
    },
    safeDeepClone: function () {
      return y;
    },
    stopEventProp: function () {
      return v;
    },
    configProxyHandler: function () {
      return O;
    },
    highlightSearchText: function () {
      return S;
    },
    getScrollbarWidth: function () {
      return k;
    },
    matchMediaHandler: function () {
      return b;
    },
    getActiveElement: function () {
      return w;
    },
    isIconElement: function () {
      return E;
    }
  });
}